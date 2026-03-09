import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePageSEO } from '../../hooks/usePageSEO';

const ServicesEn: React.FC = () => {
    const { hash } = useLocation();
    const [activeSummary, setActiveSummary] = useState<{ title: string; content: string } | null>(null);

    usePageSEO({
        title: 'Services — Web Development & Digital Strategy | Rodolfo Gaspary',
        description: 'Strategic web development services, SEO audits, conversion optimization, and ongoing digital consulting for businesses in Lima, Peru and globally.',
        keywords: 'web services lima, web development peru, SEO audit, conversion optimization, digital consultancy',
        canonical: '/services',
        lang: 'en',
        hreflang: [
            { lang: 'es', href: 'https://www.rodolfogaspary.com/servicios' },
            { lang: 'en', href: 'https://www.rodolfogaspary.com/services' },
            { lang: 'x-default', href: 'https://www.rodolfogaspary.com/servicios' },
        ],
        jsonLd: [
            {
                '@context': 'https://schema.org',
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
                    }
                ]
            },
            {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': 'What does your Web Development service include?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'It includes information architecture, result-oriented design, optimized technical development, and strategic integration with marketing tools.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'How does the Ongoing Consulting & Optimization work?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'It is a monthly retainer service where we review metrics, perform tactical adjustments, and guarantee priority access for critical improvements.'
                        }
                    }
                ]
            }
        ]
    });

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    const summaries = {
        revision: {
            title: "Monthly Review",
            content: "A detailed 360-degree analysis of your website. We review Google Analytics metrics, user behavior using heatmaps, and evaluate technical performance. The goal is to identify what's working and what needs immediate tactical adjustments to maintain traction."
        },
        prioritarios: {
            title: "Priority Access",
            content: "Your business doesn't stop, and your website shouldn't either. With priority access, your requests for critical changes, security updates, or urgent improvements go to the front of my task list. You'll have a direct line of communication to ensure any digital unforeseen event is resolved in record time."
        }
    };

    return (
        <div className="flex flex-col max-w-[1200px] mx-auto px-6 lg:px-40 py-12">
            {/* Summary Modal Overlay */}
            {activeSummary && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setActiveSummary(null)}></div>
                    <div className="relative bg-white dark:bg-stone-900 w-full max-w-md p-8 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setActiveSummary(null)}
                            className="absolute top-4 right-4 text-stone-400 hover:text-muted dark:hover:text-stone-200 transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                        <h3 className="text-2xl font-bold mb-4 text-accent">{activeSummary.title}</h3>
                        <p className="text-muted dark:text-stone-400 leading-relaxed mb-6">
                            {activeSummary.content}
                        </p>
                        <button
                            onClick={() => setActiveSummary(null)}
                            className="w-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white font-bold py-3 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="mb-20 text-center md:text-left group">
                <div
                    className="relative overflow-hidden rounded-lg bg-ink p-8 md:p-16 flex flex-col items-center justify-center text-center border border-white/10 transition-colors duration-200"
                >
                    <h1 className="font-serif text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-3xl transition-colors duration-200">
                        Result-Oriented Web Solutions
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                        It's not about the tool, but the strategy behind it. A focus on business objectives and user experience to lead in the digital market.
                    </p>
                </div>
            </section>

            {/* Service Landing Pages */}
            <section className="mb-20">
                <h2 className="font-serif text-2xl font-bold tracking-tight text-stone-900 dark:text-white mb-6">Explore in details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    <Link
                        to="/services/web-development"
                        className="flex items-center gap-4 p-5 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:border-stone-300 transition-colors group"
                    >
                        <div className="size-11 shrink-0 rounded-lg border border-stone-200 dark:border-stone-700 text-accent flex items-center justify-center">
                            <span className="material-symbols-outlined">code</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-stone-900 dark:text-white group-hover:text-accent transition-colors">Web Development</h3>
                            <p className="text-sm text-muted dark:text-stone-400">Result-focused sites and applications.</p>
                        </div>
                        <span className="material-symbols-outlined text-stone-300 dark:text-stone-400 ml-auto transition-colors">arrow_forward</span>
                    </Link>
                    <Link
                        to="/services/digital-strategy"
                        className="flex items-center gap-4 p-5 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:border-stone-300 transition-colors group"
                    >
                        <div className="size-11 shrink-0 rounded-lg border border-stone-200 dark:border-stone-700 text-accent flex items-center justify-center">
                            <span className="material-symbols-outlined">trending_up</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-stone-900 dark:text-white group-hover:text-accent transition-colors">Digital Strategy & SEO</h3>
                            <p className="text-sm text-muted dark:text-stone-400">Positioning, conversion, and organic growth.</p>
                        </div>
                        <span className="material-symbols-outlined text-stone-300 dark:text-stone-400 ml-auto transition-colors">arrow_forward</span>
                    </Link>
                </div>
            </section>

            {/* Package 1: Initial Phase */}
            <section id="auditoria" className="mb-24 scroll-mt-24">
                <div className="flex items-center gap-2 mb-6 text-accent">
                    <span className="material-symbols-outlined">analytics</span>
                    <span className="text-sm font-bold tracking-widest uppercase">Initial Phase</span>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Web Strategy & Audit</h2>
                        <p className="text-lg text-muted dark:text-stone-400">
                            A low-risk approach to aligning your digital presence with your business goals before investing in development.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Exhaustive review of business objectives and KPIs.",
                                "In-depth analysis of the User Journey and frictions.",
                                "Technical evaluation of performance and current SEO.",
                                "Roadmap with prioritized recommendations."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <span className="material-symbols-outlined text-accent mt-1 transition-colors">check_circle</span>
                                    <span className="group-hover:text-stone-900 dark:group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 flex flex-col justify-between h-full group">
                        <div>
                            <p className="text-accent font-bold mb-2">Your strategic starting point</p>
                            <p className="text-sm text-muted dark:text-stone-400 leading-relaxed italic border-l-2 border-accent/30 pl-4 mb-8">
                                "If you're not sure which option fits your situation, this is usually the right place to start."
                            </p>
                        </div>
                        <Link to="/contact" className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
                            Book Audit <span className="material-symbols-outlined text-sm transition-colors">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Package 2: Flagship */}
            <section id="desarrollo" className="mb-24 relative p-8 md:p-12 group scroll-mt-24">
                <div className="absolute inset-0 bg-amber-50/50 dark:bg-amber-900/5 rounded-lg -z-10 transition-colors duration-200"></div>
                <div className="flex items-center gap-2 mb-6 text-accent">
                    <span className="material-symbols-outlined transition-colors duration-200 ease-out">rocket_launch</span>
                    <span className="text-sm font-bold tracking-widest uppercase">Featured Service</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-8 group-hover:text-accent transition-colors">Strategic Web Development</h2>
                <p className="text-xl font-medium mb-12 max-w-2xl text-stone-700 dark:text-stone-300">
                    We start with the right questions. We don't build websites, we create digital assets designed to convert and scale.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-sm border border-accent/20 transition-colors duration-200">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-green-500">task_alt</span> What's included
                        </h3>
                        <ul className="space-y-4 text-sm md:text-base">
                            <li><strong>Information Architecture:</strong> Logical structure focused on conversion.</li>
                            <li><strong>Result-Oriented Design:</strong> Clean interface without unnecessary distractions.</li>
                            <li><strong>Clean Technical Development:</strong> Code optimized for speed and maintainability.</li>
                            <li><strong>Strategic Integration:</strong> Connection with your sales and marketing tools.</li>
                        </ul>
                    </div>
                    <div className="bg-bg-warm dark:bg-stone-900/50 p-8 rounded-lg border border-dashed border-stone-300 dark:border-stone-700 transition-colors duration-200">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-muted">
                            <span className="material-symbols-outlined">block</span> What's explicitly not included
                        </h3>
                        <ul className="space-y-4 text-sm text-muted dark:text-stone-400">
                            <li>- Unlimited revisions (We work on defined strategic milestones).</li>
                            <li>- Changes based on ephemeral trends without business support.</li>
                            <li>- Daily technical micro-management outside the project objectives.</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <Link to="/contact" className="bg-accent text-white font-bold py-4 px-12 rounded-lg hover:bg-amber-700 transition-colors">
                        Discuss Flagship Project
                    </Link>
                </div>
            </section>

            {/* Package 3: Optimization */}
            <section id="optimizacion" className="mb-24 scroll-mt-24">
                <div className="flex items-center gap-2 mb-6 text-accent">
                    <span className="material-symbols-outlined">query_stats</span>
                    <span className="text-sm font-bold tracking-widest uppercase">Continuous Growth</span>
                </div>
                <div className="bg-ink text-white p-8 md:p-12 rounded-lg flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
                    <div className="flex-1 relative z-10">
                        <h2 className="font-serif text-3xl font-bold mb-4 group-hover:text-accent transition-colors">Ongoing Consulting & Optimization</h2>
                        <p className="text-lg text-white/70 mb-8 italic">"For businesses that treat their website as a living system that evolves with the market."</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                onClick={() => setActiveSummary(summaries.revision)}
                                className="text-left bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-colors group/card"
                            >
                                <h4 className="font-bold text-accent mb-1 transition-colors">Monthly Review</h4>
                                <p className="text-sm text-white/60">Metric analysis and tactical adjustment based on performance.</p>
                            </button>
                            <button
                                onClick={() => setActiveSummary(summaries.prioritarios)}
                                className="text-left bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-colors group/card"
                            >
                                <h4 className="font-bold text-accent mb-1 transition-colors">Priority Access</h4>
                                <p className="text-sm text-white/60">Guaranteed availability for critical changes and improvements.</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex-shrink-0 relative z-10">
                        <Link to="/contact" className="bg-white text-accent font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-block shadow-sm">
                            Hire Retainer
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-stone-200 dark:border-stone-700 pt-8 pb-12">
                <Link
                    to="/servicios"
                    className="text-accent font-bold hover:underline flex items-center gap-1"
                >
                    <span className="material-symbols-outlined text-base">translate</span>
                    Ver en Español
                </Link>
            </nav>
        </div>
    );
};

export default ServicesEn;
