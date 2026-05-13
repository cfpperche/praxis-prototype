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
                <Timeline type={i} />
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

function Timeline({ type }) {
  if (type === 0) {
    return (
      <div className="mt-4 flex h-1.5 w-full overflow-hidden rounded-full" aria-hidden="true">
        <span className="block bg-accent-500/80" style={{ width: '15%' }} />
        <span className="block flex-1 bg-ink-800/70" />
      </div>
    );
  }
  if (type === 1) {
    return (
      <div className="mt-4 flex h-1.5 w-full overflow-hidden rounded-full" aria-hidden="true">
        <span className="block bg-accent-500/80" style={{ width: '55%' }} />
        <span className="block flex-1 bg-ink-800/70" />
      </div>
    );
  }
  if (type === 2) {
    return (
      <div className="mt-4 flex items-center gap-2" aria-hidden="true">
        <span className="block h-1.5 flex-1 rounded-full bg-accent-500/80" />
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-accent-400"
        >
          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (type === 3) {
    return (
      <div
        className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-accent-500/80"
        aria-hidden="true"
      >
        <div className="absolute inset-0 flex">
          {Array.from({ length: 11 }, (_, i) => (
            <span key={i} className="block flex-1 border-r border-ink-950/60" />
          ))}
          <span className="block flex-1" />
        </div>
      </div>
    );
  }
  return null;
}
