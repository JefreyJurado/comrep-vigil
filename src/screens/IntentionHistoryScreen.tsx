import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { contentMaxWidth, fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import { loadIntentionHistory, removeIntentionHistoryEntry, type IntentionEntry } from '../utils/intention';

type Props = NativeStackScreenProps<RootStackParamList, 'IntentionHistory'>;

function formatEntryDate(raw: string): string {
  const parsed = new Date(`${raw}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return raw;
  return parsed.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

function sortMostRecentFirst(entries: IntentionEntry[]): IntentionEntry[] {
  return [...entries].sort((a, b) => {
    const aTime = new Date(`${a.date}T00:00:00`).getTime();
    const bTime = new Date(`${b.date}T00:00:00`).getTime();
    if (Number.isNaN(aTime)) return 1;
    if (Number.isNaN(bTime)) return -1;
    return bTime - aTime;
  });
}

export function IntentionHistoryScreen({}: Props) {
  const { colors } = useTheme();
  const { t } = useLanguage();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [entries, setEntries] = useState<IntentionEntry[]>([]);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadIntentionHistory().then((loaded) => {
        if (active) setEntries(sortMostRecentFirst(loaded));
      });
      return () => {
        active = false;
      };
    }, [])
  );

  const onRemoveEntry = async (id: string) => {
    const next = await removeIntentionHistoryEntry(id);
    setEntries(sortMostRecentFirst(next));
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>{t('home.pastIntentions')}</Text>
        <View style={styles.card}>
          {entries.length === 0 ? (
            <Text style={styles.emptyText}>{t('intentionHistory.empty')}</Text>
          ) : null}
          {entries.map((entry, i) => (
            <View key={entry.id} style={[styles.entryRow, i > 0 && styles.rowDivider]}>
              <View style={styles.entryTextCol}>
                <Text style={styles.entryDate}>{formatEntryDate(entry.date)}</Text>
                <Text style={styles.entryText}>{entry.text}</Text>
              </View>
              <Pressable onPress={() => onRemoveEntry(entry.id)} hitSlop={8} accessibilityLabel={t('calendar.removeEntry')}>
                <Ionicons name="trash-outline" size={18} color={colors.textMuted} />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
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
    entryText: {
      fontFamily: fonts.italic,
      fontSize: 17,
      color: colors.text,
    },
    emptyText: {
      fontFamily: fonts.italic,
      fontSize: 15,
      color: colors.textMuted,
    },
  });
}
