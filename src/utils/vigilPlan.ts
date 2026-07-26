import AsyncStorage from '@react-native-async-storage/async-storage';

/** Parts long enough to be worth skipping on a night with less time —
 * offered as opt-out toggles in Settings. Referenced by VigilPart.id. */
export const OPTIONAL_PARTS = [
  {
    id: 'nine-offices',
    label: 'Nine Offices of the Sacred Heart',
    hint: 'The longest single part of the vigil.',
  },
  {
    id: 'saturday-office',
    label: 'Saturday Office of Readings',
    hint: 'Scripture readings and psalms prayed after midnight.',
  },
] as const;

const EXCLUDED_PARTS_KEY = 'comrep-vigil:excluded-parts';

export async function loadExcludedPartIds(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(EXCLUDED_PARTS_KEY);
    if (!raw) return [];
    const ids = JSON.parse(raw);
    return Array.isArray(ids) ? ids : [];
  } catch {
    return [];
  }
}

export async function saveExcludedPartIds(ids: string[]): Promise<void> {
  try {
    await AsyncStorage.setItem(EXCLUDED_PARTS_KEY, JSON.stringify(ids));
  } catch {
    // non-fatal
  }
}
