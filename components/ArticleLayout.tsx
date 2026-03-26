import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';

interface ArticleLayoutProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  lang: 'es' | 'en';
  hreflang: { lang: string; href: string }[];
  datePublished: string;
  dateModified: string;
  readingTime: string;
  breadcrumbItems: { name: string; item: string }[];
  faq?: { question: string; answer: string }[];
  children: React.ReactNode;
  backLink: string;
  backLabel: string;
}

const BASE_URL = 'https://www.rodolfogaspary.com';

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  description,
  keywords,
  canonical,
  lang,
  hreflang,
  datePublished,
  dateModified,
  readingTime,
  breadcrumbItems,
  faq,
  children,
  backLink,
  backLabel,
}) => {
  const jsonLd: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      url: `${BASE_URL}${canonical}`,
      inLanguage: lang,
      datePublished,
      dateModified,
      author: {
        '@type': 'Person',
        name: 'Rodolfo Gaspary',
      },
    },
  ];

  if (faq && faq.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  usePageSEO({
    title,
    description,
    keywords,
    canonical,
    lang,
    hreflang,
    jsonLd,
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const formattedDate = new Date(datePublished).toLocaleDateString(
    lang === 'es' ? 'es-PE' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <article className="max-w-[800px] mx-auto px-6 py-12">
      <Link
        to={backLink}
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors mb-8"
      >
        <span className="material-symbols-outlined text-base">arrow_back</span>
        {backLabel}
      </Link>

      <div className="flex items-center gap-3 text-sm text-muted mb-4">
        <time dateTime={datePublished}>{formattedDate}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{readingTime}</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-stone-900 dark:text-white mb-10 leading-tight">
        {title}
      </h1>

      <div className="prose prose-stone dark:prose-invert prose-lg max-w-none
        prose-headings:font-serif prose-headings:tracking-tight
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-strong:text-stone-900 dark:prose-strong:text-white">
        {children}
      </div>

      <nav className="border-t border-stone-200 dark:border-stone-700 mt-16 pt-8">
        <Link
          to={backLink}
          className="inline-flex items-center gap-1 text-accent font-medium hover:underline"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          {backLabel}
        </Link>
      </nav>
    </article>
  );
};

export default ArticleLayout;
