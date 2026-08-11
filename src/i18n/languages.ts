export type Language = 'en' | 'es' | 'fil';

export const ALL_LANGUAGES: Language[] = ['en', 'es', 'fil'];

/**
 * Languages selectable in Settings right now. A language only appears here
 * once its UI strings (and, separately, its liturgical content) have been
 * reviewed and approved — flipping this array is the actual release step.
 */
export const AVAILABLE_LANGUAGES: Language[] = ['en'];

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fil: 'Filipino',
};
