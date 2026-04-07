import { Phone } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

export function CTABanner({ phoneDisplay, phoneLink }: { phoneDisplay: string; phoneLink: string }) {
  const { t } = useT();

  return (
    <section className="py-12 sm:py-16 gradient-cta">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">{t('cta.title')}</h2>
        <p className="text-white/80 mb-8">{t('cta.subtitle')}</p>
        <a
          href={phoneLink}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-[var(--accent)] font-heading font-extrabold text-xl hover:bg-slate-50 hover:shadow-lg transition-all"
        >
          <Phone size={24} className="animate-phone-ring" />
          {phoneDisplay}
        </a>
      </div>
    </section>
  );
}
