import { Truck, Wrench, Car, AlertTriangle } from 'lucide-react';

const SERVICES = [
  { icon: Truck, title: 'Remorquage', desc: 'Transport de votre vehicule vers le garage de votre choix ou notre atelier' },
  { icon: Wrench, title: 'Depannage sur place', desc: 'Reparation rapide sur le lieu de la panne : batterie, pneu, demarrage' },
  { icon: Car, title: 'Enlevement epave', desc: 'Recuperation et enlevement de vehicules hors d\'usage' },
  { icon: AlertTriangle, title: 'Accident / Fourriere', desc: 'Intervention apres accident ou mise en fourriere, agree police et gendarmerie' },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">Nos Services</h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">Intervention rapide 24h/24, 7j/7 sur toute l'Ile-de-France</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-hover bg-[var(--bg-card)] rounded-2xl border border-[var(--border-default)] p-6 text-center">
              <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(30,64,175,0.08)' }}>
                <Icon size={28} className="text-[var(--primary)]" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
