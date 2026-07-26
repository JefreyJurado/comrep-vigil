import { useCallback, useMemo, useState } from 'react';
import { Alert, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { ThemedSwitch } from '../components/ThemedSwitch';
import { contentMaxWidth, fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';
import { clearProgress } from '../utils/progress';
import {
  loadKeepScreenAwake,
  saveKeepScreenAwake,
  loadTextSize,
  saveTextSize,
  TEXT_SIZE_ORDER,
  TEXT_SIZE_LABELS,
  type TextSize,
} from '../utils/settings';
import { loadReminderEnabled, enableVigilReminder, disableVigilReminder } from '../utils/reminders';
import { findStepIndex } from '../content';
import appConfig from '../../app.json';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export function SettingsScreen({ navigation }: Props) {
  const { colors, mode, setMode } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [keepAwake, setKeepAwake] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [textSize, setTextSize] = useState<TextSize>('medium');

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
      return () => {
        active = false;
      };
    }, [])
  );

  const onSelectTextSize = (size: TextSize) => {
    setTextSize(size);
    saveTextSize(size);
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
          'Notifications Disabled',
          'ComRep Vigil needs notification permission to remind you before each First Friday vigil. You can enable it in your device settings.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: () => Linking.openSettings() },
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
      'Reset Vigil Progress?',
      'This clears where you left off. The next time you open the vigil, it will start from the beginning.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            await clearProgress();
            Alert.alert('Progress Reset', 'Your saved place in the vigil has been cleared.');
          },
        },
      ]
    );
  };

  const onViewAcknowledgements = () => {
    navigation.navigate('Vigil', { startIndex: findStepIndex('acknowledgements') });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Vigil</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowLabel}>Keep Screen Awake</Text>
              <Text style={styles.rowHint}>Prevents the screen from locking while you pray through the vigil.</Text>
            </View>
            <ThemedSwitch value={keepAwake} onValueChange={onToggleKeepAwake} colors={colors} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowLabel}>Night Mode</Text>
              <Text style={styles.rowHint}>A dimmer palette for praying in a dark chapel or bedroom.</Text>
            </View>
            <ThemedSwitch value={mode === 'night'} onValueChange={onToggleNightMode} colors={colors} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.rowLabel}>Text Size</Text>
          <Text style={styles.rowHint}>Adjusts the size of the prayer text while you pray through the vigil.</Text>
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
                    {TEXT_SIZE_LABELS[size]}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowLabel}>Vigil Reminder</Text>
              <Text style={styles.rowHint}>
                A reminder the evening before every First Friday, when the vigil begins.
              </Text>
            </View>
            <ThemedSwitch value={reminder} onValueChange={onToggleReminder} colors={colors} />
          </View>
        </View>

        <Pressable style={[styles.card, styles.pressableRow]} onPress={onResetProgress}>
          <Text style={styles.rowLabel}>Reset Vigil Progress</Text>
          <Text style={styles.rowHint}>Start the next vigil from the very beginning.</Text>
        </Pressable>

        <Text style={styles.sectionTitle}>About</Text>
        <Pressable style={[styles.card, styles.pressableRow]} onPress={onViewAcknowledgements}>
          <Text style={styles.rowLabel}>Acknowledgements</Text>
          <Text style={styles.rowHint}>Sources, credits, and copyright information.</Text>
        </Pressable>

        <View style={styles.card}>
          <Text style={styles.rowLabel}>Communion of Reparation</Text>
          <Text style={styles.rowHint}>All Night Vigil Prayer Guide · Version {appConfig.expo.version}</Text>
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
