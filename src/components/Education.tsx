import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <Reveal>
      <SectionHeading label="Education" title="Academic Background" id="education-title" />
      <ol className="relative mt-8 space-y-4" aria-labelledby="education-title">
        {/* connector between the two degree nodes */}
        <span aria-hidden="true" className="absolute top-8 bottom-8 left-[19px] w-px bg-border-strong" />
        {education.map((item) => (
          <li key={item.degree} className="relative flex gap-4">
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary-text shadow-card">
              <GraduationCap size={18} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1 rounded-xl border border-border bg-card px-5 py-4 shadow-card">
              <h3 className="text-[15px] font-semibold text-card-foreground">{item.degree}</h3>
              <p className="mt-1 text-[13.5px] text-muted-foreground">{item.institution}</p>
              <p className="mt-2 text-[12.5px] font-medium text-primary-text">{item.period}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}
