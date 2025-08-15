"use client";

import { useLanguage } from '../../contexts/LanguageContext';
import { locales } from '../../i18n/config';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <motion.div 
      className="flex items-center space-x-3"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.span 
        className="text-sm font-medium text-gray-600 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {t('common.language')}:
      </motion.span>
      <motion.select
        value={locale}
        onChange={(e) => setLocale(e.target.value as 'en' | 'ta')}
        className="px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-gray-300 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {Object.entries(locales).map(([code, name]) => (
          <option key={code} value={code} className="bg-white text-gray-700">
            {name}
          </option>
        ))}
      </motion.select>
    </motion.div>
  );
} 