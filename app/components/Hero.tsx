'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Lecture automatique impossible:", error);
      });
    }

    // Très court délai pour permettre la transition
    requestAnimationFrame(() => {
      setShowContent(true);
    });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/nature-video.mp4" type="video/mp4" />
      </video>

      <div className={`absolute inset-0 bg-black/40 transition-all duration-[1500ms] ease-in-out ${showContent ? 'opacity-40' : 'opacity-0'}`} />

      <div className={`relative h-full flex items-center justify-center text-center transition-all duration-[1500ms] ease-out ${
        showContent 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-8'
      }`}>
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