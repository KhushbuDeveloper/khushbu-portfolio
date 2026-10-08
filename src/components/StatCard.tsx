import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  className?: string
}

// Compact icon + two-line label card (About section)
export function StatCard({ icon: Icon, title, subtitle, className = '' }: StatCardProps) {
  return (
    <div
      className={`group flex items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-3 sm:gap-3 sm:px-4 sm:py-3.5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card-hover ${className}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft sm:h-9 sm:w-9 text-primary-text">
        <Icon size={17} aria-hidden="true" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block text-[13.5px] font-semibold text-card-foreground">{title}</span>
        <span className="block text-[12.5px] text-muted-foreground">{subtitle}</span>
      </span>
    </div>
  )
}
