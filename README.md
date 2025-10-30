# Seibugun

Site web de la guilde BDO (Black Desert Online) Seibugun.

## Technologies utilisées

- **React** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **Vite** - Outil de build moderne et rapide
- **Material UI** - Bibliothèque de composants React suivant les principes Material Design
- **ESLint** - Outil de linting pour maintenir la qualité du code

## Prérequis

- Node.js (version 20 ou supérieure)
- npm (version 10 ou supérieure)

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/DrTulipe/Seibugun.git
cd Seibugun
```

2. Installez les dépendances :
```bash
npm install
```

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse : `http://localhost:5173/`

Le serveur de développement inclut le Hot Module Replacement (HMR) - vos modifications seront reflétées instantanément dans le navigateur.

## Build

Pour créer une version de production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## Prévisualisation

Pour prévisualiser la version de production localement :

```bash
npm run preview
```

## Linting

Pour vérifier la qualité du code :

```bash
npm run lint
```

## Structure du projet

```
Seibugun/
├── public/          # Fichiers statiques
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── App.jsx      # Composant principal
│   ├── App.css      # Styles du composant App
│   ├── main.jsx     # Point d'entrée de l'application
│   └── index.css    # Styles globaux
├── index.html       # Template HTML
├── package.json     # Dépendances et scripts
└── vite.config.js   # Configuration Vite
```

## Composants Material UI disponibles

Le projet inclut Material UI avec les composants suivants (exemples) :
- AppBar / Toolbar - Barre de navigation
- Button - Boutons
- Card - Cartes de contenu
- Typography - Texte avec styles prédéfinis
- Container - Conteneurs responsive
- Icons - Bibliothèque d'icônes Material

Pour plus d'informations sur Material UI : [Documentation officielle](https://mui.com/)

