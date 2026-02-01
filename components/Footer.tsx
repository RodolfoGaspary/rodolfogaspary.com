
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const location = useLocation();
  const isEnglish = ['/en', '/services', '/contact'].some(path =>
    location.pathname === path || location.pathname.startsWith(`${path}/`)
  );

  const content = {
    tagline: isEnglish ? 'Strategic Consultancy & Web Development in Lima, Peru.' : 'Consultoria Estrategica & Desarrollo Web en Lima, Peru.',
    servicesTitle: isEnglish ? 'Services' : 'Servicios',
    webDevLabel: isEnglish ? 'Web Development' : 'Desarrollo Web',
    webDevLink: isEnglish ? '/services/web-development' : '/servicios/desarrollo-web',
    digitalStrategyLabel: isEnglish ? 'Digital Strategy & SEO' : 'Estrategia Digital y SEO',
    digitalStrategyLink: isEnglish ? '/services/digital-strategy' : '/servicios/estrategia-digital',
    allServicesLabel: isEnglish ? 'All Services' : 'Todos los Servicios',
    allServicesLink: isEnglish ? '/services' : '/servicios',
    contactTitle: isEnglish ? 'Contact' : 'Contacto',
    cta: isEnglish ? 'Start Conversation' : 'Iniciar Conversacion',
    location: 'Lima, Peru'
  };

  const contactLink = isEnglish ? '/contact' : '/contacto';

  return (
    <footer className="py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
          <div className="flex flex-col gap-3 items-center md:items-start">
            <Link to={isEnglish ? "/en" : "/"} className="flex items-center gap-3 group">
              <Logo className="size-6" />
              <span className="font-bold">Rodolfo Gaspary</span>
            </Link>
            <p className="text-slate-400 text-sm">
              {content.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{content.servicesTitle}</span>
            <Link to={content.webDevLink} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">{content.webDevLabel}</Link>
            <Link to={content.digitalStrategyLink} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">{content.digitalStrategyLabel}</Link>
            <Link to={content.allServicesLink} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">{content.allServicesLabel}</Link>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{content.contactTitle}</span>
            <Link to={contactLink} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">{content.cta}</Link>
            <a href="https://www.linkedin.com/in/rodolfo-gaspary" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-slate-400 text-sm">Rodolfo Gaspary &copy; {new Date().getFullYear()}</span>
          <span className="text-slate-400 text-xs italic">{content.location}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
