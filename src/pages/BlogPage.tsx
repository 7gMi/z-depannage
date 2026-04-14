import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { CTABanner } from '../components/layout/CTABanner';
import { ARTICLES } from '../data/articles';
import { getArticleI18n } from '../data/articles-i18n';
import { useT } from '../i18n/LanguageContext';

interface BlogPageProps {
  phoneDisplay: string;
  phoneLink: string;
}

export function BlogPage({ phoneDisplay, phoneLink }: BlogPageProps) {
  const { t, lang } = useT();
  // Stocke la catégorie en clé FR (stable) — affiche la version localisée
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('all');

  const localizedArticles = useMemo(
    () =>
      ARTICLES.map((a) => {
        const i18n = getArticleI18n(a.slug, lang);
        return {
          ...a,
          title: i18n?.title ?? a.title,
          excerpt: i18n?.excerpt ?? a.excerpt,
          // displayCategory pour affichage, categoryKey pour le filtre
          displayCategory: i18n?.category ?? a.category,
          categoryKey: a.category,
        };
      }),
    [lang]
  );

  // Liste catégories : ordre stable (par clé FR), labels localisés
  const categories = useMemo(() => {
    const seen = new Map<string, { label: string; count: number }>();
    localizedArticles.forEach((a) => {
      const existing = seen.get(a.categoryKey);
      if (existing) {
        existing.count++;
      } else {
        seen.set(a.categoryKey, { label: a.displayCategory, count: 1 });
      }
    });
    return Array.from(seen.entries())
      .map(([key, { label, count }]) => ({ key, label, count }))
      .sort((a, b) => b.count - a.count);
  }, [localizedArticles]);

  const filteredArticles = useMemo(
    () =>
      activeCategoryKey === 'all'
        ? localizedArticles
        : localizedArticles.filter((a) => a.categoryKey === activeCategoryKey),
    [activeCategoryKey, localizedArticles]
  );

  return (
    <>
      <PageMeta
        title="Blog Dépannage — Conseils, Tarifs, Assurance | ZDEPANNAGE"
        description="Conseils pratiques, tarifs réglementés et astuces pour les automobilistes. Tout savoir sur le dépannage et le remorquage en Île-de-France."
      />

      {/* Hero blog */}
      <section className="relative py-20 sm:py-28 bg-[var(--bg-dark)] overflow-hidden">
        <picture>
          <source srcSet="/atelier/blog-hero-editorial.avif" type="image/avif" />
          <source srcSet="/atelier/blog-hero-editorial.webp" type="image/webp" />
          <img
            src="/atelier/blog-hero-editorial.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none"
            aria-hidden="true"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/50 via-[var(--bg-dark)]/65 to-[var(--bg-dark)]/90 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 pattern-dots-orange pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full px-4 py-2 mb-6">
            <BookOpen size={16} className="text-[var(--accent-bright)]" />
            <span className="text-[var(--accent-bright)] font-medium text-sm">{t('blog.badge')}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 sm:py-20 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              type="button"
              onClick={() => setActiveCategoryKey('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategoryKey === 'all'
                  ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-md'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-default)] hover:border-[var(--primary)]/40 hover:text-[var(--primary)]'
              }`}
            >
              {t('blog.all') || 'Tous'} <span className="opacity-60">({ARTICLES.length})</span>
            </button>
            {categories.map(({ key, label, count }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategoryKey(key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategoryKey === key
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-md'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-default)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)]'
                }`}
              >
                {label} <span className="opacity-60">({count})</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(({ slug, title, excerpt, displayCategory, date, readTime, image }) => (
              <Link
                key={slug}
                to={`/blog/${slug}`}
                className="group flex flex-col bg-[var(--bg-card)] rounded-2xl border border-[var(--border-default)] overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
                </div>

                <div className="p-6 pt-3 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/8 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                      {displayCategory}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[var(--text-tertiary)]">
                      <Clock size={12} />
                      {readTime} min
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary)] transition-colors leading-snug">
                    {title}
                  </h2>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border-default)]">
                    <span className="text-xs text-[var(--text-tertiary)]">
                      {new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[var(--primary)] group-hover:gap-2 transition-all">
                      {t('blog.read')}
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
    </>
  );
}
