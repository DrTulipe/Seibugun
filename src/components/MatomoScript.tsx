import { useEffect } from 'react'
import { matomoConfig } from '../utils/matomo'

/**
 * Composant pour injecter le script Matomo dans le <head>
 * Alternative au script via JavaScript pour un placement plus proche du code officiel
 */
export const MatomoScript: React.FC = () => {
    useEffect(() => {
        if (matomoConfig.disabled || typeof window === 'undefined') {
            return
        }

        // Éviter l'injection multiple
        if (document.querySelector('script[data-matomo="true"]')) {
            return
        }

        // Code Matomo officiel adapté en React
        window._paq = window._paq || []
        window._paq.push(['trackPageView'])
        window._paq.push(['enableLinkTracking'])

        const u = matomoConfig.urlBase
        window._paq.push(['setTrackerUrl', u + 'matomo.php'])
        window._paq.push(['setSiteId', matomoConfig.siteId])

        const script = document.createElement('script')
        script.setAttribute('data-matomo', 'true')
        script.async = true

        // URL CDN pour Matomo Cloud
        if (u.includes('matomo.cloud')) {
            const subdomain = u.match(/https:\/\/([^.]+)\.matomo\.cloud\//)?.[1]
            if (subdomain) {
                script.src = `https://cdn.matomo.cloud/${subdomain}.matomo.cloud/matomo.js`
            }
        } else {
            script.src = u + 'matomo.js'
        }

        document.head.appendChild(script)

        // Cleanup à la destruction du composant
        return () => {
            const matomoScript = document.querySelector('script[data-matomo="true"]')
            if (matomoScript) {
                matomoScript.remove()
            }
        }
    }, [])

    return null // Composant invisible
}