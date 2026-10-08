import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  labelledBy: string
  children: ReactNode
  className?: string
}

// Shared section shell: consistent max width, gutters and vertical rhythm
export function Section({ id, labelledBy, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative py-14 sm:py-16 lg:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">{children}</div>
    </section>
  )
}
