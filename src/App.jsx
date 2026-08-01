import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Below-the-fold sections are lazy-loaded so the first paint ships less JS
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-fg">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
