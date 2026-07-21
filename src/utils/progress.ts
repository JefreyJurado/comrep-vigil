import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'comrep-vigil:last-step-index';

export async function saveProgress(index: number): Promise<void> {
  try {
    await AsyncStorage.setItem(KEY, String(index));
  } catch {
    // non-fatal
  }
}

export async function loadProgress(): Promise<number | null> {
  try {
    const value = await AsyncStorage.getItem(KEY);
    return value ? Number(value) : null;
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
