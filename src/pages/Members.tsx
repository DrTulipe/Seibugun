import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  Link,
} from '@mui/material'
import { Person as PersonIcon } from '@mui/icons-material'

interface Member {
  id: number
  name: string
  role: string
  activity: string
  class: string
  joinedDate: string
}

const Members: React.FC = () => {
  const members: Member[] = [
    {
      id: 1,
      name: 'Zypekt',
      role: 'Maître de Guilde',
      activity: 'Troc',
      class: 'Warrior',
      joinedDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'Naksu_ChoYeong',
      role: 'Conseiller',
      activity: 'PvP, Navigation, Grind',
      class: 'Sorceress',
      joinedDate: '2023-02-20',
    },
    {
      id: 3,
      name: 'Loukohts',
      role: 'Officier d\'état major',
      activity: 'Grind, Lifeskill',
      class: 'Ranger',
      joinedDate: '2023-03-10',
    },
    {
      id: 4,
      name: 'Itzhak',
      role: 'Secrétaire',
      activity: 'Troc',
      class: 'Wizard',
      joinedDate: '2023-04-05',
    },
    {
      id: 5,
      name: 'Hulud',
      role: 'Officier',
      activity: 'Grind',
      class: 'Berserker',
      joinedDate: '2023-05-12',
    },
    {
      id: 6,
      name: 'Yuu_Kun',
      role: 'Officier',
      activity: 'Grind',
      class: 'Tamer',
      joinedDate: '2023-06-18',
    },
    {
      id: 7,
      name: 'Psycokiwi',
      role: 'Officier',
      activity: 'Grind, Lifeskill',
      class: 'Tamer',
      joinedDate: '2023-06-18',
    },
  ]

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Maître de Guilde':
        return 'error'
      case 'Officier':
        return 'info'
      default:
        return 'warning'
    }
  }

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Officiers de la Guilde
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Découvrez les Officiers de Seibugun
      </Typography>

      <Grid container spacing={3}>
        {members.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                    <PersonIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="h3">
                      {member.name}
                    </Typography>
                    <Chip
                      label={member.role}
                      size="small"
                      color={getRoleColor(member.role) as any}
                      variant="outlined"
                    />
                  </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                  {/* <Typography variant="body2" color="text.secondary" gutterBottom>
                    <strong>Classe:</strong> {member.class}
                  </Typography> */}
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    <strong>Activités :</strong> {member.activity}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    <strong>Membre depuis:</strong> {new Date(member.joinedDate).toLocaleDateString('fr-FR')}
                  </Typography> */}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, p: 3, backgroundColor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Seibugun recrute !
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Guilde francophone PvE, ouverte à tous - débutants, rerolls ou anciens briscards du grind.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Au programme : Entraide, discussions détendues et progression commune.
          Pas de prise de tête, juste du fun et des objectifs à partager.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Taxi Vell, Boss de guilde les dimanches à 21h, Discord avec guides en pagaille.
          <br />
          <strong>
            Rejoignez le{' '}
            <Link
              href="https://discord.gg/xejvGDwczy"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
            >
              Discord
            </Link>
            {' '}ou contactez un des officiers listés ci-dessus pour postuler.
          </strong>
        </Typography>
      </Box>
    </Box>
  )
}

export default Members