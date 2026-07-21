import { lazy, Suspense } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from './components/Navbar'
import './App.css'

// Lazy-loaded components
const Hero = lazy(() => import('./components/Hero'))
const TrustStrip = lazy(() => import('./components/TrustStrip'))
const Products = lazy(() => import('./components/Products'))
const ProductEcosystem = lazy(() => import('./components/ProductEcosystem'))
const About = lazy(() => import('./components/About'))
const WhyUs = lazy(() => import('./components/WhyUs'))
const ImportExport = lazy(() => import('./components/ImportExport'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return (
    <div
      style={{
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ color: '#aaa', fontSize: '14px' }}>Loading...</span>
    </div>
  )
}

export default function App() {
  // Replace with your WhatsApp number (Country Code + Number)
  const phone = '7665656574'

  const message =
    'Hello! I visited your website and would like to know more about your products.'

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <>
      {/* Navbar */}
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

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 9999,
        }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={35} color="#fff" />
      </button>
    </>
  )
}