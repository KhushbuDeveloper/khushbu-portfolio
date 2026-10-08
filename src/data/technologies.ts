import type { IconType } from 'react-icons'
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPostgresql, SiMongodb } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

export interface Technology {
  name: string
  icon: IconType
  // null = inherit the text color, so monochrome logos adapt to the theme
  color: string | null
}

export const technologies: Technology[] = [
  { name: 'React.js', icon: SiReact, color: '#149eca' },
  { name: 'Next.js', icon: SiNextdotjs, color: null },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
  { name: 'React Native', icon: SiReact, color: '#149eca' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'AWS', icon: FaAws, color: null },
]

const byName = (name: string) => technologies.find((t) => t.name === name)!

// Floating badges in the hero visual
export const heroBadges = ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'AWS'].map(byName)
