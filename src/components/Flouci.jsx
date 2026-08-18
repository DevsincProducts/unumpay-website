import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'
import { FadeInUp } from './Animations'

// Replaces {name} and {checkoutDisplayText} placeholders with real values
const resolveText = (text, data) =>
  text
    ?.replaceAll('{name}', data.name)
    ?.replaceAll('{checkoutDisplayText}', data.checkoutDisplayText)

const Flouci = ({ data }) => {
  const [copied, setCopied] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const renderStepContent = (content) => {
    if (!content) return null

    switch (content.type) {
      case 'link':
        return (
          <div className="flg-copy-box">
            <code className="flg-copy-text">{content.value}</code>
            <button type="button" onClick={() => handleCopy(content.value)} className="flg-copy-btn">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        )

      case 'adminPath':
        return (
          <>
            <div className="flg-code-box">
              <code className="flg-code-highlight-inline">
                <span className="flg-code-highlight">{'{shopify-admin-domain}'}</span>
                {content.path}
              </code>
            </div>
            {content.note && (
              <p className="flg-code-note">
                {content.note}
              </p>
            )}
            {content.breadcrumb?.length > 0 && (
              <>
                <div className="flg-or-divider">
                  <div className='flg-divider-1'></div>
                  <span>OR</span>
                  <div className='flg-divider-1'></div>
                </div>
                <div className="flg-breadcrumb-steps">
                  {content.breadcrumb.map((crumb, i) => (
                    <span className='flg-bc-cont' key={crumb}>
                      <span className="flg-breadcrumb-pill">{crumb}</span>
                      {i < content.breadcrumb.length - 1 && (
                        <span className="flg-breadcrumb-arrow">→</span>
                      )}
                    </span>
                  ))}
                </div>
              </>
            )}
            {content.footnote && (
              <p className="flg-step-descp">{content.footnote}</p>
            )}
          </>
        )

      case 'table':
        return (
          <>
            <div className="flg-table">
              <div className="flg-table__header">
                <span>Field</span>
                <span>What to Enter</span>
              </div>
              {content.rows.map((row, index) => (
                <div
                  className={`flg-table__row ${index % 2 === 1 ? 'flg-table__row--alt' : ''}`}
                  key={row.field}
                >
                  <span className="flg-table__field">{row.field}</span>
                  <span className="flg-table__value">
                    {row.isToggle ? (
                      <>
                        <span className="flg-toggle"><span className="flg-toggle__knob"></span></span>
                        <span className="flg-toggle-label">{row.instruction}</span>
                      </>
                    ) : (
                      row.instruction
                    )}
                  </span>
                </div>
              ))}
            </div>
            {content.footnote && (
              <p style={{ fontWeight: 400, fontSize: '15px', color: 'rgb(107, 114, 128)', lineHeight: '1.7' }}>
                {content.footnote}
              </p>
            )}
          </>
        )

      case 'activation':
        return (
          <div className="flg-activation-grid">
            {content.cards.map((card) => (
              <div className="flg-activation-card" key={card.title} style={{ borderTopColor: card.color }}>
                <div className="flg-activation-icon">{card.icon}</div>
                <h4 className="flg-activation-title">{card.title}</h4>
                <p className="flg-activation-desc">{resolveText(card.desc, data)}</p>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  const renderCtaButton = (btn, primaryClass, secondaryClass) => (
    <a
      key={btn.label}
      href={btn.href}
      className={btn.variant === 'secondary' ? secondaryClass : primaryClass}
    >
      {btn.label} <span aria-hidden="true">→</span>
    </a>
  )

  return (
    <div>
      <section className='bg-[#1a0028] relative overflow-hidden' style={{ paddingTop: '110px', paddingBottom: '40px' }}>
        <div className='absolute inset-0 bg-linear-to-br from-[#2D0050]/40 to-transparent pointer-events-none'></div>
        <div className='px-4 sm:px-6 md:px-8 xl:px-0 relative z-10 w-full max-w-225 mx-auto'>
          <a href="/coverage/" className='inline-flex items-center gap-2 text-[#C9B8E8] hover:text-white 
            text-sm mb-6 md:mb-8 transition-colors'>
            <ArrowLeft size={16} /> Back to Coverage
          </a>

          <h1 className='flouci-text'>
            {data.name} Integration Guide
          </h1>
          <p className='flouci-subtext'>
            Set up {data.name} as a payment gateway on your Shopify store through the UnumPay app. Follow these steps to start accepting payments in minutes.
          </p>
        </div>
      </section>

      <section className="pt-8 md:pt-12 pb-14 md:pb-20 bg-white">
        <div className="px-4 sm:px-6 md:px-8 xl:px-0 w-full max-w-225 mx-auto">

          <div className="flg-header-card">
            <div className="flg-header-left">
              <img src={data.logo.src ?? data.logo} alt={data.name} className="flg-header-logo" />
              <div className='flg-line'></div>
              <h1 className="flg-header-title">{data.name}</h1>
              {data.regions?.map((region) => (
                <span className="flg-tag" key={region}>{region}</span>
              ))}
            </div>
            <div className="flg-header-right">
              <span className="flg-tag--time">{data.setupTime}</span>
              <span className="flg-tag">{data.difficulty}</span>
            </div>
          </div>

          <div className="flg-begin-card">
            <div className="flg-begin-text">
              <span className="flg-begin-check">✓</span>
              <span className='flg-begin-title'>Before You Begin</span>
            </div>
            <ul className="flg-begin-list">
              {data.beforeYouBegin.map((item) => (
                <li className="flg-begin-item" key={item}>
                  <span className="flg-begin-item-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-8'>
            {data.steps.map((step, index) => (
              <div className="flg-step" key={step.title}>
                <div className="flg-step-number">{index + 1}</div>
                <div style={{ flex: '1 1 0%' }}>
                  <h3 className="flg-step-title">{resolveText(step.title, data)}</h3>
                  <p className="flg-step-desc">{resolveText(step.description, data)}</p>
                  {renderStepContent(step.content)}
                </div>
              </div>
            ))}
          </div>

          <div className="flg-faq-card">
            <h3 className="flg-faq-heading">Common Questions</h3>
            <div className="flg-faq-list">
              {data.commonQuestions.map((item, index) => {
                const isOpen = openFaqIndex === index
                return (
                  <div className="flg-faq-item" key={item.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex((prev) => (prev === index ? null : index))}
                      className={`flg-faq-question ${isOpen ? 'flg-faq-question--open' : ''}`}
                    >
                      <span>{item.question}</span>
                      <span className="flg-faq-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <p className="flg-faq-answer">{item.answer}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom CTA - "box" layout (dark box inside white section, e.g. Flouci) */}
          {data.bottomCta?.layout === 'box' && (
            <div className='customer-support-section'>
              <p style={{ fontWeight: 600, fontSize: '18px', color: 'white', marginBottom: '8px' }}>
                {data.bottomCta.heading}
              </p>
              <p style={{ fontWeight: 400, fontSize: '15px', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '24px' }}>
                {data.bottomCta.subtitle}
              </p>
              {data.bottomCta.buttons.map((btn) =>
                renderCtaButton(btn, 'cont-supp-btn', 'cont-supp-btn-secondary')
              )}
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA - "full" layout (full-width dark section, e.g. Abhi Pay, Aik by BankIslami) */}
      {data.bottomCta?.layout === 'full' && (
        <section className="pree-section">
          <div className='cta-section__glow' aria-label='hidden'></div>
          <FadeInUp className="pri-content">

            <FadeInUp delay={0.1} className="pri-sec-heading">
              {data.bottomCta.heading}
            </FadeInUp>

            <FadeInUp delay={0.2} className="pri-sec-subtitle">
              {data.bottomCta.subtitle}
            </FadeInUp>

            <FadeInUp delay={0.3} className="cta-actions">
              {data.bottomCta.buttons.map((btn) =>
                renderCtaButton(btn, 'cta-section__btn-primary', 'cta-section__btn-secondary')
              )}
            </FadeInUp>

          </FadeInUp>
        </section>
      )}

    </div>
  )
}

export default Flouci