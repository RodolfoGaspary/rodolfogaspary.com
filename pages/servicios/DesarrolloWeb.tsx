import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DesarrolloWeb: React.FC = () => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    const es = document.createElement('link');
    es.rel = 'alternate'; es.hreflang = 'es'; es.href = 'https://rodolfogaspary.com/servicios/desarrollo-web';
    document.head.appendChild(es); links.push(es);
    const en = document.createElement('link');
    en.rel = 'alternate'; en.hreflang = 'en'; en.href = 'https://rodolfogaspary.com/services/web-development';
    document.head.appendChild(en); links.push(en);
    const x = document.createElement('link');
    x.rel = 'alternate'; x.hreflang = 'x-default'; x.href = 'https://rodolfogaspary.com/servicios/desarrollo-web';
    document.head.appendChild(x); links.push(x);
    return () => links.forEach(l => l.remove());
  }, []);
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-20">
      <h1 className="text-4xl font-black mb-6">Desarrollo Web — Servicios</h1>
      <p className="text-lg text-slate-700 mb-6">Sitios responsivos, plataformas de e‑commerce, optimización de rendimiento y aplicaciones web modernas construidas pensando en la conversión y la escalabilidad.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">Lo que ofrezco</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Sitios a medida optimizados para velocidad y SEO.</li>
          <li>Plataformas e‑commerce con pagos seguros y analítica integrada.</li>
          <li>Código accesible y mantenible con propiedad a largo plazo.</li>
          <li>Integración con herramientas de marketing y analítica para medir ROI.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">Para quién es</h2>
        <p className="text-slate-700">Pequeñas y medianas empresas, startups y agencias que necesitan una presencia web confiable enfocada en el crecimiento.</p>
      </section>

      <Link to="/contacto" className="inline-block bg-primary text-white py-3 px-6 rounded-lg font-bold">Contactar</Link>
    </main>
  );
};

export default DesarrolloWeb;
