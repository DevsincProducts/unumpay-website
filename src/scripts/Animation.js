export function initFadeIn() {
  const elements = document.querySelectorAll('.js-fade-in')
  if (!elements.length) return

  const showContent = () => {
    elements.forEach((el) => {
      const duration = el.dataset.duration || '0.5'
      const delay = el.dataset.delay || '0'
      el.style.transition = `opacity ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`
      el.classList.add('is-visible')
    })
  }

  if (document.readyState === 'complete') {
    showContent()
  } else {
    window.addEventListener('load', showContent)
  }
}

export function initFadeInScroll() {
  const elements = document.querySelectorAll('.js-fade-scroll')
  if (!elements.length) return

  elements.forEach((el) => {
    const duration = el.dataset.duration || '0.45'
    const delay = el.dataset.delay || '0'
    const once = el.dataset.once !== 'false'
    // Was defaulting to 0.2 (20% of the element visible before it started) —
    // combined with the default IntersectionObserver rootMargin of 0px, that
    // meant every section felt like it arrived late, well after it had
    // already scrolled onto screen. amount 0 + a positive bottom rootMargin
    // starts the reveal just *before* the section reaches the viewport
    // instead, matching the same fix made to the React fade components.
    const amount = parseFloat(el.dataset.amount || '0')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transition = `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`
            el.classList.add('is-visible')
            if (once) observer.unobserve(el)
          } else if (!once) {
            el.classList.remove('is-visible')
          }
        })
      },
      { threshold: amount, rootMargin: '0px 0px 150px 0px' }
    )

    observer.observe(el)
  })
}