import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import './App.css'

// Lazy-loaded components — each becomes its own split chunk
const Hero             = lazy(() => import('./components/Hero'))
const TrustStrip       = lazy(() => import('./components/TrustStrip'))
const Products         = lazy(() => import('./components/Products'))
const ProductEcosystem = lazy(() => import('./components/ProductEcosystem'))
const About            = lazy(() => import('./components/About'))
const WhyUs            = lazy(() => import('./components/WhyUs'))
const ImportExport     = lazy(() => import('./components/ImportExport'))
const Contact          = lazy(() => import('./components/Contact'))
const Footer           = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return (
    <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: '#aaa', fontSize: '14px' }}>Loading...</span>
    </div>
  )
}

export default function App() {
  return (
    <>
      {/* Navbar is NOT lazy — it must render immediately */}
      <Navbar />
      <main>
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TrustStrip />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Products />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProductEcosystem />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ImportExport />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </>
  )
}
