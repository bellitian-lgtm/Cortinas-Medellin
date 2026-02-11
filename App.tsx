
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        {/* Why choose us section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Garantía Certificada</h3>
              <p className="text-slate-500 text-sm">Hasta 5 años de garantía en mecanismos y telas seleccionadas.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Instalación Rápida</h3>
              <p className="text-slate-500 text-sm">Entregamos e instalamos tus persianas en un promedio de 8 días hábiles.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Domótica Avanzada</h3>
              <p className="text-slate-500 text-sm">Controla tus cortinas desde tu celular o con comandos de voz.</p>
            </div>
          </div>
        </section>

        <Products />

        <VideoSection />

        {/* Call to Action Section */}
        <section className="py-24 bg-amber-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-amber-500 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-amber-700 rounded-full opacity-30 blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl text-white mb-8">¿Listo para transformar tu hogar?</h2>
            <p className="text-xl text-amber-50 mb-12 font-light">
              Agenda hoy mismo una visita técnica de medición totalmente gratuita en Bogotá, Medellín o Cali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-slate-50 transition-all transform hover:scale-105">
                HABLAR POR WHATSAPP
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* The AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;
