import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const EstrategiaDigital: React.FC = () => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    const es = document.createElement('link');
    es.rel = 'alternate'; es.hreflang = 'es'; es.href = 'https://rodolfogaspary.com/servicios/estrategia-digital';
    document.head.appendChild(es); links.push(es);
    const en = document.createElement('link');
    en.rel = 'alternate'; en.hreflang = 'en'; en.href = 'https://rodolfogaspary.com/services/digital-strategy';
    document.head.appendChild(en); links.push(en);
    const x = document.createElement('link');
    x.rel = 'alternate'; x.hreflang = 'x-default'; x.href = 'https://rodolfogaspary.com/servicios/estrategia-digital';
    document.head.appendChild(x); links.push(x);
    return () => links.forEach(l => l.remove());
  }, []);
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-20">
      <h1 className="text-4xl font-black mb-6">Estrategia Digital & SEO — Servicios</h1>
      <p className="text-lg text-slate-700 mb-6">Consultoría estratégica digital, auditorías SEO, optimización de conversión y hojas de ruta de crecimiento para negocios en Lima y a nivel internacional.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">Lo que ofrezco</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Auditorías SEO y correcciones técnicas para mejorar la visibilidad.</li>
          <li>Estrategia de contenidos y palabras clave para alcance local y global.</li>
          <li>Optimización de tasa de conversión y diseño de experimentos.</li>
          <li>Informes mensuales y hojas de ruta tácticas para crecimiento continuo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">Para quién es</h2>
        <p className="text-slate-700">Negocios que buscan crecimiento medible a través de búsqueda y mejoras centradas en la conversión.</p>
      </section>

      <Link to="/contacto" className="inline-block bg-primary text-white py-3 px-6 rounded-lg font-bold">Contactar</Link>
    </main>
  );
};

export default EstrategiaDigital;
