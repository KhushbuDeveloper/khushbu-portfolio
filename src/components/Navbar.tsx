import { AnimatePresence, m } from 'framer-motion'
import { ArrowRight, Download, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navLinks, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { Button } from './Button'
import { ThemeToggle } from './ThemeToggle'

const sectionIds = navLinks.map((link) => link.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: lock page scroll, close on Escape, move focus into the menu
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    menuRef.current?.querySelector<HTMLElement>('a')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        solid
          ? 'border-border bg-[var(--nav-bg)] shadow-[0_8px_30px_-20px_rgba(15,27,61,0.25)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[72px] lg:px-10"
      >
        <a
          href="#home"
          className="shrink-0 text-[18px] font-extrabold tracking-tight text-primary-text"
          onClick={() => setOpen(false)}
        >
          Khushbu Patel
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative block px-3 py-2 text-[13.5px] font-medium transition-colors ${
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <m.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          {site.resume && (
            <div className="hidden lg:block">
              <Button
                href={site.resume}
                download
                variant="outline"
                size="sm"
                icon={<Download size={14} />}
                iconPosition="start"
                className="border-primary/50 text-primary-text"
              >
                Download Resume
              </Button>
            </div>
          )}
          {/* with the resume button present there's only room for this one from xl up */}
          <div className={site.resume ? 'hidden xl:block' : 'hidden lg:block'}>
            <Button href="#contact" variant="cta" size="sm" icon={<ArrowRight size={14} />}>
              Let's Connect
            </Button>
          </div>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
          >
            <ul className="flex flex-col px-5 pt-4 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? 'location' : undefined}
                    className={`flex items-center justify-between border-b border-border py-4 text-lg font-semibold ${
                      active === link.id ? 'text-primary-text' : 'text-foreground'
                    }`}
                  >
                    {link.label}
                    <ArrowRight size={16} aria-hidden="true" className="text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 px-5 py-6 sm:flex-row sm:px-8">
              <Button href="#contact" onClick={() => setOpen(false)} icon={<ArrowRight size={16} />}>
                Let's Connect
              </Button>
              {site.resume && (
                <Button
                  href={site.resume}
                  download
                  variant="outline"
                  icon={<Download size={16} />}
                  iconPosition="start"
                >
                  Download Resume
                </Button>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
