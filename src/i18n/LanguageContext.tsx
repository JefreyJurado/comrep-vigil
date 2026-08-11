import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { Language } from './languages';
import { en, UIStringKey } from './strings/en';
import { es } from './strings/es';
import { fil } from './strings/fil';
import { loadLanguage, saveLanguage } from '../utils/settings';

const STRINGS: Record<Language, Partial<Record<UIStringKey, string>>> = { en, es, fil };

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: UIStringKey, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    loadLanguage().then(setLanguageState);
  }, []);

  const t = useCallback(
    (key: UIStringKey, vars?: Record<string, string | number>) => {
      const template = STRINGS[language]?.[key] ?? en[key] ?? key;
      return interpolate(template, vars);
    },
    [language]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      t,
      setLanguage: (next) => {
        setLanguageState(next);
        saveLanguage(next);
      },
    }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
