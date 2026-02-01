import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePageSEO } from '../../hooks/usePageSEO';

const headshotPath = "/headshot.jpg";
const fallbackUrl = "https://ui-avatars.com/api/?name=Rodolfo+Gaspary&background=135bec&color=fff&size=512";

const HomeEn: React.FC = () => {
  const location = useLocation();

  usePageSEO({
    title: 'Rodolfo Gaspary — Web Development & Digital Strategy | Lima, Peru',
    description: 'Web development and digital strategy in Lima: websites, e-commerce, SEO, and consulting for businesses in Peru and globally. I transform websites into growth tools.',
    keywords: 'web development peru, digital strategy lima, web consultant lima, rodolfo gaspary, SEO lima',
    canonical: '/en',
    hreflang: [
      { lang: 'es', href: 'https://www.rodolfogaspary.com/' },
      { lang: 'en', href: 'https://www.rodolfogaspary.com/en' },
      { lang: 'x-default', href: 'https://www.rodolfogaspary.com/' },
    ],
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
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 hero-gradient">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest w-fit animate-pulse">
              Independent Web Consultancy
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
              I help businesses turn their websites into reliable <span className="text-primary">growth tools</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
              I'm Rodolfo Gaspary, an independent web consultant. I work with business owners who need more than just a website: they need clarity, strategy, and digital decisions that truly support growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="flex-1 sm:flex-none h-16 px-10 bg-primary text-white rounded-xl text-lg font-bold flex items-center justify-center hover:bg-blue-700 hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                Start a conversation
              </Link>
              <Link to="/services" className="flex-1 sm:flex-none h-16 px-10 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-lg font-bold flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
                See how I work
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block group">
            <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out group-hover:scale-[1.02] border border-slate-200 dark:border-slate-700">
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
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
              <span className="text-primary font-black text-3xl">+7 years</span>
              <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">Of Technical Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">The Common Problem</span>
          <h2 className="text-3xl md:text-4xl font-black mb-10 leading-tight">
            Most business websites fail for a simple reason: they are built <span className="text-red-500">without a clear business objective.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left pt-6">
            <div className="flex flex-col gap-4 group cursor-default">
              <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-125">
                <span className="material-symbols-outlined">design_services</span>
              </div>
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-red-600">Design vs. Results</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Many focus on "making it look pretty," but forget that aesthetics without strategy don't generate clients. A visually attractive site that doesn't convert is an expense, not an investment.
              </p>
            </div>
            <div className="flex flex-col gap-4 group cursor-default">
              <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-125">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-red-600">Decision Paralysis</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Companies often make technology decisions based on trends or assumptions, rather than real data and business needs, resulting in costly and hard-to-maintain systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 flex flex-col gap-8">
              <h2 className="text-4xl font-black leading-tight tracking-tight">
                I don't just build websites. I help you build <span className="text-primary">the right ones.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                My approach eliminates guesswork and focuses on three fundamental pillars to ensure every line of code has a business purpose:
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { title: "Business Needs", desc: "Total alignment with your KPIs and revenue goals." },
                  { title: "User Actions", desc: "Designed to guide the visitor towards conversion without friction." },
                  { title: "Defining Success", desc: "Clear metrics to measure the return on your digital investment." }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 group cursor-default">
                    <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:scale-125">check_circle</span>
                    <div>
                      <span className="font-bold block text-slate-900 dark:text-white group-hover:text-primary transition-colors">{p.title}</span>
                      <span className="text-slate-500">{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 group">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <span className="font-bold block">Direct Consultancy</span>
                    <span className="text-slate-500 text-sm">No intermediaries, you talk to me.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">code</span>
                  </div>
                  <div>
                    <span className="font-bold block">Technical Sovereignty</span>
                    <span className="text-slate-500 text-sm">Clean code that you control.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <span className="font-bold block">Focus on ROI</span>
                    <span className="text-slate-500 text-sm">Your website should be a profit generator.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-5xl font-black">Ready to stop guessing and start growing?</h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl">
            Book an initial strategic session. We'll analyze your current situation and determine the best path forward.
          </p>
          <Link to="/contact" className="h-16 px-12 bg-white text-primary rounded-xl text-lg font-bold flex items-center justify-center hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl">
            Contact
          </Link>
        </div>
      </section>

      {/* Internal Links */}
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-slate-200 dark:border-slate-800 pt-8 pb-12">
        <Link
          to="/"
          className="text-primary font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          Ver en Español
        </Link>
      </nav>
    </div>
  );
};

export default HomeEn;
