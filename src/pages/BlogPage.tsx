import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { CTABanner } from '../components/layout/CTABanner';
import { ARTICLES } from '../data/articles';
import { useT } from '../i18n/LanguageContext';

interface BlogPageProps {
  phoneDisplay: string;
  phoneLink: string;
}

export function BlogPage({ phoneDisplay, phoneLink }: BlogPageProps) {
  const { t } = useT();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    ARTICLES.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, []);

  const filteredArticles = useMemo(
    () => (activeCategory === 'all' ? ARTICLES : ARTICLES.filter((a) => a.category === activeCategory)),
    [activeCategory]
  );

  return (
    <>
      <PageMeta
        title="Blog Dépannage — Conseils, Tarifs, Assurance | ZDEPANNAGE"
        description="Conseils pratiques, tarifs réglementés et astuces pour les automobilistes. Tout savoir sur le dépannage et le remorquage en Île-de-France."
      />

      {/* Hero blog */}
      <section className="py-16 sm:py-20 bg-[var(--bg-dark)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full px-4 py-2 mb-6">
            <BookOpen size={16} className="text-[var(--accent-bright)]" />
            <span className="text-[var(--accent-bright)] font-medium text-sm">{t('blog.badge')}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
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
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === 'all'
                  ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-md'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-default)] hover:border-[var(--primary)]/40 hover:text-[var(--primary)]'
              }`}
            >
              {t('blog.all') || 'Tous'} <span className="opacity-60">({ARTICLES.length})</span>
            </button>
            {categories.map(([cat, count]) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-md'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-default)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)]'
                }`}
              >
                {cat} <span className="opacity-60">({count})</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(({ slug, title, excerpt, category, date, readTime, image }) => (
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
                      {category}
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
