import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Currency symbols standing in for "every market" — purely decorative, not
// tied to any specific gateway's actual supported currencies.
const RINGS = [
  {
    radius: 120,
    duration: 26,
    direction: 1,
    symbols: ['$', '€', '£'],
  },
  {
    radius: 190,
    duration: 38,
    direction: -1,
    symbols: ['₹', '¥', '₺', '₦'],
  },
  {
    radius: 260,
    duration: 52,
    direction: 1,
    symbols: ['₨', '₴', 'R', '₽', 'zł'],
  },
]

const PING_COUNT = 3

function OrbitRing({ radius, duration, direction, symbols }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: radius * 2,
          height: radius * 2,
          marginLeft: -radius,
          marginTop: -radius,
          borderRadius: '50%',
          border: '1px solid rgba(234, 189, 255, 0.14)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: radius * 2,
          height: radius * 2,
          marginLeft: -radius,
          marginTop: -radius,
        }}
        animate={{ rotate: 360 * direction }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {symbols.map((sym, i) => {
          const angle = (360 / symbols.length) * i
          return (
            <div
              key={sym}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 0,
                height: 0,
                transform: `rotate(${angle}deg) translate(${radius}px)`,
              }}
            >
              {/* Counter-rotates against the ring's spin (and holds still
                  against the parallax tilt via its own independent layer)
                  so each badge and its symbol stay upright and legible. */}
              <motion.div
                animate={{ rotate: -360 * direction }}
                transition={{ duration, repeat: Infinity, ease: 'linear' }}
                whileHover={{ scale: 1.35 }}
                style={{
                  width: 38,
                  height: 38,
                  marginLeft: -19,
                  marginTop: -19,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(139, 43, 226, 0.18)',
                  border: '1px solid rgba(234, 189, 255, 0.4)',
                  color: '#eabdff',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'default',
                  boxShadow: '0 0 16px rgba(200, 18, 213, 0.25)',
                  transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
                }}
              >
                {sym}
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </>
  )
}

// Replaces the flat particle-network canvas with a Framer Motion "gateway
// constellation": a pulsing central hub, three orbit rings of currency
// badges spinning at different speeds/directions, and radar-style pings
// expanding outward — the whole scene tilts toward the cursor for a subtle
// 3D parallax feel.
const GatewayOrbitHero = () => {
  const sceneRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e) => {
    const rect = sceneRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        background:
          'linear-gradient(135deg, rgb(23,23,33) 0%, rgb(42,10,69) 40%, #260c3e 80%, #260c3e 100%)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={sceneRef}
        style={{ position: 'absolute', inset: 0, perspective: 1000 }}
      >
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            transformStyle: 'preserve-3d',
            rotateX,
            rotateY,
          }}
        >
          {/* Radar-style pings, staggered so a new ring launches every ~1.6s */}
          {Array.from({ length: PING_COUNT }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 40,
                height: 40,
                marginLeft: -20,
                marginTop: -20,
                borderRadius: '50%',
                border: '1px solid rgba(200, 18, 213, 0.5)',
              }}
              animate={{ scale: [1, 7], opacity: [0.6, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeOut',
                delay: i * 1.6,
              }}
            />
          ))}

          {/* Central hub */}
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 64,
              height: 64,
              marginLeft: -32,
              marginTop: -32,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgb(200,18,213), rgb(106,3,206))',
              boxShadow: '0 0 40px rgba(200, 18, 213, 0.55)',
            }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {RINGS.map((ring) => (
            <OrbitRing key={ring.radius} {...ring} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default GatewayOrbitHero
