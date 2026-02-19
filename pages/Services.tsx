
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';

const Services: React.FC = () => {
  const { hash } = useLocation();
  const [activeSummary, setActiveSummary] = useState<{ title: string; content: string } | null>(null);

  usePageSEO({
    title: 'Servicios — Desarrollo Web y Estrategia Digital | Rodolfo Gaspary',
    description: 'Servicios de desarrollo web estratégico, auditoría SEO, optimización de conversión y asesoría digital continua para empresas en Lima, Perú y a nivel global.',
    keywords: 'servicios web lima, desarrollo web perú, auditoría SEO, optimización conversión, consultoría digital',
    canonical: '/servicios',
    lang: 'es',
    hreflang: [
      { lang: 'es', href: 'https://www.rodolfogaspary.com/servicios' },
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
            'name': 'Inicio',
            'item': 'https://www.rodolfogaspary.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Servicios',
            'item': 'https://www.rodolfogaspary.com/servicios'
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Qué incluye tu servicio de Desarrollo Web?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Incluye arquitectura de información, diseño orientado a resultados, desarrollo técnico optimizado e integración estratégica con herramientas de marketing.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo funciona la Asesoría y Optimización Continua?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Es un servicio mensual (retainer) donde revisamos métricas, realizamos ajustes tácticos y garantizamos acceso prioritario para mejoras críticas.'
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
      title: "Revisión Mensual",
      content: "Un análisis detallado de 360 grados de tu sitio web. Revisamos las métricas de Google Analytics, el comportamiento del usuario mediante mapas de calor y evaluamos el rendimiento técnico. El objetivo es identificar qué está funcionando y qué necesita ajustes tácticos inmediatos para no perder tracción."
    },
    prioritario: {
      title: "Acceso Prioritario",
      content: "Tu negocio no se detiene, y tu web tampoco debería hacerlo. Con el acceso prioritario, tus solicitudes de cambios críticos, actualizaciones de seguridad o mejoras de urgencia pasan al frente de mi lista de tareas. Tendrás una línea directa de comunicación para asegurar que cualquier imprevisto digital se resuelva en tiempo récord."
    }
  };

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto px-6 lg:px-40 py-12">
      {/* Summary Modal Overlay */}
      {activeSummary && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setActiveSummary(null)}></div>
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-md p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setActiveSummary(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="text-2xl font-black mb-4 text-primary">{activeSummary.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {activeSummary.content}
            </p>
            <button
              onClick={() => setActiveSummary(null)}
              className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold py-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="mb-20 text-center md:text-left group">
        <div
          className="relative overflow-hidden rounded-xl bg-background-dark p-8 md:p-16 flex flex-col items-center justify-center text-center border border-white/10 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(19, 91, 236, 0.25) 0%, rgba(16, 22, 34, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5pgMY4pzOSlqLqQ3gblQC5cqwkiQBOwo3YBw2kDGeo3Rx27FC7j1-dKKGjrNwFVvoX83T1ceYMNWg7oIWuy9_3mQJU5xwTCRqD0cCedUAIzM3vj1sJstqYrG7YB4Bbqe5m4MLYkSAMmqLedZ2oR5WfMZwplgaQz2CE26CplF4WImHH00LgvkFjaEuI_Z7MRhx3T7ek6jQ8j9Hd8pVR3Puv17-XXrKikC11JQB5ma4XyXX-ZC0bnb62i7HjmCWnEouRIAVzzuFuFLT")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-3xl transition-transform duration-500 group-hover:scale-[1.03]">
            Soluciones Web Orientadas a Resultados
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            No se trata de la herramienta, sino de la estrategia detrás de ella. Un enfoque en objetivos de negocio y experiencia de usuario para liderar en el mercado digital.
          </p>
        </div>
      </section>

      {/* Service Landing Pages */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Explora en detalle</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            to="/servicios/desarrollo-web"
            className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/40 hover:shadow-lg transition-all group"
          >
            <div className="size-11 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">code</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Desarrollo Web</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Sitios y aplicaciones enfocados en resultados.</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 ml-auto transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
          <Link
            to="/servicios/estrategia-digital"
            className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/40 hover:shadow-lg transition-all group"
          >
            <div className="size-11 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Estrategia Digital y SEO</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Posicionamiento, conversión y crecimiento orgánico.</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 ml-auto transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
          <Link
            to="/services/web-development"
            className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/40 hover:shadow-lg transition-all group"
          >
            <div className="size-11 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">code</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Web Development <span className="text-xs font-normal text-slate-400">(EN)</span></h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Conversion-focused websites for global clients.</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 ml-auto transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
          <Link
            to="/services/digital-strategy"
            className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/40 hover:shadow-lg transition-all group"
          >
            <div className="size-11 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Digital Strategy & SEO <span className="text-xs font-normal text-slate-400">(EN)</span></h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Data-driven growth and search optimization.</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 ml-auto transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>
      </section>


      <section id="auditoria" className="mb-24 scroll-mt-24">
        <div className="flex items-center gap-2 mb-6 text-primary animate-pulse">
          <span className="material-symbols-outlined">analytics</span>
          <span className="text-sm font-bold tracking-widest uppercase">Fase Inicial</span>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Estrategia y Auditoría Web</h2>
            <p className="text-lg text-[#616f89] dark:text-gray-400">
              Un enfoque de bajo riesgo para alinear tu presencia digital con tus objetivos comerciales antes de invertir en desarrollo.
            </p>
            <ul className="space-y-4">
              {[
                "Revisión exhaustiva de objetivos de negocio y KPIs.",
                "Análisis profundo del User Journey y fricciones.",
                "Evaluación técnica de rendimiento y SEO actual.",
                "Hoja de ruta con recomendaciones priorizadas."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="material-symbols-outlined text-primary mt-1 transition-transform group-hover:scale-125">check_circle</span>
                  <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-[#1e2533] p-8 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2a303c] flex flex-col justify-between h-full hover-lift group">
            <div>
              <p className="text-primary font-bold mb-2">Tu punto de partida estratégico</p>
              <p className="text-sm text-[#616f89] dark:text-gray-400 leading-relaxed italic border-l-2 border-primary/30 pl-4 mb-8">
                "Si no estás seguro de qué opción se adapta a tu situación, este suele ser el lugar adecuado para comenzar."
              </p>
            </div>
            <Link to="/contacto" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
              Reservar Auditoría <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Package 2: Flagship */}
      <section id="desarrollo" className="mb-24 relative p-8 md:p-12 group scroll-mt-24">
        <div className="absolute inset-0 bg-primary/5 rounded-3xl -z-10 transition-all duration-700 group-hover:bg-primary/10"></div>
        <div className="flex items-center gap-2 mb-6 text-primary">
          <span className="material-symbols-outlined group-hover:scale-115 transition-all duration-500 ease-out">rocket_launch</span>
          <span className="text-sm font-bold tracking-widest uppercase">Servicio Destacado</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 group-hover:text-primary transition-colors">Desarrollo Web Estratégico</h2>
        <p className="text-xl font-medium mb-12 max-w-2xl text-slate-700 dark:text-slate-300">
          Empezamos con las preguntas correctas. No construimos sitios web, creamos activos digitales diseñados para convertir y escalar.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#1e2533] p-8 rounded-xl shadow-md border border-primary/20 transition-transform duration-500 hover:scale-[1.02]">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500">task_alt</span> Lo que incluye
            </h3>
            <ul className="space-y-4 text-sm md:text-base">
              <li><strong>Arquitectura de Información:</strong> Estructura lógica pensada en la conversión.</li>
              <li><strong>Diseño Orientado a Resultados:</strong> Interfaz limpia sin distracciones innecesarias.</li>
              <li><strong>Desarrollo Técnico Limpio:</strong> Código optimizado para velocidad y mantenibilidad.</li>
              <li><strong>Integración Estratégica:</strong> Conexión con tus herramientas de ventas y marketing.</li>
            </ul>
          </div>
          <div className="bg-background-light dark:bg-[#101622] p-8 rounded-xl border border-dashed border-[#d1d5db] dark:border-[#2a303c] transition-transform duration-500 hover:scale-[1.02]">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#616f89]">
              <span className="material-symbols-outlined">block</span> Lo que explícitamente no incluye
            </h3>
            <ul className="space-y-4 text-sm text-[#616f89] dark:text-gray-400">
              <li>- Revisiones ilimitadas (Trabajamos sobre hitos estratégicos definidos).</li>
              <li>- Cambios basados en tendencias efímeras sin sustento de negocio.</li>
              <li>- Micro-gestión técnica diaria fuera de los objetivos del proyecto.</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/contacto" className="bg-primary text-white font-bold py-4 px-12 rounded-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95">
            Discutir Proyecto Flagship
          </Link>
        </div>
      </section>

      {/* Package 3: Optimization */}
      <section id="optimizacion" className="mb-24 scroll-mt-24">
        <div className="flex items-center gap-2 mb-6 text-primary">
          <span className="material-symbols-outlined">query_stats</span>
          <span className="text-sm font-bold tracking-widest uppercase">Crecimiento Continuo</span>
        </div>
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-xl flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-[8s] group-hover:scale-125" style={{ backgroundImage: 'radial-gradient(circle at top right, rgba(19, 91, 236, 0.5), transparent)' }}></div>
          <div className="flex-1 relative z-10">
            <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Asesoría y Optimización Continua</h2>
            <p className="text-lg text-white/70 mb-8 italic">"Para negocios que tratan su web como un sistema vivo que evoluciona con el mercado."</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setActiveSummary(summaries.revision)}
                className="text-left bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group/card"
              >
                <h4 className="font-bold text-primary mb-1 group-hover/card:translate-x-1 transition-transform">Revisión Mensual</h4>
                <p className="text-sm text-white/60">Análisis de métricas y ajuste de tácticas según rendimiento.</p>
              </button>
              <button
                onClick={() => setActiveSummary(summaries.prioritario)}
                className="text-left bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group/card"
              >
                <h4 className="font-bold text-primary mb-1 group-hover/card:translate-x-1 transition-transform">Acceso Prioritario</h4>
                <p className="text-sm text-white/60">Disponibilidad garantizada para cambios críticos y mejoras.</p>
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 relative z-10">
            <Link to="/contacto" className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all inline-block hover:scale-105 active:scale-95 shadow-xl">
              Contratar Retainer
            </Link>
          </div>
        </div>
      </section>
      {/* Internal Links */}
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm border-t border-slate-200 dark:border-slate-800 pt-8 pb-12">
        <Link
          to="/services"
          className="text-primary font-bold hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">translate</span>
          View in English
        </Link>
      </nav>
    </div>
  );
};

export default Services;
