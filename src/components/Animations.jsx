import { motion } from 'framer-motion'

// Reveals once, the first time each element scrolls into view — not on
// every re-entry, so scrolling back up and down doesn't replay it.
//
// `amount: 0.2` (needing 20% of the element visible) combined with the
// default viewport margin made sections feel like they arrived late — the
// reader had already scrolled well into them before anything happened.
// `amount: 0` fires the instant even 1px is visible, and the positive
// bottom margin extends the trigger zone below the viewport so the reveal
// actually starts just *before* the section reaches the screen — by the
// time it's in view it's already animating in, not still waiting to start.
const VIEWPORT = { once: true, amount: 0, margin: '0px 0px 150px 0px' }
const TRANSITION = { duration: 0.45, ease: 'easeOut' }

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
