import { useTranslation } from '../i18n/useTranslation.jsx';
import Reveal from './Reveal.jsx';

const concepts = [ManualVelocityConcept, LegacyModernConcept, AIGovernanceConcept];

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
          {items.map((item, i) => {
            const Concept = concepts[i] || ManualVelocityConcept;
            return (
              <Reveal key={i} delay={i * 90}>
                <article className="card flex h-full flex-col">
                  <div className="-mx-2 -mt-2 mb-4 rounded-lg bg-ink-950/40 p-3 text-ink-300">
                    <Concept />
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-ink-700 bg-ink-950/70 px-3 py-1 text-xs text-ink-300">
                      {item.from}
                    </span>
                    <ArrowRight />
                    <span className="rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs text-accent-200">
                      {item.to}
                    </span>
                  </div>
                  <h3 className="heading-3 mt-5">{item.headline}</h3>
                  <p className="body-sm mt-3 flex-1">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
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

function ManualVelocityConcept() {
  return (
    <svg viewBox="0 0 280 70" xmlns="http://www.w3.org/2000/svg" fill="none" className="h-16 w-full">
      <g opacity="0.55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="14" y1="20" x2="86" y2="20" />
        <line x1="14" y1="34" x2="72" y2="34" />
        <line x1="14" y1="48" x2="86" y2="48" />
        <line x1="14" y1="62" x2="64" y2="62" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M120 41 L160 41" />
        <path d="M154 36 L160 41 L154 46" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g stroke="#46bb9d" strokeLinecap="round">
        <line x1="178" y1="22" x2="262" y2="22" strokeWidth="1.5" opacity="0.55" />
        <line x1="190" y1="34" x2="262" y2="34" strokeWidth="2" />
        <line x1="200" y1="46" x2="262" y2="46" strokeWidth="2.5" />
        <line x1="216" y1="58" x2="262" y2="58" strokeWidth="2" opacity="0.55" />
      </g>
    </svg>
  );
}

function LegacyModernConcept() {
  return (
    <svg viewBox="0 0 280 70" xmlns="http://www.w3.org/2000/svg" fill="none" className="h-16 w-full">
      <rect x="22" y="22" width="74" height="32" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <line x1="22" y1="34" x2="96" y2="34" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="22" y1="44" x2="96" y2="44" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M120 41 L160 41" />
        <path d="M154 36 L160 41 L154 46" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <rect x="206" y="28" width="48" height="22" rx="3" stroke="#46bb9d" strokeWidth="1.5" />
      <g fill="#46bb9d">
        <circle cx="188" cy="16" r="3" />
        <circle cx="188" cy="62" r="3" />
        <circle cx="272" cy="16" r="3" />
        <circle cx="272" cy="62" r="3" />
      </g>
      <g stroke="#46bb9d" strokeWidth="1.2" opacity="0.8">
        <line x1="188" y1="19" x2="206" y2="32" />
        <line x1="188" y1="59" x2="206" y2="46" />
        <line x1="272" y1="19" x2="254" y2="32" />
        <line x1="272" y1="59" x2="254" y2="46" />
      </g>
    </svg>
  );
}

function AIGovernanceConcept() {
  return (
    <svg viewBox="0 0 280 70" xmlns="http://www.w3.org/2000/svg" fill="none" className="h-16 w-full">
      <g stroke="currentColor" strokeWidth="1" opacity="0.55" fill="currentColor">
        <line x1="32" y1="20" x2="58" y2="40" strokeWidth="0.8" />
        <line x1="58" y1="40" x2="84" y2="20" strokeWidth="0.8" />
        <line x1="58" y1="40" x2="32" y2="58" strokeWidth="0.8" />
        <line x1="58" y1="40" x2="84" y2="58" strokeWidth="0.8" />
        <line x1="32" y1="20" x2="32" y2="58" strokeWidth="0.8" />
        <line x1="84" y1="20" x2="84" y2="58" strokeWidth="0.8" />
        <circle cx="58" cy="40" r="3.5" />
        <circle cx="32" cy="20" r="2.5" />
        <circle cx="84" cy="20" r="2.5" />
        <circle cx="32" cy="58" r="2.5" />
        <circle cx="84" cy="58" r="2.5" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M120 41 L160 41" />
        <path d="M154 36 L160 41 L154 46" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path
        d="M186 18 L262 18 L262 44 Q262 56 224 64 Q186 56 186 44 Z"
        stroke="#46bb9d"
        strokeWidth="1.5"
        fill="none"
      />
      <g fill="#46bb9d">
        <line x1="200" y1="30" x2="224" y2="42" stroke="#46bb9d" strokeWidth="0.8" opacity="0.7" />
        <line x1="248" y1="30" x2="224" y2="42" stroke="#46bb9d" strokeWidth="0.8" opacity="0.7" />
        <line x1="200" y1="50" x2="224" y2="42" stroke="#46bb9d" strokeWidth="0.8" opacity="0.7" />
        <line x1="248" y1="50" x2="224" y2="42" stroke="#46bb9d" strokeWidth="0.8" opacity="0.7" />
        <circle cx="224" cy="42" r="3.5" />
        <circle cx="200" cy="30" r="2.5" />
        <circle cx="248" cy="30" r="2.5" />
        <circle cx="200" cy="50" r="2.5" />
        <circle cx="248" cy="50" r="2.5" />
      </g>
    </svg>
  );
}
