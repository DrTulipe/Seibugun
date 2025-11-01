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
    Alert,
} from '@mui/material'
import {
    Close as CloseIcon,
    ExpandMore as ExpandMoreIcon,
    Science as AlchemyIcon,
    Build as ToolIcon,
    Star as GradeIcon,
    Speed as TimeIcon,
    LocalFireDepartment as StoneIcon,
    Category as IngredientIcon,

    MonetizationOn as ProfitIcon,
} from '@mui/icons-material'
import GuideModalActions from './GuideModalActions'

interface AlchemyGuideModalProps {
    open: boolean
    onClose: () => void
}

const AlchemyGuideModal: React.FC<AlchemyGuideModalProps> = ({ open, onClose }) => {
    const alchemyTools = [
        { name: 'Outil d\'Alchimie', durability: 100, time: 'Normal', price: '5 000 argent', description: 'Outil de base du marchand' },
        { name: 'Outil Traditionnel de Balenos', durability: 500, time: '+5 sec', price: '50 000 argent', description: 'Plus lent que la normale' },
        { name: 'Outil d\'Alchimie Intermédiaire', durability: 500, time: 'Normal', price: 'Atelier Niveau 3', description: 'Bonne durabilité' },
        { name: 'Outil Traditionnel de Serendia', durability: 1250, time: '+6 sec', price: 'Atelier Niveau 3', description: 'Haute durabilité mais lent' },
        { name: 'Outil d\'Alchimie Avancé', durability: 900, time: '-1 sec', price: 'Atelier Niveau 4 (Glish uniquement)', description: 'RECOMMANDÉ - Plus rapide' },
        { name: 'Outil Traditionnel de Calpheon', durability: 2000, time: '+7 sec', price: 'Atelier Niveau 4 (Glish uniquement)', description: 'Très haute durabilité mais très lent' },
    ]

    const alchemyGear = [
        { name: 'Fiole de Manos', mastery: '+5 à +400', time: '-1 sec', exp: '+30%', weight: '+100 LT' },
        { name: 'Fiole de Gorgath', mastery: '+4 à +330', time: '-0.7 sec', exp: '+20%', weight: '+50 LT' },
        { name: 'Fiole de Loggia', mastery: '+3 à +280', time: '-0.4 sec', exp: '+10%', weight: '+30 LT' },
    ]

    const timeReductionBuffs = [
        { name: 'Tenue de Pavilla', reduction: '-2 sec', description: 'Boutique aux Perles (2 200 perles)' },
        { name: 'Outil d\'Alchimie Avancé', reduction: '-1 sec', description: 'Atelier Niveau 4 (Glish uniquement)' },
        { name: 'Breuvage de Verdure', reduction: '-1 sec', description: 'Transformation Simple - EXP Vie +20%' },
        { name: 'Repas Cron aux Fruits de Mer', reduction: '-0.6 sec', description: 'Maîtrise Vie +25, Poids +100 LT' },
        { name: 'Pierre de Vie (Tranchante)', reduction: '-1.4 sec', description: 'Pierre d\'alchimie niveau 5 améliorée' },
        { name: 'Pierre Spirituelle de Vie', reduction: '-1.1 sec', description: 'Drop des monstres de Kamaslyvia' },
        { name: 'Vêtements Brodés d\'Argent (+5)', reduction: '-7 sec', description: 'Moulin à Costume Niveau 1' },
        { name: 'Set Lightstone [Fragment d\'Étoile]', reduction: '-2 sec', description: 'EXP Alchimie +13%, Maîtrise +25' },
    ]

    const ingredientGroups = [
        {
            category: 'Champignons',
            description: 'Ratio : 1 Gros = 3 Blanc, 1 Haute-Qualité = 18 Blanc, 1 Spécial = 108 Blanc',
            examples: ['Champignon Flèche', 'Champignon Nuage', 'Champignon Fantôme', 'Champignon Tigre', 'Champignon Brouillard', 'Champignon Ancien']
        },
        {
            category: 'Herbes (Ratio différent)',
            description: 'Ratio : 1 Gros = 3 Blanc, 1 Haute-Qualité = 3 Blanc, 1 Spécial = 18 Blanc',
            examples: ['Herbe du Lever', 'Fleur Flocon de Feu', 'Herbe Crinière Sèche', 'Herbe Miel de Soie']
        },
        {
            category: 'Sang Type 1',
            description: 'Interchangeables dans les recettes',
            examples: ['Sang de Rhinocéros', 'Sang de Loup', 'Sang de Dragon Guépard', 'Sang de Flamant']
        },
        {
            category: 'Sang Type 2',
            description: 'Interchangeables dans les recettes',
            examples: ['Sang de Cochon', 'Sang de Cerf', 'Sang de Chèvre', 'Sang de Lama', 'Sang de Bœuf', 'Sang de Mouton']
        },
        {
            category: 'Sang Type 3',
            description: 'Interchangeables dans les recettes',
            examples: ['Sang de Renard', 'Sang de Scorpion', 'Sang de Marmotte', 'Sang de Singe', 'Sang de Raton Laveur']
        },
        {
            category: 'Sang Type 4',
            description: 'Interchangeables dans les recettes',
            examples: ['Sang d\'Ours', 'Sang de Lion', 'Sang de Dinosaure', 'Sang d\'Ogre', 'Sang de Troll']
        },
        {
            category: 'Sang Type 5',
            description: 'Interchangeables dans les recettes',
            examples: ['Sang de Lézard', 'Sang de Chauve-souris', 'Sang de Cobra', 'Sang d\'Oiseau Kuku']
        },
        {
            category: 'Substitutions Spéciales',
            description: 'Ratio 1:1 - Interchangeables',
            examples: ['Herbe Sauvage ↔ Mauvaises Herbes', 'Sel Séché au Soleil ↔ Sel']
        },
    ]

    const alchemyStoneTypes = [
        {
            type: 'Destruction',
            buffs: ['PA Totale', 'Précision Totale', 'Ignore Toutes Résistances', 'Vitesse d\'Attaque', 'Vitesse d\'Incantation'],
            duration: '5 minutes',
            color: 'error'
        },
        {
            type: 'Protection',
            buffs: ['Réduction Dégâts Totale', 'Esquive Totale', 'PV Max', 'Toutes Résistances'],
            duration: '5 minutes',
            color: 'info'
        },
        {
            type: 'Vie',
            buffs: ['Temps Alchimie/Cuisine -0.5 à -2.5 sec', 'Taux Succès Transformation +5 à +25%', 'Limite Poids +15 à +120 LT', 'Collecte/Pêche +1 à +3', 'Taux Drop Collecte +3 à +25%'],
            duration: '10 minutes',
            color: 'success'
        },
    ]

    const profitableItems = [
        'Élixirs (grades multiples pour meilleurs prix)',
        'Réactif Liquide Clair (ingrédient de base très demandé)',
        'Réactif en Poudre Pure (ingrédient de base très demandé)',
        'Pierres d\'Alchimie (toutes variétés)',
        'Boîtes d\'Alchimie Impériales (minimum 50M argent/jour)',
        'Sang de Clown (très rentable)',
        'Potions de MP (demande constante)',
        'Sockets de Cristaux (artisanat avancé)',
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
                    <AlchemyIcon sx={{ fontSize: 32, color: 'secondary.main' }} />
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        ⚗️ Guide Complet de l'Alchimie
                    </Typography>
                    <IconButton onClick={onClose} sx={{ color: 'grey.500' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>

            <DialogContent dividers>
                <Alert severity="info" sx={{ mb: 3 }}>
                    <Typography variant="body2">
                        <strong>L'Alchimie</strong> est un métier essentiel pour créer des potions MP, élixirs,
                        sockets de cristaux et pierres d'alchimie. Très profitable en AFK !
                    </Typography>
                </Alert>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom color="secondary.main">
                        📖 Pour Commencer
                    </Typography>
                    <List dense>
                        <ListItem>
                            <ListItemIcon>
                                <Typography variant="h6">🏠</Typography>
                            </ListItemIcon>
                            <ListItemText
                                primary="Placez un Outil d'Alchimie dans votre maison"
                                primaryTypographyProps={{ color: 'text.primary' }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Typography variant="h6">⚗️</Typography>
                            </ListItemIcon>
                            <ListItemText
                                primary="Achetez l'outil de base pour 5,000 silver chez un Alchimiste"
                                primaryTypographyProps={{ color: 'text.primary' }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Typography variant="h6">🎮</Typography>
                            </ListItemIcon>
                            <ListItemText
                                primary="Appuyez sur R pour ouvrir l'interface d'alchimie"
                                primaryTypographyProps={{ color: 'text.primary' }}
                            />
                        </ListItem>
                    </List>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <ToolIcon sx={{ mr: 1, color: 'warning.main' }} />
                        <Typography variant="h6">🔧 Outils d'Alchimie</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Alert severity="warning" sx={{ mb: 2 }}>
                            <Typography variant="body2">
                                <strong>⭐ Recommandation :</strong> Utilisez l'Outil d'Alchimie Avancé pour -1 sec et 900 durabilité.
                                Difficile à obtenir (Glish Atelier Niveau 4 uniquement) mais essentiel pour l'efficacité !
                            </Typography>
                        </Alert>
                        <TableContainer component={Paper} variant="outlined">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Outil</strong></TableCell>
                                        <TableCell><strong>Durabilité</strong></TableCell>
                                        <TableCell><strong>Temps</strong></TableCell>
                                        <TableCell><strong>Prix</strong></TableCell>
                                        <TableCell><strong>Notes</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {alchemyTools.map((tool, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{tool.name}</TableCell>
                                            <TableCell>{tool.durability}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={tool.time}
                                                    size="small"
                                                    color={tool.time.includes('-') ? 'success' : tool.time === '-' ? 'default' : 'error'}
                                                />
                                            </TableCell>
                                            <TableCell>{tool.price}</TableCell>
                                            <TableCell>{tool.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Typography variant="h6" sx={{ mt: 2, mb: 1 }} color="info.main">
                            💡 Réparation des Outils
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            Échangez un outil pleine durabilité contre un Repair Tool chez Dalissahine.
                            Utilisez F5 pour réparer votre outil au lieu de le remplacer.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <TimeIcon sx={{ mr: 1, color: 'success.main' }} />
                        <Typography variant="h6">⚡ Optimisation du Temps</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Alert severity="success" sx={{ mb: 2 }}>
                            <Typography variant="body2">
                                <strong>Objectif :</strong> Atteindre 1 seconde d'alchimie pour l'efficacité maximale<br />
                                <strong>Setup Idéal :</strong> Tenue Pavilla (-2s) + Outil Avancé (-1s) + Vêtements Brodés Argent +3 (-4s) + Pierre Vie Tranchante (-1.4s) + Repas Cron (-0.6s)
                            </Typography>
                        </Alert>

                        <Typography variant="h6" gutterBottom color="success.main">
                            Équipement de Maîtrise (Fioles)
                        </Typography>
                        <TableContainer component={Paper} variant="outlined" sx={{ mb: 2 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Flask</strong></TableCell>
                                        <TableCell><strong>Maîtrise</strong></TableCell>
                                        <TableCell><strong>Temps</strong></TableCell>
                                        <TableCell><strong>EXP</strong></TableCell>
                                        <TableCell><strong>Poids</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {alchemyGear.map((gear, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{gear.name}</TableCell>
                                            <TableCell>{gear.mastery}</TableCell>
                                            <TableCell>{gear.time}</TableCell>
                                            <TableCell>{gear.exp}</TableCell>
                                            <TableCell>{gear.weight}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Typography variant="h6" gutterBottom color="success.main">
                            Buffs de Réduction de Temps
                        </Typography>
                        <List dense>
                            {timeReductionBuffs.map((buff, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <Chip label={buff.reduction} size="small" color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={buff.name}
                                        secondary={buff.description}
                                        primaryTypographyProps={{ color: 'text.primary' }}
                                        secondaryTypographyProps={{ color: 'text.primary', fontWeight: 'medium' }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <IngredientIcon sx={{ mr: 1, color: 'info.main' }} />
                        <Typography variant="h6">🧪 Substitutions d'Ingrédients</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2 }} color="text.primary">
                            <strong>Principe :</strong> Les ingrédients de qualité supérieure peuvent remplacer plusieurs ingrédients de base
                        </Typography>

                        {ingredientGroups.map((group, index) => (
                            <Box key={index} sx={{ mb: 2 }}>
                                <Typography variant="h6" gutterBottom color="info.main">
                                    {group.category}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1, fontStyle: 'italic' }} color="text.primary">
                                    {group.description}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    {group.examples.map((example, idx) => (
                                        <Chip key={idx} label={example} size="small" variant="outlined" color="info" />
                                    ))}
                                </Box>
                            </Box>
                        ))}

                        <Alert severity="success" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>Astuce :</strong> Weed = Wild Grass et Salt = Sun-dried Salt (ratio 1:1)
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <StoneIcon sx={{ mr: 1, color: 'warning.main' }} />
                        <Typography variant="h6">💎 Pierres d'Alchimie</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2 }} color="text.primary">
                            <strong>Niveau requis :</strong> Apprenti 1 minimum. Plus haut niveau = meilleures chances de réussite.
                        </Typography>

                        <Alert severity="info" sx={{ mb: 2 }}>
                            <Typography variant="body2">
                                <strong>Recette de Base :</strong> Poudre Brillante x9 + Sang du Pécheur x6 + Réactif Liquide Clair x10 + Réactif en Poudre Pure x10 + Poudre du Temps x7
                            </Typography>
                        </Alert>

                        <Typography variant="h6" gutterBottom color="warning.main">
                            Taux de Réussite par Niveau
                        </Typography>
                        <TableContainer component={Paper} variant="outlined" sx={{ mb: 2 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Niveau</strong></TableCell>
                                        <TableCell><strong>Destruction</strong></TableCell>
                                        <TableCell><strong>Protection</strong></TableCell>
                                        <TableCell><strong>Vie</strong></TableCell>
                                        <TableCell><strong>Échec</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Apprenti 2</TableCell>
                                        <TableCell>15%</TableCell>
                                        <TableCell>15%</TableCell>
                                        <TableCell>15%</TableCell>
                                        <TableCell>55%</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Professionnel 2</TableCell>
                                        <TableCell>20%</TableCell>
                                        <TableCell>20%</TableCell>
                                        <TableCell>20%</TableCell>
                                        <TableCell>40%</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Artisan 2</TableCell>
                                        <TableCell>25%</TableCell>
                                        <TableCell>25%</TableCell>
                                        <TableCell>25%</TableCell>
                                        <TableCell>25%</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Maître 2</TableCell>
                                        <TableCell>30%</TableCell>
                                        <TableCell>30%</TableCell>
                                        <TableCell>30%</TableCell>
                                        <TableCell>10%</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Typography variant="h6" gutterBottom>
                            Types de Pierres d'Alchimie
                        </Typography>
                        {alchemyStoneTypes.map((stone, index) => (
                            <Box key={index} sx={{ mb: 2, p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
                                <Typography variant="h6" color={`${stone.color}.main`}>
                                    Pierre de {stone.type}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    <strong>Durée :</strong> {stone.duration}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    {stone.buffs.map((buff, idx) => (
                                        <Chip key={idx} label={buff} size="small" color={stone.color as any} variant="outlined" />
                                    ))}
                                </Box>
                            </Box>
                        ))}

                        <Typography variant="h6" sx={{ mt: 2 }} color="warning.main">
                            📈 Amélioration des Pierres
                        </Typography>
                        <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
                            • <strong>Polissage :</strong> 80-150% EXP pour tentative d'amélioration<br />
                            • <strong>Grades :</strong> Blanc → Vert → Bleu → Jaune → Orange<br />
                            • <strong>Niveaux :</strong> Imparfait → Brut → Poli → Solide → Tranchant → Resplendissant → Splendide → Brillant
                        </Typography>

                        <Alert severity="warning" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>⚠️ Risques d'Amélioration :</strong><br />
                                • <strong>Sturdy → Sharp :</strong> Le niveau diminue en cas d'échec<br />
                                • <strong>Resplendent → Splendid :</strong> La pierre est DÉTRUITE en cas d'échec<br />
                                • <strong>Splendid → Shining :</strong> La pierre est DÉTRUITE en cas d'échec
                            </Typography>
                        </Alert>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <ProfitIcon sx={{ mr: 1, color: 'success.main' }} />
                        <Typography variant="h6">💰 Rentabilité et Profit</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6" gutterBottom color="success.main">
                            Items Rentables à Produire
                        </Typography>
                        <List dense>
                            {profitableItems.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <Typography variant="body2" color="success.main" sx={{ fontWeight: 'bold' }}>•</Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{ color: 'text.primary' }}
                                    />
                                </ListItem>
                            ))}
                        </List>

                        <Alert severity="success" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>💎 Imperial Alchemy Boxes :</strong> Minimum 50M silver par jour en quelques minutes !
                                Achetez les items et transformez-les en boxes pour livraison.
                            </Typography>
                        </Alert>

                        <Typography variant="h6" sx={{ mt: 2 }} gutterBottom color="success.main">
                            Grades d'Items (du plus faible au plus fort)
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {['Blanc', 'Vert', 'Bleu', 'Jaune', 'Orange'].map((grade, index) => (
                                <Chip
                                    key={index}
                                    label={grade}
                                    size="small"
                                    color={index < 2 ? 'default' : index < 4 ? 'primary' : 'warning'}
                                />
                            ))}
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <GradeIcon sx={{ mr: 1, color: 'secondary.main' }} />
                        <Typography variant="h6">🎯 Production en Masse</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" sx={{ mb: 2 }} color="text.primary">
                            <strong>Méthode :</strong> Utilisez la "Batch Production" pour automatiser la création
                        </Typography>

                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">1️⃣</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Clic droit sur les ingrédients pour 1 résultat"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">2️⃣</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Cliquez sur 'Batch Production'"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">3️⃣</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Entrez la quantité ou appuyez F pour le maximum"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Typography variant="h6">⚡</Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary="La production se fait automatiquement !"
                                    primaryTypographyProps={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        </List>

                        <Typography variant="h6" sx={{ mt: 2 }} color="secondary.main">
                            🎁 Sous-produits d'Alchimie
                        </Typography>
                        <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
                            Items bonus obtenus aléatoirement pendant l'alchimie :
                        </Typography>

                        <Alert severity="info" sx={{ mb: 2 }}>
                            <Typography variant="body2">
                                <strong>Catalyseur Mystérieux x10 →</strong> Échangeable chez Dalissahine contre :<br />
                                • Poudre de Flamme x200 | Poudre de Faille x200 | Poudre de Terre x200 | Poudre du Temps x200<br />
                                • OU Poudre Brillante x5
                            </Typography>
                        </Alert>

                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, mt: 1 }}>
                            {[
                                'Graine Inconnue', 'Réactif en Poudre Pure', 'Vestiges d\'Esprits Brûlés', 'Réactif Liquide Clair',
                                'Fragment de Pierre d\'Alchimie', 'Pierre Cron', 'Huile de Corruption', 'Fragment de Cristal Noir Tranchant',
                                'Huile de Force', 'Fragment de Mémoire', 'Huile de Régénération', 'Cristal Opulent Brut',
                                'Poli à Gemmes', 'Pierre d\'Alchimie Solide', 'Solvant Métallique', 'Poudre Spirituelle Mystique'
                            ].map((item, index) => (
                                <Chip key={index} label={item} size="small" variant="outlined" />
                            ))}
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Box sx={{
                    mt: 3,
                    p: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    border: '2px solid',
                    borderColor: 'secondary.main'
                }}>
                    <Typography variant="h6" gutterBottom color="secondary.main">
                        📊 Résumé - Alchimie Optimale
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        <strong>Setup Idéal pour 1 sec :</strong><br />
                        • Outil d'Alchimie Avancé (-1s) + Fiole de Manos (Maîtrise)<br />
                        • Tenue Pavilla (-2s) + Breuvage de Verdure (-1s)<br />
                        • Pierre de Vie Tranchante (-1.4s) + Repas Cron (-0.6s)<br />
                        • OU Vêtements Brodés d'Argent +3 (-4s) sans Pavilla<br /><br />
                        <strong>Points Clés :</strong><br />
                        • 📦 Imperial Boxes = 50M+ argent/jour facilement<br />
                        • 🎯 Artisan+ recommandé pour pierres d'alchimie<br />
                        • 💎 BDOlytics.com pour calculer rentabilité<br />
                        • ⚡ Batch Production (F) pour automatiser
                    </Typography>
                </Box>
            </DialogContent>

            <GuideModalActions onClose={onClose} />
        </Dialog>
    )
}

export default AlchemyGuideModal