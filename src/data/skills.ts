import type { ComponentType, CSSProperties } from 'react'
import { FaAws } from 'react-icons/fa'
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import {
  Atom,
  Cloud,
  Cookie,
  Database,
  Infinity as InfinityIcon,
  KeyRound,
  Languages,
  Mic,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Webhook,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

// Brand logos (react-icons) and generic glyphs (lucide) share this shape
export type SkillIcon = ComponentType<{ size?: number; className?: string; style?: CSSProperties }>

export interface Skill {
  name: string
  icon: SkillIcon
  // Brand color; omitted = monochrome logo that follows the theme, or the accent color for generic glyphs
  color?: string
  brand?: boolean
}

export interface SkillGroup {
  category: string
  icon: LucideIcon
  skills: Skill[]
}

const brand = (name: string, icon: SkillIcon, color?: string): Skill => ({ name, icon, color, brand: true })
const generic = (name: string, icon: SkillIcon): Skill => ({ name, icon })

// Order matters: on desktop the list fills two columns top-to-bottom,
// so the first four groups form the left column and the last four the right.
export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: Atom,
    skills: [
      brand('React.js', SiReact, '#149eca'),
      brand('Next.js', SiNextdotjs),
      brand('TypeScript', SiTypescript, '#3178c6'),
      brand('JavaScript', SiJavascript, '#e4b800'),
      brand('Redux Toolkit', SiRedux, '#764abc'),
      brand('Context API', SiReact, '#149eca'),
      brand('React Query', SiReactquery, '#ff4154'),
      brand('Tailwind CSS', SiTailwindcss, '#06b6d4'),
      brand('Bootstrap', SiBootstrap, '#7952b3'),
      brand('MUI', SiMui, '#007fff'),
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: [brand('Node.js', SiNodedotjs, '#5fa04e'), brand('Express.js', SiExpress), generic('REST APIs', Webhook)],
  },
  { category: 'Mobile', icon: Smartphone, skills: [brand('React Native', SiReact, '#149eca')] },
  {
    category: 'AI',
    icon: Sparkles,
    skills: [
      generic('AI Integration', Sparkles),
      generic('Speech-to-Text', Mic),
      generic('Multilingual AI Applications', Languages),
    ],
  },
  {
    category: 'Security',
    icon: ShieldCheck,
    skills: [
      brand('JWT', SiJsonwebtokens),
      generic('OAuth 2.0', KeyRound),
      generic('OTP Authentication', Smartphone),
      generic('Cookie-Based Authentication', Cookie),
      generic('RBAC', Users),
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: [
      brand('MongoDB', SiMongodb, '#47a248'),
      brand('PostgreSQL', SiPostgresql, '#4169e1'),
      brand('Firebase', SiFirebase, '#f5a700'),
    ],
  },
  {
    category: 'Tools',
    icon: Wrench,
    skills: [brand('Git', SiGit, '#f05032'), brand('GitHub', SiGithub), brand('Postman', SiPostman, '#ff6c37')],
  },
  {
    category: 'DevOps',
    icon: Cloud,
    skills: [
      brand('AWS', FaAws),
      brand('GitHub Actions', SiGithubactions, '#2088ff'),
      brand('Docker', SiDocker, '#2496ed'),
      brand('Vercel', SiVercel),
      generic('CI/CD', InfinityIcon),
    ],
  },
]
