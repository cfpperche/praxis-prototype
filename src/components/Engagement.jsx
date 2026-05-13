import { useTranslation } from '../i18n/useTranslation.jsx';
import Reveal from './Reveal.jsx';

export default function Engagement() {
  const { t, raw } = useTranslation();
  const items = raw('engagement.items') || [];

  return (
    <section id="engagement" className="section section-divider">
      <div className="container-narrow">
        <Reveal>
          <header className="max-w-2xl">
            <p className="eyebrow">{t('engagement.eyebrow')}</p>
            <h2 className="heading-2 mt-3">{t('engagement.title')}</h2>
            <p className="body mt-4">{t('engagement.subtitle')}</p>
          </header>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((m, i) => (
            <Reveal key={i} delay={(i % 2) * 90}>
              <article className="card flex h-full flex-col">
                <h3 className="heading-3">{m.name}</h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent-300">
                  {m.format}
                </p>
                <p className="body-sm mt-4">{m.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-14 border-t border-ink-800 pt-8 text-center font-serif text-xl italic text-ink-100">
            {t('engagement.bumper')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
