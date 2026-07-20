import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import useCounter from './useCounter'
import './TrustStrip.css'

/* ── Animated stat item ── */
function CountStat({ end, suffix, prefix, label, icon, active }) {
  const count = useCounter(end, 1800, active)
  return (
    <div className="ts-stat">
      <div className="ts-stat__icon">{icon}</div>
      <div className="ts-stat__val">
        {prefix && <span className="ts-stat__prefix">{prefix}</span>}
        <span className="ts-stat__num">{count}</span>
        {suffix && <span className="ts-stat__suffix">{suffix}</span>}
      </div>
      <div className="ts-stat__label">{label}</div>
    </div>
  )
}

/* ── Scrolling marquee ticker ── */
const TICKER_ITEMS = [
  '🏅 ISO Certified Manufacturing',
  '🇩🇪 German Polymer Technology',
  '🪣 Tile Adhesives',
  '🧴 Epoxy Grout Systems',
  '💧 Waterproofing Solutions',
  '🔧 Tile Accessories',
  '🌍 Export Ready',
  '📦 18+ Products',
  '🎨 36+ Grout Colours',
  '🚚 Pan-India Delivery',
  '💬 Technical Support',
  '✅ GST Registered',
]

const STATS = [
  { end: 18,   suffix: '+',  prefix: '',  label: 'Products',         icon: '📦' },
  { end: 36,   suffix: '+',  prefix: '',  label: 'Grout Colours',    icon: '🎨' },
  { end: 100,  suffix: '+',  prefix: '',  label: 'B2B Clients',      icon: '🤝' },
  { end: 5,    suffix: '+',  prefix: '',  label: 'Years Experience',  icon: '📅' },
]

export default function TrustStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="trust-strip">

      {/* ── Scrolling ticker ── */}
      <div className="ts-ticker" aria-hidden="true">
        <div className="ts-ticker__track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ts-ticker__item">
              {item}
              <span className="ts-ticker__sep">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Counter stats ── */}
      <div className="ts-counters" ref={ref}>
        <div className="container ts-counters__inner">
          {STATS.map((s, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <CountStat {...s} active={inView} />
              </motion.div>
              {i < STATS.length - 1 && <div className="ts-sep" />}
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  )
}
