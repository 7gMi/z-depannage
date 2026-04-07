export interface Avis {
  name: string;
  initial: string;
  gradient: string;
  text: string;
  date: string;
}

export const AVIS: Avis[] = [
  {
    name: 'Arnaud de Closmadeuc',
    initial: 'A',
    gradient: 'linear-gradient(135deg, #4285F4, #34A853)',
    text: "Un service impeccable ! Le dépanneur est arrivé rapidement, très professionnel.",
    date: 'Août 2025',
  },
  {
    name: 'Théo Falsquelle',
    initial: 'T',
    gradient: 'linear-gradient(135deg, #EA580C, #F97316)',
    text: "Service parfait, Ali est intervenu rapidement et sa bonne humeur fait du bien quand on était en galère. Je recommande.",
    date: 'Mars 2026',
  },
  {
    name: 'Virginia Danalachi',
    initial: 'V',
    gradient: 'linear-gradient(135deg, #34A853, #22c55e)',
    text: "Un professionnel qui nous a aidé lors d'une panne sur l'autoroute, très rapide et rigoureux, qui s'est occupé des documents pour l'assurance.",
    date: 'Janvier 2025',
  },
  {
    name: 'Yns Bene',
    initial: 'Y',
    gradient: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
    text: "Dépannage rapide et de qualité. ZDepannage a pris soin de mon véhicule de la prise en charge à la livraison, il m'a aiguillé vers un super garage !! C'est un vrai professionnel !!",
    date: 'Avril 2025',
  },
  {
    name: 'Céline Lenoir',
    initial: 'C',
    gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    text: "Les bonnes personnes au bon moment, ma voiture ne démarre pas Dieu merci j'ai croisé Z dépannage et son équipe sur ma route. Merci à vous !",
    date: 'Octobre 2025',
  },
  {
    name: 'Delphine Vierezet',
    initial: 'D',
    gradient: 'linear-gradient(135deg, #EA4335, #ef4444)',
    text: "Un grand merci à Bastien. C'est un dépanneur rassurant et efficace. Dès qu'il dépose la voiture au garage, il envoie des photos pour preuve. Je recommande cette entreprise.",
    date: 'Mars 2026',
  },
  {
    name: 'Adam Ozturk',
    initial: 'A',
    gradient: 'linear-gradient(135deg, #FBBC05, #eab308)',
    text: "Dépanneur au top, délais respectés, venu rapidement. J'ai déboursé 0€, il m'a fait une prise en charge avec mon assurance. Dépanneuse dernier cri !",
    date: 'Mars 2025',
  },
];
