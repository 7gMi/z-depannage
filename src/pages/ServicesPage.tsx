import { PageMeta } from '../components/PageMeta';
import { Services } from '../components/layout/Services';
import { Process } from '../components/layout/Process';
import { CTABanner } from '../components/layout/CTABanner';

interface ServicesPageProps {
  phoneDisplay: string;
  phoneLink: string;
}

export function ServicesPage({ phoneDisplay, phoneLink }: ServicesPageProps) {
  return (
    <>
      <PageMeta
        title="Nos Services — Dépannage, Remorquage, Accident | ZDEPANNAGE"
        description="Remorquage automobile, dépannage sur place, intervention après accident, transport camping-car et moto. Service 24h/24 en Île-de-France."
      />
      <Services />
      <Process />
      <CTABanner phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
    </>
  );
}
