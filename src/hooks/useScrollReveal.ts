import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    function observeAll() {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
    }

    // Observe immediately + after lazy chunks load
    observeAll();
    const raf = requestAnimationFrame(observeAll);
    const timer = setTimeout(observeAll, 200);

    // Watch for new .reveal elements added by lazy-loaded pages
    const mutation = new MutationObserver(() => observeAll());
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      mutation.disconnect();
      observer.disconnect();
    };
  }, [pathname]);
}
