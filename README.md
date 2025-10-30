# Seibugun - Site Web de la Guilde BDO

Site web officiel de la guilde Seibugun pour Black Desert Online, développé avec React, TypeScript et Material-UI.

## ✨ Fonctionnalités

- 🎨 Interface moderne avec Material-UI
- 📱 Design responsive
- 🌙 Thème sombre par défaut
- ⚡ Développé avec Vite pour des performances optimales
- 🔧 TypeScript pour une meilleure maintenabilité
- 🎯 Navigation avec React Router

## 🚀 Démarrage rapide

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- npm (inclus avec Node.js)

### Installation

1. **Installer Node.js**
   - Téléchargez et installez Node.js depuis [nodejs.org](https://nodejs.org/)
   - Vérifiez l'installation avec : `node --version` et `npm --version`

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   - Le site sera accessible à l'adresse : `http://localhost:3000`

### Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🏗️ Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.tsx      # Barre de navigation
│   └── Footer.tsx      # Pied de page
├── pages/              # Pages de l'application
│   ├── Home.tsx        # Page d'accueil
│   ├── About.tsx       # À propos
│   └── Members.tsx     # Liste des membres
├── theme/              # Configuration du thème
│   └── theme.ts        # Thème Material-UI personnalisé
├── App.tsx             # Composant principal
└── main.tsx           # Point d'entrée de l'application
```

## 🎨 Technologies utilisées

- **React 18** - Framework JavaScript
- **TypeScript** - Langage typé
- **Material-UI (MUI)** - Bibliothèque de composants
- **React Router** - Routage
- **Vite** - Outil de build moderne
- **ESLint** - Linter pour la qualité du code

## 🛠️ Développement

### Personnalisation du thème

Le thème Material-UI peut être modifié dans `src/theme/theme.ts`. Le thème actuel utilise :
- Mode sombre par défaut
- Couleurs personnalisées pour la guilde
- Typographie optimisée

### Ajout de nouvelles pages

1. Créez un nouveau fichier dans `src/pages/`
2. Ajoutez la route dans `src/App.tsx`
3. Ajoutez le lien dans `src/components/Navbar.tsx`

### Déploiement

Pour construire l'application pour la production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🎮 À propos de Seibugun

Guilde FR PvE, ouverte à tous - débutants, rerolls ou anciens briscards du grind.
Au programme : Entraide, discussions détendues et progression commune.
Pas de prise de tête, juste du fun et des objectifs à partager.
Taxi Vell, Boss de guilde les dimanches à 21h, Discord avec guides en pagaille

---

*Développé avec ❤️ pour la communauté Seibugun*
