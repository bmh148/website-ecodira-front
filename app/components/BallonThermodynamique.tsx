import Image from 'next/image';
import Link from 'next/link';

export default function BallonThermodynamique() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-center mb-8">Ballon Thermodynamique</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/ballon-thermodynamique.png"
              alt="Ballon Thermodynamique"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Pourquoi choisir un ballon thermodynamique ?</h2>
            <p className="mb-4">
              Le ballon thermodynamique est une solution écologique et économique pour produire de l'eau chaude sanitaire. Il utilise les calories de l'air pour chauffer l'eau, réduisant ainsi votre consommation d'énergie.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2"><strong>Production d'eau chaude à faible coût :</strong> Réduisez vos factures d'énergie en utilisant une source de chaleur renouvelable.</li>
              <li className="mb-2"><strong>Solution écologique :</strong> Diminuez votre empreinte carbone en optant pour une technologie respectueuse de l'environnement.</li>
              <li className="mb-2"><strong>Installation adaptée :</strong> Convient à tous les types de logements, avec une maintenance minimale.</li>
            </ul>
            <p className="mb-4">
              Envie de passer à une solution plus verte pour votre eau chaude ? Notre équipe vous accompagne dans l'installation de votre ballon thermodynamique avec des conseils personnalisés et une installation certifiée.
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