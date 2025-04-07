'use client';

import { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import SplashScreen from './SplashScreen';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <SplashScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <div className="content-delayed">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
} 