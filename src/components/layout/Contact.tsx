import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact({ phoneDisplay, phoneLink }: { phoneDisplay: string; phoneLink: string }) {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">Contact</h2>
          <p className="text-[var(--text-secondary)]">Appelez-nous a tout moment, nous intervenons 24h/24</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]">
            <Phone size={24} className="mx-auto mb-3 text-[var(--accent)]" />
            <h3 className="font-heading font-bold mb-1">Telephone</h3>
            <a href={phoneLink} className="text-[var(--accent)] font-bold text-lg">{phoneDisplay}</a>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]">
            <Mail size={24} className="mx-auto mb-3 text-[var(--primary)]" />
            <h3 className="font-heading font-bold mb-1">Email</h3>
            <p className="text-[var(--text-secondary)] text-sm">contact@z-depannage.fr</p>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]">
            <MapPin size={24} className="mx-auto mb-3 text-[var(--primary)]" />
            <h3 className="font-heading font-bold mb-1">Adresse</h3>
            <p className="text-[var(--text-secondary)] text-sm">Morsang-sur-Orge (91)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
