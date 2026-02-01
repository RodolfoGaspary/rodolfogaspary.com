
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isEnglish = ['/en', '/services', '/contact'].some(path =>
    location.pathname === path || location.pathname.startsWith(`${path}/`)
  );

  const isActive = (path: string) => location.pathname === path;

  // Path mapping for language switching
  const getOppositeLanguagePath = () => {
    const path = location.pathname;

    // Spanish to English
    if (path === '/') return '/en';
    if (path === '/servicios') return '/services';
    if (path === '/contacto') return '/contact';
    if (path === '/servicios/desarrollo-web') return '/services/web-development';
    if (path === '/servicios/estrategia-digital') return '/services/digital-strategy';

    // English to Spanish
    if (path === '/en') return '/';
    if (path === '/services') return '/servicios';
    if (path === '/contact') return '/contacto';
    if (path === '/services/web-development') return '/servicios/desarrollo-web';
    if (path === '/services/digital-strategy') return '/servicios/estrategia-digital';

    // Default fallback
    return isEnglish ? '/' : '/en';
  };

  const navLinks = isEnglish ? [
    { to: '/en', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ] : [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/contacto', label: 'Contacto' },
  ];

  const ctaLabel = isEnglish ? 'Start a conversation' : 'Iniciar una conversación';
  const ctaLink = isEnglish ? '/contact' : '/contacto';

  const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex items-center gap-2 ${mobile ? 'justify-center border-t border-slate-200 dark:border-slate-800 pt-4' : ''}`}>
      <Link
        to={isEnglish ? getOppositeLanguagePath() : location.pathname}
        className={`text-xs font-bold px-2 py-1 rounded transition-colors ${!isEnglish ? 'bg-primary text-white' : 'text-slate-500 hover:text-primary dark:text-slate-400'}`}
      >
        ES
      </Link>
      <span className="text-slate-300 dark:text-slate-700">|</span>
      <Link
        to={isEnglish ? location.pathname : getOppositeLanguagePath()}
        className={`text-xs font-bold px-2 py-1 rounded transition-colors ${isEnglish ? 'bg-primary text-white' : 'text-slate-500 hover:text-primary dark:text-slate-400'}`}
      >
        EN
      </Link>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to={isEnglish ? "/en" : "/"} className="flex items-center gap-3 group">
          <Logo className="size-9" />
          <span className="text-xl font-extrabold tracking-tight">Rodolfo Gaspary</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-bold transition-colors ${isActive(link.to) ? 'text-primary' : 'hover:text-primary text-slate-600 dark:text-slate-400'}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />

          <LanguageSwitcher />

          <Link to={ctaLink} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95">
            {ctaLabel}
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-slate-700 dark:text-slate-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="text-sm font-bold" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to={ctaLink} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold text-center" onClick={() => setIsMenuOpen(false)}>
            {ctaLabel}
          </Link>
          <LanguageSwitcher mobile />
        </div>
      )}
    </header>
  );
};

export default Header;
