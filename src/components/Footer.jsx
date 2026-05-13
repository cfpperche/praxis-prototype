import { useTranslation } from '../i18n/useTranslation.jsx';

export default function Footer() {
  const { t, raw } = useTranslation();
  const year = new Date().getFullYear();
  const sections = raw('footer.sections') || {};
  const legal = raw('footer.legal') || {};

  const navItems = [
    { href: '#capabilities', label: sections.capabilities },
    { href: '#approach', label: sections.approach },
    { href: '#cases', label: sections.cases },
    { href: '#industries', label: sections.industries },
    { href: '#contact', label: sections.contact }
  ];

  const legalItems = [
    { href: '#privacy', label: legal.privacy },
    { href: '#terms', label: legal.terms },
    { href: '#cookies', label: legal.cookies }
  ];

  return (
    <footer className="section-divider">
      <div className="container-narrow py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="1.5" y="1.5" width="29" height="29" rx="6" stroke="currentColor" strokeOpacity="0.25" />
                <path
                  d="M9 23V9h7a4.5 4.5 0 010 9h-3M9 16h7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="22" cy="10" r="2" fill="#2a9f84" />
              </svg>
              <span className="font-sans text-lg font-semibold tracking-tight text-white">Praxis</span>
            </a>
            <p className="body-sm mt-4 max-w-sm">{t('footer.tagline')}</p>
          </div>

          <nav className="grid grid-cols-2 gap-y-2 text-sm">
            {navItems.map((l) => (
              <a key={l.href} href={l.href} className="text-ink-300 hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm sm:items-end">
            {legalItems.map((l) => (
              <a key={l.href} href={l.href} className="text-ink-300 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink-800 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t('footer.copyright')}
          </p>
          <p className="font-mono uppercase tracking-wider">v0.1.0 · prototype</p>
        </div>
      </div>
    </footer>
  );
}
