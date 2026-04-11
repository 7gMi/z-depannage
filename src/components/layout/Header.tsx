import { useState, useRef, useEffect, useCallback, type ComponentType } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { FlagFR, FlagSA, FlagGB, FlagRU } from '../ui/Flags';
import { useT } from '../../i18n/LanguageContext';
import type { Lang } from '../../i18n/translations';

const NAV_LEFT = [
  { href: '/services', key: 'nav.services' },
  { href: '/tarifs', key: 'nav.tarifs' },
  { href: '/zone', key: 'nav.zone' },
  { href: '/a-propos', key: 'nav.about' },
  { href: '/blog', key: 'nav.blog' },
];

const NAV_ALL = [
  ...NAV_LEFT,
  { href: '/contact', key: 'nav.contact' },
];

const LANGUAGES: { code: Lang; Flag: ComponentType<{ size?: number }>; label: string }[] = [
  { code: 'fr', Flag: FlagFR, label: 'Français' },
  { code: 'ar', Flag: FlagSA, label: 'العربية' },
  { code: 'en', Flag: FlagGB, label: 'English' },
  { code: 'ru', Flag: FlagRU, label: 'Русский' },
];

function LangDropdown({ activeLang, onChangeLang }: { activeLang: Lang; onChangeLang: (code: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useT();
  const current = LANGUAGES.find((l) => l.code === activeLang)!;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all duration-200 border border-white/10"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <current.Flag size={22} />
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown size={14} className={`text-white/75 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--bg-dark)]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden" role="listbox" aria-label={t('aria.lang')}>
          {LANGUAGES.map(({ code, Flag, label }) => (
            <button
              key={code}
              role="option"
              aria-selected={activeLang === code}
              onClick={() => { onChangeLang(code); setOpen(false); }}
              className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-all duration-150 ${
                activeLang === code
                  ? 'bg-[var(--primary)]/15 text-white'
                  : 'text-white/75 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Flag size={22} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header({ phoneDisplay, phoneLink }: { phoneDisplay: string; phoneLink: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useT();
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Escape ferme le drawer
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // Focus trap dans le drawer
  const handleTabTrap = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !drawerRef.current) return;
    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  // Auto-focus le bouton fermer à l'ouverture
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const closeBtn = drawerRef.current.querySelector<HTMLElement>('button[aria-label]');
      closeBtn?.focus();
    }
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--bg-dark)]/40 backdrop-blur-xl border-b border-white/10">
        {/* Bandeau dispo intégré au top du header — bg vert solide WCAG AA */}
        <div className="bg-green-700 text-white text-xs sm:text-sm font-semibold py-1.5 px-4 flex items-center justify-center gap-2 border-b border-white/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="whitespace-nowrap">{t('header.available')}</span>
          <span className="hidden sm:inline opacity-80">•</span>
          <span className="hidden sm:inline">{t('header.intervention')}</span>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop navbar */}
          <div className="hidden lg:flex items-center justify-between h-28">
            {/* Gauche — liens nav */}
            <nav className="flex items-center gap-3 flex-1">
              {NAV_LEFT.map(({ href, key }) => (
                <Link
                  key={href}
                  to={href}
                  className={`text-sm font-semibold transition-colors duration-200 whitespace-nowrap relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[var(--accent)] after:transition-all after:duration-300 ${
                    location.pathname === href
                      ? 'text-[var(--accent-bright)] after:w-full'
                      : 'text-white/70 hover:text-[var(--accent-bright)] after:w-0 hover:after:w-full'
                  }`}
                >
                  {t(key)}
                </Link>
              ))}
              <Link
                to="/professionnels"
                className={`text-sm font-semibold transition-colors duration-200 whitespace-nowrap flex items-center ${
                  location.pathname === '/professionnels'
                    ? 'text-[var(--accent-bright)]'
                    : 'text-white/70 hover:text-[var(--accent-bright)]'
                }`}
              >
                {t('nav.pro')}
                <span className="bg-blue-500/10 text-blue-300 border border-blue-500/30 px-2.5 py-0.5 rounded-full text-xs font-bold ml-1">
                  {t('nav.pro.badge')}
                </span>
              </Link>
            </nav>

            {/* Centre — logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center group mx-6 flex-shrink-0"
              aria-label="ZDEPANNAGE — Accueil"
            >
              <img
                src="/logo-zdepannage.png"
                alt="ZDEPANNAGE"
                width={192}
                height={192}
                className="h-[10.5rem] w-auto brightness-0 invert group-hover:opacity-90 transition-all duration-300"
              />
            </Link>

            {/* Droite — Contact + langues + CTA téléphone */}
            <div className="flex items-center justify-end gap-3 flex-1">
              <Link
                to="/contact"
                className={`text-sm font-semibold transition-colors duration-200 whitespace-nowrap relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[var(--accent)] after:transition-all after:duration-300 mr-1 ${
                  location.pathname === '/contact'
                    ? 'text-[var(--accent-bright)] after:w-full'
                    : 'text-white/70 hover:text-[var(--accent-bright)] after:w-0 hover:after:w-full'
                }`}
              >
                {t('nav.contact')}
              </Link>
              <LangDropdown activeLang={lang} onChangeLang={setLang} />

              <a
                href={phoneLink}
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading font-bold text-base text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-orange)' }}
              >
                <Phone size={20} className="animate-phone-ring" />
                {phoneDisplay}
              </a>
            </div>
          </div>

          {/* Tablet/Mobile navbar */}
          <div className="lg:hidden flex items-center justify-between h-16">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2"
              aria-label="ZDEPANNAGE — Accueil"
            >
              <img
                src="/logo-zdepannage.png"
                alt="ZDEPANNAGE"
                width={192}
                height={192}
                className="h-[4.5rem] w-auto brightness-0 invert opacity-90"
              />
            </Link>

            <div className="flex items-center gap-3">
              {/* Pulse SOS — bouton appel circulaire mobile */}
              <a
                href={phoneLink}
                className="relative flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg"
                style={{ background: 'var(--gradient-cta)', boxShadow: '0 0 24px rgba(234,88,12,0.6)' }}
                aria-label={t('aria.call')}
              >
                <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-30" />
                <Phone size={20} className="relative animate-phone-ring" />
              </a>

              <button
                className="p-2 text-white"
                onClick={() => setIsOpen(true)}
                aria-label={t('aria.openMenu')}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        onKeyDown={handleTabTrap}
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-[70] lg:hidden transition-transform duration-300 ease-out bg-[var(--bg-dark)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label={t('aria.nav')}
      >
        <div className="h-1 w-full" style={{ background: 'var(--gradient-cta)' }} />
        <div className="flex items-center justify-between px-5 py-4">
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="ZDEPANNAGE — Accueil"
          >
            <img src="/logo-zdepannage.png" alt="ZDEPANNAGE" width={192} height={192} className="h-[3.75rem] w-auto brightness-0 invert opacity-90" />
          </Link>
          <button onClick={() => setIsOpen(false)} className="p-2 text-white" aria-label={t('aria.closeMenu')}>
            <X size={22} />
          </button>
        </div>

        {isOpen && (
          <div className="drawer-stagger">
            {/* CTA appel géant en haut */}
            <div className="px-5 mt-2 mb-4">
              <a
                href={phoneLink}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-heading font-extrabold text-lg shadow-lg"
                style={{ background: 'var(--gradient-cta)', boxShadow: '0 0 24px rgba(234,88,12,0.5)' }}
              >
                <Phone size={22} className="animate-phone-ring" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xs font-medium opacity-90">{t('aria.call')}</span>
                  <span>{phoneDisplay}</span>
                </div>
              </a>
            </div>

            <nav className="px-4 flex flex-col gap-1">
              {NAV_ALL.map(({ href, key }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl font-bold text-base uppercase tracking-wide transition-colors ${
                    location.pathname === href
                      ? 'text-[var(--accent-bright)] bg-white/5'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  {t(key)}
                </Link>
              ))}
              <Link
                to="/professionnels"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl font-bold text-base uppercase tracking-wide transition-colors flex items-center ${
                  location.pathname === '/professionnels'
                    ? 'text-[var(--accent-bright)] bg-white/5'
                    : 'text-white/80 hover:bg-white/5'
                }`}
              >
                {t('nav.pro')}
                <span className="bg-blue-500/10 text-blue-300 border border-blue-500/30 px-2.5 py-0.5 rounded-full text-xs font-bold ml-2">
                  {t('nav.pro.badge')}
                </span>
              </Link>
            </nav>

            {/* Langues en grille 2x2 */}
            <div className="px-5 mt-6">
              <p className="text-xs text-white/75 uppercase tracking-wider font-medium mb-3">{t('aria.lang')}</p>
              <div className="grid grid-cols-2 gap-2 bg-white/5 rounded-2xl p-3">
                {LANGUAGES.map(({ code, Flag, label }) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      lang === code
                        ? 'bg-[var(--primary)]/20 text-white ring-2 ring-[var(--accent)]'
                        : 'text-white/75 hover:bg-white/5'
                    }`}
                  >
                    <Flag size={20} />
                    <span className="truncate">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
