import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  const animation = {
    initial:   { opacity: 0, y: 24 },
    animate:   isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.5, ease: 'easeOut' },
  }

  return { ref, animation }
}