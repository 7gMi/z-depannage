import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { StickyBar } from './components/layout/StickyBar';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { LanguageProvider, useT } from './i18n/LanguageContext';
import { useScrollReveal } from './hooks/useScrollReveal';
// HomePage non lazy : c'est la landing principale (LCP critical path)
import { HomePage } from './pages/HomePage';
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const TarifsPage = lazy(() => import('./pages/TarifsPage').then(m => ({ default: m.TarifsPage })));
const ZonePage = lazy(() => import('./pages/ZonePage').then(m => ({ default: m.ZonePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const ArticlePage = lazy(() => import('./pages/ArticlePage').then(m => ({ default: m.ArticlePage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

const PHONE = '0756973686';
const PHONE_DISPLAY = '07 56 97 36 86';
const PHONE_LINK = `tel:+33${PHONE.slice(1)}`;

function AppContent() {
  useScrollReveal();
  const { t } = useT();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <ScrollProgress />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--accent)] focus:text-white focus:font-bold">
        {t('a11y.skipToContent')}
      </a>
      <Header phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />
      <main id="main-content">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Routes>
            <Route path="/" element={<HomePage phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />} />
            <Route path="/services" element={<ServicesPage phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />} />
            <Route path="/tarifs" element={<TarifsPage phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />} />
            <Route path="/zone" element={<ZonePage phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />} />
            <Route path="/a-propos" element={<AboutPage phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />} />
            <Route path="/blog" element={<BlogPage phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />} />
            <Route path="/blog/:slug" element={<ArticlePage phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />} />
            <Route path="/contact" element={<ContactPage phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />} />
            <Route path="*" element={<NotFoundPage phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />} />
          </Routes>
        </Suspense>
      </main>
      <Footer phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />
      <ScrollToTopButton />
      <StickyBar phoneLink={PHONE_LINK} phoneDisplay={PHONE_DISPLAY} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}
