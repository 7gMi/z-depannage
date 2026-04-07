import { Calendar, MapPin, Truck, Users } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';
import { useT } from '../../i18n/LanguageContext';

const STATS = [
  { icon: Calendar, value: 5, suffix: '+', labelKey: 'stats.years' },
  { icon: MapPin, value: 8, suffix: '', labelKey: 'stats.departments' },
  { icon: Truck, value: 3, suffix: '', labelKey: 'stats.vehicles' },
  { icon: Users, value: 4, suffix: '', labelKey: 'stats.team' },
];

function StatItem({ icon: Icon, value, suffix, labelKey }: typeof STATS[number]) {
  const { count, ref } = useCountUp(value);
  const { t } = useT();

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-[var(--accent)]/10 border border-[var(--accent)]/20">
        <Icon size={24} className="text-[var(--accent-bright)]" />
      </div>
      <span className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-1">
        {count}{suffix}
      </span>
      <span className="text-white/50 text-sm font-medium">{t(labelKey)}</span>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-dark)] border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {STATS.map((stat) => (
            <StatItem key={stat.labelKey} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
