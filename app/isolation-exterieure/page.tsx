import Image from 'next/image';
import Link from 'next/link';

export default function IsolationExterieure() {
  return (
    <section className="bg-white">
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/isolation.png"
          alt="Isolation Extérieure"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Isolation Extérieure
          </h1>
        </div>
      </div>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Les avantages de l'isolation extérieure</h2>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2"><strong>Des économies d'énergie durables :</strong> Jusqu'à 25 % des pertes de chaleur se font par les murs. En optant pour l'ITE, vous réduisez vos besoins en chauffage et en climatisation, ce qui vous permet de réaliser d'importantes économies sur vos factures énergétiques.</li>
              <li className="mb-2"><strong>Un confort optimal toute l'année :</strong> Fini les murs froids l'hiver et la surchauffe l'été. L'ITE garantit une température intérieure stable et agréable, en toute saison.</li>
              <li className="mb-2"><strong>Aucune gêne à l'intérieur :</strong> Tous les travaux se font à l'extérieur, ce qui signifie zéro impact sur votre intérieur : pas besoin de déplacer vos meubles ou de vivre dans un chantier.</li>
              <li className="mb-2"><strong>Rénovation esthétique de votre façade :</strong> En plus de l'isolation, vous profitez d'un ravalement de façade sur mesure : choix de finitions, couleurs, enduits... C'est l'occasion de redonner un coup de neuf à votre maison.</li>
              <li className="mb-2"><strong>Aides financières et valorisation immobilière :</strong> L'ITE est éligible à plusieurs aides de l'État (MaPrimeRénov', CEE, TVA réduite…), rendant votre projet plus accessible. De plus, un logement bien isolé prend de la valeur sur le marché.</li>
            </ul>
            <p className="mb-4">
              Envie d'améliorer l'efficacité énergétique de votre maison ? Notre équipe vous accompagne dans votre projet avec des conseils personnalisés et une installation certifiée.
            </p>
            <p className="mb-4">
              Contactez-nous dès aujourd'hui pour un devis gratuit et découvrez comment l'isolation extérieure peut transformer votre maison.
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