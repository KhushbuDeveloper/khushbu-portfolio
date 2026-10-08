import { LazyMotion, MotionConfig } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { TechStack } from './components/TechStack'

const BelowFold = lazy(() => import('./components/BelowFold'))
const loadMotionFeatures = () => import('./motionFeatures').then((mod) => mod.default)

export default function App() {
  return (
    // LazyMotion + `m` components keep the animation bundle small;
    // reducedMotion="user" turns transform animations off for prefers-reduced-motion visitors
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <TechStack />
          <Suspense fallback={<div className="min-h-screen" />}>
            <BelowFold />
          </Suspense>
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}
