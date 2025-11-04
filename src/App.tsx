import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Members from './pages/Members'
import BossTracker from './pages/BossTracker'
import Guides from './pages/Guides'
import Tools from './pages/Tools'
import Footer from './components/Footer'
import { useMatomoPageTracker } from './hooks/useMatomo'

function App() {
  // Activer le suivi automatique des pages
  useMatomoPageTracker()

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 140px)', py: 4, pt: { xs: 10, sm: 12 } }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/boss-tracker" element={<BossTracker />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App