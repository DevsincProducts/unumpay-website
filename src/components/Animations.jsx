import { motion } from 'framer-motion'

// Reveals once, the first time each element scrolls into view — not on
// every re-entry, so scrolling back up and down doesn't replay it.
const VIEWPORT = { once: true, amount: 0.2 }
const TRANSITION = { duration: 0.6, ease: 'easeOut' }

export const FadeIn = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={VIEWPORT}
      transition={TRANSITION}
    >
      {children}
    </motion.div>
  )
}

export const FadeInUp = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={TRANSITION}
    >
      {children}
    </motion.div>
  )
}

export const FadeInLeft = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT}
      transition={TRANSITION}
    >
      {children}
    </motion.div>
  )
}

export const FadeInRight = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT}
      transition={TRANSITION}
    >
      {children}
    </motion.div>
  )
}

// Whole-section scroll reveal — wraps an actual <section> (not a <div>) so
// semantics/anchors/data-attrs on it keep working.
export const FadeInSection = ({ children, className = '', ...rest }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={TRANSITION}
      {...rest}
    >
      {children}
    </motion.section>
  )
}
