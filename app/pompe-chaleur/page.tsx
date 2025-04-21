import Image from 'next/image';
import Link from 'next/link';

export default function PompeChaleur() {
  return (
    <section className="bg-white">
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/pompe-a-chaleur.jpg"
          alt="Pompe à Chaleur"
          layout="fill"
          objectFit="cover"
          objectPosition="top 20%"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Pompe à Chaleur
          </h1>
        </div>
      </div>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Qu'est-ce qu'une pompe à chaleur (PAC) ?</h2>
            <p className="mb-4">
              La pompe à chaleur, souvent abrégée PAC, est un système de chauffage innovant et écoénergétique qui capte les calories naturellement présentes dans l'air, l'eau ou le sol pour les transformer en chaleur et chauffer votre logement.
            </p>
            <p className="mb-4">
              Contrairement aux systèmes traditionnels qui produisent de la chaleur en consommant de l'énergie, la PAC utilise une énergie gratuite, renouvelable et propre. Elle fonctionne un peu comme un réfrigérateur inversé : au lieu de refroidir, elle chauffe votre intérieur tout en consommant très peu d'électricité.
            </p>
            <h2 className="text-2xl font-bold mb-4">Pourquoi choisir une pompe à chaleur ?</h2>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2"><strong>Des économies substantielles :</strong> Une PAC peut vous faire économiser jusqu'à 70 % sur votre facture de chauffage. Elle consomme peu d'électricité et produit beaucoup plus d'énergie qu'elle n'en utilise.</li>
              <li className="mb-2"><strong>Un geste concret pour la planète :</strong> En utilisant les énergies renouvelables, la pompe à chaleur réduit considérablement les émissions de CO₂. C'est un choix responsable pour un avenir plus durable.</li>
              <li className="mb-2"><strong>Polyvalence et confort toute l'année :</strong> Certains modèles de PAC offrent une fonction réversible : ils chauffent en hiver et rafraîchissent en été. Résultat : un confort optimal en toutes saisons.</li>
              <li className="mb-2"><strong>Valorisation de votre bien immobilier :</strong> Installer une pompe à chaleur améliore la performance énergétique de votre maison, ce qui augmente sa valeur sur le marché immobilier.</li>
              <li className="mb-2"><strong>Des aides financières avantageuses :</strong> L'installation d'une PAC est éligible à plusieurs dispositifs d'aides et de subventions (MaPrimeRénov', CEE, TVA réduite, etc.), rendant cet investissement encore plus attractif.</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Pourquoi est-ce recommandé ?</h2>
            <p className="mb-4">
              Aujourd'hui, les réglementations environnementales et la hausse du coût de l'énergie poussent de plus en plus de foyers à opter pour des solutions de chauffage durables. La pompe à chaleur s'impose comme l'une des solutions les plus efficaces, écologiques et rentables sur le long terme.
            </p>
            <p className="mb-4">
              Recommandée par les professionnels du bâtiment, soutenue par l'État et adoptée par des milliers de ménages chaque année, la PAC est une valeur sûre pour votre confort et vos économies.
            </p>
            <p className="mb-4">
              Envie de passer à la pompe à chaleur ? Notre équipe vous accompagne de A à Z dans votre projet : étude personnalisée, conseils, installation certifiée, suivi et maintenance.
            </p>
            <p className="mb-4">
              Faites le choix d'un confort durable, économique et respectueux de l'environnement. Contactez-nous dès aujourd'hui pour un devis gratuit !
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