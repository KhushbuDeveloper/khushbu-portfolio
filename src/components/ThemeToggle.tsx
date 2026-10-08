import { m } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

// Switch-style toggle: sun on the left, moon on the right, a knob slides between them
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-[60px] shrink-0 items-center rounded-full border border-border bg-muted p-1 transition-colors hover:border-border-strong"
    >
      <m.span
        aria-hidden="true"
        className="absolute top-1 left-1 h-6 w-6 rounded-full bg-card shadow-[0_1px_4px_rgba(0,0,0,0.18)] dark:bg-primary"
        animate={{ x: isDark ? 26 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 34 }}
      />
      <span aria-hidden="true" className="relative z-10 flex w-full items-center justify-between px-[5px]">
        <Sun size={14} className={isDark ? 'text-muted-foreground' : 'text-amber-500'} />
        <Moon size={14} className={isDark ? 'text-white' : 'text-muted-foreground'} />
      </span>
    </button>
  )
}
