import React from 'react'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Paper,
    Button,
    Alert,
} from '@mui/material'
import {
    ExpandMore as ExpandMoreIcon,
    Link as LinkIcon,
} from '@mui/icons-material'

interface GuideResource {
    title: string
    description: string
    url: string
    buttonText: string
}

interface GuideVideo {
    title: string
    videoId: string
    startTime?: number
}

interface GuideResourcesSectionProps {
    topic: string // Ex: "l'alchimie", "du troc maritime", "de l'agriculture"
    resources: GuideResource[]
    videos: GuideVideo[]
}

const GuideResourcesSection: React.FC<GuideResourcesSectionProps> = ({
    topic,
    resources,
    videos
}) => {
    const getVideoUrl = (video: GuideVideo) => {
        let url = `https://www.youtube.com/embed/${video.videoId}`
        if (video.startTime) {
            url += `?start=${video.startTime}`
        }
        return url
    }

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">📚 Ressources Complémentaires</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Alert severity="info" sx={{ mb: 3 }}>
                    <Typography variant="body2">
                        <strong>📖 Guides Détaillés :</strong> Pour approfondir certains aspects {topic},
                        consultez ces ressources externes complètes.
                    </Typography>
                </Alert>

                <Typography variant="h6" gutterBottom color="primary.main">
                    🌐 Guides Communautaires Recommandés
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 2,
                    mb: 3
                }}>
                    {resources.map((resource, index) => (
                        <Paper key={index} sx={{ p: 2, border: '1px solid #2196f3' }} variant="outlined">
                            <Typography variant="h6" gutterBottom color="primary.main">
                                <LinkIcon sx={{ mr: 1, fontSize: 20 }} />
                                {resource.title}
                            </Typography>
                            <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
                                {resource.description}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                fullWidth
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<LinkIcon />}
                            >
                                {resource.buttonText}
                            </Button>
                        </Paper>
                    ))}
                </Box>

                <Typography variant="h6" gutterBottom color="secondary.main">
                    🎥 Tutoriels Vidéo
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 2
                }}>
                    {videos.map((video, index) => (
                        <Paper key={index} sx={{ p: 2, border: '1px solid', borderColor: 'grey.300' }}>
                            <Typography variant="subtitle1" gutterBottom color="text.primary">
                                {video.title}
                            </Typography>
                            <Box
                                sx={{
                                    position: 'relative',
                                    paddingBottom: '56.25%', // 16:9 aspect ratio
                                    height: 0,
                                    overflow: 'hidden',
                                    '& iframe': {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                    },
                                }}
                            >
                                <iframe
                                    src={getVideoUrl(video)}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default GuideResourcesSection