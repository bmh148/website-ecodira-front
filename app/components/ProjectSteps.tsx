'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Visite à domicile par notre expert',
    description: 'Un expert se déplace à votre domicile pour analyser vos besoins et vous fournir un devis sur mesure, totalement gratuit.',
    icon: '/icon/handshake.svg',
    color: 'from-[#2E7D32] to-[#43A047]',
    bgPattern: 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]'
  },
  {
    id: 2,
    title: 'Analyse et traitement de votre dossier',
    description: "Nous analysons en détail votre dossier afin de définir une stratégie sur mesure pour votre projet.",
    icon: '/icon/docs.svg',
    color: 'from-[#424242] to-[#616161]',
    bgPattern: 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]'
  },
  {
    id: 3,
    title: 'Validation de votre projet',
    description: 'Nous vous présentons la solution choisie et validons ensemble chaque étape avant de démarrer les travaux.',
    icon: '/icon/check-mark.svg',
    color: 'from-[#2E7D32] to-[#43A047]',
    bgPattern: 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]'
  },
  {
    id: 4,
    title: 'Mise en place de vos équipements',
    description: "Après l'installation, nous vérifions avec vous le bon fonctionnement de chaque élément, afin que vous puissiez en profiter pleinement!",
    icon: '/icon/home-repair.svg',
    color: 'from-[#424242] to-[#616161]',
    bgPattern: 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]'
  }
];

export default function ProjectSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.step-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(46,125,50,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(74,74,74,0.1)_0%,transparent_50%)]" />
      
      <div className="container-custom relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E7D32] to-[#43A047]">Les étapes clés</span>
          <span className="text-gray-800"> de votre projet</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="step-animate opacity-0 transform translate-y-8"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative group">
                {/* Icon Circle */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-20 h-20 rounded-full bg-white shadow-xl drop-shadow-md flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-inner`}>
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={36}
                        height={36}
                        className="object-contain brightness-0 invert drop-shadow-sm"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className={`pt-16 pb-8 px-6 bg-gradient-to-br ${step.color} rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_45px_rgba(0,0,0,0.25)] transition-all duration-500 transform group-hover:-translate-y-2 h-[360px] relative overflow-hidden flex flex-col`}>
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 ${step.bgPattern} opacity-10`} />
                  
                  {/* Content */}
                  <div className="relative flex flex-col h-full">
                    <span className="inline-block text-white/80 font-medium mb-4 tracking-wider">
                      ÉTAPE {step.id}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-white/90 font-light leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 