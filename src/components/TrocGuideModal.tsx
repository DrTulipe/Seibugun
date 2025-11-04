import React from 'react'
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
    Button,
} from '@mui/material'
import {
    Close as CloseIcon,
    ExpandMore as ExpandMoreIcon,
    SwapHoriz as TrocIcon,
} from '@mui/icons-material'
import GuideModalActions from './GuideModalActions'
import GuideResourcesSection from './GuideResourcesSection'

interface TrocGuideModalProps {
    open: boolean
    onClose: () => void
}

const TrocGuideModal: React.FC<TrocGuideModalProps> = ({ open, onClose }) => {
    const prerequisSection = [
        { icon: '👤', text: 'Personnage niveau 50+ requis' },
        { icon: '⛵', text: 'Qualifié 1 en Navigation (Sailing) obligatoire' },
        { icon: '🚢', text: 'Voilier d\'Epheria (Central Market ou craft)' },
        { icon: '📅', text: 'Questline [La grande expédition] complétée (Conseillé)' },
    ]

    const chainLevels = [
        { niveau: 'Marchandises Terrestres', poids: 'Variable', valeur: '-', description: '10x Échanges Max, Vinaigre, contreplaqué, viande, etc.' },
        { niveau: 'Niveau 1', poids: '100 LT', valeur: 'Non vendable', description: '10x Échanges Max, Permet d\'obtenir des marchandises de troc de niveau 2' },
        { niveau: 'Niveau 2', poids: '800 LT', valeur: 'Non vendable', description: '10x Échanges Max, Permet d\'obtenir des marchandises de troc de niveau 3' },
        { niveau: 'Niveau 3', poids: '900 LT', valeur: '1 million', description: '10x Échanges Max, Permet d\'obtenir des marchandises de troc de niveau 4' },
        { niveau: 'Niveau 4', poids: '1000 LT', valeur: '2 millions', description: '10x Échanges Max, permet d\'obtenir des Matériaux Carrack ou des marchandises de troc de niveau 5' },
        { niveau: 'Niveau 5 (Intérieur)', poids: '1000 LT', valeur: '10 millions', description: '6x Échanges Max, permet d\'obtenir des Matériaux Carrack ou des pièces de corbeau' },
        { niveau: 'Niveau 5 (Grand Océan)', poids: '1000 LT', valeur: '25 millions', description: '4x Échanges Max, permet d\'obtenir un maximum de pièces de corbeau ou peut-être vendu' },
    ]

    const unlockRoutes = [
        { trocs: '0', route: '1ère Route Troc' },
        { trocs: '10', route: '2ème Route + [Niveau 2] Matériaux Troc' },
        { trocs: '30', route: '3ème Route + [Niveau 3] Matériaux Troc' },
        { trocs: '70', route: '4ème Route + [Niveau 4] Matériaux Troc' },
        { trocs: '140', route: 'Troc Spécial débloqué ⭐' },
        { trocs: '150', route: '5ème Route' },
        { trocs: '310', route: '6ème Route' },
        { trocs: '1000', route: 'Materiaux éclatants/Brillants (Actualisation matériaux de navire)' },
        { trocs: '1500', route: 'Materiaux éclatants/Brillants (Actualisation des marchandises)' },
        { trocs: '5110', route: '10ème Route + [Niveau 5] Matériaux Troc' },
        { trocs: '10000', route: 'Échange [Niveau 3] pour pièces de corbeaux' },
        { trocs: '10230', route: '11ème Route' },
        { trocs: '20470', route: '12ème Route' },
    ]

    const dailyQuests = [
        { nom: 'A venir', recompense: 'Pas encore implémenté' },
    ]

    const tipsList = [
        'Cochez "Voile jovial automatique" (ne marche pas si surpoids ou <50% HP, disponible à partir de Qualifié 1 en navigation, attention aux sorties de route)',
        'Clique gauche sur icône navire : téléportation gouvernail (60m max)',
        'Clic droit sur icône navire : rappeler le navire à vous (80m max), utile quand le bateau est bloqué',
        'Arrêt instantané bateau : [T] → [S] → [R]',
        'Explorez les îles : Cela consomme 100 000 rations mais peut valoir le coup',
        'Utilisez des marins "Innocent", de préférence des Goblins car ils pèsent moins lourd, les marins innocents améliorent la stat de vitesse',
        'Stockage : Port Epheria, Velia, Iliya (Préférence pour Iliya car assez centrale), vous pouvez investir dans les habitations d\'Iliya en dépôt et utiliser des loyalties pour acheter des extensions de dépôt de Balenos',
        'Gardez 3-4 de chaque Level 5 pour les pièces de corbeau, vendez le reste',
        'Vous pouvez mettre des objets de trocs dans votre inventaire pour économiser du poids sur le navire, mais il faudra aller dans un port pour les stocker dans la cale avant échange',
    ]

    // Ressources pour la section complémentaire
    const trocResources = [
        {
            title: 'Guide Complet BDO Foundry',
            description: 'Guide détaillé couvrant tous les aspects du troc maritime, des bases aux stratégies avancées.',
            url: 'https://www.blackdesertfoundry.com/bartering-guide/',
            buttonText: 'Consulter le Guide'
        },
        {
            title: 'Guide Navigation & Troc',
            description: 'Guide spécialisé sur la navigation et les stratégies de troc maritime optimisées.',
            url: 'https://grumpygreen.cricket/bdo-barter-sailing/?cn-reloaded=1',
            buttonText: 'Voir le Guide'
        }
    ]

    const trocVideos = [
        {
            title: 'Guide Troc Complet (11min)',
            videoId: 'vZsqT6Vh4O8',
            startTime: 647
        },
        {
            title: 'Gourou en troc en 30 minutes par jour (6min)',
            videoId: 'si7-tohdkpo'
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
                    <TrocIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        🔄 Guide Complet du Troc
                    </Typography>
                    <IconButton onClick={onClose} sx={{ color: 'grey.500' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>

            <DialogContent dividers>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom color="">
                        📖 Introduction
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Le troc est un excellent moyen de gagner de l'argent dans Black Desert tout en étant semi-AFK.
                        Cependant, il y a de nombreux prérequis et vous devrez investir beaucoup de temps et d'argent.
                    </Typography>

                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        ⚠️ Prérequis
                    </Typography>
                    <List dense>
                        {prerequisSection.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Typography variant="h6">{item.icon}</Typography>
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">🔄 Chaînes de Troc</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }} color="text.primary">
                            Marchandises Terrestres → [Niveau 1] → [Niveau 2] → [Niveau 3] → [Niveau 4] → [Niveau 5] → Crow Coins
                        </Typography>
                        <TableContainer component={Paper} variant="outlined">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Niveau</strong></TableCell>
                                        <TableCell><strong>Poids</strong></TableCell>
                                        <TableCell><strong>Valeur NPC</strong></TableCell>
                                        <TableCell><strong>Usage</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {chainLevels.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Chip
                                                    label={row.niveau}
                                                    size="small"
                                                    color={index === 0 ? 'default' : index >= 4 ? 'success' : 'primary'}
                                                />
                                            </TableCell>
                                            <TableCell>{row.poids}</TableCell>
                                            <TableCell>{row.valeur}</TableCell>
                                            <TableCell>{row.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">🔓 Déblocage des Routes</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer component={Paper} variant="outlined">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Nombre de Trocs</strong></TableCell>
                                        <TableCell><strong>Route Débloquée</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {unlockRoutes.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Chip
                                                    label={row.trocs}
                                                    size="small"
                                                    color={row.trocs === '140' ? 'error' : row.trocs === '1000' || row.trocs === '10000' ? 'success' : 'primary'}
                                                />
                                            </TableCell>
                                            <TableCell>{row.route}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">⭐ Troc Spécial</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2 }} color="text.primary">
                            <strong>Débloqué à 140 trocs totaux</strong> - Apparaît aléatoirement (~tous les 250 trocs)
                        </Typography>

                        <Typography variant="h6" gutterBottom color="warning.main">
                            Comment ça marche
                        </Typography>
                        <List dense sx={{ mb: 2 }}>
                            <ListItem>
                                <ListItemText
                                    primary="• Apparaît en haut de la fenêtre d'information Troc"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="• Ne disparaît PAS lors de l'actualisation des trocs"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="• Doit être échangé ou ignoré manuellement"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        </List>

                        <Typography variant="h6" gutterBottom color="success.main">
                            Liste Complète des Trocs Spéciaux
                        </Typography>

                        <Box sx={{
                            p: 2,
                            bgcolor: 'primary.light',
                            borderRadius: 1,
                            mb: 2,
                            textAlign: 'center'
                        }}>
                            <Typography variant="body2" sx={{ mb: 1 }} color="primary.contrastText">
                                📋 Consultez la liste exhaustive de tous les trocs spéciaux possibles :
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                href="https://bdocodex.com/fr/specialbarter/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ fontWeight: 'bold' }}
                            >
                                🔗 Base de Données BDOCodex
                            </Button>
                        </Box>

                        <Typography variant="body2" color="text.primary">
                            <strong>💡 Conseils :</strong><br />
                            • Vérifiez toujours les prix sur le marché avant d'accepter<br />
                            • Gardez 1 exemplaire de chaque items Niveau 5 <br />
                            • Certains trocs spéciaux peuvent ne pas être rentables selon les prix actuels<br />
                            • Les items donnant 900-1100 Crow Coins sont généralement les meilleurs, mais vous pouvez obtenir d'autres échhanges très rentables (Accessoires de Manos, etc.)
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">📅 Quêtes Quotidiennes</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            {dailyQuests.map((quest, index) => (
                                <ListItem key={index} divider>
                                    <ListItemIcon>
                                        <Chip label={index + 1} size="small" color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={quest.nom}
                                        secondary={quest.recompense}
                                        secondaryTypographyProps={{ color: 'text.primary', fontWeight: 'medium' }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">💰 Stratégies de Profit</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6" gutterBottom color="success.main">
                            Route Optimale
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText
                                    primary="1. Faites tous les échanges Niveau 5 autour de Lema, Iliya, Velia"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="2. Gardez 3-4 items Niveau 5 en stock pour les échanger contre des pièces de corbeau à chaque actualisation de troc"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="3. Vendez le reste à 10M (ou 25M selon les niveau 5 que vous avez) silver chacun"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary="4. Utilisez le reste des tractations disponible pour vous faire du stock de matériaux niveau 3 ou 4 ou des matériaux de base vers niveau 1 pour faire monter votre nombre de trocs"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="5. Actualisez et répétez"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        </List>

                        <Typography variant="h6" gutterBottom color="success.main" sx={{ mt: 2 }}>
                            Gestion des Pièces de Corbeau
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                            <Chip label="Boîte de manos: 2,500 pièces de corbeau → 200M+" color="success" variant="outlined" />
                            <Chip label="Coeur de Khan: 80,000 pièces de corbeau → 3G+" color="warning" variant="outlined" />
                            <Chip label="Matériaux d'amélioration de navire (Craft et revente de bateaux) → 25G+" color="error" variant="outlined" />
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">💡 Conseils et Astuces</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            {tipsList.map((tip, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>•</Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={tip}
                                        primaryTypographyProps={{ color: 'text.primary' }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>

                <GuideResourcesSection
                    topic="du troc maritime"
                    resources={trocResources}
                    videos={trocVideos}
                />

                <Box sx={{
                    mt: 3,
                    p: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    border: '2px solid',
                    borderColor: 'success.main'
                }}>
                    <Typography variant="h6" gutterBottom color="success.main">
                        📊 Résumé Progression Troc
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        <strong>Étapes Essentielles :</strong><br />
                        0. Il vous faut un bateau !<br />
                        1. Suite de quêtes [La grande expédition] + Qualifié 1 en navigation<br />
                        2. Accumulation 70+ trocs pour débloquer les routes principales<br />
                        3. Upgrade Epheria Caravel + Green Gear +10 minimum<br />
                        <strong>Points Clés :</strong> Semi-AFK, excellent ROI long terme<br />
                    </Typography>
                </Box>
            </DialogContent>

            <GuideModalActions
                onClose={onClose}
            />
        </Dialog>
    )
}

export default TrocGuideModal