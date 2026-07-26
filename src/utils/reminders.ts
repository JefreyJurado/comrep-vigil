import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

const ENABLED_KEY = 'comrep-vigil:reminder-enabled';
const SCHEDULED_STATE_KEY = 'comrep-vigil:reminder-scheduled-state';
const CHANNEL_ID = 'vigil-reminders';
const NOTIFICATION_IDENTIFIER = 'vigil-first-friday-reminder';

// Evening before First Friday, local time.
const REMINDER_HOUR = 18;
const REMINDER_MINUTE = 0;

type ScheduledState = {
  notificationId: string;
  scheduledForIso: string;
};

export async function loadReminderEnabled(): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(ENABLED_KEY)) === 'true';
  } catch {
    return false;
  }
}

export function getFirstFridayOfMonth(year: number, monthIndex: number): Date {
  const d = new Date(year, monthIndex, 1);
  const daysUntilFriday = (5 - d.getDay() + 7) % 7;
  d.setDate(1 + daysUntilFriday);
  return d;
}

/** Evening before the next upcoming First Friday, relative to `now`. */
export function getNextReminderDate(now: Date): Date {
  const candidate = (year: number, monthIndex: number) => {
    const firstFriday = getFirstFridayOfMonth(year, monthIndex);
    const reminder = new Date(firstFriday);
    reminder.setDate(reminder.getDate() - 1);
    reminder.setHours(REMINDER_HOUR, REMINDER_MINUTE, 0, 0);
    return reminder;
  };

  let reminder = candidate(now.getFullYear(), now.getMonth());
  if (reminder <= now) {
    const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    reminder = candidate(next.getFullYear(), next.getMonth());
  }
  return reminder;
}

async function ensureAndroidChannel(): Promise<void> {
  if (Platform.OS !== 'android') return;
  await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
    name: 'Vigil Reminders',
    importance: Notifications.AndroidImportance.HIGH,
  });
}

async function readScheduledState(): Promise<ScheduledState | null> {
  try {
    const raw = await AsyncStorage.getItem(SCHEDULED_STATE_KEY);
    return raw ? (JSON.parse(raw) as ScheduledState) : null;
  } catch {
    return null;
  }
}

async function writeScheduledState(state: ScheduledState | null): Promise<void> {
  try {
    if (state) {
      await AsyncStorage.setItem(SCHEDULED_STATE_KEY, JSON.stringify(state));
    } else {
      await AsyncStorage.removeItem(SCHEDULED_STATE_KEY);
    }
  } catch {
    // non-fatal
  }
}

async function cancelExistingNotification(): Promise<void> {
  const state = await readScheduledState();
  if (state) {
    await Notifications.cancelScheduledNotificationAsync(state.notificationId).catch(() => {});
  }
}

/** Requests permission and schedules a single notification for the next upcoming reminder. */
export async function enableVigilReminder(): Promise<boolean> {
  const { granted } = await Notifications.requestPermissionsAsync();
  if (!granted) return false;

  await ensureAndroidChannel();
  await cancelExistingNotification();

  const reminderDate = getNextReminderDate(new Date());
  const notificationId = await Notifications.scheduleNotificationAsync({
    identifier: NOTIFICATION_IDENTIFIER,
    content: {
      title: 'Vigil begins tomorrow',
      body: 'The Communion of Reparation All Night Vigil begins tomorrow evening (First Friday). Prepare your heart.',
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date: reminderDate,
      channelId: CHANNEL_ID,
    },
  });

  await writeScheduledState({ notificationId, scheduledForIso: reminderDate.toISOString() });
  await AsyncStorage.setItem(ENABLED_KEY, 'true');
  return true;
}

export async function disableVigilReminder(): Promise<void> {
  await cancelExistingNotification();
  await writeScheduledState(null);
  await AsyncStorage.setItem(ENABLED_KEY, 'false');
}

/**
 * Call on app startup. If reminders are enabled but the previously scheduled
 * notification has already fired (its date is in the past), rolls the
 * schedule forward to the next upcoming First Friday.
 */
export async function refreshVigilReminderIfNeeded(): Promise<void> {
  const enabled = await loadReminderEnabled();
  if (!enabled) return;

  const state = await readScheduledState();
  const scheduledFor = state ? new Date(state.scheduledForIso) : null;
  if (!scheduledFor || scheduledFor <= new Date()) {
    await enableVigilReminder();
  }
}
