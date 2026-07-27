import AsyncStorage from '@react-native-async-storage/async-storage';

const INTENTION_KEY = 'comrep-vigil:intention';
const INTENTION_HISTORY_KEY = 'comrep-vigil:intention-history';

export interface IntentionEntry {
  id: string;
  /** ISO yyyy-mm-dd, the day the vigil finished */
  date: string;
  text: string;
}

export async function loadIntention(): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem(INTENTION_KEY);
    return value && value.trim().length > 0 ? value : null;
  } catch {
    return null;
  }
}

export async function saveIntention(intention: string): Promise<void> {
  try {
    await AsyncStorage.setItem(INTENTION_KEY, intention.trim());
  } catch {
    // non-fatal
  }
}

export async function clearIntention(): Promise<void> {
  try {
    await AsyncStorage.removeItem(INTENTION_KEY);
  } catch {
    // non-fatal
  }
}

export async function loadIntentionHistory(): Promise<IntentionEntry[]> {
  try {
    const raw = await AsyncStorage.getItem(INTENTION_HISTORY_KEY);
    if (!raw) return [];
    const entries = JSON.parse(raw);
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

async function saveIntentionHistory(entries: IntentionEntry[]): Promise<void> {
  try {
    await AsyncStorage.setItem(INTENTION_HISTORY_KEY, JSON.stringify(entries));
  } catch {
    // non-fatal
  }
}

/** Logs a completed vigil's intention to history. No-ops on blank text. */
export async function archiveIntention(text: string, date: string): Promise<void> {
  const trimmed = text.trim();
  if (!trimmed) return;
  const entries = await loadIntentionHistory();
  await saveIntentionHistory([...entries, { id: `${Date.now()}`, date, text: trimmed }]);
}

export async function removeIntentionHistoryEntry(id: string): Promise<IntentionEntry[]> {
  const entries = await loadIntentionHistory();
  const next = entries.filter((entry) => entry.id !== id);
  await saveIntentionHistory(next);
  return next;
}
