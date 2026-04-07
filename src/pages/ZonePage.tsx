import { PageMeta } from '../components/PageMeta';
import { Zone } from '../components/layout/Zone';
import { Stats } from '../components/layout/Stats';
import { CTABanner } from '../components/layout/CTABanner';

interface ZonePageProps {
  phoneDisplay: string;
  phoneLink: string;
}

export function ZonePage({ phoneDisplay, phoneLink }: ZonePageProps) {
  return (
    <>
      <PageMeta
        title="Zone d'intervention — Essonne & Île-de-France | ZDEPANNAGE"
        description="Dépannage et remorquage dans 8 départements d'Île-de-France. Base à Grigny (91). Intervention en 30 minutes à Évry, Corbeil, Massy, Palaiseau."
      />
      <Zone />
      <Stats />
      <CTABanner phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
    </>
  );
}
