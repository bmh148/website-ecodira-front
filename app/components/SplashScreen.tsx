'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 200); // Garde le même temps de transition
    }, 1000); // Doublé de 500ms à 1000ms

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="animate-fadeIn">
        <Image
          src="/images/logo.png"
          alt="ECODIRA Logo"
          width={600}
          height={200}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
} 