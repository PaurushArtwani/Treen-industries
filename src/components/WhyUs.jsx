import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  HiShieldCheck, HiCube, HiLightningBolt,
  HiSupport, HiCurrencyRupee, HiDocumentText,
} from 'react-icons/hi'
import { Link as ScrollLink } from 'react-scroll'
import SectionBanner from './SectionBanner'
import { fadeUp, staggerContainer, VP } from './AnimationUtils'
import './WhyUs.css'

const REASONS = [
  {
    icon: <HiShieldCheck size={28} />,
    title: 'ISO Certified Manufacturing',
    desc: 'Every TREEN® product is manufactured under ISO-certified processes with German-based polymer technology, delivering consistent batch quality and lasting performance.',
    color: '#3b82f6',
    emoji: '🏅',
  },
  {
    icon: <HiCube size={28} />,
    title: 'Complete Product Range',
    desc: 'From tile adhesives to epoxy grouts, waterproofing systems to tile accessories — one brand, one complete system for every construction application.',
    color: '#f59e0b',
    emoji: '📦',
  },
  {
    icon: <HiCurrencyRupee size={28} />,
    title: 'Competitive Pricing',
    desc: 'Direct manufacturer pricing with no middlemen. Transparent volume-based quotes for bulk orders, contractors and project-specific requirements.',
    color: '#22c55e',
    emoji: '💰',
  },
  {
    icon: <HiLightningBolt size={28} />,
    title: 'Fast Dispatch & Delivery',
    desc: 'Ready stock at our Morbi facility ensures fast dispatch. Reliable pan-India logistics for on-time delivery to your project site.',
    color: '#a855f7',
    emoji: '🚚',
  },
  {
    icon: <HiSupport size={28} />,
    title: 'Technical Application Support',
    desc: 'Our product specialists guide you in choosing the right TREEN® product, provide application guides and TDS/SDS — at no extra charge.',
    color: '#06b6d4',
    emoji: '🛠️',
  },
  {
    icon: <HiDocumentText size={28} />,
    title: 'Full Documentation',
    desc: 'All orders include Technical Data Sheets, Material Safety Data Sheets, GST invoices and product certifications — audit-ready documentation every time.',
    color: '#f87171',
    emoji: '📋',
  },
]

const COMPARISON = [
  { feature: 'ISO-certified manufacturing',  treen: true,  others: false },
  { feature: 'German polymer technology',    treen: true,  others: false },
  { feature: 'Complete product ecosystem',   treen: true,  others: false },
  { feature: 'Pan-India delivery',            treen: true,  others: true  },
  { feature: 'TDS / SDS documentation',      treen: true,  others: false },
  { feature: 'Export capability',            treen: true,  others: false },
  { feature: 'GST invoicing',                treen: true,  others: true  },
]

const BANNER_ACCENT = (
  <div className="whyus-banner-numbers">
    {[
      { val: '6',    lbl: 'Key Advantages' },
      { val: '100+', lbl: 'B2B Clients'    },
    ].map((s, i) => (
      <div key={i} className="whyus-banner-num">
        <span className="whyus-banner-num__val">{s.val}</span>
        <span className="whyus-banner-num__lbl">{s.lbl}</span>
      </div>
    ))}
  </div>
)

export default function WhyUs() {
  const compRef   = useRef(null)
  const compInView = useInView(compRef, { once: true, amount: 0.15 })

  return (
    <section id="why-us" className="whyus-section">

      {/* ── Section Banner ── */}
      <SectionBanner
        tag="Why Choose Us"
        title={<>The TREEN® <em>Advantage</em></>}
        subtitle="ISO-certified manufacturing, German polymer technology, and a complete product ecosystem — here's why builders, contractors and architects across India choose TREEN® Chemicals."
        theme="amber"
        align="left"
        accent={BANNER_ACCENT}
        breadcrumb={[{ label: 'Why Choose Us' }]}
      />

      {/* ── Body ── */}
      <div className="section whyus-body">
        <div className="container">

          {/* ── Cards grid ── */}
          <motion.div
            className="why-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {REASONS.map((r, i) => (
              <motion.div
                key={i}
                className="why-card"
                style={{ '--wc-color': r.color }}
                variants={fadeUp}
                custom={i % 3}
                whileHover={{ y: -8, transition: { duration: 0.22 } }}
              >
                <div className="why-card__strip" />
                <div className="why-card__icon-row">
                  <div className="why-card__icon-box">{r.icon}</div>
                  <span className="why-card__emoji">{r.emoji}</span>
                </div>
                <h3 className="why-card__title">{r.title}</h3>
                <p className="why-card__desc">{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Comparison table ── */}
          <motion.div
            className="why-comparison"
            ref={compRef}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="why-comparison__header">
              <div className="why-comparison__header-text">
                <span className="why-comparison__tag">Side-by-side</span>
                <h3 className="why-comparison__title">How We Compare</h3>
                <p className="why-comparison__sub">
                  A quick look at what makes Treen Industries stand out from the rest
                </p>
              </div>
            </div>
            <div className="why-comparison__table-wrap">
              <table className="why-comparison__table">
                <thead>
                  <tr>
                    <th className="why-comparison__th-feature">Feature</th>
                    <th className="why-comparison__th-treen">
                      <span className="why-comparison__treen-label">⭐ TREEN® Chemicals</span>
                    </th>
                    <th className="why-comparison__th-others">Typical Suppliers</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <motion.tr
                      key={i}
                      className={i % 2 === 0 ? 'why-comparison__row--even' : ''}
                      initial={{ opacity: 0, x: -20 }}
                      animate={compInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <td className="why-comparison__td-feature">{row.feature}</td>
                      <td className="why-comparison__td-treen">
                        <span className={`why-tick why-tick--${row.treen ? 'yes' : 'no'}`}>
                          {row.treen ? '✓' : '✗'}
                        </span>
                      </td>
                      <td>
                        <span className={`why-tick why-tick--${row.others ? 'yes' : 'no'}`}>
                          {row.others ? '✓' : '✗'}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* ── CTA Banner ── */}
          <motion.div
            className="why-cta-banner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="why-cta-banner__bg" />
            <div className="why-cta-banner__glow why-cta-banner__glow--1" />
            <div className="why-cta-banner__glow why-cta-banner__glow--2" />
            <span className="why-cta-banner__shape why-cta-banner__shape--circle" />
            <span className="why-cta-banner__shape why-cta-banner__shape--ring" />
            <span className="why-cta-banner__dots" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
            </span>

            <div className="why-cta-banner__content">
              <div className="why-cta-banner__text">
                <div className="why-cta-banner__eyebrow">🚀 Ready to get started?</div>
                <h3 className="why-cta-banner__title">
                  Experience the TREEN® difference today
                </h3>
                <p className="why-cta-banner__sub">
                  Join builders and contractors across India who trust TREEN® Chemicals for
                  tile adhesives, grouts and waterproofing. ISO-certified · German technology · Reliable delivery.
                </p>
              </div>
              <div className="why-cta-banner__actions">
                <ScrollLink
                  to="contact"
                  smooth
                  duration={500}
                  offset={-72}
                  className="why-cta-banner__btn why-cta-banner__btn--primary"
                >
                  Get Your Free Quote →
                </ScrollLink>
                <a
                  href="tel:+917665656574"
                  className="why-cta-banner__btn why-cta-banner__btn--ghost"
                >
                  📞 Call Us Now
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
