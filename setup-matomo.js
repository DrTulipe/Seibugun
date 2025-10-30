#!/usr/bin/env node

/**
 * Script de configuration Matomo pour Seibugun
 * Utilisation: node setup-matomo.js
 */

const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('🎯 Configuration de Matomo pour Seibugun\n')

async function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer.trim())
        })
    })
}

async function setupMatomo() {
    try {
        console.log('Répondez aux questions suivantes pour configurer Matomo :\n')

        const matomoUrl = await askQuestion('URL de votre instance Matomo (ex: https://votre-site.matomo.cloud/): ')
        const siteId = await askQuestion('ID de votre site dans Matomo (généralement 1): ') || '1'
        const disabled = await askQuestion('Désactiver le tracking en développement ? (y/N): ')

        const envContent = `# Configuration Matomo
# Généré automatiquement par setup-matomo.js

# URL de base de votre instance Matomo (avec le slash final)
VITE_MATOMO_URL_BASE=${matomoUrl.endsWith('/') ? matomoUrl : matomoUrl + '/'}

# ID du site dans Matomo
VITE_MATOMO_SITE_ID=${siteId}

# Désactiver Matomo en développement (true/false)
VITE_MATOMO_DISABLED=${disabled.toLowerCase().startsWith('y') ? 'true' : 'false'}
`

        const envPath = path.join(process.cwd(), '.env.local')

        if (fs.existsSync(envPath)) {
            const overwrite = await askQuestion('.env.local existe déjà. Écraser ? (y/N): ')
            if (!overwrite.toLowerCase().startsWith('y')) {
                console.log('❌ Configuration annulée.')
                rl.close()
                return
            }
        }

        fs.writeFileSync(envPath, envContent)

        console.log('\n✅ Configuration Matomo créée dans .env.local')
        console.log('\n📋 Prochaines étapes :')
        console.log('1. Redémarrez votre serveur de développement : npm run dev')
        console.log('2. Testez votre site dans le navigateur')
        console.log('3. Vérifiez le tracking dans votre dashboard Matomo')
        console.log('4. Consultez docs/MATOMO_SETUP.md pour plus de détails')

    } catch (error) {
        console.error('❌ Erreur lors de la configuration :', error.message)
    } finally {
        rl.close()
    }
}

setupMatomo()