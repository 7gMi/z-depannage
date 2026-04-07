import { useT } from '../../i18n/LanguageContext';

const LOGOS = [
  'europ-assistance', 'mutuelle-assurance', 'amf', 'mapa',
  'bpce', 'credit-agricole', 'generali', 'gmf', 'allianz',
  'maif', 'macif', 'matmut', 'agpm', 'pacifica',
  'mae', 'smacl', 'maaf', 'la-poste',
];

export function InsuranceMarquee() {
  const { t } = useT();
  const repeated = [...LOGOS, ...LOGOS, ...LOGOS];

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
            <img
              key={`${name}-${i}`}
              src={`/logos/${name}.png`}
              alt={name.replace(/-/g, ' ')}
              width={120}
              height={56}
              className="marquee-focus-item h-14 w-auto mx-6 rounded-lg flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
