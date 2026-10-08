import { technologies } from '../data/technologies'
import { Reveal } from './Reveal'

// Subtle row of core technologies: small logo above a muted label
export function TechStack() {
  return (
    <section aria-label="Core technologies" className="pb-2">
      <Reveal className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <ul className="grid grid-cols-4 gap-x-2 gap-y-7 border-y border-border py-7 sm:grid-cols-8">
          {technologies.map(({ name, icon: Icon, color }) => (
            <li key={name} className="group flex flex-col items-center gap-2.5 text-center">
              <Icon
                size={28}
                aria-hidden="true"
                className="text-foreground opacity-85 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100"
                style={color ? { color } : undefined}
              />
              <span className="text-[12px] font-medium text-muted-foreground">{name}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
