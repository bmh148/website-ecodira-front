'use client';

import Image from 'next/image';
import { useState } from 'react';
import Popup from './Popup';

const products = [
  {
    id: 1,
    title: 'Pompe à chaleur',
    image: '/images/pompe-a-chaleur.jpg',
    description: 'Installation de pompes à chaleur air/eau pour un chauffage écologique et économique. Profitez d\'une solution durable pour chauffer votre maison tout en réduisant votre facture énergétique.',
  },
  {
    id: 2,
    title: 'Isolation Thermique par l\'Extérieur',
    image: '/images/isolation.png',
    description: 'Optimisez l\'efficacité énergétique de votre maison avec notre service d\'isolation thermique par l\'extérieur. Une solution complète pour réduire vos pertes de chaleur et embellir votre façade.',
  },
  {
    id: 3,
    title: 'Ballon Thermodynamique',
    image: '/images/ballon-thermodynamique.png',
    description: 'Production d\'eau chaude écologique avec nos ballons thermodynamiques. Une solution moderne et économique pour votre eau chaude sanitaire, utilisant les énergies renouvelables.',
  },
];

export default function Products() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const handleProductClick = (title: string) => {
    setSelectedProduct(title);
    setIsPopupOpen(true);
  };

  return (
    <section className="section-padding py-16 bg-gray-50" id="products">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer group"
              onClick={() => handleProductClick(product.title)}
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-6 group-hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-eco-gray">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        // title={`Demande d'information - ${selectedProduct}`}
      />
    </section>
  );
} 