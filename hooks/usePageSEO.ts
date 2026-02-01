import { useEffect } from 'react';

interface HreflangEntry {
  lang: string;
  href: string;
}

interface PageSEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  hreflang?: HreflangEntry[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = 'https://www.rodolfogaspary.com';

const DEFAULT_TITLE = 'Rodolfo Gaspary — Desarrollo Web y Estrategia Digital | Lima, Peru';
const DEFAULT_OG_IMAGE = `${BASE_URL}/headshot.jpg`;

function setMetaTag(property: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (el) {
    el.content = content;
  } else {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    el.content = content;
    document.head.appendChild(el);
  }
}

export function usePageSEO(config: PageSEOConfig) {
  useEffect(() => {
    const prevTitle = document.title;

    // Title
    document.title = config.title;

    // Meta description
    setMetaTag('description', config.description);

    // Meta keywords
    if (config.keywords) {
      setMetaTag('keywords', config.keywords);
    }

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonical?.href || '';
    if (canonical) {
      canonical.href = `${BASE_URL}${config.canonical}`;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = `${BASE_URL}${config.canonical}`;
      document.head.appendChild(canonical);
    }

    // Open Graph
    setMetaTag('og:title', config.ogTitle || config.title, true);
    setMetaTag('og:description', config.ogDescription || config.description, true);
    setMetaTag('og:url', `${BASE_URL}${config.canonical}`, true);
    setMetaTag('og:image', config.ogImage || DEFAULT_OG_IMAGE, true);

    // Twitter
    setMetaTag('twitter:title', config.ogTitle || config.title, true);
    setMetaTag('twitter:description', config.ogDescription || config.description, true);
    setMetaTag('twitter:image', config.ogImage || DEFAULT_OG_IMAGE, true);

    // Hreflang
    const addedLinks: HTMLLinkElement[] = [];
    // Remove existing dynamic hreflang links (keep static ones from index.html by marking dynamic ones)
    document.querySelectorAll('link[data-dynamic-hreflang]').forEach(el => el.remove());

    if (config.hreflang) {
      config.hreflang.forEach(({ lang, href }) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = href;
        link.setAttribute('data-dynamic-hreflang', 'true');
        document.head.appendChild(link);
        addedLinks.push(link);
      });
    }

    // JSON-LD
    let jsonLdScript: HTMLScriptElement | null = null;
    if (config.jsonLd) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.setAttribute('data-dynamic-jsonld', 'true');
      jsonLdScript.textContent = JSON.stringify(config.jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    return () => {
      document.title = prevTitle;
      if (canonical && prevCanonical) {
        canonical.href = prevCanonical;
      }
      addedLinks.forEach(link => link.remove());
      document.querySelectorAll('script[data-dynamic-jsonld]').forEach(el => el.remove());
    };
  }, [config.title, config.description, config.canonical]);
}
