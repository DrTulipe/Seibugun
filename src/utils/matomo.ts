// Configuration Matomo
export interface MatomoConfig {
    urlBase: string
    siteId: number
    disabled?: boolean
}

export const matomoConfig: MatomoConfig = {
    urlBase: import.meta.env.VITE_MATOMO_URL_BASE || 'https://votre-instance-matomo.com/',
    siteId: parseInt(import.meta.env.VITE_MATOMO_SITE_ID || '1'),
    disabled: import.meta.env.VITE_MATOMO_DISABLED === 'true' || import.meta.env.DEV,
}

// Déclaration globale pour _paq
declare global {
    interface Window {
        _paq: any[]
    }
}

// Initialiser Matomo
export const initMatomo = (config: MatomoConfig = matomoConfig) => {
    if (config.disabled || typeof window === 'undefined') {
        return
    }

    // Initialiser _paq si ce n'est pas déjà fait
    window._paq = window._paq || []

    // Configuration de base (comme le code Matomo officiel)
    window._paq.push(['trackPageView'])
    window._paq.push(['enableLinkTracking'])

    // Configuration du tracker
    window._paq.push(['setTrackerUrl', config.urlBase + 'matomo.php'])
    window._paq.push(['setSiteId', config.siteId])

    // Charger le script Matomo avec l'URL CDN appropriée
    const script = document.createElement('script')
    const firstScript = document.getElementsByTagName('script')[0]
    script.type = 'text/javascript'
    script.async = true

    // Utiliser l'URL CDN pour Matomo Cloud ou l'URL locale pour self-hosted
    if (config.urlBase.includes('matomo.cloud')) {
        const subdomain = config.urlBase.match(/https:\/\/([^.]+)\.matomo\.cloud\//)?.[1]
        if (subdomain) {
            script.src = `https://cdn.matomo.cloud/${subdomain}.matomo.cloud/matomo.js`
        } else {
            script.src = config.urlBase + 'matomo.js'
        }
    } else {
        script.src = config.urlBase + 'matomo.js'
    }

    firstScript.parentNode?.insertBefore(script, firstScript)
}

// Fonctions utilitaires pour le tracking
export const trackPageView = (customTitle?: string) => {
    if (matomoConfig.disabled || typeof window === 'undefined' || !window._paq) {
        return
    }

    if (customTitle) {
        window._paq.push(['setDocumentTitle', customTitle])
    }
    window._paq.push(['setCustomUrl', window.location.href])
    window._paq.push(['trackPageView'])
}

export const trackEvent = (category: string, action: string, name?: string, value?: number) => {
    if (matomoConfig.disabled || typeof window === 'undefined' || !window._paq) {
        return
    }

    const eventData: (string | number)[] = [category, action]
    if (name) eventData.push(name)
    if (value !== undefined) eventData.push(value)

    window._paq.push(['trackEvent', ...eventData])
}

export const trackSiteSearch = (keyword: string, category?: string, resultsCount?: number) => {
    if (matomoConfig.disabled || typeof window === 'undefined' || !window._paq) {
        return
    }

    const searchData: (string | number)[] = [keyword]
    if (category) searchData.push(category)
    if (resultsCount !== undefined) searchData.push(resultsCount)

    window._paq.push(['trackSiteSearch', ...searchData])
}

// Hook personnalisé React pour utiliser Matomo
export const useMatomo = () => {
    return {
        trackPageView,
        trackEvent,
        trackSiteSearch,
    }
}