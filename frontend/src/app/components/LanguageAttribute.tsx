"use client";

import { useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function LanguageAttribute() {
  const { locale } = useLanguage();

  useEffect(() => {
    // Set the HTML lang attribute based on the current locale
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
} 