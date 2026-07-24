import React from 'react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import {
  HiDownload, HiDocumentText, HiClock,
  HiArrowLeft, HiArrowRight,
} from 'react-icons/hi'
import { MdOutlineKitchen } from 'react-icons/md'
import {
  GiWatch, GiSofa, GiMirrorMirror, GiWoodFrame,
  GiOfficeChair, GiCargoCrane,
} from 'react-icons/gi'
import { TbDeviceWatch } from 'react-icons/tb'
import { FaHandshake, FaWhatsapp } from 'react-icons/fa'
import { BsGlobeEuropeAfrica } from 'react-icons/bs'
import './ExportPage.css'

const VP   = { once: true, amount: 0.12 }
const ease = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VP,
  transition: { delay, duration: 0.55, ease },
})

const cardIn = (i, base = 0.1) => ({
  initial: { opacity: 0, y: 24, scale: 0.97 },
  whileInView: {
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * base, duration: 0.48, ease },
  },
  viewport: VP,
})

/* ══════════════════════════════════════
   PRODUCT SHOWCASE DATA
   Each category: 3 image cards + PDF info
   Drop images in /public/ to activate them.
   Placeholder shown automatically if missing.
══════════════════════════════════════ */
const CATEGORIES = [
  {
    id: 'watches',
    tag: 'Watch Collection',
    title: 'Our Watch Export Range',
    sub: 'Premium timepieces sourced for bulk and retail export — full documentation and custom packaging available.',
    accentColor: '#f97316',
    FallbackIcon: GiWatch,
    pdfFile: '/Watch.pdf',
    pdfLabel: 'Wall Watch Catalog PDF',
    waText: 'Hello%2C%20I%20am%20interested%20in%20Wall%20Watches%20for%20export.',
    available: true,
    cards: [
      {
        image: './W1.jpeg',
        name: 'Classic Decorative Wall Watch',
        description: 'Elegant wall watches with ornate frames in gold, silver and antique finishes. Perfect for living rooms, hotels and corporate lobbies.',
        badge: 'Best Seller', badgeColor: '#f5a623',
        tags: ['Decorative', 'Gold Frame', 'Living Room'],
      },
      {
        image: './W2.jpeg',
        name: 'Modern Minimalist Wall Watch',
        description: 'Sleek frameless and slim-profile wall watches with silent quartz movement. Ideal for offices, co-working spaces and modern interiors.',
        badge: 'Trending', badgeColor: '#06b6d4',
        tags: ['Minimalist', 'Silent Movement', 'Office'],
      },
      {
        image: './W3.jpeg',
        name: 'Large Statement Wall Watch',
        description: 'Oversized wall watches in wood, metal and acrylic finishes. A bold statement piece for retail stores, restaurants and premium residences.',
        badge: 'Premium', badgeColor: '#a855f7',
        tags: ['Oversized', 'Wood & Metal', 'Bulk Orders'],
      },
    ],
  },
  {
    id: 'furniture',
    tag: 'Furniture Collection',
    title: 'Our Furniture Export Range',
    sub: 'Handcrafted and modern furniture for residential, hospitality and office spaces — shipped globally with full export documentation.',
    accentColor: '#a855f7',
    FallbackIcon: GiSofa,
    pdfFile: '/Furniture.pdf',
    pdfLabel: 'Furniture Catalog PDF',
    waText: 'Hello%2C%20I%20am%20interested%20in%20the%20Furniture%20collection%20for%20export.',
    available: true,
    cards: [
      {
        image: './F1.jpeg',
        name: 'Living Room Collection',
        description: 'Modern and classic sofas, coffee tables and modular sets. Crafted for residential and hospitality interiors. Custom sizes available.',
        badge: 'Best Seller', badgeColor: '#a855f7',
        tags: ['Sofas', 'Modular Sets', 'Custom Sizes'],
      },
      {
        image: './F2.jpeg',
        name: 'Office Furniture Range',
        description: 'Ergonomic chairs, executive desks and storage systems for corporate environments. Bulk orders with branded packaging.',
        badge: 'Popular', badgeColor: '#06b6d4',
        tags: ['Ergonomic', 'Corporate', 'Bulk Orders'],
      },
      {
        image: './F3.jpeg',
        name: 'Wooden & Handcrafted',
        description: 'Solid wood and engineered wood furniture with premium finishes. Custom designs available for retail chains and interior designers.',
        badge: 'Premium', badgeColor: '#22c55e',
        tags: ['Solid Wood', 'Custom Design', 'Premium Finish'],
      },
    ],
  },
  {
    id: 'sinks',
    tag: 'Sink Collection',
    title: 'Our Sink Export Range',
    sub: 'Premium kitchen and bathroom sinks in stainless steel, ceramic and granite — built for durability, sourced for global export.',
    accentColor: '#06b6d4',
    FallbackIcon: MdOutlineKitchen,
    pdfFile: null,
    pdfLabel: null,
    waText: 'Hello%2C%20I%20am%20interested%20in%20the%20Sink%20collection%20for%20export.',
    available: false,
    cards: [
      {
        image: '/sink-1.jpg',
        name: 'Stainless Steel Kitchen Sinks',
        description: 'Single and double bowl stainless steel sinks with anti-scratch coating. Ideal for residential kitchens and hotel projects.',
        badge: 'Popular', badgeColor: '#06b6d4',
        tags: ['Stainless Steel', 'Anti-Scratch', 'Kitchen'],
      },
      {
        image: '/sink-2.jpg',
        name: 'Ceramic Bathroom Basins',
        description: 'Wall-mounted and countertop ceramic basins in white and designer colours. Perfect for bathroom renovation projects.',
        badge: 'New', badgeColor: '#f5a623',
        tags: ['Ceramic', 'Wall Mounted', 'Bathroom'],
      },
      {
        image: '/sink-3.jpg',
        name: 'Granite Composite Sinks',
        description: 'Heavy-duty granite composite sinks with heat and scratch resistance. Premium choice for luxury kitchen installations.',
        badge: 'Premium', badgeColor: '#a855f7',
        tags: ['Granite', 'Heat Resistant', 'Luxury'],
      },
    ],
  },
  {
    id: 'mirrors',
    tag: 'Mirror Collection',
    title: 'Our Mirror Export Range',
    sub: 'Decorative, LED-illuminated and frameless mirrors for residential and commercial spaces — custom shapes and sizes available on request.',
    accentColor: '#22c55e',
    FallbackIcon: GiMirrorMirror,
    pdfFile: null,
    pdfLabel: null,
    waText: 'Hello%2C%20I%20am%20interested%20in%20the%20Mirror%20collection%20for%20export.',
    available: false,
    cards: [
      {
        image: '/mirror-1.jpg',
        name: 'LED Backlit Mirrors',
        description: 'Modern LED backlit mirrors with touch-dimmer control. Perfect for bathrooms, vanity spaces and hospitality projects.',
        badge: 'Trending', badgeColor: '#22c55e',
        tags: ['LED', 'Touch Dimmer', 'Bathroom'],
      },
      {
        image: '/mirror-2.jpg',
        name: 'Decorative Wall Mirrors',
        description: 'Ornate and contemporary framed mirrors for living rooms and lobbies. Available in gold, silver and black frame finishes.',
        badge: 'Popular', badgeColor: '#f5a623',
        tags: ['Decorative', 'Gold Frame', 'Wall Mount'],
      },
      {
        image: '/mirror-3.jpg',
        name: 'Frameless & Full-Length',
        description: 'Sleek frameless mirrors and full-length dressing mirrors for retail stores, gyms and high-end residential spaces.',
        badge: 'New', badgeColor: '#06b6d4',
        tags: ['Frameless', 'Full-Length', 'Commercial'],
      },
    ],
  },
]

/* ── Reusable product showcase section ── */
function ProductShowcase({ category }) {
  const {
    id, tag, title, sub, accentColor, FallbackIcon,
    pdfFile, pdfLabel, waText, available, cards,
  } = category

  return (
    <section className="ep-showcase" id={`ep-${id}`}>
      {/* Header */}
      <motion.div className="ep-showcase__header" {...fadeUp(0)}>
        <span className="ep-showcase__tag" style={{ '--acc': accentColor }}>
          {tag}
        </span>
        <h2 className="ep-showcase__title">{title}</h2>
        <p className="ep-showcase__sub">{sub}</p>
      </motion.div>

      {/* 3 or 4 image cards */}
      <div className={`ep-showcase__grid${cards.length === 4 ? ' ep-showcase__grid--4' : ''}`}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="ep-sc-card"
            style={{ '--acc': accentColor }}
            {...cardIn(i, 0.11)}
            whileHover={{ y: -8, transition: { duration: 0.24 } }}
          >
            {/* Image */}
            <div className="ep-sc-card__img-wrap">
              <img
                src={card.image}
                alt={card.name}
                className="ep-sc-card__img"
                onError={(e) => {
                  // e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
              {/* Placeholder */}
              <div className="ep-sc-card__placeholder" style={{ display: 'none', '--acc': accentColor }}>
                <FallbackIcon size={52} className="ep-sc-card__ph-icon" />
                <span className="ep-sc-card__ph-text">Image Coming Soon</span>
              </div>
              {/* Badge */}
              <span className="ep-sc-card__badge" style={{ background: card.badgeColor }}>
                {card.badge}
              </span>
            </div>

            {/* Body */}
            <div className="ep-sc-card__body">
              <h3 className="ep-sc-card__name">{card.name}</h3>
              <p className="ep-sc-card__desc">{card.description}</p>

              <div className="ep-sc-card__tags">
                {card.tags.map((t, j) => (
                  <span key={j} className="ep-sc-card__tag" style={{ '--acc': accentColor }}>{t}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="ep-sc-card__actions">
                {available && pdfFile ? (
                  <motion.a
                    href={pdfFile}
                    download={`TREEN_${id}_Catalog.pdf`}
                    target="_blank" rel="noreferrer"
                    className="ep-sc-btn ep-sc-btn--primary"
                    style={{ '--acc': accentColor }}
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  >
                    <HiDownload size={16} />
                    View Products
                  </motion.a>
                ) : (
                  <span className="ep-sc-btn ep-sc-btn--soon">
                    <HiClock size={15} />
                    Coming Soon
                  </span>
                )}
                <motion.a
                  href={`https://wa.me/917665656574?text=${waText}`}
                  target="_blank" rel="noreferrer"
                  className="ep-sc-btn ep-sc-btn--wa"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                >
                  <FaWhatsapp size={15} />
                  Enquire
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PDF note */}
      {available && pdfFile && (
        <motion.div className="ep-showcase__note" style={{ '--acc': accentColor }} {...fadeUp(0.3)}>
          <HiDocumentText size={16} className="ep-showcase__note-icon" />
          <span>
            Full product images, specifications and pricing are in the&nbsp;
            <a href={pdfFile} download={`TREEN_${id}_Catalog.pdf`} target="_blank" rel="noreferrer">
              {pdfLabel}
            </a>
          </span>
        </motion.div>
      )}

      {/* Coming soon note */}
      {!available && (
        <motion.div className="ep-showcase__note ep-showcase__note--soon" {...fadeUp(0.3)}>
          <HiClock size={16} className="ep-showcase__note-icon" />
          <span>
            Catalog coming soon. Enquire via WhatsApp for availability and pricing.
          </span>
        </motion.div>
      )}
    </section>
  )
}

/* ── Main page ── */
export default function ExportPage() {
  return (
    <div className="ep-page">

      {/* ══ HERO ══ */}
      <section className="ep-hero">
        <div className="ep-hero__bg" />
        <div className="ep-hero__grid" />
        <div className="ep-hero__glow ep-hero__glow--1" />
        <div className="ep-hero__glow ep-hero__glow--2" />
        <motion.div
          className="ep-hero__deco"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <GiCargoCrane size={200} />
        </motion.div>

        <div className="container ep-hero__inner">
          <RouterLink to="/" className="ep-hero__back">
            <HiArrowLeft size={15} /> Back to Home
          </RouterLink>
          <motion.div {...fadeUp(0.05)}>
            <div className="ep-hero__eyebrow">
              <span className="ep-hero__dot" />
              <BsGlobeEuropeAfrica size={14} />
              TREEN® Global Exports
            </div>
            <h1 className="ep-hero__title">Export Products <em>Worldwide</em></h1>
            <p className="ep-hero__sub">
              Watches, Furniture, Sinks &amp; Mirrors — shipped to 10+ countries with full
              documentation and competitive pricing.
            </p>
            {/* Quick-jump pills */}
            <div className="ep-hero__pills">
              {[
                { label: 'Watches',   href: '#ep-watches'   },
                { label: 'Furniture', href: '#ep-furniture' },
                { label: 'Sinks',     href: '#ep-sinks'     },
                { label: 'Mirrors',   href: '#ep-mirrors'   },
              ].map((p, i) => (
                <a key={i} href={p.href} className="ep-hero__pill">{p.label}</a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ BODY — 4 showcase sections ══ */}
      <div className="ep-body">
        <div className="container">
          {CATEGORIES.map((cat) => (
            <ProductShowcase key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  )
}
