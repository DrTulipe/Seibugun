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
  discord?: string
  role: string
  activity: string
  class: string
  joinedDate: string
}

const Members: React.FC = () => {
  const officers: Member[] = [
    {
      id: 1,
      name: 'Zypekt',
      discord: 'zyp_',
      role: 'Maître de Guilde',
      activity: 'Troc',
      class: 'Warrior',
      joinedDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'Naksu_ChoYeong',
      discord: 'lilith90_',
      role: 'Conseiller',
      activity: 'PvP, Navigation, Grind',
      class: 'Sorceress',
      joinedDate: '2023-02-20',
    },
    {
      id: 3,
      name: 'Loukohts',
      discord: 'pyjman',
      role: 'Officier d\'état major',
      activity: 'Grind, Lifeskill',
      class: 'Ranger',
      joinedDate: '2023-03-10',
    },
    {
      id: 4,
      name: 'Itzhak',
      discord: 'Itzhak1191',
      role: 'Secrétaire',
      activity: 'Troc',
      class: 'Wizard',
      joinedDate: '2023-04-05',
    },
    {
      id: 5,
      name: 'Hulud',
      discord: 'pyopp',
      role: 'Officier',
      activity: 'Grind',
      class: 'Berserker',
      joinedDate: '2023-05-12',
    },
    {
      id: 6,
      name: 'Yuu_Kun',
      discord: 'yuicmoiwsh',
      role: 'Officier',
      activity: 'Grind, PvP',
      class: 'Tamer',
      joinedDate: '2023-06-18',
    },
    {
      id: 7,
      name: 'Psycokiwi',
      discord: 'psycomax',
      role: 'Officier',
      activity: 'Grind, Lifeskill',
      class: 'Tamer',
      joinedDate: '2023-06-18',
    },
    {
      id: 8,
      name: 'Lysvent',
      discord: 'drtulipe',
      role: 'Officier',
      activity: 'Grind, Lifeskill, Navigation, Troc',
      class: 'Tamer',
      joinedDate: '2023-06-18',
    },
  ]

  const activeMembers: Member[] = [
    {
      id: 9,
      name: 'Ed_Eletek',
      role: 'Membre',
      activity: 'Grind',
      class: 'Warrior',
      joinedDate: '2024-01-10',
    },
    {
      id: 10,
      name: 'Noctifere',
      role: 'Membre',
      activity: 'Grind, Lifeskill',
      class: 'Witch',
      joinedDate: '2024-02-15',
    },
    {
      id: 11,
      name: 'Palas',
      role: 'Membre',
      activity: 'Grind, Cuisine, Alchimie',
      class: 'Ninja',
      joinedDate: '2024-03-20',
    },
    {
      id: 12,
      name: 'Warfayer',
      role: 'Membre',
      activity: 'Grind',
      class: 'Mystic',
      joinedDate: '2024-04-12',
    },
    {
      id: 13,
      name: 'Decarro',
      role: 'Membre',
      activity: 'Grind',
      class: 'Valkyrie',
      joinedDate: '2024-05-08',
    },
    {
      id: 14,
      name: 'BzHPanda',
      role: 'Membre',
      activity: 'Grind, Lifeskill',
      class: 'Kunoichi',
      joinedDate: '2024-06-14',
    },
    {
      id: 15,
      name: 'Dhaksol',
      role: 'Membre',
      activity: 'Grind',
      class: 'Dark Knight',
      joinedDate: '2024-07-22',
    },
  ]

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Maître de Guilde':
        return 'error'
      case 'Conseiller':
      case 'Officier d\'état major':
      case 'Secrétaire':
      case 'Officier':
        return 'info'
      case 'Membre':
        return 'success'
      default:
        return 'warning'
    }
  }

  const renderMemberCard = (member: Member) => (
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
            <Typography variant="body2" color="text.secondary" gutterBottom>
              <strong>Activités :</strong> {member.activity}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Membres de la Guilde
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Découvrez les membres de Seibugun
      </Typography>

      {/* Section Officiers */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Officiers de la Guilde
      </Typography>

      <Grid container spacing={3}>
        {officers.map(renderMemberCard)}
      </Grid>

      {/* Section Membres Actifs */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 2 }}>
        Membres Actifs
      </Typography>

      <Grid container spacing={3}>
        {activeMembers.map(renderMemberCard)}
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