import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { contentMaxWidth, fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import { saveIntention } from '../utils/intention';
import {
  addSavedIntention,
  loadSavedIntentions,
  removeSavedIntention,
  toggleSavedIntentionAnswered,
  updateSavedIntentionText,
  type SavedIntention,
} from '../utils/savedIntentions';
import { SuccessPopup, useSuccessPopup } from '../components/SuccessPopup';

type Props = NativeStackScreenProps<RootStackParamList, 'SavedIntentions'>;

function todayIso(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function formatEntryDate(raw: string): string {
  const parsed = new Date(`${raw}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return raw;
  return parsed.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Unanswered intentions first (most recently created first within each group),
// so the list surfaces what's still being prayed for before what's resolved.
function sortEntries(entries: SavedIntention[]): SavedIntention[] {
  return [...entries].sort((a, b) => {
    if (a.answered !== b.answered) return a.answered ? 1 : -1;
    return b.createdDate.localeCompare(a.createdDate);
  });
}

export function SavedIntentionsScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const { t } = useLanguage();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [entries, setEntries] = useState<SavedIntention[]>([]);
  const [draft, setDraft] = useState('');
  const savedPopup = useSuccessPopup();

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadSavedIntentions().then((loaded) => {
        if (active) setEntries(sortEntries(loaded));
      });
      return () => {
        active = false;
      };
    }, [])
  );

  const onAdd = async () => {
    if (!draft.trim()) return;
    const next = await addSavedIntention(draft, todayIso());
    setEntries(sortEntries(next));
    setDraft('');
  };

  const onToggleAnswered = async (id: string) => {
    const next = await toggleSavedIntentionAnswered(id, todayIso());
    setEntries(sortEntries(next));
  };

  const onEditText = async (id: string, text: string) => {
    const next = await updateSavedIntentionText(id, text);
    setEntries(sortEntries(next));
  };

  const onRemove = async (id: string) => {
    const next = await removeSavedIntention(id);
    setEntries(sortEntries(next));
  };

  const onUseTonight = (text: string) => {
    saveIntention(text);
    savedPopup.show(t('home.intentionSaved'));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.sectionTitle}>{t('screens.savedIntentions')}</Text>
        <Text style={styles.hint}>{t('savedIntentions.hint')}</Text>

        <View style={styles.addRow}>
          <TextInput
            style={styles.addInput}
            value={draft}
            onChangeText={setDraft}
            placeholder={t('savedIntentions.addPlaceholder')}
            placeholderTextColor={colors.textMuted}
            returnKeyType="done"
            onSubmitEditing={onAdd}
          />
          <Pressable
            style={[styles.addButton, !draft.trim() && styles.addButtonDisabled]}
            onPress={onAdd}
            disabled={!draft.trim()}
          >
            <Ionicons name="add" size={20} color={colors.onAccent} />
          </Pressable>
        </View>

        <View style={styles.card}>
          {entries.length === 0 ? <Text style={styles.emptyText}>{t('savedIntentions.empty')}</Text> : null}
          {entries.map((entry, i) => (
            <View key={entry.id} style={[styles.entryRow, i > 0 && styles.rowDivider]}>
              <Pressable
                onPress={() => onToggleAnswered(entry.id)}
                hitSlop={8}
                accessibilityLabel={t('savedIntentions.markAnswered')}
              >
                <Ionicons
                  name={entry.answered ? 'checkmark-circle' : 'ellipse-outline'}
                  size={22}
                  color={entry.answered ? colors.accent : colors.textMuted}
                />
              </Pressable>
              <View style={styles.entryTextCol}>
                <TextInput
                  style={[styles.entryText, entry.answered && styles.entryTextAnswered]}
                  value={entry.text}
                  onChangeText={(text) => setEntries((prev) => prev.map((e) => (e.id === entry.id ? { ...e, text } : e)))}
                  onBlur={() => onEditText(entry.id, entry.text)}
                  multiline
                />
                {entry.answered && entry.answeredDate ? (
                  <Text style={styles.answeredDate}>
                    {t('savedIntentions.answeredOn', { date: formatEntryDate(entry.answeredDate) })}
                  </Text>
                ) : (
                  <Pressable onPress={() => onUseTonight(entry.text)} hitSlop={6}>
                    <Text style={styles.useTonightLink}>{t('savedIntentions.useTonight')}</Text>
                  </Pressable>
                )}
              </View>
              <Pressable
                onPress={() => onRemove(entry.id)}
                hitSlop={8}
                accessibilityLabel={t('calendar.removeEntry')}
              >
                <Ionicons name="trash-outline" size={18} color={colors.textMuted} />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
      <SuccessPopup visible={savedPopup.visible} message={savedPopup.message} opacity={savedPopup.opacity} colors={colors} />
    </SafeAreaView>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      width: '100%',
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
      padding: spacing.lg,
      gap: spacing.sm,
    },
    sectionTitle: {
      fontFamily: fonts.displaySemiBold,
      fontSize: 15,
      letterSpacing: 1.4,
      color: colors.gold,
      marginTop: spacing.md,
    },
    hint: {
      fontFamily: fonts.italic,
      fontSize: 14,
      color: colors.textMuted,
      marginBottom: spacing.xs,
    },
    addRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
    },
    addInput: {
      flex: 1,
      borderRadius: radii.sm,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      fontFamily: fonts.body,
      fontSize: 16,
      color: colors.text,
    },
    addButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.accent,
    },
    addButtonDisabled: {
      opacity: 0.4,
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: radii.md,
      borderWidth: 1,
      borderColor: colors.border,
      padding: spacing.md,
      marginTop: spacing.xs,
    },
    rowDivider: {
      borderTopWidth: 1,
      borderTopColor: colors.border,
      marginTop: spacing.sm,
      paddingTop: spacing.sm,
    },
    entryRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: spacing.sm,
    },
    entryTextCol: {
      flex: 1,
      gap: 2,
    },
    entryText: {
      fontFamily: fonts.italic,
      fontSize: 16,
      color: colors.text,
      padding: 0,
    },
    entryTextAnswered: {
      color: colors.textMuted,
      textDecorationLine: 'line-through',
    },
    answeredDate: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 12,
      color: colors.gold,
    },
    useTonightLink: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 13,
      color: colors.accent,
    },
    emptyText: {
      fontFamily: fonts.italic,
      fontSize: 15,
      color: colors.textMuted,
    },
  });
}
