
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
        </div>
      )}
    </header>
  );
};

export default Header;
