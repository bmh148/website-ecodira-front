import Image from 'next/image';
import Link from 'next/link';

export default function BallonThermodynamique() {
  return (
    <section className="bg-white">
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/ballon-thermodynamique.png"
          alt="Ballon Thermodynamique"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ballon Thermodynamique
          </h1>
        </div>
      </div>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Ballon Thermodynamique : L'eau chaude, version économique et écologique</h2>
            <h3 className="text-xl font-bold mb-4">Qu'est-ce qu'un ballon thermodynamique ?</h3>
            <p className="mb-4">
              Le ballon thermodynamique est un système de production d'eau chaude sanitaire intelligent et performant. Il fonctionne sur le même principe qu'une pompe à chaleur : il récupère les calories présentes dans l'air ambiant pour chauffer l'eau de votre foyer.
            </p>
            <p className="mb-4">
              À la fois économique, écologique et autonome, il remplace avantageusement un chauffe-eau électrique classique, tout en réduisant votre consommation énergétique.
            </p>
            <h3 className="text-xl font-bold mb-4">Pourquoi opter pour un ballon thermodynamique ?</h3>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2"><strong>Jusqu'à 70 % d'économies d'énergie :</strong> Le ballon thermodynamique consomme jusqu'à trois fois moins d'électricité qu'un chauffe-eau traditionnel. Résultat : des factures d'énergie allégées, sans compromis sur votre confort.</li>
              <li className="mb-2"><strong>Une solution respectueuse de l'environnement :</strong> En utilisant les calories naturellement présentes dans l'air, ce système réduit significativement vos émissions de CO₂. Un geste concret pour la planète, au quotidien.</li>
              <li className="mb-2"><strong>Confort d'eau chaude garanti :</strong> Le ballon s'adapte à vos besoins et assure une production d'eau chaude continue et fiable, pour toute la famille, quelle que soit la saison.</li>
              <li className="mb-2"><strong>Installation simple et rapide :</strong> Il s'installe facilement dans un garage, une buanderie ou un local technique. Aucun gros travaux à prévoir, et zéro modification de votre circuit d'eau existant.</li>
              <li className="mb-2"><strong>Valorisation de votre logement :</strong> Un équipement plus performant améliore la performance énergétique de votre habitation, ce qui est un atout en cas de revente ou de location.</li>
              <li className="mb-2"><strong>Des aides financières disponibles :</strong> L'État encourage les foyers à passer aux solutions durables. Le ballon thermodynamique est éligible à plusieurs subventions : MaPrimeRénov', CEE, TVA à taux réduit, etc.</li>
            </ul>
            <h3 className="text-xl font-bold mb-4">Pourquoi est-ce recommandé ?</h3>
            <p className="mb-4">
              Le ballon thermodynamique est aujourd'hui l'un des meilleurs compromis entre performance, économie et écologie pour la production d'eau chaude. Il s'inscrit pleinement dans la transition énergétique actuelle, et convient aussi bien en rénovation qu'en construction neuve.
            </p>
            <p className="mb-4">
              Silencieux, autonome, durable et rentable, il est fortement recommandé par les professionnels du bâtiment et de l'efficacité énergétique.
            </p>
            <h3 className="text-xl font-bold mb-4">Diagnostic Offert</h3>
            <p className="mb-4">
              Bénéficiez d'un diagnostic gratuit pour évaluer vos besoins en eau chaude et découvrir les économies potentielles. Une offre exclusive pour vous aider à faire le bon choix, sereinement.
            </p>
            <h3 className="text-xl font-bold mb-4">Besoin d'un accompagnement ?</h3>
            <p className="mb-4">
              Notre équipe vous accompagne de A à Z :
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Étude personnalisée</li>
              <li className="mb-2">Accompagnement administratif pour les aides</li>
              <li className="mb-2">Installation certifiée et garantie</li>
              <li className="mb-2">Service après-vente réactif</li>
            </ul>
            <p className="mb-4">
              Passez à une solution d'eau chaude économique, écologique et performante. Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement !
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