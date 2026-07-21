import AsyncStorage from '@react-native-async-storage/async-storage';

const KEEP_AWAKE_KEY = 'comrep-vigil:keep-screen-awake';

export async function loadKeepScreenAwake(): Promise<boolean> {
  try {
    const value = await AsyncStorage.getItem(KEEP_AWAKE_KEY);
    return value === 'true';
  } catch {
    return false;
  }
}

export async function saveKeepScreenAwake(enabled: boolean): Promise<void> {
  try {
    await AsyncStorage.setItem(KEEP_AWAKE_KEY, enabled ? 'true' : 'false');
  } catch {
    // non-fatal
  }
}
