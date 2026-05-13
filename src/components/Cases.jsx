import { useTranslation } from '../i18n/useTranslation.jsx';
import Reveal from './Reveal.jsx';

export default function Cases() {
  const { t, raw } = useTranslation();
  const items = raw('cases.items') || [];
  const challengeLabel = t('cases.challengeLabel');
  const workLabel = t('cases.workLabel');
  const outcomeLabel = t('cases.outcomeLabel');

  return (
    <section id="cases" className="section section-divider">
      <div className="container-narrow">
        <Reveal>
          <header className="max-w-2xl">
            <p className="eyebrow">{t('cases.eyebrow')}</p>
            <h2 className="heading-2 mt-3">{t('cases.title')}</h2>
            <p className="body mt-4">{t('cases.subtitle')}</p>
          </header>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 90}>
              <article className="flex h-full flex-col gap-5 rounded-2xl border border-ink-800 bg-ink-900/50 p-7">
                <span className="self-start rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent-200">
                  {item.industry}
                </span>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-wider text-ink-400">
                    {challengeLabel}
                  </p>
                  <p className="text-sm leading-relaxed text-ink-200">{item.challenge}</p>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-wider text-ink-400">{workLabel}</p>
                  <p className="text-sm leading-relaxed text-ink-200">{item.work}</p>
                </div>

                <div className="mt-auto rounded-xl border border-accent-500/20 bg-accent-500/5 p-4">
                  <p className="mb-2 text-xs uppercase tracking-wider text-accent-300">
                    {outcomeLabel}
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-white">{item.outcome}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-14 border-t border-ink-800 pt-8 text-center font-serif text-xl italic text-ink-100">
            {t('cases.bumper')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
