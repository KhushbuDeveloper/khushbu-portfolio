export interface Experience {
  role: string
  company: string
  engagement?: string
  period: string
  current?: boolean
  description: string
  technologies: string[]
}

export const experience: Experience[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'AI-Powered Voice POS Platform',
    engagement: 'Independent Contractor · Part-time',
    period: 'Jun 2026 – Present',
    current: true,
    description: 'Developing an AI-powered multilingual Voice POS platform using React Native and TypeScript.',
    technologies: ['React Native', 'TypeScript', 'AI Integration', 'Redux Toolkit'],
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'Silkmala',
    engagement: 'Full-time',
    period: 'Apr 2025 – Present',
    current: true,
    description:
      'Building a scalable e-commerce platform with cart, admin dashboard, authentication and responsive interfaces.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'Ajeevantach IT Solutions',
    period: 'Aug 2024 – Jan 2026',
    description: 'Led frontend architecture for enterprise web and mobile applications.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'React Native'],
  },
  {
    role: 'Senior Software Developer',
    company: 'Titodi Infotech Pvt Ltd',
    period: 'Feb 2018 – Aug 2024',
    description: 'Developed SaaS, e-commerce, AI-powered and enterprise applications.',
    technologies: ['React.js', 'Node.js', 'AWS', 'AI Integration'],
  },
  {
    role: 'ASP.NET MVC Programmer',
    company: 'Engross Infotech',
    period: 'Jan 2017 – Jul 2017',
    description: 'Developed enterprise applications using ASP.NET MVC and C#.',
    technologies: ['ASP.NET MVC', 'C#'],
  },
]
