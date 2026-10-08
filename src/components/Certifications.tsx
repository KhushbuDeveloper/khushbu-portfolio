import { BadgeCheck } from 'lucide-react'
import { certifications } from '../data/education'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Certifications() {
  return (
    <Reveal delay={0.1}>
      <SectionHeading label="Certifications" title="Certifications" id="certifications-title" />
      <ul className="mt-8 space-y-3" aria-labelledby="certifications-title">
        {certifications.map((cert) => (
          <li
            key={cert.title}
            className="flex items-start gap-3.5 rounded-xl border border-border bg-card px-5 py-4 shadow-card transition-colors hover:border-primary/40"
          >
            <BadgeCheck size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-primary-text" />
            <p className="text-[14px] leading-snug text-card-foreground">
              {cert.title}
              {cert.issuer && <span className="text-muted-foreground"> — {cert.issuer}</span>}
            </p>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
