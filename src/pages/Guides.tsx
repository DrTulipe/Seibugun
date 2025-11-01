import React, { useState } from 'react'
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    Button,
    Chip,
    Stack,
    Paper,
} from '@mui/material'
import {
    MenuBook as GuideIcon,
    Security as DefenseIcon,
    SportsEsports as GameIcon,
    TrendingUp as ProgressIcon,
    Group as GroupIcon,
    Star as StarIcon,
} from '@mui/icons-material'
import TrocGuideModal from '../components/TrocGuideModal'
import AlchemyGuideModal from '../components/AlchemyGuideModal'
import InfinitePotionsGuideModal from '../components/InfinitePotionsGuideModal'

const Guides: React.FC = () => {
    const [trocModalOpen, setTrocModalOpen] = useState(false)
    const [alchemyModalOpen, setAlchemyModalOpen] = useState(false)
    const [infinitePotionsModalOpen, setInfinitePotionsModalOpen] = useState(false)

    // Liste des guides disponibles avec modal
    const availableGuides = ['Troc', 'Alchimie', 'Potions infinies (HP et MP)']

    const isGuideAvailable = (guideName: string) => {
        return availableGuides.includes(guideName)
    }

    const handleGuideClick = (guideName: string) => {
        if (!isGuideAvailable(guideName)) {
            return // Ne rien faire si le guide n'est pas disponible
        }

        if (guideName === 'Troc') {
            setTrocModalOpen(true)
        } else if (guideName === 'Alchimie') {
            setAlchemyModalOpen(true)
        } else if (guideName === 'Potions infinies (HP et MP)') {
            setInfinitePotionsModalOpen(true)
        }
    }

    const guideCategories = [
        {
            title: 'Guides Débutants',
            description: 'Tout ce qu\'il faut savoir pour bien commencer',
            icon: <GuideIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
            guides: [
                { name: 'Création de personnage', icon: '👤' },
                { name: 'Premiers pas dans le monde', icon: '🌍' },
                { name: 'Interface et contrôles', icon: '🎮' },
                { name: 'Système de quêtes', icon: '📜' },
            ],
            color: 'primary.main',
        },
        {
            title: 'Progression PvE',
            description: 'Optimisez votre progression en PvE',
            icon: <ProgressIcon sx={{ fontSize: 48, color: '#c200b2' }} />,
            guides: [
                { name: 'Personnages saisonniers', icon: '👤' },
                { name: 'Spots de grind recommandés', icon: '📍' },
                { name: 'Optimisation de l\'équipement', icon: '⚔️' },
                { name: 'Gestion des ressources', icon: '📊' },
                { name: 'Potions infinies (HP et MP)', icon: '🧪' },
            ],
            color: '#c200b2',
        },
        {
            title: 'Activités de Guilde',
            description: 'Tout sur la vie de guilde et ses activités',
            icon: <GroupIcon sx={{ fontSize: 48, color: 'warning.main' }} />,
            guides: [
                { name: 'Quêtes de Guilde', icon: '📜' },
                { name: 'Salaires', icon: '💰' },
                { name: 'Boss de Guilde', icon: '🐉' },
            ],
            color: 'warning.main',
        },
        {
            title: 'Classes & Builds',
            description: 'Guides spécialisés par classe',
            icon: <GameIcon sx={{ fontSize: 48, color: 'info.main' }} />,
            guides: [
                { name: 'Cristaux', icon: '📈' },
                { name: 'Succession vs Éveil', icon: '🔀' },
                { name: 'Équipement recommandé', icon: '🎯' },
            ],
            color: 'info.main',
        },
        {
            title: 'Métiers',
            description: 'Maîtrisez tous les métiers du jeu',
            icon: <StarIcon sx={{ fontSize: 48, color: 'success.main' }} />,
            guides: [
                { name: 'Récolte', icon: '🌿' },
                { name: 'Pêche', icon: '🎣' },
                { name: 'Chasse', icon: '🏹' },
                { name: 'Cuisine', icon: '🍳' },
                { name: 'Alchimie', icon: '⚗️' },
                { name: 'Transformation', icon: '🔨' },
                { name: 'Dressage', icon: '🐎' },
                { name: 'Commerce', icon: '💰' },
                { name: 'Agriculture', icon: '🌾' },
                { name: 'Navigation', icon: '⛵' },
                { name: 'Troc', icon: '🔄' },
            ],
            color: 'success.main',
        },
        {
            title: 'Combat PvP',
            description: 'Stratégies et techniques de combat joueur',
            icon: <DefenseIcon sx={{ fontSize: 48, color: 'error.main' }} />,
            guides: [
                { name: 'Stratégies Arène de Solare', icon: '⚡' },
                { name: 'Gestion des CCs en PvP', icon: '🎯' },
                { name: 'Node Wars & Siege', icon: '🏰' },
                { name: 'Serveur Arsha', icon: '⚔️' },
            ],
            color: 'error.main',
        },
    ]

    return (
        <Box>
            {/* Header Section */}
            <Paper
                elevation={2}
                sx={{
                    background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                    color: 'white',
                    p: 6,
                    mb: 4,
                    borderRadius: 2,
                    textAlign: 'center',
                }}
            >
                <GuideIcon sx={{ fontSize: 64, mb: 2 }} />
                <Typography variant="h3" component="h1" gutterBottom>
                    Guides Seibugun
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
                    Retrouvez tous nos guides pour progresser efficacement dans Black Desert Online.
                    Des conseils pour débutants aux stratégies avancées !
                </Typography>
            </Paper>

            {/* Légende des statuts */}
            <Box sx={{ mb: 3, textAlign: 'center' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
                    <Chip
                        label="✅ Guide interactif disponible"
                        color="success"
                        variant="filled"
                        size="small"
                    />
                    <Chip
                        label="⏳ Bientôt disponible (Discord)"
                        color="default"
                        variant="outlined"
                        size="small"
                        sx={{ opacity: 0.6 }}
                    />
                </Stack>
            </Box>

            {/* Guides Grid */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {guideCategories.map((category, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 4,
                                },
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                <Box sx={{ textAlign: 'center', mb: 2 }}>
                                    {category.icon}
                                </Box>
                                <Typography variant="h5" component="h2" gutterBottom textAlign="center">
                                    {category.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 3, textAlign: 'center' }}
                                >
                                    {category.description}
                                </Typography>
                                <Stack spacing={1} sx={{ mb: 3 }}>
                                    {category.guides.map((guide, guideIndex) => {
                                        const guideName = typeof guide === 'string' ? guide : guide.name
                                        const isAvailable = isGuideAvailable(guideName)

                                        return (
                                            <Chip
                                                key={guideIndex}
                                                label={
                                                    typeof guide === 'string'
                                                        ? guide + (isAvailable ? '' : ' (Bientôt disponible)')
                                                        : `${guide.icon} ${guide.name}${isAvailable ? '' : ' (Bientôt disponible)'}`
                                                }
                                                size="small"
                                                variant="outlined"
                                                clickable={isAvailable}
                                                onClick={() => handleGuideClick(guideName)}
                                                sx={{
                                                    borderColor: isAvailable ? category.color : 'grey.400',
                                                    color: isAvailable ? category.color : 'grey.500',
                                                    cursor: isAvailable ? 'pointer' : 'not-allowed',
                                                    opacity: isAvailable ? 1 : 0.6,
                                                    '&:hover': isAvailable ? {
                                                        backgroundColor: category.color,
                                                        color: 'white',
                                                    } : {},
                                                    '&.MuiChip-clickable:hover': !isAvailable ? {
                                                        backgroundColor: 'transparent',
                                                    } : {}
                                                }}
                                            />
                                        )
                                    })}
                                </Stack>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        backgroundColor: category.color,
                                        '&:hover': {
                                            backgroundColor: category.color,
                                            opacity: 0.8,
                                        },
                                    }}
                                    href="https://discord.gg/xejvGDwczy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Voir sur Discord
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Call to Action */}
            <Paper
                elevation={1}
                sx={{
                    p: 4,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom color="text.secondary">
                    Besoin d'aide ou de conseils ?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
                    Rejoignez notre Discord pour accéder à tous les guides détaillés, poser vos questions
                    et échanger avec la communauté. Nos membres expérimentés sont là pour vous aider !
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="center"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        href="https://discord.gg/xejvGDwczy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Rejoindre Discord
                    </Button>
                </Stack>
            </Paper>

            {/* Modal du Guide du Troc */}
            <TrocGuideModal
                open={trocModalOpen}
                onClose={() => setTrocModalOpen(false)}
            />

            {/* Modal du Guide d'Alchimie */}
            <AlchemyGuideModal
                open={alchemyModalOpen}
                onClose={() => setAlchemyModalOpen(false)}
            />

            {/* Modal du Guide des Potions Infinies */}
            <InfinitePotionsGuideModal
                open={infinitePotionsModalOpen}
                onClose={() => setInfinitePotionsModalOpen(false)}
            />
        </Box>
    )
}

export default Guides