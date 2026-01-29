import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WebDevelopment: React.FC = () => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    const en = document.createElement('link');
    en.rel = 'alternate'; en.hreflang = 'en'; en.href = 'https://rodolfogaspary.com/services/web-development';
    document.head.appendChild(en); links.push(en);
    const es = document.createElement('link');
    es.rel = 'alternate'; es.hreflang = 'es'; es.href = 'https://rodolfogaspary.com/servicios/desarrollo-web';
    document.head.appendChild(es); links.push(es);
    const x = document.createElement('link');
    x.rel = 'alternate'; x.hreflang = 'x-default'; x.href = 'https://rodolfogaspary.com/services/web-development';
    document.head.appendChild(x); links.push(x);
    return () => links.forEach(l => l.remove());
  }, []);
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-20">
      <h1 className="text-4xl font-black mb-6">Web Development — Services</h1>
      <p className="text-lg text-slate-700 mb-6">Responsive websites, e-commerce platforms, performance optimization and modern web applications built with conversion and scalability in mind.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">What I offer</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Custom responsive websites optimized for speed and SEO.</li>
          <li>E‑commerce platforms with secure payment and analytics.</li>
          <li>Accessible, maintainable code with long-term ownership.</li>
          <li>Integration with marketing and analytics tools to measure ROI.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">Who it's for</h2>
        <p className="text-slate-700">Small and medium businesses, startups and agencies that need a reliable web presence focused on growth.</p>
      </section>

      <Link to="/contacto" className="inline-block bg-primary text-white py-3 px-6 rounded-lg font-bold">Get in touch</Link>
    </main>
  );
};

export default WebDevelopment;
