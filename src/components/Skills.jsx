import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import SectionHeading from './SectionHeading'

const ease = [0.22, 1, 0.36, 1]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <SectionHeading eyebrow="Tech Stack" title="8+ Years Building Modern Web Applications" />

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {skills.map(({ name, icon: Icon, color }, i) => (
          <motion.span
            key={name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.03, ease }}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2 text-sm font-medium text-fg/90 transition-colors hover:border-accent/40"
          >
            <Icon size={16} style={{ color }} aria-hidden />
            {name}
          </motion.span>
        ))}
      </div>
    </section>
  )
}
