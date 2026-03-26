import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePageSEO } from '../../hooks/usePageSEO';

const DigitalStrategy: React.FC = () => {
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
 title: 'Digital Strategy, SEO & GEO Services in Lima, Peru | Rodolfo Gaspary',
 description: 'Data-driven digital strategy, SEO, and GEO consulting in Lima, Peru. Optimize for Google, Bing, ChatGPT, Perplexity, and AI search engines. Audits, content strategy, and growth roadmaps.',
 keywords: 'digital strategy Lima, SEO consultant Peru, SEO audit Lima, conversion optimization, GEO, generative engine optimization, AI search optimization, ChatGPT ranking, Perplexity optimization',
 canonical: '/services/digital-strategy',
 lang: 'en',
 hreflang: [
 { lang: 'es', href: 'https://www.rodolfogaspary.com/servicios/estrategia-digital' },
 { lang: 'en', href: 'https://www.rodolfogaspary.com/services/digital-strategy' },
 { lang: 'x-default', href: 'https://www.rodolfogaspary.com/services/digital-strategy' },
 ],
 jsonLd: {
 '@context': 'https://schema.org',
 '@graph': [
 {
 '@type': 'BreadcrumbList',
 'itemListElement': [
 {
 '@type': 'ListItem',
 'position': 1,
 'name': 'Home',
 'item': 'https://www.rodolfogaspary.com/en'
 },
 {
 '@type': 'ListItem',
 'position': 2,
 'name': 'Services',
 'item': 'https://www.rodolfogaspary.com/services'
 },
 {
 '@type': 'ListItem',
 'position': 3,
 'name': 'Digital Strategy & SEO/GEO',
 'item': 'https://www.rodolfogaspary.com/services/digital-strategy'
 }
 ]
 },
 {
 '@type': 'WebPage',
 'name': 'Digital Strategy, SEO & GEO Services in Lima, Peru',
 'url': 'https://www.rodolfogaspary.com/services/digital-strategy',
 'inLanguage': 'en',
 'speakable': {
 '@type': 'SpeakableSpecification',
 'cssSelector': ['h1', 'h2', '.text-accent']
 }
 },
 {
 '@type': 'ProfessionalService',
 'name': 'Digital Strategy, SEO & GEO',
 'image': 'https://www.rodolfogaspary.com/headshot.jpg',
 'url': 'https://www.rodolfogaspary.com/services/digital-strategy',
 'address': {
 '@type': 'PostalAddress',
 'addressLocality': 'Lima',
 'addressCountry': 'PE'
 },
 'description': 'Data-driven digital strategy, SEO, and GEO consulting in Lima, Peru. Optimize for search engines and AI platforms like ChatGPT, Perplexity, and Google AI Overview.'
 },
 {
 '@type': 'FAQPage',
 'mainEntity': [
 {
 '@type': 'Question',
 'name': 'What does an SEO audit include?',
 'acceptedAnswer': {
 '@type': 'Answer',
 'text': 'An SEO audit covers technical health (speed, errors, usability), on-page factors, off-page signals, and competition analysis.'
 }
 },
 {
 '@type': 'Question',
 'name': 'How do you measure success?',
 'acceptedAnswer': {
 '@type': 'Answer',
 'text': 'I use KPIs like organic traffic growth, keyword ranking improvements, and conversion rate changes.'
 }
 },
 {
 '@type': 'Question',
 'name': 'What is GEO and how is it different from SEO?',
 'acceptedAnswer': {
 '@type': 'Answer',
 'text': 'GEO (Generative Engine Optimization) focuses on getting your content cited by AI search engines like ChatGPT, Perplexity, and Google AI Overview. While SEO ranks your pages in traditional search results, GEO ensures AI platforms choose your site as a trusted source. Both work together for maximum visibility.'
 }
 },
 {
 '@type': 'Question',
 'name': 'Which AI search engines do you optimize for?',
 'acceptedAnswer': {
 '@type': 'Answer',
 'text': 'I optimize for ChatGPT, Perplexity, Google AI Overview, Microsoft Copilot, and Claude. Each platform has different ranking factors — I optimize your content, structured data, and technical setup for all of them.'
 }
 }
 ]
 }
 ]
 },
 });

 return (
 <main className="max-w-[1000px] mx-auto px-6 py-20">
 {/* Hero */}
 <section className="mb-16 text-center">
 <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 text-accent text-xs font-bold uppercase tracking-widest mb-6">
 Digital Strategy, SEO & GEO
 </div>
 <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight tracking-tight text-stone-900 dark:text-white mb-6">
 Digital Strategy, SEO & GEO Services
 </h1>
 <p className="text-lg md:text-xl text-muted dark:text-stone-400 font-medium leading-relaxed max-w-2xl mx-auto">
 Data-driven digital strategy, SEO, and generative engine optimization designed to generate measurable growth.
 I help businesses in Lima, Peru and around the world get found — in search results and AI-generated answers.
 </p>
 </section>

 {/* What I Deliver */}
 <section className="mb-16">
 <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight text-stone-900 dark:text-white mb-8 text-center">
 What I Deliver
 </h2>
 <div className="grid sm:grid-cols-2 gap-6">
 {[
 {
 icon: 'troubleshoot',
 title: 'SEO Audits & Technical Fixes',
 desc: 'Comprehensive analysis of your site structure, page speed, crawlability, and on-page elements. I identify the technical issues holding your rankings back and fix them systematically.',
 },
 {
 icon: 'edit_note',
 title: 'Content & Keyword Strategy',
 desc: 'Research-backed keyword mapping and content plans that align with real search intent. Every piece of content serves a clear purpose within your broader digital strategy.',
 },
 {
 icon: 'trending_up',
 title: 'Conversion Rate Optimization',
 desc: 'Traffic means nothing without conversions. I analyze user behavior, run experiments, and optimize landing pages to turn visitors into customers.',
 },
 {
 icon: 'monitoring',
 title: 'Monthly Reporting & Growth Roadmaps',
 desc: 'Transparent monthly reports with actionable insights. You get a clear picture of what is working, what needs attention, and the strategic next steps.',
 },
 {
 icon: 'smart_toy',
 title: 'GEO: AI Search Visibility',
 desc: 'Optimize your content to be cited by AI search engines — ChatGPT, Perplexity, Google AI Overview, Copilot, and Claude. I implement structured data, FAQ schemas, authoritative citations, and content structuring so AI platforms choose your site as a trusted source.',
 },
 ].map((item, i) => (
 <div
 key={i}
 className="bg-white dark:bg-stone-900 p-6 rounded-lg border border-stone-200 dark:border-stone-700 shadow-sm transition-colors duration-200 hover:border-stone-300 group"
 >
 <div className="size-12 rounded-lg border border-stone-200 dark:border-stone-700 text-accent flex items-center justify-center mb-4 transition-colors duration-200">
 <span className="material-symbols-outlined">{item.icon}</span>
 </div>
 <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
 {item.title}
 </h3>
 <p className="text-muted dark:text-stone-400 leading-relaxed text-sm">
 {item.desc}
 </p>
 </div>
 ))}
 </div>
 </section>

 {/* My Process */}
 <section className="mb-16">
 <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight text-stone-900 dark:text-white mb-8 text-center">
 My Process
 </h2>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 {
 step: '01',
 title: 'Audit',
 desc: 'I start with a thorough review of your current digital presence, analytics data, competitive landscape, technical health, and AI search engine readiness.',
 },
 {
 step: '02',
 title: 'Strategy',
 desc: 'Based on the audit findings, I build a prioritized roadmap with clear milestones, target keywords, conversion goals, and GEO tactics for AI citation.',
 },
 {
 step: '03',
 title: 'Execution',
 desc: 'Technical fixes, content creation, on-page optimization, structured data, and link-building tactics are implemented according to the roadmap.',
 },
 {
 step: '04',
 title: 'Measure & Iterate',
 desc: 'I track performance across search and AI platforms, report results monthly, and continuously refine the strategy based on real data.',
 },
 ].map((item, i) => (
 <div key={i} className="relative group">
 <span className="text-5xl font-bold text-stone-200 dark:text-stone-700 absolute -top-2 -left-1 select-none transition-colors">
 {item.step}
 </span>
 <div className="pt-10">
 <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
 {item.title}
 </h3>
 <p className="text-muted dark:text-stone-400 text-sm leading-relaxed">
 {item.desc}
 </p>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Who It's For */}
 <section className="mb-16 bg-stone-50 dark:bg-stone-900/50 rounded-lg border border-stone-200 dark:border-stone-700 p-8 md:p-10">
 <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight text-stone-900 dark:text-white mb-4">
 Who It's For
 </h2>
 <p className="text-muted dark:text-stone-400 leading-relaxed mb-6">
 These services are built for business owners, marketing managers, and startup founders who need more than surface-level advice.
 If you are looking for a digital strategy consultant who focuses on measurable results rather than vanity metrics, this is for you.
 </p>
 <ul className="space-y-3">
 {[
 'Small and medium businesses in Lima seeking local SEO visibility and lead generation.',
 'E-commerce brands that want to improve organic traffic and conversion rates.',
 'Companies expanding internationally that need a multilingual SEO strategy.',
 'Teams with an existing marketing department looking for specialized SEO consulting support.',
 'Businesses that want to appear in AI-generated answers on ChatGPT, Perplexity, and Google AI Overview — not just traditional search results.',
 ].map((item, i) => (
 <li key={i} className="flex items-start gap-3 group">
 <span className="material-symbols-outlined text-accent mt-0.5 transition-transform">
 check_circle
 </span>
 <span className="text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
 {item}
 </span>
 </li>
 ))}
 </ul>
 </section>

 {/* FAQ */}
 <section className="mb-16">
 <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight text-stone-900 dark:text-white mb-8 text-center">
 Frequently Asked Questions
 </h2>
 <div className="space-y-4">
 {[
 {
 q: 'What does an SEO audit include?',
 a: 'An SEO audit covers technical health (site speed, crawl errors, mobile usability), on-page factors (meta tags, headings, content quality, internal linking), off-page signals (backlink profile, domain authority), and a competitive gap analysis. You receive a detailed report with prioritized recommendations you can act on immediately.',
 },
 {
 q: 'How do you measure success?',
 a: 'I define clear KPIs at the start of every engagement. Common metrics include organic traffic growth, keyword ranking improvements, conversion rate changes, and lead volume. Monthly reports break down progress against these benchmarks so you always know where things stand.',
 },
 {
 q: 'Do you provide ongoing support?',
 a: 'Yes. SEO and digital strategy are not one-time projects. I offer monthly retainer packages that include continuous optimization, performance monitoring, content updates, and strategic adjustments based on the latest data and algorithm changes.',
 },
 {
 q: 'Can you work with my existing marketing team?',
 a: 'Absolutely. I frequently collaborate with in-house marketing teams and external agencies. I can serve as a specialized SEO consultant who complements your existing efforts, providing audits, strategic direction, and technical guidance your team can execute on.',
 },
 {
 q: 'What is GEO and how is it different from SEO?',
 a: 'GEO (Generative Engine Optimization) focuses on getting your content cited by AI search engines like ChatGPT, Perplexity, and Google AI Overview. While SEO ranks your pages in traditional search results, GEO ensures AI platforms choose your site as a trusted source when generating answers. Both strategies work together for maximum visibility.',
 },
 {
 q: 'Which AI search engines do you optimize for?',
 a: 'I optimize for ChatGPT, Perplexity, Google AI Overview, Microsoft Copilot, and Claude. Each platform has different ranking factors — from structured data and FAQ schemas to authoritative citations and content structure. I tailor your technical setup and content strategy for all of them.',
 },
 ].map((item, i) => (
 <details
 key={i}
 className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden transition-colors hover:border-stone-300"
 >
 <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-stone-900 dark:text-white select-none list-none">
 <span>{item.q}</span>
 <span className="material-symbols-outlined text-stone-400 dark:text-stone-500 transition-transform duration-200 group-open:rotate-180">
 expand_more
 </span>
 </summary>
 <div className="px-6 pb-6 text-muted dark:text-stone-400 leading-relaxed text-sm">
 {item.a}
 </div>
 </details>
 ))}
 </div>
 </section>

 {/* CTA */}
 <section className="mb-16 bg-ink text-white rounded-lg p-8 md:p-12 text-center">
 <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
 Ready to grow with a clear strategy?
 </h2>
 <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
 Let's discuss your goals and build a digital strategy that delivers real, measurable results for your business.
 </p>
 <Link
 to="/contact"
 className="inline-flex items-center justify-center h-14 px-10 bg-white text-accent rounded-md text-lg font-bold hover:bg-stone-100 transition-colors shadow-sm"
 >
 Get in touch
 </Link>
 </section>

 {/* Internal Links */}
 <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-stone-200 dark:border-stone-700 pt-8">
 <Link
 to="/services/web-development"
 className="text-accent font-bold hover:underline flex items-center gap-1"
 >
 <span className="material-symbols-outlined text-base">code</span>
 Web Development Services
 </Link>
 <span className="hidden sm:inline text-stone-300 dark:text-stone-700">|</span>
 <Link
 to="/servicios/estrategia-digital"
 className="text-accent font-bold hover:underline flex items-center gap-1"
 >
 <span className="material-symbols-outlined text-base">translate</span>
 Ver en Español
 </Link>
 </nav>
 </main>
 );
};

export default DigitalStrategy;
