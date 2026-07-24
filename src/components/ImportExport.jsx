import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import {
  HiArrowRight, HiDocumentText,
  HiCheckCircle, HiPhone, HiDownload, HiClock,
} from 'react-icons/hi'
import {
  MdVerified, MdOutlineKitchen,
} from 'react-icons/md'
import {
  FaShip, FaWarehouse,
  FaHandshake, FaWhatsapp,
} from 'react-icons/fa'
import {
  TbTrowel, TbDroplet, TbCertificate,
  TbFileInvoice, TbPackage, TbMessage2,
  TbFlask2, TbDeviceWatch,
} from 'react-icons/tb'
import { GiCargoCrane, GiWatch, GiWoodFrame, GiSofa, GiOfficeChair, GiMirrorMirror } from 'react-icons/gi'
import { BsGlobeEuropeAfrica, BsBoxSeam } from 'react-icons/bs'
import SectionBanner from './SectionBanner'
import { VP } from './AnimationUtils'
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

const TRADE_STATS = [
  { val: '10+', label: 'Export Markets',     Icon: BsGlobeEuropeAfrica, color: '#3b82f6' },
  { val: 'FOB', label: 'Morbi Port',         Icon: FaShip,              color: '#06b6d4' },
  { val: 'ISO', label: 'Certified Products', Icon: TbCertificate,       color: '#f59e0b' },
  { val: '48h', label: 'Quote Turnaround',   Icon: TbMessage2,          color: '#22c55e' },
]

const CATALOGS = [
  {
    id: 'watches',
    Icon: GiWatch,
    title: 'Watches',
    description: 'Explore our complete collection of analog and luxury timepieces. Premium brands, bulk orders, and retail export worldwide.',
    pdfFile: '/Watch.pdf',
    pdfSize: '2.4 MB',
    color: '#f97316',
    available: true,
  },
  {
    id: 'furniture',
    Icon: GiSofa,
    title: 'Furniture',
    description: 'Handcrafted living room, office, and custom wooden furniture. Modern designs and traditional craftsmanship for global markets.',
    pdfFile: '/Furniture.pdf',
    pdfSize: '3.1 MB',
    color: '#a855f7',
    available: true,
  },
  {
    id: 'sinks',
    Icon: MdOutlineKitchen,
    title: 'Sinks',
    description: 'Premium kitchen and bathroom sinks in stainless steel, ceramic, and granite. Wholesale catalog coming soon.',
    pdfFile: null,
    pdfSize: null,
    color: '#06b6d4',
    available: false,
  },
  {
    id: 'mirrors',
    Icon: GiMirrorMirror,
    title: 'Mirrors',
    description: 'Decorative and functional mirrors for residential and commercial projects. LED-illuminated and frameless options.',
    pdfFile: null,
    pdfSize: null,
    color: '#22c55e',
    available: false,
  },
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

export default function Export() {
  const processRef  = useRef(null)
  const processView = useInView(processRef, { once: true, amount: 0.2 })
  const docsRef     = useRef(null)
  const docsView    = useInView(docsRef, { once: true, amount: 0.3 })

  return (
    <section id="import-export" className="ie-section">

      <SectionBanner
        tag="Export"
        title={<>TREEN® Goes <em>Global</em></>}
        subtitle="We export ISO-certified TREEN® construction chemicals worldwide to deliver German-quality products — Made in India."
        theme="teal"
        align="left"
        accent={BANNER_ACCENT}
        breadcrumb={[{ label: 'Export' }]}
      />

      <div className="section ie-body">
        <div className="container">

          {/* ══ PRODUCT GRID ══ */}
          <motion.div
            className="ie-products-section"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ie-products-header">
              <div>
                <span className="ie-products-tag">Export Range</span>
                <h3 className="ie-products-title">What We Export</h3>
                <p className="ie-products-sub">ISO-certified TREEN® products ready for bulk export to global markets.</p>
              </div>
            </div>

            <div className="ie-products-grid">
              {EXPORT_PRODUCTS.map((p, i) => (
                <motion.div
                  key={p.name} className="ie-product-card"
                  style={{ '--ie-color': p.color }}
                  variants={cardVariant} custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VP}
                  whileHover={{ y: -8, transition: { duration: 0.22 } }}
                >
                  <div className="ie-product-card__bar" />
                  <div className="ie-product-card__icon-wrap">
                    <p.Icon size={28} className="ie-product-card__icon" />
                  </div>
                  <h4 className="ie-product-card__name">{p.name}</h4>
                  <p className="ie-product-card__desc">{p.desc}</p>
                  <div className="ie-product-card__footer">
                    {p.markets.map((m, j) => (
                      <span key={j} className="ie-product-card__tag">{m}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
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

          {/* ══ WATCHES & FURNITURE EXPORT — 5 PRODUCT CARDS ══ */}
          <motion.div
            className="ie-wf-section"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Section header */}
            <div className="ie-wf-section__header">
              <div className="ie-wf-section__header-left">
                <span className="ie-wf-section__tag">Beyond Chemicals</span>
                <h3 className="ie-wf-section__title">
                  We Also Export <em>Watches</em> &amp; <em>Furniture</em>
                </h3>
                <p className="ie-wf-section__sub">
                  TREEN® extends its global trade network to premium timepieces and handcrafted
                  furniture — shipped worldwide with the same reliability as our chemicals.
                </p>
              </div>
              <div className="ie-wf-section__header-right">
                <div className="ie-wf-section__stat">
                  <GiWatch size={22} className="ie-wf-section__stat-icon" />
                  <span>5 Categories</span>
                </div>
                <div className="ie-wf-section__stat">
                  <BsGlobeEuropeAfrica size={18} className="ie-wf-section__stat-icon" />
                  <span>Global Export</span>
                </div>
              </div>
            </div>

            {/* 5 product cards */}
            <div className="ie-wf-grid">
              {[
                {
                  Icon: TbDeviceWatch,
                  name: 'Analog Watches',
                  desc: 'Classic &amp; fashion analog timepieces in bulk — ideal for retail chains, distributors and gifting.',
                  markets: ['Middle East', 'Europe', 'Africa'],
                  color: '#f5a623',
                },
                {
                  Icon: GiWatch,
                  name: 'Luxury Watches',
                  desc: 'Premium branded &amp; designer watches. Curated selection for high-end retail and wholesale export.',
                  markets: ['UAE', 'UK', 'Europe'],
                  color: '#a855f7',
                },
                {
                  Icon: GiSofa,
                  name: 'Living Room Furniture',
                  desc: 'Sofas, loungers &amp; modular sets — modern and traditional styles for residential &amp; hospitality.',
                  markets: ['Middle East', 'Africa', 'SE Asia'],
                  color: '#fb7120',
                },
                {
                  Icon: GiOfficeChair,
                  name: 'Office Furniture',
                  desc: 'Ergonomic chairs, workstations &amp; storage solutions for corporate &amp; co-working spaces.',
                  markets: ['GCC', 'South Asia', 'Europe'],
                  color: '#06b6d4',
                },
                {
                  Icon: GiWoodFrame,
                  name: 'Wooden &amp; Custom Furniture',
                  desc: 'Handcrafted solid wood &amp; engineered wood furniture. Custom sizing and finishing available.',
                  markets: ['Global', 'Middle East', 'SAARC'],
                  color: '#22c55e',
                },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className="ie-wf-card"
                  style={{ '--wf-color': p.color }}
                  initial={{ opacity: 0, y: 28, scale: 0.97 }}
                  whileInView={{
                    opacity: 1, y: 0, scale: 1,
                    transition: { delay: i * 0.09, duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                  }}
                  viewport={VP}
                  whileHover={{ y: -8, transition: { duration: 0.22 } }}
                >
                  <div className="ie-wf-card__bar" />
                  <div className="ie-wf-card__icon-wrap">
                    <p.Icon size={28} className="ie-wf-card__icon" />
                  </div>
                  <h4 className="ie-wf-card__name" dangerouslySetInnerHTML={{ __html: p.name }} />
                  <p className="ie-wf-card__desc" dangerouslySetInnerHTML={{ __html: p.desc }} />
                  <div className="ie-wf-card__footer">
                    {p.markets.map((m, j) => (
                      <span key={j} className="ie-wf-card__tag">{m}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA row */}
            <motion.div
              className="ie-wf-section__cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="ie-wf-section__cta-text">
                Interested in watches or furniture export? Get a quote in 48 hours.
              </p>
              <div className="ie-wf-section__cta-btns">
                <ScrollLink
                  to="contact" smooth duration={500} offset={-72}
                  className="ie-wf-btn ie-wf-btn--primary"
                >
                  <FaHandshake size={16} />
                  Get Export Quote
                  <HiArrowRight size={15} />
                </ScrollLink>
                <a
                  href="https://wa.me/917665656574?text=Hello%2C%20I%20am%20interested%20in%20export%20enquiry%20for%20Watches%20and%20Furniture."
                  target="_blank" rel="noreferrer"
                  className="ie-wf-btn ie-wf-btn--ghost"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* ══ PRODUCT CATALOGS — DOWNLOAD PDFs ══ */}
          <motion.div
            className="ie-catalogs-section"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ie-catalogs-header">
              <span className="ie-catalogs-tag">Product Catalogs</span>
              <h3 className="ie-catalogs-title">Download Our Export Catalogs</h3>
              <p className="ie-catalogs-sub">
                Browse detailed product specifications, pricing, and export information in PDF format.
              </p>
            </div>

            {/* Info strip */}
            <div className="ie-catalogs-info">
              <HiDocumentText size={18} />
              <span>All catalogs include product images, specs, export pricing & bulk order info.</span>
            </div>

            {/* Catalog cards */}
            <div className="ie-catalogs-grid">
              {CATALOGS.map((catalog, i) => (
                <motion.div
                  key={catalog.id}
                  className={`ie-catalog-card${!catalog.available ? ' ie-catalog-card--unavailable' : ''}`}
                  style={{ '--catalog-color': catalog.color }}
                  initial={{ opacity: 0, y: 28, scale: 0.97 }}
                  whileInView={{
                    opacity: 1, y: 0, scale: 1,
                    transition: { delay: i * 0.12, duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                  }}
                  viewport={VP}
                  whileHover={catalog.available ? { y: -6, transition: { duration: 0.22 } } : {}}
                >
                  <div className="ie-catalog-card__bar" />
                  <div className="ie-catalog-card__icon-wrap">
                    <catalog.Icon size={32} className="ie-catalog-card__icon" />
                  </div>
                  <h4 className="ie-catalog-card__title">{catalog.title}</h4>
                  <p className="ie-catalog-card__desc">{catalog.description}</p>

                  {catalog.available ? (
                    <div className="ie-catalog-card__footer">
                      <div className="ie-catalog-card__meta">
                        <HiDocumentText size={13} />
                        <span>PDF · {catalog.pdfSize}</span>
                      </div>
                      <motion.a
                        href={catalog.pdfFile}
                        download={`TREEN_${catalog.title}_Catalog.pdf`}
                        target="_blank"
                        rel="noreferrer"
                        className="ie-catalog-card__btn"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <HiDownload size={15} />
                        View Products
                      </motion.a>
                    </div>
                  ) : (
                    <div className="ie-catalog-card__footer ie-catalog-card__footer--soon">
                      <div className="ie-catalog-card__soon">
                        <HiClock size={15} />
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  )}
                </motion.div>
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

            {/* Floating crane icon */}
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
                  Partner with TREEN® for<br />International Export
                </h3>
                <p className="ie-cta-banner__sub">
                  Get competitive pricing, full documentation and reliable supply for your
                  export requirements.
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
