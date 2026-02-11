
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">C&E</span>
          </div>
          <span className={`font-bold text-xl tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            CORTINAS <span className="font-light">& ESTILO</span>
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['Inicio', 'Productos', 'Videos', 'Nosotros', 'Contacto'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-semibold uppercase tracking-widest transition-colors hover:text-amber-500 ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
          COTIZAR YA
        </button>
      </div>
    </nav>
  );
};

export default Header;
