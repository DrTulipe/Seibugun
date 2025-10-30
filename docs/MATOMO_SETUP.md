# Guide de configuration Matomo Cloud pour Seibugun

## Étape 1 : Créer un compte Matomo Cloud gratuit

1. Allez sur https://matomo.org/start-free-analytics-trial/
2. Cliquez sur "Start Free Trial"
3. Remplissez le formulaire avec :
   - Votre email
   - Un mot de passe
   - Le nom de votre site : "Seibugun"
   - L'URL de votre site (peut être temporaire)

## Étape 2 : Récupérer vos informations de configuration

Après inscription, vous obtiendrez :
- **URL Matomo** : `https://VOTRE-SUBDOMAIN.matomo.cloud/`
- **Site ID** : généralement `1` pour le premier site
- **Code de tracking** : fourni dans l'interface

## Étape 3 : Configurer votre projet Seibugun

1. Copiez le fichier de configuration :
```bash
cp .env.example .env.local
```

2. Éditez `.env.local` avec vos vraies données :
```bash
# Remplacez par votre vraie URL Matomo Cloud
VITE_MATOMO_URL_BASE=https://VOTRE-SUBDOMAIN.matomo.cloud/

# L'ID de votre site (généralement 1)
VITE_MATOMO_SITE_ID=1

# Activez le tracking
VITE_MATOMO_DISABLED=false
```

## Étape 4 : Tester la configuration

1. Démarrez votre serveur de développement :
```bash
npm run dev
```

2. Ouvrez votre site dans le navigateur
3. Ouvrez les outils de développement (F12)
4. Allez dans l'onglet "Réseau" 
5. Naviguez sur votre site
6. Vérifiez que des requêtes sont envoyées vers votre URL Matomo

## Étape 5 : Vérifier dans Matomo

1. Connectez-vous à votre dashboard Matomo
2. Allez dans "Visiteurs" > "Temps réel"
3. Naviguez sur votre site
4. Vous devriez voir vos visites apparaître en temps réel

## Limites du plan gratuit

- ✅ 50 000 pages vues par mois
- ✅ 1 site web
- ✅ Toutes les fonctionnalités de base
- ✅ Rapports standards
- ✅ Respect RGPD
- ❌ Support email prioritaire
- ❌ Sites illimités

## Mise à niveau si nécessaire

Si vous dépassez 50k vues/mois, les plans payants commencent à 23€/mois pour 100k vues.

## Alternative : Hébergement gratuit

Si vous avez un serveur ou un hébergement web avec PHP/MySQL, vous pouvez installer Matomo gratuitement :
- Téléchargez sur https://matomo.org/download/
- Aucune limite de trafic
- Plus technique mais 100% gratuit