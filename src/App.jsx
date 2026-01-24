import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const titles = {
  '/': 'UniConsult | Management & Business Consulting',
  '/about': 'About | UniConsult',
  '/services': 'Services | UniConsult',
  '/projects': 'Projects | UniConsult',
  '/contact': 'Contact | UniConsult',
}

function App() {
  const location = useLocation()

  useEffect(() => {
    document.title = titles[location.pathname] || 'UniConsult | Consulting'
  }, [location.pathname])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
