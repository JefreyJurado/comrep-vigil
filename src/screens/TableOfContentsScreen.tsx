import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { contentMaxWidth, fonts, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import { vigilParts, findStepIndex } from '../content';
import { loadProgress } from '../utils/progress';
import { loadBookmarks } from '../utils/bookmarks';

type Props = NativeStackScreenProps<RootStackParamList, 'TableOfContents'>;

function matches(query: string, section: { title: string; kicker?: string }): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return section.title.toLowerCase().includes(q) || (section.kicker?.toLowerCase().includes(q) ?? false);
}

export function TableOfContentsScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [query, setQuery] = useState('');
  const [reachedIndex, setReachedIndex] = useState(-1);
  const [bookmarkCount, setBookmarkCount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadProgress().then((sectionId) => {
        if (active) setReachedIndex(sectionId !== null ? findStepIndex(sectionId) : -1);
      });
      loadBookmarks().then((bookmarks) => {
        if (active) setBookmarkCount(bookmarks.length);
      });
      return () => {
        active = false;
      };
    }, [])
  );

  const filteredParts = vigilParts
    .map((part) => ({ ...part, sections: part.sections.filter((section) => matches(query, section)) }))
    .filter((part) => part.sections.length > 0);

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <View style={styles.searchWrap}>
        <Ionicons name="search-outline" size={18} color={colors.textMuted} />
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          placeholder="Search prayers and readings"
          placeholderTextColor={colors.textMuted}
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable style={styles.bookmarksRow} onPress={() => navigation.navigate('Bookmarks')}>
          <View style={styles.bookmarksRowLeft}>
            <Ionicons name="star" size={18} color={colors.gold} />
            <Text style={styles.bookmarksRowText}>Bookmarks</Text>
          </View>
          <View style={styles.bookmarksRowRight}>
            {bookmarkCount > 0 ? <Text style={styles.bookmarksCount}>{bookmarkCount}</Text> : null}
            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </View>
        </Pressable>
        {filteredParts.map((part) => (
          <View key={part.id} style={styles.partBlock}>
            <Text style={styles.partTitle}>{part.title}</Text>
            {part.sections.map((section) => {
              const done = reachedIndex >= 0 && findStepIndex(section.id) <= reachedIndex;
              return (
                <Pressable
                  key={section.id}
                  style={styles.row}
                  onPress={() =>
                    navigation.navigate('Vigil', { startIndex: findStepIndex(section.id) })
                  }
                >
                  <View style={styles.rowTextCol}>
                    {section.kicker ? <Text style={styles.kicker}>{section.kicker}</Text> : null}
                    <Text style={styles.rowTitle}>{section.title}</Text>
                  </View>
                  {done ? <Ionicons name="checkmark-circle" size={18} color={colors.gold} /> : null}
                </Pressable>
              );
            })}
          </View>
        ))}
        {filteredParts.length === 0 ? <Text style={styles.emptyText}>No matches for “{query}”.</Text> : null}
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
    searchWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      marginHorizontal: spacing.lg,
      marginTop: spacing.md,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
    },
    searchInput: {
      flex: 1,
      fontFamily: fonts.body,
      fontSize: 16,
      color: colors.text,
    },
    content: {
      width: '100%',
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
      padding: spacing.lg,
      gap: spacing.lg,
    },
    bookmarksRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: spacing.sm,
      padding: spacing.md,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
    },
    bookmarksRowLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
    },
    bookmarksRowRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.xs,
    },
    bookmarksRowText: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 17,
      color: colors.text,
    },
    bookmarksCount: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 14,
      color: colors.textMuted,
    },
    partBlock: {
      gap: spacing.xs,
    },
    partTitle: {
      fontFamily: fonts.display,
      fontSize: 15,
      letterSpacing: 1.4,
      color: colors.gold,
      marginBottom: spacing.xs,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: spacing.sm,
      paddingVertical: spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    rowTextCol: {
      flex: 1,
    },
    kicker: {
      fontFamily: fonts.italic,
      fontSize: 14,
      color: colors.textMuted,
    },
    rowTitle: {
      fontFamily: fonts.body,
      fontSize: 19,
      color: colors.text,
    },
    emptyText: {
      fontFamily: fonts.italic,
      fontSize: 16,
      color: colors.textMuted,
      textAlign: 'center',
      marginTop: spacing.lg,
    },
  });
}
