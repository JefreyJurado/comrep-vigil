import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { lightColors, nightColors, ThemeColors } from './theme';
import { loadThemeMode, saveThemeMode, ThemeMode } from '../utils/settings';

interface ThemeContextValue {
  colors: ThemeColors;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>('light');

  useEffect(() => {
    loadThemeMode().then(setModeState);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      colors: mode === 'night' ? nightColors : lightColors,
      mode,
      setMode: (next) => {
        setModeState(next);
        saveThemeMode(next);
      },
    }),
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
