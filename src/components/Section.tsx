import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  labelledBy: string
  children: ReactNode
  className?: string
}

// Shared section shell: consistent max width, gutters and vertical rhythm.
// Only top padding, so the gap between two sections is a single step, not two stacked paddings.
export function Section({ id, labelledBy, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative pt-14 sm:pt-16 lg:pt-20 ${className}`}>
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">{children}</div>
    </section>
  )
}
