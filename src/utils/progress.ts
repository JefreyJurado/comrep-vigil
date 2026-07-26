import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'comrep-vigil:last-section-id';

export async function saveProgress(sectionId: string): Promise<void> {
  try {
    await AsyncStorage.setItem(KEY, sectionId);
  } catch {
    // non-fatal
  }
}

export async function loadProgress(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export async function clearProgress(): Promise<void> {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch {
    // non-fatal
  }
}
