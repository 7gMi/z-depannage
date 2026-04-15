import { lazy, Suspense } from 'react';
import { MapPin, Truck, Clock } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

const NationalCoverageMap = lazy(() => import('./NationalCoverageMap'));

/**
 * Band "Couverture France entière sur demande" — placé sur page Professionnels
 * juste après le Hero B2B pour conversion B2B sans diluer positionnement IDF.
 */
export function NationalCoverageBand() {
  const { t } = useT();

  return (
    <section
      aria-labelledby="national-coverage-title"
      className="relative py-16 sm:py-20 bg-[var(--bg-dark)] overflow-hidden"
    >
      <div className="absolute inset-0 pattern-dots-orange opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Visuel : carte Leaflet France avec base Grigny + trajets vers grandes villes */}
          <div className="relative order-2 lg:order-1" aria-label={t('b2b.coverage.map.alt')}>
            <Suspense
              fallback={
                <div className="w-full h-[420px] sm:h-[480px] rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
              }
            >
              <NationalCoverageMap />
            </Suspense>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-bright)] mb-4">
              {t('b2b.coverage.kicker')}
            </span>
            <h2
              id="national-coverage-title"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.15]"
            >
              {t('b2b.coverage.title')}
            </h2>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              {t('b2b.coverage.desc')}
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/85">
                <Truck size={20} className="text-[var(--accent-bright)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base">{t('b2b.coverage.point1')}</span>
              </li>
              <li className="flex items-start gap-3 text-white/85">
                <MapPin size={20} className="text-[var(--accent-bright)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base">{t('b2b.coverage.point2')}</span>
              </li>
              <li className="flex items-start gap-3 text-white/85">
                <Clock size={20} className="text-[var(--accent-bright)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base">{t('b2b.coverage.point3')}</span>
              </li>
            </ul>

            <p className="mt-8 text-xs text-white/50 italic">{t('b2b.coverage.disclaimer')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
