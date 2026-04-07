import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Phone } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { JsonLd } from '../components/JsonLd';
import { ARTICLES } from '../data/articles';
import { getArticleI18n } from '../data/articles-i18n';
import { useT } from '../i18n/LanguageContext';

interface ArticlePageProps {
  phoneDisplay: string;
  phoneLink: string;
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-[var(--text-primary)]">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export function ArticlePage({ phoneDisplay, phoneLink }: ArticlePageProps) {
  const { slug } = useParams();
  const { t, lang } = useT();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  const i18n = slug ? getArticleI18n(slug, lang) : null;
  const displayTitle = i18n?.title ?? article.title;
  const displayExcerpt = i18n?.excerpt ?? article.excerpt;
  const displayCategory = i18n?.category ?? article.category;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: displayTitle,
    description: displayExcerpt,
    inLanguage: lang,
    image: `https://z-depannage.fr${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: 'ZDEPANNAGE' },
    publisher: {
      '@type': 'Organization',
      name: 'ZDEPANNAGE',
      url: 'https://z-depannage.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://z-depannage.fr/logo-zdepannage.png',
      },
    },
  };

  return (
    <>
      <PageMeta
        title={`${displayTitle} | ZDEPANNAGE Blog`}
        description={displayExcerpt}
      />
      <JsonLd data={articleSchema} id="article-schema" />

      <article className="py-12 sm:py-16 bg-[var(--bg-primary)]">
        <div className="max-w-3xl mx-auto px-4">
          {/* Retour blog */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t('blog.back')}
          </Link>

          {/* Header article */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/8 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                {displayCategory}
              </span>
              <span className="flex items-center gap-1 text-xs text-[var(--text-tertiary)]">
                <Clock size={12} />
                {article.readTime} min de lecture
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] leading-tight mb-4">
              {displayTitle}
            </h1>
            <p className="text-lg text-[var(--text-secondary)]">{displayExcerpt}</p>
            {lang !== 'fr' && (
              <div className="mt-4 px-4 py-3 rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/20 text-sm text-[var(--text-secondary)]" lang="fr" dir="ltr">
                ℹ️ {t('blog.frenchOnly')}
              </div>
            )}
            <div className="mt-4 text-sm text-[var(--text-tertiary)]">
              Publié le {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </div>

          {/* Contenu article */}
          <div className="prose-custom space-y-4">
            {article.content.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} className="font-heading font-bold text-xl text-[var(--text-primary)] mt-8 mb-3">
                    {renderInline(block.replace('## ', ''))}
                  </h2>
                );
              }
              if (block.includes('\n')) {
                return (
                  <div key={i} className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                    {renderInline(block)}
                  </div>
                );
              }
              return (
                <p key={i} className="text-[var(--text-secondary)] leading-relaxed">
                  {renderInline(block)}
                </p>
              );
            })}
          </div>

          {/* CTA inline */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border-2 border-[var(--accent)]/20 bg-[var(--accent)]/5 text-center">
            <h3 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-2">
              {t('blog.needHelp')}
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              ZDEPANNAGE intervient en 30 minutes, 24h/24, sur toute l'Île-de-France.
            </p>
            <a
              href={phoneLink}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-heading font-extrabold text-xl transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-orange)' }}
            >
              <Phone size={24} className="animate-phone-ring" />
              {phoneDisplay}
            </a>
          </div>

          {/* Articles liés */}
          <div className="mt-16">
            <h3 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-6">Autres articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ARTICLES.filter((a) => a.slug !== slug).slice(0, 2).map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="group p-5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] hover:border-[var(--primary)]/30 transition-all"
                >
                  <span className="text-xs font-bold text-[var(--accent)]">{a.category}</span>
                  <h4 className="font-heading font-bold text-sm mt-1 group-hover:text-[var(--primary)] transition-colors">{a.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
