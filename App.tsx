
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HomeEn from './pages/english/Home';
import ServicesEn from './pages/english/Services';
import ContactEn from './pages/english/Contact';
import WebDevelopment from './pages/english/WebDevelopment';
import DigitalStrategy from './pages/english/DigitalStrategy';
import DesarrolloWeb from './pages/servicios/DesarrolloWeb';
import EstrategiaDigital from './pages/servicios/EstrategiaDigital';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          {/* English main pages */}
          <Route path="/en" element={<HomeEn />} />
          <Route path="/services" element={<ServicesEn />} />
          <Route path="/contact" element={<ContactEn />} />
          {/* English service pages (SEO landing pages) */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/digital-strategy" element={<DigitalStrategy />} />
          {/* Spanish equivalents */}
          <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/servicios/estrategia-digital" element={<EstrategiaDigital />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
