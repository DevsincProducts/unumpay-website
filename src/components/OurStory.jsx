import React from 'react'
import { FadeIn, FadeInLeft, FadeInRight, FadeInUp } from './Animations'

const journeyItems = [
  {
    date: '2016 – 2020',
    title: 'The Foundation (2016–2020)',
    paragraphs: [
      "Our journey began at the forefront, inside a Shopify Plus Partner Agency, where we recognized a critical gap in the payment ecosystem. Pakistani merchants and clients couldn't seem to integrate with the Shopify ecosystem, compelling us to establish our own payment gateway for banks and financial institutions, establishing ourselves as trusted payment fraud local specialists.",
      "During these formative years, we developed deep expertise in payment processing, compliance, and the unique challenges faced by merchants in underserved regions. Our hands-on experience with PSPs laid the foundation for everything that followed.",
    ],
  },
  {
    date: '2021',
    title: 'Innovation Through Insight (2021)',
    paragraphs: [
      "In 2021, we had a breakthrough realization: the fragmented payment landscape necessitated consolidating payment data from separate gateways into a single infrastructure. This wasn't just about opening up new options—it was about empowering merchants with unprecedented visibility and transparency into their payment operations.",
      "We witnessed merchants struggling with overlapping rules across multiple commerce platforms and various industries in Pakistan around our size, recognizing the value of unified payment insights. We had built a name in the market.",
    ],
  },
  {
    date: '2022',
    title: 'Global Expansion (2022)',
    paragraphs: [
      "When Shopify opened its App Store to merchants worldwide in 2022, we saw an opportunity to scale globally. Unfortunately, most Shopify-focused payment platforms that were available fell far beyond what cost-conscious merchants could justify.",
      "UnumPay introduced a game-changing approach: instead of merchants managing relationships with different banks and acquirers, and navigating PSPs through lengthy, complex processes, they could access multiple PSPs through our unified platform. We had created the payment equivalent of a one-stop shop.",
    ],
  },
  {
    date: '2023 – 2024',
    title: 'Explosive Growth (2023–2024)',
    paragraphs: [
      "Our timing was perfect. UnumPay filled a crucial void in global markets, particularly in the MENA region and other territories where Shopify Payments wasn't available. Merchants finally had access to a diverse, solid payment infrastructure, significantly reducing their dependence on any single gateway provider and the complexity of managing multiple vendor relationships.",
      "The numbers tell our success story:",
    ],
    stats: ['500+ Active Merchants', '$300M+ Volume Processed', '40+ Payment Partners', 'Global Reach'],
  },
  {
    date: '2025',
    title: 'A New Chapter (2025)',
    paragraphs: [
      "In 2025, Alchemative was acquired by Devsinc, a leading regional technology company. This strategic partnership has accelerated our growth trajectory, providing expanded resources, technological infrastructure, and strategic market penetration opportunities.",
      "Under Devsinc's technology umbrella, UnumPay continues to innovate while maintaining the entrepreneurial spirit and merchant-first focus that built our reputation.",
    ],
  },
]

const OurStory = () => {
  return (
    <div>

    <section className="pri-section">
        <div className='cta-section__glow' aria-label='hidden'></div>
        <div className="pri-content">
            <span className="pri-badge">✦ OUR STORY</span>

            <h1 className="pri-heading">
            About UnumPay
            </h1>

            <p className="pri-subtitle">
                Pioneering Payment Innovation Since 2016
            </p>

        </div>
    </section>

    <section className='our-story-mission'>
        <div className="our-story-mission-content">
            <h2 className="our-story-mission-badge">OUR MISSION</h2>

            <p className="our-story-mission-subtitle">
                "We exist to eliminate payment friction for merchants worldwide. Every feature we build, every payment provider we onboard, and every optimization we make serves one purpose: helping businesses accept payments seamlessly, securely, and profitably."
            </p>

        </div>
    </section>

    <section className="journey-section">
        <span className="journey-badge">✦ OUR JOURNEY</span>
        <h2 className="journey-heading">Our Journey</h2>

        <div className="journey-timeline">
            <div className="journey-line"></div>

            {journeyItems.map((item, index) => {
            const isLeft = index % 2 === 0
            const Wrapper = isLeft ? FadeInLeft : FadeInRight

            return (
                <div
                    className={`journey-entry ${isLeft ? 'journey-entry--left' : 'journey-entry--right'}`}
                    key={item.date}
                >
                    <Wrapper className="journey-item">
                    <span className="journey-date-badge">{item.date}</span>
                    <h3 className="journey-title">{item.title}</h3>

                    {item.paragraphs.map((p, i) => (
                        <p className="journey-text" key={i}>{p}</p>
                    ))}

                    {item.stats && (
                        <div className="journey-stats">
                        {item.stats.map((stat) => (
                            <span className="journey-stat-pill" key={stat}>{stat}</span>
                        ))}
                        </div>
                    )}
                    </Wrapper>

                    <div className="journey-dot"></div>
                </div>
            )
            })}
        </div>
    </section>

    <section className="why-matters-section">
        <div className="why-matters-container">

            {/* Left column */}
            <FadeInLeft>
                <span className="why-matters-badge">WHY IT MATTERS</span>

                <h2 className="why-matters-heading">Why UnumPay Matters</h2>

                <p className="why-matters-text">
                    In today's global commerce landscape, payment preferences vary dramatically by region, demographic, and culture. One-size-fits-all solutions create friction, and locked-in PSPs payment flexibility that traditional solutions simply can't remediate. UnumPay bridges the gap.
                </p>

                <p className="why-matters-text">
                    We are not just a payment processor—we're payment architects. We turn payment complexity into competitive advantage, helping merchants increase conversion rates, reduce cart abandonment, and expand into new markets with confidence.
                </p>
            </FadeInLeft>

            {/* Right column - cards */}
            <FadeInRight className="why-matters-cards">

                <div className="why-matters-card">
                    <div className="why-matters-card__icon">🌍</div>
                    <div>
                        <h3 className="why-matters-card__title">Global Reach</h3>
                        <p className="why-matters-card__desc">Sell to customers anywhere, accept any currency</p>
                    </div>
                </div>

                <div className="why-matters-card">
                    <div className="why-matters-card__icon">🔌</div>
                    <div>
                        <h3 className="why-matters-card__title">One Integration</h3>
                        <p className="why-matters-card__desc">40+ payment gateways, zero complexity</p>
                    </div>
                </div>

                <div className="why-matters-card">
                    <div className="why-matters-card__icon">📊</div>
                    <div>
                        <h3 className="why-matters-card__title">Full Visibility</h3>
                        <p className="why-matters-card__desc">Unified dashboard across all your gateways</p>
                    </div>
                </div>

            </FadeInRight>

        </div>
    </section>

    <section className="pri-section">
        <div className='cta-section__glow' aria-label='hidden'></div>
        <div className="pri-content">

            <h2 className="pri-sec-heading">
                Looking Forward
            </h2>

            <p className="story-sec-subtitle">
                From our early days of connecting payment gateways to processing over $300 million in merchant transactions, UnumPay's journey reflects our unwavering commitment to solving real merchant problems with innovative technology.
            </p>

            <p className="our-story-sec-subtitle">
                As we continue expanding our PSP network, advancing our platform capabilities, and entering new markets, our core mission remains unchanged: empowering merchants to accept payments anywhere, from anyone, through any method their customers prefer. The future of commerce is global, diverse, and rapidly evolving. UnumPay ensures merchants are ready for whatever comes next.
            </p>

            <div className="cta-actions">
                <a href="https://apps.shopify.com/unum-pay" target='_blank' className="cta-section__btn-primary">
                    Install on Shopify <span aria-hidden="true">→</span>
                </a>
                <a href="/contact" className="cta-section__btn-secondary">
                    Contact Our Team <span aria-hidden="true">→</span>
                </a>
            </div>

        </div>
    </section>
      
    </div>
  )
}

export default OurStory
