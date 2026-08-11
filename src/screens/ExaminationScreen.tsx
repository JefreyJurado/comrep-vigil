import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { contentMaxWidth, fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import { examinationOfConscience } from '../content/examinationOfConscience';

type Props = NativeStackScreenProps<RootStackParamList, 'Examination'>;

const TOTAL_QUESTIONS = examinationOfConscience.reduce((sum, section) => sum + section.questions.length, 0);

export function ExaminationScreen({}: Props) {
  const { colors } = useTheme();
  const { t } = useLanguage();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const onToggle = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const onReset = () => setChecked(new Set());

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>{t('examination.title')}</Text>
        <Text style={styles.intro}>{t('examination.intro')}</Text>

        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, { width: `${(checked.size / TOTAL_QUESTIONS) * 100}%` }]}
          />
        </View>
        <Text style={styles.progressText}>
          {t('examination.progress', { checked: checked.size, total: TOTAL_QUESTIONS })}
        </Text>

        {examinationOfConscience.map((section, sectionIndex) => (
          <View key={section.id} style={styles.card}>
            <Text style={styles.commandmentTitle}>{section.title}</Text>
            {section.questions.map((question, questionIndex) => {
              const key = `${sectionIndex}-${questionIndex}`;
              const isChecked = checked.has(key);
              return (
                <Pressable
                  key={key}
                  style={[styles.questionRow, questionIndex > 0 && styles.rowDivider]}
                  onPress={() => onToggle(key)}
                  accessibilityLabel={question}
                >
                  <Ionicons
                    name={isChecked ? 'checkmark-circle' : 'ellipse-outline'}
                    size={20}
                    color={isChecked ? colors.accent : colors.textMuted}
                  />
                  <Text style={[styles.questionText, isChecked && styles.questionTextChecked]}>{question}</Text>
                </Pressable>
              );
            })}
          </View>
        ))}

        <Pressable style={styles.resetButton} onPress={onReset}>
          <Text style={styles.resetButtonText}>{t('examination.resetChecklist')}</Text>
        </Pressable>
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
    },
    intro: {
      fontFamily: fonts.italic,
      fontSize: 15,
      color: colors.textMuted,
      marginBottom: spacing.xs,
    },
    progressBar: {
      height: 4,
      borderRadius: 2,
      backgroundColor: colors.border,
      overflow: 'hidden',
    },
    progressFill: {
      height: 4,
      backgroundColor: colors.accent,
    },
    progressText: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 13,
      color: colors.textMuted,
      marginBottom: spacing.xs,
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: radii.md,
      borderWidth: 1,
      borderColor: colors.border,
      padding: spacing.md,
    },
    commandmentTitle: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 15,
      color: colors.gold,
      marginBottom: spacing.xs,
    },
    questionRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: spacing.sm,
      paddingVertical: spacing.xs + 2,
    },
    rowDivider: {
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    questionText: {
      flex: 1,
      fontFamily: fonts.body,
      fontSize: 15,
      color: colors.text,
      lineHeight: 21,
    },
    questionTextChecked: {
      color: colors.textMuted,
    },
    resetButton: {
      alignSelf: 'center',
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
      marginTop: spacing.xs,
      marginBottom: spacing.lg,
    },
    resetButtonText: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 15,
      color: colors.textMuted,
    },
  });
}
