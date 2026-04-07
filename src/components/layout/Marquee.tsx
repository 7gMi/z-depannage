import { Clock, Zap, Shield, MapPin, Truck, Phone } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

const ITEMS_KEYS = [
  { icon: Clock, key: 'marquee.247' },
  { icon: Zap, key: 'marquee.30min' },
  { icon: Shield, key: 'marquee.insurance' },
  { icon: MapPin, key: 'marquee.zone' },
  { icon: Truck, key: 'marquee.service' },
  { icon: Phone, key: 'marquee.call' },
];

export function Marquee() {
  const { t } = useT();
  const repeated = [...ITEMS_KEYS, ...ITEMS_KEYS, ...ITEMS_KEYS];

  return (
    <div className="overflow-hidden bg-[var(--bg-dark)] border-y border-white/5 py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-8">
            <item.icon size={16} className="text-[var(--accent-bright)]" />
            <span className="text-sm font-heading font-bold tracking-wider text-white/40">
              {t(item.key)}
            </span>
            <span className="ml-8 text-[var(--accent)]/30">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
