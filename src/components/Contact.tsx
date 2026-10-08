import { Download, Github, Linkedin } from 'lucide-react'
import { site } from '../data/site'
import { Button } from './Button'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Contact() {
  return (
    // Last section: also needs bottom padding so the gap to the footer matches the gap above
    <Section id="contact" labelledBy="contact-title" className="pb-14 sm:pb-16 lg:pb-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-card sm:px-10 sm:py-16">
          {/* soft glow + dotted texture behind the CTA */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-44 left-1/2 h-80 w-[520px] max-w-full -translate-x-1/2 rounded-full bg-[var(--glow)] blur-[80px]"
          />
          <div
            aria-hidden="true"
            className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]"
          />

          <div className="relative">
            <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-primary-text uppercase">Contact</p>
            <h2
              id="contact-title"
              className="text-[28px] leading-tight font-bold tracking-tight text-card-foreground sm:text-[38px]"
            >
              Let's Build Something Great
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted-foreground sm:text-[15.5px]">
              I'm open to remote Full Stack Developer, Senior Frontend Developer, and React/Next.js opportunities.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Linkedin size={16} />}
                iconPosition="start"
              >
                Connect on LinkedIn
              </Button>
              <Button
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                icon={<Github size={16} />}
                iconPosition="start"
              >
                GitHub
              </Button>
              {site.resume && (
                <Button href={site.resume} download variant="outline" icon={<Download size={16} />} iconPosition="start">
                  Download Resume
                </Button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
