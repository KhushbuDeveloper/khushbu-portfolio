import { useEffect, useState } from 'react'

// Returns the id of the section currently crossing the upper-middle of the viewport.
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    // Sections below the fold are lazy-loaded, so watch for them to appear
    const observed = new Set<Element>()
    const scan = () => {
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && !observed.has(el)) {
          observed.add(el)
          observer.observe(el)
        }
      }
    }
    scan()
    const mutations = new MutationObserver(scan)
    mutations.observe(document.body, { childList: true, subtree: true })

    // At the very bottom the last section may never reach the detection band
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive(ids[ids.length - 1])
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])

  return active
}
