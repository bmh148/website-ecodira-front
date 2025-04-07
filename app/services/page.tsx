'use client';

import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <main className="min-h-screen bg-eco-cream py-16">
      <div className="container-custom mt-16">
        <h1 className="text-4xl font-bold text-eco-green mb-12 text-center">
          Nos Solutions Énergétiques
        </h1>

        <div className="space-y-24">
          {services.map((service) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                service.id % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-eco-gray flex items-center justify-center">
              <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-eco-green">
                  {service.title}
                </h2>
                <p className="text-lg text-eco-gray">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-eco-green mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary inline-block">
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Avantages */}
        <section className="mt-24 bg-white p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-eco-green mb-8 text-center">
            Pourquoi choisir ECODIRA ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Expertise Écologique</h3>
              <p className="text-eco-gray">
                Des solutions respectueuses de l'environnement pour un avenir durable
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Économies Garanties</h3>
              <p className="text-eco-gray">
                Réduisez significativement vos factures d'énergie
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="text-xl font-bold mb-2">Service Premium</h3>
              <p className="text-eco-gray">
                Installation et suivi par des experts certifiés
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 