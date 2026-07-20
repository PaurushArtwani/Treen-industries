import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiPhone } from 'react-icons/hi'
import { MdVerified, MdLocalShipping, MdSupportAgent, MdStar } from 'react-icons/md'
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
    accentColor: '#a855f7',
    bg: 'radial-gradient(ellipse 130% 90% at 65% -10%, #1a0a2e 0%, #040c1e 60%)',
    glow1: 'rgba(168,85,247,0.18)',
    glow2: 'rgba(245,166,35,0.10)',
  },
]

const STATS = [
  { value: 'ISO',  label: 'Certified Mfg.',  icon: '🏅' },
  { value: '18+',  label: 'Products',         icon: '🗂️' },
  { value: '36+',  label: 'Grout Colours',    icon: '🎨' },
  { value: '🇩🇪',  label: 'German Tech',      icon: '' },
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
      <div className="hero__bg-glow hero__bg-glow--2"
        style={{ background: `radial-gradient(circle, ${slide.glow2} 0%, transparent 70%)` }} />
      <div className="hero__grid-pattern" />

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {PARTICLES.map(p => (
          <span key={p.id} className="hero__particle"
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
                {/* Eyebrow */}
                <motion.div className="" variants={textLine}>
                  {/* <span className="hero__eyebrow-dot" style={{ background: slide.accentColor }} />
                  <span>ISO Certified · German Polymer Technology</span> */}
                </motion.div>

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
                  <ScrollLink to="contact" smooth duration={500} offset={-72}
                    className="hero__btn hero__btn--primary"
                    style={{
                      background: `linear-gradient(135deg, ${slide.accentColor}, ${slide.accentColor}bb)`,
                      boxShadow: `0 4px 28px ${slide.accentColor}55`,
                    }}>
                    {slide.cta1}
                    <HiArrowRight size={18} />
                  </ScrollLink>
                  <a href="tel:+917665656574" className="hero__btn hero__btn--call">
                    <HiPhone size={17} />
                    Call Now
                  </a>
                  <ScrollLink to="products" smooth duration={500} offset={-72}
                    className="hero__btn hero__btn--ghost">
                    {slide.cta2}
                  </ScrollLink>
                </motion.div>

                {/* Trust pills */}
                <motion.div className="hero__pills" variants={textLine}>
                  {[
                    { icon: <MdVerified size={14} />,      text: 'ISO Certified' },
                    { icon: <MdLocalShipping size={14} />, text: 'Pan-India Delivery' },
                    { icon: <MdSupportAgent size={14} />,  text: 'Tech Support' },
                    { icon: <MdStar size={14} />,          text: 'German Polymer Tech' },
                  ].map((b, i) => (
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

          {/* RIGHT — Orbital */}
          <div className="hero__visual">
            <motion.div
              className="hero__orbital-wrap"
              initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <OrbitalRing accentColor={slide.accentColor} />
            </motion.div>

            <motion.div
              className="hero__float hero__float--br"
              style={{ borderColor: `${slide.accentColor}40`, background: `${slide.accentColor}14` }}
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              whileHover={{ scale: 1.08 }}
            >
              <span className="hero__float-emoji">🇩🇪</span>
              <div>
                <div className="hero__float-val">German</div>
                <div className="hero__float-lbl">Polymer Tech</div>
              </div>
            </motion.div>

            {/* <motion.div
              className="hero__float hero__float--tl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08 }}
            >
              <span className="hero__float-emoji">🏅</span>
              <div>
                <div className="hero__float-val">ISO</div>
                <div className="hero__float-lbl">Certified</div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>

      {/* ── Slider controls ── */}
      <div className="hero__slider-controls">
        <motion.button className="hero__slider-btn" onClick={prev} aria-label="Previous slide"
          whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }}>
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

        <motion.button className="hero__slider-btn" onClick={next} aria-label="Next slide"
          whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }}>
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
