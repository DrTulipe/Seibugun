import { useState } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Button, 
  Card, 
  CardContent, 
  Box,
  IconButton
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Seibugun
          </Typography>
          <Button color="inherit">Connexion</Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Bienvenue sur Seibugun
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          Guilde BDO
        </Typography>
        
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Exemple Material UI
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Cliquez sur le bouton pour tester
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button 
                  variant="contained" 
                  onClick={() => setCount((count) => count + 1)}
                  size="large"
                >
                  Compteur: {count}
                </Button>
              </Box>
              <Typography variant="body2" sx={{ mt: 2 }}>
                React + Vite + Material UI sont correctement configurés
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default App
