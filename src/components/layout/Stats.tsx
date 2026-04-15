import { Calendar, MapPin, Truck, Users } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';
import { useT } from '../../i18n/LanguageContext';

const STATS = [
  { icon: Calendar, value: 3, max: 5, suffix: '+', labelKey: 'stats.years' },
  { icon: MapPin, value: 8, max: 8, suffix: '', labelKey: 'stats.departments' },
  { icon: Truck, value: 6, max: 8, suffix: '', labelKey: 'stats.vehicles' },
  { icon: Users, value: 6, max: 8, suffix: '', labelKey: 'stats.team' },
];

function StatItem({ icon: Icon, value, max, suffix, labelKey }: typeof STATS[number]) {
  const { count, ref } = useCountUp(value);
  const { t } = useT();
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (count / max) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4">
      <div className="relative w-32 h-32 mb-3">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="url(#statGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
          />
          <defs>
            <linearGradient id="statGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#FDBA74" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon size={20} className="text-[var(--accent-bright)] mb-1" />
          <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
            {count}{suffix}
          </span>
        </div>
      </div>
      <span className="text-white/75 text-sm font-medium">{t(labelKey)}</span>
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
