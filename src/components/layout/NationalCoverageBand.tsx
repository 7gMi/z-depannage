import { MapPin, Truck, Clock } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

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
          {/* Visuel : carte France stylisée */}
          <div className="relative order-2 lg:order-1">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-auto max-w-md mx-auto"
              role="img"
              aria-label={t('b2b.coverage.map.alt')}
            >
              {/* Contour France (hexagone stylisé) */}
              <path
                d="M200 40 L330 110 L330 260 L260 340 L140 340 L70 260 L70 110 Z"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
              />

              {/* Trajets animés depuis IDF */}
              <g fill="none" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6">
                <line x1="210" y1="135" x2="110" y2="300" className="motion-safe:animate-[dashFlow_4s_linear_infinite]" />
                <line x1="210" y1="135" x2="290" y2="300" className="motion-safe:animate-[dashFlow_4s_linear_infinite]" />
                <line x1="210" y1="135" x2="310" y2="180" className="motion-safe:animate-[dashFlow_4s_linear_infinite]" />
                <line x1="210" y1="135" x2="100" y2="200" className="motion-safe:animate-[dashFlow_4s_linear_infinite]" />
                <line x1="210" y1="135" x2="160" y2="330" className="motion-safe:animate-[dashFlow_4s_linear_infinite]" />
              </g>

              {/* Destinations (points) */}
              <g fill="rgba(255,255,255,0.7)">
                <circle cx="110" cy="300" r="4" />
                <circle cx="290" cy="300" r="4" />
                <circle cx="310" cy="180" r="4" />
                <circle cx="100" cy="200" r="4" />
                <circle cx="160" cy="330" r="4" />
              </g>

              {/* Labels villes */}
              <g fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">
                <text x="105" y="320" textAnchor="middle">Bordeaux</text>
                <text x="295" y="320" textAnchor="middle">Marseille</text>
                <text x="320" y="185" textAnchor="start">Strasbourg</text>
                <text x="95" y="195" textAnchor="end">Nantes</text>
                <text x="160" y="350" textAnchor="middle">Toulouse</text>
              </g>

              {/* IDF surlignée */}
              <circle cx="210" cy="135" r="14" fill="#EA580C" opacity="0.25">
                <animate attributeName="r" values="14;20;14" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="210" cy="135" r="7" fill="#F97316" />
              <text
                x="210"
                y="112"
                textAnchor="middle"
                fill="#F97316"
                fontSize="12"
                fontFamily="system-ui, sans-serif"
                fontWeight="800"
              >
                Île-de-France
              </text>
            </svg>
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
