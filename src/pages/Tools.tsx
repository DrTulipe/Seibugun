import React from 'react'
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActionArea,
    Grid,
    Container,
    Chip,
    Stack,
} from '@mui/material'
import {
    Analytics as AnalyticsIcon,
    Restaurant as RestaurantIcon,
    Science as ScienceIcon,
    Engineering as EngineeringIcon,
    Timeline as TimelineIcon,
    LocationOn as LocationIcon,
    LocalOffer as CouponsIcon,
    OpenInNew as ExternalLinkIcon,
    MenuBook as MenuBookIcon,
} from '@mui/icons-material'

interface ToolItem {
    title: string
    description: string
    url: string
    category: string
    icon: React.ReactNode
    color: string
}

const tools: ToolItem[] = [
    {
        title: 'BDOLytics',
        description: 'Plateforme complète d\'analyse et de données pour Black Desert',
        url: 'https://bdolytics.com/fr/EU',
        category: 'Analyse',
        icon: <AnalyticsIcon />,
        color: '#2196f3',
    },
    {
        title: 'Calculateur de cuisine',
        description: 'Calculez la rentabilité de vos recettes de cuisine avec les prix du marché',
        url: 'https://bdolytics.com/fr/EU/cooking/market',
        category: 'Artisanat',
        icon: <RestaurantIcon />,
        color: '#ff9800',
    },
    {
        title: 'Calculateur d\'alchimie',
        description: 'Optimisez vos profits en alchimie grâce aux prix actuels du marché',
        url: 'https://bdolytics.com/fr/EU/alchemy/market',
        category: 'Artisanat',
        icon: <ScienceIcon />,
        color: '#9c27b0',
    },
    {
        title: 'Optimisation des ouvriers',
        description: 'Gérez et optimisez efficacement vos ouvriers et leurs tâches',
        url: 'https://shrddr.github.io/workerman/',
        category: 'Gestion',
        icon: <EngineeringIcon />,
        color: '#4caf50',
    },
    {
        title: 'Garmoth',
        description: 'Hub central pour les données, boss et informations de BDO',
        url: 'https://garmoth.com/',
        category: 'Hub',
        icon: <TimelineIcon />,
        color: '#f44336',
    },
    {
        title: 'Spots de grind',
        description: 'Découvrez les meilleurs spots de farm selon votre niveau et vos objectifs',
        url: 'https://garmoth.com/grind-tracker/best-grind-spots',
        category: 'PvE',
        icon: <LocationIcon />,
        color: '#795548',
    },
    {
        title: 'Coupons',
        description: 'Codes promotionnels et coupons actuels pour Black Desert',
        url: 'https://garmoth.com/coupons',
        category: 'Promotions',
        icon: <CouponsIcon />,
        color: '#607d8b',
    },
    {
        title: 'BDOCodex',
        description: 'Base de données complète des objets, quêtes et informations de BDO',
        url: 'https://bdocodex.com/fr/',
        category: 'Base de données',
        icon: <MenuBookIcon />,
        color: '#673ab7',
    },
]

const Tools: React.FC = () => {
    const handleToolClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <Container maxWidth="xl" sx={{ py: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    🛠️ Outils Pratiques
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                    Outils essentiels pour optimiser votre expérience sur Black Desert
                </Typography>
            </Box>

            <Grid container spacing={2} sx={{ mb: 2 }}>
                {tools.map((tool) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={tool.title}>
                        <Card
                            sx={{
                                height: 180,
                                transition: 'all 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: 3,
                                },
                            }}
                        >
                            <CardActionArea
                                onClick={() => handleToolClick(tool.url)}
                                sx={{ height: '100%' }}
                            >
                                <CardContent sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                                        <Box
                                            sx={{
                                                color: tool.color,
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: '1.2rem'
                                            }}
                                        >
                                            {tool.icon}
                                        </Box>
                                        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
                                            {tool.title}
                                        </Typography>
                                        <ExternalLinkIcon
                                            sx={{
                                                fontSize: 14,
                                                color: 'text.secondary',
                                                ml: 'auto'
                                            }}
                                        />
                                    </Stack>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            flexGrow: 1,
                                            mb: 1,
                                            lineHeight: 1.4,
                                            fontSize: '0.85rem'
                                        }}
                                    >
                                        {tool.description}
                                    </Typography>

                                    <Box sx={{ mt: 'auto' }}>
                                        <Chip
                                            label={tool.category}
                                            size="small"
                                            sx={{
                                                backgroundColor: tool.color,
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '0.7rem',
                                                height: 20
                                            }}
                                        />
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    mt: 2,
                    p: 2,
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    textAlign: 'center'
                }}
            >
                <Typography variant="body2" color="text.secondary">
                    💡 <strong>Conseil :</strong> Bookmarquez ces outils pour un accès rapide !
                </Typography>
            </Box>
        </Container>
    )
}

export default Tools