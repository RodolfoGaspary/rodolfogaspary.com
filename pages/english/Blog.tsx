import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageSEO } from '../../hooks/usePageSEO';
import BlogCard from '../../components/BlogCard';

const BlogEn: React.FC = () => {
  const { hash } = useLocation();

  usePageSEO({
    title: 'Blog — Web Development, SEO & Digital Strategy | Rodolfo Gaspary',
    description: 'Articles on web development, SEO, GEO, digital strategy, and technology trends for businesses in Lima, Peru and globally.',
    keywords: 'web development blog, SEO articles, digital strategy peru, GEO optimization, web trends 2026',
    canonical: '/en/blog',
    lang: 'en',
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
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rodolfogaspary.com/en' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://www.rodolfogaspary.com/en/blog' }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': 'Blog — Web Development, SEO & Digital Strategy',
        'url': 'https://www.rodolfogaspary.com/en/blog',
        'inLanguage': 'en',
        'description': 'Articles on web development, SEO, GEO, and digital strategy for businesses.'
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
      to: '/en/blog/web-development-costs-peru-vs-us',
      title: 'Web Development Costs: Peru vs. US vs. Europe (2026 Comparison)',
      description: 'Real cost breakdowns by region, what you get at each price point, and why Peru is emerging as a smart choice for web development.',
      date: 'Mar 25, 2026',
      readingTime: '8 min',
      tag: 'Web Development',
    },
    {
      to: '/en/blog/what-is-geo-generative-engine-optimization',
      title: 'What is GEO (Generative Engine Optimization)? A Practical Guide for 2026',
      description: 'How to make your content findable and citable by AI search engines like ChatGPT, Perplexity, and Google AI Overviews.',
      date: 'Mar 25, 2026',
      readingTime: '7 min',
      tag: 'SEO/GEO',
    },
    {
      to: '/en/blog/why-hire-web-developer-latin-america',
      title: 'Why Hire a Web Developer in Latin America? (Cost, Quality & Timezone)',
      description: 'The nearshore advantage explained: how LATAM developers deliver 30-50% savings with US-timezone alignment.',
      date: 'Mar 25, 2026',
      readingTime: '7 min',
      tag: 'Web Development',
    },
    {
      to: '/en/blog/seo-dead-seo-geo-strategy-2026',
      title: 'SEO is Dead? Why SEO + GEO is the Real Strategy in 2026',
      description: 'What the data actually shows about SEO in the AI age, and a practical framework for combining SEO and GEO.',
      date: 'Mar 25, 2026',
      readingTime: '8 min',
      tag: 'SEO/GEO',
    },
  ];

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto px-6 lg:px-40 py-12">
      <section className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-lg text-muted dark:text-stone-400 max-w-2xl">
          Articles on web development, SEO, GEO, and digital strategy for businesses looking to grow in the digital market.
        </p>
      </section>

      <section className="grid gap-4">
        {articles.map((article) => (
          <BlogCard key={article.to} {...article} />
        ))}
      </section>

      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-stone-200 dark:border-stone-700 pt-8 pb-12 mt-12">
        <a
          href="/blog"
          className="text-accent font-medium hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          Leer en Español
        </a>
      </nav>
    </div>
  );
};

export default BlogEn;
