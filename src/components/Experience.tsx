import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { experience } from '../data/experience'
import { site } from '../data/site'
import { Button } from './Button'
import { ExperienceItem } from './ExperienceItem'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title" className="bg-background-soft">
      <Reveal>
        <SectionHeading
          label="Experience"
          title="Professional Experience"
          id="experience-title"
          action={
            <Button href={site.resume} target="_blank" rel="noopener" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
              View Full Resume
            </Button>
          }
        />
      </Reveal>

      <div className="relative mt-9 lg:mt-10">
        {/* the rail grows downward as the section scrolls into view */}
        <m.span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-primary via-border-strong to-border"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <ol className="relative">
          {experience.map((job, i) => (
            <ExperienceItem
              key={`${job.company}-${job.period}`}
              index={i}
              date={job.period}
              role={job.role}
              company={job.company}
              engagement={job.engagement}
              description={job.description}
              technologies={job.technologies}
              current={job.current}
            />
          ))}
        </ol>
      </div>
    </Section>
  )
}
