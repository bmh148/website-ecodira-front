'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simuler un temps de chargement pour le GIF
    const timer = setTimeout(() => {
      setIsLoading(false);
      requestAnimationFrame(() => {
        setShowContent(true);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* GIF Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/video/nature.png"
          alt="Nature background"
          fill
          priority
          className="object-cover animate-zoomInOut"
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-eco-green border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Content Overlay */}
      <div 
        className={`absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out ${
          showContent ? 'opacity-40' : 'opacity-0'
        }`}
      />

      {/* Main Content */}
      <div 
        className={`relative h-full flex items-center justify-center text-center transition-all duration-500 ease-out ${
          showContent 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Solutions Énergétiques Durables
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Découvrez nos solutions écologiques pour votre confort et votre budget
          </p>
          <a
            href="/contact"
            className="inline-block bg-eco-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-eco-green-dark transition-colors duration-300"
          >
            Demander un devis gratuit
          </a>
        </div>
      </div>
    </div>
  );
}