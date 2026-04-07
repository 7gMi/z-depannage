import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

export function Footer({ phoneDisplay, phoneLink }: { phoneDisplay: string; phoneLink: string }) {
  const { t } = useT();

  return (
    <footer className="bg-[var(--bg-dark)] text-white/70 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <Link to="/">
              <img src="/logo-zdepannage.png" alt="ZDEPANNAGE" className="h-10 w-auto brightness-0 invert opacity-80 mb-3" />
            </Link>
            <p className="text-sm">{t('footer.desc')}</p>
          </div>
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-3">{t('footer.contact')}</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href={phoneLink} className="flex items-center gap-2 hover:text-[var(--accent-bright)] transition-colors">
                <Phone size={14} /> {phoneDisplay}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> 7 BIS Rte de Corbeil, 91350 Grigny
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} /> 24h/24 — 7/7
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-3">{t('footer.nav')}</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/services" className="hover:text-white transition-colors">{t('nav.services')}</Link>
              <Link to="/tarifs" className="hover:text-white transition-colors">{t('nav.tarifs')}</Link>
              <Link to="/zone" className="hover:text-white transition-colors">{t('zone.title')}</Link>
              <Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          {t('footer.rights')}
        </div>
        <div className="border-t border-white/5 mt-4 pt-4">
          <a href="https://mihaigaina.dev" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 text-xs text-white/30 hover:text-white/50 transition-colors">
            <span className="inline-block h-px w-6 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent-bright)]" />
            <span>Designed by <span className="font-medium text-white/40 group-hover:text-[var(--accent-bright)] transition-colors">Mihai Gaina</span></span>
            <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            <span className="inline-block h-px w-6 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent-bright)]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
