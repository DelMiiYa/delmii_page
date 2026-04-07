import Nav from './components/Nav'
import Hero from './components/Hero'
import ArtSection from './components/ArtSection'
import ProjectsSection from './components/ProjectsSection'
import CatSection from './components/CatSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Nav />
      <Hero />
      <ArtSection />
      <ProjectsSection />
      <CatSection />
      <Footer />
    </div>
  )
}
