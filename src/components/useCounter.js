import { useState, useEffect, useRef } from 'react'

/**
 * useCounter — animates a number from 0 to `end` when `active` becomes true
 * @param {number} end      — target value
 * @param {number} duration — ms (default 1800)
 * @param {boolean} active  — start trigger
 */
export default function useCounter(end, duration = 1800, active = false) {
  const [count, setCount] = useState(0)
  const raf   = useRef(null)
  const start = useRef(null)

  useEffect(() => {
    if (!active) return
    start.current = null

    const step = (ts) => {
      if (!start.current) start.current = ts
      const progress = Math.min((ts - start.current) / duration, 1)
      // ease-out-expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * end))
      if (progress < 1) raf.current = requestAnimationFrame(step)
    }

    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [active, end, duration])

  return count
}
