import en from './locales/en.json';
import ta from './locales/ta.json';

export const locales = {
  en: 'English',
  ta: 'தமிழ்'
} as const;

export type Locale = keyof typeof locales;

export const defaultLocale: Locale = 'en';

export const translations = {
  en,
  ta
} as const;

export function getTranslation(locale: Locale) {
  return translations[locale];
} 