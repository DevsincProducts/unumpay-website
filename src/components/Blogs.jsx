import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { FadeInSection } from './Animations'

const categories = ['All', 'Shopify Payments', 'Integrations', 'Merchant Guides']

const Blogs = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [subscribeError, setSubscribeError] = useState('')

  // `articles` arrives already sorted newest-first, so the first entry is
  // always the latest post - that's what the hero "featured" slot should
  // show, instead of a fixed article that never changes as new posts are added.
  const featuredArticle = articles[0]
  const restArticles = articles.slice(1)

  const filteredArticles = restArticles.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setSubscribeError('')
    setSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '772938fc-9d4d-4af9-91f7-08e83f67688f',
          email,
          from_name: 'UnumPay Website',
          subject: 'New Newsletter Subscription – UnumPay Blog',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubscribed(true)
      } else {
        setSubscribeError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setSubscribeError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="blog-page">
      <FadeInSection className="blog-hero-section">
        <div className='cta-section__glow' aria-hidden='true'></div>
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
              {/* Decorative only — the input above is what actually performs
                  the search live via onChange. A focusable button here did
                  nothing (pointer-events: none) but still announced itself
                  to screen readers as an interactive "Search" control. */}
              <span className="blog-search-icon" aria-hidden="true">
                <Search size={18} />
              </span>
            </div>
          </div>
        </div>
      </FadeInSection>

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

      {featuredArticle && (activeCategory === 'All' || activeCategory === featuredArticle.category) && searchTerm === '' && (
        <FadeInSection className='blog-featured-section'>
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
        </FadeInSection>
      )}

      <FadeInSection className='blog-articles-section'>
        <p className="blog-all-articles-heading">All Articles</p>

          <div className="blog-articles-grid">
            {filteredArticles.map((article) => (
              <a href={article.slug} className="blog-article-card" key={article.slug}>
                <div className="blog-article-image-wrapper">
                  <img
                    src={article.image.src ?? article.image}
                    alt={article.title}
                    className="blog-article-image"
                    loading="lazy"
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
      </FadeInSection>

      <FadeInSection className='stay-ahead-section'>
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
            <>
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
                <button type='submit' className='stay-ahead-btn' disabled={submitting}>
                  {submitting ? 'Subscribing...' : <>Subscribe <span aria-hidden="true">→</span></>}
                </button>
                </div>
            </form>
            {subscribeError && (
              <p style={{ color: '#ffb4b4', fontSize: '14px', marginTop: '14px' }}>{subscribeError}</p>
            )}
            </>
            )}
        </div>
      </FadeInSection>

    </div>
  )
}

export default Blogs