import { Phone, MapPin, Clock } from 'lucide-react';

export function Footer({ phoneDisplay, phoneLink }: { phoneDisplay: string; phoneLink: string }) {
  return (
    <footer className="bg-[var(--bg-dark)] text-white/70 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <span className="font-heading font-bold text-2xl text-white">Z<span className="text-[var(--accent-bright)]">DEPANNAGE</span></span>
            <p className="text-sm mt-2">Depannage et remorquage automobile 24h/24, 7j/7 en Ile-de-France</p>
          </div>
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-3">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href={phoneLink} className="flex items-center gap-2 hover:text-[var(--accent-bright)] transition-colors">
                <Phone size={14} /> {phoneDisplay}
              </a>
              <span className="flex items-center gap-2"><MapPin size={14} /> Morsang-sur-Orge (91)</span>
              <span className="flex items-center gap-2"><Clock size={14} /> 24h/24 — 7j/7</span>
            </div>
          </div>
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-3">Navigation</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a>
              <a href="#zone" className="hover:text-white transition-colors">Zone d'intervention</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; 2026 ZDEPANNAGE — Tous droits reserves
        </div>
        <div className="border-t border-white/5 mt-4 pt-4">
          <a href="https://mihaigaina.dev" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 text-xs text-white/30 hover:text-white/50 transition-colors">
            <span className="inline-block h-px w-6 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent-bright)]" />
            <span>Designed by <span className="font-medium text-white/40 group-hover:text-[var(--accent-bright)] transition-colors">Mihai Gaina</span></span>
            <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            <span className="inline-block h-px w-6 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent-bright)]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
