import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home',           to: 'hero' },
  { label: 'Products',       to: 'products' },
  { label: 'Our Ecosystem',  to: 'ecosystem' },
  { label: 'About Us',       to: 'about' },
  { label: 'Why Us',         to: 'why-us' },
  { label: 'Import & Export',to: 'import-export' },
  { label: 'Contact',        to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">

          {/* Logo */}
          <ScrollLink to="hero" smooth duration={500} className="navbar__logo" onClick={closeMenu}>
            <span className="navbar__logo-mark">T</span>
            <span className="navbar__logo-text">
              TREEN® <span>Chemicals</span>
            </span>
          </ScrollLink>

          {/* Desktop nav */}
          <nav className="navbar__links" aria-label="Primary navigation">
            {NAV_LINKS.map(link => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-72}
                spy
                activeClass="navbar__link--active"
                className="navbar__link"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>

          {/* CTA */}
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
        <nav className="mobile-menu__links">
          {NAV_LINKS.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-72}
              spy
              activeClass="mobile-menu__link--active"
              className="mobile-menu__link"
              onClick={closeMenu}
            >
              {link.label}
            </ScrollLink>
          ))}
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
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
    </>
  )
}
