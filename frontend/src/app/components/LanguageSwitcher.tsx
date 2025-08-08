"use client";

import { useLanguage } from '../../contexts/LanguageContext';
import { locales } from '../../i18n/config';

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-600">
        {t('common.language')}:
      </span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as 'en' | 'ta')}
        className="px-3 py-1.5 text-sm bg-white/80 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:bg-white hover:border-gray-300"
      >
        {Object.entries(locales).map(([code, name]) => (
          <option key={code} value={code} className="bg-white text-gray-700">
            {name}
          </option>
        ))}
      </select>
    </div>
  );
} 