import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

const systemTheme = (): Theme => (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

function apply(theme: Theme, animate: boolean) {
  const root = document.documentElement
  if (animate) {
    // Crossfade colors only during the switch (see .theme-transition in globals.css)
    root.classList.add('theme-transition')
    window.setTimeout(() => root.classList.remove('theme-transition'), 400)
  }
  root.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#060a18' : '#ffffff')
}

// The initial theme is applied by an inline script in index.html before first paint,
// so this hook only reads it and handles changes.
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme | undefined) ?? readStored() ?? systemTheme(),
  )

  const setTheme = useCallback((next: Theme) => {
    apply(next, true)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage unavailable (private mode) — theme still applies for this visit */
    }
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => setTheme(theme === 'dark' ? 'light' : 'dark'), [theme, setTheme])

  // Follow OS changes until the visitor picks a theme explicitly
  useEffect(() => {
    const query = matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (readStored()) return
      const next = systemTheme()
      apply(next, true)
      setThemeState(next)
    }
    query.addEventListener('change', onChange)

    // Keep every hook instance in sync with the attribute (single source of truth)
    const root = document.documentElement
    const sync = new MutationObserver(() => setThemeState(root.dataset.theme === 'dark' ? 'dark' : 'light'))
    sync.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      query.removeEventListener('change', onChange)
      sync.disconnect()
    }
  }, [])

  return { theme, setTheme, toggleTheme }
}
