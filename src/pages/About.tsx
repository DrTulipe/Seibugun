import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { CheckCircle as CheckIcon } from '@mui/icons-material'

const About: React.FC = () => {
  const guildValues = [
    'Entraide et discussions détendues',
    'Ouverte à tous les niveaux',
    'Progression commune sans prise de tête',
    'Ambiance fun et conviviale',
    'Guides et conseils partagés',
  ]

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        À propos de Seibugun
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Notre Histoire
              </Typography>
              <Typography variant="body1" paragraph>
                Seibugun est une guilde française axée PvE, créée par des passionnés de Black Desert qui
                souhaitent partager leur amour du jeu dans une atmosphère conviviale et détendue.
                Notre guilde a grandi pour devenir une communauté soudée de joueurs de tous niveaux.
              </Typography>
              <Typography variant="body1" paragraph>
                Que vous soyez débutant, en reroll ou ancien briscards du grind, vous trouverez votre place parmi nous.
                Pas de prise de tête, juste du fun et des objectifs à partager dans une ambiance d'entraide
                et de progression commune.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Nos Valeurs
              </Typography>
              <List>
                {guildValues.map((value, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemIcon>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={value}
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Activités de Guilde
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Taxi Vell
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Service de taxi pour Vell disponible pour tous les membres de la guilde.<br />
                    <b>Départ de Velia :</b><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Mercredi à <b>18h35</b><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Dimanche à <b>15h35</b><br />
                    <b>Possibilité de passer par Oquilla pour les retardataires</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Boss de Guilde
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rendez-vous hebdomadaire tous les dimanches à <b>21h</b> pour affronter
                    les boss et obtenir les récompenses.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Discord & Guides
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Un Discord actif avec une multitude de guides pour vous aider
                    dans votre progression et découverte du jeu.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Progression PvE
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Entraide pour le grind, les quêtes, et l'optimisation de votre stuff
                    avec les conseils des membres expérimentés.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default About