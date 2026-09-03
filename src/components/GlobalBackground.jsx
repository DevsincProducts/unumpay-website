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
  { Icon: CreditCard, top: '22%', left: '18%', size: 30, delay: '0s' },
  { Icon: Wallet, top: '30%', left: '82%', size: 30, delay: '0.7s' },
  { Icon: CreditCard, top: '75%', left: '80%', size: 28, delay: '1.3s' },
  { Icon: Wallet, top: '70%', left: '20%', size: 28, delay: '0.4s' },
]

// A few sparkle points per badge, each twinkling on its own staggered
// timer — purely decorative "glitter" around the icon.
const SPARKLES = [
  { top: '-6px', left: '-6px', size: 7, delay: '0s' },
  { top: '-2px', left: '100%', size: 5, delay: '0.6s' },
  { top: '100%', left: '30%', size: 6, delay: '1.1s' },
]

const FloatingIcons = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
      {FLOATING_ICONS.map(({ Icon, top, left, size, delay }, i) => (
        <div
          key={i}
          className="gtw-float-badge"
          style={{
            position: 'absolute',
            top,
            left,
            transform: 'translate(-50%, -50%)',
            width: 62,
            height: 50,
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(20, 12, 30, 0.6)',
            border: '1px solid rgba(234, 189, 255, 0.22)',
            boxShadow: '0 0 14px rgba(0, 0, 0, 0.3)',
            animation: `floatIcon 4s ease-in-out infinite`,
            animationDelay: delay,
            opacity: 0.75,
            cursor: 'default',
          }}
        >
          <Icon size={size} color="#eabdff" strokeWidth={1.5} />

          {SPARKLES.map((s, si) => (
            <span
              key={si}
              className="gtw-sparkle"
              style={{
                position: 'absolute',
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                animationDelay: s.delay,
              }}
            />
          ))}
        </div>
      ))}
      <style>{`
        @keyframes floatIcon {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }

        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0; transform: scale(0.3) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(90deg); }
        }

        .gtw-float-badge {
          pointer-events: auto;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, opacity 0.3s ease;
        }

        .gtw-float-badge:hover {
          transform: translate(-50%, -50%) scale(1.18) !important;
          opacity: 1 !important;
          border-color: rgba(200, 18, 213, 0.6);
          box-shadow: 0 0 26px rgba(200, 18, 213, 0.45);
        }

        .gtw-sparkle {
          border-radius: 50%;
          background: radial-gradient(circle, #fff 0%, #eabdff 55%, transparent 75%);
          pointer-events: none;
          animation: sparkleTwinkle 2.2s ease-in-out infinite;
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

    // The world map is ~2,900 dots and never moves, so it gets painted once
    // into its own offscreen canvas and blitted as a single image each frame.
    // Re-stroking every dot per frame was costing ~90ms/frame on its own —
    // roughly six times the whole 16.7ms budget for 60fps.
    let mapLayer = document.createElement('canvas')

    const buildMapLayer = () => {
      mapLayer.width = Math.max(1, width * dpr)
      mapLayer.height = Math.max(1, height * dpr)
      const mctx = mapLayer.getContext('2d')
      mctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      mctx.clearRect(0, 0, width, height)
      mctx.fillStyle = 'rgba(234, 189, 255, 0.18)'
      for (const d of buildMapDots(width, height)) {
        mctx.beginPath()
        mctx.arc(d.x, d.y, 1.1, 0, Math.PI * 2)
        mctx.fill()
      }
    }

    // One pre-rendered glow sprite, stamped per particle, instead of building
    // 90 fresh radial gradients on every single frame.
    const GLOW_R = 12
    const glow = document.createElement('canvas')
    glow.width = glow.height = GLOW_R * 2
    {
      const gctx = glow.getContext('2d')
      const g = gctx.createRadialGradient(GLOW_R, GLOW_R, 0, GLOW_R, GLOW_R, GLOW_R)
      g.addColorStop(0, 'rgba(234,189,255,0.9)')
      g.addColorStop(1, 'rgba(234,189,255,0)')
      gctx.fillStyle = g
      gctx.fillRect(0, 0, GLOW_R * 2, GLOW_R * 2)
    }

    let resizeTimer = null
    const resize = () => {
      width = canvas.parentElement.clientWidth
      height = canvas.parentElement.clientHeight
      dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Rebuilding the map is the expensive part — debounce it so dragging a
      // window edge doesn't recompute it on every resize event.
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(buildMapLayer, 120)
    }
    resize()
    // Building the map costs ~85ms. Run it after the first frame rather than
    // during hydration, so arriving on this page (especially via a client-side
    // navigation) never waits on it — the gradient and particles are already
    // on screen, and the dots fade in a frame later.
    requestAnimationFrame(buildMapLayer)

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

      // Static world map dots — one blit of the pre-rendered layer.
      if (mapLayer.width > 1) ctx.drawImage(mapLayer, 0, 0, width, height)

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

      // Glowing moving particles (drawn last, on top). The halo is the
      // pre-rendered sprite scaled to size rather than a fresh gradient.
      ctx.fillStyle = '#eabdff'
      particles.forEach((p) => {
        const r = p.r * 3
        ctx.drawImage(glow, p.x - r, p.y - r, r * 2, r * 2)
      })
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      frameId = requestAnimationFrame(draw)
    }

    // Only animate while the hero is actually on screen. Once it's scrolled
    // past there is nothing to look at, and leaving the loop running keeps
    // burning main-thread time for the rest of the visit.
    let running = false
    const start = () => { if (!running) { running = true; draw() } }
    const stop = () => { running = false; cancelAnimationFrame(frameId) }

    const io = new IntersectionObserver(
      (entries) => { entries[0]?.isIntersecting ? start() : stop() },
      { threshold: 0 }
    )
    io.observe(canvas)
    start()

    return () => {
      stop()
      io.disconnect()
      clearTimeout(resizeTimer)
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