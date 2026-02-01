import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';

const headshotPath = "./headshot.jpg";
const fallbackUrl = "https://ui-avatars.com/api/?name=Rodolfo+Gaspary&background=135bec&color=fff&size=512";

/**
 * SECURITY NOTE: 
 * For static sites, the Access Key is public by design (like a Google Maps key).
 * To maximize safety:
 * 1. Log in to Web3Forms and go to "Settings" -> "Domain Whitelisting".
 * 2. Add 'rodolfogaspary.com' to ensure this key ONLY works on your site.
 */
const ACCESS_KEY = "e59636fb-b225-431e-9591-b767aa7fe3b8";

const Contact: React.FC = () => {
  const location = useLocation();

  usePageSEO({
    title: 'Contacto — Rodolfo Gaspary | Consultor Web Lima, Peru',
    description: 'Contacta a Rodolfo Gaspary para una consulta estrategica sobre desarrollo web, SEO o estrategia digital. Respuesta garantizada en 24-48 horas.',
    keywords: 'contacto consultor web lima, consultoria web peru, presupuesto desarrollo web',
    canonical: '/contacto',
    lang: 'es',
    hreflang: [
      { lang: 'es', href: 'https://www.rodolfogaspary.com/contacto' },
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
            'name': 'Inicio',
            'item': 'https://www.rodolfogaspary.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Contacto',
            'item': 'https://www.rodolfogaspary.com/contacto'
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contacto — Rodolfo Gaspary',
        url: 'https://www.rodolfogaspary.com/contacto',
        description: 'Formulario de contacto para consultas de desarrollo web y estrategia digital.',
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
    nombre: '',
    email: '',
    empresa: '',
    website: '',
    situacion: '',
    problema: '',
    exito: '',
    inversion: '',
    plazos: '',
    botcheck: '' // Honeypot field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check: If botcheck is filled, it's a bot.
    if (formData.botcheck) {
      console.warn("Spam detected");
      return;
    }

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
          from_name: "Consultoría Rodolfo Gaspary",
          subject: `Nuevo Lead: ${formData.nombre} (${formData.empresa})`,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(result.message || "Error al enviar");
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Hubo un problema al enviar el mensaje. Por favor, escríbeme directamente a info@rodolfogaspary.com');
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
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">¡Mensaje recibido!</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
            Gracias, {formData.nombre}. Revisaré tus detalles y te responderé personalmente a tu correo desde <strong>info@rodolfogaspary.com</strong>.
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-primary font-bold hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12">
      <section className="flex flex-col gap-4 text-center">
        <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">Contacto</span>
        <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
          Hablemos de tu proyecto <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-4">estratégicamente.</span>
        </h1>
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Completa este breve formulario para que pueda llegar a nuestra primera charla con una visión clara de tu negocio.
          </p>
        </div>
      </section>

      {/* Bio Card */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-5 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-md border-2 border-white dark:border-slate-700 overflow-hidden">
            <img
              src={headshotPath}
              alt="Rodolfo Gaspary — Desarrollador Web y Consultor de Estrategia Digital en Lima, Perú"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = fallbackUrl;
              }}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold">Rodolfo Gaspary</h3>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider">Consultor de Estrategia Digital</p>
            <div className="flex items-center gap-2 mt-1 text-slate-500 text-xs">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>Respuesta garantizada en 24-48h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
          {/* Honeypot field (hidden from humans) */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
            onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked ? 'true' : '' })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Nombre</label>
              <input
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base"
                placeholder="Tu nombre completo" required type="text"
                disabled={isSubmitting}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Correo electrónico</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base"
                placeholder="tu@correo.com" required type="email"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Empresa / Proyecto</label>
              <input
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base"
                placeholder="Nombre del negocio" required type="text"
                disabled={isSubmitting}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Sitio web <span className="text-[10px] opacity-60">(si ya tienes)</span></label>
              <input
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base"
                placeholder="https://..." type="url"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">¿Cuál es tu situación actual?</label>
            <div className="relative">
              <select
                name="situacion"
                value={formData.situacion}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base appearance-none bg-none shadow-none"
                required
                disabled={isSubmitting}
              >
                <option value="">Selecciona una opción</option>
                <option value="nuevo">Necesito un sitio web desde cero</option>
                <option value="mejorar">Quiero optimizar un sitio existente</option>
                <option value="consultoria">Busco asesoría estratégica pura</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">¿Qué desafío quieres superar?</label>
            <textarea
              name="problema"
              value={formData.problema}
              onChange={handleChange}
              className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base min-h-[100px]"
              placeholder="Ej: Mi web no genera leads, el mensaje no es claro..." required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Rango de inversión</label>
              <select
                name="inversion"
                value={formData.inversion}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base appearance-none"
                required
                disabled={isSubmitting}
              >
                <option value="">Selecciona un rango</option>
                <option value="small">$200 – $500</option>
                <option value="medium">$500 – $1,500</option>
                <option value="large">+$1,500</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Urgencia</label>
              <select
                name="plazos"
                value={formData.plazos}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base appearance-none"
                required
                disabled={isSubmitting}
              >
                <option value="">¿Para cuándo?</option>
                <option value="urgent">Lo antes posible</option>
                <option value="1-2month">En 1-2 meses</option>
                <option value="planning">Planificando a futuro</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-6">
            <button
              className={`w-full flex items-center justify-center rounded-2xl h-16 text-white text-lg font-bold transition-all gap-3 shadow-lg ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-blue-700 active:scale-[0.98] cursor-pointer shadow-primary/20'}`}
              type="submit"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Procesando...' : 'Enviar consulta estratégica'}</span>
              {!isSubmitting && <span className="material-symbols-outlined">send</span>}
              {isSubmitting && <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
            </button>

            <div className="flex items-center justify-center gap-2 text-slate-400 dark:text-slate-500 text-xs">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span>Formulario encriptado y protegido contra spam</span>
            </div>
          </div>
        </form>
      </section>
      {/* Internal Links */}
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-slate-200 dark:border-slate-800 pt-8 pb-12">
        <Link
          to="/contact"
          className="text-primary font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          View in English
        </Link>
      </nav>
    </div>
  );
};

export default Contact;