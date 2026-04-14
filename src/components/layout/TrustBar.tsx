import { useT } from '../../i18n/LanguageContext';

const ITEMS = [
  {
    img: 'trust-public',
    titleKey: 'trust.public.title',
    descKey: 'trust.public.desc',
    alt: 'Intervention pour un établissement public parisien',
  },
  {
    img: 'trust-dealer',
    titleKey: 'trust.dealer.title',
    descKey: 'trust.dealer.desc',
    alt: 'Intervention devant un concessionnaire premium à Paris',
  },
  {
    img: 'trust-rental',
    titleKey: 'trust.rental.title',
    descKey: 'trust.rental.desc',
    alt: 'Convoyage flotte véhicules de location',
  },
];

export function TrustBar() {
  const { t } = useT();

  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4461B] mb-3">
            {t('trust.badge')}
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)]">
            {t('trust.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <article
              key={item.img}
              className="reveal group relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-default)] shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <picture>
                  <source srcSet={`/content/${item.img}.avif`} type="image/avif" />
                  <source srcSet={`/content/${item.img}.webp`} type="image/webp" />
                  <img
                    src={`/content/${item.img}.webp`}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-2">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
