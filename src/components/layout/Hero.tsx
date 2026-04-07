import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

const SLIDES = [
  { img: '/hero/2.webp', alt: 'ZDEPANNAGE — Dépannage Mercedes GLS' },
  { img: '/hero/1.webp', alt: 'ZDEPANNAGE — Double remorquage utilitaires' },
  { img: '/hero/4.webp', alt: 'ZDEPANNAGE — Remorquage Mercedes AMG' },
  { img: '/hero/5.webp', alt: 'ZDEPANNAGE — Remorquage Audi Q8' },
  { img: '/hero/3.webp', alt: 'ZDEPANNAGE — Intervention Renault Trafic' },
];

export function Hero({ phoneDisplay, phoneLink }: { phoneDisplay: string; phoneLink: string }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { t } = useT();

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
          aria-hidden={current !== i}
        >
          <img
            src={slide.img}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
          <div className="absolute inset-0 bg-[var(--bg-dark)]/55" />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)]/90 via-[var(--bg-dark)]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-transparent to-[var(--bg-dark)]/30" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }} />

      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20" role="tablist" aria-label={t('aria.carousel')}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={current === i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === i ? 'w-8 bg-[var(--accent)]' : 'w-3 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
        <button
          onClick={() => setPaused(!paused)}
          className="ml-2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 transition-all"
          aria-label={paused ? 'Reprendre le diaporama' : 'Mettre en pause le diaporama'}
        >
          {paused ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><polygon points="2,0 10,5 2,10" /></svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><rect x="1" y="0" width="3" height="10" /><rect x="6" y="0" width="3" height="10" /></svg>
          )}
        </button>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center md:text-left md:max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full px-4 py-2 mb-8 animate-[fadeInUp_0.6s_ease_0.2s_both]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-bright)] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]" />
          </span>
          <span className="text-[var(--accent-bright)] font-medium text-sm">
            {t('hero.badge')}
          </span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight animate-[fadeInUp_0.6s_ease_0.4s_both]">
          {t('hero.title1')}<br />
          {t('hero.title2')}<br />
          <span className="text-[var(--accent-bright)]">{t('hero.title3')}</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl animate-[fadeInUp_0.6s_ease_0.6s_both]">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start animate-[fadeInUp_0.6s_ease_0.8s_both]">
          <a
            href={phoneLink}
            className="group inline-flex items-center gap-3 text-white font-heading font-extrabold text-xl md:text-2xl px-8 py-5 rounded-2xl animate-cta-pulse transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-orange)' }}
          >
            <Phone size={28} className="animate-phone-ring" />
            {phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-medium px-6 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200"
          >
            {t('hero.callback')}
          </Link>
        </div>
      </div>
    </section>
  );
}
