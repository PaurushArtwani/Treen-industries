import React, { useRef, useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import './OrbitalRing.css'

const W = 520        // SVG size
const CX = W / 2    // center X / Y

/* ── Nodes ── */
const NODES = [
  // inner orbit r=112
  { id: 0, label: 'Tile Adhesives',  sub: '6 variants', icon: '🪣', color: '#3b82f6', orbit: 112, startAngle: 0, highlight: false   },
  { id: 1, label: 'Epoxy Grouts',    sub: '36+ colours', icon: '🧴', color: '#f5a623', orbit: 112, startAngle: 120, highlight: false },
  { id: 2, label: 'Waterproofing',   sub: 'ISO certified',icon: '💧', color: '#22c55e', orbit: 112, startAngle: 240, highlight: false },
  // outer orbit r=198
  { id: 3, label: 'Tile Grout',      sub: 'Polymer based', icon: '🎨', color: '#06b6d4', orbit: 198, startAngle: 18, highlight: false  },
  { id: 4, label: 'Tile Cleaner',    sub: 'Daily maintenance',icon: '🧹', color: '#a855f7', orbit: 198, startAngle: 90, highlight: false  },
  { id: 5, label: 'Tile Spacers',    sub: '2–10 mm sizes', icon: '📐', color: '#f87171', orbit: 198, startAngle: 162, highlight: false },
  { id: 6, label: 'Levelling Sys.',  sub: 'Piler & Jacks', icon: '🔧', color: '#34d399', orbit: 198, startAngle: 234, highlight: false },
  { id: 7, label: 'Export',          sub: 'Worldwide',     icon: '🚢', color: '#f59e0b', orbit: 198, startAngle: 306, highlight: true },
]

const INNER_PERIOD = 20000  // ms
const OUTER_PERIOD = 34000  // ms

/* background stars */
const STARS = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  cx: 20 + Math.random() * 480,
  cy: 20 + Math.random() * 480,
  r:  0.5 + Math.random() * 1.8,
  dur: 1.5 + Math.random() * 3,
  del: Math.random() * 4,
}))

function polarToXY(cx, cy, r, deg) {
  const rad = (deg - 90) * (Math.PI / 180)
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

export default function OrbitalRing({ accentColor = '#f5a623' }) {
  const [active, setActive] = useState(null)
  const [angle, setAngle] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(Date.now())

  const tick = useCallback(() => {
    const elapsed = Date.now() - startRef.current
    setAngle(elapsed)
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [tick])

  const innerRot = (angle / INNER_PERIOD) * 360
  const outerRot = (angle / OUTER_PERIOD) * 360

  const positions = NODES.map(n => {
    const rot = n.orbit === 112 ? innerRot : outerRot
    return { ...n, ...polarToXY(CX, CX, n.orbit, n.startAngle + rot) }
  })

  return (
    <div className="orb-wrap">
      <svg
        className="orb-svg"
        viewBox={`0 0 ${W} ${W}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Golden gradient for export badge */}
          <linearGradient id="exportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          {/* Radial glow filters per color */}
          {NODES.map(n => (
            <filter key={`f${n.id}`} id={`glow${n.id}`} x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          ))}
          {/* Special strong glow for highlight nodes */}
          <filter id="glowHighlight" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="centerGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="10" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* ── Star field ── */}
        {STARS.map(s => (
          <circle key={s.id} cx={s.cx} cy={s.cy} r={s.r}
            fill="white" className="orb-star"
            style={{ animationDuration: `${s.dur}s`, animationDelay: `${s.del}s` }}
          />
        ))}

        {/* ── Outer orbit ring ── */}
        <circle cx={CX} cy={CX} r={198}
          fill="none" stroke="rgba(255,255,255,0.07)"
          strokeWidth="1" strokeDasharray="5 12" />

        {/* ── Inner orbit ring ── */}
        <circle cx={CX} cy={CX} r={112}
          fill="none" stroke="rgba(255,255,255,0.10)"
          strokeWidth="1" strokeDasharray="4 9" />

        {/* ── Spinning accent arcs ── */}
        <circle cx={CX} cy={CX} r={112}
          fill="none" stroke={accentColor}
          strokeWidth="2.5" strokeOpacity="0.65"
          strokeDasharray="72 632" strokeLinecap="round"
          className="orb-arc orb-arc--inner"
          style={{ filter: `drop-shadow(0 0 8px ${accentColor})` }}
        />
        <circle cx={CX} cy={CX} r={198}
          fill="none" stroke="#06b6d4"
          strokeWidth="2" strokeOpacity="0.50"
          strokeDasharray="110 1144" strokeLinecap="round"
          className="orb-arc orb-arc--outer"
          style={{ filter: 'drop-shadow(0 0 7px #06b6d4)' }}
        />

        {/* ── Pulse rings ── */}
        {[0, 1.2, 2.4].map(del => (
          <circle key={del} cx={CX} cy={CX} r={52}
            fill="none" stroke={accentColor}
            strokeWidth="2" strokeOpacity="0"
            className="orb-pulse"
            style={{ animationDelay: `${del}s`,
              filter: `drop-shadow(0 0 6px ${accentColor})` }}
          />
        ))}

        {/* ── Center glow aura ── */}
        <circle cx={CX} cy={CX} r={72}
          fill={`${accentColor}10`}
          stroke={accentColor}
          strokeWidth="1"
          strokeOpacity="0.25"
        />

        {/* ── Connector lines ── */}
        {positions.map(n => (
          <line key={`l${n.id}`}
            x1={CX} y1={CX} x2={n.x} y2={n.y}
            stroke={n.color} strokeWidth="0.9"
            strokeOpacity={active === n.id ? 0.65 : 0.20}
            strokeDasharray="4 7"
            style={{ transition: 'stroke-opacity 0.3s' }}
          />
        ))}

        {/* ── Nodes ── */}
        {positions.map(n => (
          <g key={`n${n.id}`}
            transform={`translate(${n.x},${n.y})`}
            className={`orb-node-group${n.highlight ? ' orb-node-group--highlight' : ''}`}
            onMouseEnter={() => setActive(n.id)}
            onMouseLeave={() => setActive(null)}
            style={{ cursor: 'pointer' }}
            filter={n.highlight ? 'url(#glowHighlight)' : (active === n.id ? `url(#glow${n.id})` : undefined)}
          >
            {n.highlight ? (
              /* ══ EXPORT — premium badge node ══ */
              <>
                {/* outermost spinning dashed ring */}
                <circle r={38}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1.2"
                  strokeOpacity="0.55"
                  strokeDasharray="6 5"
                  strokeLinecap="round"
                  style={{ transformOrigin: '0 0', animation: 'exportRingSpinCW 4s linear infinite' }}
                />
                {/* pulsing halo */}
                <circle r={34}
                  fill="rgba(245,158,11,0.10)"
                  stroke="#f59e0b"
                  strokeWidth="0"
                  style={{ transformOrigin: '0 0' }}
                >
                  <animate attributeName="r" values="30;38;30" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* inner accent ring counter-spin */}
                <circle r={28}
                  fill="none"
                  stroke="#fcd34d"
                  strokeWidth="1.5"
                  strokeOpacity="0.45"
                  strokeDasharray="4 8"
                  strokeLinecap="round"
                  style={{ transformOrigin: '0 0', animation: 'exportRingSpinCCW 6s linear infinite' }}
                />
                {/* main filled disc — golden gradient */}
                <circle r={23}
                  fill="url(#exportGradient)"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeOpacity="0.9"
                />
                {/* inner glass sheen */}
                <ellipse cx="-6" cy="-9" rx="10" ry="7"
                  fill="rgba(255,255,255,0.18)"
                  style={{ pointerEvents: 'none' }}
                />
                {/* icon */}
                <foreignObject x="-13" y="-14" width="26" height="28">
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      fontSize: '17px', width: '26px', height: '28px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.7)) brightness(1.1)',
                    }}
                  >
                    🚢
                  </div>
                </foreignObject>
                {/* "NEW" badge chip */}
                <g transform="translate(16,-18)">
                  <rect x="-10" y="-7" width="20" height="13" rx="6"
                    fill="#ef4444" stroke="rgba(0,0,0,0.3)" strokeWidth="0.8"
                  />
                  <text textAnchor="middle" y="2"
                    fontSize="6.5" fontWeight="900" fill="#fff"
                    fontFamily="Inter, sans-serif" letterSpacing="0.05em"
                  >
                    NEW
                  </text>
                </g>
                {/* label */}
                <text y={42} textAnchor="middle"
                  fontSize="11.5" fontWeight="900"
                  fill="#fcd34d"
                  fontFamily="Inter, sans-serif"
                  letterSpacing="0.04em"
                  style={{ textShadow: '0 0 8px #f59e0b' }}
                >
                  Export
                </text>
              </>
            ) : (
              /* ══ Regular node ══ */
              <>
                {/* outer glow ring */}
                <circle r={30}
                  fill={`${n.color}${active === n.id ? '22' : '0d'}`}
                  stroke={n.color} strokeWidth={active === n.id ? 1.8 : 0.7}
                  strokeOpacity={active === n.id ? 1 : 0.5}
                  style={{ transition: 'all 0.28s' }}
                />
                {/* glass body */}
                <circle r={22}
                  fill={active === n.id ? `${n.color}28` : 'rgba(10,18,45,0.88)'}
                  stroke={n.color}
                  strokeWidth={active === n.id ? 2 : 1}
                  strokeOpacity={active === n.id ? 1 : 0.65}
                  style={{ transition: 'all 0.28s' }}
                />
                {/* glass sheen */}
                <circle r={22} fill="url(#sheen)" fillOpacity="0.08" />
                {/* icon */}
                <foreignObject x="-13" y="-14" width="26" height="28">
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      fontSize: '15px', width: '26px', height: '28px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      lineHeight: 1,
                      filter: active === n.id
                        ? `drop-shadow(0 0 5px ${n.color}) brightness(1.2)`
                        : 'none',
                      transition: 'filter 0.28s',
                    }}
                  >
                    {n.icon}
                  </div>
                </foreignObject>
                {/* label */}
                <text y={40} textAnchor="middle"
                  fontSize="10.5" fontWeight="700"
                  fill={active === n.id ? '#fff' : 'rgba(255,255,255,0.60)'}
                  fontFamily="Inter, sans-serif"
                  style={{ transition: 'fill 0.28s', letterSpacing: '0.01em' }}
                >
                  {n.label}
                </text>
              </>
            )}
          </g>
        ))}
      </svg>

      {/* ── Center TREEN® disk (HTML) ── */}
      <div className="orb-center">
        <div className="orb-center__glow"
          style={{ background: `radial-gradient(circle, ${accentColor}35 0%, transparent 65%)` }}
        />
        <motion.div className="orb-center__disk"
          animate={{ scale: [1, 1.045, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="orb-center__inner">
            <div className="orb-center__logo-mark">T</div>
            <div className="orb-center__logo-text">
              TREEN<span className="orb-center__logo-reg">®</span>
            </div>
            <div className="orb-center__logo-sub">CHEMICALS</div>
          </div>
        </motion.div>

        {/* Active tooltip */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              className="orb-tooltip"
              initial={{ opacity: 0, y: 6, scale: 0.90 }}
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              exit={{    opacity: 0, y: 6,  scale: 0.90 }}
              transition={{ duration: 0.2 }}
              style={{ borderColor: `${NODES[active]?.color}55` }}
            >
              <span style={{ fontSize: '1.1rem' }}>{NODES[active]?.icon}</span>
              <span style={{ color: NODES[active]?.color, fontWeight: 800 }}>
                {NODES[active]?.label}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem' }}>
                {NODES[active]?.sub}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── CTA ── */}
      <ScrollLink to="products" smooth duration={500} offset={-72}
        className="orb-cta"
        style={{ color: accentColor, borderColor: `${accentColor}40` }}
      >
        Explore All Products →
      </ScrollLink>
    </div>
  )
}
