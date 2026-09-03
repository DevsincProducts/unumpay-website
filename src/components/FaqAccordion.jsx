import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const DEFAULT_COLORS = {
  border: 'rgb(229, 231, 235)',
  openBorder: '#e0c8f7',
  openBg: '#f3e5ff',
  question: '#1a0028',
  openQuestion: '#6a03ce',
  icon: '#8b2be2',
  answer: '#555',
}

const EASE = [0.4, 0, 0.2, 1]

// Shared hover-to-open FAQ accordion used across every Q&A section on the
// site. Hovering (or focusing) a question opens it immediately, no click
// needed on desktop; click remains as the touch-device fallback since touch
// has no real hover. Height and rotation are animated by Framer Motion
// rather than a CSS grid-rows trick.
const FaqAccordion = ({ items, columns = 2, colors = {}, questionAs = 'span' }) => {
  const c = { ...DEFAULT_COLORS, ...colors }
  const [openIndex, setOpenIndex] = useState(null)
  const QuestionTag = questionAs

  const half = Math.ceil(items.length / 2)
  const columnGroups = columns === 2 ? [items.slice(0, half), items.slice(half)] : [items]

  const openOnly = (index) => setOpenIndex(index)
  const closeIfSame = (index) => setOpenIndex((prev) => (prev === index ? null : prev))
  const handleTouchClick = (index) => {
    if (typeof matchMedia !== 'undefined' && matchMedia('(hover: hover)').matches) return
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: columns === 2 ? 'repeat(auto-fit, minmax(280px, 1fr))' : '1fr',
        columnGap: '56px',
      }}
    >
      {columnGroups.map((group, colIndex) => (
        <div key={colIndex} style={{ borderTop: columns === 2 ? `1px solid ${c.border}` : 'none' }}>
          {group.map((item, i) => {
            const index = colIndex === 0 ? i : half + i
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                onMouseEnter={() => openOnly(index)}
                onMouseLeave={() => closeIfSame(index)}
                style={{
                  borderBottom: `1px solid ${isOpen ? c.openBorder : c.border}`,
                  borderRadius: '12px',
                  padding: '0 16px',
                  margin: '0 -16px',
                  background: isOpen ? c.openBg : 'transparent',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => handleTouchClick(index)}
                  onFocus={() => openOnly(index)}
                  onBlur={() => closeIfSame(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                    padding: '18px 0',
                    font: 'inherit',
                  }}
                >
                  <QuestionTag
                    style={{
                      flex: 1,
                      fontSize: '16px',
                      fontWeight: 600,
                      color: isOpen ? c.openQuestion : c.question,
                      transition: 'color 0.25s ease',
                      margin: 0,
                    }}
                  >
                    {item.question}
                  </QuestionTag>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.icon, flexShrink: 0 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ margin: 0, padding: '2px 8px 20px 0', color: c.answer, lineHeight: 1.7, fontSize: '15px' }}>
                        {item.answer}
                      </p>
                      {item.link && (
                        <a
                          href={item.link.href}
                          style={{
                            display: 'inline-block',
                            margin: '-6px 0 16px',
                            color: c.icon,
                            fontSize: '15px',
                            fontWeight: 500,
                            textDecoration: 'none',
                          }}
                        >
                          {item.link.text}
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default FaqAccordion
