import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';
import BlogCard from '../components/BlogCard';

const Blog: React.FC = () => {
  const { hash } = useLocation();

  usePageSEO({
    title: 'Blog — Desarrollo Web, SEO y Estrategia Digital | Rodolfo Gaspary',
    description: 'Artículos sobre desarrollo web, SEO, GEO, estrategia digital y tendencias tecnológicas para empresas en Lima, Perú y a nivel global.',
    keywords: 'blog desarrollo web, artículos SEO, estrategia digital perú, GEO optimización, tendencias web 2026',
    canonical: '/blog',
    lang: 'es',
    hreflang: [
      { lang: 'es', href: 'https://www.rodolfogaspary.com/blog' },
      { lang: 'en', href: 'https://www.rodolfogaspary.com/en/blog' },
      { lang: 'x-default', href: 'https://www.rodolfogaspary.com/blog' },
    ],
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.rodolfogaspary.com/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://www.rodolfogaspary.com/blog' }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': 'Blog — Desarrollo Web, SEO y Estrategia Digital',
        'url': 'https://www.rodolfogaspary.com/blog',
        'inLanguage': 'es',
        'description': 'Artículos sobre desarrollo web, SEO, GEO y estrategia digital para empresas.'
      }
    ]
  });

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  const articles = [
    {
      to: '/blog/cuanto-cuesta-pagina-web-peru',
      title: '¿Cuánto cuesta una página web profesional en Perú? (2026)',
      description: 'Rangos de precios reales del mercado peruano, factores que afectan el costo y cuándo vale la pena invertir más en tu sitio web.',
      date: '25 Mar 2026',
      readingTime: '8 min',
      tag: 'Desarrollo Web',
    },
    {
      to: '/blog/seo-vs-geo-que-necesita-tu-empresa',
      title: 'SEO vs GEO: ¿Qué necesita tu empresa en 2026?',
      description: 'Diferencias clave entre la optimización para buscadores tradicionales y los motores de búsqueda generativos con IA.',
      date: '25 Mar 2026',
      readingTime: '7 min',
      tag: 'SEO/GEO',
    },
    {
      to: '/blog/errores-sitio-web-pierde-clientes',
      title: '5 errores que hacen que tu sitio web pierda clientes',
      description: 'Los problemas más comunes en sitios web empresariales y cómo solucionarlos para mejorar la conversión.',
      date: '25 Mar 2026',
      readingTime: '6 min',
      tag: 'Desarrollo Web',
    },
    {
      to: '/blog/estrategia-digital-pymes-lima',
      title: 'Guía de estrategia digital para PYMEs en Lima (2026)',
      description: 'Los 5 pilares de una estrategia digital efectiva y una hoja de ruta de 90 días para pequeñas y medianas empresas.',
      date: '25 Mar 2026',
      readingTime: '9 min',
      tag: 'Estrategia Digital',
    },
  ];

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto px-6 lg:px-40 py-12">
      <section className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-lg text-muted dark:text-stone-400 max-w-2xl">
          Artículos sobre desarrollo web, SEO, GEO y estrategia digital para empresas que quieren crecer en el mercado digital.
        </p>
      </section>

      <section className="grid gap-4">
        {articles.map((article) => (
          <BlogCard key={article.to} {...article} />
        ))}
      </section>

      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-stone-200 dark:border-stone-700 pt-8 pb-12 mt-12">
        <a
          href="/en/blog"
          className="text-accent font-medium hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          Read in English
        </a>
      </nav>
    </div>
  );
};

export default Blog;
