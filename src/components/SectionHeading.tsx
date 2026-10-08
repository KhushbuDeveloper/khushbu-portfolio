import type { ReactNode } from 'react'

interface SectionHeadingProps {
  label: string
  title: string
  id?: string
  action?: ReactNode
  className?: string
}

export function SectionHeading({ label, title, id, action, className = '' }: SectionHeadingProps) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-4 ${className}`}>
      <div>
        <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-primary-text uppercase">{label}</p>
        <h2 id={id} className="text-[26px] leading-tight font-bold tracking-tight text-foreground sm:text-[30px]">
          {title}
        </h2>
      </div>
      {action}
    </div>
  )
}
