import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { colors, fonts, radii, spacing } from '../theme/theme';
import { flatSteps } from '../content';
import { SectionRenderer } from '../components/SectionRenderer';
import { saveProgress } from '../utils/progress';
import { loadKeepScreenAwake } from '../utils/settings';

const KEEP_AWAKE_TAG = 'vigil-screen';

type Props = NativeStackScreenProps<RootStackParamList, 'Vigil'>;

export function VigilScreen({ route, navigation }: Props) {
  const [index, setIndex] = useState(route.params.startIndex);
  const scrollRef = useRef<ScrollView>(null);
  const step = flatSteps[index];
  const isFirst = index === 0;
  const isLast = index === flatSteps.length - 1;

  useEffect(() => {
    navigation.setOptions({
      title: step.partTitle,
      headerRight: () => (
        <Text style={styles.stepCounter}>
          {index + 1} / {flatSteps.length}
        </Text>
      ),
    });
    saveProgress(index);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [index]);

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

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${((index + 1) / flatSteps.length) * 100}%` }]} />
      </View>
      <ScrollView ref={scrollRef} contentContainerStyle={styles.content}>
        <SectionRenderer section={step.section} />
      </ScrollView>
      <View style={styles.footer}>
        <Pressable
          onPress={goPrev}
          disabled={isFirst}
          style={[styles.arrowButton, styles.secondaryButton, isFirst && styles.disabledButton]}
          accessibilityLabel="Previous"
        >
          <Text style={[styles.arrowGlyph, styles.secondaryArrowGlyph, isFirst && styles.disabledText]}>‹</Text>
        </Pressable>
        {isLast ? (
          <Pressable
            onPress={() => navigation.popToTop()}
            style={[styles.finishButton, styles.primaryButton]}
          >
            <Text style={styles.primaryButtonText}>Finish</Text>
          </Pressable>
        ) : (
          <Pressable onPress={goNext} style={[styles.arrowButton, styles.primaryButton]} accessibilityLabel="Next">
            <Text style={[styles.arrowGlyph, styles.primaryArrowGlyph]}>›</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },
  stepCounter: {
    fontFamily: fonts.italic,
    fontSize: 14,
    color: colors.textMuted,
    marginRight: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
  arrowButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowGlyph: {
    fontFamily: fonts.bodyBold,
    fontSize: 26,
    lineHeight: 28,
  },
  primaryArrowGlyph: {
    color: '#fff',
  },
  secondaryArrowGlyph: {
    color: colors.accent,
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
    color: '#fff',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  disabledButton: {
    opacity: 0.4,
  },
  disabledText: {
    color: colors.textMuted,
  },
});
