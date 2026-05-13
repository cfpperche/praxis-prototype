import { useTranslation } from '../i18n/useTranslation.jsx';
import Reveal from './Reveal.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function Approach() {
  const { t, raw } = useTranslation();
  const phases = raw('approach.phases') || [];
  const outputLabel = t('approach.outputLabel');
  const transformationLabel = t('approach.transformationLabel');
  const transformationStates = raw('approach.transformationStates') || [];

  return (
    <section id="approach" className="section section-divider">
      <div className="container-narrow">
        <Reveal>
          <header className="max-w-2xl">
            <p className="eyebrow">{t('approach.eyebrow')}</p>
            <h2 className="heading-2 mt-3">{t('approach.title')}</h2>
            <p className="body mt-4">{t('approach.subtitle')}</p>
          </header>
        </Reveal>

        <Reveal>
          <div className="mt-14 hidden lg:block">
            <div className="relative">
              <ConnectorLine />
              <div className="grid grid-cols-4">
                {phases.map((p) => (
                  <div key={p.phase} className="flex justify-center">
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/40 bg-ink-950 font-mono text-sm font-medium text-accent-300">
                      {p.phase}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
          {phases.map((p, i) => (
            <Reveal key={p.phase} delay={i * 70}>
              <li className="flex h-full flex-col rounded-2xl border border-ink-800 bg-ink-900/50 p-6">
                <span className="font-mono text-xs tracking-wider text-accent-300 lg:hidden">
                  {p.phase}
                </span>
                <h3 className="heading-3 mt-3 lg:mt-0">{p.title}</h3>
                <p className="body-sm mt-3 flex-1">{p.description}</p>
                <div className="mt-6 border-t border-ink-800 pt-4">
                  <p className="text-xs uppercase tracking-wider text-ink-400">{outputLabel}</p>
                  <p className="mt-1 text-sm text-ink-200">{p.output}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-12 rounded-2xl border border-ink-800 bg-ink-900/30 p-6 sm:p-8">
            <p className="eyebrow">{transformationLabel}</p>
            <ol className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2">
              {transformationStates.map((s, i) => (
                <li key={i} className="flex flex-1 items-center gap-3">
                  <div className="flex flex-1 flex-col gap-1.5 rounded-xl border border-ink-800 bg-ink-900/60 px-4 py-3">
                    <span className="font-mono text-xs text-accent-300">{`0${i + 1}`}</span>
                    <span className="text-sm text-ink-100">{s}</span>
                  </div>
                  {i < transformationStates.length - 1 && (
                    <span className="hidden text-ink-700 lg:inline-flex" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-12 border-t border-ink-800 pt-8 text-center font-serif text-xl italic text-ink-100">
            {t('approach.bumper')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ConnectorLine() {
  const [ref, revealed] = useReveal({ threshold: 0.3 });
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute left-[12.5%] right-[12.5%] top-5 h-px origin-left bg-ink-600/80"
      style={{
        transform: revealed ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    />
  );
}
