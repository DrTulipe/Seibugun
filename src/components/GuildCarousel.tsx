import React, { useState, useEffect } from 'react'
import {
    Box,
    Typography,
    Button,
    Container,
    Stack,
    IconButton,
    useTheme,
    alpha,
} from '@mui/material'
import {
    ArrowBackIos,
    ArrowForwardIos,
    Group as GroupIcon,
    Games as GamesIcon,
    School as SchoolIcon,
    Photo as PhotoIcon,
    Event as EventIcon,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

interface CarouselSlide {
    id: number
    title: string
    subtitle: string
    description: string
    buttonText?: string
    buttonLink?: string
    isExternal?: boolean
    icon?: React.ReactNode
    backgroundColor: string
    image?: string
}

const slides: CarouselSlide[] = [
    {
        id: 1,
        title: "Seibugun recrute !",
        subtitle: "Guilde francophone PvE",
        description: "Ouverte à tous - débutants, rerolls ou anciens briscards du grind, les portes sont ouvertes !",
        buttonText: "Rejoindre Discord",
        buttonLink: "https://discord.gg/xejvGDwczy",
        isExternal: true,
        icon: <GroupIcon sx={{ fontSize: 48 }} />,
        backgroundColor: 'linear-gradient(135deg, #524f4f 0%, #867777 100%)',
    },
    {
        id: 2,
        title: "Boss de Guilde",
        subtitle: "Tous les dimanches à 21h",
        description: "Rendez-vous hebdomadaire pour les boss de guilde ! Départ au Boustre géant. sur Serendia 2",
        icon: <GamesIcon sx={{ fontSize: 48 }} />,
        backgroundColor: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
    },
    {
        id: 3,
        title: "Guides complets",
        subtitle: "Tout ce qu'il faut savoir",
        description: "Agriculture, alchimie, pêche, boss... Découvrez nos guides détaillés pour progresser efficacement !",
        buttonText: "Explorer les guides",
        buttonLink: "/guides",
        icon: <SchoolIcon sx={{ fontSize: 48 }} />,
        backgroundColor: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
    },
    {
        id: 4,
        title: "Événements & Fun",
        subtitle: "Ambiance conviviale",
        description: "Discussions détendues, entraide et progression commune. Pas de prise de tête, juste du plaisir !",
        buttonText: "Voir les membres",
        buttonLink: "/members",
        icon: <EventIcon sx={{ fontSize: 48 }} />,
        backgroundColor: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
    },
    {
        id: 5,
        title: "Galerie & Moments",
        subtitle: "Nos aventures en images",
        description: "Découvrez les moments forts de notre guilde à travers photos et vidéos de nos sessions !",
        buttonText: "Voir les photos",
        buttonLink: "https://discord.gg/xejvGDwczy",
        isExternal: true,
        icon: <PhotoIcon sx={{ fontSize: 48 }} />,
        backgroundColor: 'linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)',
    },
]

const GuildCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [progress, setProgress] = useState(0)
    const theme = useTheme()

    const SLIDE_DURATION = 10000 // 5 seconds
    const PROGRESS_INTERVAL = 20 // Update every 50ms for smooth animation

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setProgress(0) // Reset progress when changing slide
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        setProgress(0) // Reset progress when changing slide
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        setProgress(0) // Reset progress when changing slide
    }

    // Auto-play and progress functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + (PROGRESS_INTERVAL / SLIDE_DURATION) * 100

                if (newProgress >= 100) {
                    nextSlide()
                    return 0
                }

                return newProgress
            })
        }, PROGRESS_INTERVAL)

        return () => clearInterval(progressInterval)
    }, [isAutoPlaying, currentSlide])

    // Reset progress when auto-play stops
    useEffect(() => {
        if (!isAutoPlaying) {
            setProgress(0)
        }
    }, [isAutoPlaying])

    const handleMouseEnter = () => {
        setIsAutoPlaying(false)
    }

    const handleMouseLeave = () => {
        setIsAutoPlaying(true)
    }

    const currentSlideData = slides[currentSlide]

    return (
        <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                position: 'relative',
                background: currentSlideData.backgroundColor,
                color: 'white',
                py: 8,
                mb: 6,
                borderRadius: 2,
                textAlign: 'center',
                overflow: 'hidden',
                minHeight: 400,
                transition: 'all 0.6s ease-in-out',
            }}
        >
            {/* Progress Bar */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    backgroundColor: alpha(theme.palette.common.white, 0.2),
                    zIndex: 3,
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                        width: `${isAutoPlaying ? progress : 0}%`,
                        backgroundColor: 'white',
                        transition: isAutoPlaying ? 'none' : 'width 0.3s ease-in-out',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    }}
                />
            </Box>

            {/* Background pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }}
            />

            {/* Navigation Arrows */}
            <IconButton
                onClick={prevSlide}
                sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    backgroundColor: alpha(theme.palette.common.black, 0.3),
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.common.black, 0.5),
                    },
                    zIndex: 2,
                }}
            >
                <ArrowBackIos />
            </IconButton>

            <IconButton
                onClick={nextSlide}
                sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    backgroundColor: alpha(theme.palette.common.black, 0.3),
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.common.black, 0.5),
                    },
                    zIndex: 2,
                }}
            >
                <ArrowForwardIos />
            </IconButton>

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Visual element container with fixed height */}
                <Box
                    sx={{
                        height: 110, // Fixed height for all slides (80px + margins)
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                    }}
                >
                    {/* Logo for first slide only */}
                    {currentSlide === 0 && (
                        <Box
                            component="img"
                            src="/seibugun_ico.jpg"
                            alt="Seibugun Logo"
                            sx={{
                                height: 80,
                                width: 80,
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '3px solid white',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                transition: 'all 0.3s ease-in-out',
                            }}
                        />
                    )}

                    {/* Icon for other slides */}
                    {currentSlide !== 0 && (
                        <Box
                            sx={{
                                color: 'white',
                                transition: 'all 0.3s ease-in-out',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {currentSlideData.icon}
                        </Box>
                    )}
                </Box>

                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        transition: 'all 0.3s ease-in-out',
                        fontWeight: 'bold',
                    }}
                >
                    {currentSlideData.title}
                </Typography>

                <Typography
                    variant="h5"
                    component="p"
                    sx={{
                        mb: 2,
                        opacity: 0.9,
                        transition: 'all 0.3s ease-in-out',
                        fontWeight: 500,
                    }}
                >
                    {currentSlideData.subtitle}
                </Typography>

                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        mb: 4,
                        opacity: 0.8,
                        transition: 'all 0.3s ease-in-out',
                        maxWidth: 600,
                        mx: 'auto',
                    }}
                >
                    {currentSlideData.description}
                </Typography>

                {/* Button container with fixed height */}
                <Box
                    sx={{
                        minHeight: 80, // Fixed height to accommodate buttons or empty space
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {currentSlideData.buttonText && (
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                            <Button
                                variant="contained"
                                size="large"
                                href={currentSlideData.isExternal ? currentSlideData.buttonLink : undefined}
                                component={currentSlideData.isExternal ? 'a' : Link}
                                to={currentSlideData.isExternal ? undefined : currentSlideData.buttonLink}
                                target={currentSlideData.isExternal ? "_blank" : undefined}
                                rel={currentSlideData.isExternal ? "noopener noreferrer" : undefined}
                                sx={{
                                    backgroundColor: 'white',
                                    color: 'primary.main',
                                    '&:hover': {
                                        backgroundColor: 'grey.100',
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease-in-out',
                                    fontWeight: 'bold',
                                }}
                            >
                                {currentSlideData.buttonText}
                            </Button>
                            {/* Show "Voir les membres" button only on first slide */}
                            {currentSlide === 0 && (
                                <Button
                                    variant="outlined"
                                    size="large"
                                    component={Link}
                                    to="/members"
                                    sx={{
                                        borderColor: 'white',
                                        color: 'white',
                                        '&:hover': {
                                            borderColor: 'white',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.3s ease-in-out',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Voir les membres
                                </Button>
                            )}
                        </Stack>
                    )}
                </Box>

            </Container>

            {/* Slide Indicators with Progress */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1,
                    zIndex: 2,
                }}
            >
                {slides.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => goToSlide(index)}
                        sx={{
                            position: 'relative',
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: currentSlide === index ? 'white' : alpha(theme.palette.common.white, 0.4),
                            cursor: 'pointer',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                backgroundColor: currentSlide === index ? 'white' : alpha(theme.palette.common.white, 0.7),
                                transform: 'scale(1.2)',
                            },
                        }}
                    >
                        {/* Progress ring for current slide */}
                        {currentSlide === index && isAutoPlaying && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: -2,
                                    left: -2,
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    border: '2px solid transparent',
                                    borderTop: '2px solid white',
                                    borderRight: `2px solid ${alpha(theme.palette.common.white, progress / 100)}`,
                                    borderBottom: `2px solid ${alpha(theme.palette.common.white, Math.max(0, (progress - 25) / 100))}`,
                                    borderLeft: `2px solid ${alpha(theme.palette.common.white, Math.max(0, (progress - 50) / 100))}`,
                                    transition: 'all 0.1s ease-out',
                                }}
                            />
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default GuildCarousel