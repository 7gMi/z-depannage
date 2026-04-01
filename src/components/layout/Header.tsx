import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#zone', label: 'Zone' },
  { href: '#contact', label: 'Contact' },
];

export function Header({ phoneDisplay, phoneLink }: { phoneDisplay: string; phoneLink: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--bg-dark)]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src="/logo-zdepannage.webp" alt="ZDEPANNAGE" className="h-10 md:h-12" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="text-white/80 text-sm font-medium hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </nav>

          {/* Phone CTA — toujours visible */}
          <a
            href={phoneLink}
            className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-heading font-bold text-sm md:text-lg text-white transition-colors"
            style={{ background: 'var(--gradient-cta)' }}
          >
            <Phone size={18} className="animate-phone-ring" />
            <span className="hidden sm:inline">{phoneDisplay}</span>
            <span className="sm:hidden">Appeler</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white ml-2"
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm z-[70] md:hidden transition-transform duration-300 ease-out bg-[var(--bg-dark)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-1 w-full" style={{ background: 'var(--gradient-cta)' }} />
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-heading font-bold text-white text-lg">ZDEPANNAGE</span>
          <button onClick={() => setIsOpen(false)} className="p-2 text-white" aria-label="Fermer">
            <X size={22} />
          </button>
        </div>
        <nav className="px-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-white/80 font-medium hover:bg-white/5 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="px-5 mt-6">
          <a
            href={phoneLink}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-heading font-bold text-lg animate-cta-pulse"
            style={{ background: 'var(--gradient-cta)' }}
          >
            <Phone size={20} />
            {phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
