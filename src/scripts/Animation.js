export function initFadeIn() {
  const elements = document.querySelectorAll('.js-fade-in')
  if (!elements.length) return

  const showContent = () => {
    setTimeout(() => {
      elements.forEach((el) => {
        const duration = el.dataset.duration || '0.9'
        const delay = el.dataset.delay || '0'
        el.style.transition = `opacity ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`
        el.classList.add('is-visible')
      })
    }, 400)
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
    const duration = el.dataset.duration || '0.7'
    const delay = el.dataset.delay || '0'
    const once = el.dataset.once !== 'false'
    const amount = parseFloat(el.dataset.amount || '0.2')

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
      { threshold: amount }
    )

    observer.observe(el)
  })
}