import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirstFridayOfMonth } from './reminders';

export interface PersonalScheduleEntry {
  id: string;
  /** ISO yyyy-mm-dd */
  date: string;
  time?: string;
  note: string;
  done?: boolean;
}

const SCHEDULE_KEY = 'comrep-vigil:personal-schedule';

export async function loadPersonalSchedule(): Promise<PersonalScheduleEntry[]> {
  try {
    const raw = await AsyncStorage.getItem(SCHEDULE_KEY);
    if (!raw) return [];
    const entries = JSON.parse(raw);
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

async function savePersonalSchedule(entries: PersonalScheduleEntry[]): Promise<void> {
  try {
    await AsyncStorage.setItem(SCHEDULE_KEY, JSON.stringify(entries));
  } catch {
    // non-fatal
  }
}

export async function addPersonalScheduleEntry(
  date: string,
  note: string,
  time?: string
): Promise<PersonalScheduleEntry[]> {
  const entries = await loadPersonalSchedule();
  const next = [
    ...entries,
    { id: `${Date.now()}`, date, time: time?.trim() || undefined, note: note.trim() },
  ];
  await savePersonalSchedule(next);
  return next;
}

export async function editPersonalScheduleEntry(
  id: string,
  date: string,
  note: string,
  time?: string
): Promise<PersonalScheduleEntry[]> {
  const entries = await loadPersonalSchedule();
  const next = entries.map((entry) =>
    entry.id === id ? { ...entry, date, time: time?.trim() || undefined, note: note.trim() } : entry
  );
  await savePersonalSchedule(next);
  return next;
}

export async function toggleScheduleEntryDone(id: string): Promise<PersonalScheduleEntry[]> {
  const entries = await loadPersonalSchedule();
  const next = entries.map((entry) => (entry.id === id ? { ...entry, done: !entry.done } : entry));
  await savePersonalSchedule(next);
  return next;
}

export async function removePersonalScheduleEntry(id: string): Promise<PersonalScheduleEntry[]> {
  const entries = await loadPersonalSchedule();
  const next = entries.filter((entry) => entry.id !== id);
  await savePersonalSchedule(next);
  return next;
}

export interface UpcomingVigil {
  friday: Date;
  saturday: Date;
}

/** Next `count` First Friday–Saturday vigil occurrences from `from` onward,
 * reusing the same First-Friday rule as the Settings vigil reminder. */
export function getUpcomingVigils(count: number, from: Date): UpcomingVigil[] {
  const vigils: UpcomingVigil[] = [];
  let year = from.getFullYear();
  let month = from.getMonth();

  while (vigils.length < count) {
    const friday = getFirstFridayOfMonth(year, month);
    const saturday = new Date(friday);
    saturday.setDate(saturday.getDate() + 1);

    if (saturday >= from) {
      vigils.push({ friday, saturday });
    }

    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
  }

  return vigils;
}
