
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import HomeEn from './pages/english/Home';
import ServicesEn from './pages/english/Services';
import ContactEn from './pages/english/Contact';
import BlogEn from './pages/english/Blog';
import WebDevelopment from './pages/english/WebDevelopment';
import DigitalStrategy from './pages/english/DigitalStrategy';
import DesarrolloWeb from './pages/servicios/DesarrolloWeb';
import EstrategiaDigital from './pages/servicios/EstrategiaDigital';
// Spanish blog articles
import CuantoCuestaWeb from './pages/blog/CuantoCuestaWeb';
import ErroresSitioWeb from './pages/blog/ErroresSitioWeb';
import SeoVsGeo from './pages/blog/SeoVsGeo';
import EstrategiaDigitalPymes from './pages/blog/EstrategiaDigitalPymes';
// English blog articles
import WebDevCostsPeru from './pages/english/blog/WebDevCostsPeru';
import HireWebDevLatam from './pages/english/blog/HireWebDevLatam';
import WhatIsGeo from './pages/english/blog/WhatIsGeo';
import SeoDeadGeoStrategy from './pages/english/blog/SeoDeadGeoStrategy';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* English main pages */}
          <Route path="/en" element={<HomeEn />} />
          <Route path="/services" element={<ServicesEn />} />
          <Route path="/contact" element={<ContactEn />} />
          <Route path="/en/blog" element={<BlogEn />} />
          {/* English service pages (SEO landing pages) */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/digital-strategy" element={<DigitalStrategy />} />
          {/* Spanish equivalents */}
          <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/servicios/estrategia-digital" element={<EstrategiaDigital />} />
          {/* Spanish blog articles */}
          <Route path="/blog/cuanto-cuesta-pagina-web-peru" element={<CuantoCuestaWeb />} />
          <Route path="/blog/errores-sitio-web-pierde-clientes" element={<ErroresSitioWeb />} />
          <Route path="/blog/seo-vs-geo-que-necesita-tu-empresa" element={<SeoVsGeo />} />
          <Route path="/blog/estrategia-digital-pymes-lima" element={<EstrategiaDigitalPymes />} />
          {/* English blog articles */}
          <Route path="/en/blog/web-development-costs-peru-vs-us" element={<WebDevCostsPeru />} />
          <Route path="/en/blog/why-hire-web-developer-latin-america" element={<HireWebDevLatam />} />
          <Route path="/en/blog/what-is-geo-generative-engine-optimization" element={<WhatIsGeo />} />
          <Route path="/en/blog/seo-dead-seo-geo-strategy-2026" element={<SeoDeadGeoStrategy />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
