import { useState } from 'react';
import { Phone, Send } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

const PANNE_KEYS = [
  'callback.panne.battery',
  'callback.panne.tire',
  'callback.panne.accident',
  'callback.panne.mechanical',
  'callback.panne.keys',
  'callback.panne.fuel',
  'callback.panne.other',
];

const WHATSAPP_NUMBER = '33756973686';

export function CallbackForm() {
  const [phone, setPhone] = useState('');
  const [panne, setPanne] = useState('');
  const [honey, setHoney] = useState('');
  const { t } = useT();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honey) return; // Bot detected

    const panneText = panne ? t(panne) : 'Non précisé';
    const message = `Bonjour, je demande un rappel.\n\n📞 Mon numéro : ${phone}\n🔧 Type de panne : ${panneText}\n\nMerci de me rappeler rapidement.`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="relative py-16 sm:py-20 bg-[var(--bg-dark)] overflow-hidden">
      <div className="absolute inset-0 pattern-dots-orange pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">{t('callback.title')}</h2>
          <p className="text-white/75">{t('callback.subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
          {/* Honeypot */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">{t('callback.phone')}</label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/75" />
                <input
                  id="phone"
                  type="tel"
                  required
                  pattern="^(?:(?:\+33|0033|0)\s*[1-9])(?:[\s.-]*\d{2}){4}$"
                  minLength={10}
                  maxLength={20}
                  title="Numéro de téléphone français (ex: 06 12 34 56 78)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('callback.phonePlaceholder')}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/75 focus:outline-none focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/30 transition-all text-base invalid:[&:not(:placeholder-shown)]:border-red-500/50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="panne" className="block text-sm font-medium text-white/70 mb-2">{t('callback.type')}</label>
              <select
                id="panne"
                value={panne}
                onChange={(e) => setPanne(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/30 transition-all text-base appearance-none"
              >
                <option value="" className="bg-[var(--bg-dark)]">{t('callback.select')}</option>
                {PANNE_KEYS.map((key) => (
                  <option key={key} value={key} className="bg-[var(--bg-dark)]">{t(key)}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-heading font-bold text-lg text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-orange)' }}
            >
              <Send size={18} />
              {t('callback.submit')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
