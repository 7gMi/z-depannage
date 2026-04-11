import { Link } from 'react-router-dom';
import { Hero } from '../components/layout/Hero';
import { Marquee } from '../components/layout/Marquee';
import { Features } from '../components/layout/Features';
import { TrustBar } from '../components/layout/TrustBar';
import { Services } from '../components/layout/Services';
import { Zone } from '../components/layout/Zone';
import { Avis } from '../components/layout/Avis';
import { CallbackForm } from '../components/layout/CallbackForm';
import { CTABanner } from '../components/layout/CTABanner';
import { Contact } from '../components/layout/Contact';
import { ArrowRight } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import { PageMeta } from '../components/PageMeta';
import { JsonLd } from '../components/JsonLd';

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'ZDEPANNAGE',
  description: "Service de dépannage et remorquage automobile 24h/24, 7j/7 en Île-de-France.",
  url: 'https://z-depannage.fr',
  telephone: '+33756973686',
  email: '',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 BIS Route de Corbeil',
    addressLocality: 'Grigny',
    postalCode: '91350',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.6536,
    longitude: 2.3833,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: {
    '@type': 'State',
    name: 'Île-de-France',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '22',
    bestRating: '5',
  },
  priceRange: '€€',
};

interface HomePageProps {
  phoneDisplay: string;
  phoneLink: string;
}

export function HomePage({ phoneDisplay, phoneLink }: HomePageProps) {
  const { t } = useT();

  return (
    <>
      <PageMeta
        title="ZDEPANNAGE — Dépannage & Remorquage 24h/24 Île-de-France"
        description="Service de dépannage et remorquage automobile 24h/24, 7j/7 en Île-de-France. Intervention en 30 minutes. Agréé assurances et forces de l'ordre. Appelez le 07 56 97 36 86."
      />
      <JsonLd data={LOCAL_BUSINESS} id="local-business" />
      <Hero phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
      <Marquee />
      <Features />
      <TrustBar />

      <Services limit={3} />
      <div className="flex justify-center -mt-8 pb-12 bg-[var(--bg-secondary)]">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-[var(--primary)] border-2 border-[var(--primary)]/20 hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/5 transition-all duration-200"
          aria-label={t('services.viewAll')}
        >
          {t('services.viewAll')}
          <ArrowRight size={16} />
        </Link>
      </div>

      <Avis limit={3} />
      <div className="flex justify-center -mt-8 pb-12 bg-[var(--bg-secondary)]">
        <Link
          to="/contact#avis"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-[var(--primary)] border-2 border-[var(--primary)]/20 hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/5 transition-all duration-200"
          aria-label={t('avis.viewAll')}
        >
          {t('avis.viewAll')}
          <ArrowRight size={16} />
        </Link>
      </div>

      <Zone compact />
      <CallbackForm />
      <CTABanner phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
      <Contact phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
    </>
  );
}
