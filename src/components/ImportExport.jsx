import React, { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import {
  HiArrowRight, HiDocumentText, HiShieldCheck,
  HiCheckCircle, HiPhone,
} from 'react-icons/hi'
import {
  MdVerified, MdFactory,
} from 'react-icons/md'
import {
  FaShip, FaBoxOpen, FaWarehouse,
  FaHandshake, FaWhatsapp,
} from 'react-icons/fa'
import {
  TbTrowel, TbDroplet, TbCertificate,
  TbFileInvoice, TbPackage, TbMessage2,
  TbBuildingFactory2, TbFlask2,
  TbColorSwatch, TbAtom2, TbWorldUpload,
  TbShip, TbClipboardList,
} from 'react-icons/tb'
import { GiFactory, GiCargoCrane } from 'react-icons/gi'
import { BsGlobeEuropeAfrica, BsBoxSeam } from 'react-icons/bs'
import SectionBanner from './SectionBanner'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, VP } from './AnimationUtils'
import './ImportExport.css'

/* ── Data ── */
const EXPORT_PRODUCTS = [
  {
    Icon: TbTrowel,
    name: 'Tile Adhesives',
    desc: 'COPPER, PREMIER, CLASSIC, ULTRA GREY — full range in 20 kg bags, ready for bulk export.',
    markets: ['Middle East', 'Africa', 'South Asia'],
    color: '#3b82f6',
  },
  {
    Icon: TbFlask2,
    name: 'Epoxy & Tile Grouts',
    desc: 'TP 100 & TP 200 epoxy grouts in 36+ colours. Polymer-based grouts in multiple pack sizes.',
    markets: ['GCC Countries', 'Europe', 'SE Asia'],
    color: '#f59e0b',
  },
  {
    Icon: TbDroplet,
    name: 'Waterproofing Systems',
    desc: 'ISO-certified waterproofing for roofs, basements and wet areas. Available in bulk.',
    markets: ['Middle East', 'Africa', 'SAARC'],
    color: '#06b6d4',
  },
  {
    Icon: FaWarehouse,
    name: 'Tile Accessories',
    desc: 'Levelling systems, suction cups, tile spacers, knotch trowels — complete installer range.',
    markets: ['Global', 'Middle East', 'Africa'],
    color: '#22c55e',
  },
]

const IMPORT_PRODUCTS = [
  {
    Icon: TbBuildingFactory2,
    name: 'German Polymer Additives',
    desc: 'High-grade polymer modifiers and chemical additives imported from Germany for premium formulations.',
    origin: 'Germany',
    color: '#a855f7',
  },
  {
    Icon: TbFlask2,
    name: 'Specialty Resins',
    desc: 'Epoxy and polyurethane base resins sourced from leading international chemical manufacturers.',
    origin: 'Europe / Asia',
    color: '#f87171',
  },
  {
    Icon: TbColorSwatch,
    name: 'Pigment Systems',
    desc: 'UV-stable pigments and colour concentrates for producing 36+ consistent grout colours.',
    origin: 'Germany / Italy',
    color: '#fb923c',
  },
  {
    Icon: TbAtom2,
    name: 'Chemical Intermediates',
    desc: 'Raw materials and intermediates for waterproofing and admixture manufacturing.',
    origin: 'Multi-origin',
    color: '#34d399',
  },
]

const PROCESS_STEPS = [
  {
    step: '01', Icon: TbMessage2, title: 'Submit Enquiry',
    desc: 'Share requirements, destination country and order quantity via form or WhatsApp.',
    color: '#3b82f6',
  },
  {
    step: '02', Icon: TbFileInvoice, title: 'Receive Quote',
    desc: 'Our export team sends pricing, MOQ, lead times and shipping options within 24 hrs.',
    color: '#f59e0b',
  },
  {
    step: '03', Icon: TbPackage, title: 'Confirm Order',
    desc: 'Confirm with advance payment. We prepare invoice, packing list, COA and MSDS.',
    color: '#22c55e',
  },
  {
    step: '04', Icon: FaShip, title: 'Dispatch & Deliver',
    desc: 'Dispatched via your preferred logistics partner with real-time tracking support.',
    color: '#a855f7',
  },
]

const EXPORT_MARKETS = [
  { flag: '🇸🇦', name: 'Saudi Arabia',  region: 'Middle East' },
  { flag: '🇦🇪', name: 'UAE',           region: 'Middle East' },
  { flag: '🇶🇦', name: 'Qatar',         region: 'GCC' },
  { flag: '🇰🇼', name: 'Kuwait',        region: 'GCC' },
  { flag: '🇳🇬', name: 'Nigeria',       region: 'Africa' },
  { flag: '🇰🇪', name: 'Kenya',         region: 'Africa' },
  { flag: '🇧🇩', name: 'Bangladesh',    region: 'South Asia' },
  { flag: '🇳🇵', name: 'Nepal',         region: 'South Asia' },
  { flag: '🇱🇰', name: 'Sri Lanka',     region: 'SAARC' },
  { flag: '🇲🇾', name: 'Malaysia',      region: 'SE Asia' },
]

const TRADE_STATS = [
  { val: '10+', label: 'Export Markets',     Icon: BsGlobeEuropeAfrica, color: '#3b82f6' },
  { val: 'FOB', label: 'Morbi Port',         Icon: FaShip,              color: '#06b6d4' },
  { val: 'ISO', label: 'Certified Products', Icon: TbCertificate,       color: '#f59e0b' },
  { val: '48h', label: 'Quote Turnaround',   Icon: TbMessage2,          color: '#22c55e' },
]

const BANNER_ACCENT = (
  <div className="ie-banner-stats">
    {TRADE_STATS.map((s, i) => (
      <div key={i} className="ie-banner-stat" style={{ '--bs-color': s.color }}>
        <s.Icon size={20} className="ie-banner-stat__icon" />
        <span className="ie-banner-stat__val">{s.val}</span>
        <span className="ie-banner-stat__lbl">{s.label}</span>
      </div>
    ))}
  </div>
)

/* ── Animation variants ── */
const panelVariants = {
  initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -14, filter: 'blur(3px)', transition: { duration: 0.22 } },
}

const cardVariant = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.09, duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stepVariant = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.13, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

const lineVariant = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 } },
}

export default function ImportExport() {
  const [tab, setTab] = useState('export')
  const processRef  = useRef(null)
  const processView = useInView(processRef, { once: true, amount: 0.2 })
  const docsRef     = useRef(null)
  const docsView    = useInView(docsRef, { once: true, amount: 0.3 })

  const products = tab === 'export' ? EXPORT_PRODUCTS : IMPORT_PRODUCTS

  return (
    <section id="import-export" className="ie-section">

      <SectionBanner
        tag="Import & Export"
        title={<>TREEN® Goes <em>Global</em></>}
        subtitle="We export ISO-certified TREEN® construction chemicals worldwide and import premium raw materials to deliver German-quality products — Made in India."
        theme="teal"
        align="left"
        accent={BANNER_ACCENT}
        breadcrumb={[{ label: 'Import & Export' }]}
      />

      <div className="section ie-body">
        <div className="container">

          {/* ══ OVERVIEW CARDS ══ */}
     

          {/* ══ PRODUCT TAB PANEL ══ */}
          <motion.div
            className="ie-products-section"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ie-products-header">
              <div>
                <span className="ie-products-tag">Product Range</span>
                <h3 className="ie-products-title">What We Trade</h3>
                <p className="ie-products-sub">Switch between our export-ready products and the premium raw materials we import.</p>
              </div>
              <div className="ie-tabs" role="tablist">
                {[
                  { id: 'export', label: 'Export Products', Icon: FaShip },
                  { id: 'import', label: 'Import Materials', Icon: FaBoxOpen },
                ].map(t => (
                  <motion.button
                    key={t.id} role="tab" aria-selected={tab === t.id}
                    className={`ie-tab${tab === t.id ? ' ie-tab--active' : ''}`}
                    onClick={() => setTab(t.id)}
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  >
                    <t.Icon size={15} />
                    {t.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab} className="ie-products-grid"
                variants={panelVariants} initial="initial" animate="animate" exit="exit"
              >
                {products.map((p, i) => (
                  <motion.div
                    key={p.name} className="ie-product-card"
                    style={{ '--ie-color': p.color }}
                    variants={cardVariant} custom={i}
                    initial="hidden" animate="visible"
                    whileHover={{ y: -8, transition: { duration: 0.22 } }}
                  >
                    <div className="ie-product-card__bar" />
                    <div className="ie-product-card__icon-wrap">
                      <p.Icon size={28} className="ie-product-card__icon" />
                    </div>
                    <h4 className="ie-product-card__name">{p.name}</h4>
                    <p className="ie-product-card__desc">{p.desc}</p>
                    <div className="ie-product-card__footer">
                      {tab === 'export'
                        ? p.markets.map((m, j) => <span key={j} className="ie-product-card__tag">{m}</span>)
                        : <span className="ie-product-card__tag">📍 {p.origin}</span>
                      }
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ══ PROCESS TIMELINE ══ */}
          <div className="ie-process" ref={processRef}>
            <motion.div
              className="ie-process__header"
              initial={{ opacity: 0, y: 32 }}
              animate={processView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="ie-process__tag">How It Works</span>
              <h3 className="ie-process__title">Export in 4 Simple Steps</h3>
              <p className="ie-process__sub">From enquiry to doorstep — a transparent, hassle-free process.</p>
            </motion.div>

            <div className="ie-process__track">
              {/* Animated connector line */}
              <motion.div
                className="ie-process__line"
                variants={lineVariant}
                initial="hidden"
                animate={processView ? 'visible' : 'hidden'}
                style={{ transformOrigin: 'left' }}
              />

              {PROCESS_STEPS.map((s, i) => (
                <motion.div
                  key={i} className="ie-step"
                  style={{ '--step-color': s.color }}
                  variants={stepVariant} custom={i}
                  initial="hidden"
                  animate={processView ? 'visible' : 'hidden'}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="ie-step__bubble"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <s.Icon size={20} />
                  </motion.div>

                  <div className="ie-step__card">
                    <span className="ie-step__num">{s.step}</span>
                    <h4 className="ie-step__title">{s.title}</h4>
                    <p className="ie-step__desc">{s.desc}</p>
                    <div className="ie-step__check">
                      <HiCheckCircle size={13} />
                      <span>Included</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ══ DOCS STRIP ══ */}
          <motion.div
            className="ie-docs-strip"
            ref={docsRef}
            initial={{ opacity: 0, y: 28 }}
            animate={docsView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ie-docs-strip__label">
              <HiDocumentText size={18} />
              Complete Export Documentation
            </div>
            <div className="ie-docs-strip__items">
              {[
                { label: 'Commercial Invoice',       Icon: TbFileInvoice  },
                { label: 'Packing List',             Icon: TbPackage      },
                { label: 'Certificate of Analysis',  Icon: TbCertificate  },
                { label: 'MSDS / SDS',               Icon: TbFlask2       },
                { label: 'GST Invoice',              Icon: HiDocumentText },
                { label: 'Bill of Lading',           Icon: FaShip         },
                { label: 'ISO Certificate',          Icon: MdVerified     },
              ].map((d, i) => (
                <motion.span
                  key={i} className="ie-doc-chip"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={docsView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  <d.Icon size={12} />
                  {d.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* ══ CTA BANNER ══ */}
          <motion.div
            className="ie-cta-banner"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ie-cta-banner__bg" />
            <div className="ie-cta-banner__glow ie-cta-banner__glow--1" />
            <div className="ie-cta-banner__glow ie-cta-banner__glow--2" />
            <div className="ie-cta-banner__grid" />
            <span className="ie-cta-banner__shape ie-cta-banner__shape--ring1" />
            <span className="ie-cta-banner__shape ie-cta-banner__shape--ring2" />

            {/* Floating ship icon */}
            <motion.div
              className="ie-cta-banner__ship"
              animate={{ x: [0, 18, 0], y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <GiCargoCrane size={110} />
            </motion.div>

            <div className="ie-cta-banner__inner">
              <div className="ie-cta-banner__text">
                <div className="ie-cta-banner__eyebrow">
                  <span className="ie-cta-banner__eyebrow-dot" />
                  <BsGlobeEuropeAfrica size={14} />
                  Ready to go global?
                </div>
                <h3 className="ie-cta-banner__title">
                  Partner with TREEN® for<br />International Trade
                </h3>
                <p className="ie-cta-banner__sub">
                  Get competitive pricing, full documentation and reliable supply for your
                  export or raw material import requirements.
                </p>
                <div className="ie-cta-banner__pills">
                  {[
                    { text: 'FOB & CIF available',     Icon: FaShip         },
                    { text: 'Bulk order discounts',    Icon: BsBoxSeam      },
                    { text: '48h quote turnaround',    Icon: TbMessage2     },
                    { text: 'Full documentation',      Icon: HiDocumentText },
                  ].map((p, i) => (
                    <motion.span
                      key={i} className="ie-cta-banner__pill"
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p.Icon size={12} />
                      {p.text}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="ie-cta-banner__actions">
                <ScrollLink
                  to="contact" smooth duration={500} offset={-72}
                  className="ie-cta-banner__btn ie-cta-banner__btn--primary"
                >
                  <FaHandshake size={17} />
                  Get Export Quote
                  <HiArrowRight size={16} />
                </ScrollLink>
                <a href="tel:+917665656574" className="ie-cta-banner__btn ie-cta-banner__btn--call">
                  <HiPhone size={16} />
                  +91 76656 56574
                </a>
                <a
                  href="https://wa.me/917665656574?text=Hello%2C%20I%20am%20interested%20in%20export%20enquiry%20for%20TREEN%20products."
                  target="_blank" rel="noreferrer"
                  className="ie-cta-banner__btn ie-cta-banner__btn--ghost"
                >
                  <FaWhatsapp size={17} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
