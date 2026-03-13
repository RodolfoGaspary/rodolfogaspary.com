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
    title: 'Estrategia Digital, SEO y GEO en Lima, Perú | Rodolfo Gaspary',
    description:
      'Consultoría de estrategia digital, SEO y GEO en Lima, Perú. Optimiza para Google, Bing, ChatGPT, Perplexity y motores de búsqueda IA. Auditorías, estrategia de contenidos y hojas de ruta.',
    keywords:
      'estrategia digital Lima, consultor SEO Perú, auditoría SEO Lima, optimización de conversión, GEO, optimización para motores generativos, optimización búsqueda IA, ChatGPT ranking',
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
            'name': 'Estrategia Digital y SEO/GEO',
            'item': 'https://www.rodolfogaspary.com/servicios/estrategia-digital'
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Estrategia Digital, SEO y GEO en Lima, Perú',
        'url': 'https://www.rodolfogaspary.com/servicios/estrategia-digital',
        'inLanguage': 'es',
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['h1', 'h2', '.text-accent']
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'Estrategia Digital, SEO y GEO',
        'image': 'https://www.rodolfogaspary.com/headshot.jpg',
        'url': 'https://www.rodolfogaspary.com/servicios/estrategia-digital',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Lima',
          'addressCountry': 'PE'
        },
        'description': 'Consultoría de estrategia digital, SEO y GEO en Lima, Perú. Optimización para buscadores tradicionales y plataformas de IA como ChatGPT, Perplexity y Google AI Overview.'
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
          },
          {
            '@type': 'Question',
            'name': '¿Qué es GEO y en qué se diferencia del SEO?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'GEO (Generative Engine Optimization) se enfoca en que tu contenido sea citado por motores de búsqueda IA como ChatGPT, Perplexity y Google AI Overview. Mientras el SEO posiciona tus páginas en resultados tradicionales, GEO asegura que las plataformas de IA elijan tu sitio como fuente confiable. Ambas estrategias trabajan juntas para máxima visibilidad.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Para qué motores de búsqueda IA optimizas?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Optimizo para ChatGPT, Perplexity, Google AI Overview, Microsoft Copilot y Claude. Cada plataforma tiene factores de posicionamiento diferentes — optimizo tu contenido, datos estructurados y configuración técnica para todas.'
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
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-stone-900 dark:text-white">
          Estrategia Digital, SEO y GEO
        </h1>
        <p className="text-lg md:text-xl text-muted dark:text-stone-300 max-w-2xl mx-auto">
          Crecimiento basado en datos para tu negocio. Combino auditorías técnicas,
          investigación de palabras clave y optimización generativa para posicionar tu
          marca en los resultados de búsqueda y en las respuestas de IA.
        </p>
      </section>

      {/* ── Lo Que Ofrezco ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-8 text-stone-900 dark:text-white">
          Lo Que Ofrezco
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-6">
            <span className="material-symbols-outlined text-accent text-3xl mb-3 block">
              troubleshoot
            </span>
            <h3 className="text-lg font-bold mb-2 text-stone-900 dark:text-white">
              Auditorías SEO y Correcciones Técnicas
            </h3>
            <p className="text-muted dark:text-stone-300 text-sm">
              Analizo la estructura de tu sitio, la velocidad de carga, la
              indexabilidad y los errores técnicos que frenan tu posicionamiento.
              Recibirás un informe detallado con prioridades claras y correcciones
              aplicables de inmediato para mejorar la visibilidad en buscadores.
            </p>
          </div>
          {/* Card 2 */}
          <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-6">
            <span className="material-symbols-outlined text-accent text-3xl mb-3 block">
              edit_note
            </span>
            <h3 className="text-lg font-bold mb-2 text-stone-900 dark:text-white">
              Estrategia de Contenidos y Palabras Clave
            </h3>
            <p className="text-muted dark:text-stone-300 text-sm">
              Identifico las oportunidades de búsqueda que tu competencia está
              desaprovechando. Desarrollo un calendario editorial y una estructura de
              contenidos optimizada para atraer tráfico cualificado tanto a nivel
              local en Lima como a mercados internacionales.
            </p>
          </div>
          {/* Card 3 */}
          <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-6">
            <span className="material-symbols-outlined text-accent text-3xl mb-3 block">
              trending_up
            </span>
            <h3 className="text-lg font-bold mb-2 text-stone-900 dark:text-white">
              Optimización de Tasa de Conversión
            </h3>
            <p className="text-muted dark:text-stone-300 text-sm">
              No basta con traer visitas: hay que convertirlas. Diseño tests A/B,
              mejoro flujos de usuario y optimizo llamadas a la acción para que cada
              página trabaje a favor de tus objetivos comerciales y aumente tu
              retorno de inversión.
            </p>
          </div>
          {/* Card 4 */}
          <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-6">
            <span className="material-symbols-outlined text-accent text-3xl mb-3 block">
              insert_chart
            </span>
            <h3 className="text-lg font-bold mb-2 text-stone-900 dark:text-white">
              Informes Mensuales y Hojas de Ruta
            </h3>
            <p className="text-muted dark:text-stone-300 text-sm">
              Cada mes recibirás un reporte con métricas clave — tráfico orgánico,
              posiciones, conversiones — y una hoja de ruta actualizada con las
              próximas acciones tácticas para mantener un crecimiento sostenido y
              predecible.
            </p>
          </div>
          {/* Card 5 */}
          <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-6">
            <span className="material-symbols-outlined text-accent text-3xl mb-3 block">
              smart_toy
            </span>
            <h3 className="text-lg font-bold mb-2 text-stone-900 dark:text-white">
              GEO: Visibilidad en Búsqueda IA
            </h3>
            <p className="text-muted dark:text-stone-300 text-sm">
              Optimizo tu contenido para ser citado por motores de búsqueda IA —
              ChatGPT, Perplexity, Google AI Overview, Copilot y Claude. Implemento
              datos estructurados, esquemas FAQ, citas autoritativas y estructura de
              contenido para que las plataformas de IA elijan tu sitio como fuente confiable.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mi Proceso ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-8 text-stone-900 dark:text-white">
          Mi Proceso
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Auditoría',
              desc: 'Evalúo el estado actual de tu sitio, tu presencia digital, la competencia y la preparación para motores de búsqueda IA (acceso de bots, esquemas, estructura de contenido).',
            },
            {
              step: '02',
              title: 'Estrategia',
              desc: 'Defino objetivos medibles, selecciono palabras clave prioritarias y trazo un plan de acción que incluye tácticas GEO para la citación en plataformas de IA.',
            },
            {
              step: '03',
              title: 'Ejecución',
              desc: 'Implemento correcciones técnicas, creo contenidos optimizados, configuro datos estructurados y aplico las tácticas de posicionamiento tradicional e IA.',
            },
            {
              step: '04',
              title: 'Medición e Iteración',
              desc: 'Monitoreo el rendimiento en buscadores y plataformas IA, presento resultados cada mes y ajusto la estrategia según los datos reales.',
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-stone-200 dark:border-stone-700 text-accent font-bold text-lg mb-3">
                {item.step}
              </span>
              <h3 className="font-bold text-stone-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted dark:text-stone-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Para Quien Es ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-4 text-stone-900 dark:text-white">
          Para Quién Es
        </h2>
        <p className="text-muted dark:text-stone-300 mb-3">
          Este servicio de estrategia digital y SEO en Lima está pensado para:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted dark:text-stone-300">
          <li>Pequeñas y medianas empresas que quieren aumentar su visibilidad orgánica.</li>
          <li>Startups que necesitan una hoja de ruta de crecimiento digital clara y ejecutable.</li>
          <li>E-commerces que buscan mejorar sus tasas de conversión y reducir costos de adquisición.</li>
          <li>Equipos de marketing que requieren un consultor SEO externo con experiencia local e internacional.</li>
          <li>Negocios que quieren aparecer en las respuestas generadas por IA en ChatGPT, Perplexity y Google AI Overview — no solo en los resultados de búsqueda tradicionales.</li>
        </ul>
      </section>

      {/* ── FAQ ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-6 text-stone-900 dark:text-white">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          <details className="group rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-4">
            <summary className="cursor-pointer font-semibold text-stone-900 dark:text-white">
              ¿Qué incluye una auditoría SEO?
            </summary>
            <p className="mt-3 text-sm text-muted dark:text-stone-300">
              La auditoría cubre un análisis técnico completo del sitio — rastreo,
              indexación, velocidad, estructura de enlaces internos, metadatos y
              contenido duplicado. También evalúo el perfil de backlinks y la
              competencia para identificar las acciones de mayor impacto.
            </p>
          </details>
          <details className="group rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-4">
            <summary className="cursor-pointer font-semibold text-stone-900 dark:text-white">
              ¿Cómo mides el éxito?
            </summary>
            <p className="mt-3 text-sm text-muted dark:text-stone-300">
              Utilizo indicadores concretos: posiciones en palabras clave objetivo,
              crecimiento de tráfico orgánico, tasa de conversión, ingresos
              atribuidos al canal orgánico y visibilidad general del dominio. Todos
              los datos se presentan en informes mensuales transparentes.
            </p>
          </details>
          <details className="group rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-4">
            <summary className="cursor-pointer font-semibold text-stone-900 dark:text-white">
              ¿Ofreces soporte continuo?
            </summary>
            <p className="mt-3 text-sm text-muted dark:text-stone-300">
              Sí. Ofrezco planes mensuales de acompañamiento que incluyen monitoreo,
              ajustes técnicos, actualización de contenidos y reuniones periódicas
              para revisar resultados y planificar los siguientes pasos.
            </p>
          </details>
          <details className="group rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-4">
            <summary className="cursor-pointer font-semibold text-stone-900 dark:text-white">
              Puedes trabajar con mi equipo de marketing existente?
            </summary>
            <p className="mt-3 text-sm text-muted dark:text-stone-300">
              Por supuesto. Me integro facilmente con equipos internos o agencias.
              Puedo actuar como consultor estrategico, ejecutar tareas tecnicas
              directamente o capacitar a tu equipo para que implemente las
              recomendaciones de forma autonoma.
            </p>
          </details>
          <details className="group rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-4">
            <summary className="cursor-pointer font-semibold text-stone-900 dark:text-white">
              ¿Qué es GEO y en qué se diferencia del SEO?
            </summary>
            <p className="mt-3 text-sm text-muted dark:text-stone-300">
              GEO (Generative Engine Optimization) se enfoca en que tu contenido
              sea citado por motores de búsqueda IA como ChatGPT, Perplexity y
              Google AI Overview. Mientras el SEO posiciona tus páginas en
              resultados tradicionales, GEO asegura que las plataformas de IA
              elijan tu sitio como fuente confiable. Ambas estrategias trabajan
              juntas para máxima visibilidad.
            </p>
          </details>
          <details className="group rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-4">
            <summary className="cursor-pointer font-semibold text-stone-900 dark:text-white">
              ¿Para qué motores de búsqueda IA optimizas?
            </summary>
            <p className="mt-3 text-sm text-muted dark:text-stone-300">
              Optimizo para ChatGPT, Perplexity, Google AI Overview, Microsoft
              Copilot y Claude. Cada plataforma tiene factores de posicionamiento
              diferentes — optimizo tu contenido, datos estructurados y
              configuración técnica para todas.
            </p>
          </details>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-serif font-bold mb-3 text-stone-900 dark:text-white">
          Hablemos de tu estrategia digital
        </h2>
        <p className="text-muted dark:text-stone-300 mb-6">
          Cuéntame sobre tu proyecto y te propongo un plan de acción a medida.
        </p>
        <Link
          to="/contacto"
          className="inline-block bg-accent hover:bg-amber-700 text-white py-3 px-8 rounded-md font-bold transition-colors"
        >
          Contactar
        </Link>
      </section>

      {/* ── Internal Links ── */}
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-stone-200 dark:border-stone-700 pt-8">
        <Link
          to="/servicios/desarrollo-web"
          className="text-accent font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">code</span>
          Desarrollo Web
        </Link>
        <span className="hidden sm:inline text-stone-300 dark:text-stone-700">|</span>
        <Link
          to="/services/digital-strategy"
          className="text-accent font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          View in English
        </Link>
      </nav>
    </main>
  );
};

export default EstrategiaDigital;
