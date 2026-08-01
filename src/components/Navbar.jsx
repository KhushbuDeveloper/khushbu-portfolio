import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/60 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="Khushbu Patel — home">
          <img
            src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
            alt="KP logo"
            className="h-9 w-9"
          />
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted transition hover:text-fg">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="rounded-full border border-line p-2 text-muted transition hover:border-accent hover:text-accent"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full border border-accent/40 px-5 py-2 text-sm font-medium text-accent transition hover:bg-accent hover:text-ink md:block"
          >
            Hire Me
          </a>

          <button className="text-fg md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-line/60 bg-ink px-6 py-6 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="text-sm text-muted hover:text-fg">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
