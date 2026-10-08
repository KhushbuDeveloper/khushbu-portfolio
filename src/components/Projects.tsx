import { ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { Button } from './Button'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title" className="bg-background-soft">
      <Reveal>
        <SectionHeading
          label="Projects"
          title="Selected Work"
          id="projects-title"
          action={
            <Button
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              icon={<ArrowRight size={14} />}
            >
              View All Projects
            </Button>
          }
        />
      </Reveal>

      <ul className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title} delay={(i % 3) * 0.07}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
