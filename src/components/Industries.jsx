import { useTranslation } from '../i18n/useTranslation.jsx';
import Reveal from './Reveal.jsx';

const glyphs = [FinanceGlyph, HealthcareGlyph, RetailGlyph, IndustrialGlyph, TechGlyph, GovernmentGlyph];

export default function Industries() {
  const { t, raw } = useTranslation();
  const items = raw('industries.items') || [];

  return (
    <section id="industries" className="section section-divider">
      <div className="container-narrow">
        <Reveal>
          <header className="max-w-2xl">
            <p className="eyebrow">{t('industries.eyebrow')}</p>
            <h2 className="heading-2 mt-3">{t('industries.title')}</h2>
            <p className="body mt-4">{t('industries.subtitle')}</p>
          </header>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((name, i) => {
              const Glyph = glyphs[i] || FinanceGlyph;
              return (
                <li
                  key={i}
                  className="flex items-center gap-4 rounded-xl border border-ink-800 bg-ink-900/50 px-5 py-4 text-ink-100 hover:border-ink-600"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-300">
                    <Glyph />
                  </span>
                  <span className="text-base leading-snug">{name}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-14 border-t border-ink-800 pt-8 text-center font-serif text-xl italic text-ink-100">
            {t('industries.bumper')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FinanceGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M12 3 L22 8 H2 Z" />
      <line x1="5" y1="10" x2="5" y2="17" />
      <line x1="10" y1="10" x2="10" y2="17" />
      <line x1="14" y1="10" x2="14" y2="17" />
      <line x1="19" y1="10" x2="19" y2="17" />
      <line x1="2" y1="20" x2="22" y2="20" strokeWidth="1.8" />
    </svg>
  );
}

function HealthcareGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z" />
    </svg>
  );
}

function RetailGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 8 L19 8 L17.5 20 L6.5 20 Z" />
      <path d="M9 8 V6 a3 3 0 0 1 6 0 V8" />
    </svg>
  );
}

function IndustrialGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 20 V11 L9 8 V11 L15 8 V11 L21 8 V20 Z" />
      <rect x="6" y="15" width="2.5" height="3" fill="currentColor" stroke="none" />
      <rect x="11" y="15" width="2.5" height="3" fill="currentColor" stroke="none" />
      <rect x="16" y="15" width="2.5" height="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TechGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="1" />
      <rect x="10" y="10" width="4" height="4" fill="currentColor" stroke="none" />
      <line x1="9" y1="3" x2="9" y2="5" />
      <line x1="15" y1="3" x2="15" y2="5" />
      <line x1="9" y1="19" x2="9" y2="21" />
      <line x1="15" y1="19" x2="15" y2="21" />
      <line x1="3" y1="9" x2="5" y2="9" />
      <line x1="3" y1="15" x2="5" y2="15" />
      <line x1="19" y1="9" x2="21" y2="9" />
      <line x1="19" y1="15" x2="21" y2="15" />
    </svg>
  );
}

function GovernmentGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="3" x2="5" y2="21" strokeWidth="1.8" />
      <path d="M5 4 H18 L15 8 L18 12 H5" />
    </svg>
  );
}
