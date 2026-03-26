
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isEnglish = ['/en', '/services', '/contact'].some(path =>
    location.pathname === path || location.pathname.startsWith(`${path}/`)
  ) || location.pathname.startsWith('/en/');

  const isActive = (path: string) => location.pathname === path || (path.includes('/blog') && location.pathname.startsWith(path));

  // Path mapping for language switching
  const getOppositeLanguagePath = () => {
    const path = location.pathname;

    // Spanish to English
    if (path === '/') return '/en';
    if (path === '/servicios') return '/services';
    if (path === '/contacto') return '/contact';
    if (path === '/servicios/desarrollo-web') return '/services/web-development';
    if (path === '/servicios/estrategia-digital') return '/services/digital-strategy';
    if (path === '/blog') return '/en/blog';
    if (path.startsWith('/blog/')) return '/en/blog';

    // English to Spanish
    if (path === '/en') return '/';
    if (path === '/services') return '/servicios';
    if (path === '/contact') return '/contacto';
    if (path === '/services/web-development') return '/servicios/desarrollo-web';
    if (path === '/services/digital-strategy') return '/servicios/estrategia-digital';
    if (path === '/en/blog') return '/blog';
    if (path.startsWith('/en/blog/')) return '/blog';

    // Default fallback
    return isEnglish ? '/' : '/en';
  };

  const navLinks = isEnglish ? [
    { to: '/en', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/en/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ] : [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/blog', label: 'Blog' },
    { to: '/contacto', label: 'Contacto' },
  ];

  const ctaLabel = isEnglish ? 'Start a conversation' : 'Iniciar una conversación';
  const ctaLink = isEnglish ? '/contact' : '/contacto';

  const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex items-center gap-2 ${mobile ? 'justify-center border-t border-stone-200 dark:border-stone-700 pt-4' : ''}`}>
      <Link
        to={isEnglish ? getOppositeLanguagePath() : location.pathname}
        className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${!isEnglish ? 'bg-ink text-white' : 'text-stone-500 hover:text-accent dark:text-stone-400'}`}
      >
        ES
      </Link>
      <span className="text-stone-300 dark:text-stone-600">|</span>
      <Link
        to={isEnglish ? location.pathname : getOppositeLanguagePath()}
        className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${isEnglish ? 'bg-ink text-white' : 'text-stone-500 hover:text-accent dark:text-stone-400'}`}
      >
        EN
      </Link>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-bg-dark border-b border-stone-200 dark:border-stone-700">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to={isEnglish ? "/en" : "/"} className="flex items-center gap-3 group">
          <Logo className="size-8" />
          <span className="text-lg font-semibold tracking-tight">Rodolfo Gaspary</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 ${isActive(link.to) ? 'text-accent' : 'text-stone-600 hover:text-accent dark:text-stone-400'}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="h-4 w-px bg-stone-200 dark:bg-stone-700" />

          <LanguageSwitcher />

          <Link to={ctaLink} className="bg-ink text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-stone-800 transition-colors duration-200 cursor-pointer">
            {ctaLabel}
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-stone-700 dark:text-stone-300 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-bg-dark border-b border-stone-200 dark:border-stone-700 p-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to={ctaLink} className="bg-ink text-white px-5 py-2 rounded-md text-sm font-medium text-center" onClick={() => setIsMenuOpen(false)}>
            {ctaLabel}
          </Link>
          <LanguageSwitcher mobile />
        </div>
      )}
    </header>
  );
};

export default Header;
