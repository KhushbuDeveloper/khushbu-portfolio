import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'

const ease = [0.22, 1, 0.36, 1]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <SectionHeading eyebrow="Selected Work" title="Featured Projects" />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease }}
            whileHover={{ y: -4 }}
            className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/40"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="mb-4 aspect-video w-full rounded-lg object-cover"
              />
            )}
            <span className="text-xs font-medium uppercase tracking-wide text-accent">
              {project.category}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-fg">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-surface-2 px-3 py-1 text-xs text-fg/80">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
