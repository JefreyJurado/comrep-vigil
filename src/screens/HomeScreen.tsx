import { useCallback, useMemo, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
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
import { getLiturgicalDayLabel } from '../utils/liturgicalCalendar';
import { flatSteps } from '../content';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

// Non-breaking space, built from a char code rather than typed literally so
// it can't silently get swapped back into a regular breakable space by an
// editor/tool pass. Used to keep "of Mary" glued together so "Mary" never
// wraps alone onto its own line.
const NBSP = String.fromCharCode(160);

export function HomeScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [resumeIndex, setResumeIndex] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState('');
  const insets = useSafeAreaInsets();
  const liturgicalDay = useMemo(() => getLiturgicalDayLabel(), []);
  const todayLabel = useMemo(
    () =>
      new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    []
  );

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadProgress().then((index) => {
        if (!active) return;
        const isResumable = index !== null && index > 0 && index < flatSteps.length - 1;
        setResumeIndex(isResumable ? index : null);
      });
      loadUserName().then((storedName) => {
        if (!active) return;
        setName(storedName);
        if (!storedName) setEditingName(true);
      });
      return () => {
        active = false;
      };
    }, [])
  );

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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { top: insets.top + spacing.sm }]}>
        <View style={styles.headerText}>
          <Text style={styles.dateLine}>{todayLabel}</Text>
          <Text style={styles.liturgicalDay}>{liturgicalDay}</Text>
        </View>
        <View style={styles.headerIcons}>
          <Pressable
            style={styles.headerIconButton}
            onPress={() => navigation.navigate('TableOfContents')}
            hitSlop={12}
            accessibilityLabel="Contents"
          >
            <Ionicons name="book-outline" size={22} color={colors.textMuted} />
          </Pressable>
          <Pressable
            style={styles.headerIconButton}
            onPress={() => navigation.navigate('Settings')}
            hitSlop={12}
            accessibilityLabel="Settings"
          >
            <Ionicons name="settings-outline" size={22} color={colors.textMuted} />
          </Pressable>
        </View>
      </View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
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

        {editingName ? (
          <View style={styles.nameCard}>
            <Text style={styles.nameCardLabel}>What should we call you?</Text>
            <TextInput
              style={styles.nameInput}
              value={nameDraft}
              onChangeText={setNameDraft}
              placeholder="Your name"
              placeholderTextColor={colors.textMuted}
              autoFocus
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
  container: {
    flex: 1,
    width: '100%',
    maxWidth: contentMaxWidth,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  header: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerText: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: spacing.md,
    flexShrink: 0,
  },
  headerIconButton: {
    padding: spacing.xs,
  },
  logo: {
    width: 140,
    height: 100,
    marginBottom: spacing.lg,
  },
  dateLine: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 13,
    color: colors.text,
    textAlign: 'left',
  },
  liturgicalDay: {
    fontFamily: fonts.italic,
    fontSize: 12,
    letterSpacing: 0.2,
    color: colors.gold,
    textAlign: 'left',
    lineHeight: 16,
  },
  greeting: {
    fontFamily: fonts.italicMedium,
    fontSize: 17,
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.md,
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
