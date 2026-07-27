import AsyncStorage from '@react-native-async-storage/async-storage';

export { computeStreak } from './vigilStreak';

const COMPLETIONS_KEY = 'comrep-vigil:vigil-completions';

/** ISO yyyy-mm-dd of every vigil the user has finished (one entry per Finish tap). */
export async function loadVigilCompletions(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(COMPLETIONS_KEY);
    if (!raw) return [];
    const dates = JSON.parse(raw);
    return Array.isArray(dates) ? dates : [];
  } catch {
    return [];
  }
}

export async function recordVigilCompletion(date: string): Promise<string[]> {
  const dates = await loadVigilCompletions();
  const next = [...dates, date];
  try {
    await AsyncStorage.setItem(COMPLETIONS_KEY, JSON.stringify(next));
  } catch {
    // non-fatal
  }
  return next;
}

export async function clearVigilCompletions(): Promise<void> {
  try {
    await AsyncStorage.removeItem(COMPLETIONS_KEY);
  } catch {
    // non-fatal
  }
}
