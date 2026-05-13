import { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation.jsx';

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section section-divider">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="eyebrow">{t('contact.eyebrow')}</p>
            <h2 className="heading-2 mt-3">{t('contact.title')}</h2>
            <p className="body mt-4">{t('contact.subtitle')}</p>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-ink-800 bg-ink-900/50 p-7"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-start justify-center gap-3">
                <p className="font-mono text-xs uppercase tracking-wider text-accent-300">
                  {t('contact.eyebrow')}
                </p>
                <p className="heading-3">{t('contact.form.note')}</p>
              </div>
            ) : (
              <div className="grid gap-4">
                <Field id="name" label={t('contact.form.name')} type="text" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="company" label={t('contact.form.company')} type="text" required />
                  <Field id="role" label={t('contact.form.role')} type="text" />
                </div>
                <Field id="email" label={t('contact.form.email')} type="email" required />
                <Field id="message" label={t('contact.form.message')} multiline rows={4} required />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-ink-400">{t('contact.form.note')}</p>
                  <button type="submit" className="btn-primary">
                    {t('contact.form.submit')}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, type = 'text', multiline = false, rows = 3, required = false }) {
  const baseClass =
    'w-full rounded-md border border-ink-800 bg-ink-950/60 px-4 py-3 text-sm text-ink-50 placeholder-ink-500 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500';
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-wider text-ink-400">
        {label}
      </label>
      {multiline ? (
        <textarea id={id} name={id} rows={rows} required={required} className={baseClass} />
      ) : (
        <input id={id} name={id} type={type} required={required} className={baseClass} />
      )}
    </div>
  );
}
