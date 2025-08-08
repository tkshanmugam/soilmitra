"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, defaultLocale, getTranslation } from '../i18n/config';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'ta')) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string): string => {
    const translation = getTranslation(locale);
    const keys = key.split('.');
    let value: any = translation;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        const fallbackTranslation = getTranslation('en');
        let fallbackValue: any = fallbackTranslation;
        for (const fallbackKey of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackValue) {
            fallbackValue = fallbackValue[fallbackKey];
          } else {
            return key; // Return the key if no translation found
          }
        }
        return fallbackValue || key;
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 