import { useTranslation } from '../i18n/useTranslation.jsx';
import Reveal from './Reveal.jsx';

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
            {items.map((name, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-xl border border-ink-800 bg-ink-900/50 px-5 py-4 text-ink-100 hover:border-ink-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                <span className="text-base">{name}</span>
              </li>
            ))}
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
