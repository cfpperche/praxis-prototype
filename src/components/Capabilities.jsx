import { useTranslation } from '../i18n/useTranslation.jsx';
import Reveal from './Reveal.jsx';

const icons = [PlatformIcon, RoadmapIcon, ShieldIcon, NetworkIcon, ContractIcon, DXIcon];

export default function Capabilities() {
  const { t, raw } = useTranslation();
  const items = raw('capabilities.items') || [];
  const tiers = raw('capabilities.tiers') || ['Build', 'Decide', 'Sustain'];
  const outcomeLabel = t('capabilities.outcomeLabel');

  return (
    <section id="capabilities" className="section section-divider section-ambient section-line-grid">
      <div className="container-narrow">
        <Reveal>
          <header className="max-w-2xl">
            <p className="eyebrow">{t('capabilities.eyebrow')}</p>
            <h2 className="heading-2 mt-3">{t('capabilities.title')}</h2>
            <p className="body mt-4">{t('capabilities.subtitle')}</p>
          </header>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-5">
          {tiers.map((tierName, tierIdx) => (
            <div key={tierIdx} className="flex flex-col gap-5">
              <Reveal delay={tierIdx * 80}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-300">
                    {`0${tierIdx + 1}`}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-100">
                    {tierName}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-ink-800" />
                </div>
              </Reveal>

              {items.slice(tierIdx * 2, tierIdx * 2 + 2).map((item, i) => {
                const idx = tierIdx * 2 + i;
                const Icon = icons[idx] || PlatformIcon;
                return (
                  <Reveal key={idx} delay={tierIdx * 80 + (i + 1) * 70}>
                    <article className="card flex h-full flex-col">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-300">
                        <Icon />
                      </div>
                      <h3 className="heading-3 mt-5">{item.title}</h3>
                      <p className="body-sm mt-3 flex-1">{item.description}</p>
                      <div className="mt-6 border-t border-ink-800 pt-4">
                        <p className="text-xs uppercase tracking-wider text-ink-400">
                          {outcomeLabel}
                        </p>
                        <p className="mt-1 text-sm text-ink-200">{item.outcome}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-14 border-t border-ink-800 pt-8 text-center font-serif text-xl italic text-ink-100">
            {t('capabilities.bumper')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PlatformIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h2M7 17h2" strokeLinecap="round" />
    </svg>
  );
}

function RoadmapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 6h18M3 12h12M3 18h6" strokeLinecap="round" />
      <circle cx="21" cy="12" r="1.5" fill="currentColor" />
      <circle cx="15" cy="18" r="1.5" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M7.5 7.5L11 16.5M16.5 7.5L13 16.5M8 6h8" />
    </svg>
  );
}

function ContractIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3h9l4 4v14H7z" />
      <path d="M16 3v4h4M10 12h6M10 16h6" strokeLinecap="round" />
    </svg>
  );
}

function DXIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6l-2 12" strokeLinecap="round" />
    </svg>
  );
}
