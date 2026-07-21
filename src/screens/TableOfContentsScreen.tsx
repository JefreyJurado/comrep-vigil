import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { colors, fonts, spacing } from '../theme/theme';
import { vigilParts, findStepIndex } from '../content';

type Props = NativeStackScreenProps<RootStackParamList, 'TableOfContents'>;

export function TableOfContentsScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        {vigilParts.map((part) => (
          <View key={part.id} style={styles.partBlock}>
            <Text style={styles.partTitle}>{part.title}</Text>
            {part.sections.map((section) => (
              <Pressable
                key={section.id}
                style={styles.row}
                onPress={() =>
                  navigation.navigate('Vigil', { startIndex: findStepIndex(section.id) })
                }
              >
                {section.kicker ? <Text style={styles.kicker}>{section.kicker}</Text> : null}
                <Text style={styles.rowTitle}>{section.title}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
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
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
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
});
