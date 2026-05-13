import { useTranslation } from '../i18n/useTranslation.jsx';
import Reveal from './Reveal.jsx';

export default function Challenge() {
  const { t, raw } = useTranslation();
  const items = raw('challenge.items') || [];

  return (
    <section id="challenge" className="section section-divider">
      <div className="container-narrow">
        <Reveal>
          <header className="max-w-2xl">
            <p className="eyebrow">{t('challenge.eyebrow')}</p>
            <h2 className="heading-2 mt-3">{t('challenge.title')}</h2>
            <p className="body mt-4">{t('challenge.subtitle')}</p>
          </header>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 90}>
              <article className="card flex h-full flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-ink-700 bg-ink-950/70 px-3 py-1 text-xs text-ink-300">
                    {item.from}
                  </span>
                  <ArrowRight />
                  <span className="rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs text-accent-200">
                    {item.to}
                  </span>
                </div>
                <h3 className="heading-3 mt-6">{item.headline}</h3>
                <p className="body-sm mt-3 flex-1">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-14 border-t border-ink-800 pt-8 text-center font-serif text-xl italic text-ink-100">
            {t('challenge.bumper')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-ink-500"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
