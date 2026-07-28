import { useCallback, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { contentMaxWidth, fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import { getFirstFridayOfMonth } from '../utils/reminders';
import {
  addPersonalScheduleEntry,
  getUpcomingVigils,
  loadPersonalSchedule,
  removePersonalScheduleEntry,
  type PersonalScheduleEntry,
} from '../utils/personalSchedule';

type Props = NativeStackScreenProps<RootStackParamList, 'Calendar'>;

const WEEKDAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function toIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatWithYear(date: Date): string {
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

function formatEntryDate(raw: string): string {
  const parsed = new Date(`${raw}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return raw;
  return formatWithYear(parsed);
}

function sortByDate(entries: PersonalScheduleEntry[]): PersonalScheduleEntry[] {
  return [...entries].sort((a, b) => {
    const aTime = new Date(`${a.date}T00:00:00`).getTime();
    const bTime = new Date(`${b.date}T00:00:00`).getTime();
    if (Number.isNaN(aTime)) return 1;
    if (Number.isNaN(bTime)) return -1;
    return aTime - bTime;
  });
}

export function CalendarScreen({}: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [entries, setEntries] = useState<PersonalScheduleEntry[]>([]);
  const [adding, setAdding] = useState(false);
  const [dateDraft, setDateDraft] = useState('');
  const [noteDraft, setNoteDraft] = useState('');
  const today = useMemo(() => new Date(), []);
  const [viewMonth, setViewMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

  const nextVigil = useMemo(() => getUpcomingVigils(1, today)[0], [today]);
  const upcomingVigils = useMemo(() => getUpcomingVigils(6, today), [today]);

  const entryDateSet = useMemo(() => new Set(entries.map((e) => e.date)), [entries]);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadPersonalSchedule().then((loaded) => {
        if (active) setEntries(sortByDate(loaded));
      });
      return () => {
        active = false;
      };
    }, [])
  );

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const vigilFriday = useMemo(() => getFirstFridayOfMonth(year, month), [year, month]);
  const vigilSaturday = useMemo(() => {
    const d = new Date(vigilFriday);
    d.setDate(d.getDate() + 1);
    return d;
  }, [vigilFriday]);

  const cells = useMemo(() => {
    const firstWeekday = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const days: (Date | null)[] = [];
    for (let i = 0; i < firstWeekday; i++) days.push(null);
    for (let d = 1; d <= totalDays; d++) days.push(new Date(year, month, d));
    while (days.length % 7 !== 0) days.push(null);
    return days;
  }, [year, month]);

  const onChangeMonth = (delta: number) => {
    setViewMonth(new Date(year, month + delta, 1));
  };

  const onSelectDay = (date: Date) => {
    setDateDraft(toIsoDate(date));
    setNoteDraft('');
    setAdding(true);
  };

  const onAddEntry = async () => {
    if (!dateDraft.trim() || !noteDraft.trim()) return;
    const next = await addPersonalScheduleEntry(dateDraft.trim(), noteDraft.trim());
    setEntries(sortByDate(next));
    setDateDraft('');
    setNoteDraft('');
    setAdding(false);
  };

  const onRemoveEntry = async (id: string) => {
    const next = await removePersonalScheduleEntry(id);
    setEntries(sortByDate(next));
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <KeyboardAwareScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" bottomOffset={24}>
        {nextVigil ? (
          <View style={styles.nextVigilRow}>
            <MaterialCommunityIcons name="hands-pray" size={16} color={colors.gold} />
            <Text style={styles.nextVigilText}>
              Next vigil: {formatWithYear(nextVigil.friday)} – {formatWithYear(nextVigil.saturday)}
            </Text>
          </View>
        ) : null}

        <View style={styles.viewToggle}>
          <Pressable
            style={[styles.viewToggleButton, viewMode === 'calendar' && styles.viewToggleButtonSelected]}
            onPress={() => setViewMode('calendar')}
          >
            <Text style={[styles.viewToggleText, viewMode === 'calendar' && styles.viewToggleTextSelected]}>
              Calendar
            </Text>
          </Pressable>
          <Pressable
            style={[styles.viewToggleButton, viewMode === 'list' && styles.viewToggleButtonSelected]}
            onPress={() => setViewMode('list')}
          >
            <Text style={[styles.viewToggleText, viewMode === 'list' && styles.viewToggleTextSelected]}>List</Text>
          </Pressable>
        </View>

        {viewMode === 'calendar' ? (
          <View style={styles.card}>
            <View style={styles.monthNav}>
              <Pressable onPress={() => onChangeMonth(-1)} hitSlop={10} accessibilityLabel="Previous month">
                <Ionicons name="chevron-back" size={20} color={colors.accent} />
              </Pressable>
              <Text style={styles.monthLabel}>
                {viewMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </Text>
              <Pressable onPress={() => onChangeMonth(1)} hitSlop={10} accessibilityLabel="Next month">
                <Ionicons name="chevron-forward" size={20} color={colors.accent} />
              </Pressable>
            </View>

            <View style={styles.weekdayRow}>
              {WEEKDAY_LABELS.map((label) => (
                <Text key={label} style={styles.weekdayLabel}>
                  {label}
                </Text>
              ))}
            </View>

            <View style={styles.grid}>
              {cells.map((date, i) => {
                if (!date) return <View key={i} style={styles.dayCell} />;
                const isVigil = isSameDay(date, vigilFriday) || isSameDay(date, vigilSaturday);
                const isToday = isSameDay(date, today);
                const hasEntry = entryDateSet.has(toIsoDate(date));
                return (
                  <Pressable
                    key={i}
                    style={[styles.dayCell, isVigil && styles.dayCellVigil, isToday && styles.dayCellToday]}
                    onPress={() => onSelectDay(date)}
                  >
                    <Text style={[styles.dayNumber, isVigil && styles.dayNumberVigil]}>{date.getDate()}</Text>
                    {hasEntry ? <View style={styles.dayDot} /> : null}
                  </Pressable>
                );
              })}
            </View>
          </View>
        ) : (
          <View style={styles.card}>
            {upcomingVigils.map(({ friday, saturday }, i) => (
              <View key={friday.toISOString()} style={[styles.vigilRow, i > 0 && styles.rowDivider]}>
                <MaterialCommunityIcons name="hands-pray" size={18} color={colors.gold} />
                <Text style={styles.vigilRowText}>
                  {formatWithYear(friday)} – {formatWithYear(saturday)}
                </Text>
              </View>
            ))}
          </View>
        )}

        <Text style={styles.sectionTitle}>My Schedule</Text>
        <View style={styles.card}>
          {entries.length === 0 && !adding ? (
            <Text style={styles.emptyText}>
              Nothing on your personal schedule yet.
              {viewMode === 'calendar' ? ' Tap a day above to add one.' : ''}
            </Text>
          ) : null}
          {entries.map((entry, i) => (
            <View key={entry.id} style={[styles.entryRow, i > 0 && styles.rowDivider]}>
              <View style={styles.entryTextCol}>
                <Text style={styles.entryDate}>{formatEntryDate(entry.date)}</Text>
                <Text style={styles.entryNote}>{entry.note}</Text>
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
                value={noteDraft}
                onChangeText={setNoteDraft}
                placeholder="What's this for?"
                placeholderTextColor={colors.textMuted}
                autoFocus
              />
              <View style={styles.addFormActions}>
                <Pressable
                  style={styles.cancelButton}
                  onPress={() => {
                    setAdding(false);
                    setDateDraft('');
                    setNoteDraft('');
                  }}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.saveButton, (!dateDraft.trim() || !noteDraft.trim()) && styles.saveButtonDisabled]}
                  onPress={onAddEntry}
                  disabled={!dateDraft.trim() || !noteDraft.trim()}
                >
                  <Text style={styles.saveButtonText}>Add</Text>
                </Pressable>
              </View>
            </View>
          ) : (
            <Pressable
              style={[styles.addRow, entries.length > 0 && styles.rowDivider]}
              onPress={() => onSelectDay(today)}
            >
              <Ionicons name="add-circle-outline" size={18} color={colors.accent} />
              <Text style={styles.addRowText}>Add an entry</Text>
            </Pressable>
          )}
        </View>
      </KeyboardAwareScrollView>
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
    nextVigilRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.xs,
      marginBottom: spacing.xs,
    },
    nextVigilText: {
      fontFamily: fonts.italicMedium,
      fontSize: 15,
      color: colors.text,
    },
    viewToggle: {
      flexDirection: 'row',
      gap: spacing.xs,
      marginBottom: spacing.sm,
      alignSelf: 'center',
    },
    viewToggleButton: {
      paddingVertical: spacing.xs + 2,
      paddingHorizontal: spacing.lg,
      borderRadius: radii.sm,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
    },
    viewToggleButtonSelected: {
      backgroundColor: colors.accent,
      borderColor: colors.accent,
    },
    viewToggleText: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 14,
      color: colors.text,
    },
    viewToggleTextSelected: {
      color: colors.onAccent,
    },
    vigilRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
    },
    vigilRowText: {
      fontFamily: fonts.body,
      fontSize: 17,
      color: colors.text,
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
    monthNav: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.sm,
    },
    monthLabel: {
      fontFamily: fonts.displaySemiBold,
      fontSize: 17,
      color: colors.text,
    },
    weekdayRow: {
      flexDirection: 'row',
    },
    weekdayLabel: {
      width: `${100 / 7}%`,
      textAlign: 'center',
      fontFamily: fonts.bodySemiBold,
      fontSize: 12,
      color: colors.textMuted,
      marginBottom: spacing.xs,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    dayCell: {
      width: `${100 / 7}%`,
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: radii.sm,
      marginVertical: 1,
    },
    dayCellVigil: {
      backgroundColor: colors.gold,
    },
    dayCellToday: {
      borderWidth: 1.5,
      borderColor: colors.accent,
    },
    dayNumber: {
      fontFamily: fonts.body,
      fontSize: 15,
      color: colors.text,
    },
    dayNumberVigil: {
      fontFamily: fonts.bodySemiBold,
      color: colors.onAccent,
    },
    dayDot: {
      position: 'absolute',
      bottom: 4,
      width: 5,
      height: 5,
      borderRadius: 3,
      backgroundColor: colors.accent,
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
    entryNote: {
      fontFamily: fonts.body,
      fontSize: 17,
      color: colors.text,
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
