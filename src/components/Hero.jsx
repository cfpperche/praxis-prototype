import { useTranslation } from '../i18n/useTranslation.jsx';

export default function Hero() {
  const { t, raw } = useTranslation();
  const labels = raw('hero.graphic') || { before: 'Before', inProgress: 'In progress', after: 'After' };

  return (
    <section id="top" className="section pt-16 sm:pt-20">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="max-w-2xl">
            <p className="eyebrow">{t('hero.eyebrow')}</p>
            <h1 className="heading-1 mt-4">{t('hero.heading')}</h1>
            <p className="body-lg mt-6">{t('hero.subhead')}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a href="#contact" className="btn-primary">
                {t('hero.ctaPrimary')}
                <ArrowRight />
              </a>
              <a href="#approach" className="btn-secondary">
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <TransformationGraphic labels={labels} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function TransformationGraphic({ labels }) {
  const upper = (s) => (typeof s === 'string' ? s.toUpperCase() : '');
  return (
    <svg
      viewBox="0 0 380 240"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="h-auto w-full max-w-[460px] text-ink-300"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#46bb9d" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#46bb9d" stopOpacity="0.6" />
          <stop offset="1" stopColor="#46bb9d" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <text x="14" y="14" fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="9" fill="currentColor" opacity="0.55">
        {upper(labels.before)}
      </text>
      <text x="160" y="14" fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="9" fill="currentColor" opacity="0.55">
        {upper(labels.inProgress)}
      </text>
      <text x="296" y="14" fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="9" fill="#46bb9d" opacity="0.85">
        {upper(labels.after)}
      </text>

      <g fill="currentColor" opacity="0.45">
        <circle cx="22" cy="56" r="3" />
        <circle cx="58" cy="36" r="3" />
        <circle cx="98" cy="72" r="3" />
        <circle cx="38" cy="100" r="3" />
        <circle cx="82" cy="118" r="3" />
        <circle cx="20" cy="148" r="3" />
        <circle cx="66" cy="166" r="3" />
        <circle cx="108" cy="148" r="3" />
        <circle cx="32" cy="194" r="3" />
        <circle cx="80" cy="212" r="3" />
      </g>

      <g stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.55">
        <path d="M132 124 L156 124" />
        <path d="M150 119 L156 124 L150 129" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g fill="currentColor" opacity="0.55">
        <circle cx="180" cy="56" r="3" />
        <circle cx="218" cy="56" r="3" />
        <circle cx="256" cy="56" r="3" />
        <circle cx="180" cy="100" r="3" />
        <circle cx="218" cy="100" r="3" />
        <circle cx="256" cy="100" r="3" />
        <circle cx="180" cy="148" r="3" />
        <circle cx="218" cy="148" r="3" />
        <circle cx="256" cy="148" r="3" />
        <circle cx="180" cy="196" r="3" />
        <circle cx="218" cy="196" r="3" />
        <circle cx="256" cy="196" r="3" />
      </g>

      <g stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.3">
        <path d="M180 56 L256 56" />
        <path d="M180 100 L256 100" />
        <path d="M180 148 L256 148" />
        <path d="M180 196 L256 196" />
        <path d="M180 56 L180 196" />
        <path d="M218 56 L218 196" />
        <path d="M256 56 L256 196" />
      </g>

      <g stroke="#46bb9d" strokeWidth="1.2" fill="none" opacity="0.8">
        <path d="M278 124 L302 124" />
        <path d="M296 119 L302 124 L296 129" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g fill="#46bb9d">
        <circle cx="324" cy="56" r="3.5" />
        <circle cx="358" cy="56" r="3.5" />
        <circle cx="324" cy="100" r="3.5" />
        <circle cx="358" cy="100" r="3.5" />
        <circle cx="324" cy="148" r="3.5" />
        <circle cx="358" cy="148" r="3.5" />
        <circle cx="324" cy="196" r="3.5" />
        <circle cx="358" cy="196" r="3.5" />
      </g>

      <g stroke="#46bb9d" strokeWidth="1.2" fill="none">
        <path d="M327 56 L355 56" />
        <path d="M353 51 L358 56 L353 61" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M324 60 L324 96" />
        <path d="M319 91 L324 96 L329 91" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M327 100 L355 100" />
        <path d="M353 95 L358 100 L353 105" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M358 104 L358 144" />
        <path d="M353 139 L358 144 L363 139" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M327 148 L355 148" />
        <path d="M353 143 L358 148 L353 153" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M324 152 L324 192" />
        <path d="M319 187 L324 192 L329 187" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M327 196 L355 196" />
        <path d="M353 191 L358 196 L353 201" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <line x1="0" y1="228" x2="380" y2="228" stroke="url(#hero-edge)" strokeWidth="1.2" />
    </svg>
  );
}
