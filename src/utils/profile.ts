import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_NAME_KEY = 'comrep-vigil:user-name';

export async function loadUserName(): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem(USER_NAME_KEY);
    return value && value.trim().length > 0 ? value : null;
  } catch {
    return null;
  }
}

export async function saveUserName(name: string): Promise<void> {
  try {
    await AsyncStorage.setItem(USER_NAME_KEY, name.trim());
  } catch {
    // non-fatal
  }
}
