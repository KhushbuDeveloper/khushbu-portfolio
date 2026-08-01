import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'

const ease = [0.22, 1, 0.36, 1]

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-20">
      <SectionHeading eyebrow="Career Timeline" title="8+ Years of Professional Experience" />

      <div className="relative mt-14 border-l border-line pl-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-accent" />
            <p className="font-mono text-sm text-accent">{job.period}</p>
            <h3 className="mt-1 text-xl font-semibold text-fg">{job.role}</h3>
            <p className="text-muted">{job.company}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-accent">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
