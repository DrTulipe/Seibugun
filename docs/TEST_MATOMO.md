# Test de votre intégration Matomo

Votre configuration Matomo est maintenant prête avec vos vraies données :
- **URL** : https://seibugun.matomo.cloud/
- **Site ID** : 1
- **Tracking** : Activé

## ✅ Comment tester que Matomo fonctionne

### 1. Démarrer le serveur de développement
```bash
npm run dev
```

### 2. Ouvrir les outils de développement
- Appuyez sur `F12` ou clic droit → "Inspecter"
- Allez dans l'onglet **"Réseau"** (Network)

### 3. Naviguer sur votre site
- Visitez différentes pages : Accueil, À propos, Membres
- Cliquez sur les liens de navigation

### 4. Vérifier les requêtes Matomo
Dans l'onglet Réseau, vous devriez voir :
- Des requêtes vers `seibugun.matomo.cloud`
- Le script `matomo.js` qui se charge
- Des requêtes POST vers `matomo.php` à chaque navigation

### 5. Vérifier dans votre dashboard Matomo
1. Allez sur https://seibugun.matomo.cloud/
2. Connectez-vous avec vos identifiants
3. Allez dans **"Visiteurs"** → **"Temps réel"**
4. Vous devriez voir vos visites apparaître en direct !

## 🐛 Si ça ne fonctionne pas

### Vérifications rapides :
```bash
# Vérifier que les variables d'environnement sont correctes
echo $VITE_MATOMO_URL_BASE
echo $VITE_MATOMO_SITE_ID
echo $VITE_MATOMO_DISABLED
```

### Dans la console du navigateur :
```javascript
// Vérifier que _paq existe
console.log(window._paq)

// Vérifier la configuration
console.log('Matomo URL:', 'https://seibugun.matomo.cloud/')
console.log('Site ID:', 1)
```

### Erreurs communes :
- ❌ `VITE_MATOMO_DISABLED=true` → Changez à `false`
- ❌ URL sans slash final → Doit finir par `/`
- ❌ Bloqueur de publicité → Désactivez temporairement
- ❌ Site ID incorrect → Vérifiez dans Matomo

## 🎯 Événements trackés automatiquement

Votre site track déjà :
- ✅ Chaque changement de page
- ✅ Clics sur les liens de navigation  
- ✅ Ouverture/fermeture du menu mobile

## 📊 Voir vos statistiques

Une fois que le tracking fonctionne, vous pouvez voir :
- **Visiteurs en temps réel**
- **Pages les plus visitées**
- **Sources de trafic**
- **Appareils utilisés**
- **Et bien plus !**

Connectez-vous sur https://seibugun.matomo.cloud/ pour explorer vos données.