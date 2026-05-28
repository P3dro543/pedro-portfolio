export const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, threshold: 0.1 },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

export const fadeIn = (delay = 0) => ({
  initial:   { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport:  { once: true },
  transition: { duration: 0.4, ease: 'easeOut', delay },
})

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
}

export const staggerItem = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: 'easeOut' },
}