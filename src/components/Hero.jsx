import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiPhone, HiDownload, HiClock } from 'react-icons/hi'
import { MdVerified, MdLocalShipping, MdSupportAgent, MdStar, MdOutlineKitchen } from 'react-icons/md'
import { GiWatch, GiSofa, GiMirrorMirror, GiStonePath } from 'react-icons/gi'
import { TbTrowel } from 'react-icons/tb'
import { BsGlobeEuropeAfrica } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
import OrbitalRing from './OrbitalRing'
import './Hero.css'

const SLIDES = [
  {
    id: 0,
    headline1: 'Fix Every Tile',
    headline2: 'With TREEN®',
    headline3: 'Chemicals',
    sub: 'Premium Adhesives · Grouts · Waterproofing · Construction Chemicals engineered for lasting performance across residential, commercial & industrial applications.',
    cta1: 'Get a Free Quote',
    cta2: 'Explore Products',
    cta1Link: 'contact',
    cta2Link: 'products',
    accentColor: '#f5a623',
    bg: 'radial-gradient(ellipse 130% 90% at 65% -10%, #0e2a5c 0%, #040c1e 60%)',
    glow1: 'rgba(245,166,35,0.18)',
    glow2: 'rgba(59,130,246,0.12)',
  },
  {
    id: 1,
    headline1: 'Premium Epoxy',
    headline2: 'Grout Systems',
    headline3: 'by TREEN®',
    sub: '100% stain-free, antibacterial & UV-resistant epoxy grouts in 36+ colours. Ideal for kitchens, bathrooms, hospitals, swimming pools & high-traffic areas.',
    cta1: 'View Grout Range',
    cta2: 'Get Quote',
    cta1Link: 'products',
    cta2Link: 'contact',
    accentColor: '#06b6d4',
    bg: 'radial-gradient(ellipse 130% 90% at 65% -10%, #022c40 0%, #040c1e 60%)',
    glow1: 'rgba(6,182,212,0.18)',
    glow2: 'rgba(168,85,247,0.10)',
  },
  {
    id: 2,
    headline1: 'Advanced',
    headline2: 'Waterproofing',
    headline3: 'Solutions',
    sub: 'Complete moisture protection for roofs, basements, bathrooms & wet areas. ISO-certified formulations powered by German polymer technology.',
    cta1: 'Explore Waterproofing',
    cta2: 'Get Quote',
    cta1Link: 'products',
    cta2Link: 'contact',
    accentColor: '#22c55e',
    bg: 'radial-gradient(ellipse 130% 90% at 65% -10%, #022d14 0%, #040c1e 60%)',
    glow1: 'rgba(34,197,94,0.15)',
    glow2: 'rgba(6,182,212,0.10)',
  },
  {
    id: 3,
    headline1: 'Heavy Duty',
    headline2: 'Stone & Tile',
    headline3: 'Accessories',
    sub: 'Complete installation ecosystem — levelling clips, suction cups, knotch trowels, tile spacers & circular levelling jacks for professional results every time.',
    cta1: 'View Accessories',
    cta2: 'Get Quote',
    cta1Link: 'products',
    cta2Link: 'contact',
    accentColor: '#a855f7',
    bg: 'radial-gradient(ellipse 130% 90% at 65% -10%, #1a0a2e 0%, #040c1e 60%)',
    glow1: 'rgba(168,85,247,0.18)',
    glow2: 'rgba(245,166,35,0.10)',
  },
  // {
  //   id: 4,
  //   headline1: 'Export Premium',
  //   headline2: 'Watches , Furniture , Sink & Mirrors',
  //   headline3: 'Worldwide',
  //   sub: 'TREEN® extends its global trade network to luxury timepieces & handcrafted furniture — 5 categories, custom packaging, FOB & CIF available. Shipped to Middle East, Europe, Africa & beyond.',
  //   cta1: 'Explore Export Range',
  //   cta2: 'Get Export Quote',
  //   cta1Link: 'import-export',
  //   cta2Link: 'contact',
  //   accentColor: '#f97316',
  //   bg: 'radial-gradient(ellipse 130% 90% at 65% -10%, #3d1500 0%, #040c1e 60%)',
  //   glow1: 'rgba(249,115,22,0.22)',
  //   glow2: 'rgba(245,166,35,0.12)',
  //   isExport: true,
  // },
]

const STATS = [
  { value: 'ISO', label: 'Certified Mfg.',  icon: '🏅' },
  { value: '18+', label: 'Products',         icon: '🗂️' },
  { value: '36+', label: 'Grout Colours',    icon: '🎨' },
  { value: '🇩🇪', label: 'German Tech',      icon: '' },
]

const CYCLE_WORDS = ['With TREEN®', 'Every Project', 'Every Surface', 'With Confidence']

const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1.5,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 10,
  duration: Math.random() * 8 + 8,
}))

const textBlock = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
  exit:    {},
}
const textLine = {
  hidden:  { opacity: 0, y: 44, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -22, filter: 'blur(4px)', transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
}
const wordSwap = {
  initial: { opacity: 0, y: 22, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -18, filter: 'blur(3px)', transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
}

/* ── Export categories shown in the hero right panel ── */
const EXPORT_CATS = [
  {
    Icon: TbTrowel,
    label: 'Tile Adhesives',
    sub: '6 Variants · ISO Certified',
    color: '#f5a623',
    iconAnim: {
      animate: { rotate: [0, -15, 15, -10, 10, 0] },
      transition: { duration: 2.4, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' },
    },
  },
  {
    Icon: GiWatch,
    label: 'Watches',
    sub: 'Analog & Luxury',
    color: '#f97316',
    iconAnim: {
      animate: { scale: [1, 1.22, 1], rotate: [0, 8, -8, 0] },
      transition: { duration: 2, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' },
    },
  },
  {
    Icon: GiSofa,
    label: 'Furniture',
    sub: 'Living & Office',
    color: '#a855f7',
    iconAnim: {
      animate: { y: [0, -6, 0] },
      transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  {
    Icon: MdOutlineKitchen,
    label: 'Sinks',
    sub: 'Quartz & Steel',
    color: '#06b6d4',
    iconAnim: {
      animate: { rotateY: [0, 180, 360] },
      transition: { duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' },
    },
  },
  {
    Icon: GiMirrorMirror,
    label: 'Mirrors',
    sub: 'Fancy & Decorative',
    color: '#22c55e',
    iconAnim: {
      animate: { scaleX: [1, -1, 1] },
      transition: { duration: 2.2, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' },
    },
  },
  {
    Icon: GiStonePath,
    label: 'Marble & Granite',
    sub: 'Slabs & Tiles',
    color: '#be9b6e',
    iconAnim: {
      animate: { scale: [1, 1.18, 1], opacity: [1, 0.7, 1] },
      transition: { duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' },
    },
  },
]

function ExportVisual({ accentColor }) {
  return (
    <div className="hero-export-visual">
      {/* Globe header */}
      <motion.div
        className="hev-header"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <BsGlobeEuropeAfrica size={18} style={{ color: accentColor }} />
        <span style={{ color: accentColor ,fontSize:'22px' }} >TREEN® Global Exports</span>
        <span className="hev-header__dot" style={{ background: accentColor }} />
        <span className="hev-header__live">10+ Countries</span>
      </motion.div>

      {/* 6 category cards — 3 columns */}
      <div className="hev-grid hev-grid--3">
        {EXPORT_CATS.map((cat, i) => (
          <motion.div
            key={cat.label}
            className="hev-card"
            style={{ '--hev-acc': cat.color }}
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.12 + i * 0.08, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.04, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="hev-card__icon-wrap"
              animate={cat.iconAnim.animate}
              transition={cat.iconAnim.transition}
            >
              <cat.Icon size={24} className="hev-card__icon" />
            </motion.div>
            <div className="hev-card__body">
              <span className="hev-card__label">{cat.label}</span>
              <span className="hev-card__sub">{cat.sub}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats row */}
      <motion.div
        className="hev-stats"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {[
          { val: '10+', lbl: 'Markets' },
          { val: 'FOB', lbl: 'Morbi Port' },
          { val: '48h', lbl: 'Quote' },
          { val: '6',   lbl: 'Categories' },
        ].map((s, i) => (
          <div key={i} className="hev-stat">
            <span className="hev-stat__val" style={{ color: accentColor }}>{s.val}</span>
            <span className="hev-stat__lbl">{s.lbl}</span>
          </div>
        ))}
      </motion.div>

      {/* CTA row */}
      <motion.div
        className="hev-cta-row"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <RouterLink
          to="/export"
          className="hev-btn hev-btn--primary"
          style={{
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}bb)`,
            boxShadow: `0 4px 20px ${accentColor}44`,
          }}
        >
          <HiArrowRight size={15} />
          View Full Catalog
        </RouterLink>
        <a
          href="https://wa.me/919781704277?text=Hello%2C%20I%20am%20interested%20in%20export%20enquiry."
          target="_blank"
          rel="noreferrer"
          className="hev-btn hev-btn--wa"
        >
          <FaWhatsapp size={15} />
          Enquire Now
        </a>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [wordIdx, setWordIdx] = useState(0)
  const timerRef = useRef(null)
  const wordRef  = useRef(null)

  const goTo = (idx) => setCurrent((idx + SLIDES.length) % SLIDES.length)
  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  useEffect(() => {
    timerRef.current = setInterval(next, 5500)
    return () => clearInterval(timerRef.current)
  }, [current])

  useEffect(() => {
    if (current !== 0) return
    wordRef.current = setInterval(() => {
      setWordIdx(w => (w + 1) % CYCLE_WORDS.length)
    }, 2600)
    return () => clearInterval(wordRef.current)
  }, [current])

  const slide = SLIDES[current]
  const headline2Display = current === 0 ? CYCLE_WORDS[wordIdx] : slide.headline2

  return (
    <section id="hero" className="hero">

      {/* ── Animated background ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${slide.id}`}
          className="hero__bg-anim"
          style={{ background: slide.bg }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <div className="hero__bg-base" />

      <AnimatePresence mode="sync">
        <motion.div
          key={`g1-${slide.id}`}
          className="hero__bg-glow hero__bg-glow--1"
          style={{ background: `radial-gradient(circle, ${slide.glow1} 0%, transparent 70%)` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
        />
      </AnimatePresence>
      <div
        className="hero__bg-glow hero__bg-glow--2"
        style={{ background: `radial-gradient(circle, ${slide.glow2} 0%, transparent 70%)` }}
      />
      <div className="hero__grid-pattern" />

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {PARTICLES.map(p => (
          <span
            key={p.id}
            className="hero__particle"
            style={{
              width: p.size, height: p.size,
              left: `${p.x}%`, top: `${p.y}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              background: slide.accentColor + '88',
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="hero__main">
        <div className="container hero__inner">

          {/* LEFT — text */}
          <div className="hero__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${slide.id}`}
                className="hero__content-inner"
                variants={textBlock}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Eyebrow placeholder */}
                <motion.div variants={textLine} />

                {/* Headline */}
                <h1 className="hero__headline">
                  <motion.span className="hero__headline-line hero__headline-line--1" variants={textLine}>
                    {slide.headline1}
                  </motion.span>

                  <span className="hero__headline-line hero__headline-line--2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={current === 0 ? `word-${wordIdx}` : `slide-${slide.id}`}
                        className="hero__headline-highlight"
                        style={{ color: slide.accentColor, textShadow: `0 0 60px ${slide.accentColor}55` }}
                        {...wordSwap}
                      >
                        {headline2Display}
                      </motion.span>
                    </AnimatePresence>
                  </span>

                  <motion.span className="hero__headline-line hero__headline-line--3" variants={textLine}>
                    {slide.headline3}
                  </motion.span>
                </h1>

                {/* Sub */}
                <motion.p className="hero__sub" variants={textLine}>
                  {slide.sub}
                </motion.p>

                {/* CTAs */}
                <motion.div className="hero__ctas" variants={textLine}>
                  <ScrollLink
                    to={slide.cta1Link} smooth duration={500} offset={-72}
                    className="hero__btn hero__btn--primary"
                    style={{
                      background: `linear-gradient(135deg, ${slide.accentColor}, ${slide.accentColor}bb)`,
                      boxShadow: `0 4px 28px ${slide.accentColor}55`,
                    }}
                  >
                    {slide.cta1}
                    <HiArrowRight size={18} />
                  </ScrollLink>
                  <a href="tel:+917665656574" className="hero__btn hero__btn--call">
                    <HiPhone size={17} />
                    Call Now
                  </a>
                  <ScrollLink
                    to={slide.cta2Link} smooth duration={500} offset={-72}
                    className="hero__btn hero__btn--ghost"
                  >
                    {slide.cta2}
                  </ScrollLink>
                </motion.div>

                {/* Trust pills */}
                <motion.div className="hero__pills" variants={textLine}>
                  {(slide.isExport ? [
                    { icon: <GiWatch size={14} />,         text: 'Watches Export' },
                    { icon: <GiSofa size={14} />,          text: 'Furniture Export' },
                    { icon: <MdLocalShipping size={14} />, text: 'Global Shipping' },
                    { icon: <MdVerified size={14} />,      text: 'FOB & CIF' },
                  ] : [
                    { icon: <MdVerified size={14} />,      text: 'ISO Certified' },
                    { icon: <MdLocalShipping size={14} />, text: 'Pan-India Delivery' },
                    { icon: <MdSupportAgent size={14} />,  text: 'Tech Support' },
                    { icon: <MdStar size={14} />,          text: 'German Polymer Tech' },
                  ]).map((b, i) => (
                    <motion.span
                      key={i}
                      className="hero__pill"
                      style={{ '--pill-accent': slide.accentColor }}
                      whileHover={{ scale: 1.07, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {b.icon}
                      {b.text}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — Export Visual or OrbitalRing */}
          <div className="hero__visual">
            {slide.isExport ? (
              <motion.div
                key="export-visual"
                className="hero__orbital-wrap"
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <ExportVisual accentColor={slide.accentColor} />
              </motion.div>
            ) : (
              <motion.div
                key={`orbital-${slide.id}`}
                className="hero__orbital-wrap"
                initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <ExportVisual accentColor={slide.accentColor} />
              </motion.div>
            )}

            {/* Floating badge */}
            {/* <motion.div
              className="hero__float hero__float--br"
              style={{ borderColor: `${slide.accentColor}40`, background: `${slide.accentColor}14` }}
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              whileHover={{ scale: 1.08 }}
            >
          
            </motion.div> */}
          </div>

        </div>
      </div>

      {/* ── Slider controls ── */}
      <div className="hero__slider-controls">
        <motion.button
          className="hero__slider-btn" onClick={prev} aria-label="Previous slide"
          whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }}
        >
          <HiChevronLeft size={22} />
        </motion.button>

        <div className="hero__slider-dots">
          {SLIDES.map((_, i) => (
            <motion.button
              key={i}
              className={`hero__dot${i === current ? ' hero__dot--active' : ''}`}
              style={i === current ? { background: slide.accentColor, width: 28 } : {}}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.85 }}
            />
          ))}
        </div>

        <motion.button
          className="hero__slider-btn" onClick={next} aria-label="Next slide"
          whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }}
        >
          <HiChevronRight size={22} />
        </motion.button>
      </div>

      {/* ── Stats Bar ── */}
      <motion.div
        className="hero__statsbar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="container hero__statsbar-inner">
          {STATS.map((s, i) => (
            <React.Fragment key={i}>
              <div className="hero__stat">
                {s.icon && <span className="hero__stat-icon">{s.icon}</span>}
                <span className="hero__stat-val">{s.value}</span>
                <span className="hero__stat-lbl">{s.label}</span>
              </div>
              {i < STATS.length - 1 && <div className="hero__stat-sep" />}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <ScrollLink to="products" smooth duration={500} offset={-72} className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </ScrollLink>

      {/* Bottom gradient fade */}
      <div className="hero__wave-divider" />
    </section>
  )
}
