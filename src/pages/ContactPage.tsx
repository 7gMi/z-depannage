import { lazy, Suspense } from 'react';
import { Stats } from '../components/layout/Stats';
import { Avis } from '../components/layout/Avis';
import { Contact } from '../components/layout/Contact';
import { CallbackForm } from '../components/layout/CallbackForm';
import { useT } from '../i18n/LanguageContext';
import { PageMeta } from '../components/PageMeta';

const LeafletMap = lazy(() => import('../components/LeafletMap'));
const GRIGNY: [number, number] = [48.6544, 2.3833];

interface ContactPageProps {
  phoneDisplay: string;
  phoneLink: string;
}

export function ContactPage({ phoneDisplay, phoneLink }: ContactPageProps) {
  const { t } = useT();

  return (
    <>
      <PageMeta
        title="Contact & Avis — ZDEPANNAGE Grigny (91)"
        description="Contactez ZDEPANNAGE au 07 56 97 36 86. 7 BIS Route de Corbeil, 91350 Grigny. 22 avis Google 5 étoiles. Dépannage 24h/24."
      />
      <section className="py-16 sm:py-20 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <Stats />
      <Avis />
      <CallbackForm />
      <Contact phoneDisplay={phoneDisplay} phoneLink={phoneLink} />

      <section className="py-12 sm:py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4">
          <Suspense fallback={<div className="h-[320px] rounded-2xl bg-[var(--bg-card)] animate-pulse" />}>
            <LeafletMap
              center={GRIGNY}
              zoom={14}
              height="320px"
              popupText="ZDEPANNAGE — 7 BIS Route de Corbeil, 91350 Grigny"
              ariaLabel="Carte de localisation du dépôt à Grigny"
            />
          </Suspense>
        </div>
      </section>
    </>
  );
}
