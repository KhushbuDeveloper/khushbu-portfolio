import { ArrowRight } from 'lucide-react'
import { highlights } from '../data/highlights'
import { site } from '../data/site'
import { Button } from './Button'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { StatCard } from './StatCard'

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
        <Reveal>
          <SectionHeading label="About Me" title="Senior Full Stack Developer" id="about-title" />
          <div className="mt-5 max-w-[640px] space-y-4 text-[15.5px] leading-relaxed text-muted-foreground">
            <p>
              Senior Full Stack Developer with 8+ years of experience building scalable web, mobile, SaaS, e-commerce,
              and AI-powered applications.
            </p>
            <p>
              I specialize in React.js, Next.js, TypeScript, Node.js, and React Native, with experience in frontend
              architecture, backend development, REST APIs, authentication, databases, testing, CI/CD, and cloud
              deployment.
            </p>
            <p>
              I enjoy solving complex technical problems, building production-ready products, and collaborating with
              distributed teams.
            </p>
          </div>
          <Button href="#contact" className="mt-7" icon={<ArrowRight size={16} />}>
            Let's Connect
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-1" aria-label="At a glance">
            {highlights.map((item) => (
              <li key={item.title}>
                <StatCard {...item} className="h-full" />
              </li>
            ))}
          </ul>

          <p className="mt-5 flex items-center gap-3 border-t border-border pt-5 text-[13.5px] text-muted-foreground">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-success shadow-[0_0_0_4px_rgba(22,163,74,0.15)]" aria-hidden="true" />
            {site.availability}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
