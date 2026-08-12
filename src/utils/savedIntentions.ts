import AsyncStorage from '@react-native-async-storage/async-storage';

const SAVED_INTENTIONS_KEY = 'comrep-vigil:saved-intentions';

export interface SavedIntention {
  id: string;
  text: string;
  /** ISO yyyy-mm-dd, the day this was first saved */
  createdDate: string;
  answered: boolean;
  /** ISO yyyy-mm-dd, set when marked answered */
  answeredDate?: string;
}

export async function loadSavedIntentions(): Promise<SavedIntention[]> {
  try {
    const raw = await AsyncStorage.getItem(SAVED_INTENTIONS_KEY);
    if (!raw) return [];
    const entries = JSON.parse(raw);
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

async function persist(entries: SavedIntention[]): Promise<void> {
  try {
    await AsyncStorage.setItem(SAVED_INTENTIONS_KEY, JSON.stringify(entries));
  } catch {
    // non-fatal
  }
}

export async function addSavedIntention(text: string, today: string): Promise<SavedIntention[]> {
  const trimmed = text.trim();
  if (!trimmed) return loadSavedIntentions();
  const entries = await loadSavedIntentions();
  const next = [...entries, { id: `${Date.now()}`, text: trimmed, createdDate: today, answered: false }];
  await persist(next);
  return next;
}

export async function updateSavedIntentionText(id: string, text: string): Promise<SavedIntention[]> {
  const entries = await loadSavedIntentions();
  const trimmed = text.trim();
  const next = trimmed
    ? entries.map((e) => (e.id === id ? { ...e, text: trimmed } : e))
    : entries.filter((e) => e.id !== id);
  await persist(next);
  return next;
}

export async function toggleSavedIntentionAnswered(id: string, today: string): Promise<SavedIntention[]> {
  const entries = await loadSavedIntentions();
  const next = entries.map((e) =>
    e.id === id
      ? e.answered
        ? { ...e, answered: false, answeredDate: undefined }
        : { ...e, answered: true, answeredDate: today }
      : e
  );
  await persist(next);
  return next;
}

export async function removeSavedIntention(id: string): Promise<SavedIntention[]> {
  const entries = await loadSavedIntentions();
  const next = entries.filter((e) => e.id !== id);
  await persist(next);
  return next;
}
