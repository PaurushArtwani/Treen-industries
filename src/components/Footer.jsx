import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import { HiPhone, HiMail, HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import { MdWhatsapp } from 'react-icons/md'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import './Footer.css'

const NAV_LINKS = [
  { label: 'Home',     to: 'hero' },
  { label: 'Products', to: 'products' },
  { label: 'About Us', to: 'about' },
  { label: 'Why Us',   to: 'why-us' },
  { label: 'Contact',  to: 'contact' },
]

const PRODUCTS_LIST = [
  'COPPER & PREMIER Adhesive',
  'CLASSIC / CLASSIC WHITE',
  'ULTRA GREY Stone Adhesive',
  'TP 100 & TP 200 Epoxy Grout',
  'Waterproofing System',
  'Tile Cleaners & Accessories',
]

const SOCIAL_LINKS = [
  { icon: <FaLinkedin size={17} />,  href: '#',                                   label: 'LinkedIn'  },
  { icon: <FaInstagram size={17} />, href: '#',                                   label: 'Instagram' },
  { icon: <FaFacebook size={17} />,  href: '#',                                   label: 'Facebook'  },
  { icon: <MdWhatsapp size={17} />,  href: 'https://wa.me/917665656574',          label: 'WhatsApp' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">

      {/* =============================================
          TOP CTA STRIP — rich gradient banner
          ============================================= */}
      <div className="footer__cta-strip">
        {/* Background layers */}
        <div className="footer__cta-bg" />
        <div className="footer__cta-glow footer__cta-glow--1" />
        <div className="footer__cta-glow footer__cta-glow--2" />
        {/* Grid overlay */}
        <div className="footer__cta-grid" />
        {/* Geometric shapes */}
        <span className="footer__cta-shape footer__cta-shape--circle" />
        <span className="footer__cta-shape footer__cta-shape--ring" />
        <div className="footer__cta-dots" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
        </div>

        <div className="container footer__cta-inner">
          <div className="footer__cta-text">
            <div className="footer__cta-eyebrow">
              <span className="footer__cta-eyebrow-dot" />
              Ready to Start Your Next Project?
            </div>
            <h2 className="footer__cta-title">
              Partner With Treen Industries
            </h2>
            <p className="footer__cta-sub">
              Reliable supply · Competitive pricing · Expert technical support
            </p>
          </div>

          <div className="footer__cta-actions">
            <ScrollLink
              to="contact"
              smooth duration={500} offset={-72}
              className="footer__cta-btn footer__cta-btn--primary"
            >
              Get a Free Quote
              <HiArrowRight size={17} />
            </ScrollLink>
            <a href="tel:+917665656574" className="footer__cta-btn footer__cta-btn--call">
              <HiPhone size={17} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* =============================================
          MAIN FOOTER BODY
          ============================================= */}
      <div className="footer__body">
        <div className="container footer__grid">

          {/* Brand column */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <span className="footer__logo-mark">T</span>
              <div>
                <div className="footer__logo-name">TREEN® </div>
                <div className="footer__logo-tagline">Fix Every Tile with TREEN®</div>
              </div>
            </div>
            <p className="footer__brand-desc">
              ISO-certified manufacturer of TREEN® construction chemicals — tile adhesives,
              epoxy grouts, waterproofing and tile accessories. Headquartered in Morbi, Gujarat,
              powered by German-based polymer technology.
            </p>

            {/* Contact list */}
            <ul className="footer__contact-list">
              <li>
                <a href="tel:+917665656574" className="footer__contact-item">
                  <span className="footer__contact-icon" style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80' }}>
                    <HiPhone size={14} />
                  </span>
                  +91 76656 56574
                </a>
              </li>
              <li>
                <a href="mailto:treenindustries@gmail.com" className="footer__contact-item">
                  <span className="footer__contact-icon" style={{ background: 'rgba(59,130,246,0.12)', color: '#93c5fd' }}>
                    <HiMail size={14} />
                  </span>
                  treenindustries@gmail.com
                </a>
              </li>
              <li>
                <span className="footer__contact-item footer__contact-item--plain">
                  <span className="footer__contact-icon" style={{ background: 'rgba(245,158,11,0.12)', color: '#fcd34d' }}>
                    <HiLocationMarker size={14} />
                  </span>
                  8-A National Highway, Nr. Timbadi Patiya, Morbi (Guj.) India
                </span>
              </li>
            </ul>

            {/* Socials */}
            <div className="footer__social">
              {SOCIAL_LINKS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="footer__social-link"
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <nav className="footer__nav">
              {NAV_LINKS.map(link => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth duration={500} offset={-72}
                  className="footer__nav-link"
                >
                  <span className="footer__nav-arrow">›</span>
                  {link.label}
                </ScrollLink>
              ))}
              <RouterLink to="/export" className="footer__nav-link">
                <span className="footer__nav-arrow">›</span>
                Export
              </RouterLink>
            </nav>
          </div>

          {/* Products column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Products</h4>
            <ul className="footer__product-list">
              {PRODUCTS_LIST.map((p, i) => (
                <li key={i}>
                  <ScrollLink to="products" smooth duration={500} offset={-72} className="footer__nav-link">
                    <span className="footer__nav-arrow">›</span>
                    {p}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Business info column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Business Info</h4>
            <div className="footer__info-list">
              {[
                { lbl: 'Business Type', val: 'Manufacturer & Supplier' },
                { lbl: 'Brand',         val: 'TREEN® Chemicals' },
                { lbl: 'Location',      val: 'Morbi, Gujarat' },
                { lbl: 'Technology',    val: 'German-Based Polymer' },
              ].map((item, i) => (
                <div key={i} className="footer__info-row">
                  <span className="footer__info-label">{item.lbl}</span>
                  <span className="footer__info-value">{item.val}</span>
                </div>
              ))}
              <div className="footer__info-row">
                <span className="footer__info-label">GST Registered</span>
                <span className="footer__info-value footer__info-value--green">Yes ✓</span>
              </div>
            </div>

            {/* WhatsApp mini CTA */}
            <a
              href="https://wa.me/917665656574"
              target="_blank"
              rel="noreferrer"
              className="footer__wa-mini"
            >
              <MdWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* =============================================
          BOTTOM BAR
          ============================================= */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {year} Treen Industries. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Use</a>
            <a href="#" className="footer__bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
