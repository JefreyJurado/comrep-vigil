import AsyncStorage from '@react-native-async-storage/async-storage';

const INTENTION_KEY = 'comrep-vigil:intention';

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
