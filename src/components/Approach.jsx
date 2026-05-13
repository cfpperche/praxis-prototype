import { useTranslation } from '../i18n/useTranslation.jsx';
import Reveal from './Reveal.jsx';

export default function Approach() {
  const { t, raw } = useTranslation();
  const phases = raw('approach.phases') || [];
  const outputLabel = t('approach.outputLabel');
  const cycleLabel = t('approach.cycleLabel');
  const transformationLabel = t('approach.transformationLabel');
  const transformationStates = raw('approach.transformationStates') || [];

  return (
    <section id="approach" className="section section-divider section-ambient section-orb-soft section-dot-grid-soft">
      <div className="container-narrow">
        <Reveal>
          <header className="max-w-2xl">
            <p className="eyebrow">{t('approach.eyebrow')}</p>
            <h2 className="heading-2 mt-3">{t('approach.title')}</h2>
            <p className="body mt-4">{t('approach.subtitle')}</p>
          </header>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 flex justify-center">
            <CycleDiagram phases={phases} cycleLabel={cycleLabel} />
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2">
          {phases.map((p, i) => (
            <Reveal key={p.phase} delay={i * 70}>
              <li className="flex h-full flex-col rounded-2xl border border-ink-800 bg-ink-900/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-500/40 bg-ink-950 font-mono text-sm font-medium text-accent-300">
                    {p.phase}
                  </span>
                  <h3 className="heading-3">{p.title}</h3>
                </div>
                <p className="body-sm mt-4 flex-1">{p.description}</p>
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

function CycleDiagram({ phases, cycleLabel }) {
  if (phases.length < 4) return null;
  const positions = [
    { x: 240, y: 110, anchor: 'middle' }, // top - 01
    { x: 370, y: 240, anchor: 'middle' }, // right - 02
    { x: 240, y: 370, anchor: 'middle' }, // bottom - 03
    { x: 110, y: 240, anchor: 'middle' } // left - 04
  ];

  return (
    <svg
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-md"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="cycle-inner" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0" stopColor="#46bb9d" stopOpacity="0.18" />
          <stop offset="1" stopColor="#080d18" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g stroke="#3f485d" strokeWidth="1.4" fill="rgba(70, 187, 157, 0.04)">
        <path d="M 183 183 L 113 113 A 180 180 0 0 1 367 113 L 297 183 A 80 80 0 0 0 183 183 Z" />
        <path d="M 297 183 L 367 113 A 180 180 0 0 1 367 367 L 297 297 A 80 80 0 0 0 297 183 Z" />
        <path d="M 297 297 L 367 367 A 180 180 0 0 1 113 367 L 183 297 A 80 80 0 0 0 297 297 Z" />
        <path d="M 183 297 L 113 367 A 180 180 0 0 1 113 113 L 183 183 A 80 80 0 0 0 183 297 Z" />
      </g>

      <circle cx="240" cy="240" r="80" fill="url(#cycle-inner)" stroke="#46bb9d" strokeOpacity="0.35" strokeWidth="1.4" />

      <g
        transform="translate(240 232)"
        stroke="#46bb9d"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 0 -20 A 20 20 0 1 1 -20 0" />
        <path d="M -26 -6 L -20 0 L -14 -6" />
      </g>

      <text
        x="240"
        y="275"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="11"
        letterSpacing="0.08em"
        fill="#aeb6c6"
      >
        {(cycleLabel || '').toUpperCase()}
      </text>

      {phases.map((p, i) => {
        const pos = positions[i];
        if (!pos) return null;
        return (
          <g key={p.phase}>
            <text
              x={pos.x}
              y={pos.y - 14}
              textAnchor={pos.anchor}
              fontFamily="JetBrains Mono, ui-monospace, monospace"
              fontSize="12"
              fill="#46bb9d"
              opacity="0.9"
            >
              {p.phase}
            </text>
            <text
              x={pos.x}
              y={pos.y + 10}
              textAnchor={pos.anchor}
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="17"
              fontWeight="600"
              fill="#ffffff"
            >
              {p.title}
            </text>
          </g>
        );
      })}

      <g fill="#46bb9d" opacity="0.6">
        <CycleArrow cx="345" cy="135" rotate="45" />
        <CycleArrow cx="345" cy="345" rotate="135" />
        <CycleArrow cx="135" cy="345" rotate="225" />
        <CycleArrow cx="135" cy="135" rotate="315" />
      </g>
    </svg>
  );
}

function CycleArrow({ cx, cy, rotate }) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate})`}>
      <path d="M -4 -5 L 1 0 L -4 5" fill="none" stroke="#46bb9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </g>
  );
}
