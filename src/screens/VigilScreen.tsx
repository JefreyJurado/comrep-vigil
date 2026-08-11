import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { contentMaxWidth, fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import { flatSteps } from '../content';
import { SectionRenderer } from '../components/SectionRenderer';
import { saveProgress } from '../utils/progress';
import { loadKeepScreenAwake, loadTextSize, TEXT_SIZE_SCALES } from '../utils/settings';
import { loadIntention, clearIntention, archiveIntention } from '../utils/intention';
import { computeStreak, recordVigilCompletion } from '../utils/vigilStats';

const KEEP_AWAKE_TAG = 'vigil-screen';
const FADE_DURATION_MS = 220;

function toIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Vigil'>;

export function VigilScreen({ route, navigation }: Props) {
  const { colors } = useTheme();
  const { t } = useLanguage();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [index, setIndex] = useState(route.params.startIndex);
  const [textScale, setTextScale] = useState(TEXT_SIZE_SCALES.medium);
  const [intention, setIntention] = useState<string | null>(null);
  const [completion, setCompletion] = useState<{ count: number; streak: number; intention: string | null } | null>(
    null
  );
  const completionOpacity = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const step = flatSteps[index];
  const isFirst = index === 0;
  const isLast = index === flatSteps.length - 1;

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadTextSize().then((size) => {
        if (active) setTextScale(TEXT_SIZE_SCALES[size]);
      });
      loadIntention().then((stored) => {
        if (active) setIntention(stored);
      });
      return () => {
        active = false;
      };
    }, [])
  );

  useEffect(() => {
    // route.params.startIndex only drives the initial index on mount; this
    // syncs later jumps too, since navigating here from the Contents screen
    // reuses this same mounted instance rather than remounting it.
    setIndex(route.params.startIndex);
  }, [route.params.startIndex]);

  useEffect(() => {
    navigation.setOptions({
      title: step.partTitle,
      headerRight: () => (
        <View style={styles.headerRightRow}>
          <Pressable
            onPress={() => navigation.navigate('TableOfContents')}
            hitSlop={10}
            accessibilityLabel={t('vigil.jumpToSection')}
          >
            <Ionicons name="book-outline" size={20} color={colors.textMuted} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Settings')} hitSlop={10} accessibilityLabel={t('common.settings')}>
            <Ionicons name="settings-outline" size={20} color={colors.textMuted} />
          </Pressable>
        </View>
      ),
    });
    saveProgress(step.section.id);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: FADE_DURATION_MS,
      useNativeDriver: false,
    }).start();
  }, [index, colors, t]);

  useEffect(() => {
    let cancelled = false;
    loadKeepScreenAwake().then((enabled) => {
      if (!cancelled && enabled) activateKeepAwakeAsync(KEEP_AWAKE_TAG);
    });
    return () => {
      cancelled = true;
      deactivateKeepAwake(KEEP_AWAKE_TAG);
    };
  }, []);

  const goNext = () => setIndex((i) => Math.min(i + 1, flatSteps.length - 1));
  const goPrev = () => setIndex((i) => Math.max(i - 1, 0));

  const onFinish = async () => {
    const today = toIsoDate(new Date());
    if (intention) archiveIntention(intention, today);
    const completions = await recordVigilCompletion(today);
    clearIntention();
    setCompletion({ count: completions.length, streak: computeStreak(completions), intention });
    completionOpacity.setValue(0);
    Animated.timing(completionOpacity, { toValue: 1, duration: 260, useNativeDriver: false }).start();
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${((index + 1) / flatSteps.length) * 100}%` }]} />
      </View>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={[styles.content, step.section.centerContent && styles.contentCentered]}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          <SectionRenderer section={step.section} scale={textScale} intention={intention} />
        </Animated.View>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable
          onPress={goPrev}
          disabled={isFirst}
          style={[styles.arrowButton, styles.secondaryButton, styles.shadow, isFirst && styles.disabledButton]}
          accessibilityLabel={t('vigil.previous')}
        >
          <Ionicons name="chevron-back" size={20} color={isFirst ? colors.textMuted : colors.accent} />
        </Pressable>
        {isLast ? (
          <Pressable onPress={onFinish} style={[styles.finishButton, styles.primaryButton, styles.shadow]}>
            <Text style={styles.primaryButtonText}>{t('vigil.finish')}</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={goNext}
            style={[styles.arrowButton, styles.primaryButton, styles.shadow]}
            accessibilityLabel={t('vigil.next')}
          >
            <Ionicons name="chevron-forward" size={20} color={colors.onAccent} />
          </Pressable>
        )}
      </View>
      {completion && (
        <Animated.View style={[styles.completionOverlay, { opacity: completionOpacity }]}>
          <View style={styles.completionCard}>
            <View style={styles.completionIconWrap}>
              <MaterialCommunityIcons name="hands-pray" size={30} color={colors.onAccent} />
            </View>
            <Text style={styles.completionTitle}>{t('vigil.complete')}</Text>
            <Text style={styles.completionMessage}>{t('vigil.completeMessage')}</Text>
            {completion.intention ? (
              <Text style={styles.completionIntention}>
                {t('vigil.intentionOffered', { intention: completion.intention })}
              </Text>
            ) : null}
            <Text style={styles.completionStats}>
              {t('vigil.vigilNumber', { count: completion.count })}
              {completion.streak > 1 ? t('vigil.streakSuffix', { streak: completion.streak }) : ''}
            </Text>
            <Pressable
              style={styles.completionButton}
              onPress={() => {
                setCompletion(null);
                navigation.popToTop();
              }}
            >
              <Text style={styles.completionButtonText}>{t('vigil.returnHome')}</Text>
            </Pressable>
          </View>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    progressBar: {
      height: 3,
      backgroundColor: colors.border,
    },
    progressFill: {
      height: 3,
      backgroundColor: colors.accent,
    },
    content: {
      width: '100%',
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
      padding: spacing.lg,
      paddingBottom: spacing.xl,
    },
    contentCentered: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    headerRightRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.md,
      marginRight: spacing.md,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: spacing.lg,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      backgroundColor: colors.background,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 5,
      elevation: 3,
    },
    arrowButton: {
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
    },
    finishButton: {
      borderRadius: radii.md,
      paddingVertical: spacing.xs + 4,
      paddingHorizontal: spacing.xl,
      alignItems: 'center',
    },
    primaryButton: {
      backgroundColor: colors.accent,
    },
    primaryButtonText: {
      fontFamily: fonts.bodySemiBold,
      color: colors.onAccent,
      fontSize: 16,
    },
    secondaryButton: {
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.gold,
    },
    disabledButton: {
      opacity: 0.4,
      shadowOpacity: 0,
      elevation: 0,
    },
    completionOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.45)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing.lg,
    },
    completionCard: {
      width: '100%',
      maxWidth: 380,
      backgroundColor: colors.surface,
      borderRadius: radii.lg,
      padding: spacing.xl,
      alignItems: 'center',
      gap: spacing.sm,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.25,
      shadowRadius: 16,
      elevation: 8,
    },
    completionIconWrap: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: colors.accent,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: spacing.xs,
    },
    completionTitle: {
      fontFamily: fonts.displaySemiBold,
      fontSize: 22,
      color: colors.text,
      textAlign: 'center',
    },
    completionMessage: {
      fontFamily: fonts.body,
      fontSize: 16,
      color: colors.text,
      textAlign: 'center',
      lineHeight: 22,
    },
    completionIntention: {
      fontFamily: fonts.italic,
      fontSize: 15,
      color: colors.textMuted,
      textAlign: 'center',
    },
    completionStats: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 14,
      color: colors.gold,
      textAlign: 'center',
      marginTop: spacing.xs,
    },
    completionButton: {
      marginTop: spacing.md,
      width: '100%',
      alignItems: 'center',
      backgroundColor: colors.accent,
      borderRadius: radii.md,
      paddingVertical: spacing.sm + 2,
      paddingHorizontal: spacing.xl,
    },
    completionButtonText: {
      fontFamily: fonts.bodySemiBold,
      color: colors.onAccent,
      fontSize: 16,
    },
  });
}
