import React from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { HiArrowRight } from 'react-icons/hi'
import OrbitalRing from './OrbitalRing'
import { fadeUp, fadeRight, staggerContainer, scaleIn, VP } from './AnimationUtils'
import './ProductEcosystem.css'

const FEATURES = [
  { icon: '🪣', label: 'Tile Adhesives',  sub: 'COPPER · PREMIER · CLASSIC · ULTRA GREY',  color: '#3b82f6' },
  { icon: '🧴', label: 'Epoxy Grouts',    sub: 'TP 100 · TP 200 · 36+ COLOURS',            color: '#f5a623' },
  { icon: '💧', label: 'Waterproofing',   sub: 'ROOFS · BASEMENTS · WET AREAS',             color: '#22c55e' },
  { icon: '🎨', label: 'Tile Grout',      sub: 'POLYMER BASED · GROUT TRE-MIX',             color: '#06b6d4' },
  { icon: '🧱', label: 'Construction',    sub: 'ADMIXTURES · SEALERS · CHEMICALS',          color: '#a855f7' },
  { icon: '🔧', label: 'Accessories',     sub: 'SPACERS · LEVELLING · TROWELS',             color: '#fbbf24' },
]

export default function ProductEcosystem() {
  return (
    <section id="ecosystem" className="eco-section">
      {/* bg */}
      <div className="eco-bg" />
      <div className="eco-glow eco-glow--1" />
      <div className="eco-glow eco-glow--2" />
      <div className="eco-grid" />

      <div className="container eco-inner">

        {/* LEFT — orbital */}
        <motion.div
          className="eco-orbital"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <OrbitalRing accentColor="#f5a623" />
        </motion.div>

        {/* RIGHT — text + feature list */}
        <motion.div
          className="eco-text"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <motion.div
            className="eco-tag"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eco-tag__line" />
            Complete Product Ecosystem
          </motion.div>

          <motion.h2
            className="eco-title"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Everything You Need,<br />
            <em>One Trusted Brand</em>
          </motion.h2>

          <motion.p
            className="eco-sub"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ delay: 0.14, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            From the first tile adhesive application to the final grout finish —
            TREEN® delivers a complete, ISO-certified system powered by German
            polymer technology. Every product engineered to work together.
          </motion.p>

          {/* Feature chips */}
          <motion.div
            className="eco-features"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                className="eco-feature"
                style={{ '--ef-color': f.color }}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
              >
                <span className="eco-feature__icon">{f.icon}</span>
                <div>
                  <div className="eco-feature__label">{f.label}</div>
                  <div className="eco-feature__sub">{f.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="eco-stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {[
              { val: 'ISO',  lbl: 'Certified' },
              { val: '18+',  lbl: 'Products' },
              { val: '36+',  lbl: 'Colours' },
              { val: '🇩🇪',  lbl: 'German Tech' },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="eco-stat"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, scale: 1.06, transition: { duration: 0.2 } }}
              >
                <span className="eco-stat__val">{s.val}</span>
                <span className="eco-stat__lbl">{s.lbl}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="eco-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrollLink to="products" smooth duration={500} offset={-72} className="eco-btn eco-btn--primary">
              Browse All Products <HiArrowRight size={17} />
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500} offset={-72} className="eco-btn eco-btn--ghost">
              Get a Quote
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
