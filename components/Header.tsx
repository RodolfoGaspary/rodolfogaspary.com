
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo className="size-9" />
          <span className="text-xl font-extrabold tracking-tight">Rodolfo Gaspary</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link 
            to="/" 
            className={`text-sm font-bold transition-colors ${isActive('/') ? 'text-primary' : 'hover:text-primary text-slate-600 dark:text-slate-400'}`}
          >
            Inicio
          </Link>
          <Link 
            to="/servicios" 
            className={`text-sm font-bold transition-colors ${isActive('/servicios') ? 'text-primary' : 'hover:text-primary text-slate-600 dark:text-slate-400'}`}
          >
            Servicios
          </Link>
          <Link 
            to="/contacto" 
            className={`text-sm font-bold transition-colors ${isActive('/contacto') ? 'text-primary' : 'hover:text-primary text-slate-600 dark:text-slate-400'}`}
          >
            Contacto
          </Link>
          <Link to="/contacto" className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95">
            Iniciar una conversación
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
          <Link to="/" className="text-sm font-bold" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link to="/servicios" className="text-sm font-bold" onClick={() => setIsMenuOpen(false)}>Servicios</Link>
          <Link to="/contacto" className="text-sm font-bold" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          <Link to="/contacto" className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold text-center" onClick={() => setIsMenuOpen(false)}>
            Iniciar una conversación
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
