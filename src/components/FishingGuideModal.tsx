import React, { useEffect } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Box,
    Divider,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton,
    Alert,
} from '@mui/material'
import {
    Close as CloseIcon,
    ExpandMore as ExpandMoreIcon,
    Waves as FishingIcon,
} from '@mui/icons-material'
import GuideModalActions from './GuideModalActions'
import GuideResourcesSection from './GuideResourcesSection'
import { useMatomo } from '../hooks/useMatomo'

interface FishingGuideModalProps {
    open: boolean
    onClose: () => void
}

const FishingGuideModal: React.FC<FishingGuideModalProps> = ({ open, onClose }) => {
    const { trackEvent } = useMatomo()

    // Tracker l'ouverture du guide
    useEffect(() => {
        if (open) {
            trackEvent('Guide', 'Open', 'Pêche')
        }
    }, [open, trackEvent])

    const fishingRods = [
        {
            nom: 'Canne à pêche Balenos +10',
            usage: 'AFK Fishing',
            durability: '50-100',
            effet: 'Temps de pêche automatique -25%',
            reparable: 'Oui',
            améliorable: 'Jusqu\'au +10',
        },
        {
            nom: 'Canne à pêche Triple-Float',
            usage: 'Pêche Active',
            durability: '30',
            effet: 'Peut pêcher 1-4 poissons par lancer',
            reparable: 'Non',
            améliorable: 'Non',
        },
        {
            nom: 'Canne à pêche Dorée',
            usage: 'Pêche Active',
            durability: '100',
            effet: 'Vitesse de pêche +3',
            reparable: 'Non',
            améliorable: 'Non',
        },
        {
            nom: 'Canne à pêche Mediah +10',
            usage: 'Poissons rares',
            durability: '50',
            effet: 'Chance de pêcher des poissons rares +5%',
            reparable: 'Oui',
            améliorable: 'Jusqu\'au +10',
        },
        {
            nom: 'Canne à pêche Calpheon +10',
            usage: 'Gros poissons',
            durability: '50',
            effet: 'Chance de pêcher des gros poissons +11%',
            reparable: 'Oui',
            améliorable: 'Jusqu\'au +10',
        },
    ]

    const fishingSpots = [
        {
            lieu: 'Plage de Velia/Coastal Cliff',
            poissons: 'Corvina Jaune (8M) • Blue Bat Star (16M) • Silver Beltfish (80M)',
            type: '30/10 spot',
            recommande: 'Oui - Plus consistant',
        },
        {
            lieu: 'Îles Cron Profondeur 4',
            poissons: 'Corvina Jaune (8M) • Blue Bat Star (16M) • Blue Lobster (830M)',
            type: '30/10 spot',
            recommande: 'Non - Moins consistant',
        },
        {
            lieu: 'Îles Sausan Profondeur 3-4',
            poissons: 'Corvina Jaune (8M) • Blue Bat Star (16M) • Barreleye (860M)',
            type: '30/10 spot',
            recommande: 'Non - Moins consistant',
        },
        {
            lieu: 'Mer de Valencia Profondeur 5',
            poissons: 'Corvina Jaune (8M) • Blue Bat Star (16M) • Migaloo (920M)',
            type: '30/10 spot',
            recommande: 'Non - Moins consistant',
        },
    ]

    const masteryGear = [
        {
            item: 'Accessoires Floramos (x3)',
            mastery: '+150 chacun (450 total)',
            obtention: 'Saison + Quête familiale',
            cout: 'Gratuit',
        },
        {
            item: 'Équipement Loggia PEN',
            mastery: '+280 chacun',
            obtention: 'NPC Camellia Loggia/Zaaira',
            cout: '1M silver chacun',
        },
        {
            item: 'Chaise de Pêche Manos PEN',
            mastery: '+400',
            obtention: 'Craft Processing (L)',
            cout: 'Très élevé',
        },
        {
            item: 'Vêtements de Pêcheur Manos PEN',
            mastery: '+400',
            obtention: 'Craft Processing (L)',
            cout: 'Très élevé',
        },
    ]

    const fishGrades = [
        { grade: 'Blanc', valeur: 'Très faible', utilisation: 'Recycler ou sécher' },
        { grade: 'Vert', valeur: 'Faible', utilisation: 'Vendre ou sécher' },
        { grade: 'Bleu', valeur: 'Moyenne', utilisation: 'Vendre (Livraison Impériale 250%)' },
        { grade: 'Jaune', valeur: 'Bonne', utilisation: 'Vendre (Livraison Impériale 250%)' },
        { grade: 'Rouge (Poissons rouges)', valeur: 'Excellente', utilisation: 'Vendre avec bonus distance max' },
    ]

    const setupSteps = [
        { icon: '🎣', text: 'Équiper votre canne à pêche dans l\'emplacement Lifeskill' },
        { icon: '🌊', text: 'Approchez-vous d\'une source d\'eau' },
        { icon: '🎯', text: 'Changez votre position en "Fishing Stance" (icône en haut à gauche)' },
        { icon: '⌨️', text: 'Appuyez sur [ESPACE] pour lancer votre ligne' },
        { icon: '🐟', text: 'Attendez le "bite" (bulle de dialogue avec icône poisson)' },
        { icon: '🎮', text: 'Appuyez sur [ESPACE] quand la barre est dans la zone bleue' },
        { icon: '📝', text: 'Entrez la séquence de touches correcte' },
        { icon: '📦', text: 'Appuyez sur [R] pour récupérer le poisson' },
    ]

    const afkTips = [
        'Fermez le jeu en mode "réduit" pour économiser les ressources (ESC → Déconnexion → Réduire)',
        'Pêchez dans une zone sûre ou avec un personnage de moins de niveau 50 (anti-pvp)',
        'Cochez la case "Ne pas embarquer sur le navire d\'autres aventuriers" dans l\'interface de pêche',
        'Configurez le rejet automatique des poissons de faible qualité (requis Pro 1+)',
        'Assurez-vous d\'avoir suffisamment d\'espace d\'inventaire',
        'Améliorez votre canne Balenos +10 avec une Pierre de Marque d\'Objet',
    ]

    const sellingTips = [
        'Vendez vos poissons rouges avec le bonus de distance maximum (120-150%)',
        'Utilisez Magnus pour atteindre Yukjo Street ou Bukpo (Matin Radieux) depuis Velia',
        'Les poissons ont une durée de garantie de prix : 48h normal, 60h O\'dylita, 73h Montagne de l\'Éternel Hiver',
        'Négociez avec le marchand pour un bonus supplémentaire avant de vendre',
        'Changez de canal si les prix ne sont pas favorables (120%+ recommandé)',
        'La Livraison Impériale donne 250% du prix de base pour les poissons bleus/jaunes (limité en quantité)',
    ]

    // Ressources pour la section complémentaire
    const fishingResources = [
        {
            title: 'Guide Complet BDO Foundry',
            description: 'Guide détaillé couvrant tous les aspects de la pêche, des cannes aux spots optimaux.',
            url: 'https://www.blackdesertfoundry.com/fishing-guide/',
            buttonText: 'Consulter le Guide'
        },
        {
            title: 'Wiki Officiel Pêche',
            description: 'Documentation officielle sur les mécaniques et équipements de pêche.',
            url: 'https://www.naeu.playblackdesert.com/fr-fr/Wiki?wikiNo=73',
            buttonText: 'Voir le Wiki'
        },
        {
            title: 'Base de Données Poissons',
            description: 'Base de données complète des poissons, spots de pêche et informations détaillées.',
            url: 'https://bdofish.com/',
            buttonText: 'Explorer BDOFish'
        }
    ]

    const fishingVideos = [
        {
            title: 'Guide Pêche Complet 2024 (23min)',
            videoId: 'poB45VVNhiw'
        },
        {
            title: 'Pêche AFK Optimisée (15min)',
            videoId: 'hTgiaFU34WU'
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
                    <FishingIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        🎣 Guide Complet de la Pêche
                    </Typography>
                    <IconButton onClick={onClose} sx={{ color: 'grey.500' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>

            <DialogContent dividers>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        📖 Introduction
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        La pêche est l'un des lifeskills les plus faciles à apprendre et l'un des meilleurs moyens
                        de générer des profits en AFK. Avec 1500+ de maîtrise, attendez-vous à un revenu moyen de
                        500 millions à 1 milliard de silver par nuit de pêche AFK à Velia.
                    </Typography>

                    <Alert severity="info" sx={{ mb: 2 }}>
                        <Typography variant="body2">
                            <strong>💰 Rentabilité :</strong> Le revenu principal vient des poissons rouges.
                            Votre chance d'en pêcher dépend entièrement de votre maîtrise de pêche. Visez au minimum 1500 de maîtrise pour un bon revenu !
                        </Typography>
                    </Alert>

                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        🎯 Comment Pêcher (Bases)
                    </Typography>
                    <List dense>
                        {setupSteps.map((step, index) => (
                            <ListItem key={index}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Typography variant="h6">{step.icon}</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary={`${index + 1}. ${step.text}`}
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Accordion defaultExpanded>
                    <AccordionSummary 
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Pêche - Cannes à Pêche')}
                    >
                        <Typography variant="h6">🎣 Cannes à Pêche Recommandées</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }} color="text.secondary">
                            Chaque canne a son usage spécifique. La Balenos +10 est recommandée pour l'AFK, la Triple-Flotteur pour l'actif.
                        </Typography>
                        <TableContainer component={Paper} variant="outlined">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Canne à Pêche</strong></TableCell>
                                        <TableCell><strong>Usage</strong></TableCell>
                                        <TableCell><strong>Durabilité</strong></TableCell>
                                        <TableCell><strong>Effet Principal</strong></TableCell>
                                        <TableCell><strong>Réparable</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {fishingRods.map((rod, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Chip
                                                    label={rod.nom}
                                                    size="small"
                                                    color={rod.nom.includes('Balenos') ? 'success' : rod.nom.includes('Triple-Float') ? 'warning' : 'primary'}
                                                />
                                            </TableCell>
                                            <TableCell>{rod.usage}</TableCell>
                                            <TableCell>{rod.durability}</TableCell>
                                            <TableCell>{rod.effet}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={rod.reparable}
                                                    size="small"
                                                    color={rod.reparable === 'Oui' ? 'success' : 'error'}
                                                    variant="outlined"
                                                />
                                            </TableCell>
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
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Pêche - Équipement Maîtrise')}
                    >
                        <Typography variant="h6">⚡ Équipement de Maîtrise</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary">
                            <strong>Objectif :</strong> Atteindre 1500+ de maîtrise pour 3.75% de chance de Poissons rouges.
                            3000 maîtrise = 6.25% de chance.
                        </Typography>
                        <TableContainer component={Paper} variant="outlined">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Équipement</strong></TableCell>
                                        <TableCell><strong>Maîtrise</strong></TableCell>
                                        <TableCell><strong>Obtention</strong></TableCell>
                                        <TableCell><strong>Coût</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {masteryGear.map((gear, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{gear.item}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={gear.mastery}
                                                    size="small"
                                                    color={gear.mastery.includes('450') || gear.mastery.includes('400') ? 'success' : 'primary'}
                                                />
                                            </TableCell>
                                            <TableCell>{gear.obtention}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={gear.cout}
                                                    size="small"
                                                    color={gear.cout === 'Gratuit' ? 'success' : gear.cout === 'Très élevé' ? 'error' : 'warning'}
                                                    variant="outlined"
                                                />
                                            </TableCell>
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
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Pêche - Spots de Pêche')}
                    >
                        <Typography variant="h6">🗺️ Meilleurs Spots de Pêche</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Alert severity="success" sx={{ mb: 2 }}>
                            <Typography variant="body2">
                                <strong>Recommandation :</strong> La plage de Velia reste le spot le plus consistant malgré les ressources épuisées.
                                Les spots "jackpot" sont moins réguliers en profits.
                            </Typography>
                        </Alert>
                        <TableContainer component={Paper} variant="outlined">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Localisation</strong></TableCell>
                                        <TableCell><strong>Poissons Principaux</strong></TableCell>
                                        <TableCell><strong>Type</strong></TableCell>
                                        <TableCell><strong>Recommandé</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {fishingSpots.map((spot, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Chip
                                                    label={spot.lieu}
                                                    size="small"
                                                    color={spot.lieu.includes('Velia') ? 'success' : 'primary'}
                                                />
                                            </TableCell>
                                            <TableCell sx={{ fontSize: '0.75rem' }}>{spot.poissons}</TableCell>
                                            <TableCell>{spot.type}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={spot.recommande.split(' - ')[0]}
                                                    size="small"
                                                    color={spot.recommande.includes('Oui') ? 'success' : 'error'}
                                                    variant="outlined"
                                                />
                                            </TableCell>
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
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Pêche - Grades Poissons')}
                    >
                        <Typography variant="h6">🐟 Grades de Poissons</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer component={Paper} variant="outlined">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Grade</strong></TableCell>
                                        <TableCell><strong>Valeur</strong></TableCell>
                                        <TableCell><strong>Utilisation Recommandée</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {fishGrades.map((fish, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Chip
                                                    label={fish.grade}
                                                    size="small"
                                                    color={
                                                        fish.grade.includes('Rouge') ? 'error' :
                                                            fish.grade.includes('Jaune') ? 'warning' :
                                                                fish.grade.includes('Bleu') ? 'info' :
                                                                    fish.grade.includes('Vert') ? 'success' : 'default'
                                                    }
                                                />
                                            </TableCell>
                                            <TableCell>{fish.valeur}</TableCell>
                                            <TableCell>{fish.utilisation}</TableCell>
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
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Pêche - Configuration AFK')}
                    >
                        <Typography variant="h6">😴 Configuration AFK Optimale</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            {afkTips.map((tip, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <Typography variant="body2" color="primary.main" sx={{ fontWeight: 'bold' }}>•</Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={tip}
                                        primaryTypographyProps={{ color: 'text.primary' }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Alert severity="warning" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>⚠️ Important :</strong> Calculez votre Durability Reduction Resistance (DRR) pour que votre canne
                                dure toute la nuit. Visez 60%+ de DRR avec Pierre de marquage d'objet + pets + équipements.
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary 
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Pêche - Vente et Profits')}
                    >
                        <Typography variant="h6">💰 Vente et Profits</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6" gutterBottom color="success.main">
                            Stratégie de Vente Optimale
                        </Typography>
                        <List dense>
                            {sellingTips.map((tip, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <Typography variant="body2" color="success.main" sx={{ fontWeight: 'bold' }}>•</Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={tip}
                                        primaryTypographyProps={{ color: 'text.primary' }}
                                    />
                                </ListItem>
                            ))}
                        </List>

                        <Box sx={{
                            mt: 3,
                            p: 2,
                            bgcolor: 'warning.light',
                            borderRadius: 1,
                            textAlign: 'center'
                        }}>
                            <Typography variant="h6" gutterBottom color="warning.contrastText">
                                🎣 Aquarium Miraculeux de Shim Cheong
                            </Typography>
                            <Typography variant="body2" color="warning.contrastText">
                                <strong>Avantages :</strong> Stocke 50 poissons • Prolonge durée de garantie x5 •
                                Obtention : Quête familiale à Solgaji Forest (NPC Shim l'aveugle)
                            </Typography>
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary 
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Pêche - Hotspots')}
                    >
                        <Typography variant="h6">🎯 Pêche Active (Hotspots)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" gutterBottom color="text.primary">
                            <strong>Hotspot Fishing :</strong> Zones temporaires (30min) avec bancs de poissons sautant hors de l'eau,
                            entourés de mouettes. Donnent uniquement des poissons jaunes d'un type spécifique.
                        </Typography>

                        <List dense sx={{ mb: 2 }}>
                            <ListItem>
                                <ListItemText
                                    primary="• La visibilité des hotspots augmente avec votre niveau de pêche"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="• Hotspots Coelacanth spéciaux : disparaissent après 1 poisson pêché"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="• Utilisez votre énergie (maintenir ESPACE) pour chance de pêcher plusieurs poissons"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="• Triple-Flotteur + 10 énergie = jusqu'à 5 poissons par lancer !"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        </List>

                        <Alert severity="info">
                            <Typography variant="body2">
                                <strong>💡 Conseil :</strong> La pêche active en hotspot peut être très profitable mais demande
                                d'être présent et de se déplacer régulièrement. Nécessite un bateau pour les spots océaniques.
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <GuideResourcesSection
                    topic="de la pêche"
                    resources={fishingResources}
                    videos={fishingVideos}
                />

                <Box sx={{
                    mt: 3,
                    p: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    border: '2px solid',
                    borderColor: 'primary.main'
                }}>
                    <Typography variant="h6" gutterBottom color="primary.main">
                        📊 Résumé Progression Pêche
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        <strong>Étapes Essentielles :</strong><br />
                        1. Canne Balenos +10 avec Pierre de marquage d'objet<br />
                        2. 1500+ Maîtrise (Floramos + Loggia recommandés)<br />
                        3. Configuration AFK optimale (DRR, inventaire, zone sûre)<br />
                        4. Vente avec bonus distance maximum (Yukjo Street/Bukpo)<br />
                        <strong>Rentabilité :</strong> 500M-1G+ par nuit AFK à 1500+ maîtrise
                    </Typography>
                </Box>
            </DialogContent>

            <GuideModalActions
                onClose={onClose}
            />
        </Dialog>
    )
}

export default FishingGuideModal