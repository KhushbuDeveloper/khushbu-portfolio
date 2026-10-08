// Single source of truth for personal details and links used across the site.
export const site = {
  name: 'Khushbu Patel',
  title: 'Senior Full Stack Developer',
  // TODO: replace with the final production domain (also update index.html, robots.txt, sitemap.xml)
  url: 'https://khushbu-portfolio.vercel.app',
  availability: 'Open to Remote Opportunities',
  // Drop the PDF at public/resume.pdf
  resume: '/resume.pdf',
  linkedin: 'https://www.linkedin.com/in/khushbupatel-fullstack',
  github: 'https://github.com/KhushbuDeveloper',
  stackLine: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'React Native'],
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const
