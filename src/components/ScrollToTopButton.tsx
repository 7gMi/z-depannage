import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollToTopButton() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(ratio);
      setVisible(scrollTop > 200);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const offset = CIRCUMFERENCE - progress * CIRCUMFERENCE;

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Retour en haut de la page"
      className={`fixed right-4 bottom-20 sm:bottom-20 z-40 w-12 h-12 rounded-full bg-[var(--bg-dark)]/80 backdrop-blur-md border border-white/15 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--bg-dark)] flex items-center justify-center ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Cercle de progression SVG */}
      <svg className="absolute inset-0 -rotate-90" width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
        <circle
          cx="24"
          cy="24"
          r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2.5"
        />
        <circle
          cx="24"
          cy="24"
          r={RADIUS}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 80ms linear' }}
        />
      </svg>
      <ArrowUp size={20} strokeWidth={2.5} className="relative z-10" />
    </button>
  );
}
