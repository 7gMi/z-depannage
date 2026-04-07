import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Retour en haut de la page"
      className={`fixed right-4 z-40 w-12 h-12 rounded-full bg-[var(--primary)] text-white shadow-lg border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-[var(--primary-hover,var(--primary))] hover:-translate-y-0.5 flex items-center justify-center bottom-20 sm:bottom-20 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ boxShadow: '0 8px 24px rgba(30,64,175,0.35)' }}
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
}
