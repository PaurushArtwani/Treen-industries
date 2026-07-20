import React from 'react'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import TrustStrip      from './components/TrustStrip'
import Products        from './components/Products'
import ProductEcosystem from './components/ProductEcosystem'
import About           from './components/About'
import WhyUs           from './components/WhyUs'
import ImportExport    from './components/ImportExport'
import Contact         from './components/Contact'
import Footer          from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <ProductEcosystem />
        <About />
        <WhyUs />
        <ImportExport />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
