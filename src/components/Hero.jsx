import { motion } from 'framer-motion'
import { socials } from '../data/socials'
import CodeEditor from './CodeEditor'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-32 md:grid-cols-2 md:items-center md:pt-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        <p className="font-mono text-accent">Hello, I'm</p>

        <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
          Khushbu Patel
        </h1>

        <p className="mt-2 text-2xl font-bold text-accent md:text-3xl">
          Senior Full Stack Developer
        </p>

        <span className="mt-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
          8+ Years of Experience
        </span>

        <h2 className="mt-5 text-xl font-semibold text-fg/90 md:text-2xl">
          Building Scalable Web & Mobile Applications
        </h2>

        <p className="mt-5 max-w-xl text-muted">
          Senior Full Stack Developer with 8+ years of experience building scalable web and mobile products using React.js, Next.js, TypeScript, Node.js, and React Native. Experienced in developing e-commerce platforms, POS solutions, enterprise applications, API integrations, authentication flows, performance optimization, and production-ready digital products.

        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:opacity-90"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-muted transition hover:text-accent"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
      >
        <CodeEditor />
      </motion.div>
    </section>
  )
}
