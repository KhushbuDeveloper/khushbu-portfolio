interface ProjectCardProps {
  category: string
  title: string
  description: string
  technologies: string[]
}

export function ProjectCard({ category, title, description, technologies }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[14px] border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover sm:p-[26px]">
      <p className="text-[11.5px] font-semibold tracking-[0.06em] text-primary-text uppercase">{category}</p>
      <h3 className="mt-3 text-[18px] leading-snug font-bold tracking-tight text-card-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted-foreground">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
        {technologies.map((tech) => (
          <li key={tech} className="rounded-full bg-muted px-3 py-1.5 text-[12px] leading-none font-medium text-foreground">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  )
}
