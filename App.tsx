
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
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
