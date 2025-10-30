# Police Bobby Jones - Instructions

## 📝 Comment ajouter la police Bobby Jones de Canva

### 1. Télécharger la police depuis Canva
- Connectez-vous à votre compte Canva
- Allez dans vos designs ou créez un nouveau design
- Utilisez la police "Bobby Jones" dans un texte
- Téléchargez votre design en tant que fichier avec les polices incluses
- Ou utilisez un outil d'extraction de polices si disponible

### 2. Formats de police recommandés
Placez les fichiers suivants dans ce dossier :
- `BobbyJones-Regular.woff2` (format moderne, recommandé)
- `BobbyJones-Regular.woff` (fallback)
- `BobbyJones-Regular.ttf` (fallback)
- `BobbyJones-Bold.woff2` (optionnel, pour le gras)
- `BobbyJones-Bold.woff` (optionnel)
- `BobbyJones-Bold.ttf` (optionnel)

### 3. Activer la police
Une fois les fichiers placés :
1. Ouvrez le fichier `bobby-jones.css`
2. Décommentez les règles @font-face
3. Ajustez les noms de fichiers si nécessaires
4. Ajoutez l'import dans `index.html` :
   ```html
   <link rel="stylesheet" href="/fonts/bobby-jones.css" />
   ```

### 4. Alternative : Polices similaires
Si vous ne pouvez pas obtenir Bobby Jones, voici des alternatives gratuites :
- **Bebas Neue** - Style moderne et audacieux
- **Oswald** - Police condensée similaire
- **Raleway** - Élégante et lisible
- **Montserrat** - Moderne et polyvalente

### 5. Changer vers une police alternative
Pour utiliser une police Google Fonts à la place :
1. Choisissez une police sur [Google Fonts](https://fonts.google.com)
2. Modifiez `src/theme/theme.ts` :
   ```typescript
   fontFamily: '"Nom de la Police", "Roboto", sans-serif'
   ```
3. Ajoutez l'import dans `index.html` :
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Nom+de+la+Police:wght@300;400;500;700&display=swap" rel="stylesheet">
   ```