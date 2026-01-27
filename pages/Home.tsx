import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// To use your own image: 
// 1. Create a folder named 'assets' in your project root.
// 2. Place your image file inside and name it 'headshot.jpg'.
const headshotPath = "/headshot.jpg";
const fallbackUrl = "https://ui-avatars.com/api/?name=Rodolfo+Gaspary&background=135bec&color=fff&size=512";

const Home: React.FC = () => {
  const location = useLocation();

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
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 hero-gradient">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest w-fit animate-pulse">
              Consultoría Web Independiente
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
              Ayudo a las empresas a convertir sus sitios web en <span className="text-primary">herramientas de crecimiento</span> confiables.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
              Soy Rodolfo Gaspary, consultor web independiente. Trabajo con dueños de negocios que necesitan más que un sitio web: necesitan claridad, estrategia y decisiones digitales que realmente apoyen el crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contacto" className="flex-1 sm:flex-none h-16 px-10 bg-primary text-white rounded-xl text-lg font-bold flex items-center justify-center hover:bg-blue-700 hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                Iniciar una conversación
              </Link>
              <Link to="/servicios" className="flex-1 sm:flex-none h-16 px-10 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-lg font-bold flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
                Ver cómo trabajo
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block group">
            <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out group-hover:scale-[1.02] border border-slate-200 dark:border-slate-700">
              <img 
                src={headshotPath} 
                alt="Rodolfo Gaspary" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = fallbackUrl;
                  // Only log error once to avoid console noise if asset is missing in dev
                  if (e.currentTarget.dataset.errorLogged !== 'true') {
                    console.info("Info: Local headshot.jpg not found. Using fallback avatar. Ensure 'assets/headshot.jpg' exists in your deployment.");
                    e.currentTarget.dataset.errorLogged = 'true';
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
              <span className="text-primary font-black text-3xl">+7 años</span>
              <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">De Experiencia Técnica</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">El Problema Común</span>
          <h2 className="text-3xl md:text-4xl font-black mb-10 leading-tight">
            La mayoría de los sitios web empresariales fallan por una razón simple: se construyen <span className="text-red-500">sin un objetivo comercial claro.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left pt-6">
            <div className="flex flex-col gap-4 group cursor-default">
              <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-125">
                <span className="material-symbols-outlined">design_services</span>
              </div>
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-red-600">Diseño vs. Resultados</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Muchos se enfocan en que "se vea bonito", pero olvidan que la estética sin estrategia no genera clientes. Un sitio visualmente atractivo que no convierte es un gasto, no una inversión.
              </p>
            </div>
            <div className="flex flex-col gap-4 group cursor-default">
              <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-125">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-red-600">Parálisis de Decisión</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Las empresas suelen tomar decisiones tecnológicas basadas en tendencias o suposiciones, en lugar de datos reales y necesidades del negocio, resultando en sistemas costosos y difíciles de mantener.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 flex flex-col gap-8">
              <h2 className="text-4xl font-black leading-tight tracking-tight">
                No solo construyo sitios web. Te ayudo a construir <span className="text-primary">los correctos.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Mi enfoque elimina las conjeturas y se centra en tres pilares fundamentales para garantizar que cada línea de código tenga un propósito comercial:
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { title: "Necesidades del negocio", desc: "Alineación total con tus KPIs y metas de facturación." },
                  { title: "Acciones del usuario", desc: "Diseñado para guiar al visitante hacia la conversión sin fricción." },
                  { title: "Definición del éxito", desc: "Métricas claras para medir el retorno de tu inversión digital." }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 group cursor-default">
                    <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:scale-125">check_circle</span>
                    <div>
                      <span className="font-bold block text-slate-900 dark:text-white group-hover:text-primary transition-colors">{p.title}</span>
                      <span className="text-slate-500">{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 group">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <span className="font-bold block">Consultoría Directa</span>
                    <span className="text-slate-500 text-sm">Sin intermediarios, hablas conmigo.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">code</span>
                  </div>
                  <div>
                    <span className="font-bold block">Soberanía Técnica</span>
                    <span className="text-slate-500 text-sm">Código limpio que tú controlas.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <span className="font-bold block">Enfoque en ROI</span>
                    <span className="text-slate-500 text-sm">Tu web debe ser un generador de beneficios.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-5xl font-black">¿Listo para dejar de adivinar y empezar a crecer?</h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl">
            Reserva una sesión estratégica inicial. Analizaremos tu situación actual y determinaremos el mejor camino a seguir.
          </p>
          <Link to="/contacto" className="h-16 px-12 bg-white text-primary rounded-xl text-lg font-bold flex items-center justify-center hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl">
            Contacto
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;