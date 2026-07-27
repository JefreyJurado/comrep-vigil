import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AppState,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { contentMaxWidth, fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import { loadProgress } from '../utils/progress';
import { loadUserName, saveUserName } from '../utils/profile';
import { loadIntention, saveIntention } from '../utils/intention';
import { getUpcomingVigils } from '../utils/personalSchedule';
import { getLastConfession, type ConfessionEntry } from '../utils/confessionLog';
import { getLiturgicalDayLabel } from '../utils/liturgicalCalendar';
import { msUntilNextMidnight } from '../utils/dateTiming';
import { loadCurrentMonthOffice } from '../utils/monthlyOffice';
import { loadVigilCompletions, computeStreak } from '../utils/vigilStats';
import { flatSteps, findStepIndex } from '../content';
import { officeChoirs } from '../content/nineOffices';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

// Non-breaking space, built from a char code rather than typed literally so
// it can't silently get swapped back into a regular breakable space by an
// editor/tool pass. Used to keep "of Mary" glued together so "Mary" never
// wraps alone onto its own line.
const NBSP = String.fromCharCode(160);

function formatConfessionSummary(isoDate: string): string {
  const parsed = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatWithYear(date: Date): string {
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

function computeDateLabels() {
  return {
    liturgicalDay: getLiturgicalDayLabel(),
    todayLabel: new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
  };
}

export function HomeScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [resumeIndex, setResumeIndex] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState('');
  const [intentionDraft, setIntentionDraft] = useState('');
  const [lastConfession, setLastConfession] = useState<ConfessionEntry | null>(null);
  const [monthlyOfficeNumber, setMonthlyOfficeNumber] = useState<number | null>(null);
  const [vigilCompletions, setVigilCompletions] = useState<string[]>([]);
  const insets = useSafeAreaInsets();
  const today = useMemo(() => new Date(), []);
  const nextVigil = useMemo(() => getUpcomingVigils(1, today)[0], [today]);
  const isVigilNight =
    !!nextVigil && (isSameDay(nextVigil.friday, today) || isSameDay(nextVigil.saturday, today));
  // The date can roll over while the app sits open or backgrounded overnight,
  // so these are refreshed on focus and app-foreground below rather than
  // computed once and cached for the component's lifetime.
  const [{ liturgicalDay, todayLabel }, setDateLabels] = useState(computeDateLabels);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      setDateLabels(computeDateLabels());
      loadProgress().then((sectionId) => {
        if (!active) return;
        const index = sectionId !== null ? findStepIndex(sectionId) : -1;
        const isResumable = index > 0 && index < flatSteps.length - 1;
        setResumeIndex(isResumable ? index : null);
      });
      loadUserName().then((storedName) => {
        if (!active) return;
        setName(storedName);
        if (!storedName) setEditingName(true);
      });
      loadIntention().then((stored) => {
        if (active) setIntentionDraft(stored ?? '');
      });
      getLastConfession().then((entry) => {
        if (active) setLastConfession(entry);
      });
      loadCurrentMonthOffice().then((state) => {
        if (active) setMonthlyOfficeNumber(state?.officeNumber ?? null);
      });
      loadVigilCompletions().then((dates) => {
        if (active) setVigilCompletions(dates);
      });
      return () => {
        active = false;
      };
    }, [])
  );

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextState) => {
      if (nextState === 'active') setDateLabels(computeDateLabels());
    });
    return () => subscription.remove();
  }, []);

  // Recompute at the stroke of midnight even if the app is left open and
  // untouched — focus/foreground alone wouldn't catch that case. Reschedules
  // itself off a fresh `msUntilNextMidnight()` each time rather than a fixed
  // 24h interval, so it can't drift.
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const scheduleNext = () => {
      timeoutId = setTimeout(() => {
        setDateLabels(computeDateLabels());
        scheduleNext();
      }, msUntilNextMidnight());
    };
    scheduleNext();
    return () => clearTimeout(timeoutId);
  }, []);

  const onSaveName = () => {
    const trimmed = nameDraft.trim();
    if (!trimmed) return;
    saveUserName(trimmed);
    setName(trimmed);
    setNameDraft('');
    setEditingName(false);
  };

  const onEditName = () => {
    setNameDraft(name ?? '');
    setEditingName(true);
  };

  const onSaveIntention = () => {
    saveIntention(intentionDraft);
    Keyboard.dismiss();
  };

  const monthlyOffice = monthlyOfficeNumber ? officeChoirs.find((o) => o.number === monthlyOfficeNumber) : null;
  const vigilStreak = useMemo(() => computeStreak(vigilCompletions), [vigilCompletions]);

  const onPressMonthlyOffice = () => {
    if (!monthlyOffice) return;
    navigation.navigate('Vigil', { startIndex: findStepIndex(`office-${monthlyOffice.number}`) });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { top: insets.top + spacing.sm }]}>
        <View style={styles.headerIcons}>
          <Pressable
            style={styles.headerIconButton}
            onPress={() => navigation.navigate('TableOfContents')}
            hitSlop={12}
            accessibilityLabel="Contents"
          >
            <Ionicons name="book-outline" size={20} color={colors.textMuted} />
          </Pressable>
          <Pressable
            style={styles.headerIconButton}
            onPress={() => navigation.navigate('Calendar')}
            hitSlop={12}
            accessibilityLabel="Calendar"
          >
            <Ionicons name="calendar-outline" size={20} color={colors.textMuted} />
          </Pressable>
          <Pressable
            style={styles.headerIconButton}
            onPress={() => navigation.navigate('Confession')}
            hitSlop={12}
            accessibilityLabel="Confession Log"
          >
            <Image
              source={require('../../assets/icons/confession.png')}
              style={[styles.confessionIcon, { tintColor: colors.textMuted }]}
              resizeMode="contain"
            />
          </Pressable>
          <Pressable
            style={styles.headerIconButton}
            onPress={() => navigation.navigate('Settings')}
            hitSlop={12}
            accessibilityLabel="Settings"
          >
            <Ionicons name="settings-outline" size={20} color={colors.textMuted} />
          </Pressable>
        </View>
      </View>
      <KeyboardAvoidingView
        style={styles.keyboardAvoider}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
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

        {isVigilNight ? (
          <Text style={styles.vigilCount}>Tonight is the ComRep Vigil</Text>
        ) : nextVigil ? (
          <Text style={styles.vigilCount}>
            Next vigil: {formatWithYear(nextVigil.friday)} – {formatWithYear(nextVigil.saturday)}
          </Text>
        ) : null}

        {lastConfession && (
          <Pressable onPress={() => navigation.navigate('Confession')} hitSlop={4}>
            <Text style={styles.vigilCount}>
              Last confession: {formatConfessionSummary(lastConfession.date)} with {lastConfession.priest}
            </Text>
          </Pressable>
        )}

        {monthlyOffice && (
          <Pressable onPress={onPressMonthlyOffice} hitSlop={4}>
            <Text style={styles.vigilCount}>
              This month’s Office: {monthlyOffice.name} — Choir of {monthlyOffice.choir}
            </Text>
          </Pressable>
        )}

        {editingName ? (
          <View style={styles.nameCard}>
            <Text style={styles.nameCardLabel}>What should we call you?</Text>
            <TextInput
              style={styles.nameInput}
              value={nameDraft}
              onChangeText={setNameDraft}
              placeholder="Your name"
              placeholderTextColor={colors.textMuted}
              returnKeyType="done"
              onSubmitEditing={onSaveName}
            />
            <Pressable
              style={[styles.button, styles.primaryButton, styles.nameSaveButton]}
              onPress={onSaveName}
              disabled={!nameDraft.trim()}
            >
              <Text style={styles.primaryButtonText}>Save</Text>
            </Pressable>
          </View>
        ) : (
          name && (
            <Pressable onPress={onEditName} hitSlop={8}>
              <Text style={styles.greeting}>Welcome back, {name}</Text>
            </Pressable>
          )
        )}

        <View style={styles.intentionCard}>
          <View style={styles.intentionCardHeader}>
            <Text style={styles.intentionCardLabel}>Tonight’s Intention</Text>
            <Pressable onPress={() => navigation.navigate('IntentionHistory')} hitSlop={8}>
              <Text style={styles.intentionHistoryLink}>Past Intentions</Text>
            </Pressable>
          </View>
          <TextInput
            style={styles.intentionInput}
            value={intentionDraft}
            onChangeText={setIntentionDraft}
            onBlur={onSaveIntention}
            placeholder="Who or what are you praying for tonight? (optional)"
            placeholderTextColor={colors.textMuted}
            multiline
          />
          <Pressable style={styles.intentionSaveButton} onPress={onSaveIntention}>
            <Text style={styles.intentionSaveButtonText}>Save</Text>
          </Pressable>
        </View>

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
              Pray
            </Text>
          </Pressable>
        </View>

        <View style={styles.footerDate}>
          <Text style={styles.dateLine}>{todayLabel}</Text>
          <Text style={styles.liturgicalDay}>{liturgicalDay}</Text>
          {vigilCompletions.length > 0 && (
            <Text style={styles.streakText}>
              {vigilCompletions.length} {vigilCompletions.length === 1 ? 'vigil' : 'vigils'} prayed
              {vigilStreak > 1 ? ` · ${vigilStreak}-month streak` : ''}
            </Text>
          )}
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardAvoider: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    width: '100%',
    maxWidth: contentMaxWidth,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
  },
  header: {
    position: 'absolute',
    right: spacing.lg,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: spacing.sm,
    flexShrink: 0,
  },
  headerIconButton: {
    padding: 2,
  },
  confessionIcon: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 140,
    height: 100,
    marginBottom: spacing.lg,
  },
  footerDate: {
    marginTop: spacing.lg,
    alignItems: 'center',
  },
  dateLine: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 13,
    color: colors.text,
    textAlign: 'center',
  },
  liturgicalDay: {
    fontFamily: fonts.italic,
    fontSize: 12,
    letterSpacing: 0.2,
    color: colors.gold,
    textAlign: 'center',
    lineHeight: 16,
  },
  streakText: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  greeting: {
    fontFamily: fonts.italicMedium,
    fontSize: 17,
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.lg,
  },
  vigilCount: {
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.gold,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  nameCard: {
    width: '100%',
    marginTop: spacing.md,
    padding: spacing.md,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
    gap: spacing.sm,
  },
  nameCardLabel: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 16,
    color: colors.text,
  },
  intentionCard: {
    width: '100%',
    marginTop: spacing.lg,
    padding: spacing.md,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    gap: spacing.xs,
  },
  intentionCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  intentionCardLabel: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 14,
    color: colors.textMuted,
  },
  intentionHistoryLink: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 13,
    color: colors.accent,
  },
  intentionInput: {
    width: '100%',
    minHeight: 44,
    fontFamily: fonts.italic,
    fontSize: 16,
    color: colors.text,
    textAlignVertical: 'top',
  },
  intentionSaveButton: {
    alignSelf: 'flex-end',
    borderRadius: radii.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.accent,
  },
  intentionSaveButtonText: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 14,
    color: colors.onAccent,
  },
  nameInput: {
    width: '100%',
    borderRadius: radii.sm,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontFamily: fonts.body,
    fontSize: 16,
    color: colors.text,
  },
  nameSaveButton: {
    width: '100%',
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
    marginTop: spacing.lg,
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
    color: colors.onAccent,
    fontSize: 16,
  },
  buttonSubtext: {
    fontFamily: fonts.italic,
    color: colors.onAccent,
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
}
