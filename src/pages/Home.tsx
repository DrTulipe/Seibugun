import React from 'react'
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
} from '@mui/material'
import { Group as GroupIcon, Games as GamesIcon, Star as StarIcon } from '@mui/icons-material'

const Home: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #524f4f 0%, #867777 100%)',
          color: 'white',
          py: 8,
          mb: 6,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Seibugun recrute !
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4, opacity: 0.9 }}>
            Guilde FR PvE, ouverte à tous - débutants, rerolls ou anciens briscards du grind
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            Nous rejoindre
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent sx={{ p: 3 }}>
              <GroupIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Entraide
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Discussions détendues et progression commune dans une ambiance conviviale
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent sx={{ p: 3 }}>
              <GamesIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Boss de Guilde
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Rendez-vous tous les dimanches à 21h et taxi Vell disponible
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent sx={{ p: 3 }}>
              <StarIcon sx={{ fontSize: 48, color: 'warning.main', mb: 2 }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Guides & Fun
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Discord avec guides en pagaille et pas de prise de tête, juste du fun !
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Rejoignez-nous dès maintenant !
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Au programme : Entraide, discussions détendues et progression commune.
          Pas de prise de tête, juste du fun et des objectifs à partager !
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Rejoindre Discord
        </Button>
      </Box>
    </Box>
  )
}

export default Home