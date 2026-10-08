export interface Education {
  degree: string
  institution: string
  period: string
}

export interface Certification {
  title: string
  issuer?: string
}

export const education: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Veer Narmad South Gujarat University, Surat',
    period: '2014 – 2017',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Sutex Bank College of Computer Applications & Science, Surat',
    period: '2011 – 2014',
  },
]

export const certifications: Certification[] = [
  { title: 'Claude Code: Software Engineering with Generative AI Agents' },
  { title: 'React/Next.js: Cookie-Based Secure Authentication System' },
  { title: 'React Basics', issuer: 'Meta (Coursera)' },
]
