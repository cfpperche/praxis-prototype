import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../i18n/useTranslation.jsx';
import { localeLabels, localeFullLabels } from '../i18n/translations.js';

export default function LanguageSwitcher() {
  const { locale, setLocale, supported } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (!ref.current || ref.current.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-md border border-ink-800 bg-ink-900/60 px-3 py-1.5 text-xs font-medium text-ink-100 hover:border-ink-600"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe />
        <span className="font-mono uppercase tracking-wider">{localeLabels[locale]}</span>
        <Chevron />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-30 mt-2 w-40 rounded-md border border-ink-800 bg-ink-950/95 p-1 shadow-xl backdrop-blur"
        >
          {supported.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={locale === code}
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm ${
                  locale === code ? 'bg-ink-800 text-white' : 'text-ink-200 hover:bg-ink-800/60'
                }`}
              >
                <span>{localeFullLabels[code]}</span>
                <span className="font-mono text-xs text-ink-400">{localeLabels[code]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Globe() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
