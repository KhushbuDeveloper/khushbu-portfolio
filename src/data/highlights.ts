import { Briefcase, Layers, MonitorSmartphone, Sparkles, type LucideIcon } from 'lucide-react'

export interface Highlight {
  icon: LucideIcon
  title: string
  subtitle: string
}

// "At a glance" cards in the About section
export const highlights: Highlight[] = [
  { icon: Briefcase, title: '8+ Years', subtitle: 'Experience' },
  { icon: Layers, title: 'Full Stack', subtitle: 'Development' },
  { icon: MonitorSmartphone, title: 'Web & Mobile', subtitle: 'Applications' },
  { icon: Sparkles, title: 'AI', subtitle: 'Applications' },
]
