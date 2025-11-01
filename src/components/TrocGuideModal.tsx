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
import GuideModalActions from './GuideModalActions'

interface TrocGuideModalProps {
    open: boolean
    onClose: () => void
}

const TrocGuideModal: React.FC<TrocGuideModalProps> = ({ open, onClose }) => {
    const prerequisSection = [
        { icon: '👤', text: 'Personnage niveau 50+ requis' },
        { icon: '⛵', text: 'Qualifié 1 en Navigation (Sailing) obligatoire' },
        { icon: '🚢', text: 'Epheria Sailboat (Central Market ou craft)' },
        { icon: '💰', text: '1+ milliard silver d\'investissement initial' },
        { icon: '�', text: 'Questline [The Great Expedition] First Sailboat complétée' },
        { icon: '📅', text: '7 jours de Ravinia\'s Ship Upgrade Log quêtes' },
    ]

    const chainLevels = [
        { niveau: 'Marchandises Terrestres', poids: 'Variable', valeur: '-', description: 'Vinegar, Beer, Fleece, Powder of Time, etc.' },
        { niveau: 'Niveau 1', poids: '100 LT', valeur: 'Non vendable', description: '10x Échanges → Verdant Stones' },
        { niveau: 'Niveau 2', poids: '800 LT', valeur: 'Non vendable', description: '10x Échanges → Matériaux navire +5' },
        { niveau: 'Niveau 3', poids: '900 LT', valeur: '1 million', description: '10x Échanges → Matériaux navire +6-10' },
        { niveau: 'Niveau 4', poids: '1000 LT', valeur: '2 millions', description: '10x Échanges → Matériaux Carrack' },
        { niveau: 'Niveau 5 (Intérieur)', poids: '1000 LT', valeur: '7.5 millions', description: '6x Échanges → Matériaux Brillants Carrack' },
        { niveau: 'Niveau 5 (Grand Océan)', poids: '1000 LT', valeur: '15 millions', description: '4x Échanges → Max profit Crow Coins' },
    ]

    const unlockRoutes = [
        { trocs: '0', route: '1ère Route Troc + Old Moon Guild Carrack' },
        { trocs: '10', route: '2ème Route + [Niveau 2] Matériaux Barter' },
        { trocs: '30', route: '3ème Route + [Niveau 3] Matériaux Barter' },
        { trocs: '70', route: '4ème Route + [Niveau 4] Matériaux Barter' },
        { trocs: '140', route: 'Troc Spécial débloqué ⭐' },
        { trocs: '150', route: '5ème Route' },
        { trocs: '310', route: '6ème Route' },
        { trocs: '1000', route: 'Brilliant Materials (Ship Material Refresh)' },
        { trocs: '1500', route: 'Brilliant Materials (Trade Item Refresh)' },
        { trocs: '5110', route: '10ème Route + [Niveau 5] Matériaux Barter' },
        { trocs: '10000', route: 'Échange [Niveau 3] pour Crow Coins' },
    ]

    const dailyQuests = [
        { nom: 'Ravinia\'s Ship Upgrade Log I', recompense: 'Verdant Black Stone x50, Graphite/Timber/Adhesive for Upgrade x25' },
        { nom: 'Ravinia\'s Ship Upgrade Log II', recompense: 'Sailing Skill EXP (60,000)' },
        { nom: 'Ravinia\'s Ship Upgrade Log III', recompense: 'Chowder x10, Elixir of Regeneration x1' },
        { nom: 'Ravinia\'s Ship Upgrade Log IV', recompense: 'Verdant Black Stone x50, Graphite/Timber/Adhesive for Upgrade x25' },
        { nom: 'Ravinia\'s Ship Upgrade Log V', recompense: 'Sailing Skill EXP (60,000)' },
        { nom: 'Ravinia\'s Ship Upgrade Log VI', recompense: 'Chowder x10, Elixir of Regeneration x1' },
        { nom: 'Ravinia\'s Ship Upgrade Log VII', recompense: 'Crow Coin x1000' },
        { nom: '[Daily] Ravikel\'s Test (Oquilla\'s Eye)', recompense: 'Deep Sea Memory Filled Glue x8 (troc 5x)' },
        { nom: '[Daily] Precious Coral Piece', recompense: 'Seaweed Stalk x4 (donner Coral Pieces x10)' },
    ]

    const tipsList = [
        'Cochez "Continuously use Breezy Sails" (ne marche pas si surpoids ou <50% HP)',
        'LMB sur icône navire : téléportation gouvernail (40m max)',
        'RMB sur icône navire : rappeler le navire à vous (40m max)',
        'Arrêt instantané bateau : [T] → [S] → [R]',
        'Explorez îles : stamina marins + barter supply boxes (évitez <60% durabilité)',
        'Utilisez Innocent Goblin Sailors (vitesse max, niveau 8 = 3.0 speed min)',
        'Stockage : Port Epheria (Land+L2+L3+L4), Iliya (L1-L5), Ancado (L5)',
        'Transport items Niveau 5 entre stockages (4h, 5 items max)',
        'Gardez 3-4 de chaque Level 5 pour coin trades, vendez le reste',
        'Utilisez alt tagué avec gear poids pour overstack items',
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
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                            <Chip label="Manos Box: 2,500 → 200M+ silver" color="success" variant="outlined" />
                            <Chip label="Weekly Caphras Bundle (Lema)" color="info" variant="outlined" />
                            <Chip label="Khan's Heart: 80,000 coins" color="warning" variant="outlined" />
                        </Box>

                        <Typography variant="h6" gutterBottom color="warning.main">
                            Hakoven Island Coin Runs
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            • Meilleurs taux Crow Coins (250+ par échange minimum)<br />
                            • Transportez Level 5 → Ancado Inner Harbor → Hakoven<br />
                            • Alt avec Skilled Sailing + Epheria Frigate recommandé<br />
                            • Suicide cliff pour retour rapide ou Traveller's Map
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <BuildIcon sx={{ mr: 1, color: 'warning.main' }} />
                        <Typography variant="h6">🚢 Matériaux Epheria Caravel</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2 }} color="text.primary">
                            <strong>Coût total :</strong> ~400M silver + matériaux de troc + 220 Verdant Black Stones
                        </Typography>

                        <Typography variant="h6" gutterBottom color="primary.main">
                            Matériaux de Base Requis
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Ship Upgrade Permit: Epheria Caravel (400M silver)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="+10 Epheria: Old Prow/Plating/Cannon/Sails" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Graphite Ingot for Upgrade x100" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Timber for Upgrade x100" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Adhesive for Upgrade x100" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Island Tree Coated Plywood x100 (via troc)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Rock Salt Ingot x100 (via troc)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Deep Sea Memory Filled Glue x4" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Seaweed Stalk x4 (+ Sea Monster's Ooze x150)" />
                            </ListItem>
                        </List>

                        <Typography variant="body2" color="text.primary" sx={{ mt: 1, fontStyle: 'italic' }}>
                            50% des matériaux obtenus via Ravinia's Ship Upgrade Log (7 quêtes)
                        </Typography>
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
                        📊 Résumé Progression Troc
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        <strong>Étapes Essentielles :</strong><br />
                        1. Questline [The Great Expedition] + Skilled 1 Sailing<br />
                        2. Ravinia's Ship Upgrade Log (7 jours) + dailies Oquilla's Eye<br />
                        3. Accumulation 70+ trocs pour débloquer routes principales<br />
                        4. Upgrade Epheria Caravel + Green Gear +10 minimum<br />
                        5. 1000+ trocs pour Brilliant Materials (Carrack path)<br /><br />
                        <strong>Points Clés :</strong> Semi-AFK, 1B+ silver initial, excellent ROI long terme<br />
                        <strong>Référence :</strong> Spreadsheet BDFoundry + BDOCodex pour Special Barter
                    </Typography>
                </Box>
            </DialogContent>

            <GuideModalActions
                onClose={onClose}
                discordText="💬 Poser une question sur Discord"
            />
        </Dialog>
    )
}

export default TrocGuideModal