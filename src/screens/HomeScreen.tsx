import { useCallback, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { colors, fonts, radii, spacing } from '../theme/theme';
import { loadProgress } from '../utils/progress';
import { flatSteps } from '../content';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

// Non-breaking space, built from a char code rather than typed literally so
// it can't silently get swapped back into a regular breakable space by an
// editor/tool pass. Used to keep "of Mary" glued together so "Mary" never
// wraps alone onto its own line.
const NBSP = String.fromCharCode(160);

export function HomeScreen({ navigation }: Props) {
  const [resumeIndex, setResumeIndex] = useState<number | null>(null);
  const insets = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadProgress().then((index) => {
        if (!active) return;
        const isResumable = index !== null && index > 0 && index < flatSteps.length - 1;
        setResumeIndex(isResumable ? index : null);
      });
      return () => {
        active = false;
      };
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable
        style={[styles.settingsButton, { top: insets.top + spacing.sm }]}
        onPress={() => navigation.navigate('Settings')}
        hitSlop={12}
        accessibilityLabel="Settings"
      >
        <Text style={styles.settingsButtonText}>Settings</Text>
      </Pressable>
      <View style={styles.container}>
        <Image
          source={require('../../assets/two-hearts.png')}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="The Sacred Heart of Jesus and the Immaculate Heart of Mary"
        />
        <Text style={styles.title}>Communion of Reparation</Text>
        <Text style={styles.subtitle}>All Night Vigil Prayer Guide</Text>
        <Text style={styles.tagline}>
          {`First Friday – First Saturday Devotion in Honor of the Sacred Heart of Jesus and the Immaculate Heart${NBSP}of${NBSP}Mary`}
        </Text>

        <View style={styles.actions}>
          {resumeIndex !== null && (
            <Pressable
              style={[styles.button, styles.primaryButton]}
              onPress={() => navigation.navigate('Vigil', { startIndex: resumeIndex })}
            >
              <Text style={styles.primaryButtonText}>Continue Vigil</Text>
              <Text style={styles.buttonSubtext}>
                {flatSteps[resumeIndex].section.title === flatSteps[resumeIndex].partTitle
                  ? flatSteps[resumeIndex].partTitle
                  : `${flatSteps[resumeIndex].section.title} · ${flatSteps[resumeIndex].partTitle}`}
              </Text>
            </Pressable>
          )}

          <Pressable
            style={[styles.button, resumeIndex === null ? styles.primaryButton : styles.secondaryButton]}
            onPress={() => navigation.navigate('Vigil', { startIndex: 0 })}
          >
            <Text style={resumeIndex === null ? styles.primaryButtonText : styles.secondaryButtonText}>
              Begin Vigil from the Start
            </Text>
          </Pressable>

          <Pressable style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('TableOfContents')}>
            <Text style={styles.secondaryButtonText}>Table of Contents</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  settingsButton: {
    position: 'absolute',
    right: spacing.lg,
    zIndex: 1,
  },
  settingsButtonText: {
    fontFamily: fonts.italic,
    fontSize: 15,
    color: colors.textMuted,
  },
  logo: {
    width: 140,
    height: 100,
    marginBottom: spacing.lg,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 32,
    color: colors.accent,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: fonts.italicMedium,
    fontSize: 21,
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  tagline: {
    fontFamily: fonts.italic,
    fontSize: 16,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.md,
    lineHeight: 22,
  },
  actions: {
    width: '100%',
    marginTop: spacing.xl,
    gap: spacing.sm,
  },
  button: {
    borderRadius: radii.md,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.lg,
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
  buttonSubtext: {
    fontFamily: fonts.italic,
    color: '#fff',
    opacity: 0.9,
    fontSize: 13,
    marginTop: 2,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryButtonText: {
    fontFamily: fonts.bodySemiBold,
    color: colors.accent,
    fontSize: 16,
  },
});
