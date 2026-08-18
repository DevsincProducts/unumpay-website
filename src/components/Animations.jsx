import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const FadeIn = ({
  children,
  duration = 0.9,
  delay = 0,
  yOffset = 24,
  scaleFrom = 0.98,
  className = '',
}) => {
  const [canAnimate, setCanAnimate] = useState(false)

  useEffect(() => {
    const showContent = () => {
      setTimeout(() => setCanAnimate(true), 400)
    }

    if (document.readyState === 'complete') {
      showContent()
    } else {
      window.addEventListener('load', showContent)
      return () => window.removeEventListener('load', showContent)
    }
  }, [])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset, scale: scaleFrom }}
      animate={
        canAnimate
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: yOffset, scale: scaleFrom }
      }
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export const FadeInUp = ({
  children,
  duration = 0.7,
  delay = 0,
  yOffset = 40,
  once = true,
  amount = 0.2,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export const FadeInLeft = ({
  children,
  duration = 0.7,
  delay = 0,
  xOffset = 40,
  once = true,
  amount = 0.2,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export const FadeInRight = ({
  children,
  duration = 0.7,
  delay = 0,
  xOffset = 40,
  once = true,
  amount = 0.2,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}