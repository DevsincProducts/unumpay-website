import { useEffect, useRef } from 'react'
import { CreditCard, Wallet } from 'lucide-react'

const PARTICLE_COUNT = 90
const CONNECT_DISTANCE = 150
const CURSOR_CONNECT_DISTANCE = 220
const CURSOR_REPEL_DISTANCE = 90

// Rough continent bounding boxes (lat, lng ranges) — stylized, not exact geo data
const CONTINENTS = [
  { latMin: 15, latMax: 72, lngMin: -170, lngMax: -50 },  // North America
  { latMin: -56, latMax: 13, lngMin: -82, lngMax: -34 },  // South America
  { latMin: 36, latMax: 71, lngMin: -10, lngMax: 40 },    // Europe
  { latMin: -35, latMax: 37, lngMin: -18, lngMax: 52 },   // Africa
  { latMin: 5, latMax: 77, lngMin: 40, lngMax: 180 },     // Asia
  { latMin: -44, latMax: -10, lngMin: 112, lngMax: 154 }, // Australia
]

function isLand(lat, lng) {
  return CONTINENTS.some(
    (c) => lat >= c.latMin && lat <= c.latMax && lng >= c.lngMin && lng <= c.lngMax
  )
}

// Builds a static flat world-map dot layout (equirectangular projection), scaled to fit width/height
function buildMapDots(width, height) {
  const dots = []
  const step = 2.4
  for (let lat = -75; lat <= 78; lat += step) {
    for (let lng = -180; lng <= 180; lng += step) {
      if (isLand(lat, lng) && Math.random() > 0.4) {
        const jitter = () => (Math.random() - 0.5) * 1
        const jLat = lat + jitter()
        const jLng = lng + jitter()
        const x = ((jLng + 180) / 360) * width
        const y = ((90 - jLat) / 180) * height
        dots.push({ x, y })
      }
    }
  }
  return dots
}

// --- NEW: floating icon badges (positions in %, so they stay responsive) ---
const FLOATING_ICONS = [
  { Icon: CreditCard, top: '22%', left: '18%', size: 22, delay: '0s' },
  { Icon: Wallet, top: '30%', left: '82%', size: 22, delay: '0.7s' },
  { Icon: CreditCard, top: '75%', left: '80%', size: 20, delay: '1.3s' },
  { Icon: Wallet, top: '70%', left: '20%', size: 20, delay: '0.4s' },
]

const FloatingIcons = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
      {FLOATING_ICONS.map(({ Icon, top, left, size, delay }, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top,
            left,
            transform: 'translate(-50%, -50%)',
            width: 40,
            height: 32,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(20, 12, 30, 0.55)',
            border: '1px solid rgba(234, 189, 255, 0.18)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
            animation: `floatIcon 4s ease-in-out infinite`,
            animationDelay: delay,
            opacity: 0.5
          }}
        >
          <Icon size={size} color="#eabdff" strokeWidth={1.5} />
        </div>
      ))}
      <style>{`
        @keyframes floatIcon {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
// --- end new code ---

const GlobalBackground = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = canvas.parentElement.clientWidth
    let height = canvas.parentElement.clientHeight
    let dpr = Math.min(window.devicePixelRatio, 2)
    let mapDots = []

    const resize = () => {
      width = canvas.parentElement.clientWidth
      height = canvas.parentElement.clientHeight
      dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      mapDots = buildMapDots(width, height)
    }
    resize()

    // Particles: baseVX/baseVY never decay, so movement never stops.
    // vx/vy is an extra "kick" from the cursor that fades back to 0.
    const particles = Array.from({ length: PARTICLE_COUNT }, () => {
      const angle = Math.random() * Math.PI * 2
      const speed = 0.15 + Math.random() * 0.25
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        baseVX: Math.cos(angle) * speed,
        baseVY: Math.sin(angle) * speed,
        vx: 0,
        vy: 0,
        r: 1.5 + Math.random() * 2,
      }
    })

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      mouseRef.current.active = true
    }
    const onMouseLeave = () => {
      mouseRef.current.active = false
      mouseRef.current.x = -9999
      mouseRef.current.y = -9999
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)

    let frameId

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Static world map dots (dim, behind everything else)
      ctx.fillStyle = 'rgba(234, 189, 255, 0.18)'
      mapDots.forEach((d) => {
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.1, 0, Math.PI * 2)
        ctx.fill()
      })

      const mouse = mouseRef.current

      // Update particles: constant drift + cursor kick that fades out
      particles.forEach((p) => {
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CURSOR_REPEL_DISTANCE && dist > 0.001) {
            const force = (1 - dist / CURSOR_REPEL_DISTANCE) * 0.8
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        p.x += p.baseVX + p.vx
        p.y += p.baseVY + p.vy

        // only the cursor-kick portion decays, base drift is untouched
        p.vx *= 0.94
        p.vy *= 0.94

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20
      })

      // Particle-to-particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DISTANCE) {
            const opacity = (1 - dist / CONNECT_DISTANCE) * 0.5
            ctx.strokeStyle = `rgba(200, 18, 213, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Cursor-to-particle connections
      if (mouse.active) {
        particles.forEach((p) => {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CURSOR_CONNECT_DISTANCE) {
            const opacity = (1 - dist / CURSOR_CONNECT_DISTANCE) * 0.8
            ctx.strokeStyle = `rgba(234, 189, 255, ${opacity})`
            ctx.lineWidth = 1.2
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        })

        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 18)
        grad.addColorStop(0, 'rgba(255,255,255,0.9)')
        grad.addColorStop(1, 'rgba(200,18,213,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2)
        ctx.fill()
      }

      // Glowing moving particles (drawn last, on top)
      particles.forEach((p) => {
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3)
        grad.addColorStop(0, 'rgba(234,189,255,0.9)')
        grad.addColorStop(1, 'rgba(234,189,255,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = '#eabdff'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      frameId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frameId)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        background:
          'linear-gradient(135deg, rgb(23,23,33) 0%, rgb(42,10,69) 40%, #260c3e 80%, #260c3e 100%)',
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      <FloatingIcons />
    </div>
  )
}

export default GlobalBackground