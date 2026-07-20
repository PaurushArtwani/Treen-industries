import React from 'react'
import { motion } from 'framer-motion'
import './SectionBanner.css'

export default function SectionBanner({
  tag, title, subtitle, theme = 'navy', align = 'center', accent, breadcrumb,
}) {
  return (
    <div className={`sec-banner sec-banner--${theme} sec-banner--${align}`}>
      {/* Decorative layers */}
      <div className="sec-banner__glow sec-banner__glow--1" />
      <div className="sec-banner__glow sec-banner__glow--2" />
      <div className="sec-banner__grid" />
      <div className="sec-banner__diagonal" />
      <span className="sec-banner__shape sec-banner__shape--circle" />
      <span className="sec-banner__shape sec-banner__shape--ring" />
      <span className="sec-banner__shape sec-banner__shape--dot-grid" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
      </span>

      <div className="container sec-banner__inner">
        <div className="sec-banner__text">

          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <motion.nav
              className="sec-banner__breadcrumb"
              aria-label="Breadcrumb"
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="sec-banner__breadcrumb-home">Home</span>
              {breadcrumb.map((crumb, i) => (
                <React.Fragment key={i}>
                  <span className="sec-banner__breadcrumb-sep">/</span>
                  <span className="sec-banner__breadcrumb-item">{crumb.label}</span>
                </React.Fragment>
              ))}
            </motion.nav>
          )}

          {/* Tag — line draws in from left */}
          {tag && (
            <motion.span
              className="sec-banner__tag"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="sec-banner__tag-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left' }}
              />
              {tag}
            </motion.span>
          )}

          {/* Title */}
          <motion.h2
            className="sec-banner__title"
            initial={{ opacity: 0, y: 36, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              className="sec-banner__subtitle"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Optional right accent slot */}
        {accent && (
          <motion.div
            className="sec-banner__accent"
            initial={{ opacity: 0, scale: 0.88, x: 32 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {accent}
          </motion.div>
        )}
      </div>

      {/* Bottom wave divider */}
      <div className="sec-banner__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 68" fill="none" preserveAspectRatio="none">
          <path d="M0,68 C240,20 480,0 720,20 C960,40 1200,68 1440,40 L1440,68 Z" fill="white" />
        </svg>
      </div>
    </div>
  )
}
