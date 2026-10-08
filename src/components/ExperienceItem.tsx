import { m } from 'framer-motion'
import { TechBadgeList } from './TechBadge'

interface ExperienceItemProps {
  date: string
  role: string
  company: string
  engagement?: string
  description: string
  technologies: string[]
  current?: boolean
  index?: number
}

export function ExperienceItem({
  date,
  role,
  company,
  engagement,
  description,
  technologies,
  current = false,
  index = 0,
}: ExperienceItemProps) {
  return (
    <m.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="relative grid gap-2 pb-10 pl-9 last:pb-0 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pl-12 lg:grid-cols-[220px_1fr]"
    >
      {/* timeline node */}
      <span
        aria-hidden="true"
        className={`absolute top-1 left-0 flex h-[15px] w-[15px] items-center justify-center rounded-full ${
          current
            ? 'bg-primary shadow-[0_0_0_5px_var(--primary-soft),0_0_18px_var(--glow)]'
            : 'border-2 border-primary/45 bg-background'
        }`}
      >
        {current && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
      </span>

      <div className="flex flex-wrap items-center gap-2 sm:block">
        <p className="text-[13px] font-medium text-muted-foreground">{date}</p>
        {current && (
          <span className="inline-flex rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground sm:mt-2.5">
            Current
          </span>
        )}
      </div>

      <div>
        <h3 className="text-[16.5px] font-semibold text-foreground">{role}</h3>
        <p className="mt-1 text-[13.5px] font-medium text-primary-text">
          {company}
          {engagement && (
            <>
              <span className="mx-2 text-border-strong" aria-hidden="true">
                |
              </span>
              <span className="sr-only">, </span>
              {engagement}
            </>
          )}
        </p>
        <p className="mt-2.5 max-w-[620px] text-[14.5px] leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-4">
          <TechBadgeList items={technologies} label={`Technologies used at ${company}`} />
        </div>
      </div>
    </m.li>
  )
}
