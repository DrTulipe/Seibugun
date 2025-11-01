import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import { useMatomo } from '../hooks/useMatomo'

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const location = useLocation()
  const { trackEvent } = useMatomo()

  const menuItems = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/about' },
    { label: 'Membres', path: '/members' },
    { label: 'Boss Tracker', path: '/boss-tracker' },
    { label: 'Guides', path: '/guides' },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
    trackEvent('Navigation', 'Mobile Menu Toggle', mobileOpen ? 'Close' : 'Open')
  }

  const handleNavClick = (label: string) => {
    trackEvent('Navigation', 'Menu Click', label)
  }

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={() => {
              handleNavClick(item.label)
              handleDrawerToggle()
            }}
            sx={{
              color: location.pathname === item.path ? 'primary.main' : 'inherit',
              textDecoration: 'none',
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              component="img"
              src="/seibugun_ico.jpg"
              alt="Seibugun Logo"
              sx={{
                height: 32,
                width: 32,
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
              }}
            >
              Seibugun
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="ouvrir menu"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  onClick={() => handleNavClick(item.label)}
                  sx={{
                    color: location.pathname === item.path ? 'secondary.main' : 'inherit',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar