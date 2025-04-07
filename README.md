# ECODIRA - Site Web

Site web de présentation pour ECODIRA, spécialiste des énergies renouvelables.

## Technologies utilisées

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Prérequis

- Node.js 18.17 ou supérieur
- npm ou yarn

## Installation

1. Cloner le repository :
```bash
git clone [URL_DU_REPO]
cd ecodira
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du projet

```
ecodira/
├── app/
│   ├── components/     # Composants réutilisables
│   ├── contact/        # Page de contact
│   ├── services/       # Page des services
│   ├── globals.css     # Styles globaux
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── public/
│   └── images/         # Images du site
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Fonctionnalités

- Design responsive
- Formulaire de contact
- Popup de collecte de leads
- Présentation des services
- Optimisation SEO
- Conformité GDPR

## Déploiement

Le site peut être déployé sur Vercel avec la commande :
```bash
npm run build
```

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence

Tous droits réservés © ECODIRA 