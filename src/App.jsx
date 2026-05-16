import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Portfolio />
        <div className="section-divider" />
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
