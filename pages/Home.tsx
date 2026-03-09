import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';

// To use your own image: 
// 1. Create a folder named 'assets' in your project root.
// 2. Place your image file inside and name it 'headshot.jpg'.
const headshotPath = "/headshot.jpg";
const fallbackUrl = "https://ui-avatars.com/api/?name=Rodolfo+Gaspary&background=0F172A&color=fff&size=512";

const Home: React.FC = () => {
  const location = useLocation();

  usePageSEO({
    title: 'Rodolfo Gaspary — Desarrollo Web y Estrategia Digital | Lima, Peru',
    description: 'Desarrollo web en Lima y estrategia digital: sitios web, e-commerce, SEO y consultoría para empresas en Perú y globalmente. Transformo sitios en herramientas de crecimiento.',
    keywords: 'desarrollo web perú, estrategia digital lima, consultor web lima, rodolfo gaspary, SEO lima',
    canonical: '/',
    lang: 'es',
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
          'name': 'Inicio',
          'item': 'https://www.rodolfogaspary.com/'
        }]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Rodolfo Gaspary — Desarrollo Web y Estrategia Digital | Lima, Peru',
        'description': 'Desarrollo web en Lima y estrategia digital: sitios web, e-commerce, SEO y consultoría para empresas en Perú y globalmente.',
        'url': 'https://www.rodolfogaspary.com/',
        'inLanguage': 'es',
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['h1', '.text-accent', 'h2']
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Cuál es el enfoque de Rodolfo Gaspary en el desarrollo web?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Mi enfoque es estratégico y orientado a resultados. Cada proyecto se basa en tres pilares: necesidades del negocio, acciones del usuario y métricas de éxito definidas. Con más de 7 años de experiencia técnica, no solo construyo sitios web, sino herramientas de crecimiento que convierten visitantes en clientes.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Ofreces servicios de SEO en Lima?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, ofrezco consultoría de SEO y estrategia digital en Lima. Esto incluye auditorías SEO técnicas, optimización de contenido, estrategia de palabras clave y monitoreo de métricas de visibilidad orgánica para ayudar a los negocios a mejorar su posicionamiento en buscadores.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Qué diferencia tu consultoría web de una agencia tradicional?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A diferencia de las agencias, trabajo directamente con los dueños de negocio sin intermediarios. Esto garantiza comunicación directa, soberanía técnica (el código es tuyo) y un enfoque claro en ROI. Cada decisión técnica está alineada con los KPIs y metas de facturación del negocio.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Trabajas con empresas fuera de Perú?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, trabajo con clientes tanto en Perú como a nivel internacional. Mi sitio es bilingüe (español e inglés) y mi proceso de consultoría se adapta a empresas de cualquier ubicación que necesiten estrategia digital y desarrollo web orientado a resultados.'
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
              Consultoría Web Independiente
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-stone-900 dark:text-white">
              Ayudo a las empresas a convertir sus sitios web en <span className="text-accent">herramientas de crecimiento</span> confiables.
            </h1>
            <p className="text-lg text-muted dark:text-stone-400 leading-relaxed max-w-xl">
              Soy Rodolfo Gaspary, consultor web independiente. Trabajo con dueños de negocios que necesitan más que un sitio web: necesitan claridad, estrategia y decisiones digitales que realmente apoyen el crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link to="/contacto" className="flex-1 sm:flex-none h-12 px-8 bg-ink text-white rounded-md text-base font-medium flex items-center justify-center hover:bg-stone-800 transition-colors duration-200 cursor-pointer">
                Iniciar una conversación
              </Link>
              <Link to="/servicios" className="flex-1 sm:flex-none h-12 px-8 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 rounded-md text-base font-medium flex items-center justify-center hover:border-stone-400 dark:hover:border-stone-500 transition-colors duration-200 cursor-pointer">
                Ver cómo trabajo
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square bg-stone-100 dark:bg-stone-800 rounded-lg overflow-hidden shadow-sm border border-stone-200 dark:border-stone-700">
              <img
                src={headshotPath}
                alt="Rodolfo Gaspary — Desarrollador Web y Consultor de Estrategia Digital en Lima, Perú"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = fallbackUrl;
                  if (e.currentTarget.dataset.errorLogged !== 'true') {
                    console.info("Info: Local headshot.jpg not found. Using fallback avatar. Ensure 'assets/headshot.jpg' exists in your deployment.");
                    e.currentTarget.dataset.errorLogged = 'true';
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-stone-900 py-4 px-6 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 flex flex-col gap-1">
              <span className="text-accent font-bold text-2xl font-serif">+7 años</span>
              <span className="text-muted text-xs font-semibold uppercase tracking-wider">De Experiencia Técnica</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-stone-50 dark:bg-stone-900/40 border-y border-stone-200 dark:border-stone-700">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <span className="text-accent font-semibold uppercase tracking-widest text-xs mb-6 block">El Problema Común</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 leading-tight text-stone-900 dark:text-white">
            La mayoría de los sitios web empresariales fallan por una razón simple: se construyen <span className="text-red-600 dark:text-red-400">sin un objetivo comercial claro.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left pt-6">
            <div className="flex flex-col gap-3">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400">design_services</span>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">Diseño vs. Resultados</h3>
              <p className="text-muted dark:text-stone-400 leading-relaxed">
                Muchos se enfocan en que "se vea bonito", pero olvidan que la estética sin estrategia no genera clientes. Un sitio visualmente atractivo que no convierte es un gasto, no una inversión.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400">psychology</span>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">Parálisis de Decisión</h3>
              <p className="text-muted dark:text-stone-400 leading-relaxed">
                Las empresas suelen tomar decisiones tecnológicas basadas en tendencias o suposiciones, en lugar de datos reales y necesidades del negocio, resultando en sistemas costosos y difíciles de mantener.
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
                No solo construyo sitios web. Te ayudo a construir <span className="text-accent">los correctos.</span>
              </h2>
              <p className="text-lg text-muted dark:text-stone-400">
                Mi enfoque elimina las conjeturas y se centra en tres pilares fundamentales para garantizar que cada línea de código tenga un propósito comercial:
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { title: "Necesidades del negocio", desc: "Alineación total con tus KPIs y metas de facturación." },
                  { title: "Acciones del usuario", desc: "Diseñado para guiar al visitante hacia la conversión sin fricción." },
                  { title: "Definición del éxito", desc: "Métricas claras para medir el retorno de tu inversión digital." }
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
                    <span className="font-semibold block text-stone-900 dark:text-white">Consultoría Directa</span>
                    <span className="text-muted dark:text-stone-400 text-sm">Sin intermediarios, hablas conmigo.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-stone-200 dark:border-stone-700 pb-6">
                  <div className="size-10 rounded-lg border border-stone-200 dark:border-stone-700 text-accent flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">code</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-stone-900 dark:text-white">Soberanía Técnica</span>
                    <span className="text-muted dark:text-stone-400 text-sm">Código limpio que tú controlas.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-lg border border-stone-200 dark:border-stone-700 text-accent flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">trending_up</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-stone-900 dark:text-white">Enfoque en ROI</span>
                    <span className="text-muted dark:text-stone-400 text-sm">Tu web debe ser un generador de beneficios.</span>
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold">¿Listo para dejar de adivinar y empezar a crecer?</h2>
          <p className="text-white/70 text-lg max-w-2xl">
            Reserva una sesión estratégica inicial. Analizaremos tu situación actual y determinaremos el mejor camino a seguir.
          </p>
          <Link to="/contacto" className="h-12 px-8 bg-accent text-white rounded-md text-base font-medium flex items-center justify-center hover:bg-amber-700 transition-colors duration-200 cursor-pointer">
            Contacto
          </Link>
        </div>
      </section>
      {/* Internal Links */}
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-stone-200 dark:border-stone-700 pt-8 pb-12">
        <Link
          to="/en"
          className="text-accent font-medium hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          View in English
        </Link>
      </nav>
    </div>
  );
};

export default Home;