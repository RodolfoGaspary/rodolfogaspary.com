import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePageSEO } from '../../hooks/usePageSEO';

const DesarrolloWeb: React.FC = () => {
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
    title: 'Desarrollo Web en Lima, Perú | Rodolfo Gaspary',
    description: 'Desarrollo web profesional en Lima, Perú. Sitios responsivos, plataformas e-commerce y aplicaciones web modernas construidas para convertir y escalar tu negocio.',
    keywords: 'desarrollo web Lima, desarrollador web Perú, páginas web Lima, e-commerce Perú, diseño web responsivo Lima',
    lang: 'es',
    hreflang: [
      { lang: 'es', href: 'https://www.rodolfogaspary.com/servicios/desarrollo-web' },
      { lang: 'en', href: 'https://www.rodolfogaspary.com/services/web-development' },
      { lang: 'x-default', href: 'https://www.rodolfogaspary.com/servicios/desarrollo-web' },
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
            'name': 'Servicios',
            'item': 'https://www.rodolfogaspary.com/servicios'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Desarrollo Web',
            'item': 'https://www.rodolfogaspary.com/servicios/desarrollo-web'
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Desarrollo Web en Lima, Perú',
        'url': 'https://www.rodolfogaspary.com/servicios/desarrollo-web',
        'inLanguage': 'es',
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['h1', 'h2', '.text-accent']
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Desarrollo Web',
        serviceType: 'Web Development',
        areaServed: ['Lima', 'Perú', 'Global'],
        provider: {
          '@type': 'LocalBusiness',
          name: 'Rodolfo Gaspary',
          url: 'https://www.rodolfogaspary.com',
        },
        description: 'Desarrollo web profesional en Lima, Perú. Sitios responsivos, plataformas e-commerce y aplicaciones web modernas.',
      },
    ],
    canonical: '/servicios/desarrollo-web',
  });

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight tracking-tight text-stone-900 dark:text-white mb-6">
          Desarrollo Web Profesional
        </h1>
        <p className="text-lg md:text-xl text-muted dark:text-stone-400 leading-relaxed max-w-2xl">
          Construyo sitios web y aplicaciones enfocadas en resultados reales. Cada proyecto
          parte de tus objetivos comerciales para crear una presencia digital que convierte
          visitantes en clientes y escala junto con tu negocio. Si buscas un desarrollador web
          en Lima que entienda tanto el código como la estrategia, estás en el lugar correcto.
        </p>
      </section>

      {/* Mi Proceso */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white mb-8">Mi Proceso</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              icon: 'search',
              step: '01',
              title: 'Descubrimiento',
              desc: 'Analizo tu negocio, audiencia y competencia para definir los requisitos técnicos y objetivos de conversión antes de escribir una sola línea de código.',
            },
            {
              icon: 'account_tree',
              step: '02',
              title: 'Arquitectura',
              desc: 'Diseño la estructura del sitio, flujos de usuario y selección de tecnologías para garantizar rendimiento, escalabilidad y una experiencia de usuario óptima.',
            },
            {
              icon: 'code',
              step: '03',
              title: 'Desarrollo',
              desc: 'Construyo tu sitio con código limpio, responsivo y optimizado para SEO. Cada componente se prueba para asegurar velocidad y compatibilidad en todos los dispositivos.',
            },
            {
              icon: 'rocket_launch',
              step: '04',
              title: 'Lanzamiento y Optimización',
              desc: 'Despliego tu proyecto en producción, configuro analítica y monitoreo, y realizo ajustes continuos basados en datos reales de tus usuarios.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex flex-col gap-4 p-6 rounded-lg bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-700 group hover:border-stone-300 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-lg border border-stone-200 dark:border-stone-700 text-accent flex items-center justify-center transition-colors duration-200">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span className="text-sm font-bold text-accent uppercase tracking-widest">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white">{item.title}</h3>
              <p className="text-muted dark:text-stone-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lo Que Obtienes */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white mb-6">Lo Que Obtienes</h2>
        <ul className="space-y-4">
          {[
            'Sitio web responsivo y optimizado para velocidad, accesibilidad y SEO técnico.',
            'Plataforma e-commerce con pasarela de pagos segura y panel de administración.',
            'Integración con herramientas de analítica, CRM y automatización de marketing.',
            'Código fuente documentado, mantenible y de tu propiedad total.',
            'Configuración de hosting, dominio, SSL y despliegue en producción.',
            'Soporte post-lanzamiento con ajustes basados en métricas reales.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent mt-0.5">check_circle</span>
              <span className="text-stone-700 dark:text-stone-300">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Para Quien Es */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white mb-6">Para Quien Es</h2>
        <p className="text-muted dark:text-stone-400 leading-relaxed">
          Este servicio de desarrollo web está pensado para pequeñas y medianas empresas en Lima y Perú
          que necesitan más que una página bonita: necesitan una herramienta digital que genere
          resultados. También trabajo con startups que buscan construir su primer producto web,
          agencias que requieren un desarrollador de confianza para proyectos puntuales y negocios
          internacionales que quieren expandirse al mercado hispanohablante con una presencia web
          sólida y culturalmente relevante.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white mb-8">Preguntas Frecuentes</h2>
        <div className="flex flex-col gap-4">
          <details className="group rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/60 p-6">
            <summary className="cursor-pointer text-lg font-bold text-stone-900 dark:text-white list-none flex items-center justify-between">
              ¿Qué tecnologías utilizas?
              <span className="material-symbols-outlined text-accent transition-colors duration-200 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 text-muted dark:text-stone-400 leading-relaxed">
              Trabajo con React, TypeScript, Next.js, Tailwind CSS y Node.js como tecnologías
              principales. Para e-commerce utilizo soluciones como Shopify o WooCommerce según
              las necesidades del proyecto. Siempre elijo la herramienta que mejor se adapte a
              los objetivos de tu negocio, no la que esté de moda.
            </p>
          </details>

          <details className="group rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/60 p-6">
            <summary className="cursor-pointer text-lg font-bold text-stone-900 dark:text-white list-none flex items-center justify-between">
              ¿Cuánto tiempo toma un proyecto típico?
              <span className="material-symbols-outlined text-accent transition-colors duration-200 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 text-muted dark:text-stone-400 leading-relaxed">
              Un sitio web corporativo o landing page suele estar listo en 3 a 4 semanas.
              Proyectos más complejos como plataformas e-commerce o aplicaciones web pueden
              tomar entre 6 y 10 semanas dependiendo del alcance. Siempre defino un
              cronograma claro desde el primer día.
            </p>
          </details>

          <details className="group rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/60 p-6">
            <summary className="cursor-pointer text-lg font-bold text-stone-900 dark:text-white list-none flex items-center justify-between">
              ¿Trabajas con clientes internacionales?
              <span className="material-symbols-outlined text-accent transition-colors duration-200 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 text-muted dark:text-stone-400 leading-relaxed">
              Sí. Aunque estoy basado en Lima, Perú, trabajo regularmente con empresas en
              Estados Unidos, Europa y América Latina. Me comunico en español e inglés y
              gestiono proyectos de forma remota con herramientas de colaboración modernas.
            </p>
          </details>

          <details className="group rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/60 p-6">
            <summary className="cursor-pointer text-lg font-bold text-stone-900 dark:text-white list-none flex items-center justify-between">
              ¿Qué sucede después del lanzamiento?
              <span className="material-symbols-outlined text-accent transition-colors duration-200 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 text-muted dark:text-stone-400 leading-relaxed">
              Después del lanzamiento ofrezco un periodo de soporte para ajustes y
              correcciones. También puedo acompañar tu proyecto a largo plazo con
              mantenimiento continuo, optimización de rendimiento y nuevas funcionalidades
              a medida que tu negocio crece.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16 text-center py-12 rounded-lg bg-amber-50/50 dark:bg-amber-900/5 border border-accent/20">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white mb-4">
          Hablemos sobre tu proyecto
        </h2>
        <p className="text-muted dark:text-stone-400 mb-8 max-w-lg mx-auto">
          Cuéntame qué necesitas y te responderé con un plan claro, sin compromiso.
        </p>
        <Link
          to="/contacto"
          className="inline-flex items-center h-14 px-10 bg-accent text-white rounded-md text-lg font-bold hover:bg-stone-800 hover:border-stone-300 transition-colors"
        >
          Iniciar una conversación
        </Link>
      </section>

      {/* Internal Links */}
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-stone-200 dark:border-stone-700 pt-8">
        <Link
          to="/servicios/estrategia-digital"
          className="text-accent font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">trending_up</span>
          Estrategia Digital y SEO
        </Link>
        <span className="hidden sm:inline text-stone-300 dark:text-stone-700">|</span>
        <Link
          to="/services/web-development"
          className="text-accent font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          View in English
        </Link>
      </nav>
    </main>
  );
};

export default DesarrolloWeb;
