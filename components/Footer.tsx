
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C&E</span>
              </div>
              <span className="font-bold text-lg tracking-tighter">
                CORTINAS <span className="font-light">& ESTILO</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Líderes en Colombia en soluciones de protección solar y decoración de ventanas. Transformamos espacios con calidad y tecnología.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-amber-500 uppercase tracking-widest text-sm">Empresa</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nuestro Proceso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portafolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog de Diseño</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-amber-500 uppercase tracking-widest text-sm">Soporte</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manuales de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garantías</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-amber-500 uppercase tracking-widest text-sm">Contacto Directo</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +57 (601) 456-7890
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bogotá D.C., Colombia
              </li>
              <li className="mt-6 flex gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors">
                  IG
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors">
                  FB
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors">
                  WS
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-20 pt-8 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Cortinas & Estilo Colombia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
