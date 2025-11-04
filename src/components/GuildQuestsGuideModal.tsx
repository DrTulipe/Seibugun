import React, { useEffect } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Alert,
    Chip,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton
} from '@mui/material'
import {
    ExpandMore as ExpandMoreIcon,
    Close as CloseIcon,
    Group as GroupIcon,
    CheckCircle as CheckCircleIcon,
    AccessTime as AccessTimeIcon,
    MonetizationOn as MonetizationOnIcon,
    EmojiEvents as EmojiEventsIcon
} from '@mui/icons-material'
import GuideModalActions from './GuideModalActions'
import GuideResourcesSection from './GuideResourcesSection'
import { useMatomo } from '../hooks/useMatomo'

interface GuildQuestsGuideModalProps {
    open: boolean
    onClose: () => void
}

const GuildQuestsGuideModal: React.FC<GuildQuestsGuideModalProps> = ({ open, onClose }) => {
    const { trackEvent } = useMatomo()

    // Tracker l'ouverture du guide
    useEffect(() => {
        if (open) {
            trackEvent('Guide', 'Open', 'Quêtes de Guilde')
        }
    }, [open, trackEvent])

    const missionTypes = [
        {
            type: 'Subjugation',
            description: 'Éliminer des monstres spécifiques',
            icon: '⚔️',
            examples: 'Ferrid, Ancient Puturum, Giant Mudster, Khan',
            rewards: 'Scrolls de boss de guilde, expérience de guilde élevée',
            difficulty: 'Élevée',
            duration: '2-6h'
        },
        {
            type: 'Gathering',
            description: 'Collecter des ressources spécifiques',
            icon: '🔨',
            examples: 'Minerais, Bois, Plantes, Sang',
            rewards: 'Argent, expérience de guilde, matériaux',
            difficulty: 'Faible',
            duration: '1-3h'
        },
        {
            type: 'Crafting',
            description: 'Fabriquer des objets spécifiques',
            icon: '🔧',
            examples: 'Alchimie, Cuisine, Processing, Manufacture',
            rewards: 'Argent, expérience de guilde, objets utiles',
            difficulty: 'Moyenne',
            duration: '2-4h'
        },
        {
            type: 'Trading',
            description: 'Commerce et transport',
            icon: '🚛',
            examples: 'Livraisons, Bartering, Transport de marchandises',
            rewards: 'Argent élevé, expérience de commerce',
            difficulty: 'Moyenne',
            duration: '1-4h'
        },
        {
            type: 'Fishing',
            description: 'Pêche de poissons spécifiques',
            icon: '🎣',
            examples: 'Poissons rares, Quantités importantes, Zones spécifiques',
            rewards: 'Argent, reliques, matériaux',
            difficulty: 'Faible',
            duration: '2-5h'
        },
        {
            type: 'Sea Monsters',
            description: 'Chasse aux monstres marins',
            icon: '🐙',
            examples: 'Candidum, Hekaru, Goldmont Pirate Ship',
            rewards: 'Matériaux de boss marin, argent élevé',
            difficulty: 'Très élevée',
            duration: '1-3h'
        }
    ]

    const guildSizes = [
        {
            size: 'Small (10-29 membres)',
            maxDailyMissions: 6,
            availableMissions: 'Niveaux 1-6',
            description: 'Idéal pour débuter, missions simples'
        },
        {
            size: 'Medium (30-49 membres)',
            maxDailyMissions: 8,
            availableMissions: 'Niveaux 1-12',
            description: 'Équilibre entre accessibilité et récompenses'
        },
        {
            size: 'Large (50-99 membres)',
            maxDailyMissions: 10,
            availableMissions: 'Niveaux 1-17',
            description: 'Accès aux missions les plus difficiles'
        },
        {
            size: 'Extra Large (100+ membres)',
            maxDailyMissions: 10,
            availableMissions: 'Niveaux 1-18',
            description: 'Toutes les missions disponibles'
        }
    ]

    const bossScrolls = [
        {
            boss: 'Ferrid',
            requirement: 'Missions de Subjugation',
            pieces: 4,
            frequency: 'Une fois par semaine',
            difficulty: 'Moyenne',
            loot: 'Mark of Shadow, objets TET'
        },
        {
            boss: 'Ancient Puturum',
            requirement: 'Missions de Subjugation',
            pieces: 4,
            frequency: 'Une fois par semaine',
            difficulty: 'Élevée',
            loot: 'Dim Tree Spirit Armor, objets TET'
        },
        {
            boss: 'Giant Mudster',
            requirement: 'Missions de Subjugation',
            pieces: 4,
            frequency: 'Une fois par semaine',
            difficulty: 'Élevée',
            loot: 'Muskan Shoes, objets TET'
        },
        {
            boss: 'Khan',
            requirement: 'Missions de Pêche ou Monstres Marins',
            pieces: 4,
            frequency: 'Une fois par semaine',
            difficulty: 'Très élevée',
            loot: 'Kzarka Weapon, objets TET/PEN'
        }
    ]

    const missionTips = [
        'Vérifiez les prérequis de niveau et d\'équipement avant d\'accepter',
        'Coordonnez-vous avec les membres pour les missions de groupe',
        'Préparez les matériaux nécessaires pour les missions de craft',
        'Priorisez les missions donnant des scrolls de boss',
        'Alternez entre missions faciles et difficiles',
        'Utilisez les buffs de guilde pendant les missions',
        'Les récompenses individuelles dépendent de votre contribution',
        'L\'expérience de guilde augmente avec la difficulté'
    ]

    const guildQuestResources = [
        {
            title: 'BDO Codex - Guild Missions Database',
            description: 'Base de données complète avec toutes les missions de guilde, leurs récompenses et prérequis.',
            url: 'https://bdocodex.com/us/guildquests/',
            buttonText: 'Consulter la base de données'
        },
        {
            title: 'Black Desert Foundry - Guild Guide',
            description: 'Guide complet sur les guildes, incluant les missions, boss scrolls et système de récompenses.',
            url: 'https://www.blackdesertfoundry.com/guilds-guide/',
            buttonText: 'Voir le guide détaillé'
        }
    ]

    const guildQuestVideos = [
        {
            title: 'Guide Complet des Guildes BDO',
            videoId: 'dQw4w9WgXcQ' // Placeholder - remplacer par vraie vidéo
        }
    ]

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            scroll="paper"
        >
            <DialogTitle>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GroupIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        📜 Guide des Quêtes de Guilde
                    </Typography>
                    <IconButton onClick={onClose} sx={{ color: 'grey.500' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>

            <DialogContent dividers>
                <Alert severity="info" sx={{ mb: 3 }}>
                    <Typography variant="body2">
                        <strong>Les Quêtes de Guilde</strong> sont essentielles pour développer votre guilde,
                        générer des revenus et obtenir des scrolls de boss rares. Maîtrisez le système pour maximiser vos bénéfices !
                    </Typography>
                </Alert>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom color="warning.main">
                        📖 Bases des Missions de Guilde
                    </Typography>
                    <List dense>
                        <ListItem>
                            <ListItemIcon>
                                <Typography variant="h6">📋</Typography>
                            </ListItemIcon>
                            <ListItemText
                                primary="Maximum 10 missions par jour (dépend de la taille de guilde)"
                                primaryTypographyProps={{ color: 'text.primary' }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Typography variant="h6">🔄</Typography>
                            </ListItemIcon>
                            <ListItemText
                                primary="Les missions se renouvellent toutes les 10 minutes"
                                primaryTypographyProps={{ color: 'text.primary' }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Typography variant="h6">👥</Typography>
                            </ListItemIcon>
                            <ListItemText
                                primary="Une seule mission peut être active à la fois"
                                primaryTypographyProps={{ color: 'text.primary' }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Typography variant="h6">🎯</Typography>
                            </ListItemIcon>
                            <ListItemText
                                primary="Plus la mission est difficile, meilleures sont les récompenses"
                                primaryTypographyProps={{ color: 'text.primary' }}
                            />
                        </ListItem>
                    </List>
                </Box>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Quêtes de Guilde - Types de Missions')}
                    >
                        <Typography variant="h6">🎯 Types de Missions de Guilde</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" gutterBottom>
                            Il existe 6 types principaux de missions de guilde, chacun avec ses propres caractéristiques et récompenses.
                        </Typography>

                        <TableContainer component={Paper} sx={{ mt: 2 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Type</strong></TableCell>
                                        <TableCell><strong>Description</strong></TableCell>
                                        <TableCell><strong>Exemples</strong></TableCell>
                                        <TableCell><strong>Difficulté</strong></TableCell>
                                        <TableCell><strong>Durée</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {missionTypes.map((mission, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <Typography variant="h6">{mission.icon}</Typography>
                                                    <Typography fontWeight="bold">{mission.type}</Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>{mission.description}</TableCell>
                                            <TableCell>{mission.examples}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={mission.difficulty}
                                                    color={
                                                        mission.difficulty === 'Très élevée' ? 'error' :
                                                            mission.difficulty === 'Élevée' ? 'warning' :
                                                                mission.difficulty === 'Moyenne' ? 'info' : 'success'
                                                    }
                                                    size="small"
                                                />
                                            </TableCell>
                                            <TableCell>{mission.duration}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Quêtes de Guilde - Taille de Guilde')}
                    >
                        <Typography variant="h6">👥 Taille de Guilde et Missions Disponibles</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" gutterBottom>
                            La taille de votre guilde détermine le nombre et le niveau des missions disponibles quotidiennement.
                        </Typography>

                        <TableContainer component={Paper} sx={{ mt: 2 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Taille de Guilde</strong></TableCell>
                                        <TableCell><strong>Missions/Jour</strong></TableCell>
                                        <TableCell><strong>Niveaux Disponibles</strong></TableCell>
                                        <TableCell><strong>Description</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {guildSizes.map((size, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Typography fontWeight="bold">{size.size}</Typography>
                                            </TableCell>
                                            <TableCell>{size.maxDailyMissions}</TableCell>
                                            <TableCell>{size.availableMissions}</TableCell>
                                            <TableCell>{size.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Alert severity="warning" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>Important:</strong> Les missions se renouvellent toutes les 10 minutes.
                                Une seule mission peut être active à la fois par guilde.
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Quêtes de Guilde - Boss Scrolls')}
                    >
                        <Typography variant="h6">👹 Scrolls de Boss de Guilde</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" gutterBottom>
                            Les scrolls de boss sont obtenus en complétant certaines missions de guilde et permettent d'invoquer des boss puissants
                            qui donnent des objets de très haute valeur.
                        </Typography>

                        <TableContainer component={Paper} sx={{ mt: 2 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Boss</strong></TableCell>
                                        <TableCell><strong>Prérequis</strong></TableCell>
                                        <TableCell><strong>Pièces Requises</strong></TableCell>
                                        <TableCell><strong>Fréquence</strong></TableCell>
                                        <TableCell><strong>Difficulté</strong></TableCell>
                                        <TableCell><strong>Loot Principal</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {bossScrolls.map((boss, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Typography fontWeight="bold">{boss.boss}</Typography>
                                            </TableCell>
                                            <TableCell>{boss.requirement}</TableCell>
                                            <TableCell>{boss.pieces} pièces</TableCell>
                                            <TableCell>{boss.frequency}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={boss.difficulty}
                                                    color={
                                                        boss.difficulty === 'Très élevée' ? 'error' :
                                                            boss.difficulty === 'Élevée' ? 'warning' : 'success'
                                                    }
                                                    size="small"
                                                />
                                            </TableCell>
                                            <TableCell>{boss.loot}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Alert severity="success" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>Astuce Pro:</strong> Khan est le boss le plus profitable mais nécessite des missions de pêche/monstres marins.
                                Ferrid est plus accessible et donne également d'excellentes récompenses.
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Quêtes de Guilde - Système de Récompenses')}
                    >
                        <Typography variant="h6">🏆 Système de Récompenses</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" gutterBottom color="primary.main">
                                <MonetizationOnIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
                                Récompenses Individuelles
                            </Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText
                                        primary="Argent Personnel"
                                        secondary="Jusqu'à 50% de la récompense de guilde, divisé entre les participants"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText
                                        primary="Activité de Guilde"
                                        secondary="Points pour augmenter votre contrat (100 points = +1%)"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText
                                        primary="Expérience Personnelle"
                                        secondary="EXP de combat, de compétence ou de vie selon la mission"
                                    />
                                </ListItem>
                            </List>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" gutterBottom color="warning.main">
                                <EmojiEventsIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
                                Récompenses de Guilde
                            </Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText
                                        primary="Fonds de Guilde"
                                        secondary="10k-100k+ d'argent selon la difficulté de la mission"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText
                                        primary="Expérience de Guilde"
                                        secondary="Nécessaire pour débloquer et améliorer les compétences de guilde"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText
                                        primary="Pièces de Scroll"
                                        secondary="4 pièces = 1 scroll de boss (missions spécifiques)"
                                    />
                                </ListItem>
                            </List>
                        </Box>

                        <Alert severity="success">
                            <Typography variant="body2">
                                <strong>Astuce Pro:</strong> Les missions de niveau élevé donnent proportionnellement plus de récompenses.
                                Une mission niveau 17-18 peut rapporter autant que 3-4 missions de niveau faible.
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Quêtes de Guilde - Stratégies')}
                    >
                        <Typography variant="h6">💡 Stratégies et Conseils</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6" gutterBottom color="success.main">
                            Conseils d'Optimisation
                        </Typography>
                        <List dense>
                            {missionTips.map((tip, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="success" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={tip}
                                        primaryTypographyProps={{ color: 'text.primary' }}
                                    />
                                </ListItem>
                            ))}
                        </List>

                        <Box sx={{ mt: 3, p: 2, bgcolor: 'info.light', borderRadius: 1 }}>
                            <Typography variant="h6" gutterBottom color="info.contrastText">
                                <AccessTimeIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
                                Planning Optimal des Missions
                            </Typography>
                            <Typography variant="body2" color="info.contrastText">
                                <strong>Matin (Reset) :</strong> Mission de Subjugation pour les scrolls de boss<br />
                                <strong>Après-midi :</strong> Missions de Gathering/Crafting faciles et rapides<br />
                                <strong>Soir :</strong> Missions de groupe (Sea Monsters, gros Subjugation)
                            </Typography>
                        </Box>

                        <Alert severity="info" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>Rappel:</strong> Les missions se renouvellent toutes les 10 minutes.
                                Planifiez votre journée en conséquence et gardez un œil sur les missions de haute priorité qui apparaissent.
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <GuideResourcesSection
                    topic="des quêtes de guilde"
                    resources={guildQuestResources}
                    videos={guildQuestVideos}
                />

                <Box sx={{
                    mt: 3,
                    p: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    border: '2px solid',
                    borderColor: 'warning.main'
                }}>
                    <Typography variant="h6" gutterBottom color="warning.main">
                        📊 Résumé Quêtes de Guilde
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        <strong>Priorités Essentielles :</strong><br />
                        1. Scrolls de boss (Ferrid, Puturum, Mudster, Khan)<br />
                        2. Missions de niveau élevé pour l'EXP de guilde<br />
                        3. Coordination avec les membres actifs<br />
                        4. Utilisation des buffs de guilde pendant les missions<br />
                        <strong>Rentabilité :</strong> Les scrolls de boss peuvent rapporter plusieurs milliards d'argent
                    </Typography>
                </Box>
            </DialogContent>

            <GuideModalActions
                onClose={onClose}
                guideName="Quêtes de Guilde"
            />
        </Dialog>
    )
}

export default GuildQuestsGuideModal