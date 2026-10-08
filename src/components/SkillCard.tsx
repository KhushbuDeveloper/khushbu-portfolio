import type { LucideIcon } from 'lucide-react'
import type { Skill } from '../data/skills'

interface SkillCardProps {
  category: string
  icon: LucideIcon
  skills: Skill[]
}

// One category row in the Technical Expertise panel: label on the left, skill chips on the right
export function SkillCard({ category, icon: Icon, skills }: SkillCardProps) {
  const count = `${skills.length} ${skills.length === 1 ? 'skill' : 'skills'}`

  return (
    <div className="group relative grid h-full items-center gap-3 px-5 py-4 transition-colors duration-300 hover:bg-background-soft sm:grid-cols-[150px_1fr] sm:gap-5 sm:px-6">
      {/* accent bar revealed on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[3px] origin-center scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100"
      />
      <div className="flex items-center gap-3">
        <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-gradient-to-br from-primary to-accent text-white shadow-[0_6px_14px_-8px_var(--primary)]">
          <Icon size={16} aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <h3 className="text-[14.5px] font-bold text-card-foreground">{category}</h3>
          <p className="text-[12px] text-muted-foreground">{count}</p>
        </div>
      </div>

      <ul className="flex flex-wrap gap-[7px]" aria-label={`${category} skills`}>
        {skills.map(({ name, icon: SkillGlyph, color, brand }) => (
          <li
            key={name}
            className="inline-flex h-[30px] items-center gap-[7px] rounded-lg border border-border bg-background-soft px-[11px] text-[12.5px] font-medium text-card-foreground transition-colors group-hover:bg-card"
          >
            <SkillGlyph
              size={14}
              aria-hidden="true"
              className={!color && !brand ? 'text-primary-text' : undefined}
              style={color ? { color } : undefined}
            />
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
