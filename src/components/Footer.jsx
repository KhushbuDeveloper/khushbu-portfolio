import { socials } from '../data/socials'

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-line px-6 py-20 text-center">
      <h2 className="text-2xl font-bold md:text-3xl">
      Building Scalable Web & Mobile Products
  </h2>

      <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
        Available for Full Stack, React, and React Native Opportunities
      </span>

      <div className="mt-8 flex justify-center gap-5">
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

      <p className="mt-10 text-sm text-muted">
        © {new Date().getFullYear()} Khushbu Patel. All rights reserved.
      </p>
    </footer>
  )
}
