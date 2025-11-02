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
    Grid,
} from '@mui/material'
import {
    Close as CloseIcon,
    ExpandMore as ExpandMoreIcon,
    Groups as GuildIcon,
} from '@mui/icons-material'
import GuideModalActions from './GuideModalActions'
import GuideResourcesSection from './GuideResourcesSection'
import { useMatomo } from '../hooks/useMatomo'

interface GuildBossGuideModalProps {
    open: boolean
    onClose: () => void
}

const GuildBossGuideModal: React.FC<GuildBossGuideModalProps> = ({ open, onClose }) => {
    const { trackEvent } = useMatomo()

    // Tracker l'ouverture du guide
    useEffect(() => {
        if (open) {
            trackEvent('Guide', 'Open', 'Boss de Guilde')
        }
    }, [open, trackEvent])

    const guildBossesMain = [
        {
            nom: 'Khan - Œil du Grand Océan',
            localisation: 'Oquilla\'s Eye (Île)',
            fragments: 'Morceau de parchemin d\'invocation de Khan',
            duree: '30 minutes après invocation',
            difficulte: 'Très Difficile',
            specialite: 'Instance privée de guilde',
            recompenses: 'Magie concentrée de Khan, Tendon de Khan, Pierre de lumière resplendissante, Lingots',
            couleur: 'error'
        },
        {
            nom: 'Puturum l\'ancien',
            localisation: 'Nord du carrefour de la porte de Runn (Valencia)',
            fragments: 'Morceau de parchemin d\'invocation de Boss de guilde',
            duree: 'Standard',
            difficulte: 'Difficile',
            specialite: 'Vol + Tours Hystria',
            recompenses: 'Souvenir du Gardien ancien (accessoire DUO), Conseils de Valks, Lingots',
            couleur: 'warning'
        },
        {
            nom: 'Ferrid',
            localisation: 'Grotte de lave d\'Omar (Mediah)',
            fragments: 'Morceau de parchemin d\'invocation de Boss de guilde',
            duree: 'Standard',
            difficulte: 'Moyen',
            specialite: 'Marécages de lave + adds',
            recompenses: 'Énergie originelle, Pierre de lumière resplendissante (Feu), Lingots',
            couleur: 'info'
        },
        {
            nom: 'Boustre géant',
            localisation: 'Ruines de Glish (Serendia)',
            fragments: 'Morceau de parchemin d\'invocation de Boss de guilde',
            duree: 'Standard',
            difficulte: 'Facile',
            specialite: 'Ralentissements + petits mudsters',
            recompenses: 'Énergie originelle, Pierre de lumière resplendissante (Terre), Lingots',
            couleur: 'success'
        },
    ]

    // const otherBosses = [
    //     {
    //         nom: 'Muskan de la Folie',
    //         localisation: 'Bloody Monastery',
    //         obtention: '15 Essence of Fury',
    //         difficulte: 'Normal/Awakened',
    //         aide: 'NPC Hakkon vous aide',
    //         recompenses: 'Muskan\'s Shoes, Muskan\'s Bloody Steel Helmet',
    //         expiration: '3 jours'
    //     },
    //     {
    //         nom: 'Ahib Griffon',
    //         localisation: 'Navarn Steppe',
    //         obtention: '20 Essence of Fury → Operation Orders',
    //         difficulte: 'Normal/Awakened',
    //         aide: 'Archers Ganelle + Spirit\'s Flare x5',
    //         recompenses: 'Griffon\'s Helmet, Griffon Claw, Magic Crystal – Viper',
    //         expiration: '3 jours'
    //     },
    //     {
    //         nom: 'Mirumok Watcher/Destroyer Offin',
    //         localisation: 'Mirumok Ruins (Kamasylvia)',
    //         obtention: 'Quête répétable (tous les 3 jours)',
    //         difficulte: 'Variable',
    //         aide: 'Aucune',
    //         recompenses: 'Valtarra Eclipsed Belt, Magic Crystal – Cobelinus',
    //         expiration: 'Aucune'
    //     },
    // ]

    const khanStrategy = [
        { etape: '1', action: 'Obtenir canons monstricides', description: 'Achat dans la boutique de guilde guilde' },
        { etape: '2', action: 'Installer les canons', description: 'Durée 30 minutes, destroyed après' },
        { etape: '3', action: 'Accumuler les stacks', description: 'Tirer avec le clic gauche pour obtenir stacks puis tirer avec le clic droit après avoir obtenu 3 stacks = plus de dégâts' },
        { etape: '4', action: 'Détruire algues noires', description: 'Donnent des boulets spéciaux (plus puissants)' },
        { etape: '5', action: 'Éviter les attaques', description: 'Message d\'avertissement "Khan prépare une puissante attaque", se cacher derrière le gros rocher' },
        { etape: '6', action: 'Empêcher soins', description: 'Détruire les coraux' },
    ]

    const restrictions = [
        'Un seul boss de chaque type par semaine et par guilde',
        'Nombre limité de boss par serveur simultanément',
        'Reset tous les lundis à 00:00 UTC',
        'Les parchemins d\'invocation collectés ne reset pas d\'une semaine à l\'autre',
        'Pas de nouveaux parchemins tant que le boss n\'est pas invoqué',
        'Certains boss ont des restrictions de serveur (pas Node/Conquest/Arsha)',
    ]

    const generalTips = [
        'Coordonnez-vous avec votre guilde pour les horaires',
        'Préparez l\'équipement spécialisé à l\'avance (canons & boulets pour Khan)',
        'Étudiez les patterns d\'attaque avant le combat',
        'Pas de pénalité de mort sur les boss de guilde',
        'Changez de serveur si trop de boss sont actifs',
    ]

    // Ressources pour la section complémentaire
    const bossResources = [
        {
            title: 'Wiki Officiel Boss de Guilde',
            description: 'Guide officiel complet sur tous les boss de guilde, stratégies et récompenses détaillées.',
            url: 'https://www.naeu.playblackdesert.com/en-us/Wiki?wikiNo=170',
            buttonText: 'Consulter le Wiki'
        },
        {
            title: 'Guide BDO Foundry - Guildes',
            description: 'Section complète sur les boss de guilde dans le guide des guildes de BDO Foundry.',
            url: 'https://www.blackdesertfoundry.com/guilds-guide/#Guild_Scroll_Bosses',
            buttonText: 'Voir le Guide'
        }
    ]

    const bossVideos = [
        {
            title: 'Khan Boss Guide Complet (19min)',
            videoId: '-ztNzy6dII8'
        },
        {
            title: 'Stratégies Boss de Guilde (12min)',
            videoId: '1GYMFUQrAks'
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
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        🐉 Guide Boss de Guilde
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
                        Les boss de guilde sont des défis épiques que vous pouvez affronter avec vos compagnons de guilde.
                        Ces boss incluent Khan, Puturum l'ancien, Ferrid, Boustre géant,
                        qui nécessitent une coordination de guilde et offrent d'excellentes récompenses.
                    </Typography>

                    <Alert severity="info" sx={{ mb: 2 }}>
                        <Typography variant="body2">
                            <strong>⏰ Important :</strong> Vous ne pouvez invoquer chaque type de boss qu'une fois par semaine.
                            Les invocations se reset tous les lundis à 00:00 UTC.
                        </Typography>
                    </Alert>

                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        🔒 Restrictions Générales
                    </Typography>
                    <List dense>
                        {restrictions.map((restriction, index) => (
                            <ListItem key={index}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Typography variant="h6">•</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary={restriction}
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
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Boss Guilde - Boss Principaux')}
                    >
                        <Typography variant="h6">🏆 Boss Principaux de Guilde</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }} color="text.secondary">
                            Ces boss sont invoqués via l'onglet "Guild Boss Subjugation" dans la fenêtre de guilde (G).
                        </Typography>
                        <TableContainer component={Paper} variant="outlined">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Boss</strong></TableCell>
                                        <TableCell><strong>Localisation</strong></TableCell>
                                        <TableCell><strong>Spécialité</strong></TableCell>
                                        <TableCell><strong>Difficulté</strong></TableCell>
                                        <TableCell><strong>Récompenses Possibles</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {guildBossesMain.map((boss, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Chip
                                                    label={boss.nom}
                                                    size="small"
                                                    color={boss.couleur as any}
                                                />
                                            </TableCell>
                                            <TableCell>{boss.localisation}</TableCell>
                                            <TableCell sx={{ fontSize: '0.75rem' }}>{boss.specialite}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={boss.difficulte}
                                                    size="small"
                                                    color={
                                                        boss.difficulte === 'Très Difficile' ? 'error' :
                                                            boss.difficulte === 'Difficile' ? 'warning' :
                                                                boss.difficulte === 'Moyen' ? 'info' : 'success'
                                                    }
                                                    variant="outlined"
                                                />
                                            </TableCell>
                                            <TableCell sx={{ fontSize: '0.75rem' }}>{boss.recompenses}</TableCell>
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
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Boss Guilde - Stratégie Khan')}
                    >
                        <Typography variant="h6">⚓ Khan - Stratégie Détaillée</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Alert severity="error" sx={{ mb: 2 }}>
                            <Typography variant="body2">
                                <strong>🌊 Khan - Boss le plus difficile !</strong> Disparaît après 30 minutes d'invocation.
                                Nécessite canons spéciaux et instance privée de guilde à Oeuil d'Oquilla.
                            </Typography>
                        </Alert>

                        <Typography variant="h6" gutterBottom color="primary.main">
                            Étapes de Combat
                        </Typography>
                        <TableContainer component={Paper} variant="outlined" sx={{ mb: 2 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Étape</strong></TableCell>
                                        <TableCell><strong>Action</strong></TableCell>
                                        <TableCell><strong>Description</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {khanStrategy.map((step, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Chip
                                                    label={step.etape}
                                                    size="small"
                                                    color="primary"
                                                />
                                            </TableCell>
                                            <TableCell><strong>{step.action}</strong></TableCell>
                                            <TableCell>{step.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    p: 2,
                                    bgcolor: 'warning.light',
                                    borderRadius: 1,
                                    height: '100%'
                                }}>
                                    <Typography variant="h6" gutterBottom color="warning.contrastText">
                                        🎯 Points Clés
                                    </Typography>
                                    <Typography variant="body2" color="warning.contrastText">
                                        • Algues noires = adds infinis si non détruits<br />
                                        • Boulets spéciaux {'>'} Boulets monstricides<br />
                                        • Pas de pénalité de mort<br />
                                        • Resurrection à Oeuil d'Oquilla possible
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    p: 2,
                                    bgcolor: 'error.light',
                                    borderRadius: 1,
                                    height: '100%'
                                }}>
                                    <Typography variant="h6" gutterBottom color="error.contrastText">
                                        ⚠️ Dangers
                                    </Typography>
                                    <Typography variant="body2" color="error.contrastText">
                                        • Zone œil = dégâts à l'apparition<br />
                                        • Soins si HP bas (stoppable en tuant les monstres)<br />
                                        • Message d'avertissement pour une grosse attaque qui détruit les canons<br />
                                        • Canons détruits après 30min
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                {/* <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Boss Guilde - Autres Boss')}
                    >
                        <Typography variant="h6">🔥 Autres Boss de Guilde</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary">
                            <strong>Essence of Fury :</strong> Obtenue via missions de combat de guilde.
                            Échangeable contre scrolls de boss spéciaux avec durée limitée.
                        </Typography>
                        <TableContainer component={Paper} variant="outlined">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Boss</strong></TableCell>
                                        <TableCell><strong>Coût</strong></TableCell>
                                        <TableCell><strong>Aide</strong></TableCell>
                                        <TableCell><strong>Expiration</strong></TableCell>
                                        <TableCell><strong>Récompenses</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {otherBosses.map((boss, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Chip
                                                    label={boss.nom}
                                                    size="small"
                                                    color={index === 0 ? 'error' : index === 1 ? 'warning' : 'info'}
                                                />
                                            </TableCell>
                                            <TableCell>{boss.obtention}</TableCell>
                                            <TableCell>{boss.aide}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={boss.expiration}
                                                    size="small"
                                                    color={boss.expiration === '3 jours' ? 'error' : 'success'}
                                                    variant="outlined"
                                                />
                                            </TableCell>
                                            <TableCell sx={{ fontSize: '0.75rem' }}>{boss.recompenses}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion> */}

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Boss Guilde - Stratégies Spécifiques')}
                    >
                        <Typography variant="h6">⚔️ Stratégies par Boss</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Paper sx={{ p: 2, mb: 2 }}>
                                    <Typography variant="h6" gutterBottom color="warning.main">
                                        🦅 Puturum l'ancien
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        • <strong>Position :</strong> Attaquez par derrière quand ailes déployées<br />
                                        • <strong>Pattern :</strong> Invulnérable en vol<br />
                                        • <strong>AOE :</strong> Attaque mortelle sur une large zone
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper sx={{ p: 2, mb: 2 }}>
                                    <Typography variant="h6" gutterBottom color="info.main">
                                        🌋 Ferrid
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        • <strong>Position :</strong> Attaquez par derrière (éviter stun frontal)<br />
                                        • <strong>Adds :</strong> Monstres de lave après coup de poing au sol<br />
                                        • <strong>Priorité :</strong> Détruire les monstres de lave rapidement<br />
                                        • <strong>Récompense :</strong> Énergie originelle (Node Wars)
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper sx={{ p: 2, mb: 2 }}>
                                    <Typography variant="h6" gutterBottom color="success.main">
                                        🌿 Boustre géant
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        • <strong>Mouvement :</strong> Lent mais AOE puissantes<br />
                                        • <strong>Debuff :</strong> Ralentit mouvement et attaque<br />
                                        • <strong>Adds :</strong> Petits mudsters explosifs<br />
                                        • <strong>Ultimate :</strong> Attaque au sol dans une large zone autour de lui
                                    </Typography>
                                </Paper>
                            </Grid>
                            {/* <Grid item xs={12} md={6}>
                                <Paper sx={{ p: 2, mb: 2 }}>
                                    <Typography variant="h6" gutterBottom color="error.main">
                                        👹 Muskan de la Folie
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        • <strong>Allié :</strong> Hakkon vous aide si protégé<br />
                                        • <strong>Adds :</strong> Vagues de cultistes fous<br />
                                        • <strong>Stratégie :</strong> Défendre Hakkon = gros dégâts sur Muskan<br />
                                        • <strong>Récompense :</strong> Muskan's Shoes possible
                                    </Typography>
                                </Paper>
                            </Grid> */}
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => trackEvent('Guide', 'Section_Expand', 'Boss Guilde - Conseils')}
                    >
                        <Typography variant="h6">💡 Conseils et Astuces</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            {generalTips.map((tip, index) => (
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

                        <Alert severity="success" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>🏆 Pro Tips :</strong> Commencez par Boustre géant (facile) pour apprendre les mécaniques de groupe.
                                Khan nécessite une préparation extensive et une guilde ayant des connaissances sur le sujet !
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <GuideResourcesSection
                    topic="des boss de guilde"
                    resources={bossResources}
                    videos={bossVideos}
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
                        📊 Résumé Progression Boss de Guilde
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        <strong>Étapes Essentielles :</strong><br />
                        1. Rejoindre une guilde active avec missions régulières<br />
                        2. Participer aux missions pour obtenir fragments/essences<br />
                        3. Commencer par Boustre géant (débutant-friendly)<br />
                        4. Progresser vers Ferrid → Puturum → Khan (expert)<br />
                        <strong>Récompenses :</strong> Équipement unique, pierres d'amélioration, matériaux Node Wars et surtout, beaucoup d'or !
                    </Typography>
                </Box>
            </DialogContent>

            <GuideModalActions
                onClose={onClose}
            />
        </Dialog>
    )
}

export default GuildBossGuideModal