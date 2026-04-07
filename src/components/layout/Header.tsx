import { useState, useRef, useEffect, useCallback, type ComponentType } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { FlagFR, FlagSA, FlagRO, FlagRU } from '../ui/Flags';
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
  { code: 'ro', Flag: FlagRO, label: 'Română' },
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
        <ChevronDown size={14} className={`text-white/50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
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
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
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
            </nav>

            {/* Centre — logo */}
            <Link to="/" className="flex items-center justify-center group mx-6 flex-shrink-0">
              <img
                src="/logo-zdepannage.png"
                alt="ZDEPANNAGE"
                className="h-28 w-auto brightness-0 invert group-hover:opacity-90 transition-all duration-300"
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
            <Link to="/" className="flex items-center">
              <img
                src="/logo-zdepannage.png"
                alt="ZDEPANNAGE"
                className="h-12 w-auto brightness-0 invert opacity-90"
              />
            </Link>

            <div className="flex items-center gap-2">
              <a
                href={phoneLink}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-heading font-bold text-sm text-white"
                style={{ background: 'var(--gradient-cta)' }}
              >
                <Phone size={16} className="animate-phone-ring" />
                <span className="hidden sm:inline">{phoneDisplay}</span>
                <span className="sm:hidden">{t('hero.callback').split(' ')[0]}</span>
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
          <img src="/logo-zdepannage.png" alt="ZDEPANNAGE" className="h-10 w-auto brightness-0 invert opacity-90" />
          <button onClick={() => setIsOpen(false)} className="p-2 text-white" aria-label={t('aria.closeMenu')}>
            <X size={22} />
          </button>
        </div>

        <nav className="px-4 flex flex-col gap-1">
          {NAV_ALL.map(({ href, key }) => (
            <Link
              key={href}
              to={href}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                location.pathname === href
                  ? 'text-[var(--accent-bright)] bg-white/5'
                  : 'text-white/80 hover:bg-white/5'
              }`}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Langues dans le drawer */}
        <div className="px-5 mt-6">
          <p className="text-xs text-white/40 uppercase tracking-wider font-medium mb-3">Langue</p>
          <div className="flex flex-col gap-1">
            {LANGUAGES.map(({ code, Flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  lang === code
                    ? 'bg-[var(--primary)]/15 text-white'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                <Flag size={22} />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 mt-6">
          <a
            href={phoneLink}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-heading font-bold text-lg animate-cta-pulse"
            style={{ background: 'var(--gradient-cta)' }}
          >
            <Phone size={20} />
            {phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
