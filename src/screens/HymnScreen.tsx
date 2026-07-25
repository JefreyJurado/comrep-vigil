import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { fonts, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';

export function HymnScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <View style={styles.content}>
        <Ionicons name="musical-notes-outline" size={40} color={colors.gold} />
        <Text style={styles.message}>Lyrics for this hymn are coming soon.</Text>
      </View>
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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: spacing.xl,
      gap: spacing.md,
    },
    message: {
      fontFamily: fonts.italicMedium,
      fontSize: 19,
      color: colors.text,
      textAlign: 'center',
    },
  });
}
