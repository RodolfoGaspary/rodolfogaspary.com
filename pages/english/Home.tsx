import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePageSEO } from '../../hooks/usePageSEO';

const headshotPath = "/headshot.jpg";
const fallbackUrl = "https://ui-avatars.com/api/?name=Rodolfo+Gaspary&background=0F172A&color=fff&size=512";

const HomeEn: React.FC = () => {
  const location = useLocation();

  usePageSEO({
    title: 'Rodolfo Gaspary — Web Development & Digital Strategy | Lima, Peru',
    description: 'Web development and digital strategy in Lima: websites, e-commerce, SEO, and consulting for businesses in Peru and globally. I transform websites into growth tools.',
    keywords: 'web development peru, digital strategy lima, web consultant lima, rodolfo gaspary, SEO lima',
    canonical: '/en',
    lang: 'en',
    hreflang: [
      { lang: 'es', href: 'https://www.rodolfogaspary.com/' },
      { lang: 'en', href: 'https://www.rodolfogaspary.com/en' },
      { lang: 'x-default', href: 'https://www.rodolfogaspary.com/' },
    ],
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [{
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.rodolfogaspary.com/en'
        }]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is Rodolfo Gaspary’s approach to web development?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'My approach is strategic and results-oriented. I don’t just build websites; I create growth tools designed to convert visitors into customers.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do you offer SEO services in Lima?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, I offer SEO and digital strategy consulting in Lima to help businesses improve their organic visibility and online authority.'
            }
          }
        ]
      }
    ]
  });

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-widest w-fit">
              Independent Web Consultancy
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-stone-900 dark:text-white">
              I help businesses turn their websites into reliable <span className="text-accent">growth tools</span>.
            </h1>
            <p className="text-lg text-muted dark:text-stone-400 leading-relaxed max-w-xl">
              I'm Rodolfo Gaspary, an independent web consultant. I work with business owners who need more than just a website: they need clarity, strategy, and digital decisions that truly support growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link to="/contact" className="flex-1 sm:flex-none h-12 px-8 bg-ink text-white rounded-md text-base font-medium flex items-center justify-center hover:bg-stone-800 transition-colors duration-200 cursor-pointer">
                Start a conversation
              </Link>
              <Link to="/services" className="flex-1 sm:flex-none h-12 px-8 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 rounded-md text-base font-medium flex items-center justify-center hover:border-stone-400 dark:hover:border-stone-500 transition-colors duration-200 cursor-pointer">
                See how I work
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square bg-stone-100 dark:bg-stone-800 rounded-lg overflow-hidden shadow-sm border border-stone-200 dark:border-stone-700">
              <img
                src={headshotPath}
                alt="Rodolfo Gaspary — Web Developer and Digital Strategy Consultant in Lima, Peru"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = fallbackUrl;
                  if (e.currentTarget.dataset.errorLogged !== 'true') {
                    console.info("Info: Local headshot.jpg not found. Using fallback avatar.");
                    e.currentTarget.dataset.errorLogged = 'true';
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-stone-900 py-4 px-6 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 flex flex-col gap-1">
              <span className="text-accent font-bold text-2xl font-serif">+7 years</span>
              <span className="text-muted text-xs font-semibold uppercase tracking-wider">Of Technical Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-stone-50 dark:bg-stone-900/40 border-y border-stone-200 dark:border-stone-700">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <span className="text-accent font-semibold uppercase tracking-widest text-xs mb-6 block">The Common Problem</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 leading-tight text-stone-900 dark:text-white">
            Most business websites fail for a simple reason: they are built <span className="text-red-600 dark:text-red-400">without a clear business objective.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left pt-6">
            <div className="flex flex-col gap-3">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400">design_services</span>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">Design vs. Results</h3>
              <p className="text-muted dark:text-stone-400 leading-relaxed">
                Many focus on "making it look pretty," but forget that aesthetics without strategy don't generate clients. A visually attractive site that doesn't convert is an expense, not an investment.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400">psychology</span>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">Decision Paralysis</h3>
              <p className="text-muted dark:text-stone-400 leading-relaxed">
                Companies often make technology decisions based on trends or assumptions, rather than real data and business needs, resulting in costly and hard-to-maintain systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight text-stone-900 dark:text-white">
                I don't just build websites. I help you build <span className="text-accent">the right ones.</span>
              </h2>
              <p className="text-lg text-muted dark:text-stone-400">
                My approach eliminates guesswork and focuses on three fundamental pillars to ensure every line of code has a business purpose:
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { title: "Business Needs", desc: "Total alignment with your KPIs and revenue goals." },
                  { title: "User Actions", desc: "Designed to guide the visitor towards conversion without friction." },
                  { title: "Defining Success", desc: "Clear metrics to measure the return on your digital investment." }
                ].map((p, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="material-symbols-outlined text-accent mt-0.5">check_circle</span>
                    <div>
                      <span className="font-semibold block text-stone-900 dark:text-white">{p.title}</span>
                      <span className="text-muted dark:text-stone-400 text-sm">{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-white dark:bg-stone-900 p-8 md:p-10 rounded-lg border border-stone-200 dark:border-stone-700 transition-colors duration-200 hover:border-stone-300 dark:hover:border-stone-600">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 border-b border-stone-200 dark:border-stone-700 pb-6">
                  <div className="size-10 rounded-lg border border-stone-200 dark:border-stone-700 text-accent flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">person</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-stone-900 dark:text-white">Direct Consultancy</span>
                    <span className="text-muted dark:text-stone-400 text-sm">No intermediaries, you talk to me.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-stone-200 dark:border-stone-700 pb-6">
                  <div className="size-10 rounded-lg border border-stone-200 dark:border-stone-700 text-accent flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">code</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-stone-900 dark:text-white">Technical Sovereignty</span>
                    <span className="text-muted dark:text-stone-400 text-sm">Clean code that you control.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-lg border border-stone-200 dark:border-stone-700 text-accent flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">trending_up</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-stone-900 dark:text-white">Focus on ROI</span>
                    <span className="text-muted dark:text-stone-400 text-sm">Your website should be a profit generator.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-ink text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Ready to stop guessing and start growing?</h2>
          <p className="text-white/70 text-lg max-w-2xl">
            Book an initial strategic session. We'll analyze your current situation and determine the best path forward.
          </p>
          <Link to="/contact" className="h-12 px-8 bg-accent text-white rounded-md text-base font-medium flex items-center justify-center hover:bg-amber-700 transition-colors duration-200 cursor-pointer">
            Contact
          </Link>
        </div>
      </section>

      {/* Internal Links */}
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-stone-200 dark:border-stone-700 pt-8 pb-12">
        <Link
          to="/"
          className="text-accent font-medium hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          Ver en Español
        </Link>
      </nav>
    </div>
  );
};

export default HomeEn;
