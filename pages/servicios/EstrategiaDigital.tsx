import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePageSEO } from '../../hooks/usePageSEO';

const EstrategiaDigital: React.FC = () => {
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
    title: 'Estrategia Digital y SEO en Lima, Perú | Rodolfo Gaspary',
    description:
      'Consultoría estratégica digital y SEO en Lima, Perú. Auditorías SEO, optimización de conversión, estrategia de contenidos y hojas de ruta de crecimiento para negocios locales e internacionales.',
    keywords:
      'estrategia digital Lima, consultor SEO Perú, auditoría SEO Lima, optimización de conversión, marketing digital Lima',
    lang: 'es',
    hreflang: [
      { lang: 'es', href: 'https://www.rodolfogaspary.com/servicios/estrategia-digital' },
      { lang: 'en', href: 'https://www.rodolfogaspary.com/services/digital-strategy' },
      { lang: 'x-default', href: 'https://www.rodolfogaspary.com/servicios/estrategia-digital' },
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
            'name': 'Estrategia Digital',
            'item': 'https://www.rodolfogaspary.com/servicios/estrategia-digital'
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'Estrategia Digital y SEO',
        'image': 'https://www.rodolfogaspary.com/headshot.jpg',
        'url': 'https://www.rodolfogaspary.com/servicios/estrategia-digital',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Lima',
          'addressCountry': 'PE'
        },
        'description': 'Consultoría estratégica digital y SEO en Lima, Perú. Auditorías SEO, optimización de conversión y estrategia de contenidos.'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Qué incluye una auditoría SEO?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La auditoría cubre un análisis técnico completo del sitio: rastreo, indexación, velocidad, estructura de enlaces, metadatos y contenido duplicado.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo mides el éxito de la estrategia?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Utilizo indicadores concretos como posiciones en palabras clave objetivo, crecimiento de tráfico orgánico y tasa de conversión.'
            }
          }
        ]
      }
    ],
    canonical: '/servicios/estrategia-digital',
  });

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-20">
      {/* ── Hero ── */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">
          Estrategia Digital y SEO
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Crecimiento basado en datos para tu negocio. Combino auditorías técnicas,
          investigación de palabras clave y optimización continua para posicionar tu
          marca en los primeros resultados de búsqueda y convertir visitantes en
          clientes reales.
        </p>
      </section>

      {/* ── Lo Que Ofrezco ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
          Lo Que Ofrezco
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
            <span className="material-symbols-outlined text-primary text-3xl mb-3 block">
              troubleshoot
            </span>
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
              Auditorías SEO y Correcciones Técnicas
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Analizo la estructura de tu sitio, la velocidad de carga, la
              indexabilidad y los errores técnicos que frenan tu posicionamiento.
              Recibirás un informe detallado con prioridades claras y correcciones
              aplicables de inmediato para mejorar la visibilidad en buscadores.
            </p>
          </div>
          {/* Card 2 */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
            <span className="material-symbols-outlined text-primary text-3xl mb-3 block">
              edit_note
            </span>
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
              Estrategia de Contenidos y Palabras Clave
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Identifico las oportunidades de búsqueda que tu competencia está
              desaprovechando. Desarrollo un calendario editorial y una estructura de
              contenidos optimizada para atraer tráfico cualificado tanto a nivel
              local en Lima como a mercados internacionales.
            </p>
          </div>
          {/* Card 3 */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
            <span className="material-symbols-outlined text-primary text-3xl mb-3 block">
              trending_up
            </span>
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
              Optimización de Tasa de Conversión
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              No basta con traer visitas: hay que convertirlas. Diseño tests A/B,
              mejoro flujos de usuario y optimizo llamadas a la acción para que cada
              página trabaje a favor de tus objetivos comerciales y aumente tu
              retorno de inversión.
            </p>
          </div>
          {/* Card 4 */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
            <span className="material-symbols-outlined text-primary text-3xl mb-3 block">
              insert_chart
            </span>
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
              Informes Mensuales y Hojas de Ruta
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Cada mes recibirás un reporte con métricas clave — tráfico orgánico,
              posiciones, conversiones — y una hoja de ruta actualizada con las
              próximas acciones tácticas para mantener un crecimiento sostenido y
              predecible.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mi Proceso ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
          Mi Proceso
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Auditoría',
              desc: 'Evalúo el estado actual de tu sitio, tu presencia digital y la competencia para detectar problemas y oportunidades.',
            },
            {
              step: '02',
              title: 'Estrategia',
              desc: 'Defino objetivos medibles, selecciono las palabras clave prioritarias y trazo un plan de acción personalizado.',
            },
            {
              step: '03',
              title: 'Ejecución',
              desc: 'Implemento las correcciones técnicas, creo contenidos optimizados y configuro herramientas de seguimiento.',
            },
            {
              step: '04',
              title: 'Medición e Iteración',
              desc: 'Analizo resultados cada mes, ajusto la estrategia según los datos y escalo lo que funciona para maximizar el impacto.',
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg mb-3">
                {item.step}
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Para Quien Es ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
          Para Quién Es
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-3">
          Este servicio de estrategia digital y SEO en Lima está pensado para:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
          <li>Pequeñas y medianas empresas que quieren aumentar su visibilidad orgánica.</li>
          <li>Startups que necesitan una hoja de ruta de crecimiento digital clara y ejecutable.</li>
          <li>E-commerces que buscan mejorar sus tasas de conversión y reducir costos de adquisición.</li>
          <li>Equipos de marketing que requieren un consultor SEO externo con experiencia local e internacional.</li>
        </ul>
      </section>

      {/* ── FAQ ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          <details className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
            <summary className="cursor-pointer font-semibold text-slate-900 dark:text-white">
              ¿Qué incluye una auditoría SEO?
            </summary>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              La auditoría cubre un análisis técnico completo del sitio — rastreo,
              indexación, velocidad, estructura de enlaces internos, metadatos y
              contenido duplicado. También evalúo el perfil de backlinks y la
              competencia para identificar las acciones de mayor impacto.
            </p>
          </details>
          <details className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
            <summary className="cursor-pointer font-semibold text-slate-900 dark:text-white">
              ¿Cómo mides el éxito?
            </summary>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Utilizo indicadores concretos: posiciones en palabras clave objetivo,
              crecimiento de tráfico orgánico, tasa de conversión, ingresos
              atribuidos al canal orgánico y visibilidad general del dominio. Todos
              los datos se presentan en informes mensuales transparentes.
            </p>
          </details>
          <details className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
            <summary className="cursor-pointer font-semibold text-slate-900 dark:text-white">
              ¿Ofreces soporte continuo?
            </summary>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Sí. Ofrezco planes mensuales de acompañamiento que incluyen monitoreo,
              ajustes técnicos, actualización de contenidos y reuniones periódicas
              para revisar resultados y planificar los siguientes pasos.
            </p>
          </details>
          <details className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
            <summary className="cursor-pointer font-semibold text-slate-900 dark:text-white">
              Puedes trabajar con mi equipo de marketing existente?
            </summary>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Por supuesto. Me integro facilmente con equipos internos o agencias.
              Puedo actuar como consultor estrategico, ejecutar tareas tecnicas
              directamente o capacitar a tu equipo para que implemente las
              recomendaciones de forma autonoma.
            </p>
          </details>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
          Hablemos de tu estrategia digital
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Cuéntame sobre tu proyecto y te propongo un plan de acción a medida.
        </p>
        <Link
          to="/contacto"
          className="inline-block bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-bold transition-colors"
        >
          Contactar
        </Link>
      </section>

      {/* ── Internal Links ── */}
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-slate-200 dark:border-slate-800 pt-8">
        <Link
          to="/servicios/desarrollo-web"
          className="text-primary font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">code</span>
          Desarrollo Web
        </Link>
        <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
        <Link
          to="/services/digital-strategy"
          className="text-primary font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          View in English
        </Link>
      </nav>
    </main>
  );
};

export default EstrategiaDigital;
