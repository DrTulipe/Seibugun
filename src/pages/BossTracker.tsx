import React, { useState, useEffect } from 'react'
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    Chip,
    Avatar,
    LinearProgress,
    Switch,
    FormControlLabel,
    Button,
    Snackbar,
    Alert,
    IconButton,
    Checkbox,
} from '@mui/material'
import { useMatomo } from '../hooks/useMatomo'
import {
    Schedule as ScheduleIcon,
    AccessTime as TimeIcon,
    ViewModule as CompactIcon,
    ViewComfy as ExtendedIcon,
    NotificationsActive as NotificationIcon,
    NotificationsOff as NotificationOffIcon,
    VolumeUp as SoundIcon,
    Sort as SortIcon,
    Settings as SettingsIcon,
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
} from '@mui/icons-material'

// Types pour les données des boss
interface BossSpawn {
    day: number // 0 = Lundi, 1 = Mardi, etc.
    time: string // Format "HH:MM"
}

interface Boss {
    id: string
    name: string
    color: string
    spawns: BossSpawn[]
    category: 'field' | 'world' | 'radiant'
}

// Données des boss basées sur le calendrier fourni
const bossesData: Boss[] = [
    {
        id: 'karanda',
        name: 'Karanda',
        color: '#9c27b0',
        category: 'world',
        spawns: [
            { day: 0, time: '02:00' }, // Lundi
            { day: 0, time: '16:00' }, // Lundi

            { day: 1, time: '00:15' }, // Mardi
            { day: 1, time: '19:00' }, // Mardi

            { day: 2, time: '02:00' }, // Mercredi
            { day: 2, time: '09:00' }, // Mercredi
            { day: 2, time: '22:15' }, // Mercredi

            { day: 4, time: '00:15' }, // Vendredi
            { day: 4, time: '05:00' }, // Vendredi
            { day: 4, time: '12:00' }, // Vendredi
            { day: 4, time: '22:15' }, // Vendredi

            { day: 5, time: '19:00' }, // Samedi
        ]
    },
    {
        id: 'kzarka',
        name: 'Kzarka',
        color: '#ff5722',
        category: 'world',
        spawns: [
            { day: 0, time: '05:00' }, // Lundi
            { day: 0, time: '12:00' }, // Lundi
            { day: 0, time: '16:00' }, // Lundi
            { day: 0, time: '22:15' }, // Lundi

            { day: 1, time: '09:00' }, // Mardi

            { day: 2, time: '00:15' }, // Mercredi
            { day: 2, time: '05:00' }, // Mercredi
            { day: 2, time: '22:15' }, // Mercredi

            { day: 3, time: '16:00' }, // Jeudi

            { day: 4, time: '09:00' }, // Vendredi

            { day: 5, time: '00:15' }, // Samedi
            { day: 5, time: '19:00' }, // Samedi

            { day: 6, time: '02:00' }, // Dimanche
            { day: 6, time: '12:00' }, // Dimanche
            { day: 6, time: '22:15' }, // Dimanche
        ]
    },
    {
        id: 'nouver',
        name: 'Nouver',
        color: '#ff9800',
        category: 'world',
        spawns: [
            { day: 0, time: '19:00' }, // Lundi

            { day: 1, time: '05:00' }, // Mardi
            { day: 1, time: '16:00' }, // Mardi

            { day: 2, time: '12:00' }, // Mercredi

            { day: 3, time: '00:15' }, // Jeudi
            { day: 3, time: '05:00' }, // Jeudi

            { day: 4, time: '02:00' }, // Vendredi
            { day: 4, time: '16:00' }, // Vendredi

            { day: 5, time: '05:00' }, // Samedi
            { day: 5, time: '12:00' }, // Samedi

            { day: 6, time: '00:15' }, // Dimanche
            { day: 6, time: '09:00' }, // Dimanche
            { day: 6, time: '22:15' }, // Dimanche
        ]
    },
    {
        id: 'kutum',
        name: 'Kutum',
        color: '#3f51b5',
        category: 'world',
        spawns: [
            { day: 0, time: '00:15' }, // Lundi
            { day: 0, time: '09:00' }, // Lundi
            { day: 0, time: '22:15' }, // Lundi

            { day: 1, time: '02:00' }, // Mardi
            { day: 1, time: '12:00' }, // Mardi

            { day: 2, time: '16:00' }, // Mercredi

            { day: 3, time: '02:00' }, // Jeudi
            { day: 3, time: '09:00' }, // Jeudi
            { day: 3, time: '19:00' }, // Jeudi

            { day: 4, time: '22:15' }, // Vendredi

            { day: 5, time: '09:00' }, // Samedi

            { day: 6, time: '00:15' }, // Dimanche
            { day: 6, time: '05:00' }, // Dimanche
        ]
    },
    {
        id: 'offin',
        name: 'Offin',
        color: '#009688',
        category: 'world',
        spawns: [
            { day: 2, time: '16:00' }, // Mercredi

            { day: 4, time: '19:00' }, // Vendredi

            { day: 5, time: '02:00' }, // Samedi
        ]
    },
    {
        id: 'vell',
        name: 'Vell',
        color: '#2196f3',
        category: 'world',
        spawns: [
            { day: 2, time: '19:00' }, // Mercredi
            { day: 6, time: '16:00' }, // Samedi
        ]
    },
    {
        id: 'garmoth',
        name: 'Garmoth',
        color: '#f44336',
        category: 'world',
        spawns: [
            { day: 0, time: '14:00' }, // Lundi
            { day: 0, time: '23:15' }, // Lundi

            { day: 1, time: '14:00' }, // Mardi
            { day: 1, time: '23:15' }, // Mardi

            { day: 2, time: '14:00' }, // Mercredi
            { day: 2, time: '23:15' }, // Mercredi

            { day: 3, time: '14:00' }, // Jeudi
            { day: 3, time: '23:15' }, // Jeudi

            { day: 4, time: '14:00' }, // Vendredi
            { day: 4, time: '23:15' }, // Vendredi

            { day: 5, time: '14:00' }, // Samedi
            { day: 5, time: '23:15' }, // Samedi

            { day: 6, time: '14:00' }, // Dimanche
            { day: 6, time: '19:15' }, // Dimanche
            { day: 6, time: '23:15' }, // Dimanche
        ]
    },
    // Boss du Matin Radieux
    {
        id: 'bulgasal',
        name: 'Bulgasal',
        color: '#e91e63',
        category: 'radiant',
        spawns: [
            { day: 0, time: '02:00' }, // Lundi
            { day: 0, time: '22:15' }, // Lundi

            { day: 1, time: '22:15' }, // Mardi

            { day: 2, time: '00:15' }, // Mercredi
            { day: 2, time: '16:00' }, // Mercredi

            { day: 3, time: '00:15' }, // Jeudi
            { day: 3, time: '19:00' }, // Jeudi

            { day: 4, time: '02:00' }, // Vendredi
            { day: 4, time: '22:15' }, // Vendredi

            { day: 5, time: '02:00' }, // Samedi
            { day: 5, time: '19:00' }, // Samedi

            { day: 6, time: '00:15' }, // Dimanche
        ]
    },
    {
        id: 'uturi',
        name: 'Uturi',
        color: '#00bcd4',
        category: 'radiant',
        spawns: [
            { day: 0, time: '00:15' }, // Lundi
            { day: 0, time: '16:00' }, // Lundi
            { day: 0, time: '22:15' }, // Lundi

            { day: 1, time: '19:00' }, // Mardi

            { day: 2, time: '22:15' }, // Mercredi

            { day: 3, time: '16:00' }, // Jeudi
            { day: 3, time: '19:00' }, // Jeudi

            { day: 4, time: '00:15' }, // Vendredi
            { day: 4, time: '22:15' }, // Vendredi

            { day: 5, time: '16:00' }, // Samedi

            { day: 6, time: '00:15' }, // Dimanche
        ]
    },
    {
        id: 'sangoon',
        name: 'Sangoon',
        color: '#4caf50',
        category: 'radiant',
        spawns: [
            { day: 0, time: '19:00' }, // Lundi

            { day: 1, time: '00:15' }, // Mardi
            { day: 1, time: '19:00' }, // Mardi

            { day: 2, time: '22:15' }, // Mercredi

            { day: 3, time: '02:00' }, // Jeudi
            { day: 3, time: '22:15' }, // Jeudi

            { day: 4, time: '16:00' }, // Vendredi

            { day: 5, time: '00:15' }, // Samedi
            { day: 5, time: '19:00' }, // Samedi

            { day: 6, time: '02:00' }, // Dimanche
            { day: 6, time: '22:15' }, // Dimanche
        ]
    },
    {
        id: 'golden-pig-king',
        name: 'Golden Pig King',
        color: '#ffc107',
        category: 'radiant',
        spawns: [
            { day: 0, time: '19:00' }, // Lundi

            { day: 1, time: '00:15' }, // Mardi
            { day: 1, time: '16:00' }, // Mardi
            { day: 1, time: '22:15' }, // Mardi

            { day: 2, time: '02:00' }, // Mercredi

            { day: 3, time: '00:15' }, // Jeudi
            { day: 3, time: '22:15' }, // Jeudi

            { day: 4, time: '19:00' }, // Vendredi

            { day: 5, time: '00:15' }, // Samedi
            { day: 5, time: '16:00' }, // Samedi

            { day: 6, time: '02:00' }, // Dimanche
            { day: 6, time: '22:15' }, // Dimanche
        ]
    },
]

// Fonction pour calculer le prochain spawn d'un boss
const getNextSpawn = (boss: Boss): { nextSpawn: Date; timeUntil: string; progress: number } => {
    const now = new Date()
    const currentDay = now.getDay() === 0 ? 6 : now.getDay() - 1 // Convertir dimanche (0) en 6, et décaler pour commencer par lundi (0)
    const currentTime = now.getHours() * 60 + now.getMinutes()

    let nextSpawn: Date | null = null
    let minTimeDiff = Infinity

    // Chercher le prochain spawn dans les 7 prochains jours
    for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
        const checkDay = (currentDay + dayOffset) % 7
        const spawnsForDay = boss.spawns.filter(spawn => spawn.day === checkDay)

        for (const spawn of spawnsForDay) {
            const [hours, minutes] = spawn.time.split(':').map(Number)
            const spawnTime = hours * 60 + minutes

            // Si c'est aujourd'hui, vérifier que le spawn n'est pas déjà passé
            if (dayOffset === 0 && spawnTime <= currentTime) {
                continue
            }

            const spawnDate = new Date(now)
            spawnDate.setDate(spawnDate.getDate() + dayOffset)
            spawnDate.setHours(hours, minutes, 0, 0)

            const timeDiff = spawnDate.getTime() - now.getTime()
            if (timeDiff > 0 && timeDiff < minTimeDiff) {
                minTimeDiff = timeDiff
                nextSpawn = spawnDate
            }
        }
    }

    if (!nextSpawn) {
        return { nextSpawn: now, timeUntil: 'Erreur', progress: 0 }
    }

    // Calculer le temps restant
    const timeDiff = nextSpawn.getTime() - now.getTime()
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

    let timeUntil = ''
    if (days > 0) {
        timeUntil = `${days}j ${hours}h ${minutes}m`
    } else if (hours > 0) {
        timeUntil = `${hours}h ${minutes}m`
    } else {
        timeUntil = `${minutes}m`
    }

    // Calculer le progrès (0-100%) - plus proche = plus haut
    const maxTime = 7 * 24 * 60 * 60 * 1000 // 7 jours en ms
    const progress = Math.max(0, 100 - (timeDiff / maxTime * 100))

    return { nextSpawn, timeUntil, progress }
}

// Interface pour les préférences sauvegardées
interface BossTrackerPreferences {
    isCompactMode: boolean
    notificationsEnabled: boolean
    soundEnabled: boolean
    sortByUrgency: boolean
    notificationIntervals: {
        min5: boolean
        min15: boolean
        min30: boolean
    }
    configExpanded: boolean
    showClassicBosses: boolean
    showRadiantBosses: boolean
}

const STORAGE_KEY = 'seibugun-boss-tracker-preferences'

const BossTracker: React.FC = () => {
    const { trackEvent, trackPageView } = useMatomo()

    // Fonction pour charger les préférences depuis localStorage
    const loadPreferences = (): BossTrackerPreferences => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY)
            if (saved) {
                return { ...getDefaultPreferences(), ...JSON.parse(saved) }
            }
        } catch (error) {
            console.error('Erreur lors du chargement des préférences:', error)
        }
        return getDefaultPreferences()
    }

    // Fonction pour obtenir les préférences par défaut
    const getDefaultPreferences = (): BossTrackerPreferences => ({
        isCompactMode: false,
        notificationsEnabled: false,
        soundEnabled: true,
        sortByUrgency: false,
        notificationIntervals: {
            min5: false,
            min15: true,
            min30: false
        },
        configExpanded: false,
        showClassicBosses: true,
        showRadiantBosses: true
    })

    // Fonction pour sauvegarder les préférences
    const savePreferences = (preferences: BossTrackerPreferences) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des préférences:', error)
        }
    }

    // Charger les préférences au démarrage
    const initialPrefs = loadPreferences()

    const [currentTime, setCurrentTime] = useState(new Date())
    const [isCompactMode, setIsCompactMode] = useState(initialPrefs.isCompactMode)
    const [notificationsEnabled, setNotificationsEnabled] = useState(initialPrefs.notificationsEnabled)
    const [soundEnabled, setSoundEnabled] = useState(initialPrefs.soundEnabled)
    const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default')
    const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'warning' | 'error' }>({
        open: false,
        message: '',
        severity: 'success'
    })
    const [notifiedBosses, setNotifiedBosses] = useState<Set<string>>(new Set())
    const [sortByUrgency, setSortByUrgency] = useState(initialPrefs.sortByUrgency)
    const [notificationIntervals, setNotificationIntervals] = useState(initialPrefs.notificationIntervals)
    const [configExpanded, setConfigExpanded] = useState(initialPrefs.configExpanded)
    const [classicBossesExpanded, setClassicBossesExpanded] = useState(initialPrefs.showClassicBosses)
    const [radiantBossesExpanded, setRadiantBossesExpanded] = useState(initialPrefs.showRadiantBosses)

    // Fonctions wrapper avec tracking Matomo
    const handleCompactModeChange = (checked: boolean) => {
        setIsCompactMode(checked)
        trackEvent('Boss Tracker', 'Display Mode', checked ? 'Compact' : 'Extended')
    }

    const handleSoundToggle = (checked: boolean) => {
        setSoundEnabled(checked)
        trackEvent('Boss Tracker', 'Sound Settings', checked ? 'Enabled' : 'Disabled')
    }

    const handleNotificationToggle = (checked: boolean) => {
        setNotificationsEnabled(checked)
        trackEvent('Boss Tracker', 'Notifications', checked ? 'Enabled' : 'Disabled')
    }

    const handleSortByUrgencyToggle = (checked: boolean) => {
        setSortByUrgency(checked)
        trackEvent('Boss Tracker', 'Sort Mode', checked ? 'By Urgency' : 'By Name')
    }

    // Vérifier les permissions de notification au chargement et tracker la page
    useEffect(() => {
        trackPageView('Boss Tracker')

        if ('Notification' in window) {
            setNotificationPermission(Notification.permission)
        }
    }, [])

    // Sauvegarder les préférences quand elles changent
    useEffect(() => {
        const preferences: BossTrackerPreferences = {
            isCompactMode,
            notificationsEnabled,
            soundEnabled,
            sortByUrgency,
            notificationIntervals,
            configExpanded,
            showClassicBosses: classicBossesExpanded,
            showRadiantBosses: radiantBossesExpanded
        }
        savePreferences(preferences)
    }, [isCompactMode, notificationsEnabled, soundEnabled, sortByUrgency, notificationIntervals, configExpanded, classicBossesExpanded, radiantBossesExpanded])

    // Fonction pour demander la permission de notification
    const requestNotificationPermission = async () => {
        if ('Notification' in window) {
            const permission = await Notification.requestPermission()
            setNotificationPermission(permission)
            if (permission === 'granted') {
                trackEvent('Boss Tracker', 'Notification Permission', 'Granted')
                setSnackbar({
                    open: true,
                    message: 'Notifications activées ! Vous recevrez des alertes 15 minutes avant les spawns.',
                    severity: 'success'
                })
                setNotificationsEnabled(true)
            } else {
                trackEvent('Boss Tracker', 'Notification Permission', 'Denied')
                setSnackbar({
                    open: true,
                    message: 'Permission refusée. Vous pouvez l\'activer dans les paramètres de votre navigateur.',
                    severity: 'warning'
                })
            }
        }
    }

    // Fonction pour annoncer vocalement la notification
    const playNotificationSound = (minutes: number) => {
        if (soundEnabled) {
            // Utiliser l'API Web Speech Synthesis pour la voix
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(
                    `Un boss apparaît dans ${minutes} minutes`
                )

                // Configuration de la voix
                utterance.lang = 'fr-FR' // Français
                utterance.rate = 1 // Vitesse un peu plus lente pour être clair
                utterance.pitch = 1.0 // Ton normal
                utterance.volume = 0.7 // Volume modéré

                // Essayer de trouver une voix française masculine
                const voices = speechSynthesis.getVoices()
                const frenchMaleVoice = voices.find(voice =>
                    (voice.lang.startsWith('fr') || voice.lang.startsWith('fr-FR')) &&
                    (voice.name.toLowerCase().includes('male') ||
                        voice.name.toLowerCase().includes('homme') ||
                        voice.name.toLowerCase().includes('masculin') ||
                        voice.name.toLowerCase().includes('thomas') ||
                        voice.name.toLowerCase().includes('daniel') ||
                        voice.name.toLowerCase().includes('paul'))
                ) || voices.find(voice => // Fallback vers n'importe quelle voix française
                    voice.lang.startsWith('fr') || voice.lang.startsWith('fr-FR')
                )

                if (frenchMaleVoice) {
                    utterance.voice = frenchMaleVoice
                }

                // Prononcer le message
                speechSynthesis.speak(utterance)
            } else {
                // Fallback vers le son généré si Speech Synthesis n'est pas disponible
                try {
                    const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext
                    if (AudioContextClass) {
                        const audioContext = new AudioContextClass()
                        const oscillator = audioContext.createOscillator()
                        const gainNode = audioContext.createGain()

                        oscillator.connect(gainNode)
                        gainNode.connect(audioContext.destination)

                        oscillator.frequency.value = 800
                        oscillator.type = 'sine'
                        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
                        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

                        oscillator.start(audioContext.currentTime)
                        oscillator.stop(audioContext.currentTime + 0.5)
                    }
                } catch (error) {
                    console.warn('Audio Context non disponible:', error)
                }
            }
        }
    }

    // Fonction pour envoyer une notification
    const sendNotification = (boss: Boss, timeUntil: string, interval: number) => {
        const notification = new Notification(`${boss.name} spawn dans ${interval} minutes !`, {
            body: `Le boss ${boss.name} apparaîtra dans ${timeUntil}`,
            icon: '/seibugun_ico.jpg',
            tag: `${boss.id}-${interval}`,
        })

        // Fermer automatiquement après 10 secondes
        setTimeout(() => notification.close(), 10000)
    }



    // Mettre à jour l'heure chaque minute et vérifier les notifications
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())

            // Vérifier les alertes selon les intervalles sélectionnés (sons + notifications)
            if (soundEnabled || notificationsEnabled) {
                const intervals = [
                    { key: 'min5', minutes: 5, enabled: notificationIntervals.min5 },
                    { key: 'min15', minutes: 15, enabled: notificationIntervals.min15 },
                    { key: 'min30', minutes: 30, enabled: notificationIntervals.min30 }
                ]

                // Nettoyer les notifications expirées (boss qui ont déjà spawn ou sont trop loin)
                const currentNotifications = new Set<string>()

                bossesData.forEach(boss => {
                    const { timeUntil } = getNextSpawn(boss)
                    const minutesMatch = timeUntil.match(/^(\d+)m$/)

                    if (minutesMatch) {
                        const remainingMinutes = parseInt(minutesMatch[1])

                        intervals.forEach(interval => {
                            if (interval.enabled && remainingMinutes === interval.minutes) {
                                const bossKey = `${boss.id}-${interval.minutes}`
                                currentNotifications.add(bossKey)

                                if (!notifiedBosses.has(bossKey)) {
                                    // Toujours jouer le son si activé (même sans permissions de notification)
                                    if (soundEnabled) {
                                        playNotificationSound(interval.minutes)
                                    }

                                    // Envoyer la notification visuelle seulement si autorisée
                                    if (notificationsEnabled && notificationPermission === 'granted') {
                                        sendNotification(boss, timeUntil, interval.minutes)
                                    }

                                    setNotifiedBosses(prev => new Set(prev).add(bossKey))
                                }
                            } else if (interval.enabled && remainingMinutes > interval.minutes) {
                                // Garder la clé pour ce boss/intervalle si on n'a pas encore atteint le moment
                                const bossKey = `${boss.id}-${interval.minutes}`
                                currentNotifications.add(bossKey)
                            }
                        })
                    } else {
                        // Si ce n'est pas en minutes (heures/jours), garder toutes les notifications possibles
                        intervals.forEach(interval => {
                            if (interval.enabled) {
                                const bossKey = `${boss.id}-${interval.minutes}`
                                currentNotifications.add(bossKey)
                            }
                        })
                    }
                })

                // Nettoyer les notifications expirées
                setNotifiedBosses(prev => {
                    const filtered = new Set<string>()
                    prev.forEach(key => {
                        if (currentNotifications.has(key)) {
                            filtered.add(key)
                        }
                    })
                    return filtered
                })
            }
        }, 60000) // Mise à jour chaque minute

        return () => clearInterval(timer)
    }, [notificationsEnabled, notifiedBosses, soundEnabled, notificationPermission, notificationIntervals])

    const dayNames = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

    // Fonction pour convertir timeUntil en minutes pour le tri
    const getMinutesFromTimeUntil = (timeUntil: string): number => {
        const dayMatch = timeUntil.match(/(\d+)j/)
        const hourMatch = timeUntil.match(/(\d+)h/)
        const minuteMatch = timeUntil.match(/(\d+)m/)

        let totalMinutes = 0
        if (dayMatch) totalMinutes += parseInt(dayMatch[1]) * 24 * 60
        if (hourMatch) totalMinutes += parseInt(hourMatch[1]) * 60
        if (minuteMatch) totalMinutes += parseInt(minuteMatch[1])

        return totalMinutes
    }

    // Séparer les boss par catégories
    const classicBosses = bossesData.filter(boss => boss.category === 'world' || boss.category === 'field')
    const radiantBosses = bossesData.filter(boss => boss.category === 'radiant')

    // Trier chaque catégorie séparément si nécessaire
    const sortedClassicBosses = sortByUrgency
        ? [...classicBosses].sort((a, b) => {
            const timeA = getMinutesFromTimeUntil(getNextSpawn(a).timeUntil)
            const timeB = getMinutesFromTimeUntil(getNextSpawn(b).timeUntil)
            return timeA - timeB
        })
        : classicBosses

    const sortedRadiantBosses = sortByUrgency
        ? [...radiantBosses].sort((a, b) => {
            const timeA = getMinutesFromTimeUntil(getNextSpawn(a).timeUntil)
            const timeB = getMinutesFromTimeUntil(getNextSpawn(b).timeUntil)
            return timeA - timeB
        })
        : radiantBosses

    // Fonction pour rendre une card de boss
    const renderBossCard = (boss: Boss, nextSpawn: Date, timeUntil: string, progress: number, isUrgent: boolean) => (
        <Card
            sx={{
                height: '100%',
                borderLeft: `4px solid ${boss.color}`,
                backgroundColor: isUrgent ? `${boss.color}10` : 'background.paper',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    transition: 'transform 0.2s ease-in-out',
                    boxShadow: 3,
                }
            }}
        >
            <CardContent sx={{ p: isCompactMode ? 2 : 3 }}>
                {isCompactMode ? (
                    // Mode compact
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar
                                    sx={{
                                        bgcolor: boss.color,
                                        mr: 2,
                                        width: 32,
                                        height: 32,
                                        fontSize: '1rem'
                                    }}
                                >
                                    {boss.name.charAt(0)}
                                </Avatar>
                                <Box>
                                    <Typography variant="subtitle1" component="h3">
                                        {boss.name}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {nextSpawn.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography variant="h6" sx={{ color: boss.color, fontWeight: 'bold' }}>
                                    {timeUntil}
                                </Typography>
                                {isUrgent && (
                                    <Chip
                                        label="BIENTÔT !"
                                        size="small"
                                        color="error"
                                        variant="filled"
                                        sx={{ fontSize: '0.7rem' }}
                                    />
                                )}
                            </Box>
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: 'grey.300',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: boss.color,
                                }
                            }}
                        />
                    </Box>
                ) : (
                    // Mode étendu
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar
                                sx={{
                                    bgcolor: boss.color,
                                    mr: 2,
                                    width: 48,
                                    height: 48,
                                    fontSize: '1.5rem'
                                }}
                            >
                                {boss.name.charAt(0)}
                            </Avatar>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" component="h3">
                                    {boss.name}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Chip
                                        label={boss.category === 'world' ? 'World Boss' : boss.category === 'field' ? 'Field Boss' : 'Matin Radieux'}
                                        size="small"
                                        variant="outlined"
                                        sx={{ color: boss.color, borderColor: boss.color }}
                                    />
                                    {isUrgent && (
                                        <Chip
                                            label="URGENT !"
                                            size="small"
                                            color="error"
                                            variant="filled"
                                        />
                                    )}
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                Prochain spawn :
                            </Typography>
                            <Typography variant="h6" color="primary">
                                {nextSpawn.toLocaleDateString('fr-FR')} à {nextSpawn.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                Temps restant :
                            </Typography>
                            <Typography variant="h5" sx={{ color: boss.color, fontWeight: 'bold' }}>
                                {timeUntil}
                            </Typography>
                        </Box>

                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: 'grey.300',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: boss.color,
                                }
                            }}
                        />
                    </Box>
                )}
            </CardContent>
        </Card>
    )

    return (
        <Box>
            <Typography variant="h3" component="h1" gutterBottom>
                <ScheduleIcon sx={{ mr: 2, verticalAlign: 'middle' }} />
                Boss Tracker
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Suivez en temps réel les prochains spawns des boss de Black Desert Online (horaires CET/CEST)
            </Typography>

            {/* Contrôles compacts */}
            <Box sx={{ mb: 4, p: 2, backgroundColor: 'background.paper', borderRadius: 2 }}>
                {/* Barre de contrôles principale (toujours visible) */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: configExpanded ? 2 : 0 }}>
                    <IconButton
                        onClick={() => setConfigExpanded(!configExpanded)}
                        size="small"
                        sx={{ mr: 1 }}
                    >
                        <SettingsIcon />
                    </IconButton>

                    {/* Contrôles essentiels sur la ligne principale */}
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isCompactMode}
                                onChange={(e) => handleCompactModeChange(e.target.checked)}
                                size="small"
                            />
                        }
                        label={isCompactMode ? <CompactIcon fontSize="small" /> : <ExtendedIcon fontSize="small" />}
                        sx={{ mr: 1, '& .MuiFormControlLabel-label': { minWidth: 0 } }}
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                checked={sortByUrgency}
                                onChange={(e) => handleSortByUrgencyToggle(e.target.checked)}
                                size="small"
                            />
                        }
                        label={<SortIcon fontSize="small" />}
                        sx={{ mr: 1, '& .MuiFormControlLabel-label': { minWidth: 0 } }}
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                checked={soundEnabled}
                                onChange={(e) => handleSoundToggle(e.target.checked)}
                                size="small"
                            />
                        }
                        label={<SoundIcon fontSize="small" />}
                        sx={{ mr: 1, '& .MuiFormControlLabel-label': { minWidth: 0 } }}
                    />

                    {notificationPermission === 'granted' && (
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={notificationsEnabled}
                                    onChange={(e) => handleNotificationToggle(e.target.checked)}
                                    size="small"
                                />
                            }
                            label={notificationsEnabled ? <NotificationIcon fontSize="small" /> : <NotificationOffIcon fontSize="small" />}
                            sx={{ mr: 1, '& .MuiFormControlLabel-label': { minWidth: 0 } }}
                        />
                    )}

                    {notificationPermission === 'default' && (
                        <Button
                            variant="outlined"
                            startIcon={<NotificationIcon />}
                            onClick={requestNotificationPermission}
                            size="small"
                            sx={{ height: 32 }}
                        >
                            Notifs
                        </Button>
                    )}

                    <IconButton
                        onClick={() => setConfigExpanded(!configExpanded)}
                        size="small"
                        sx={{ ml: 'auto' }}
                    >
                        {configExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </Box>

                {/* Configuration détaillée (repliable) */}
                {configExpanded && (
                    <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 2 }}>
                        <Grid container spacing={3}>
                            {/* Affichage */}
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                    <ExtendedIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                                    Affichage
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={isCompactMode}
                                                onChange={(e) => setIsCompactMode(e.target.checked)}
                                                size="small"
                                            />
                                        }
                                        label={`Mode ${isCompactMode ? 'compact' : 'étendu'}`}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={sortByUrgency}
                                                onChange={(e) => setSortByUrgency(e.target.checked)}
                                                size="small"
                                            />
                                        }
                                        label="Trier par urgence"
                                    />

                                </Box>
                            </Grid>

                            {/* Notifications */}
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                    <NotificationIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                                    Notifications
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={soundEnabled}
                                                onChange={(e) => setSoundEnabled(e.target.checked)}
                                                size="small"
                                            />
                                        }
                                        label="Sons"
                                    />

                                    {notificationPermission === 'granted' ? (
                                        <>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={notificationsEnabled}
                                                        onChange={(e) => setNotificationsEnabled(e.target.checked)}
                                                        size="small"
                                                    />
                                                }
                                                label="Notifications actives"
                                            />

                                            {notificationsEnabled && (
                                                <Box sx={{ ml: 2, mt: 1 }}>
                                                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                                                        Alertes avant spawn :
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={notificationIntervals.min5}
                                                                    onChange={(e) => setNotificationIntervals(prev => ({ ...prev, min5: e.target.checked }))}
                                                                    size="small"
                                                                />
                                                            }
                                                            label="5min"
                                                        />
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={notificationIntervals.min15}
                                                                    onChange={(e) => setNotificationIntervals(prev => ({ ...prev, min15: e.target.checked }))}
                                                                    size="small"
                                                                />
                                                            }
                                                            label="15min"
                                                        />
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={notificationIntervals.min30}
                                                                    onChange={(e) => setNotificationIntervals(prev => ({ ...prev, min30: e.target.checked }))}
                                                                    size="small"
                                                                />
                                                            }
                                                            label="30min"
                                                        />
                                                    </Box>

                                                </Box>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {/* Paramètres toujours accessibles pour les sons */}
                                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                                                Alertes avant spawn (sons + notifications) :
                                            </Typography>
                                            <Box sx={{ ml: 1 }}>
                                                <Box sx={{ display: 'flex', gap: 1 }}>
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={notificationIntervals.min5}
                                                                onChange={(e) => setNotificationIntervals(prev => ({ ...prev, min5: e.target.checked }))}
                                                                size="small"
                                                            />
                                                        }
                                                        label="5min"
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={notificationIntervals.min15}
                                                                onChange={(e) => setNotificationIntervals(prev => ({ ...prev, min15: e.target.checked }))}
                                                                size="small"
                                                            />
                                                        }
                                                        label="15min"
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={notificationIntervals.min30}
                                                                onChange={(e) => setNotificationIntervals(prev => ({ ...prev, min30: e.target.checked }))}
                                                                size="small"
                                                            />
                                                        }
                                                        label="30min"
                                                    />
                                                </Box>
                                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1, fontStyle: 'italic' }}>
                                                    Les notifications visuelles nécessitent l'autorisation du navigateur
                                                </Typography>
                                            </Box>
                                            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                                <Button
                                                    variant="contained"
                                                    startIcon={<NotificationIcon />}
                                                    onClick={requestNotificationPermission}
                                                    sx={{
                                                        textTransform: 'none',
                                                        backgroundColor: 'primary.main',
                                                        '&:hover': {
                                                            backgroundColor: 'primary.dark'
                                                        }
                                                    }}
                                                >
                                                    Autoriser les notifications
                                                </Button>
                                            </Box>
                                        </>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                )}
            </Box>            <Box sx={{ mb: 3, p: 2, backgroundColor: 'background.paper', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                    <TimeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Heure actuelle : {currentTime.toLocaleTimeString('fr-FR')} - {dayNames[currentTime.getDay() === 0 ? 6 : currentTime.getDay() - 1]} {currentTime.toLocaleDateString('fr-FR')}
                </Typography>
            </Box>

            {/* Section Boss Classiques */}
            <Box sx={{ mb: 4 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: 'background.paper',
                        '&:hover': { backgroundColor: 'action.hover' },
                        mb: 2
                    }}
                    onClick={() => setClassicBossesExpanded(!classicBossesExpanded)}
                >
                    <Typography variant="h4" component="h2" sx={{ display: 'flex', alignItems: 'center', gap: 1, m: 0 }}>
                        ⚔️ Boss Classiques
                        <Chip label={sortedClassicBosses.length} size="small" color="primary" />
                    </Typography>
                    <IconButton size="small">
                        {classicBossesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </Box>

                {classicBossesExpanded && (
                    <Grid container spacing={isCompactMode ? 2 : 3}>
                        {sortedClassicBosses.map((boss) => {
                            const { nextSpawn, timeUntil, progress } = getNextSpawn(boss)

                            // Déterminer si c'est urgent (moins de 30 minutes)
                            const minutesMatch = timeUntil.match(/^(\d+)m$/)
                            const isUrgent = Boolean(minutesMatch && parseInt(minutesMatch[1]) <= 30)

                            return (
                                <Grid item xs={12} sm={isCompactMode ? 12 : 6} md={isCompactMode ? 6 : 4} key={boss.id}>
                                    {/* Le contenu de la card sera le même */}
                                    {renderBossCard(boss, nextSpawn, timeUntil, progress, isUrgent)}
                                </Grid>
                            )
                        })}
                    </Grid>
                )}
            </Box>

            {/* Section Boss Matin Radieux */}
            <Box sx={{ mb: 4 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: 'background.paper',
                        '&:hover': { backgroundColor: 'action.hover' },
                        mb: 2
                    }}
                    onClick={() => setRadiantBossesExpanded(!radiantBossesExpanded)}
                >
                    <Typography variant="h4" component="h2" sx={{ display: 'flex', alignItems: 'center', gap: 1, m: 0 }}>
                        ✨ Matin Radieux
                        <Chip label={sortedRadiantBosses.length} size="small" color="secondary" />
                    </Typography>
                    <IconButton size="small">
                        {radiantBossesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </Box>

                {radiantBossesExpanded && (
                    <Grid container spacing={isCompactMode ? 2 : 3}>
                        {sortedRadiantBosses.map((boss) => {
                            const { nextSpawn, timeUntil, progress } = getNextSpawn(boss)

                            // Déterminer si c'est urgent (moins de 30 minutes)
                            const minutesMatch = timeUntil.match(/^(\d+)m$/)
                            const isUrgent = Boolean(minutesMatch && parseInt(minutesMatch[1]) <= 30)

                            return (
                                <Grid item xs={12} sm={isCompactMode ? 12 : 6} md={isCompactMode ? 6 : 4} key={boss.id}>
                                    {renderBossCard(boss, nextSpawn, timeUntil, progress, isUrgent)}
                                </Grid>
                            )
                        })}
                    </Grid>
                )}
            </Box>



            <Box sx={{ mt: 4, p: 3, backgroundColor: 'background.paper', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                    📋 Informations utiles
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                    • <strong>Vell :</strong> Accessible uniquement via bateau ou taxi guilde
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    • Les horaires sont basés sur le fuseau horaire CET/CEST (Paris)
                </Typography>
            </Box>

            {/* Snackbar pour les messages de notification */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default BossTracker