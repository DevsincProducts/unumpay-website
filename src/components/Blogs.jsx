import React, { useState } from 'react'
import { Search } from 'lucide-react'
import BlogImage from '../assets/images/blog-tunisia.png'
import blog1 from '../assets/images/blog1.png'
import blog2 from '../assets/images/blog2.png'
import blog3 from '../assets/images/blog3.png'
import blog4 from '../assets/images/blog4.png'
import blog5 from '../assets/images/blog5.png'
import blog6 from '../assets/images/blog6.png'
import blog7 from '../assets/images/blog7.png'
import blog8 from '../assets/images/blog8.png'
import blog9 from '../assets/images/blog9.png'
import blog10 from '../assets/images/blog10.png'
import blog11 from '../assets/images/blog11.png'
import blog12 from '../assets/images/blog12.png'
import blog13 from '../assets/images/blog13.png'
import blog14 from '../assets/images/blog14.png'
import blog15 from '../assets/images/blog15.png'
import blog16 from '../assets/images/blog16.png'

const categories = ['All', 'Shopify Payments', 'Integrations', 'Merchant Guides']

const featuredArticle = {
  image: BlogImage,
  category: 'Shopify Payments',
  date: 'Jun 30, 2026',
  readTime: '4 min read',
  title: 'Is Shopify Payments Available in Tunisia?',
  excerpt: 'Shopify Payments is not available in Tunisia. As of 2026 it operates in around 39 countries and Tunisia is not one of them. This guide explains why, what i...',
  slug: '/blog/is-shopify-payments-available-in-tunisia',
}

// const articles = [
//   {
//     image: blog1,
//     category: 'Merchant Guides',
//     date: 'Jun 24, 2026',
//     readTime: '6 min read',
//     title: 'Why Pakistani Shopify Stores Lose Sales at Checkout',
//     excerpt: 'Missing payment options are one of the most common and most fixable causes of checkout drop-off for Pakistani Shopify...',
//     slug: '/blog/why-pakistani-shopify-stores-lose-sales-at-checkout',
//   },
//   {
//     image: blog2,
//     category: 'Shopify Payments',
//     date: 'Jun 9, 2026',
//     readTime: '5 min read',
//     title: 'UnumPay Partners with Aik by BankIslami to Enable Raast QR...',
//     excerpt: "Raast is Pakistan's first instant payment system built by the State Bank of Pakistan. This guide explains what Raast is, how...",
//     slug: '/blog/unumpay-partners-with-aik-bankislami-raast-qr',
//   },
//   {
//     image: blog3,
//     category: 'Shopify Payments',
//     date: 'Jun 1, 2026',
//     readTime: '5 min read',
//     title: 'Stripe Alternatives for Shopify Merchants in Pakistan',
//     excerpt: 'Stripe is not available in Pakistan, and neither is Shopify Payments. This post breaks down why Pakistani merchants...',
//     slug: '/blog/stripe-alternatives-for-shopify-merchants-in-pakistan',
//   },
//   {
//     image: blog4,
//     category: 'Merchant Guides',
//     date: 'May 26, 2026',
//     readTime: '4 min read',
//     title: 'How to Receive Online Payments in Pakistan for Your Shopify...',
//     excerpt: 'Shopify Payments is unavailable in Pakistan. This guide covers how merchants can open international accounts, connect payment...',
//     slug: '/blog/how-to-receive-online-payments-in-pakistan',
//   },
//   {
//     image: blog5,
//     category: 'Merchant Guides',
//     date: 'May 19, 2026',
//     readTime: '5 min read',
//     title: 'Mobile Wallets in Pakistan: What Shopify Merchants Should Kno...',
//     excerpt: 'How JazzCash and Easypaisa work on Shopify for payments, integration, checkout impact, and which mobile...',
//     slug: '/blog/mobile-wallets-in-pakistan-shopify-merchants',
//   },
//   {
//     image: blog6,
//     category: 'Merchant Guides',
//     date: 'May 7, 2026',
//     readTime: '4 min read',
//     title: 'How to Accept Payments in Pakistan Without Shopify...',
//     excerpt: 'Shopify Payments is not available in Pakistan. This post covers step-by-step which payment methods to set up first...',
//     slug: '/blog/how-to-accept-payments-in-pakistan-without-shopify',
//   },
//   {
//     image: blog7,
//     category: 'Merchant Guides',
//     date: 'May 4, 2026',
//     readTime: '4 min read',
//     title: 'How to Choose the Right Shopify Payment Gateway in Pakistan',
//     excerpt: 'Not all Shopify payment gateways work the same in Pakistan. This guide helps you compare your options and choose the...',
//     slug: '/blog/how-to-choose-right-shopify-payment-gateway-pakistan',
//   },
//   {
//     image: blog8,
//     category: 'Merchant Guides',
//     date: 'Apr 27, 2026',
//     readTime: '4 min read',
//     title: 'Local Payment Methods in Pakistan: What Every Shopify...',
//     excerpt: 'A complete guide to local payment methods in Pakistan, mobile wallets, debit cards, bank transfers, and Cash on...',
//     slug: '/blog/local-payment-methods-in-pakistan',
//   },
//   {
//     image: blog9,
//     category: 'Shopify Payments',
//     date: 'Apr 17, 2026',
//     readTime: '4 min read',
//     title: 'Shopify Payments Alternative in Pakistan',
//     excerpt: 'Shopify Payments is not available in Pakistan. This guide explains why, what local merchants actually need, and how...',
//     slug: '/blog/shopify-payments-alternative-in-pakistan',
//   },
//   {
//     image: blog10,
//     category: 'Shopify Payments',
//     date: 'Apr 12, 2026',
//     readTime: '4 min read',
//     title: 'Best Shopify Payment Solution in Pakistan for 2026',
//     excerpt: 'Find the best Shopify payment solution in Pakistan for 2026. Compare local and international options, learn what...',
//     slug: '/blog/best-shopify-payment-solution-pakistan-2026',
//   },
//   {
//     image: blog11,
//     category: 'Merchant Guides',
//     date: 'Dec 16, 2025',
//     readTime: '3 min read',
//     title: 'Why UnumPay is the Smartest Choice for Merchants',
//     excerpt: 'Choosing the best payment mediation platform for Shopify can make or break your business, especially in regions where...',
//     slug: '/blog/why-unumpay-is-smartest-choice-for-merchants',
//   },
//   {
//     image: blog12,
//     category: 'Integrations',
//     date: 'Oct 3, 2025',
//     readTime: '4 min read',
//     title: "Shopify Without Borders: How UnumPay Helps Merchants Go...",
//     excerpt: 'Expanding internationally is a dream for most merchants but it comes with serious challenges. From currency...',
//     slug: '/blog/shopify-without-borders-unumpay',
//   },
//   {
//     image: blog13,
//     category: 'Merchant Guides',
//     date: 'Oct 3, 2025',
//     readTime: '3 min read',
//     title: 'Future of E-Commerce Payments on Shopify: Trends t...',
//     excerpt: 'The world of online payments is evolving faster than ever. By 2026, Shopify merchants won\'t just compete on...',
//     slug: '/blog/future-of-ecommerce-payments-on-shopify-trends',
//   },
//   {
//     image: blog14,
//     category: 'Merchant Guides',
//     date: 'Oct 3, 2025',
//     readTime: '3 min read',
//     title: 'From Checkout to Conversion: Boosting Sales with the Right...',
//     excerpt: "You've done everything right, optimized your Shopify store, invested in ads, and attracted customers. But when they rea...",
//     slug: '/blog/from-checkout-to-conversion-boosting-sales',
//   },
//   {
//     image: blog15,
//     category: 'Integrations',
//     date: 'Oct 3, 2025',
//     readTime: '3 min read',
//     title: 'Why Shopify Merchants in MENA & Asia Need Multiple Payment...',
//     excerpt: 'Running a Shopify store in MENA or Asia means more than just selling great products. It means adapting to how...',
//     slug: '/blog/why-shopify-merchants-mena-asia-need-multiple-payment',
//   },
//   {
//     image: blog16,
//     category: 'Integrations',
//     date: 'Oct 3, 2025',
//     readTime: '2 min read',
//     title: 'A Guide to Shopify Payment Systems: How UnumPay...',
//     excerpt: 'If you are a Shopify merchant in a region where Shopify Payments is not available, you have likely faced a frustrating reality...',
//     slug: '/blog/guide-to-shopify-payment-systems-unumpay',
//   },
// ]

const Blogs = ({ articles}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <div>
      <section className="blog-hero-section">
        <div className='cta-section__glow' aria-label='hidden'></div>
        <div className="blog-hero-content">
          <span className="blog-hero-badge">RESOURCE HUB</span>

          <h1 className="blog-hero-heading">
            Shopify Payment Guides &amp; Insights
          </h1>

          <p className="blog-hero-subtitle">
            Tips, tutorials and expert guides for Shopify merchants navigating payments globally.
          </p>

          <div className="flex justify-center">
            <div className="blog-search-wrapper">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="blog-search-input"
              />
              <button type="button" className="blog-search-icon" aria-label="Search">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-listing-section">
        <div className="blog-listing-container">

          {/* Category */}
          <div className="blog-category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`blog-category-pill ${activeCategory === cat ? 'blog-category-pill--active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {(activeCategory === 'All' || activeCategory === 'Shopify Payments') && searchTerm === '' && (
        <section className='blog-featured-section'>
            <a href={featuredArticle.slug} className="blog-featured-card">
            <div className="blog-featured-image-wrapper">
                <img
                src={featuredArticle.image.src ?? featuredArticle.image}
                alt={featuredArticle.title}
                className="blog-featured-image"
                />
            </div>
            <div className="blog-featured-content">
                <span className="blog-card-category">{featuredArticle.category}</span>
                <p className="blog-card-meta">{featuredArticle.date} · {featuredArticle.readTime}</p>
                <h2 className="blog-featured-title">{featuredArticle.title}</h2>
                <p className="blog-featured-excerpt">{featuredArticle.excerpt}</p>
                <span className="blog-card-link">
                Read Article <span aria-hidden="true">→</span>
                </span>
            </div>
            </a>
        </section>
      )}

      <section className='blog-articles-section'>
        <p className="blog-all-articles-heading">All Articles</p>

          <div className="blog-articles-grid">
            {filteredArticles.map((article) => (
              <a href={article.slug} className="blog-article-card" key={article.slug}>
                <div className="blog-article-image-wrapper">
                  <img
                    src={article.image.src ?? article.image}
                    alt={article.title}
                    className="blog-article-image"
                  />
                </div>
                <div className="blog-article-content">
                  <div className='flex items-center gap-2 flex-wrap mb-2'>
                    <span className="blog-artic-category">{article.category}</span>
                    <p className="blog-artic-meta">{article.date} · {article.readTime}</p>
                  </div>
                  <h3 className="blog-articles-title">{article.title}</h3>
                  <p className="blog-articles-excerpt">{article.excerpt}</p>
                  <span className='flex gap-2' style={{ fontWeight: 600, fontSize: '14px', color: 'rgb(200, 18, 213)'}}>
                    Read Article <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            ))}

            {filteredArticles.length === 0 && (
              <p className="blog-empty-state">No articles found matching your search.</p>
            )}
          </div>
      </section>

      <section className='stay-ahead-section'>
        <div style={{maxWidth: '640px', margin: '0px auto'}}>
            <h2 style={{fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', color: 'white', marginBottom: '12px'}}>
                Stay Ahead of Shopify Payments
            </h2>
            <p style={{fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '28px'}}>
                Get the latest guides, tips, and updates delivered to your inbox.
            </p>
            {subscribed ? (
            <div style={{fontSize: '16px', fontWeight: 600, color : '#fff'}}>
               ✓ You're subscribed! Thanks for joining.
            </div>
            ) : (
            <form className='flex justify-center flex-wrap gap-3' onSubmit={handleSubscribe}>
                <input
                type="email"
                placeholder='Enter your email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='stay-ahead-input'
                />
                <div className="flex gap-2">
                <button type='submit' className='stay-ahead-btn'>Subscribe <span aria-hidden="true">→</span></button>
                </div>
            </form>
            )}
        </div>
      </section>

    </div>
  )
}

export default Blogs