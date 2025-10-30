# Intégration Matomo pour Seibugun

Ce projet intègre Matomo pour l'analyse du trafic et des interactions utilisateur.

## Configuration

### 1. Variables d'environnement

Copiez le fichier `.env.example` vers `.env.local` et configurez les variables Matomo :

```bash
cp .env.example .env.local
```

Puis éditez `.env.local` avec vos paramètres :

```bash
# Configuration Matomo
VITE_MATOMO_URL_BASE=https://votre-instance-matomo.com/
VITE_MATOMO_SITE_ID=1
VITE_MATOMO_DISABLED=false
```

### 2. Paramètres requis

- **VITE_MATOMO_URL_BASE** : URL de base de votre instance Matomo (avec le slash final)
- **VITE_MATOMO_SITE_ID** : ID du site configuré dans Matomo
- **VITE_MATOMO_DISABLED** : `true` pour désactiver le tracking, `false` pour l'activer

## Fonctionnalités implémentées

### Suivi automatique des pages
- Tracking automatique de chaque changement de page/route
- Intégré dans `App.tsx` via le hook `useMatomoPageTracker`

### Suivi des événements
- Clicks sur les éléments de navigation
- Ouverture/fermeture du menu mobile
- Événements personnalisés dans vos composants

### API disponible

#### Hook `useMatomo()`
```tsx
import { useMatomo } from '../hooks/useMatomo'

const { trackEvent, trackPageView, trackSiteSearch } = useMatomo()

// Tracker un événement
trackEvent('Category', 'Action', 'Name', value)

// Tracker une vue de page personnalisée
trackPageView('Titre personnalisé')

// Tracker une recherche
trackSiteSearch('mot-clé', 'catégorie')
```

#### Fonctions utilitaires directes
```tsx
import { trackEvent, trackPageView, trackSiteSearch } from '../utils/matomo'

// Même API que le hook, mais utilisable en dehors des composants React
```

## Exemples d'utilisation

### Dans un composant React
```tsx
import { useMatomo } from '../hooks/useMatomo'

const MonComposant = () => {
  const { trackEvent } = useMatomo()
  
  const handleButtonClick = () => {
    trackEvent('Interaction', 'Button Click', 'Call to Action')
    // Votre logique ici
  }
  
  return (
    <button onClick={handleButtonClick}>
      Cliquez-moi
    </button>
  )
}
```

### Pour tracker des événements personnalisés
```tsx
// Suivi d'un téléchargement
trackEvent('Download', 'File', 'document.pdf')

// Suivi d'un partage social
trackEvent('Social', 'Share', 'Facebook')

// Suivi d'une inscription newsletter
trackEvent('Newsletter', 'Subscribe', 'Footer Form')
```

## Configuration avancée

### Désactiver en développement
Le tracking est automatiquement désactivé si :
- `VITE_MATOMO_DISABLED=true` dans les variables d'environnement
- L'application est en mode développement (`import.meta.env.DEV`)

### Personnaliser la configuration Matomo
Éditez `src/utils/matomo.ts` pour modifier :
- Les paramètres de configuration de base
- Ajouter des options supplémentaires
- Modifier le comportement du tracking

## Conformité RGPD

Pour la conformité RGPD, vous pouvez :

1. **Désactiver les cookies** : Modifiez `initMatomo()` dans `src/utils/matomo.ts` :
```javascript
window._paq.push(['disableCookies'])
```

2. **Respecter les préférences Do Not Track** :
```javascript
window._paq.push(['setDoNotTrack', true])
```

3. **Implémenter un système de consentement** : Intégrez avec votre banner de cookies existant.

## Dépannage

### Le tracking ne fonctionne pas
1. Vérifiez que les variables d'environnement sont correctement définies
2. Vérifiez que `VITE_MATOMO_DISABLED` n'est pas à `true`
3. Vérifiez l'URL et l'ID du site dans la console de votre navigateur
4. Assurez-vous que votre instance Matomo est accessible

### Erreurs dans la console
- Vérifiez que l'URL de Matomo est correcte et accessible
- Vérifiez les politiques CORS de votre instance Matomo
- Assurez-vous que le site est configuré dans Matomo

### Tests
Pour tester le tracking :
1. Ouvrez les outils de développeur de votre navigateur
2. Allez dans l'onglet Réseau
3. Naviguez sur votre site
4. Cherchez les requêtes vers votre instance Matomo

## Support

Pour plus d'informations sur Matomo :
- [Documentation officielle Matomo](https://matomo.org/docs/)
- [API JavaScript Matomo](https://developer.matomo.org/guides/tracking-javascript-guide)