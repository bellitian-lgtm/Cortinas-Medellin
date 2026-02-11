
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="videos" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Inspiración en Movimiento</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Descubre cómo nuestras persianas y cortinas transforman la luz y el ambiente de tus espacios favoritos en tiempo real.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl"></div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-800">
            <video 
              className="w-full h-auto aspect-video object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://xzynoetnvkacrhbgknki.supabase.co/storage/v1/object/public/VIDEOS/_prompt_para_202601292043_u9ozi.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>
          
          <div className="mt-8 flex justify-center gap-8">
            <div className="flex items-center gap-2 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium uppercase tracking-wider">Alta Definición</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium uppercase tracking-wider">Diseño Real</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
