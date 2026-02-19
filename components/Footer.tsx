
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
            <Link to={content.webDevLink} className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-base">code</span>
              {content.webDevLabel}
            </Link>
            <Link to={content.digitalStrategyLink} className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-base">trending_up</span>
              {content.digitalStrategyLabel}
            </Link>
            <Link to={content.allServicesLink} className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-base">apps</span>
              {content.allServicesLabel}
            </Link>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{content.contactTitle}</span>
            <Link to={contactLink} className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-base">chat</span>
              {content.cta}
            </Link>
            <a href="https://wa.me/913727533" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              +51 913 727 533
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-base">mail</span>
              info@rodolfogaspary.com
            </span>
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
