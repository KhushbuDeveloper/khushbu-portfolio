import { Github, Linkedin } from 'lucide-react'
import { navLinks, site } from '../data/site'

const socials = [
  { label: 'GitHub', href: site.github, icon: Github },
  { label: 'LinkedIn', href: site.linkedin, icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.3fr_1fr_auto] lg:gap-16 lg:px-10 lg:py-14">
        <div>
          <p className="text-[18px] font-extrabold tracking-tight text-primary-text">{site.name}</p>
          <p className="mt-1 text-[13.5px] text-muted-foreground">{site.title}</p>
          <p className="mt-4 text-[12.5px] text-muted-foreground">{site.stackLine.join(' · ')}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-3 gap-x-6 gap-y-2.5 text-[13.5px]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2 lg:col-span-1">
          <ul className="flex gap-2" aria-label="Social links">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary-text"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12.5px] text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
