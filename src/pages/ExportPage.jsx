import React from 'react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import {
  HiDownload, HiDocumentText, HiClock,
  HiArrowLeft, HiArrowRight,
} from 'react-icons/hi'
import { MdOutlineKitchen } from 'react-icons/md'
import {
  GiWatch, GiSofa, GiMirrorMirror,
  GiCargoCrane, GiStonePath,
} from 'react-icons/gi'
import { FaWhatsapp } from 'react-icons/fa'
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
   TILE ADHESIVES — 6 product cards
══════════════════════════════════════ */
const TILE_ADHESIVES = [
  {
    name: 'COPPER',
    tagline: 'TILE ADHESIVES',
    description: 'Bagged cementitious polymer-based powder containing Portland cement and silica sand. Mixed with water for installing small and medium size ceramic floor tiles and vitrified floor tiles up to 600×600 mm in interior areas.',
    features: ['Internal floor applications', 'Pack size: 20 Kg', 'Bed thickness up to 12 mm', 'Single component — just add water', 'Coverage: 25–35 sq ft / 20 kg bag'],
    image: './Copper.png',
    gradient: 'linear-gradient(145deg, #0a5078 0%, #063348 60%, #041e30 100%)',
    accentColor: '#00bcd4',
    badge: 'ENTRY RANGE',
    badgeBg: 'linear-gradient(135deg,#00bcd4,#0097a7)',
  },
  {
    name: 'PREMIER',
    tagline: 'TILE ADHESIVES',
    description: 'A smooth and creamy polymer-based adhesive for installing small to medium format (12"×18" to 600×600 mm) ceramic/vitrified wall and floor tiles, also tile on tile. Ideal for interior floor and ceramic wall applications.',
    features: ['Internal floor & ceramic wall', 'Pack size: 20 Kg', 'Bed thickness up to 12 mm', 'Economical & easy to use', 'Coverage: 25–35 sq ft / 20 kg bag'],
    image: './premier.png',
    gradient: 'linear-gradient(145deg, #1a237e 0%, #0d1657 60%, #090f3e 100%)',
    accentColor: '#5c6bc0',
    badge: 'POPULAR',
    badgeBg: 'linear-gradient(135deg,#5c6bc0,#3949ab)',
  },
  {
    name: 'CLASSIC',
    tagline: 'TILE ADHESIVES',
    description: 'A smooth creamy polymer-based adhesive for installing small to large format (12"×18" to 800×1600 mm) ceramic/vitrified wall and floor tiles, also tile on tile. Designed for internal wall and floor applications.',
    features: ['Internal floor, ceramic & vitrified wall', 'Pack size: 20 Kg', 'Bed thickness up to 12 mm', 'Non-shrink formula', 'Coverage: 25–35 sq ft / 20 kg bag'],
    image: './classic.png',
    gradient: 'linear-gradient(145deg, #4a2500 0%, #2d1600 60%, #1e0f00 100%)',
    accentColor: '#f57c00',
    badge: 'BESTSELLER',
    badgeBg: 'linear-gradient(135deg,#f59e0b,#d97706)',
  },
  {
    name: 'CLASSIC WHITE',
    tagline: 'TILE ADHESIVES',
    description: 'A smooth creamy polymer-based adhesive for installing small to large format (12"×18" to 800×1600 mm) ceramic/vitrified wall and floor tiles, also tile on tile. White variant for light-coloured tiles and marble.',
    features: ['Internal floor, ceramic & vitrified wall', 'White colour — ideal for marble', 'Pack size: 20 Kg', 'Bed thickness up to 12 mm', 'Single component — just add water'],
    image: './classicWhite.png',
    gradient: 'linear-gradient(145deg, #4a0066 0%, #2d0040 60%, #1e0030 100%)',
    accentColor: '#ab47bc',
    badge: null,
    badgeBg: null,
  },
  {
    name: 'CLASSIC PLUS WHITE',
    tagline: 'TILE ADHESIVES',
    description: 'A multipurpose high polymer-modified adhesive for interior and exterior installation of ceramic tiles, large format vitrified tiles, stones, quarry tiles, marble & granite, glass mosaic tiles, paver & bricks.',
    features: ['Interior & exterior applications', 'Superior bond strength', 'High performance in all weather', 'Pack size: 20 Kg', 'Bed thickness up to 12 mm'],
    image: './classicPlusWhite.png',
    gradient: 'linear-gradient(145deg, #880e4f 0%, #560027 60%, #3d001c 100%)',
    accentColor: '#e91e63',
    badge: 'MARBLE & STONE',
    badgeBg: 'linear-gradient(135deg,#e91e63,#c2185b)',
  },
  {
    name: 'ULTRA GREY',
    tagline: 'TILE ADHESIVES',
    description: 'A multipurpose high polymer-modified adhesive for interior and exterior installation of ceramic tiles, large format vitrified tiles, stones, quarry tiles, marble & granite, glass mosaic tiles, paver & bricks. Polymer-modified super flexible adhesive with superior bond strength.',
    features: ['Interior & exterior applications', 'Super flexible with superior bond', 'High performance in all weather', 'Pack size: 20 Kg', 'Bed thickness up to 12 mm'],
    image: './ultraGrey.png',
    gradient: 'linear-gradient(145deg, #1b5e20 0%, #0d3510 60%, #082408 100%)',
    accentColor: '#43a047',
    badge: 'HEAVY DUTY',
    badgeBg: 'linear-gradient(135deg,#43a047,#2e7d32)',
  },
]

const WA_ADHESIVE = 'Hello%2C%20I%20am%20interested%20in%20TREEN%20Tile%20Adhesives%20for%20export.'

function TileAdhesivesSection() {
  return (
    <section className="ep-showcase ep-ta-section" id="ep-tile-adhesives">
      {/* Header */}
      <motion.div className="ep-showcase__header" {...fadeUp(0)}>
        <span className="ep-showcase__tag" style={{ '--acc': '#f5a623' }}>
          Construction Chemicals
        </span>
        <h2 className="ep-showcase__title">Tile Adhesives Export Range</h2>
        <p className="ep-showcase__sub">
          ISO-certified TREEN® tile adhesives — 6 variants for every application, from entry-range
          to heavy-duty. Bulk export with full documentation.
        </p>
      </motion.div>

      {/* 6 cards — 3 per row */}
      <div className="ep-ta-grid">
        {TILE_ADHESIVES.map((p, i) => (
          <motion.div
            key={p.name}
            className="ep-ta-card"
            {...cardIn(i, 0.09)}
            whileHover={{ y: -8, transition: { duration: 0.24 } }}
          >
            {/* Dark image area */}
            <div className="ep-ta-card__img-wrap" style={{ background: p.gradient }}>
              <img src={p.image} alt={p.name} className="ep-ta-card__img" />
              {/* Glow blob */}
              <div
                className="ep-ta-card__glow"
                style={{ background: `radial-gradient(circle, ${p.accentColor}55 0%, transparent 65%)` }}
              />
              {/* Badge */}
              {p.badge && (
                <span
                  className="ep-ta-card__badge"
                  style={{ background: p.badgeBg }}
                >
                  {p.badge}
                </span>
              )}
              {/* Tagline + name overlay */}
              <div className="ep-ta-card__overlay">
                <span className="ep-ta-card__cat">{p.tagline}</span>
                <span className="ep-ta-card__name">{p.name}</span>
              </div>
            </div>

            {/* White body */}
            <div className="ep-ta-card__body">
              <p className="ep-ta-card__desc">{p.description}</p>
              <ul className="ep-ta-card__features">
                {p.features.map((f, j) => (
                  <li key={j} className="ep-ta-card__feature" style={{ '--ta-acc': p.accentColor }}>
                    <span className="ep-ta-card__dot" style={{ background: p.accentColor }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/919781704277?text=${WA_ADHESIVE}`}
                target="_blank"
                rel="noreferrer"
                className="ep-ta-card__btn"
                style={{ '--ta-acc': p.accentColor }}
              >
                Enquire Now
                <HiArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.div className="ep-showcase__note" style={{ '--acc': '#f5a623' }} {...fadeUp(0.3)}>
        <HiDocumentText size={16} className="ep-showcase__note-icon" />
        <span>
          Full product specifications, TDS and export pricing available on request.&nbsp;
          <a
            href={`https://wa.me/919781704277?text=${WA_ADHESIVE}`}
            target="_blank" rel="noreferrer"
          >
            WhatsApp us
          </a>
          &nbsp;for bulk quotes.
        </span>
      </motion.div>
    </section>
  )
}

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
    pdfFile: './Watch.pdf',
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
    pdfFile: './Furniture.pdf',
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
    sub: 'Premium kitchen sinks in quartz and stainless steel — available in branded and non-branded variants, built for durability and global export.',
    accentColor: '#06b6d4',
    FallbackIcon: MdOutlineKitchen,
    pdfFile: '.Company-sink/.pdf',
    pdfLabel: 'Quartz Sink Catalogue PDF',
    pdfFile2: './NON-BRAND-SINK.pdf',
    pdfLabel2: 'Non-Brand Sink Catalogue PDF',
    waText: 'Hello%2C%20I%20am%20interested%20in%20the%20Sink%20collection%20for%20export.',
    available: true,
    cards: [
      {
        image: './S1.png',
        name: 'Quartz Kitchen Sinks',
        description: 'Premium quartz composite kitchen sinks with superior heat and scratch resistance. Available in multiple colours and bowl configurations for residential and hospitality projects.',
        badge: 'Best Seller', badgeColor: '#06b6d4',
        tags: ['Quartz Composite', 'Heat Resistant', 'Kitchen'],
        pdf: '/Quartz Sink Catalogue without logo.pdf',
        pdfName: 'TREEN_Quartz_Sink_Catalog.pdf',
        pdfLabel: 'View Products',
      },
      {
      image: './S2.png',
        name: 'Non-Brand Kitchen Sinks',
        description: 'High-quality stainless steel kitchen sinks without branding — perfect for OEM buyers, private-label projects and bulk wholesale orders at competitive pricing.',
        badge: 'OEM Ready', badgeColor: '#f5a623',
        tags: ['Stainless Steel', 'Private Label', 'Bulk Orders'],
        pdf: '/NON-BRAND SINK.pdf',
        pdfName: 'TREEN_NonBrand_Sink_Catalog.pdf',
        pdfLabel: 'View Products',
      },
      {
       image: './S3.png',
        name: 'Custom & Wholesale Sinks',
        description: 'Custom bowl sizes, drain placements and finish options available for large orders. Full export documentation, competitive MOQs and global shipping support.',
        badge: 'Export Ready', badgeColor: '#a855f7',
        tags: ['Custom Sizes', 'Wholesale', 'Export Docs'],
        pdf: '/Quartz Sink Catalogue without logo.pdf',
        pdfName: 'TREEN_Sink_Export_Catalog.pdf',
        pdfLabel: 'View Products',
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
    pdfFile: './Mirror.pdf',
    pdfLabel: 'Mirror Catalog PDF',
    waText: 'Hello%2C%20I%20am%20interested%20in%20the%20Mirror%20collection%20for%20export.',
    available: true,
    cards: [
      {
        image: './MI1.jpeg',
        name: 'Fancy Mirrors',
        description: 'Elegant and ornate fancy mirrors with premium finishes — perfect for living rooms, hotels, retail spaces and luxury interiors.',
        badge: 'Trending', badgeColor: '#22c55e',
        tags: ['Fancy', 'Premium Finish', 'Luxury Interiors'],
        pdf: '/Mirror.pdf',
        pdfName: 'TREEN_Mirror_Catalog.pdf',
        pdfLabel: 'View Products',
        containImg: true,
      },
      {
        image: './MI2.jpeg',
        name: 'Decorative Wall Mirrors',
        description: 'Ornate and contemporary framed mirrors for living rooms and lobbies. Available in gold, silver and black frame finishes.',
        badge: 'Popular', badgeColor: '#f5a623',
        tags: ['Decorative', 'Gold Frame', 'Wall Mount'],
        pdf: '/Mirror.pdf',
        pdfName: 'TREEN_Mirror_Catalog.pdf',
        pdfLabel: 'View Products',
        containImg: true,
      },
      {
        image: './MI3.jpeg',
        name: 'Frameless & Full-Length',
        description: 'Sleek frameless mirrors and full-length dressing mirrors for retail stores, gyms and high-end residential spaces.',
        badge: 'New', badgeColor: '#06b6d4',
        tags: ['Frameless', 'Full-Length', 'Commercial'],
        pdf: '/Mirror.pdf',
        pdfName: 'TREEN_Mirror_Catalog.pdf',
        pdfLabel: 'View Products',
        containImg: true,
      },
    ],
  },
  {
    id: 'marble-granite',
    tag: 'Marble & Granite Collection',
    title: 'Our Marble & Granite Export Range',
    sub: 'Premium natural marble and granite slabs, tiles and cut-to-size pieces — sourced from top quarries and exported globally with full certification.',
    accentColor: '#be9b6e',
    FallbackIcon: GiStonePath,
    pdfFile: './Marble.pdf',
    pdfLabel: 'Marble & Granite Catalog PDF',
    waText: 'Hello%2C%20I%20am%20interested%20in%20the%20Marble%20%26%20Granite%20collection%20for%20export.',
    available: true,
    cards: [
      {
        image: './M1.png',
        name: 'Natural Marble Slabs & Tiles',
        description: 'Premium natural marble in polished, honed and brushed finishes. Available in a wide range of colours and veining patterns — ideal for flooring, cladding and countertops.',
        badge: 'Premium', badgeColor: '#be9b6e',
        tags: ['Natural Marble', 'Polished Finish', 'Flooring'],
        pdf: '/Marble.pdf',
        pdfName: 'TREEN_Marble_Catalog.pdf',
        pdfLabel: 'View Products',
      },
      {
       image: './M2.png',
        name: 'Granite Slabs & Cut-to-Size',
        description: 'High-durability granite slabs and tiles for kitchens, bathrooms and exterior cladding. Heat and scratch resistant with exceptional longevity for commercial and residential use.',
        badge: 'Best Seller', badgeColor: '#a855f7',
        tags: ['Granite', 'Heat Resistant', 'Commercial'],
        pdf: '/Marble.pdf',
        pdfName: 'TREEN_Granite_Catalog.pdf',
        pdfLabel: 'View Products',
      },
      {
        image: './M3.png',
        name: 'Custom & Bulk Stone Orders',
        description: 'Custom cut-to-size slabs, profiled edges and bulk stone orders for builders, architects and interior designers. Competitive MOQs with full export documentation.',
        badge: 'Export Ready', badgeColor: '#22c55e',
        tags: ['Custom Cut', 'Bulk Orders', 'Architects'],
        pdf: '/Marble.pdf',
        pdfName: 'TREEN_Stone_Export_Catalog.pdf',
        pdfLabel: 'View Products',
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
            <div className={`ep-sc-card__img-wrap${card.containImg ? ' ep-sc-card__img-wrap--contain' : ''}`}>
              {card.image ? (
                <>
                  <img
                    src={card.image}
                    alt={card.name}
                    className="ep-sc-card__img"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Placeholder fallback on error */}
                  <div className="ep-sc-card__placeholder" style={{ display: 'none', '--acc': accentColor }}>
                    <FallbackIcon size={52} className="ep-sc-card__ph-icon" />
                    <span className="ep-sc-card__ph-text">Image Coming Soon</span>
                  </div>
                </>
              ) : (
                /* No image provided — show placeholder immediately */
                <div className="ep-sc-card__placeholder" style={{ display: 'flex', '--acc': accentColor }}>
                  <FallbackIcon size={52} className="ep-sc-card__ph-icon" />
                  <span className="ep-sc-card__ph-text">Image Coming Soon</span>
                </div>
              )}
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
                {/* Per-card PDF takes priority, then section-level PDF */}
                {available && (card.pdf || pdfFile) ? (
                  <motion.a
                    href={card.pdf || pdfFile}
                    download={card.pdfName || `TREEN_${id}_Catalog.pdf`}
                    target="_blank" rel="noreferrer"
                    className="ep-sc-btn ep-sc-btn--primary"
                    style={{ '--acc': accentColor }}
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  >
                    <HiDownload size={16} />
                    {card.pdfLabel || 'View Products'}
                  </motion.a>
                ) : (
                  <span className="ep-sc-btn ep-sc-btn--soon">
                    <HiClock size={15} />
                    Coming Soon
                  </span>
                )}
                <motion.a
                  href={`https://wa.me/919781704277?text=${waText}`}
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
            {category.pdfFile2 && (
              <>
                &nbsp;and the&nbsp;
                <a href={category.pdfFile2} download={`TREEN_${id}_Catalog2.pdf`} target="_blank" rel="noreferrer">
                  {category.pdfLabel2}
                </a>
              </>
            )}
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
              <span className="ep-hero__dot"/>
              <BsGlobeEuropeAfrica size={14} />
              TREEN® Global Exports
            </div>
            <h1 className="ep-hero__title">Export Products <em>Worldwide</em></h1>
            <p className="ep-hero__sub">
              Watches, Furniture, Sinks, Mirrors &amp; Marble/Granite — shipped to 10+ countries with full
              documentation and competitive pricing.
            </p>
            {/* Quick-jump pills */}
            <div className="ep-hero__pills">
              {[
                { label: 'Tile Adhesives',  href: '#ep-tile-adhesives' },
                { label: 'Watches',         href: '#ep-watches'        },
                { label: 'Furniture',       href: '#ep-furniture'      },
                { label: 'Sinks',           href: '#ep-sinks'          },
                { label: 'Mirrors',         href: '#ep-mirrors'        },
                { label: 'Marble & Granite',href: '#ep-marble-granite' },
              ].map((p, i) => (
                <a key={i} href={p.href} className="ep-hero__pill">{p.label}</a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ BODY ══ */}
      <div className="ep-body">
        <div className="container">
          <TileAdhesivesSection />
          {CATEGORIES.map((cat) => (
            <ProductShowcase key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  )
}
