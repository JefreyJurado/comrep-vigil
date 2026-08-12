import AsyncStorage from '@react-native-async-storage/async-storage';

const JOURNAL_KEY = 'comrep-vigil:journal';

export interface JournalEntry {
  id: string;
  /** ISO yyyy-mm-dd, the day the vigil finished */
  date: string;
  note: string;
}

export async function loadJournalEntries(): Promise<JournalEntry[]> {
  try {
    const raw = await AsyncStorage.getItem(JOURNAL_KEY);
    if (!raw) return [];
    const entries = JSON.parse(raw);
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

async function saveJournalEntries(entries: JournalEntry[]): Promise<void> {
  try {
    await AsyncStorage.setItem(JOURNAL_KEY, JSON.stringify(entries));
  } catch {
    // non-fatal
  }
}

/** Logs a reflection for a completed vigil. No-ops on blank text. */
export async function addJournalEntry(date: string, note: string): Promise<void> {
  const trimmed = note.trim();
  if (!trimmed) return;
  const entries = await loadJournalEntries();
  await saveJournalEntries([...entries, { id: `${Date.now()}`, date, note: trimmed }]);
}

export async function removeJournalEntry(id: string): Promise<JournalEntry[]> {
  const entries = await loadJournalEntries();
  const next = entries.filter((entry) => entry.id !== id);
  await saveJournalEntries(next);
  return next;
}
