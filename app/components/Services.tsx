'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const services = [
  {
    id: 1,
    title: 'Pompe à Chaleur',
    description: 'Solution écologique pour le chauffage et la climatisation de votre maison. Réduisez votre consommation d\'énergie tout en préservant votre confort.',
    benefits: [
      'Économies significatives sur vos factures d\'énergie',
      'Solution respectueuse de l\'environnement',
      'Chauffage et climatisation en un seul système',
      'Installation rapide par nos experts certifiés'
    ],
    image: '/images/pompe-a-chaleur.jpg',
  },
  {
    id: 2,
    title: 'Isolation Extérieure',
    description: 'Améliorez les performances énergétiques de votre habitat avec notre solution d\'isolation extérieure. Un investissement rentable pour votre confort et vos économies.',
    benefits: [
      'Réduction des pertes de chaleur',
      'Protection supplémentaire de votre façade',
      'Augmentation de la valeur de votre bien',
      'Conformité aux normes thermiques'
    ],
    image: '/images/isolation.png',
  },
  {
    id: 3,
    title: 'Ballon Thermodynamique',
    description: 'Produisez votre eau chaude sanitaire de manière écologique et économique avec notre solution de ballon thermodynamique.',
    benefits: [
      'Production d\'eau chaude à faible coût',
      'Solution écologique et performante',
      'Installation adaptée à tous les logements',
      'Maintenance minimale'
    ],
    image: '/images/ballon-thermodynamique.png',
  }
];

export default function Services() {
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

    const animatedElements = document.querySelectorAll('.section-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-eco-cream py-12">
      <div className="container-custom py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-eco-green text-center mb-12 px-4">
          Nos Solutions Énergétiques
        </h2>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center section-animate ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-[500px] group">
                <div className="absolute inset-0 bg-eco-green/20 rounded-2xl transform -rotate-6 transition-transform group-hover:rotate-0 duration-700" />
                <div className="absolute inset-0 bg-eco-green/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-0 duration-700" />
                <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              <div className="space-y-6 glass-card p-8 rounded-2xl">
                <h2 className="text-4xl font-bold gradient-text">
                  {service.title}
                </h2>
                <p className="text-lg text-eco-gray/90 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3 animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                      <span className="text-eco-green text-xl">✓</span>
                      <span className="text-eco-gray/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="btn-primary group inline-flex items-center space-x-2 mt-6"
                >
                  <span>Demander un devis gratuit</span>
                  <svg 
                    className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 