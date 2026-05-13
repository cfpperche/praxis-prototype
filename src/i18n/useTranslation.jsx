import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations, supportedLocales, defaultLocale } from './translations.js';

const STORAGE_KEY = 'praxis.locale';

const I18nContext = createContext({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key) => key,
  raw: () => null,
  supported: supportedLocales
});

function detectInitialLocale() {
  if (typeof window === 'undefined') return defaultLocale;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && supportedLocales.includes(stored)) return stored;
  } catch (_) {
    // ignore storage errors
  }
  const nav = (window.navigator && window.navigator.language) || '';
  const short = nav.slice(0, 2).toLowerCase();
  if (supportedLocales.includes(short)) return short;
  return defaultLocale;
}

function resolve(dictionary, path) {
  const parts = path.split('.');
  let cursor = dictionary;
  for (const part of parts) {
    if (cursor == null) return undefined;
    cursor = cursor[part];
  }
  return cursor;
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(detectInitialLocale);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch (_) {
      // ignore
    }
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (supportedLocales.includes(next)) setLocaleState(next);
  }, []);

  const t = useCallback(
    (key, fallback) => {
      const value = resolve(translations[locale], key);
      if (typeof value === 'string') return value;
      if (fallback != null) return fallback;
      const fallbackValue = resolve(translations[defaultLocale], key);
      return typeof fallbackValue === 'string' ? fallbackValue : key;
    },
    [locale]
  );

  const raw = useCallback(
    (key) => {
      const value = resolve(translations[locale], key);
      if (value != null) return value;
      return resolve(translations[defaultLocale], key);
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, raw, supported: supportedLocales }),
    [locale, setLocale, t, raw]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  return useContext(I18nContext);
}
