import { m } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { site } from '../data/site'
import { Button } from './Button'
import { HeroVisual } from './HeroVisual'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-24 pb-2 sm:pt-28 sm:pb-6 lg:pt-36 lg:pb-8">
      {/* ambient glow behind the whole hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[620px] w-[720px] rounded-full bg-[var(--glow)] opacity-60 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-4">
          <div className="max-w-[660px]">
            <m.p
              {...rise(0)}
              className="inline-flex rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-primary-text uppercase"
            >
              {site.title}
            </m.p>

            <m.h1
              {...rise(0.08)}
              id="hero-title"
              className="mt-6 text-[clamp(2.15rem,7.4vw,3.6rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-foreground lg:text-[3.15rem] xl:text-[3.6rem]"
            >
              Building Scalable
              <br />
              Web, Mobile &amp;
              <br />
              <span className="text-gradient">AI-Powered</span> Products.
            </m.h1>

            <m.p {...rise(0.16)} className="mt-6 max-w-[520px] text-[15.5px] leading-relaxed text-muted-foreground sm:text-base">
              Senior Full Stack Developer with 8+ years of experience building production-ready web, mobile, SaaS,
              e-commerce and AI-powered applications.
            </m.p>

            <m.div {...rise(0.24)} className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects" icon={<ArrowRight size={16} />}>
                View My Work
              </Button>
              {site.resume && (
                <Button href={site.resume} download variant="outline" icon={<Download size={16} />} iconPosition="start">
                  Download Resume
                </Button>
              )}
            </m.div>

            <m.p {...rise(0.32)} className="mt-6 flex items-center gap-2.5 text-[13px] font-medium text-muted-foreground">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
              </span>
              {site.availability}
            </m.p>
          </div>

          <m.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="lg:-mr-6 xl:-mr-24"
          >
            <HeroVisual />
          </m.div>
        </div>
      </div>
    </section>
  )
}
