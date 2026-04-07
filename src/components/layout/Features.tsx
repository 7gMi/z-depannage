import { Clock, BadgeCheck, Zap } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

const FEATURES_KEYS = [
  { icon: Clock, titleKey: 'features.247.title', descKey: 'features.247.desc' },
  { icon: BadgeCheck, titleKey: 'features.price.title', descKey: 'features.price.desc' },
  { icon: Zap, titleKey: 'features.fast.title', descKey: 'features.fast.desc' },
];

export function Features() {
  const { t } = useT();

  return (
    <section className="py-12 sm:py-16 bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FEATURES_KEYS.map(({ icon: Icon, titleKey, descKey }) => (
            <div
              key={titleKey}
              className="reveal flex flex-col items-center text-center p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-[var(--accent)]/8">
                <Icon size={28} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{t(titleKey)}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
