import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Members from './pages/Members'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 140px)', py: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App