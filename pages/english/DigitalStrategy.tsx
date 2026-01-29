import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DigitalStrategy: React.FC = () => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    const en = document.createElement('link');
    en.rel = 'alternate'; en.hreflang = 'en'; en.href = 'https://rodolfogaspary.com/services/digital-strategy';
    document.head.appendChild(en); links.push(en);
    const es = document.createElement('link');
    es.rel = 'alternate'; es.hreflang = 'es'; es.href = 'https://rodolfogaspary.com/servicios/estrategia-digital';
    document.head.appendChild(es); links.push(es);
    const x = document.createElement('link');
    x.rel = 'alternate'; x.hreflang = 'x-default'; x.href = 'https://rodolfogaspary.com/services/digital-strategy';
    document.head.appendChild(x); links.push(x);
    return () => links.forEach(l => l.remove());
  }, []);
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-20">
      <h1 className="text-4xl font-black mb-6">Digital Strategy & SEO — Services</h1>
      <p className="text-lg text-slate-700 mb-6">Strategy-driven digital consulting, SEO audits, conversion optimization and growth roadmaps for businesses in Lima and internationally.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">What I offer</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>SEO audits and technical fixes to improve visibility.</li>
          <li>Content and keyword strategy for local and global reach.</li>
          <li>Conversion rate optimization and experiment design.</li>
          <li>Monthly reporting and tactical roadmaps for growth.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">Who it's for</h2>
        <p className="text-slate-700">Businesses seeking measurable growth through search and conversion-focused improvements.</p>
      </section>

      <Link to="/contacto" className="inline-block bg-primary text-white py-3 px-6 rounded-lg font-bold">Get in touch</Link>
    </main>
  );
};

export default DigitalStrategy;
