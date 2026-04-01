import { Phone, Clock, Zap, Shield, MapPin } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Clock, label: '24h/24 — 7j/7' },
  { icon: Zap, label: 'Intervention en 30 min' },
  { icon: Shield, label: 'Agréé assurances' },
  { icon: MapPin, label: 'Essonne & IDF' },
];

export function Hero({ phoneDisplay, phoneLink }: { phoneDisplay: string; phoneLink: string }) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden gradient-hero">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/80 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center md:text-left md:max-w-3xl">
        {/* Badge urgence */}
        <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full px-4 py-2 mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-bright)] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]" />
          </span>
          <span className="text-[var(--accent-bright)] font-medium text-sm">
            Intervention en 30 minutes
          </span>
        </div>

        {/* Titre */}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
          Dépannage Auto<br />
          <span className="text-[var(--accent-bright)]">24h/24 — 7j/7</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl">
          Morsang-sur-Orge et toute l'Île-de-France.
          Agréé par les assurances et les forces de l'ordre.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
          <a
            href={phoneLink}
            className="group inline-flex items-center gap-3 text-white font-heading font-extrabold text-xl md:text-2xl px-8 py-5 rounded-2xl animate-cta-pulse transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-orange)' }}
          >
            <Phone size={28} className="animate-phone-ring" />
            {phoneDisplay}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-medium px-6 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200"
          >
            Demander un rappel
          </a>
        </div>
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 text-white/80 text-sm">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={18} className="text-[var(--accent-bright)]" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
