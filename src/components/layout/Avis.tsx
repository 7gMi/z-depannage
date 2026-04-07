import { Star } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

const AVIS = [
  { name: 'Arnaud de Closmadeuc', initial: 'A', gradient: 'linear-gradient(135deg, #4285F4, #34A853)', text: "Un service impeccable ! Le dépanneur est arrivé rapidement, très professionnel.", date: 'Août 2025' },
  { name: 'Théo Falsquelle', initial: 'T', gradient: 'linear-gradient(135deg, #EA580C, #F97316)', text: "Service parfait, Ali est intervenu rapidement et sa bonne humeur fait du bien quand on était en galère. Je recommande.", date: 'Mars 2026' },
  { name: 'Virginia Danalachi', initial: 'V', gradient: 'linear-gradient(135deg, #34A853, #22c55e)', text: "Un professionnel qui nous a aidé lors d'une panne sur l'autoroute, très rapide et rigoureux, qui s'est occupé des documents pour l'assurance.", date: 'Janvier 2025' },
  { name: 'Yns Bene', initial: 'Y', gradient: 'linear-gradient(135deg, #1E40AF, #3B82F6)', text: "Dépannage rapide et de qualité. ZDepannage a pris soin de mon véhicule de la prise en charge à la livraison, il m'a aiguillé vers un super garage !! C'est un vrai professionnel !!", date: 'Avril 2025' },
  { name: 'Céline Lenoir', initial: 'C', gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)', text: "Les bonnes personnes au bon moment, ma voiture ne démarre pas Dieu merci j'ai croisé Z dépannage et son équipe sur ma route. Merci à vous !", date: 'Octobre 2025' },
  { name: 'Delphine Vierezet', initial: 'D', gradient: 'linear-gradient(135deg, #EA4335, #ef4444)', text: "Un grand merci à Bastien. C'est un dépanneur rassurant et efficace. Dès qu'il dépose la voiture au garage, il envoie des photos pour preuve. Je recommande cette entreprise.", date: 'Mars 2026' },
  { name: 'Adam Ozturk', initial: 'A', gradient: 'linear-gradient(135deg, #FBBC05, #eab308)', text: "Dépanneur au top, délais respectés, venu rapidement. J'ai déboursé 0€, il m'a fait une prise en charge avec mon assurance. Dépanneuse dernier cri !", date: 'Mars 2025' },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export function Avis({ limit }: { limit?: number } = {}) {
  const { t } = useT();
  const items = limit ? AVIS.slice(0, limit) : AVIS;

  return (
    <section id="avis" className="py-16 sm:py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-full shadow-sm border border-[var(--border-default)] mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-bold text-[var(--text-primary)]">{t('avis.google')}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">{t('avis.title')}</h2>

          <div className="flex items-center justify-center gap-3">
            <span className="font-heading text-5xl font-extrabold text-[var(--text-primary)]">5.0</span>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-[var(--text-tertiary)]">{t('avis.count')}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-stagger">
          {items.map(({ name, initial, gradient, text, date }) => (
            <div key={name} className="reveal card-hover bg-[var(--bg-card)] rounded-2xl border border-[var(--border-default)] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: gradient }}>
                  {initial}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[var(--text-primary)]">{name}</p>
                  <Stars />
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">"{text}"</p>
              <p className="text-xs text-[var(--text-tertiary)]">{date}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/ZDEPANNAGE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[var(--border-default)] shadow-sm text-sm font-semibold text-[#4285F4] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {t('avis.viewGoogle')}
          </a>
        </div>
      </div>
    </section>
  );
}
