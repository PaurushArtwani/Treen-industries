import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiLocationMarker, HiCalendar, HiTrendingUp } from 'react-icons/hi'
import { MdVerified, MdHandshake } from 'react-icons/md'
import { Link as ScrollLink } from 'react-scroll'
import SectionBanner from './SectionBanner'
import useCounter from './useCounter'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, VP } from './AnimationUtils'
import './About.css'

const MILESTONES = [
  { year: '2020', title: 'TREEN® Founded',          desc: 'Treen Industries established in Morbi (Guj.), India — the ceramic capital — with a vision to deliver world-class construction chemicals.', color: '#3b82f6' },
  { year: '2021', title: 'German Technology Tie-Up', desc: 'Adopted German-based polymer technology for manufacturing ISO-certified tile adhesives, epoxy grouts and waterproofing systems.',          color: '#a855f7' },
  { year: '2023', title: 'Complete Product Range',   desc: 'Launched full portfolio: Tile Adhesives, Epoxy & Tile Grouts, Waterproofing, Construction Chemicals and Tile Accessories.',               color: '#22c55e' },
  { year: '2026', title: 'Growing Nationwide',       desc: 'Serving residential, commercial, industrial and infrastructure projects across India with reliable supply and expert support.',            color: '#f59e0b' },
]

const INFO_CARDS = [
  {
    icon: <HiLocationMarker size={22} />,
    title: 'Morbi, Gujarat',
    desc: "Manufactured at 8-A National Highway, Nr. Timbadi Patiya, Morbi — India's ceramic capital.",
    color: '#f59e0b',
  },
  {
    icon: <HiCalendar size={22} />,
    title: 'German Technology',
    desc: 'ISO-certified manufacturing backed by German-based polymer technology for lasting performance.',
    color: '#3b82f6',
  },
  {
    icon: <HiTrendingUp size={22} />,
    title: 'Complete Solutions',
    desc: 'From adhesive to grout, waterproofing to accessories — one brand, one full system.',
    color: '#22c55e',
  },
  {
    icon: <MdHandshake size={22} />,
    title: 'All Applications',
    desc: 'Residential, commercial, industrial & infrastructure projects of any scale, nationwide.',
    color: '#a855f7',
  },
]

const BANNER_ACCENT = (
  <div className="about-banner-badge">
    <div className="about-banner-badge__ring" />
    <MdVerified size={32} className="about-banner-badge__icon" />
    <div>
      <div className="about-banner-badge__title">GST Registered</div>
      <div className="about-banner-badge__sub">Morbi, Gujarat · Est. 2022</div>
    </div>
  </div>
)

/* ── Animated stat counter ── */
function StatCounter({ numeric, val, suffix = '', active }) {
  const count = useCounter(numeric ? val : 0, 1600, active)
  return (
    <span className="about__stats-val">
      {numeric ? `${count}${suffix}` : val}
    </span>
  )
}

export default function About() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 })

  return (
    <section id="about" className="about-section">

      {/* ── Section Banner ── */}
      <SectionBanner
        tag="About Us"
        title={<>Your One-Stop Shop for <em>Construction Chemistry</em></>}
        subtitle="TREEN Chemicals delivers world-class construction adhesives, epoxy systems, grouts, admixtures, and sealers — manufactured with German-based polymer technology and ISO-certified processes."
        theme="dark"
        align="left"
        accent={BANNER_ACCENT}
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* ── Body ── */}
      <div className="section section--gray about-body">
        <div className="container">
          <div className="about__layout">

            {/* ── Left column ── */}
            <motion.div className="about__left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VP}>

              {/* Quote banner */}
              <motion.div
                className="about__quote-banner"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="about__quote-line" />
                <blockquote className="about__quote-text">
                  "TREEN Chemicals delivers world-class construction adhesives, epoxy systems, grouts,
                  admixtures, and sealers. With German-based polymer technology and ISO-certified
                  manufacturing, every product is engineered for lasting performance."
                </blockquote>
                <div className="about__quote-author">
                  <div className="about__quote-avatar">TI</div>
                  <div>
                    <div className="about__quote-name">TREEN Industries</div>
                    <div className="about__quote-role">8-A National Highway, Nr. Timbadi Patiya, Morbi (Guj.) India</div>
                  </div>
                </div>
              </motion.div>

              <motion.p
                className="section-subtitle"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Treen Industries manufactures and supplies premium construction chemicals under the
                TREEN® brand from Morbi, Gujarat — India's ceramic capital. We specialise in tile
                adhesives, epoxy grout systems, waterproofing solutions and tile accessories,
                serving builders, contractors, architects and project managers across India.
              </motion.p>

              {/* Info grid */}
              <motion.div
                className="about__info-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
              >
                {INFO_CARDS.map((card, i) => (
                  <motion.div
                    key={i}
                    className="about__info-card"
                    style={{ '--card-accent': card.color }}
                    variants={fadeUp}
                    custom={i}
                    whileHover={{ y: -6, transition: { duration: 0.22 } }}
                  >
                    <div className="about__info-icon" style={{ background: `${card.color}18`, color: card.color }}>
                      {card.icon}
                    </div>
                    <div>
                      <div className="about__info-title">{card.title}</div>
                      <div className="about__info-desc">{card.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="about__actions"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <ScrollLink to="contact" smooth duration={500} offset={-72} className="btn btn-primary">
                  Partner With Us
                </ScrollLink>
                <ScrollLink to="why-us" smooth duration={500} offset={-72} className="btn btn-outline-navy">
                  Why Choose Us
                </ScrollLink>
              </motion.div>
            </motion.div>

            {/* ── Right column — timeline ── */}
            <motion.div className="about__right"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={VP}>

              <div className="about__timeline-label">
                <HiTrendingUp size={16} />
                Our Journey
              </div>

              <div className="about__timeline">
                {MILESTONES.map((m, i) => (
                  <motion.div key={i} className="about__milestone"
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ delay: i * 0.13, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="about__milestone-left">
                      <motion.div
                        className="about__milestone-year"
                        style={{ background: m.color, boxShadow: `0 4px 22px ${m.color}55` }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {m.year}
                      </motion.div>
                      {i < MILESTONES.length - 1 && (
                        <motion.div
                          className="about__milestone-line"
                          style={{
                            transformOrigin: 'top',
                            background: `linear-gradient(to bottom, ${m.color}60, ${MILESTONES[i + 1].color}40)`
                          }}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={VP}
                          transition={{ delay: i * 0.13 + 0.3, duration: 0.45 }}
                        />
                      )}
                    </div>
                    <div className="about__milestone-content">
                      <h4 className="about__milestone-title">{m.title}</h4>
                      <p className="about__milestone-desc">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats panel with counters */}
              <div className="about__stats-panel" ref={statsRef}>
                <div className="about__stats-panel-bg" />
                <div className="about__stats-panel-glow" />
                {[
                  { val: 'ISO', numeric: false, lbl: 'Certified Mfg.' },
                  { val: 18,    numeric: true,  suffix: '+', lbl: 'Products' },
                  { val: 36,    numeric: true,  suffix: '+', lbl: 'Grout Colours' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    className="about__stats-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <StatCounter
                      numeric={s.numeric}
                      val={s.val}
                      suffix={s.suffix}
                      active={statsInView}
                    />
                    <span className="about__stats-lbl">{s.lbl}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust badge */}
              <motion.div
                className="about__trust-badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
              >
                <MdVerified size={28} className="about__trust-icon" />
                <div>
                  <div className="about__trust-title">GST Registered Business</div>
                  <div className="about__trust-sub">Morbi, Gujarat, India</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
