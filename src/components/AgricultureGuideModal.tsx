import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Box,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Alert,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material'
import {
    Close as CloseIcon,
    Agriculture as AgricultureIcon,
    Home as FenceIcon,
    Grass as SeedIcon,
    Build as ManagementIcon,
    Grass as HarvestIcon,
    Star as SpecialIcon,
    Info as InfoIcon,
    Warning as WarningIcon,
    ExpandMore as ExpandMoreIcon,
    MonetizationOn as ProfitIcon,
} from '@mui/icons-material'
import GuideModalActions from './GuideModalActions'

interface AgricultureGuideModalProps {
    open: boolean
    onClose: () => void
}

const AgricultureGuideModal: React.FC<AgricultureGuideModalProps> = ({ open, onClose }) => {

    const fenceTypes = [
        {
            name: 'Clôture miteuse',
            slots: 1,
            cost: 'Gratuit',
            source: 'Quête [Agriculture] Parce que je t\'apprécie (Néophyte 7 Récolte)'
        },
        {
            name: 'Petite clôture',
            slots: 4,
            cost: '3 PC',
            source: 'Martina Finto, Mael Costa, Enzo, Difry Hussey'
        },
        {
            name: 'Clôture ordinaire',
            slots: 7,
            cost: '6 PC',
            source: 'Paola Toscani, Mercianne Moretti, Norma Leight, etc.'
        },
        {
            name: 'Clôture solide',
            slots: 10,
            cost: '10 PC',
            source: 'Zaaira (Velia), Flaviano (Heidel), Geranoa (Calpheon), etc.'
        },
        {
            name: 'Clôture de la Vieille Lune',
            slots: 10,
            cost: '10 PC + Maître 1',
            source: 'PNJ Responsables de la Vieille Lune'
        }
    ]

    const prerequisSection = [
        { icon: '📈', text: 'Points de contribution pour louer des clôtures' },
        { icon: '🌱', text: 'Graines obtenues par récolte ou achat PNJ' },
        { icon: '💧', text: 'Eau distillée pour l\'arrosage' },
        { icon: '🧪', text: 'Engrais pour accélérer la croissance' },
    ]

    const tipsList = [
        'Regroupez tous vos jardins dans la même zone pour faciliter l\'entretien',
        'Choisissez des emplacements proches de vos lieux de passage fréquents',
        'Utilisez des Clôtures de la Vieille Lune pour économiser l\'espace (Maître 1 requis)',
        'Vérifiez le climat sur la carte du monde (M) avant de planter',
        'Commencez par vous occuper vous-même de vos jardins avant d\'assigner des ouvriers',
        'Installez épouvantails et canaux d\'irrigation pour réduire l\'entretien',
        'Les taupes apparaissent parfois lors de la récolte - elles donnent de bons objets !',
        'Utilisez le Sachet de graines de la Vieille Lune de Klau (Qualifié 1+) pour stocker 50 graines',
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
                    <AgricultureIcon sx={{ fontSize: 32, color: 'success.main' }} />
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        🌾 Guide Complet de l'Agriculture
                    </Typography>
                    <IconButton onClick={onClose} sx={{ color: 'grey.500' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>

            <DialogContent dividers>
                <Alert severity="info" sx={{ mb: 3 }}>
                    <Typography variant="body2">
                        <strong>L'Agriculture</strong> consiste à louer des clôtures et à créer des jardins pour cultiver
                        des plantes, obtenir des graines de meilleure qualité et produire des ressources comme le lait.
                    </Typography>
                </Alert>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom color="success.main">
                        📖 Pour Commencer
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        L'agriculture vous permet de créer vos propres jardins pour cultiver des plantes
                        et obtenir des ressources précieuses. Maximum 10 jardins clôturés possible.
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
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <FenceIcon sx={{ mr: 1, color: 'warning.main' }} />
                        <Typography variant="h6">🏠 Types de Clôtures et Location</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Alert severity="info" sx={{ mb: 3 }}>
                            Les clôtures sont louées avec des points de contribution (PC) auprès de PNJ spécialisés.
                            Vous pouvez avoir maximum 10 jardins clôturés.
                        </Alert>

                        <TableContainer component={Paper} variant="outlined">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Type de clôture</strong></TableCell>
                                        <TableCell align="center"><strong>Emplacements</strong></TableCell>
                                        <TableCell align="center"><strong>Coût</strong></TableCell>
                                        <TableCell><strong>Où l'obtenir</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {fenceTypes.map((fence, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{fence.name}</TableCell>
                                            <TableCell align="center">
                                                <Chip
                                                    label={fence.slots}
                                                    color={fence.slots === 10 ? 'success' : fence.slots >= 7 ? 'primary' : 'default'}
                                                    size="small"
                                                />
                                            </TableCell>
                                            <TableCell align="center">{fence.cost}</TableCell>
                                            <TableCell>{fence.source}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Typography variant="h6" sx={{ mt: 3, mb: 2 }} color="warning.main">
                            📍 Installation des Clôtures
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <InfoIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Clic droit sur la clôture dans l'inventaire pour passer en mode installation"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <WarningIcon color="warning" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Évitez les obstacles (rochers, arbres) lors de l'installation"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <InfoIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Placez les clôtures dans des zones vertes uniquement"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <InfoIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Appuyez sur R à l'intérieur de la clôture pour gérer le jardin"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        </List>

                        <Alert severity="success" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>⭐ Recommandation :</strong> Les Clôtures de la Vieille Lune prennent 2x moins de place
                                que les clôtures solides pour le même nombre d'emplacements ! (Maître 1 requis)
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <SeedIcon sx={{ mr: 1, color: 'success.main' }} />
                        <Typography variant="h6">🌱 Plantation et Climat</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Alert severity="info" sx={{ mb: 3 }}>
                            Vous pouvez planter des graines, des hyphes (champignons) et des meules de foin dans vos jardins.
                        </Alert>                        <Typography variant="h6" gutterBottom color="success.main">
                            Sources de graines
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">🌿</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Récolte de buissons et plantes sauvages"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">🏪</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Achat auprès de PNJ marchands"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">📜</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Récompenses de quêtes"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">🌾</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Meules de foin : séchage de 50 mauvaises herbes"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        </List>

                        <Alert severity="warning" sx={{ my: 2 }}>
                            <Typography variant="body2">
                                <strong>⚠️ Influence du Climat :</strong> Le climat influence fortement la croissance !
                                Vérifiez l'icône température sur la carte du monde (M) avant de planter.
                            </Typography>
                        </Alert>

                        <Typography variant="body2" sx={{ mb: 2 }} color="text.primary">
                            <strong>Comment déterminer le climat optimal :</strong><br />
                            1. Consultez la fiche de connaissance de la plante<br />
                            2. Vérifiez les infos sur la carte du monde<br />
                            3. Exemple : Aloès → naturellement à Mediah (sec) → privilégier zones arides
                        </Typography>

                        <Typography variant="h6" gutterBottom color="info.main">
                            Emplacements par Culture
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            <Chip label="Graines normales : 1 slot" size="small" color="default" />
                            <Chip label="Meules de foin : 4 slots" size="small" color="warning" />
                            <Chip label="Graines spéciales : 5 slots" size="small" color="success" />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <ManagementIcon sx={{ mr: 1, color: 'info.main' }} />
                        <Typography variant="h6">🔧 Entretien des Cultures</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Alert severity="warning" sx={{ mb: 3 }}>
                            <Typography variant="body2">
                                Si l'icône de votre clôture devient rouge sur la carte (M),
                                un problème nécessite votre intervention !
                            </Typography>
                        </Alert>

                        <Typography variant="h6" gutterBottom color="error.main">
                            Problèmes Courants et Solutions
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">🐛</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Parasites et maladies"
                                    secondary="Approchez-vous et appuyez sur R pour éliminer (coûte 1 énergie)"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                    secondaryTypographyProps={{ color: 'text.primary', fontWeight: 'medium' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">✂️</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Branches emmêlées"
                                    secondary="Élagage nécessaire (appuyez sur R, coûte 1 énergie)"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                    secondaryTypographyProps={{ color: 'text.primary', fontWeight: 'medium' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">🐦</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Attaques d'oiseaux"
                                    secondary="Utilisez un épouvantail pour les repousser"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                    secondaryTypographyProps={{ color: 'text.primary', fontWeight: 'medium' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Manque d'eau"
                                    secondary="Arrosez avec de l'eau distillée ou installez un canal d'irrigation"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                    secondaryTypographyProps={{ color: 'text.primary', fontWeight: 'medium' }}
                                />
                            </ListItem>
                        </List>

                        <Typography variant="h6" sx={{ mt: 3, mb: 2 }} color="info.main">
                            🛠️ Outils d'Amélioration
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                            <Chip label="Épouvantail : Anti-oiseaux" color="success" variant="outlined" />
                            <Chip label="Canal irrigation : Auto-arrosage" color="info" variant="outlined" />
                        </Box>

                        <Typography variant="body2" sx={{ mb: 2 }} color="text.primary">
                            <strong>Création d'Eau distillée :</strong><br />
                            Bouteille vide (Marchand) → Remplir à la rivière → Transformation Chauffage (L)
                        </Typography>

                        <Typography variant="body2" color="text.primary">
                            <strong>Types d'Engrais :</strong><br />
                            • Minéral : Séchage céréales • Dérivé : Minéral + fermentation • Biologique : Dérivé + eau (meilleur)
                        </Typography>

                        <Alert severity="info" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>💡 Gestion par Ouvriers :</strong> Assignez un ouvrier par jardin
                                pour qu'il gère automatiquement l'élagage et les parasites.
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <HarvestIcon sx={{ mr: 1, color: 'success.main' }} />
                        <Typography variant="h6">🌾 Récolte et Rendement</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Alert severity="success" sx={{ mb: 2 }}>
                            <Typography variant="body2">
                                Récoltez dès 100% de croissance (peut aller jusqu'à 200% sans perte)
                            </Typography>
                        </Alert>

                        <Typography variant="h6" gutterBottom color="primary.main">
                            Types de Récolte
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">🍎</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Récolte générale : Fruits, légumes, champignons, lait/viande"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">🧬</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Sélection végétaux : Graines & Graines de qualité supérieure"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        </List>

                        <Typography variant="h6" gutterBottom color="success.main">
                            Sous-produits et Récompenses
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                            <Chip label="Feuilles rouge clair" color="success" size="small" />
                            <Chip label="EXP Agriculture" color="primary" size="small" />
                            <Chip label="Éclats cristal noir" color="warning" size="small" />
                            <Chip label="Taupes rares" color="error" size="small" />
                        </Box>

                        <Alert severity="warning" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>Démolition Auto :</strong> Clôtures non utilisées 2 semaines →
                                démolies automatiquement → envoyées au dépôt ville la plus proche
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <SpecialIcon sx={{ mr: 1, color: 'secondary.main' }} />
                        <Typography variant="h6">⭐ Graines Spéciales</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Alert severity="info" sx={{ mb: 3 }}>
                            <Typography variant="body2">
                                <strong>📖 Principe :</strong> Les graines spéciales occupent 5 emplacements mais donnent
                                le rendement de 5 graines normales. Elles réduisent le temps d'entretien de vos jardins !
                            </Typography>
                        </Alert>

                        <Typography variant="h6" gutterBottom color="primary.main" sx={{ mb: 2 }}>
                            🔍 Comparaison Détaillée
                        </Typography>

                        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Critère</strong></TableCell>
                                        <TableCell align="center"><strong>Graines Normales</strong></TableCell>
                                        <TableCell align="center"><strong>Graines Mystérieuses</strong></TableCell>
                                        <TableCell align="center"><strong>Graines Magiques</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Emplacements utilisés</TableCell>
                                        <TableCell align="center">
                                            <Chip label="1" size="small" color="default" />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Chip label="5" size="small" color="warning" />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Chip label="5" size="small" color="secondary" />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Rendement</TableCell>
                                        <TableCell align="center">1x</TableCell>
                                        <TableCell align="center">5x</TableCell>
                                        <TableCell align="center">5x</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Niveau requis</TableCell>
                                        <TableCell align="center">Aucun</TableCell>
                                        <TableCell align="center">Aucun</TableCell>
                                        <TableCell align="center">Aucun</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Obtention</TableCell>
                                        <TableCell align="center">Facile</TableCell>
                                        <TableCell align="center">Faible chance</TableCell>
                                        <TableCell align="center">Chance fixe</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Durabilité</TableCell>
                                        <TableCell align="center">♻️ Infinie</TableCell>
                                        <TableCell align="center">⚠️ Usage unique</TableCell>
                                        <TableCell align="center">♻️ Renouvelables</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Fruits d'alchimie</TableCell>
                                        <TableCell align="center">Aléatoire</TableCell>
                                        <TableCell align="center">✅ Garantis</TableCell>
                                        <TableCell align="center">Aléatoire</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Typography variant="h6" gutterBottom color="warning.main">
                            ✨ Graines Mystérieuses - Pour l'Alchimie
                        </Typography>
                        <Paper sx={{ p: 2, mb: 3, border: '2px solid #ff9800' }} variant="outlined">
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                <strong>🎯 Utilisez-les quand :</strong>
                            </Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon><Typography variant="body2">•</Typography></ListItemIcon>
                                    <ListItemText
                                        primary="Vous avez besoin d'ingrédients spécifiques pour l'alchimie"
                                        primaryTypographyProps={{ color: 'text.primary' }}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><Typography variant="body2">•</Typography></ListItemIcon>
                                    <ListItemText
                                        primary="Vous voulez maximiser le rendement d'une graine rare"
                                        primaryTypographyProps={{ color: 'text.primary' }}
                                    />
                                </ListItem>
                            </List>
                            <Alert severity="warning">
                                <strong>⚠️ Important :</strong> Une fois utilisées, elles disparaissent !
                                Vous ne pouvez PAS récupérer d'autres graines mystérieuses de la récolte.
                            </Alert>
                        </Paper>

                        <Typography variant="h6" gutterBottom color="secondary.main">
                            🔮 Graines Magiques - Pour l'Efficacité
                        </Typography>
                        <Paper sx={{ p: 2, mb: 3, border: '2px solid #9c27b0' }} variant="outlined">
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                <strong>🎯 Utilisez-les quand :</strong>
                            </Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon><Typography variant="body2">•</Typography></ListItemIcon>
                                    <ListItemText
                                        primary="Vous voulez passer moins de temps à gérer vos jardins"
                                        primaryTypographyProps={{ color: 'text.primary' }}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><Typography variant="body2">•</Typography></ListItemIcon>
                                    <ListItemText
                                        primary="Vous voulez un système durable et renouvelable"
                                        primaryTypographyProps={{ color: 'text.primary' }}
                                    />
                                </ListItem>
                            </List>
                            <Alert severity="success">
                                <strong>✅ Avantage :</strong> Lors de la sélection de végétaux, vous pouvez
                                récupérer 1 graine magique ou plus, les rendant autosuffisantes !
                            </Alert>
                        </Paper>

                        <Typography variant="h6" gutterBottom color="info.main">
                            🔄 Comment Créer des Graines Spéciales
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom>
                            📋 Étape par Étape :
                        </Typography>
                        <List dense sx={{ mb: 2 }}>
                            <ListItem>
                                <ListItemIcon>
                                    <Chip label="1" color="primary" size="small" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Plantez une graine normale dans votre jardin"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Chip label="2" color="primary" size="small" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Attendez qu'elle atteigne 100% de croissance"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Chip label="3" color="primary" size="small" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Utilisez 'Sélection de végétaux' au lieu de 'Récolte générale'"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Chip label="4" color="primary" size="small" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Avec de la chance, obtenez une graine mystérieuse ou magique !"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        </List>

                        <Typography variant="h6" gutterBottom color="secondary.main">
                            ⚗️ Recette de Conversion (Avancé)
                        </Typography>
                        <Paper sx={{ p: 2, border: '1px solid #e0e0e0' }} variant="outlined">
                            <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
                                <strong>Transformer une Graine Spéciale en Graine Magique :</strong>
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                <Chip label="1x Graine Spéciale" size="small" color="default" />
                                <Typography variant="body2">+</Typography>
                                <Chip label="2x Graines Mystérieuses" size="small" color="warning" />
                                <Typography variant="body2">+</Typography>
                                <Chip label="10x Eau Purifiée" size="small" color="info" />
                                <Typography variant="body2">=</Typography>
                                <Chip label="1x Graine Magique" size="small" color="secondary" />
                            </Box>
                            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                                💡 Utile si vous avez des graines mystérieuses en trop
                            </Typography>
                        </Paper>

                        <Alert severity="info" sx={{ mt: 3 }}>
                            <Typography variant="body2">
                                <strong>🎨 Différence Visuelle :</strong> Les graines mystérieuses ont une
                                aura lumineuse brillante autour de leur icône. Les graines magiques n'ont pas cette aura.
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <ProfitIcon sx={{ mr: 1, color: 'success.main' }} />
                        <Typography variant="h6">💰 Conseils et Optimisation</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Alert severity="success" sx={{ mb: 2 }}>
                            <Typography variant="body2">
                                <strong>🐹 Taupes Rares :</strong> Apparaissent lors de la récolte !
                                Donnent des sous-produits + Pétales Chouchou (10 pétales = 1 familier)
                            </Typography>
                        </Alert>

                        <Typography variant="h6" gutterBottom color="success.main">
                            Conseils d'Optimisation
                        </Typography>
                        <List dense>
                            {tipsList.map((tip, index) => (
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

                        <Typography variant="h6" sx={{ mt: 2 }} gutterBottom color="info.main">
                            🎯 Progression Recommandée
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            <Chip label="1. Gestion manuelle" color="primary" size="small" />
                            <Chip label="2. Ouvriers" color="info" size="small" />
                            <Chip label="3. Maître 1" color="success" size="small" />
                        </Box>

                        <Typography variant="h6" sx={{ mt: 2 }} color="secondary.main">
                            📋 Quêtes Importantes
                        </Typography>
                        <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
                            • <strong>Niveau 20 :</strong> Liana (bases)<br />
                            • <strong>Néophyte 10 :</strong> Quêtes de bond<br />
                            • <strong>Qualifié 1 :</strong> Sachet de graines Klau
                        </Typography>
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
                        📊 Résumé - Agriculture Optimale
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        <strong>Setup Idéal :</strong><br />
                        • Clôtures de la Vieille Lune (Maître 1) pour économiser l'espace<br />
                        • Épouvantails + canaux d'irrigation pour réduire l'entretien<br />
                        • Ouvriers assignés pour gestion automatique<br />
                        • Graines magiques pour moins d'entretien<br /><br />
                        <strong>Points Clés :</strong><br />
                        • 🏠 Max 10 jardins • 🌡️ Vérifier climat sur carte (M)<br />
                        • 🐹 Taupes rares = familier Chouchou • 💧 Eau distillée essentielle<br />
                        • ⏰ Patience requise • 🎯 Semi-AFK avec ouvriers
                    </Typography>
                </Box>
            </DialogContent>

            <GuideModalActions onClose={onClose} />
        </Dialog>
    )
}

export default AgricultureGuideModal