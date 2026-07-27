import { useCallback, useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { contentMaxWidth, fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import {
  addConfessionEntry,
  loadConfessionLog,
  removeConfessionEntry,
  type ConfessionEntry,
} from '../utils/confessionLog';

type Props = NativeStackScreenProps<RootStackParamList, 'Confession'>;

function formatEntryDate(raw: string): string {
  const parsed = new Date(`${raw}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return raw;
  return parsed.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

function sortMostRecentFirst(entries: ConfessionEntry[]): ConfessionEntry[] {
  return [...entries].sort((a, b) => {
    const aTime = new Date(`${a.date}T00:00:00`).getTime();
    const bTime = new Date(`${b.date}T00:00:00`).getTime();
    if (Number.isNaN(aTime)) return 1;
    if (Number.isNaN(bTime)) return -1;
    return bTime - aTime;
  });
}

export function ConfessionScreen({}: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const headerHeight = useHeaderHeight();
  const [entries, setEntries] = useState<ConfessionEntry[]>([]);
  const [adding, setAdding] = useState(false);
  const [dateDraft, setDateDraft] = useState('');
  const [priestDraft, setPriestDraft] = useState('');
  const [noteDraft, setNoteDraft] = useState('');

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadConfessionLog().then((loaded) => {
        if (active) setEntries(sortMostRecentFirst(loaded));
      });
      return () => {
        active = false;
      };
    }, [])
  );

  const onAddEntry = async () => {
    if (!dateDraft.trim() || !priestDraft.trim()) return;
    const next = await addConfessionEntry(dateDraft.trim(), priestDraft.trim(), noteDraft);
    setEntries(sortMostRecentFirst(next));
    setDateDraft('');
    setPriestDraft('');
    setNoteDraft('');
    setAdding(false);
  };

  const onCancel = () => {
    setAdding(false);
    setDateDraft('');
    setPriestDraft('');
    setNoteDraft('');
  };

  const onRemoveEntry = async (id: string) => {
    const next = await removeConfessionEntry(id);
    setEntries(sortMostRecentFirst(next));
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? headerHeight : 0}
      >
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.sectionTitle}>Confession Log</Text>
        <View style={styles.card}>
          {entries.length === 0 && !adding ? (
            <Text style={styles.emptyText}>No confessions logged yet.</Text>
          ) : null}
          {entries.map((entry, i) => (
            <View key={entry.id} style={[styles.entryRow, i > 0 && styles.rowDivider]}>
              <View style={styles.entryTextCol}>
                <Text style={styles.entryDate}>{formatEntryDate(entry.date)}</Text>
                <Text style={styles.entryPriest}>{entry.priest}</Text>
                {entry.note ? <Text style={styles.entryNote}>{entry.note}</Text> : null}
              </View>
              <Pressable onPress={() => onRemoveEntry(entry.id)} hitSlop={8} accessibilityLabel="Remove entry">
                <Ionicons name="trash-outline" size={18} color={colors.textMuted} />
              </Pressable>
            </View>
          ))}

          {adding ? (
            <View style={[styles.addForm, entries.length > 0 && styles.rowDivider]}>
              <TextInput
                style={styles.input}
                value={dateDraft}
                onChangeText={setDateDraft}
                placeholder="YYYY-MM-DD"
                placeholderTextColor={colors.textMuted}
              />
              <TextInput
                style={styles.input}
                value={priestDraft}
                onChangeText={setPriestDraft}
                placeholder="Priest's name"
                placeholderTextColor={colors.textMuted}
              />
              <TextInput
                style={styles.input}
                value={noteDraft}
                onChangeText={setNoteDraft}
                placeholder="Note (optional)"
                placeholderTextColor={colors.textMuted}
              />
              <View style={styles.addFormActions}>
                <Pressable style={styles.cancelButton} onPress={onCancel}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.saveButton,
                    (!dateDraft.trim() || !priestDraft.trim()) && styles.saveButtonDisabled,
                  ]}
                  onPress={onAddEntry}
                  disabled={!dateDraft.trim() || !priestDraft.trim()}
                >
                  <Text style={styles.saveButtonText}>Add</Text>
                </Pressable>
              </View>
            </View>
          ) : (
            <Pressable style={[styles.addRow, entries.length > 0 && styles.rowDivider]} onPress={() => setAdding(true)}>
              <Ionicons name="add-circle-outline" size={18} color={colors.accent} />
              <Text style={styles.addRowText}>Add a confession</Text>
            </Pressable>
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
    flex: {
      flex: 1,
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
      marginBottom: spacing.xs,
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: radii.md,
      borderWidth: 1,
      borderColor: colors.border,
      padding: spacing.md,
    },
    rowDivider: {
      borderTopWidth: 1,
      borderTopColor: colors.border,
      marginTop: spacing.sm,
      paddingTop: spacing.sm,
    },
    entryRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: spacing.sm,
    },
    entryTextCol: {
      flex: 1,
      gap: 2,
    },
    entryDate: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 15,
      color: colors.gold,
    },
    entryPriest: {
      fontFamily: fonts.body,
      fontSize: 17,
      color: colors.text,
    },
    entryNote: {
      fontFamily: fonts.italic,
      fontSize: 14,
      color: colors.textMuted,
    },
    emptyText: {
      fontFamily: fonts.italic,
      fontSize: 15,
      color: colors.textMuted,
      marginBottom: spacing.md,
    },
    addRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
    },
    addRowText: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 16,
      color: colors.accent,
    },
    addForm: {
      gap: spacing.sm,
    },
    input: {
      borderRadius: radii.sm,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      fontFamily: fonts.body,
      fontSize: 16,
      color: colors.text,
    },
    addFormActions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: spacing.sm,
    },
    cancelButton: {
      paddingVertical: spacing.xs + 2,
      paddingHorizontal: spacing.md,
    },
    cancelButtonText: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 15,
      color: colors.textMuted,
    },
    saveButton: {
      backgroundColor: colors.accent,
      borderRadius: radii.sm,
      paddingVertical: spacing.xs + 2,
      paddingHorizontal: spacing.lg,
    },
    saveButtonDisabled: {
      opacity: 0.5,
    },
    saveButtonText: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 15,
      color: colors.onAccent,
    },
  });
}
