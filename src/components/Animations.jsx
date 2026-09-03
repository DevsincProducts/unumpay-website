import { motion } from 'framer-motion'

export const FadeIn = ({ children, className = '' }) => {
  return <motion.div className={className} initial={false} animate={{ opacity: 1, y: 0, scale: 1 }}>{children}</motion.div>
}

export const FadeInUp = ({ children, className = '' }) => {
  return <motion.div className={className} initial={false} animate={{ opacity: 1, y: 0 }}>{children}</motion.div>
}

export const FadeInLeft = ({ children, className = '' }) => {
  return <motion.div className={className} initial={false} animate={{ opacity: 1, x: 0 }}>{children}</motion.div>
}

// Whole-section scroll reveal — wraps an actual <section> (not a <div>) so
// semantics/anchors/data-attrs on it keep working.
export const FadeInSection = ({ children, className = '', ...rest }) => {
  return (
    <motion.section className={className} initial={false} animate={{ opacity: 1, y: 0 }} {...rest}>
      {children}
    </motion.section>
  )
}

export const FadeInRight = ({ children, className = '' }) => {
  return <motion.div className={className} initial={false} animate={{ opacity: 1, x: 0 }}>{children}</motion.div>
}
