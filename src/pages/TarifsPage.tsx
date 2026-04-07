import { PageMeta } from '../components/PageMeta';
import { JsonLd } from '../components/JsonLd';
import { Tarifs } from '../components/layout/Tarifs';
import { FAQ } from '../components/layout/FAQ';
import { CTABanner } from '../components/layout/CTABanner';

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quels sont vos horaires d'intervention ?",
      acceptedAnswer: { '@type': 'Answer', text: 'Nous intervenons 24h/24, 7j/7, y compris les week-ends et jours fériés. Appelez-nous à tout moment au 07 56 97 36 86.' },
    },
    {
      '@type': 'Question',
      name: 'Dans quelle zone intervenez-vous ?',
      acceptedAnswer: { '@type': 'Answer', text: "Nous couvrons toute l'Île-de-France : Paris (75), Essonne (91), Val-de-Marne (94), Hauts-de-Seine (92), Seine-Saint-Denis (93), Seine-et-Marne (77), Yvelines (78) et Val-d'Oise (95)." },
    },
    {
      '@type': 'Question',
      name: 'Est-ce que mon assurance prend en charge le dépannage ?',
      acceptedAnswer: { '@type': 'Answer', text: "Oui, nous travaillons avec toutes les compagnies d'assurance. Nous pouvons faire une prise en charge directe avec votre assureur." },
    },
    {
      '@type': 'Question',
      name: "Quel est le délai d'intervention ?",
      acceptedAnswer: { '@type': 'Answer', text: 'En moyenne, notre dépanneur arrive en moins de 30 minutes.' },
    },
    {
      '@type': 'Question',
      name: 'Quels types de véhicules dépannez-vous ?',
      acceptedAnswer: { '@type': 'Answer', text: "Tous les véhicules jusqu'à 3,5 tonnes : voitures, utilitaires, motos, scooters, quads, camping-cars." },
    },
    {
      '@type': 'Question',
      name: 'Comment sont calculés les tarifs ?',
      acceptedAnswer: { '@type': 'Answer', text: "Les tarifs sur autoroutes sont fixés par arrêté ministériel. Le prix exact vous est communiqué par téléphone avant toute intervention." },
    },
  ],
};

interface TarifsPageProps {
  phoneDisplay: string;
  phoneLink: string;
}

export function TarifsPage({ phoneDisplay, phoneLink }: TarifsPageProps) {
  return (
    <>
      <PageMeta
        title="Tarifs Dépannage Réglementés — Autoroutes & Police | ZDEPANNAGE"
        description="Tarifs de dépannage fixés par arrêté ministériel. Grille tarifaire autoroutes et police/gendarmerie. Transparence totale, aucun frais caché."
      />
      <JsonLd data={FAQ_SCHEMA} id="faq-schema" />
      <Tarifs />
      <FAQ />
      <CTABanner phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
    </>
  );
}
