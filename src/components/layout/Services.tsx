import { Truck, Wrench, Car, AlertTriangle, Bike, Warehouse } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import { useTilt } from '../../hooks/useTilt';

function ServiceCard({ Icon, titleKey, descKey }: { Icon: typeof Truck; titleKey: string; descKey: string }) {
  const { t } = useT();
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(6);
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="reveal tilt-3d card-hover bg-[var(--bg-card)] rounded-2xl border border-[var(--border-default)] p-6"
    >
      <div className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center bg-[var(--primary)]/8">
        <Icon size={28} className="text-[var(--primary)]" />
      </div>
      <h3 className="font-heading font-bold text-lg mb-2">{t(titleKey)}</h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t(descKey)}</p>
    </div>
  );
}

const SERVICES_KEYS = [
  { icon: Truck, titleKey: 'services.towing.title', descKey: 'services.towing.desc' },
  { icon: Wrench, titleKey: 'services.repair.title', descKey: 'services.repair.desc' },
  { icon: AlertTriangle, titleKey: 'services.accident.title', descKey: 'services.accident.desc' },
  { icon: Car, titleKey: 'services.camper.title', descKey: 'services.camper.desc' },
  { icon: Bike, titleKey: 'services.moto.title', descKey: 'services.moto.desc' },
  { icon: Warehouse, titleKey: 'services.pound.title', descKey: 'services.pound.desc' },
];

export function Services({ limit }: { limit?: number } = {}) {
  const { t } = useT();
  const items = limit ? SERVICES_KEYS.slice(0, limit) : SERVICES_KEYS;

  return (
    <section id="services" className="py-16 sm:py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">{t('services.title')}</h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {items.map(({ icon: Icon, titleKey, descKey }) => (
            <ServiceCard key={titleKey} Icon={Icon} titleKey={titleKey} descKey={descKey} />
          ))}
        </div>
      </div>
    </section>
  );
}
