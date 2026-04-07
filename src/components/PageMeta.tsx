import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
}

const BASE_URL = 'https://z-depannage.fr';

const BREADCRUMB_NAMES: Record<string, string> = {
  '/': 'Accueil',
  '/services': 'Services',
  '/tarifs': 'Tarifs',
  '/zone': "Zone d'intervention",
  '/a-propos': 'À propos',
  '/contact': 'Contact',
};

export function PageMeta({ title, description, canonical }: PageMetaProps) {
  const { pathname } = useLocation();
  const url = canonical ?? `${BASE_URL}${pathname}`;

  useEffect(() => {
    document.title = title;

    function setMeta(name: string, content: string, attr = 'name') {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    }

    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('twitter:title', title, 'name');
    setMeta('twitter:description', description, 'name');
    setMeta('og:image', `${BASE_URL}/og-image.png`, 'property');
    setMeta('twitter:image', `${BASE_URL}/og-image.png`, 'name');
    setMeta('twitter:card', 'summary_large_image', 'name');

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    // BreadcrumbList JSON-LD
    const breadcrumbId = 'breadcrumb-jsonld';
    let script = document.getElementById(breadcrumbId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = breadcrumbId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const items = [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL + '/' },
    ];
    if (pathname !== '/') {
      const pageName = BREADCRUMB_NAMES[pathname] ?? title.split('—')[0].trim();
      items.push({ '@type': 'ListItem', position: 2, name: pageName, item: url });
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    });

    return () => {
      script?.remove();
    };
  }, [title, description, url, pathname]);

  return null;
}
