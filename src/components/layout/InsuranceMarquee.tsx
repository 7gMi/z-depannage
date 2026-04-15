import { useT } from '../../i18n/LanguageContext';

const NAMES = [
  'AXA', 'MAIF', 'MACIF', 'Matmut', 'Allianz', 'Generali',
  'GMF', 'MMA', 'MAAF', 'Groupama', 'Pacifica', 'Direct Assurance',
  'Gan', 'Swiss Life', 'Crédit Agricole', 'BPCE',
  'Europ Assistance', 'Mondial Assistance',
];

export function InsuranceMarquee() {
  const { t } = useT();
  const repeated = [...NAMES, ...NAMES, ...NAMES];

  return (
    <section className="py-12 sm:py-16 bg-[var(--bg-primary)] border-y border-[var(--border-default)]">
      <div className="max-w-5xl mx-auto px-4 mb-8 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
          {t('about.insuranceTitle')}
        </h2>
        <p className="text-[var(--text-secondary)] text-sm max-w-xl mx-auto">
          {t('about.insuranceSubtitle')}
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-focus-group animate-marquee flex items-center whitespace-nowrap">
          {repeated.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="marquee-focus-item mx-5 px-5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-default)] text-[var(--text-primary)] font-heading font-bold text-base flex-shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
