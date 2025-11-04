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
    Chip,
    Box,
    Alert,
} from '@mui/material'
import {
    ExpandMore as ExpandMoreIcon,
    LocalHospital as HealthIcon,
    AutoAwesome as ManaIcon,
    Schedule as TimeIcon,
    LocationOn as LocationIcon,
    Build as CraftIcon,
    Star as StarIcon,
    AttachMoney as MoneyIcon,
    Warning as WarningIcon,
} from '@mui/icons-material'
import GuideModalActions from './GuideModalActions'
import { useMatomo } from '../hooks/useMatomo'

interface InfinitePotionsGuideModalProps {
    open: boolean
    onClose: () => void
}

const InfinitePotionsGuideModal: React.FC<InfinitePotionsGuideModalProps> = ({ open, onClose }) => {
    const { trackEvent } = useMatomo()

    // Tracker l'ouverture du guide
    useEffect(() => {
        if (open) {
            trackEvent('Guide', 'Open', 'Potions Infinies')
        }
    }, [open, trackEvent])
    const hpPotionPieces = [
        {
            name: "Remède des Sherekhans ancestral",
            pityPiece: "Dent de dragon x100",
            location: "Nécropole des Sherekhans",
            monsters: ["Garud", "Belcadas", "Esprit Gardien de Sherekhan"],
            minAP: 190,
            additional: "Afuaru (Pity Pieces de tous les monstres)",
            weeklyQuest: {
                name: "[Hebdomadaire] Dent de dragon",
                npc: "Camira",
                requirement: "Tuer 1,000 monstres dans la Nécropole des Sherekhans",
                reward: "Dent de dragon x5"
            }
        },
        {
            name: "Clochettes de Ron ancestrales",
            pityPiece: "Clochettes Inaltérées x100",
            location: "Forêt des Ronaros (Forêt des Fées des Dents)",
            monsters: ["Gardien Ronaros forestier", "Chasseur Ronaros forestier"],
            minAP: 190,
            additional: "Afuaru (Pity Pieces de tous les monstres)",
            weeklyQuest: {
                name: "[Hebdomadaire] Clochette Inaltérée",
                npc: "Navir",
                requirement: "Tuer 1,000 monstres à Forest Ronaros",
                reward: "Clochettes Inaltérées x5"
            }
        },
        {
            name: "Œil demi-lune cendrée de Kagtunak ancestral",
            pityPiece: "Serment des Loups Sanglants x100",
            location: "Repère des Loups Sanglants",
            monsters: ["Bourreau Kagtum", "Guarde Kagtum"],
            minAP: 180,
            additional: "Afuaru (Pity Pieces de tous les monstres)",
            weeklyQuest: {
                name: "[Hebdomadaire] Repère des Loups Sanglants",
                npc: "Lao",
                requirement: "Tuer 1,500 monstres dans le Repère des Loups Sanglants",
                reward: "Serment des Loups Sanglants x5"
            }
        }
    ]

    const mpPotionPieces = [
        {
            name: "Clairvoyance de Valtarra ancestrale",
            pityPiece: "Mémoire de Valtarra x100",
            location: "Steppe de Navarn",
            monsters: ["Ferrica", "Ferrina", "Éléphanteau belladone (couteau de tanneur uniquement)", "Éléphant belladone"],
            minAP: 190,
            additional: "Afuaru (Pity Pieces de tous les monstres)",
            weeklyQuest: {
                name: "[Hebdomadaire] Mémoire de Valtarra",
                npc: "Enro",
                requirement: "Tuer 250 monstres et obtenir 250 Plumes dans la plaine de Navarn",
                reward: "Mémoire de Valtarra x5"
            }
        },
        {
            name: "Glande de Markthanan",
            pityPiece: "Venin de Katzvariak x100",
            location: "Ruines de Tshira",
            monsters: ["Gardebreuils", "Gardevignes", "Gardefeuille"],
            minAP: 140,
            additional: "Afuaru (Pity Pieces de tous les monstres)",
            weeklyQuest: {
                name: "[Hebdomadaire] Venin de Katzvariak",
                npc: "Leon",
                requirement: "Tuer 1,500 monstres dans les Ruines de Tshira",
                reward: "Venin de Katzvariak x5"
            }
        },
        {
            name: "Larme écarlate de Narc ancestrale",
            pityPiece: "Consolation de Narc x100",
            location: "Forêt des Manshaum",
            monsters: ["Chaman Manshaum"],
            minAP: 190,
            additional: "Afuaru (Pity Pieces de tous les monstres)",
            weeklyQuest: {
                name: "[Hebdomadaire] Consolation de Narc",
                npc: "Viverza",
                requirement: "Tuer 1,000 monstres dans la Forêt des Manshaum",
                reward: "Consolation de Narc x5"
            }
        }
    ]

    const finalHPPieces = [
        {
            name: "Pierre sonore de l'esprit musical",
            requirement: "Montrer les 3 pièces à Merindora",
            exchange: "Échanger Feuille de péridot x300 à Moyamo",
            note: "Feuilles de péridot obtenues via les quêtes quotidiennes à Kamaslyvia ou quête principale de Kamaslyvia"
        },
        {
            name: "Pierre de courage de Gayak",
            requirement: "Montrer les 3 pièces à Merindora",
            exchange: "Échanger Écaille de Garmoth x30 chez Camira",
            note: "Écailles de Garmoth drop de certains monstres à Dreighan, ou achetables au Marché Central"
        }
    ]

    const finalMPPieces = [
        {
            name: "Pierre de protection de Krogdalo",
            requirement: "Montrer les 3 pièces à Merindora",
            exchange: "Échanger Éclat de Terre grondante x100 chez Manifestation de Krogdalo",
        },
        {
            name: "Pierre de l'aube du corbeau nocturne",
            requirement: "Montrer les 3 pièces à Merindora",
            exchange: "Échanger Écaille de dragon fossilisée x100 au Nid de Garmoth",
            note: "Écailles de dragon fossilisées drop de certains monstres à Duvencrune ou achetables au Marché Central"
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
            <DialogTitle sx={{
                background: 'linear-gradient(135deg, #4c4f70 0%, #6a6d8a 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <HealthIcon />
                    <ManaIcon />
                </Box>
                <Typography variant="h5">
                    Guide des Potions Infinies
                </Typography>
            </DialogTitle>

            <DialogContent dividers sx={{ p: 3 }}>
                {/* Introduction */}
                <Alert severity="info" sx={{ mb: 3 }}>
                    <Typography variant="body2">
                        Les Potions Infinies sont des trésors à collecter dans BDO qui fonctionnent comme des potions sans fin.
                        Vous devez collecter 5 pièces et les combiner ensemble. Chaque pièce peut être lootée en bashant des monstres,
                        mais peut être accélérée avec les quêtes hebdomadaires. Les potions ont un poids de 50LT
                        et les mêmes stats/cooldown que les potions XL instantanées, sans coût d'utilisation.
                        Elles peuvent (Doivent dans l'idéal) être stockées dans l'inventaire de famille.
                    </Typography>
                </Alert>

                <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Chip
                        icon={<HealthIcon />}
                        label="Essence Spirituelle d'Ornette (HP Infinie)"
                        color="error"
                        variant="outlined"
                    />
                    <Chip
                        icon={<ManaIcon />}
                        label="Essence Spirituelle d'Odore (MP/WP/EP/SP Infinie)"
                        color="info"
                        variant="outlined"
                    />
                </Box>

                {/* Potion HP */}
                <Accordion
                    defaultExpanded
                    onChange={(_event, isExpanded) => {
                        if (isExpanded) {
                            trackEvent('Guide', 'Section_Expand', 'Potions Infinies - HP Potion')
                        }
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <HealthIcon color="error" />
                            <Typography variant="h6">
                                Essence Spirituelle d'Ornette (Potion HP Infinie)
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* Pièces principales HP */}
                        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LocationIcon color="primary" />
                            Pièces principales (3/5)
                        </Typography>

                        <TableContainer component={Paper} sx={{ mb: 3 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Pièce</strong></TableCell>
                                        <TableCell><strong>Localisation</strong></TableCell>
                                        <TableCell><strong>Monstres</strong></TableCell>
                                        <TableCell><strong>AP Min</strong></TableCell>
                                        <TableCell><strong>Pity Piece</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {hpPotionPieces.map((piece, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <strong>{piece.name}</strong>
                                            </TableCell>
                                            <TableCell>{piece.location}</TableCell>
                                            <TableCell>
                                                <Box sx={{ maxWidth: 200 }}>
                                                    {piece.monsters.map((monster, i) => (
                                                        <Chip
                                                            key={i}
                                                            label={monster}
                                                            size="small"
                                                            sx={{ m: 0.2, fontSize: '0.7rem' }}
                                                        />
                                                    ))}
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Chip label={`${piece.minAP} AP`} color="warning" size="small" />
                                            </TableCell>
                                            <TableCell>{piece.pityPiece}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* Quêtes hebdomadaires HP */}
                        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TimeIcon />
                            Quêtes hebdomadaires (Reset jeudi 00:00 UTC)
                        </Typography>

                        <TableContainer component={Paper} sx={{ mb: 3 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Quête</strong></TableCell>
                                        <TableCell><strong>PNJ</strong></TableCell>
                                        <TableCell><strong>Objectif</strong></TableCell>
                                        <TableCell><strong>Récompense</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {hpPotionPieces.map((piece, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{piece.weeklyQuest.name}</TableCell>
                                            <TableCell>{piece.weeklyQuest.npc}</TableCell>
                                            <TableCell>{piece.weeklyQuest.requirement}</TableCell>
                                            <TableCell>
                                                <Chip label={piece.weeklyQuest.reward} color="success" size="small" />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* Pièces finales HP */}
                        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <StarIcon color="warning" />
                            Pièces finales (2/5) - Après avoir obtenu les 3 premières
                        </Typography>

                        <TableContainer component={Paper} sx={{ mb: 3 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Pièce</strong></TableCell>
                                        <TableCell><strong>Prérequis</strong></TableCell>
                                        <TableCell><strong>Échange</strong></TableCell>
                                        <TableCell><strong>Note</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {finalHPPieces.map((piece, index) => (
                                        <TableRow key={index}>
                                            <TableCell><strong>{piece.name}</strong></TableCell>
                                            <TableCell>{piece.requirement}</TableCell>
                                            <TableCell>{piece.exchange}</TableCell>
                                            <TableCell>
                                                <Typography variant="caption" color="text.secondary">
                                                    {piece.note}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* Création HP */}

                        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CraftIcon color="success" />
                            Création de la Potion HP
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Méthode Recommandée: Sac d'assemblage de Yaz
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                • Ouvrir l'inventaire et cliquer sur l'icône "Sac d'assemblage de Yaz" en bas<br />
                                • Clic droit sur les 5 pièces pour les ajouter au sac<br />
                                • Réorganiser les pièces en forme de + (croix)<br />
                                • Cliquer sur le bouton + dans le coin pour combiner
                            </Typography>
                            <Box sx={{ textAlign: 'center', my: 2 }}>
                                <img
                                    src="/ornetcombinaison.png"
                                    alt="Combinaison des pièces pour Ornette's Spirit Essence"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>

                {/* Potion MP */}
                <Accordion
                    onChange={(_event, isExpanded) => {
                        if (isExpanded) {
                            trackEvent('Guide', 'Section_Expand', 'Potions Infinies - MP Potion')
                        }
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <ManaIcon color="info" />
                            <Typography variant="h6">
                                Essence Spirituelle d'Odore (Potion MP/WP/EP/SP Infinie)
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* Pièces principales MP */}
                        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LocationIcon color="primary" />
                            Pièces principales (3/5)
                        </Typography>

                        <TableContainer component={Paper} sx={{ mb: 3 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Pièce</strong></TableCell>
                                        <TableCell><strong>Localisation</strong></TableCell>
                                        <TableCell><strong>Monstres</strong></TableCell>
                                        <TableCell><strong>AP Min</strong></TableCell>
                                        <TableCell><strong>Spécial</strong></TableCell>
                                        <TableCell><strong>Pity Piece</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {mpPotionPieces.map((piece, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <strong>{piece.name}</strong>
                                            </TableCell>
                                            <TableCell>{piece.location}</TableCell>
                                            <TableCell>
                                                <Box sx={{ maxWidth: 180 }}>
                                                    {piece.monsters.map((monster, i) => (
                                                        <Chip
                                                            key={i}
                                                            label={monster}
                                                            size="small"
                                                            sx={{ m: 0.2, fontSize: '0.7rem' }}
                                                        />
                                                    ))}
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Chip label={`${piece.minAP} AP`} color="warning" size="small" />
                                            </TableCell>
                                            <TableCell>{piece.pityPiece}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* Quêtes hebdomadaires MP */}
                        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TimeIcon />
                            Quêtes hebdomadaires (Reset jeudi 00:00 UTC)
                        </Typography>

                        <TableContainer component={Paper} sx={{ mb: 3 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Quête</strong></TableCell>
                                        <TableCell><strong>PNJ</strong></TableCell>
                                        <TableCell><strong>Objectif</strong></TableCell>
                                        <TableCell><strong>Récompense</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {mpPotionPieces.map((piece, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{piece.weeklyQuest.name}</TableCell>
                                            <TableCell>{piece.weeklyQuest.npc}</TableCell>
                                            <TableCell>{piece.weeklyQuest.requirement}</TableCell>
                                            <TableCell>
                                                <Chip label={piece.weeklyQuest.reward} color="success" size="small" />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* Pièces finales MP */}
                        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <StarIcon color="warning" />
                            Pièces finales (2/5) - Après avoir obtenu les 3 premières
                        </Typography>

                        <TableContainer component={Paper} sx={{ mb: 3 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Pièce</strong></TableCell>
                                        <TableCell><strong>Prérequis</strong></TableCell>
                                        <TableCell><strong>Échange</strong></TableCell>
                                        <TableCell><strong>Note</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {finalMPPieces.map((piece, index) => (
                                        <TableRow key={index}>
                                            <TableCell><strong>{piece.name}</strong></TableCell>
                                            <TableCell>{piece.requirement}</TableCell>
                                            <TableCell>{piece.exchange}</TableCell>
                                            <TableCell>
                                                <Typography variant="caption" color="text.secondary">
                                                    {piece.note}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* Création MP */}
                        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CraftIcon color="success" />
                            Création de la Potion MP
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 2 }}>
                            <strong>Uniquement via le Sac d'assemblage de Yaz :</strong><br />
                            • Ouvrir l'inventaire et cliquer sur l'icône "Sac d'assemblage de Yaz" en bas<br />
                            • Clic droit sur les 5 pièces pour les ajouter au sac<br />
                            • Réorganiser les pièces en forme de + (croix)<br />
                            • Cliquer sur le bouton + dans le coin pour combiner<br />
                        </Typography>
                        <Box sx={{ textAlign: 'center', my: 2 }}>
                            <img
                                src="/odorecombinaison.png"
                                alt="Combinaison des pièces pour L'essence spirituelle d'Odore"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                {/* Échange Atanis' Element */}
                <Accordion
                    onChange={(_event, isExpanded) => {
                        if (isExpanded) {
                            trackEvent('Guide', 'Section_Expand', 'Potions Infinies - Atanis Element')
                        }
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <MoneyIcon color="warning" />
                            <Typography variant="h6">
                                Échange Element d'Atanis
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            L'Element d'Atanis peut être échangé contre des Pity Pieces des potions infinies.
                            Cet objet s'obtient en battant des monstres dans certaines zones de grind ou via le pass saisonnier.
                        </Typography>

                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Zones où obtenir l'Element d'Atanis :
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                            {[
                                "Forêt de Polly", "Cimetière du Traître", "Temple des nagas du désert",
                                "Vallée de Titium", "Ruine de Mirumok", "Camp Bashim",
                                "Ruines de Cadry", "Sanctuaire du Croissant", "Territoire des Fadus", "Grotte aux de Protty"
                            ].map((location) => (
                                <Chip key={location} label={location} size="small" color="success" variant="outlined" />
                            ))}
                        </Box>

                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Échanges disponibles (Fond d'échange - icône près de la minimap) :
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Coût</strong></TableCell>
                                        <TableCell><strong>Récompense</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>1x Element d'Atanis</TableCell>
                                        <TableCell>
                                            1x Pity Piece au choix
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>20x Element d'Atanis</TableCell>
                                        <TableCell>1x Pierre Originelle de Krogdalo</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>

                {/* Conseils généraux */}
                <Accordion
                    onChange={(_event, isExpanded) => {
                        if (isExpanded) {
                            trackEvent('Guide', 'Section_Expand', 'Potions Infinies - Conseils')
                        }
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <WarningIcon color="info" />
                            <Typography variant="h6">
                                Conseils et Notes importantes
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Alert severity="info">
                                <Typography variant="body2">
                                    <strong>Temps de farm :</strong> Cela peut varier énormément selon votre RNG, personnellement après plusieurs centaines d'heures de farm sur chaque spot, je n'ai eu que des pity pieces.
                                    Les quêtes hebdomadaires permettent d'accélérer significativement le processus (20 semaines sans événement).
                                    Il peut y avoir des évènements permettant d'obtenir 20 pity pieces par semaine, réduisant le temps à 5 semaines.
                                </Typography>
                            </Alert>

                            <Alert severity="warning">
                                <Typography variant="body2">
                                    <strong>Afuaru :</strong> Ce monstre spécial peut dropper toutes les pièces des potions infinies avec un meilleur taux (chances boostées),
                                    ainsi que les pity pieces de toutes les zones. Il apparaît aléatoirement pendant que vous tuez des monstres.
                                </Typography>
                            </Alert>

                            <Alert severity="error">
                                <Typography variant="body2">
                                    <strong>Central Market :</strong> Vous pouvez acheter les potions infinies complètes au Central Market
                                    au lieu de les farmer, mais elles sont très chères (plusieurs milliards).
                                </Typography>
                            </Alert>

                            <Alert severity="info">
                                <Typography variant="body2">
                                    <strong>Inventaire de famille :</strong> Une fois créées, les potions peuvent être placées dans l'inventaire familial
                                    pour être utilisées par tous vos personnages.
                                </Typography>
                            </Alert>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </DialogContent>

            <GuideModalActions
                onClose={onClose}
                discordText="Besoin d'aide avec les potions infinies ?"
                guideName="Potions Infinies"
            />
        </Dialog>
    )
}

export default InfinitePotionsGuideModal