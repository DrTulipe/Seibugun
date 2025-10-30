import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../utils/matomo'

// Hook pour le suivi automatique des pages
export const useMatomoPageTracker = () => {
    const location = useLocation()

    useEffect(() => {
        // Tracker chaque changement de page
        trackPageView()
    }, [location])
}

// Hook pour accéder aux fonctions Matomo
export { useMatomo } from '../utils/matomo'