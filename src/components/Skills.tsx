import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { SkillCard } from './SkillCard'

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <Reveal>
        <SectionHeading label="Skills" title="Technical Expertise" id="skills-title" />
      </Reveal>

      <Reveal delay={0.08}>
        {/* Wide screens: two columns filled top-to-bottom (4 rows each); mobile: one column */}
        <ul className="mt-9 grid overflow-hidden rounded-2xl border border-border bg-card shadow-card xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-[repeat(4,auto)]">
          {skillGroups.map((group) => (
            <li
              key={group.category}
              className="border-t border-border first:border-t-0 xl:nth-5:border-t-0 xl:nth-[n+5]:border-l"
            >
              <SkillCard category={group.category} icon={group.icon} skills={group.skills} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
