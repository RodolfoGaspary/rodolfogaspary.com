import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePageSEO } from '../../hooks/usePageSEO';

const WebDevelopment: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  usePageSEO({
    title: 'Web Development Services in Lima, Peru | Rodolfo Gaspary',
    description:
      'Custom web development in Lima, Peru. Responsive websites, e-commerce platforms, and modern web applications built for conversion and growth. Results-oriented consulting.',
    keywords:
      'web development Lima, web developer Peru, custom website Lima, e-commerce development Peru, responsive web design Lima',
    canonical: '/services/web-development',
    hreflang: [
      { lang: 'es', href: 'https://www.rodolfogaspary.com/servicios/desarrollo-web' },
      { lang: 'en', href: 'https://www.rodolfogaspary.com/services/web-development' },
      { lang: 'x-default', href: 'https://www.rodolfogaspary.com/services/web-development' },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'Web Development',
          serviceType: 'Web Development',
          description:
            'Custom web development services including responsive websites, e-commerce platforms, and modern web applications built for conversion and growth.',
          areaServed: ['Lima', 'Peru', 'Global'],
          provider: {
            '@type': 'LocalBusiness',
            name: 'Rodolfo Gaspary',
            url: 'https://www.rodolfogaspary.com',
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What technologies do you use?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'I work primarily with React, TypeScript, Node.js, and modern front-end frameworks. For e-commerce I integrate platforms like Shopify or WooCommerce depending on the project scope. Every technology choice is driven by business needs rather than trends.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does a typical project take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A focused landing page or single-page site typically takes two to three weeks. A full custom website with multiple sections runs four to eight weeks. E-commerce builds vary between six and twelve weeks depending on catalog size and integrations.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do you work with international clients?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely. While I am based in Lima, Peru, I regularly work with clients across the Americas, Europe, and beyond. All communication is handled in English or Spanish, and I adapt to your preferred time zone for meetings.',
              },
            },
            {
              '@type': 'Question',
              name: 'What happens after launch?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Every project includes a post-launch support period where I monitor performance, fix any issues, and help you get comfortable managing content. I also offer ongoing retainer plans for continuous optimization, updates, and technical support.',
              },
            },
          ],
        },
      ],
    },
  });

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white leading-tight">
          Web Development Services
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          I build <strong>conversion-focused websites</strong> for businesses in Lima, Peru and
          internationally. Every project starts with a clear business objective and ends with a
          measurable result -- not just a pretty page.
        </p>
      </section>

      {/* My Approach */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-white">
          My Approach
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: 'search_insights',
              title: 'Discovery',
              desc: 'I learn your business goals, target audience, and competitive landscape before writing a single line of code. This ensures the final product solves the right problems.',
            },
            {
              icon: 'architecture',
              title: 'Architecture',
              desc: 'I map out the site structure, user flows, and technical stack. Clear blueprints prevent scope creep and keep the project focused on what matters most.',
            },
            {
              icon: 'code',
              title: 'Development',
              desc: 'Clean, semantic code built with modern frameworks. Every component is responsive, accessible, and optimized for fast load times and search engine visibility.',
            },
            {
              icon: 'rocket_launch',
              title: 'Launch & Optimization',
              desc: 'After deployment I monitor real-world performance, run speed audits, and refine conversion paths so your site improves continuously.',
            },
          ].map((step) => (
            <div
              key={step.title}
              className="flex gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg transition-shadow"
            >
              <div className="size-11 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white">
          What You Get
        </h2>
        <ul className="space-y-4">
          {[
            'Fully responsive websites that look sharp on every device and screen size.',
            'E-commerce platforms with secure checkout, inventory management, and analytics.',
            'On-page SEO optimization so search engines can find and rank your content.',
            'Analytics and conversion tracking integration to measure real business impact.',
            'Clean, maintainable code with full ownership -- no vendor lock-in.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5 shrink-0">
                check_circle
              </span>
              <span className="text-slate-700 dark:text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Who It's For */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          Who It's For
        </h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          My web development services are designed for small and medium businesses, startups, and
          established agencies that need more than a template. Whether you are launching a new
          product, replacing an outdated site, or building an online store from scratch, I help you
          make technology decisions grounded in business reality. I work with clients in Lima and
          across the globe who value clarity, speed, and long-term ownership of their digital
          assets.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          <details className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <summary className="cursor-pointer px-5 py-4 font-semibold text-slate-900 dark:text-white flex items-center justify-between select-none">
              What technologies do you use?
              <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="px-5 pb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              I work primarily with React, TypeScript, Node.js, and modern front-end frameworks. For
              e-commerce I integrate platforms like Shopify or WooCommerce depending on the project
              scope. Every technology choice is driven by business needs rather than trends.
            </div>
          </details>

          <details className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <summary className="cursor-pointer px-5 py-4 font-semibold text-slate-900 dark:text-white flex items-center justify-between select-none">
              How long does a typical project take?
              <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="px-5 pb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              A focused landing page or single-page site typically takes two to three weeks. A full
              custom website with multiple sections runs four to eight weeks. E-commerce builds vary
              between six and twelve weeks depending on catalog size and integrations.
            </div>
          </details>

          <details className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <summary className="cursor-pointer px-5 py-4 font-semibold text-slate-900 dark:text-white flex items-center justify-between select-none">
              Do you work with international clients?
              <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="px-5 pb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Absolutely. While I am based in Lima, Peru, I regularly work with clients across the
              Americas, Europe, and beyond. All communication is handled in English or Spanish, and I
              adapt to your preferred time zone for meetings.
            </div>
          </details>

          <details className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <summary className="cursor-pointer px-5 py-4 font-semibold text-slate-900 dark:text-white flex items-center justify-between select-none">
              What happens after launch?
              <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="px-5 pb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Every project includes a post-launch support period where I monitor performance, fix
              any issues, and help you get comfortable managing content. I also offer ongoing retainer
              plans for continuous optimization, updates, and technical support.
            </div>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16 text-center bg-primary/5 dark:bg-primary/10 rounded-3xl py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 dark:text-white">
          Ready to build something that works?
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
          Let's discuss your project goals and figure out the most effective path forward. No
          pressure, just an honest conversation about what your business needs.
        </p>
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center h-14 px-10 bg-primary text-white rounded-xl text-lg font-bold hover:bg-blue-700 hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          Get in touch
        </Link>
      </section>

      {/* Internal Links */}
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-slate-200 dark:border-slate-800 pt-8">
        <Link
          to="/services/digital-strategy"
          className="text-primary font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">trending_up</span>
          Digital Strategy & SEO Services
        </Link>
        <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
        <Link
          to="/servicios/desarrollo-web"
          className="text-primary font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          Ver en Español
        </Link>
      </nav>
    </main>
  );
};

export default WebDevelopment;
