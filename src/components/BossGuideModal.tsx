import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Alert,
    Paper,
    Grid
} from '@mui/material'
import {
    Close as CloseIcon,
    LocationOn as LocationIcon,
    Star as StarIcon,
    Shield as ShieldIcon,
    Group as GroupIcon
} from '@mui/icons-material'

interface BossGuide {
    id: string
    name: string
    location: string
    mechanics: string[]
    tips: string[]
    loot: {
        possible: string[]
        exclusive?: string[]
    }
    warnings?: string[]
}

// Base de données des guides de boss
const bossGuides: Record<string, BossGuide> = {
    karanda: {
        id: 'karanda',
        name: 'Karanda',
        location: 'Arête de Karanda (Calphéon)',
        mechanics: [
            'Disponible prochainement',
        ],
        tips: [
            'Attention aux tornades, elles font beaucoup de dégâts',
            'Les classes à distance peuvent attaquer pendant la phase de vol'
        ],
        loot: {
            possible: ['Coffre d\'arme de Dandelion', 'Biens d\'un aventurier', 'Cristal de magie noire', 'Pierre noire', 'Lingots d\'or'],
            exclusive: ['Coeur de Karanda', 'Aura latente de Karanda', 'Titre : KaaaraAaannng']
        },
        warnings: [
            'Boss très mobile, difficile à toucher pour les classes de mêlée'
        ]
    },
    kzarka: {
        id: 'kzarka',
        name: 'Kzarka',
        location: 'Sanctuaire de Sérendia',
        mechanics: [
            'Disponible prochainement',
        ],
        tips: [
            'Gardez vos distances quand son aura rouge s\'active',
        ],
        loot: {
            possible: ['Aura latente de boss', 'Pierres noires', 'Lingots d\'or', 'Sceau de chasseur'],
            exclusive: ['Coffre de Kzarka']
        },
    },
    nouver: {
        id: 'nouver',
        name: 'Nouver',
        location: 'Désert de Valencia',
        mechanics: [
            'Disponible prochainement'
        ],
        tips: [
            'Apportez de l\'eau purifiée',
        ],
        loot: {
            possible: ['Aura latente de boss', 'Pierres noires', 'Lingots d\'or', 'Sceau de chasseur'],
            exclusive: ['Coffre de Nouver']
        },
        warnings: [
            'Environnement désertique : préparez-vous aux effets de la chaleur',
        ]
    },
    kutum: {
        id: 'kutum',
        name: 'Kutum',
        location: 'Désert de Valencia (Grotte de Kutum)',
        mechanics: [
            'Disponible prochainement'
        ],
        tips: [
            'Disponible prochainement'
        ],
        loot: {
            possible: ['Aura latente de boss', 'Pierres noires', 'Lingots d\'or', 'Sceau de chasseur'],
            exclusive: ['Arme secondaire de Kutum (toutes classes)', 'Talismans Kutum']
        }
    },
    offin: {
        id: 'offin',
        name: 'Destructeur Mirumok Offin',
        location: 'Kamasylvia (Forêt des Fées des Dents)',
        mechanics: [
            'Disponible prochainement',
        ],
        tips: [
            'Disponible prochainement'
        ],
        loot: {
            possible: ['Aura latente de boss', 'Pierres noires', 'Lingots d\'or', 'Sceau de chasseur'],
            exclusive: ['Disponible prochainement']
        },
    },
    vell: {
        id: 'vell',
        name: 'Vell',
        location: 'Le Coeur de la mer (Grand Océan, Nord d\'Oquilla)',
        mechanics: [
            'Vagues géantes qui endommagent les bateaux',
            'Souffle de vent',
            'Apparition de Lopters',
            'Phase de plongée et ré-émersion'
        ],
        tips: [
            'Utilisez un bateau ayant des canons pouvant être gérés depuis la barre ou rejoignez un groupe possédant un bateau',
            'Quand le message "Vell est enragé" apparaît, plongez dans l\'eau sous les ancres',
            'Ne pas pénétrer dans la zone du boss (ne pas dépasser les rochers)',
        ],
        loot: {
            possible: ['Corail bleu', 'Corail vert', 'Corail irisé', 'Corail doré', 'Morceau de corail', 'Pierres noires', 'Lingots d\'or', 'Sceau de chasseur'],
            exclusive: ['Cœur de Vell']
        },
        warnings: [
            'Combat naval uniquement - bateau requis'
        ]
    },
    garmoth: {
        id: 'garmoth',
        name: 'Garmoth',
        location: 'Drieghan (Nid du Dragon)',
        mechanics: [
            'Souffle draconique dévastateur',
            'Vol avec attaques aériennes',
            'Pluie de flammes',
        ],
        tips: [
            'Attaquez uniquement quand il est au sol',
            'Eloignez vous quand il s\'envole'
        ],
        loot: {
            possible: ['Aura latente de boss', 'Pierres noires', 'Lingots d\'or', 'Sceau de chasseur'],
            exclusive: ['Cœur de Garmoth', 'Pierre de sang de Garmoth']
        },
        warnings: [
            'Les flammes sont difficiles à esquiver si vous restez dans la zone'
        ]
    },
    bulgasal: {
        id: 'bulgasal',
        name: 'Bulgasal',
        location: 'Matin Radieux',
        mechanics: [
            'Invocation de cristaux de glace explosifs',
        ],
        tips: [
            'Détruisez les cristaux avant qu\'ils n\'explosent',
        ],
        loot: {
            possible: ['Etincelle originelle', 'Pierres noires', 'Lingots d\'or'],
            exclusive: ['Disponible prochainement']
        },
        warnings: [
            'Les cristaux de glaces font énormément de dégâts s\'ils explosent près de vous'
        ]
    },
    uturi: {
        id: 'uturi',
        name: 'Uturi',
        location: 'Matin Radieux',
        mechanics: [
            'Attaques de foudre en chaîne',
            'Invocation d\'orages localisés',
            'Téléportation électrique',
            'Surcharge électrique de zone'
        ],
        tips: [
            'Disponible prochainement'
        ],
        loot: {
            possible: ['Etincelle originelle', 'Pierres noires', 'Lingots d\'or'],
            exclusive: ['Disponible prochainement']
        },
        warnings: [
            'Ses attaques font énormément de dégâts, vous allez mourir plusieurs fois'
        ]
    },
    sangoon: {
        id: 'sangoon',
        name: 'Sangoon',
        location: 'Matin Radieux',
        mechanics: [
            'Attaques de terre et tremblements',
            'Invocation de pics rocheux',
            'Charge tellurique dévastatrice',
            'Téléportation',
        ],
        tips: [
            'Restez à distance lorsqu\'il disparaît',
            'Cachez vous derrière les gros rochers lorsqu\'ils apparaissent'
        ],
        loot: {
            possible: ['Etincelle originelle', 'Pierres noires', 'Lingots d\'or'],
            exclusive: ['Disponible prochainement']
        }
    },
    'golden-pig-king': {
        id: 'golden-pig-king',
        name: 'Roi des cochons dorés',
        location: 'Matin Radieux',
        mechanics: [
            'Disponible prochainement'
        ],
        tips: [
            'Disponible prochainement'
        ],
        loot: {
            possible: ['Etincelle originelle', 'Pierres noires', 'Lingots d\'or'],
            exclusive: ['Disponible prochainement']
        }
    }
}

interface BossGuideModalProps {
    open: boolean
    onClose: () => void
    bossId: string
    bossColor: string
}

const BossGuideModal: React.FC<BossGuideModalProps> = ({ open, onClose, bossId, bossColor }) => {
    const guide = bossGuides[bossId]

    if (!guide) {
        return (
            <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h6">Guide non disponible</Typography>
                        <Button onClick={onClose} sx={{ minWidth: 'auto', p: 1 }}>
                            <CloseIcon />
                        </Button>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Alert severity="info">
                        Le guide pour ce boss n'est pas encore disponible. Il sera ajouté prochainement !
                    </Alert>
                </DialogContent>
            </Dialog>
        )
    }



    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            PaperProps={{
                sx: {
                    maxHeight: '90vh'
                }
            }}
        >
            <DialogTitle>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                backgroundColor: bossColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1.2rem'
                            }}
                        >
                            {guide.name.charAt(0)}
                        </Box>
                        <Box>
                            <Typography variant="h5" component="h2">
                                Guide - {guide.name}
                            </Typography>
                        </Box>
                    </Box>
                    <Button onClick={onClose} sx={{ minWidth: 'auto', p: 1 }}>
                        <CloseIcon />
                    </Button>
                </Box>
            </DialogTitle>

            <DialogContent dividers>
                <Grid container spacing={3}>
                    {/* Informations générales */}
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2, height: '100%' }}>
                            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationIcon color="primary" />
                                Informations
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Localisation :</strong> {guide.location}
                                </Typography>
                            </Box>

                            {guide.warnings && (
                                <Alert severity="warning" sx={{ mt: 2 }}>
                                    <Typography variant="subtitle2" gutterBottom>
                                        Avertissements
                                    </Typography>
                                    {guide.warnings.map((warning, index) => (
                                        <Typography key={index} variant="body2">
                                            • {warning}
                                        </Typography>
                                    ))}
                                </Alert>
                            )}
                        </Paper>
                    </Grid>

                    {/* Mécaniques */}
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2, height: '100%' }}>
                            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <ShieldIcon color="primary" />
                                Mécaniques
                            </Typography>
                            <List dense>
                                {guide.mechanics.map((mechanic, index) => (
                                    <ListItem key={index} sx={{ pl: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <ShieldIcon color="action" fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={mechanic}
                                            primaryTypographyProps={{ variant: 'body2' }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>

                    {/* Conseils */}
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2, height: '100%' }}>
                            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <GroupIcon color="primary" />
                                Conseils & Stratégies
                            </Typography>
                            <List dense>
                                {guide.tips.map((tip, index) => (
                                    <ListItem key={index} sx={{ pl: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <StarIcon color="action" fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={tip}
                                            primaryTypographyProps={{ variant: 'body2' }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>

                    {/* Butin */}
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2, height: '100%' }}>
                            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                💎 Récompenses
                            </Typography>

                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" color="success.main" gutterBottom>
                                    ✅ Butin possible
                                </Typography>
                                {guide.loot.possible.map((item, index) => (
                                    <Typography key={index} variant="body2" sx={{ ml: 1 }}>
                                        • {item}
                                    </Typography>
                                ))}
                            </Box>
                            {guide.loot.exclusive && (
                                <Box>
                                    <Typography variant="subtitle2" color="error.main" gutterBottom>
                                        💎 Butin exclusif
                                    </Typography>
                                    {guide.loot.exclusive.map((item, index) => (
                                        <Typography key={index} variant="body2" sx={{ ml: 1 }}>
                                            • {item}
                                        </Typography>
                                    ))}
                                </Box>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} variant="contained" color="primary">
                    Fermer
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default BossGuideModal