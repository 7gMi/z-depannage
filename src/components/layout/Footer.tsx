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
              <img src="/logo-zdepannage.png" alt="ZDEPANNAGE" width={192} height={192} className="h-20 w-auto brightness-0 invert opacity-80 mb-3" />
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
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/75 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>{t('footer.rights')}</span>
          <span className="hidden sm:inline text-white/30" aria-hidden="true">•</span>
          <Link to="/politique-confidentialite" className="hover:text-[var(--accent-bright)] transition-colors underline-offset-4 hover:underline">
            {t('footer.privacy')}
          </Link>
        </div>
        <div className="border-t border-white/5 mt-4 pt-4 flex flex-col items-center gap-2.5">
          {/* Line 1 — Designed by Mihai Gaina */}
          <a
            href="https://mihaigaina.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 text-xs text-white/75 hover:text-white transition-colors"
          >
            <span className="inline-block h-px w-6 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent-bright)]" />
            <span>{t('footer.designedBy')} <span className="font-medium text-white group-hover:text-[var(--accent-bright)] transition-colors">Mihai Gaina</span></span>
            <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            <span className="inline-block h-px w-6 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent-bright)]" />
          </a>

          {/* Line 2 — CTA freelance lead */}
          <a
            href="https://mihaigaina.dev/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[11px] text-white/40 hover:text-[var(--accent-bright)] transition-colors"
          >
            <span>{t('footer.freelance.question')}</span>
            <span className="font-semibold underline underline-offset-4 decoration-white/50 group-hover:decoration-[var(--accent-bright)] transition-colors">
              {t('footer.freelance.cta')}
            </span>
            <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
