import { Phone, MapPin, Clock, Shield } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

export function Contact({ phoneDisplay, phoneLink }: { phoneDisplay: string; phoneLink: string }) {
  const { t } = useT();

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">{t('contact.title')}</h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href={phoneLink} className="card-hover flex flex-col items-center p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] text-center group">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'var(--gradient-cta)' }}>
              <Phone size={24} className="text-white animate-phone-ring" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">{t('contact.phone')}</h3>
            <span className="text-[var(--accent)] font-bold text-xl group-hover:text-[var(--accent-hover)] transition-colors">{phoneDisplay}</span>
            <span className="text-xs text-[var(--text-tertiary)] mt-1">{t('contact.available')}</span>
          </a>

          <div className="card-hover flex flex-col items-center p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] text-center">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-[var(--primary)]/10">
              <MapPin size={24} className="text-[var(--primary)]" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">{t('contact.address')}</h3>
            <p className="text-[var(--text-secondary)] text-sm">7 BIS Route de Corbeil</p>
            <p className="text-[var(--text-secondary)] text-sm">91350 Grigny</p>
          </div>

          <div className="card-hover flex flex-col items-center p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] text-center">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-green-500/10">
              <Clock size={24} className="text-green-500" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">{t('contact.hours')}</h3>
            <p className="text-green-700 font-bold">{t('contact.open')}</p>
            <p className="text-[var(--text-tertiary)] text-xs mt-1">{t('contact.everyday')}</p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
          <Shield size={20} className="text-[var(--primary)] flex-shrink-0" />
          <p className="text-sm text-[var(--text-secondary)]">
            <strong>{t('contact.insurance')}</strong> — {t('contact.insuranceDesc')}
          </p>
        </div>
      </div>
    </section>
  );
}
