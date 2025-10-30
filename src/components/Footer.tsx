import React from 'react'
import { Box, Container, Typography, Link, Grid } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        py: 3,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Seibugun
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Guilde Black Desert Online
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Liens utiles
            </Typography>
            <Link
              href="https://www.blackdesertonline.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{ display: 'block', mb: 1 }}
            >
              Black Desert Online
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Seibugun. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer