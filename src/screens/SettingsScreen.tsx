import { useCallback, useMemo, useState } from 'react';
import { Alert, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { ThemedSwitch } from '../components/ThemedSwitch';
import { contentMaxWidth, fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import { AVAILABLE_LANGUAGES, LANGUAGE_LABELS } from '../i18n/languages';
import { UIStringKey } from '../i18n/strings/en';
import { clearProgress } from '../utils/progress';
import { clearVigilCompletions } from '../utils/vigilStats';
import {
  loadKeepScreenAwake,
  saveKeepScreenAwake,
  loadTextSize,
  saveTextSize,
  TEXT_SIZE_ORDER,
  type TextSize,
} from '../utils/settings';
import { loadReminderEnabled, enableVigilReminder, disableVigilReminder } from '../utils/reminders';
import { currentMonthKey, loadMonthlyOffice, saveMonthlyOffice, clearMonthlyOffice } from '../utils/monthlyOffice';
import { findStepIndex } from '../content';
import { officeChoirs } from '../content/nineOffices';
import appConfig from '../../app.json';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const TEXT_SIZE_KEYS: Record<TextSize, UIStringKey> = {
  small: 'settings.textSizeSmall',
  medium: 'settings.textSizeMedium',
  large: 'settings.textSizeLarge',
  extraLarge: 'settings.textSizeExtraLarge',
};

export function SettingsScreen({ navigation }: Props) {
  const { colors, mode, setMode } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [keepAwake, setKeepAwake] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [textSize, setTextSize] = useState<TextSize>('medium');
  const [monthlyOfficeNumber, setMonthlyOfficeNumber] = useState<number | null>(null);
  const currentMonthLabel = useMemo(
    () => new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    []
  );

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadKeepScreenAwake().then((value) => {
        if (active) setKeepAwake(value);
      });
      loadReminderEnabled().then((value) => {
        if (active) setReminder(value);
      });
      loadTextSize().then((value) => {
        if (active) setTextSize(value);
      });
      loadMonthlyOffice().then((state) => {
        if (active) setMonthlyOfficeNumber(state && state.monthKey === currentMonthKey() ? state.officeNumber : null);
      });
      return () => {
        active = false;
      };
    }, [])
  );

  const onSelectTextSize = (size: TextSize) => {
    setTextSize(size);
    saveTextSize(size);
  };

  const onSelectMonthlyOffice = (officeNumber: number) => {
    if (monthlyOfficeNumber === officeNumber) {
      setMonthlyOfficeNumber(null);
      clearMonthlyOffice();
    } else {
      setMonthlyOfficeNumber(officeNumber);
      saveMonthlyOffice(officeNumber);
    }
  };

  const onToggleKeepAwake = (value: boolean) => {
    setKeepAwake(value);
    saveKeepScreenAwake(value);
  };

  const onToggleNightMode = (value: boolean) => {
    setMode(value ? 'night' : 'light');
  };

  const onToggleReminder = async (value: boolean) => {
    if (value) {
      const granted = await enableVigilReminder();
      setReminder(granted);
      if (!granted) {
        Alert.alert(
          t('settings.notificationsDisabledTitle'),
          t('settings.notificationsDisabledMessage'),
          [
            { text: t('common.cancel'), style: 'cancel' },
            { text: t('settings.openSettings'), onPress: () => Linking.openSettings() },
          ]
        );
      }
    } else {
      setReminder(false);
      await disableVigilReminder();
    }
  };

  const onResetProgress = () => {
    Alert.alert(
      t('settings.resetProgressConfirmTitle'),
      t('settings.resetProgressConfirmMessage'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('settings.reset'),
          style: 'destructive',
          onPress: async () => {
            await clearProgress();
            await clearVigilCompletions();
            Alert.alert(t('settings.progressResetTitle'), t('settings.progressResetMessage'));
          },
        },
      ]
    );
  };

  const onViewAcknowledgements = () => {
    navigation.navigate('Vigil', { startIndex: findStepIndex('acknowledgements') });
  };

  const onSendFeedback = () => {
    const subject = encodeURIComponent(t('settings.feedbackEmailSubject'));
    const body = encodeURIComponent(`\n\n—\nVersion ${appConfig.expo.version}`);
    Linking.openURL(`mailto:apollojudge0@gmail.com?subject=${subject}&body=${body}`).catch(() => {
      Alert.alert(t('settings.noEmailAppTitle'), t('settings.noEmailAppMessage'));
    });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>{t('settings.vigilSection')}</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowLabel}>{t('settings.keepScreenAwake')}</Text>
              <Text style={styles.rowHint}>{t('settings.keepScreenAwakeHint')}</Text>
            </View>
            <ThemedSwitch value={keepAwake} onValueChange={onToggleKeepAwake} colors={colors} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowLabel}>{t('settings.nightMode')}</Text>
              <Text style={styles.rowHint}>{t('settings.nightModeHint')}</Text>
            </View>
            <ThemedSwitch value={mode === 'night'} onValueChange={onToggleNightMode} colors={colors} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.rowLabel}>{t('settings.language')}</Text>
          <Text style={styles.rowHint}>{t('settings.languageHint')}</Text>
          <View style={styles.textSizeRow}>
            {AVAILABLE_LANGUAGES.map((lang) => {
              const selected = lang === language;
              return (
                <Pressable
                  key={lang}
                  style={[styles.textSizePill, selected && styles.textSizePillSelected]}
                  onPress={() => setLanguage(lang)}
                >
                  <Text style={[styles.textSizePillText, selected && styles.textSizePillTextSelected]}>
                    {LANGUAGE_LABELS[lang]}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.rowLabel}>{t('settings.textSize')}</Text>
          <Text style={styles.rowHint}>{t('settings.textSizeHint')}</Text>
          <View style={styles.textSizeRow}>
            {TEXT_SIZE_ORDER.map((size) => {
              const selected = size === textSize;
              return (
                <Pressable
                  key={size}
                  style={[styles.textSizePill, selected && styles.textSizePillSelected]}
                  onPress={() => onSelectTextSize(size)}
                >
                  <Text style={[styles.textSizePillText, selected && styles.textSizePillTextSelected]}>
                    {t(TEXT_SIZE_KEYS[size])}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.rowLabel}>{t('settings.monthlyOffice')}</Text>
          <Text style={styles.rowHint}>{t('settings.monthlyOfficeHint', { month: currentMonthLabel })}</Text>
          <View style={styles.officeGrid}>
            {officeChoirs.map(({ number, name }) => {
              const selected = number === monthlyOfficeNumber;
              return (
                <Pressable
                  key={number}
                  style={[styles.officePill, selected && styles.officePillSelected]}
                  onPress={() => onSelectMonthlyOffice(number)}
                >
                  <Text style={[styles.officePillText, selected && styles.officePillTextSelected]}>{name}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowLabel}>{t('settings.vigilReminder')}</Text>
              <Text style={styles.rowHint}>{t('settings.vigilReminderHint')}</Text>
            </View>
            <ThemedSwitch value={reminder} onValueChange={onToggleReminder} colors={colors} />
          </View>
        </View>

        <Pressable style={[styles.card, styles.pressableRow]} onPress={onResetProgress}>
          <Text style={styles.rowLabel}>{t('settings.resetProgress')}</Text>
          <Text style={styles.rowHint}>{t('settings.resetProgressHint')}</Text>
        </Pressable>

        <Text style={styles.sectionTitle}>{t('settings.aboutSection')}</Text>
        <Pressable style={[styles.card, styles.pressableRow]} onPress={onViewAcknowledgements}>
          <Text style={styles.rowLabel}>{t('settings.acknowledgements')}</Text>
          <Text style={styles.rowHint}>{t('settings.acknowledgementsHint')}</Text>
        </Pressable>

        <Pressable style={[styles.card, styles.pressableRow]} onPress={onSendFeedback}>
          <Text style={styles.rowLabel}>{t('settings.sendFeedback')}</Text>
          <Text style={styles.rowHint}>{t('settings.sendFeedbackHint')}</Text>
        </Pressable>

        <View style={styles.card}>
          <Text style={styles.rowLabel}>{t('settings.appName')}</Text>
          <Text style={styles.rowHint}>{t('settings.appVersion', { version: appConfig.expo.version })}</Text>
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
    pressableRow: {
      gap: 2,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: spacing.md,
    },
    rowText: {
      flex: 1,
      gap: 2,
    },
    rowLabel: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 19,
      color: colors.text,
    },
    rowHint: {
      fontFamily: fonts.italic,
      fontSize: 15,
      color: colors.textMuted,
    },
    textSizeRow: {
      flexDirection: 'row',
      gap: spacing.sm,
      marginTop: spacing.sm,
    },
    officeGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
      marginTop: spacing.sm,
    },
    officePill: {
      paddingVertical: spacing.xs + 2,
      paddingHorizontal: spacing.md,
      borderRadius: radii.sm,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.background,
    },
    officePillText: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 14,
      color: colors.text,
    },
    officePillSelected: {
      backgroundColor: colors.accent,
      borderColor: colors.accent,
    },
    officePillTextSelected: {
      color: colors.onAccent,
    },
    textSizePill: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: spacing.sm,
      borderRadius: radii.sm,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.background,
    },
    textSizePillText: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 15,
      color: colors.text,
      textAlign: 'center',
    },
    textSizePillSelected: {
      backgroundColor: colors.accent,
      borderColor: colors.accent,
    },
    textSizePillTextSelected: {
      color: colors.onAccent,
    },
  });
}
