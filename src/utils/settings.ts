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

export type TextSize = 'small' | 'medium' | 'large' | 'extraLarge';

export const TEXT_SIZE_SCALES: Record<TextSize, number> = {
  small: 0.88,
  medium: 1,
  large: 1.18,
  extraLarge: 1.36,
};

export const TEXT_SIZE_ORDER: TextSize[] = ['small', 'medium', 'large', 'extraLarge'];

export const TEXT_SIZE_LABELS: Record<TextSize, string> = {
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
  extraLarge: 'Extra Large',
};

const TEXT_SIZE_KEY = 'comrep-vigil:text-size';
const DEFAULT_TEXT_SIZE: TextSize = 'medium';

export async function loadTextSize(): Promise<TextSize> {
  try {
    const value = await AsyncStorage.getItem(TEXT_SIZE_KEY);
    return value && value in TEXT_SIZE_SCALES ? (value as TextSize) : DEFAULT_TEXT_SIZE;
  } catch {
    return DEFAULT_TEXT_SIZE;
  }
}

export async function saveTextSize(size: TextSize): Promise<void> {
  try {
    await AsyncStorage.setItem(TEXT_SIZE_KEY, size);
  } catch {
    // non-fatal
  }
}

export type ThemeMode = 'light' | 'night';

const THEME_MODE_KEY = 'comrep-vigil:theme-mode';
const DEFAULT_THEME_MODE: ThemeMode = 'light';

export async function loadThemeMode(): Promise<ThemeMode> {
  try {
    const value = await AsyncStorage.getItem(THEME_MODE_KEY);
    return value === 'night' || value === 'light' ? value : DEFAULT_THEME_MODE;
  } catch {
    return DEFAULT_THEME_MODE;
  }
}

export async function saveThemeMode(mode: ThemeMode): Promise<void> {
  try {
    await AsyncStorage.setItem(THEME_MODE_KEY, mode);
  } catch {
    // non-fatal
  }
}
