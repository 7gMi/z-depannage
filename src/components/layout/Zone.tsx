import { MapPin } from 'lucide-react';

export function Zone() {
  return (
    <section id="zone" className="py-16 sm:py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">Zone d'intervention</h2>
        <p className="text-[var(--text-secondary)] mb-8">Morsang-sur-Orge et toute l'Ile-de-France</p>
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-[var(--primary)] font-medium">
          <MapPin size={18} />
          Essonne (91) - Val-de-Marne (94) - Paris (75) - Hauts-de-Seine (92)
        </div>
      </div>
    </section>
  );
}
