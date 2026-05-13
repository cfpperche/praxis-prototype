import { useEffect, useState } from 'react';
import { useTranslation } from '../i18n/useTranslation.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#capabilities', label: t('nav.capabilities') },
    { href: '#approach', label: t('nav.approach') },
    { href: '#cases', label: t('nav.cases') },
    { href: '#industries', label: t('nav.industries') },
    { href: '#engagement', label: t('nav.engagement') }
  ];

  return (
    <header
      className={`sticky top-0 z-20 transition-all ${
        scrolled ? 'border-b border-ink-800/80 bg-ink-950/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="container-narrow flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-sans text-lg font-semibold tracking-tight text-white">Praxis</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-200 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a href="#contact" className="btn-primary !py-2 !px-4 !text-xs">
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="29" height="29" rx="6" stroke="currentColor" strokeOpacity="0.25" />
      <path
        d="M9 23V9h7a4.5 4.5 0 010 9h-3M9 16h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="22" cy="10" r="2" fill="#2a9f84" />
    </svg>
  );
}
