
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="./" className="flex items-center gap-3 group">
          <Logo className="size-6" />
          <span className="font-bold">Rodolfo Gaspary © 2026</span>
        </Link>
        <div className="flex gap-8 text-sm font-bold text-slate-500">
          <a href="https://www.linkedin.com/in/rodolfo-gaspary/" className="hover:text-primary transition-colors">LinkedIn</a>
          {/* <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Facebook</a> */}
        </div>
        <div className="text-slate-400 text-sm italic">
          Consultoría Estratégica & Desarrollo Web
        </div>
      </div>
    </footer>
  );
};

export default Footer;
