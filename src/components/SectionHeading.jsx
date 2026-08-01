import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

// Shared eyebrow + title so every section has identical spacing and reveal
export default function SectionHeading({ eyebrow, title, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease }}
      className={center ? 'text-center' : ''}
    >
      <p className="font-mono text-sm uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
    </motion.div>
  )
}
