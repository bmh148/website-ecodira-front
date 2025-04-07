'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Services from './components/Services';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-eco-green to-eco-gray">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Solutions Énergétiques Renouvelables
            </h1>
            <p className="text-xl mb-8">
              Découvrez nos solutions écologiques pour votre maison : pompe à chaleur, 
              isolation extérieure et ballon thermodynamique.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Obtenir une estimation gratuite
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* CTA Section */}
      <section className="py-16 bg-eco-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à réduire vos factures d'énergie ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une estimation gratuite et découvrez comment nos solutions peuvent vous faire économiser.
          </p>
          <Link href="/contact" className="bg-white text-eco-green px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 inline-block">
            Demander un devis gratuit
          </Link>
        </div>
      </section>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50 is--popup">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative is--popup-body">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-eco-gray hover:text-eco-green"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Être recontacté</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nom</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Téléphone</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Je souhaite être recontacté
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
} 