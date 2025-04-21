import Image from 'next/image';
import Link from 'next/link';

export default function IsolationExterieure() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-center mb-8">Isolation Extérieure</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/isolation.png"
              alt="Isolation Extérieure"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Pourquoi choisir l'isolation extérieure ?</h2>
            <p className="mb-4">
              L'isolation extérieure est une solution efficace pour améliorer les performances énergétiques de votre habitat. Elle permet de réduire les pertes de chaleur et d'augmenter le confort thermique de votre maison.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2"><strong>Réduction des pertes de chaleur :</strong> Une isolation efficace permet de conserver la chaleur à l'intérieur de votre maison, réduisant ainsi vos besoins en chauffage.</li>
              <li className="mb-2"><strong>Protection supplémentaire :</strong> Elle protège votre façade des intempéries et prolonge sa durée de vie.</li>
              <li className="mb-2"><strong>Augmentation de la valeur :</strong> Améliorer la performance énergétique de votre maison augmente sa valeur sur le marché immobilier.</li>
              <li className="mb-2"><strong>Conformité aux normes :</strong> L'isolation extérieure vous aide à respecter les normes thermiques en vigueur.</li>
            </ul>
            <p className="mb-4">
              Envie d'améliorer votre confort thermique ? Notre équipe vous accompagne dans votre projet d'isolation extérieure avec des conseils personnalisés et une installation certifiée.
            </p>
            <Link href="/contact" className="btn-primary inline-block mt-4">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 