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
    title: 'Desarrollo Web en Lima, Peru | Rodolfo Gaspary',
    description: 'Desarrollo web profesional en Lima, Peru. Sitios responsivos, plataformas e-commerce y aplicaciones web modernas construidas para convertir y escalar tu negocio.',
    keywords: 'desarrollo web Lima, desarrollador web Peru, paginas web Lima, e-commerce Peru, diseno web responsivo Lima',
    canonical: '/servicios/desarrollo-web',
    hreflang: [
      { lang: 'es', href: 'https://www.rodolfogaspary.com/servicios/desarrollo-web' },
      { lang: 'en', href: 'https://www.rodolfogaspary.com/services/web-development' },
      { lang: 'x-default', href: 'https://www.rodolfogaspary.com/servicios/desarrollo-web' },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Desarrollo Web',
      serviceType: 'Web Development',
      areaServed: ['Lima', 'Peru', 'Global'],
      provider: {
        '@type': 'LocalBusiness',
        name: 'Rodolfo Gaspary',
        url: 'https://www.rodolfogaspary.com',
      },
      description: 'Desarrollo web profesional en Lima, Peru. Sitios responsivos, plataformas e-commerce y aplicaciones web modernas.',
    },
  });

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white mb-6">
          Desarrollo Web Profesional
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          Construyo sitios web y aplicaciones enfocadas en resultados reales. Cada proyecto
          parte de tus objetivos comerciales para crear una presencia digital que convierte
          visitantes en clientes y escala junto con tu negocio. Si buscas un desarrollador web
          en Lima que entienda tanto el codigo como la estrategia, estas en el lugar correcto.
        </p>
      </section>

      {/* Mi Proceso */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-8">Mi Proceso</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              icon: 'search',
              step: '01',
              title: 'Descubrimiento',
              desc: 'Analizo tu negocio, audiencia y competencia para definir los requisitos tecnicos y objetivos de conversion antes de escribir una sola linea de codigo.',
            },
            {
              icon: 'account_tree',
              step: '02',
              title: 'Arquitectura',
              desc: 'Diseño la estructura del sitio, flujos de usuario y seleccion de tecnologias para garantizar rendimiento, escalabilidad y una experiencia de usuario optima.',
            },
            {
              icon: 'code',
              step: '03',
              title: 'Desarrollo',
              desc: 'Construyo tu sitio con codigo limpio, responsivo y optimizado para SEO. Cada componente se prueba para asegurar velocidad y compatibilidad en todos los dispositivos.',
            },
            {
              icon: 'rocket_launch',
              step: '04',
              title: 'Lanzamiento y Optimizacion',
              desc: 'Despliego tu proyecto en produccion, configuro analitica y monitoreo, y realizo ajustes continuos basados en datos reales de tus usuarios.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span className="text-sm font-bold text-primary uppercase tracking-widest">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lo Que Obtienes */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6">Lo Que Obtienes</h2>
        <ul className="space-y-4">
          {[
            'Sitio web responsivo y optimizado para velocidad, accesibilidad y SEO tecnico.',
            'Plataforma e-commerce con pasarela de pagos segura y panel de administracion.',
            'Integracion con herramientas de analitica, CRM y automatizacion de marketing.',
            'Codigo fuente documentado, mantenible y de tu propiedad total.',
            'Configuracion de hosting, dominio, SSL y despliegue en produccion.',
            'Soporte post-lanzamiento con ajustes basados en metricas reales.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
              <span className="text-slate-700 dark:text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Para Quien Es */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6">Para Quien Es</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Este servicio de desarrollo web esta pensado para pequenas y medianas empresas en Lima y Peru
          que necesitan mas que una pagina bonita: necesitan una herramienta digital que genere
          resultados. Tambien trabajo con startups que buscan construir su primer producto web,
          agencias que requieren un desarrollador de confianza para proyectos puntuales y negocios
          internacionales que quieren expandirse al mercado hispanohablante con una presencia web
          solida y culturalmente relevante.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-8">Preguntas Frecuentes</h2>
        <div className="flex flex-col gap-4">
          <details className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6">
            <summary className="cursor-pointer text-lg font-bold text-slate-900 dark:text-white list-none flex items-center justify-between">
              Que tecnologias utilizas?
              <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Trabajo con React, TypeScript, Next.js, Tailwind CSS y Node.js como tecnologias
              principales. Para e-commerce utilizo soluciones como Shopify o WooCommerce segun
              las necesidades del proyecto. Siempre elijo la herramienta que mejor se adapte a
              los objetivos de tu negocio, no la que este de moda.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6">
            <summary className="cursor-pointer text-lg font-bold text-slate-900 dark:text-white list-none flex items-center justify-between">
              Cuanto tiempo toma un proyecto tipico?
              <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Un sitio web corporativo o landing page suele estar listo en 3 a 4 semanas.
              Proyectos mas complejos como plataformas e-commerce o aplicaciones web pueden
              tomar entre 6 y 10 semanas dependiendo del alcance. Siempre defino un
              cronograma claro desde el primer dia.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6">
            <summary className="cursor-pointer text-lg font-bold text-slate-900 dark:text-white list-none flex items-center justify-between">
              Trabajas con clientes internacionales?
              <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Si. Aunque estoy basado en Lima, Peru, trabajo regularmente con empresas en
              Estados Unidos, Europa y America Latina. Me comunico en espanol e ingles y
              gestiono proyectos de forma remota con herramientas de colaboracion modernas.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6">
            <summary className="cursor-pointer text-lg font-bold text-slate-900 dark:text-white list-none flex items-center justify-between">
              Que sucede despues del lanzamiento?
              <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Despues del lanzamiento ofrezco un periodo de soporte para ajustes y
              correcciones. Tambien puedo acompanar tu proyecto a largo plazo con
              mantenimiento continuo, optimizacion de rendimiento y nuevas funcionalidades
              a medida que tu negocio crece.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16 text-center py-12 rounded-3xl bg-primary/5 dark:bg-primary/10 border border-primary/20">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">
          Hablemos sobre tu proyecto
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
          Cuentame que necesitas y te respondere con un plan claro, sin compromiso.
        </p>
        <Link
          to="/contacto"
          className="inline-flex items-center h-14 px-10 bg-primary text-white rounded-xl text-lg font-bold hover:bg-blue-700 hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          Iniciar una conversacion
        </Link>
      </section>

      {/* Internal Links */}
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-slate-200 dark:border-slate-800 pt-8">
        <Link
          to="/servicios/estrategia-digital"
          className="text-primary font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">trending_up</span>
          Estrategia Digital y SEO
        </Link>
        <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
        <Link
          to="/services/web-development"
          className="text-primary font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          View in English
        </Link>
      </nav>
    </main>
  );
};

export default DesarrolloWeb;
