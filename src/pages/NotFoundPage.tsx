import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';

export function NotFoundPage({ phoneDisplay, phoneLink }: { phoneDisplay: string; phoneLink: string }) {
  return (
    <>
      <PageMeta title="Page non trouvée — ZDEPANNAGE" description="La page que vous cherchez n'existe pas." />
      <section className="py-24 sm:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-lg mx-auto px-4 text-center">
          <p className="font-heading text-8xl font-extrabold text-[var(--accent)] mb-4">404</p>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
            Page non trouvée
          </h1>
          <p className="text-[var(--text-secondary)] mb-10">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-white transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--gradient-cta)' }}
            >
              <Home size={18} />
              Retour à l'accueil
            </Link>
            <a
              href={phoneLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-bold border-2 border-[var(--primary)]/20 text-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all"
            >
              <Phone size={18} />
              {phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
