import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ConfessionEntry {
  id: string;
  /** ISO yyyy-mm-dd */
  date: string;
  priest: string;
  note?: string;
}

const CONFESSION_LOG_KEY = 'comrep-vigil:confession-log';

export async function loadConfessionLog(): Promise<ConfessionEntry[]> {
  try {
    const raw = await AsyncStorage.getItem(CONFESSION_LOG_KEY);
    if (!raw) return [];
    const entries = JSON.parse(raw);
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

async function saveConfessionLog(entries: ConfessionEntry[]): Promise<void> {
  try {
    await AsyncStorage.setItem(CONFESSION_LOG_KEY, JSON.stringify(entries));
  } catch {
    // non-fatal
  }
}

export async function addConfessionEntry(date: string, priest: string, note: string): Promise<ConfessionEntry[]> {
  const entries = await loadConfessionLog();
  const next = [...entries, { id: `${Date.now()}`, date, priest: priest.trim(), note: note.trim() || undefined }];
  await saveConfessionLog(next);
  return next;
}

export async function removeConfessionEntry(id: string): Promise<ConfessionEntry[]> {
  const entries = await loadConfessionLog();
  const next = entries.filter((entry) => entry.id !== id);
  await saveConfessionLog(next);
  return next;
}

function toTime(entry: ConfessionEntry): number {
  return new Date(`${entry.date}T00:00:00`).getTime();
}

/** Most recent confession, or null if none logged / all dates unparseable. */
export async function getLastConfession(): Promise<ConfessionEntry | null> {
  const entries = (await loadConfessionLog()).filter((e) => !Number.isNaN(toTime(e)));
  if (entries.length === 0) return null;
  return entries.reduce((latest, entry) => (toTime(entry) > toTime(latest) ? entry : latest));
}
