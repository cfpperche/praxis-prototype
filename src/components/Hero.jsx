import { useTranslation } from '../i18n/useTranslation.jsx';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="section pt-16 sm:pt-20">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1 className="heading-1 mt-4">{t('hero.heading')}</h1>
          <p className="body-lg mt-6 max-w-2xl">{t('hero.subhead')}</p>
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
