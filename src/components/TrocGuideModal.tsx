import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
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
} from '@mui/material'
import {
    Close as CloseIcon,
    ExpandMore as ExpandMoreIcon,
    SwapHoriz as TrocIcon,
    Security as SecurityIcon,

    AttachMoney as MoneyIcon,
    Timeline as TimelineIcon,
    Build as BuildIcon,
    Navigation as NavigationIcon,
} from '@mui/icons-material'

interface TrocGuideModalProps {
    open: boolean
    onClose: () => void
}

const TrocGuideModal: React.FC<TrocGuideModalProps> = ({ open, onClose }) => {
    const prerequisSection = [
        { icon: '👤', text: 'Niveau 50+ sur votre personnage' },
        { icon: '⛵', text: 'Maîtrise Qualifié 1 en Navigation' },
        { icon: '🚢', text: 'Bateau Epheria Sailboat' },
        { icon: '💰', text: '1 milliard+ de silver d\'investissement' },
        { icon: '📅', text: 'Une semaine de quêtes quotidiennes' },
    ]

    const chainLevels = [
        { niveau: 'Terre', poids: '-', valeur: '-', description: 'Marchandises de base' },
        { niveau: 'Niveau 1', poids: '100 LT', valeur: '-', description: '10x Verdant Stones' },
        { niveau: 'Niveau 2', poids: '800 LT', valeur: '-', description: 'Matériaux navire' },
        { niveau: 'Niveau 3', poids: '900 LT', valeur: '1M', description: 'Matériaux navire' },
        { niveau: 'Niveau 4', poids: '1000 LT', valeur: '2M', description: 'Matériaux Carrack' },
        { niveau: 'Niveau 5', poids: '1000 LT', valeur: '7.5-15M', description: 'Crow Coins (profit max)' },
    ]

    const unlockRoutes = [
        { trocs: '0', route: '1ère Route (Old Moon Guild Carrack)' },
        { trocs: '10', route: '2ème Route ([Niveau 2] Matériaux)' },
        { trocs: '30', route: '3ème Route ([Niveau 3] Matériaux)' },
        { trocs: '70', route: '4ème Route ([Niveau 4] Matériaux)' },
        { trocs: '140', route: 'Troc Spécial ⭐' },
        { trocs: '1000', route: 'Brilliant Materials' },
        { trocs: '10000', route: 'Échange [Niveau 3] pour Crow Coins' },
    ]

    const dailyQuests = [
        { nom: 'Ravinia\'s Ship Upgrade Log I & IV', recompense: 'Verdant Black Stone x50 + matériaux' },
        { nom: 'Ravinia\'s Ship Upgrade Log II & V', recompense: 'Sailing EXP (60,000)' },
        { nom: 'Ravinia\'s Ship Upgrade Log III & VI', recompense: 'Chowder x10, Potions' },
        { nom: 'Ravinia\'s Ship Upgrade Log VII', recompense: 'Crow Coin x1000' },
        { nom: '[Daily] Ravikel\'s Test', recompense: 'Deep Sea Memory Filled Glue x8' },
    ]

    const tipsList = [
        'Cochez "Continuously use Breezy Sails" (ne marche pas si surpoids)',
        'Clic gauche sur l\'icône navire : téléportation au gouvernail (40m)',
        'Arrêt instantané : [T] → [S] → [R]',
        'Explorez les îles pour récupérer stamina marins + supply boxes',
        'Gardez divers niveaux d\'items à Iliya ET Epheria',
        'Utilisez un alt avec gear de poids pour plus de capacité',
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
                        Le troc est un excellent moyen de gagner de l'argent dans Black Desert Online tout en étant semi-AFK.
                        Cependant, il y a de nombreux prérequis et vous devrez investir beaucoup d'argent et de temps.
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
                        <TimelineIcon sx={{ mr: 1, color: 'secondary.main' }} />
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
                        <BuildIcon sx={{ mr: 1, color: 'warning.main' }} />
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
                        <NavigationIcon sx={{ mr: 1, color: 'info.main' }} />
                        <Typography variant="h6">📅 Quêtes Quotidiennes</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2 }} color="text.primary">
                            <strong>Important :</strong> Ravinia's Ship Upgrade Log (7 quêtes sur 7 jours) - Donne 50% des matériaux Caravel
                        </Typography>
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
                        <MoneyIcon sx={{ mr: 1, color: 'success.main' }} />
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
                                    primary="2. Gardez 3-4 items Niveau 5 pour les échanges Crow Coins"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="3. Vendez le reste à 7.5M silver chacun"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="4. Actualisez et répétez"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        </List>

                        <Typography variant="h6" gutterBottom color="success.main" sx={{ mt: 2 }}>
                            Gestion des Crow Coins
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            <Chip label="Manos Box: 2,500 → 200M+ silver" color="success" variant="outlined" />
                            <Chip label="Weekly Caphras Bundle" color="info" variant="outlined" />
                            <Chip label="Khan's Heart: 80,000 coins" color="warning" variant="outlined" />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <SecurityIcon sx={{ mr: 1, color: 'error.main' }} />
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

                <Box sx={{
                    mt: 3,
                    p: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    border: '2px solid',
                    borderColor: 'success.main'
                }}>
                    <Typography variant="h6" gutterBottom color="success.main">
                        📊 Rentabilité Estimée
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        <strong>Avec Caravel +10 Green Gear :</strong><br />
                        • Horaire : 50-100M silver/heure<br />
                        • Investissement initial : ~1.5 milliard silver<br />
                        • ROI : 2-3 mois avec jeu régulier<br />
                        • Type : Semi-AFK, bon pour multitâche
                    </Typography>
                </Box>
            </DialogContent>

            <DialogActions sx={{ p: 3 }}>
                <Button
                    variant="outlined"
                    href="https://discord.gg/xejvGDwczy"
                    target="_blank"
                    color='info'
                    rel="noopener noreferrer"
                    sx={{ mr: 'auto' }}
                >
                    💬 Poser une question sur Discord
                </Button>
                <Button variant="contained" onClick={onClose}>
                    Fermer
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default TrocGuideModal