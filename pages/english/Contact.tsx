import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { usePageSEO } from '../../hooks/usePageSEO';

const headshotPath = "/headshot.jpg";
const fallbackUrl = "https://ui-avatars.com/api/?name=Rodolfo+Gaspary&background=0F172A&color=fff&size=512";

const ACCESS_KEY = "e59636fb-b225-431e-9591-b767aa7fe3b8";

const ContactEn: React.FC = () => {
    const location = useLocation();

    usePageSEO({
        title: 'Contact — Rodolfo Gaspary | Web Consultant Lima, Peru',
        description: 'Contact Rodolfo Gaspary for a strategic consultation on web development, SEO, or digital strategy. Guaranteed response within 24-48 hours.',
        keywords: 'contact web consultant lima, web consultancy peru, web development quote',
        canonical: '/contact',
        lang: 'en',
        hreflang: [
            { lang: 'es', href: 'https://www.rodolfogaspary.com/contacto' },
            { lang: 'en', href: 'https://www.rodolfogaspary.com/contact' },
            { lang: 'x-default', href: 'https://www.rodolfogaspary.com/contacto' },
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
                        'name': 'Contact',
                        'item': 'https://www.rodolfogaspary.com/contact'
                    }
                ]
            },
            {
                '@context': 'https://schema.org',
                '@type': 'ContactPage',
                name: 'Contact — Rodolfo Gaspary',
                url: 'https://www.rodolfogaspary.com/contact',
                description: 'Contact form for web development and digital strategy inquiries.',
            }
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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        website: '',
        situation: '',
        challenge: '',
        success: '',
        investment: '',
        timeframe: '',
        botcheck: '' // Honeypot field
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.botcheck) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    from_name: "Rodolfo Gaspary Consultancy",
                    subject: `New Lead: ${formData.name} (${formData.company})`,
                    ...formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSuccess(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                throw new Error(result.message || "Submission error");
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('There was a problem sending the message. Please write to me directly at info@rodolfogaspary.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (isSuccess) {
        return (
            <div className="w-full max-w-2xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="size-24 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 dark:text-white">Message received!</h1>
                    <p className="text-muted dark:text-stone-400 text-lg leading-relaxed max-w-md">
                        Thank you, {formData.name}. I will review your details and respond personally to your email from <strong>info@rodolfogaspary.com</strong>.
                    </p>
                </div>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-accent font-bold hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12">
            <section className="flex flex-col gap-4 text-center">
                <span className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-2">Contact</span>
                <h1 className="text-stone-900 dark:text-white text-4xl md:text-5xl font-bold font-serif leading-tight tracking-tight">
                    Let's talk about your project <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-4">strategically.</span>
                </h1>
                <div className="max-w-xl mx-auto flex flex-col gap-4">
                    <p className="text-muted dark:text-stone-400 text-lg leading-relaxed">
                        Fill out this brief form so I can come to our first talk with a clear vision of your business.
                    </p>
                </div>
            </section>

            {/* Bio Card */}
            <section className="flex flex-col gap-6">
                <div className="flex items-center gap-5 p-5 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700 shadow-sm transition-all hover:border-stone-300">
                    <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 bg-stone-100 dark:bg-stone-800 rounded-lg shadow-sm border border-white dark:border-stone-700 overflow-hidden">
                        <img
                            src={headshotPath}
                            alt="Rodolfo Gaspary — Web Developer and Digital Strategy Consultant in Lima, Peru"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = fallbackUrl;
                            }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-stone-900 dark:text-white text-lg font-bold">Rodolfo Gaspary</h3>
                        <p className="text-accent text-xs font-semibold uppercase tracking-wider">Digital Strategy Consultant</p>
                        <div className="flex items-center gap-2 mt-1 text-muted text-xs">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            <span>Guaranteed response in 24-48h</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Form */}
            <section className="bg-white dark:bg-stone-900 rounded-xl p-8 md:p-12 shadow-sm border border-stone-200 dark:border-stone-700 relative overflow-hidden">

                <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
                    <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: 'none' }}
                        onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked ? 'true' : '' })}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-stone-700 dark:text-stone-300 text-xs font-semibold uppercase tracking-widest">Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-lg border-stone-200 dark:border-stone-700 dark:bg-stone-800 focus:ring-accent focus:border-accent px-4 py-3.5 text-base"
                                placeholder="Your full name" required type="text"
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-stone-700 dark:text-stone-300 text-xs font-semibold uppercase tracking-widest">Email address</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-lg border-stone-200 dark:border-stone-700 dark:bg-stone-800 focus:ring-accent focus:border-accent px-4 py-3.5 text-base"
                                placeholder="you@email.com" required type="email"
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-stone-700 dark:text-stone-300 text-xs font-semibold uppercase tracking-widest">Company / Project</label>
                            <input
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full rounded-lg border-stone-200 dark:border-stone-700 dark:bg-stone-800 focus:ring-accent focus:border-accent px-4 py-3.5 text-base"
                                placeholder="Business name" required type="text"
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-stone-700 dark:text-stone-300 text-xs font-semibold uppercase tracking-widest">Website <span className="text-[10px] opacity-60">(if you have one)</span></label>
                            <input
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className="w-full rounded-lg border-stone-200 dark:border-stone-700 dark:bg-stone-800 focus:ring-accent focus:border-accent px-4 py-3.5 text-base"
                                placeholder="https://..." type="url"
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-stone-700 dark:text-stone-300 text-xs font-semibold uppercase tracking-widest">What is your current situation?</label>
                        <div className="relative">
                            <select
                                name="situation"
                                value={formData.situation}
                                onChange={handleChange}
                                className="w-full rounded-lg border-stone-200 dark:border-stone-700 dark:bg-stone-800 focus:ring-accent focus:border-accent px-4 py-3.5 text-base appearance-none bg-none shadow-none"
                                required
                                disabled={isSubmitting}
                            >
                                <option value="">Select an option</option>
                                <option value="new">I need a website from scratch</option>
                                <option value="improve">I want to optimize an existing site</option>
                                <option value="consultancy">I'm looking for pure strategic consulting</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-subtle">expand_more</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-stone-700 dark:text-stone-300 text-xs font-semibold uppercase tracking-widest">What challenge do you want to overcome?</label>
                        <textarea
                            name="challenge"
                            value={formData.challenge}
                            onChange={handleChange}
                            className="w-full rounded-lg border-stone-200 dark:border-stone-700 dark:bg-stone-800 focus:ring-accent focus:border-accent px-4 py-3.5 text-base min-h-[100px]"
                            placeholder="e.g.: My web doesn't generate leads, the message is not clear..." required
                            disabled={isSubmitting}
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-stone-700 dark:text-stone-300 text-xs font-semibold uppercase tracking-widest">Investment range</label>
                            <select
                                name="investment"
                                value={formData.investment}
                                onChange={handleChange}
                                className="w-full rounded-lg border-stone-200 dark:border-stone-700 dark:bg-stone-800 focus:ring-accent focus:border-accent px-4 py-3.5 text-base appearance-none"
                                required
                                disabled={isSubmitting}
                            >
                                <option value="">Select a range</option>
                                <option value="small">$200 – $500</option>
                                <option value="medium">$500 – $1,500</option>
                                <option value="large">+$1,500</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-stone-700 dark:text-stone-300 text-xs font-semibold uppercase tracking-widest">Urgency</label>
                            <select
                                name="timeframe"
                                value={formData.timeframe}
                                onChange={handleChange}
                                className="w-full rounded-lg border-stone-200 dark:border-stone-700 dark:bg-stone-800 focus:ring-accent focus:border-accent px-4 py-3.5 text-base appearance-none"
                                required
                                disabled={isSubmitting}
                            >
                                <option value="">By when?</option>
                                <option value="urgent">As soon as possible</option>
                                <option value="1-2month">In 1-2 months</option>
                                <option value="planning">Planning for the future</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 flex flex-col gap-6">
                        <button
                            className={`w-full flex items-center justify-center rounded-md h-12 text-white text-base font-medium transition-all gap-3 ${isSubmitting ? 'bg-stone-400 cursor-not-allowed' : 'bg-ink hover:bg-stone-800 cursor-pointer'}`}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            <span>{isSubmitting ? 'Processing...' : 'Send strategic inquiry'}</span>
                            {!isSubmitting && <span className="material-symbols-outlined">send</span>}
                            {isSubmitting && <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                        </button>

                        <div className="flex items-center justify-center gap-2 text-subtle dark:text-stone-500 text-xs">
                            <span className="material-symbols-outlined text-sm">lock</span>
                            <span>Encrypted form and protected against spam</span>
                        </div>
                    </div>
                </form>
            </section>

            {/* Internal Links */}
            <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-stone-200 dark:border-stone-700 pt-8 pb-12">
                <Link
                    to="/contacto"
                    className="text-accent font-bold hover:underline flex items-center gap-1"
                >
                    <span className="material-symbols-outlined text-base">translate</span>
                    Ver en Español
                </Link>
            </nav>
        </div>
    );
};

export default ContactEn;
