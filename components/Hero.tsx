
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://xzynoetnvkacrhbgknki.supabase.co/storage/v1/object/public/IMAGENES/A-collage-of-different-modern-window-styles-and-designs-e1742177281296.webp" 
          alt="Diseños de Ventanas Modernos" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
          Elegancia y Confort para tus Espacios
        </h1>
        <p className="text-xl md:text-2xl text-slate-100 mb-10 font-light">
          Diseño exclusivo de cortinas y persianas motorizadas en toda Colombia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#productos" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-sm text-lg font-semibold transition-all shadow-xl">
            Ver Catálogo
          </a>
          <a href="#contacto" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-sm text-lg font-semibold transition-all">
            Agendar Medición Gratis
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
