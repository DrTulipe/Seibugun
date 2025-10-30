#!/bin/bash

# Script de déploiement pour OVH
# Usage: ./deploy.sh

echo "🚀 Déploiement de Seibugun sur OVH"

# Variables (à modifier selon vos informations OVH)
FTP_HOST="ftp.seibugun.fr"
FTP_USER="votre_login_ftp"
REMOTE_DIR="/www"

echo "📦 Construction du projet..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build réussi"
    echo "📤 Upload des fichiers via rsync..."
    
    # Utiliser rsync via SSH si disponible
    rsync -avz --delete dist/ $FTP_USER@$FTP_HOST:$REMOTE_DIR/
    
    echo "🎉 Déploiement terminé !"
    echo "🌐 Votre site est accessible sur : https://seibugun.fr"
else
    echo "❌ Erreur lors du build"
    exit 1
fi