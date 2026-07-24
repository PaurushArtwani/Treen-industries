import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.css'

const SCROLL_LINKS = [
  { label: 'Home',          to: 'hero' },
  { label: 'Products',      to: 'products' },
  { label: 'Our Ecosystem', to: 'ecosystem' },
  { label: 'About Us',      to: 'about' },
  { label: 'Why Us',        to: 'why-us' },
  { label: 'Contact',       to: 'contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const location  = useLocation()
  const navigate  = useNavigate()
  const isExport  = location.pathname === '/export'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Scroll to top whenever route changes
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])

  const closeMenu = () => setMenuOpen(false)

  // If on export page, clicking a scroll-link navigates home first then scrolls
  const handleScrollLink = (to) => {
    closeMenu()
    if (isExport) {
      navigate('/')
      // small delay so homepage mounts before scrolling
      setTimeout(() => {
        const el = document.getElementById(to)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 350)
    }
  }

  /* ── helpers to render a nav item ── */
  const renderScrollLink = (link, mobile = false) => {
    if (isExport) {
      // Use plain button-style div on export page (will navigate + scroll)
      return (
        <button
          key={link.to}
          className={mobile ? 'mobile-menu__link' : 'navbar__link'}
          onClick={() => handleScrollLink(link.to)}
        >
          {link.label}
        </button>
      )
    }
    return (
      <ScrollLink
        key={link.to}
        to={link.to}
        smooth
        duration={500}
        offset={-72}
        spy
        activeClass={mobile ? 'mobile-menu__link--active' : 'navbar__link--active'}
        className={mobile ? 'mobile-menu__link' : 'navbar__link'}
        onClick={closeMenu}
      >
        {link.label}
      </ScrollLink>
    )
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">

          {/* Logo */}
          <RouterLink to="/" className="navbar__logo" onClick={closeMenu}>
            <span className="navbar__logo-mark">T</span>
            <span className="navbar__logo-text">TREEN® <span>Chemicals</span></span>
          </RouterLink>

          {/* Desktop nav */}
          <nav className="navbar__links" aria-label="Primary navigation">
            {SCROLL_LINKS.map(link => renderScrollLink(link))}
            {/* Export — router link */}
            <RouterLink
              to="/export"
              className={`navbar__link${isExport ? ' navbar__link--active' : ''}`}
              onClick={closeMenu}
            >
              Export
            </RouterLink>
          </nav>

          {/* CTA */}
          {isExport ? (
            <RouterLink to="/" className="btn btn-primary navbar__cta" onClick={closeMenu}>
              Back to Home
            </RouterLink>
          ) : (
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-72}
              className="btn btn-primary navbar__cta"
              onClick={closeMenu}
            >
              Get a Quote
            </ScrollLink>
          )}

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <button className="mobile-menu__close" onClick={closeMenu} aria-label="Close menu">
          <HiX size={22} />
        </button>
        <nav className="mobile-menu__links">
          {SCROLL_LINKS.map(link => renderScrollLink(link, true))}
          <RouterLink
            to="/export"
            className={`mobile-menu__link${isExport ? ' mobile-menu__link--active' : ''}`}
            onClick={closeMenu}
          >
            Export
          </RouterLink>
          {isExport ? (
            <RouterLink to="/" className="btn btn-primary mobile-menu__cta" onClick={closeMenu}>
              Back to Home
            </RouterLink>
          ) : (
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-72}
              className="btn btn-primary mobile-menu__cta"
              onClick={closeMenu}
            >
              Get a Quote
            </ScrollLink>
          )}
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
    </>
  )
}
