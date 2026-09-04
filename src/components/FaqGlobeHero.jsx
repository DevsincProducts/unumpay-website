import { useEffect, useRef } from 'react'
import { FadeInSection } from './Animations'

// Rough continent bounding boxes — stylized, not exact geo data
const CONTINENTS = [
  { latMin: 15, latMax: 72, lngMin: -170, lngMax: -50 },
  { latMin: -56, latMax: 13, lngMin: -82, lngMax: -34 },
  { latMin: 36, latMax: 71, lngMin: -10, lngMax: 40 },
  { latMin: -35, latMax: 37, lngMin: -18, lngMax: 52 },
  { latMin: 5, latMax: 77, lngMin: 40, lngMax: 180 },
  { latMin: -44, latMax: -10, lngMin: 112, lngMax: 154 },
]

function isLand(lat, lng) {
  return CONTINENTS.some((c) => lat >= c.latMin && lat <= c.latMax && lng >= c.lngMin && lng <= c.lngMax)
}

// Builds a sphere of lat/lng points restricted to land, as 3D unit vectors
function buildGlobePoints() {
  const points = []
  const step = 4
  for (let lat = -80; lat <= 80; lat += step) {
    for (let lng = -180; lng <= 180; lng += step) {
      if (isLand(lat, lng) && Math.random() > 0.35) {
        const latR = (lat * Math.PI) / 180
        const lngR = (lng * Math.PI) / 180
        points.push({
          x: Math.cos(latR) * Math.cos(lngR),
          y: Math.sin(latR),
          z: Math.cos(latR) * Math.sin(lngR),
        })
      }
    }
  }
  return points
}

function useGlobeCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = canvas.parentElement.clientWidth
    let height = canvas.parentElement.clientHeight
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const points = buildGlobePoints()
    let rotation = 0
    let tilt = 0
    const autoSpin = 0.0022
    let velocity = autoSpin
    let dragging = false
    let lastX = 0
    let lastY = 0

    const onPointerDown = (e) => {
      dragging = true
      lastX = e.clientX
      lastY = e.clientY
      canvas.style.cursor = 'grabbing'
      canvas.setPointerCapture(e.pointerId)
    }
    const onPointerMove = (e) => {
      if (!dragging) return
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      rotation += dx * 0.005
      tilt = Math.max(-0.6, Math.min(0.6, tilt + dy * 0.005))
      velocity = dx * 0.0006
      lastX = e.clientX
      lastY = e.clientY
    }
    const onPointerUp = (e) => {
      dragging = false
      canvas.style.cursor = 'grab'
      canvas.releasePointerCapture(e.pointerId)
    }
    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerup', onPointerUp)
    canvas.addEventListener('pointerleave', onPointerUp)

    const hover = { x: -9999, y: -9999, active: false }
    const onHoverMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      hover.x = e.clientX - rect.left
      hover.y = e.clientY - rect.top
      hover.active = true
      if (!dragging) velocity = autoSpin + (e.movementX || 0) * 0.0008
    }
    const onHoverLeave = () => {
      hover.active = false
      hover.x = -9999
      hover.y = -9999
    }
    canvas.addEventListener('mousemove', onHoverMove)
    canvas.addEventListener('mouseleave', onHoverLeave)

    const resize = () => {
      width = canvas.parentElement.clientWidth
      height = canvas.parentElement.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    let frameId
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2
      const radius = Math.min(width, height) * 0.42
      if (!dragging) {
        velocity += (autoSpin - velocity) * 0.02
        rotation += velocity
      }

      const cosT = Math.cos(tilt)
      const sinT = Math.sin(tilt)
      const projected = points
        .map((p) => {
          const cosR = Math.cos(rotation)
          const sinR = Math.sin(rotation)
          const x = p.x * cosR - p.z * sinR
          const z0 = p.x * sinR + p.z * cosR
          const y = p.y * cosT - z0 * sinT
          const z = p.y * sinT + z0 * cosT
          return { x, y, z, screenX: cx + x * radius, screenY: cy - y * radius, depth: z }
        })
        .sort((a, b) => a.depth - b.depth)

      ctx.strokeStyle = 'rgba(234,189,255,0.15)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.stroke()

      for (let i = -2; i <= 2; i++) {
        const ry = (i / 3) * radius
        const rx = Math.sqrt(Math.max(radius * radius - ry * ry, 0))
        ctx.beginPath()
        ctx.ellipse(cx, cy - ry, rx, rx * 0.18, 0, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(234,189,255,0.08)'
        ctx.stroke()
      }

      projected.forEach((p) => {
        const isFront = p.depth > -0.15
        let alpha = isFront ? 0.35 + p.depth * 0.5 : 0.06
        let size = isFront ? 1.6 : 1
        if (hover.active) {
          const dx = p.screenX - hover.x
          const dy = p.screenY - hover.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 60) {
            const b = 1 - dist / 60
            alpha = Math.min(1, alpha + b * 0.8)
            size += b * 2.5
          }
        }
        ctx.fillStyle = `rgba(234,189,255,${Math.max(alpha, 0.05)})`
        ctx.beginPath()
        ctx.arc(p.screenX, p.screenY, size, 0, Math.PI * 2)
        ctx.fill()
      })

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.1)
      grad.addColorStop(0, 'rgba(139,43,226,0.12)')
      grad.addColorStop(1, 'rgba(139,43,226,0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 1.1, 0, Math.PI * 2)
      ctx.fill()

      frameId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerup', onPointerUp)
      canvas.removeEventListener('pointerleave', onPointerUp)
      canvas.removeEventListener('mousemove', onHoverMove)
      canvas.removeEventListener('mouseleave', onHoverLeave)
    }
  }, [canvasRef])
}

function useSparkleCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = canvas.parentElement.clientWidth
    let height = canvas.parentElement.clientHeight
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const sparkles = Array.from({ length: 90 }, () => {
      const angle = Math.random() * Math.PI * 2
      const drift = 0.0003 + Math.random() * 0.0004
      return {
        x: Math.random(),
        y: Math.random(),
        r: 0.5 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        speed: 0.015 + Math.random() * 0.025,
        vx: Math.cos(angle) * drift,
        vy: Math.sin(angle) * drift,
      }
    })
    let t = 0
    const mouse = { x: -9999, y: -9999, active: false }

    const resize = () => {
      width = canvas.parentElement.clientWidth
      height = canvas.parentElement.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }
    const onMouseLeave = () => {
      mouse.active = false
      mouse.x = -9999
      mouse.y = -9999
    }
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    const REACT_DIST = 140

    let frameId
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      t += 1
      sparkles.forEach((s) => {
        const twinkle = (Math.sin(t * s.speed + s.phase) + 1) / 2
        s.x += s.vx
        s.y += s.vy
        if (s.x < -0.02) s.x = 1.02
        if (s.x > 1.02) s.x = -0.02
        if (s.y < -0.02) s.y = 1.02
        if (s.y > 1.02) s.y = -0.02
        const px = s.x * width
        const py = s.y * height

        let boost = 0
        if (mouse.active) {
          const dx = px - mouse.x
          const dy = py - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < REACT_DIST) {
            boost = 1 - dist / REACT_DIST
            const push = boost * 0.6
            s.x += (dx / (dist || 1)) * push * 0.004
            s.y += (dy / (dist || 1)) * push * 0.004
          }
        }

        const alpha = Math.min(1, 0.15 + twinkle * 0.65 + boost * 0.9)
        const sizeMul = 1 + boost * 1.8
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.beginPath()
        ctx.arc(px, py, s.r * sizeMul, 0, Math.PI * 2)
        ctx.fill()

        const glowStrength = Math.max(twinkle > 0.75 ? (twinkle - 0.75) * 1.2 : 0, boost * 0.9)
        if (glowStrength > 0) {
          const grad = ctx.createRadialGradient(px, py, 0, px, py, s.r * (5 + boost * 4))
          grad.addColorStop(0, `rgba(234,189,255,${glowStrength})`)
          grad.addColorStop(1, 'rgba(234,189,255,0)')
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(px, py, s.r * (5 + boost * 4), 0, Math.PI * 2)
          ctx.fill()
        }
      })

      if (mouse.active) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 12)
        grad.addColorStop(0, 'rgba(255,255,255,0.6)')
        grad.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2)
        ctx.fill()
      }

      frameId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [canvasRef])
}

// Dark hero used above every FAQ section: a twinkling starfield behind a
// draggable, auto-rotating 3D globe (land-mass dot sphere) next to the
// heading — same visual language as the site's other canvas backgrounds,
// scoped to one section instead of the whole page.
//
// `compact` shrinks it for every page except the dedicated /faq page: those
// other sections sit mid-page (the page already has its own hero above),
// so this shouldn't take up as much vertical space as a full page-top hero.
const FaqGlobeHero = ({ title, subtitle, eyebrow, compact = false }) => {
  const globeRef = useRef(null)
  const sparkleRef = useRef(null)
  useGlobeCanvas(globeRef)
  useSparkleCanvas(sparkleRef)

  const globeSize = compact ? 140 : 220

  return (
    <FadeInSection


      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgb(23,23,33) 0%, rgb(42,10,69) 40%, #260c3e 80%, #260c3e 100%)',
        padding: compact ? '48px 24px' : '90px 24px 70px',
      }}
    >
      <canvas ref={sparkleRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: compact ? '24px' : '40px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ maxWidth: '560px', flex: '1 1 360px', textAlign: 'left' }}>
          {eyebrow && (
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '0.06em',
                color: 'rgba(234, 189, 255, 0.85)',
                marginBottom: '10px',
                textTransform: 'uppercase',
              }}
            >
              {eyebrow}
            </span>
          )}
          {/* Full-size = this is the page's own hero (the /faq page), so it
              owns the h1. Compact = it's a mid-page FAQ teaser on a page that
              already has its own h1 above it, so it must stay an h2. */}
          {(() => {
            const Heading = compact ? 'h2' : 'h1'
            return (
              <Heading
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: compact ? 'clamp(22px, 3.5vw, 32px)' : 'clamp(28px, 4.5vw, 44px)',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.2,
                  margin: compact ? '0 0 8px' : '0 0 16px',
                }}
              >
                {title}
              </Heading>
            )
          })()}
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: compact ? '15px' : '17px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
            {subtitle}
          </p>
        </div>
        <div style={{ position: 'relative', width: `${globeSize}px`, maxWidth: '100%', height: `${Math.round(globeSize * 0.91)}px`, flex: `0 1 ${globeSize}px` }}>
          <canvas
            ref={globeRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', cursor: 'grab', touchAction: 'none' }}
          />
        </div>
      </div>
    </FadeInSection>
  )
}

export default FaqGlobeHero
