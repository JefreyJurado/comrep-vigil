import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { contentMaxWidth, fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import { flatSteps } from '../content';
import { SectionRenderer } from '../components/SectionRenderer';
import { saveProgress } from '../utils/progress';
import { loadKeepScreenAwake, loadTextSize, TEXT_SIZE_SCALES } from '../utils/settings';
import { loadIntention, clearIntention } from '../utils/intention';
import { loadExcludedPartIds } from '../utils/vigilPlan';

const KEEP_AWAKE_TAG = 'vigil-screen';
const FADE_DURATION_MS = 220;

type Props = NativeStackScreenProps<RootStackParamList, 'Vigil'>;

export function VigilScreen({ route, navigation }: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [index, setIndex] = useState(route.params.startIndex);
  const [textScale, setTextScale] = useState(TEXT_SIZE_SCALES.medium);
  const [intention, setIntention] = useState<string | null>(null);
  const [excludedPartIds, setExcludedPartIds] = useState<Set<string>>(new Set());
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
      // Reloaded on every focus (not just mount) so toggling a part off in
      // Settings and coming back takes effect on the very next Next/Prev tap.
      loadExcludedPartIds().then((ids) => {
        if (active) setExcludedPartIds(new Set(ids));
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
            accessibilityLabel="Jump to a section"
          >
            <Ionicons name="book-outline" size={20} color={colors.textMuted} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Settings')} hitSlop={10} accessibilityLabel="Settings">
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
  }, [index, colors]);

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

  // Steps whose part was toggled off in Settings ("Shorten Tonight's Vigil")
  // are skipped over here rather than removed from flatSteps, so the
  // progress bar/step numbers, saved section-id progress, and Table of
  // Contents lookups all keep referring to one stable, canonical list.
  const goNext = () =>
    setIndex((i) => {
      let next = Math.min(i + 1, flatSteps.length - 1);
      while (next < flatSteps.length - 1 && excludedPartIds.has(flatSteps[next].partId)) next++;
      return next;
    });
  const goPrev = () =>
    setIndex((i) => {
      let prev = Math.max(i - 1, 0);
      while (prev > 0 && excludedPartIds.has(flatSteps[prev].partId)) prev--;
      return prev;
    });

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${((index + 1) / flatSteps.length) * 100}%` }]} />
      </View>
      <ScrollView ref={scrollRef} contentContainerStyle={styles.content}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <SectionRenderer section={step.section} scale={textScale} intention={intention} />
        </Animated.View>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable
          onPress={goPrev}
          disabled={isFirst}
          style={[styles.arrowButton, styles.secondaryButton, styles.shadow, isFirst && styles.disabledButton]}
          accessibilityLabel="Previous"
        >
          <Ionicons name="chevron-back" size={20} color={isFirst ? colors.textMuted : colors.accent} />
        </Pressable>
        {isLast ? (
          <Pressable
            onPress={() => {
              clearIntention();
              navigation.popToTop();
            }}
            style={[styles.finishButton, styles.primaryButton, styles.shadow]}
          >
            <Text style={styles.primaryButtonText}>Finish</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={goNext}
            style={[styles.arrowButton, styles.primaryButton, styles.shadow]}
            accessibilityLabel="Next"
          >
            <Ionicons name="chevron-forward" size={20} color={colors.onAccent} />
          </Pressable>
        )}
      </View>
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
  });
}
