/**
 * AnimationUtils.js
 * Shared Framer Motion variants + reusable animation config
 * Inspired by the smooth, staggered reveal style of reference site
 */

/* ── Viewport config ── */
export const VP = { once: true, amount: 0.15 }
export const VP_EARLY = { once: true, amount: 0.05 }

/* ── Core fade/slide variants ── */
export const fadeUp = {
  hidden:  { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const fadeDown = {
  hidden:  { opacity: 0, y: -32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const fadeLeft = {
  hidden:  { opacity: 0, x: -56 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const fadeRight = {
  hidden:  { opacity: 0, x: 56 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.82 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

/* ── Shared transition presets ── */
export const SPRING = { type: 'spring', stiffness: 260, damping: 24 }
export const EASE_OUT = { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
export const EASE_IN_OUT = { duration: 0.45, ease: [0.4, 0, 0.2, 1] }
