
import React from 'react';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cortinas Enrollables',
    description: 'Minimalismo y funcionalidad con telas de alta calidad, desde translucidas hasta blackout.',
    category: 'Persianas',
    image: 'https://xzynoetnvkacrhbgknki.supabase.co/storage/v1/object/public/IMAGENES/ShE_Bugan-Crema_07-2025_L1-1.png'
  },
  {
    id: '2',
    name: 'Sheer Metrópoli Marfil',
    description: 'El equilibrio perfecto entre privacidad y entrada de luz con nuestra exclusiva línea Metrópoli en tono Marfil.',
    category: 'Persianas',
    image: 'https://xzynoetnvkacrhbgknki.supabase.co/storage/v1/object/public/IMAGENES/Sh_Metropoli%20Marfil_2.jpg'
  },
  {
    id: '3',
    name: 'Cortinas en Onda Serena',
    description: 'La caída más elegante del mercado para salas y habitaciones con telas españolas.',
    category: 'Cortinas',
    image: 'https://xzynoetnvkacrhbgknki.supabase.co/storage/v1/object/public/IMAGENES/Productos_Onda%20Serena_Pentagrama-tela-cuarto-alcoba-habitacion-entre%20abierta.png'
  },
  {
    id: '5',
    name: 'Eco-Screen Reciclado',
    description: 'Tejidos fabricados con polímeros reciclados del océano, combinando diseño de vanguardia con conciencia ecológica.',
    category: 'Sostenibilidad',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600'
  }
];

const Products: React.FC = () => {
  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-slate-800 mb-4">Nuestras Colecciones</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Seleccionamos las mejores telas y mecanismos del mundo para garantizar durabilidad y estilo en cada ventana colombiana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className={`text-xs font-bold uppercase tracking-widest ${
                  product.category === 'Sostenibilidad' ? 'text-emerald-600' : 'text-amber-600'
                }`}>
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mt-2 mb-3">{product.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <button className={`font-bold text-sm border-b-2 transition-colors ${
                  product.category === 'Sostenibilidad' 
                  ? 'text-emerald-600 border-emerald-600 hover:text-emerald-700 hover:border-emerald-700' 
                  : 'text-amber-600 border-amber-600 hover:text-amber-700 hover:border-amber-700'
                }`}>
                  VER DETALLES
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
