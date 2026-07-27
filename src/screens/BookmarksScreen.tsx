import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { contentMaxWidth, fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import { StandaloneBlock } from '../components/SectionRenderer';
import { loadBookmarks, toggleBookmark, type Bookmark } from '../utils/bookmarks';
import { groupBookmarks } from '../utils/bookmarkGroups';
import { flatSteps } from '../content';

type Props = NativeStackScreenProps<RootStackParamList, 'Bookmarks'>;

export function BookmarksScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadBookmarks().then((loaded) => {
        if (active) setBookmarks(loaded);
      });
      return () => {
        active = false;
      };
    }, [])
  );

  const groups = useMemo(() => groupBookmarks(bookmarks), [bookmarks]);

  const onRemove = async (sectionId: string, blockIndex: number) => {
    setBookmarks((current) => current.filter((b) => !(b.sectionId === sectionId && b.blockIndex === blockIndex)));
    await toggleBookmark(sectionId, blockIndex);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Bookmarks</Text>
        {groups.length === 0 ? (
          <View style={styles.card}>
            <Text style={styles.emptyText}>
              No bookmarks yet. While praying through the vigil, tap the star next to a prayer or reading to save it
              here.
            </Text>
          </View>
        ) : (
          groups.map((group) => (
            <View key={group.sectionId} style={styles.card}>
              <Pressable
                style={styles.groupHeader}
                onPress={() => navigation.navigate('Vigil', { startIndex: group.stepIndex })}
              >
                <View style={styles.groupHeaderTextCol}>
                  {group.kicker ? <Text style={styles.kicker}>{group.kicker}</Text> : null}
                  <Text style={styles.groupTitle}>{group.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
              </Pressable>
              {group.blockIndices.map((blockIndex, i) => {
                const block = flatSteps[group.stepIndex].section.blocks[blockIndex];
                return (
                  <View key={blockIndex} style={[styles.blockRow, i > 0 && styles.rowDivider]}>
                    <View style={styles.blockCol}>
                      <StandaloneBlock block={block} />
                    </View>
                    <Pressable
                      onPress={() => onRemove(group.sectionId, blockIndex)}
                      hitSlop={8}
                      accessibilityLabel="Remove bookmark"
                    >
                      <Ionicons name="trash-outline" size={18} color={colors.textMuted} />
                    </Pressable>
                  </View>
                );
              })}
            </View>
          ))
        )}
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
    emptyText: {
      fontFamily: fonts.italic,
      fontSize: 15,
      color: colors.textMuted,
    },
    groupHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: spacing.sm,
      paddingBottom: spacing.sm,
      marginBottom: spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    groupHeaderTextCol: {
      flex: 1,
      gap: 2,
    },
    kicker: {
      fontFamily: fonts.italic,
      fontSize: 13,
      color: colors.textMuted,
    },
    groupTitle: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 18,
      color: colors.accent,
    },
    rowDivider: {
      borderTopWidth: 1,
      borderTopColor: colors.border,
      marginTop: spacing.sm,
      paddingTop: spacing.sm,
    },
    blockRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: spacing.sm,
    },
    blockCol: {
      flex: 1,
    },
  });
}
