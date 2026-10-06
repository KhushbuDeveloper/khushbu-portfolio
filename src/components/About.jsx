import { motion } from 'framer-motion'
import { Smartphone, Code2, Layers, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'

const ease = [0.22, 1, 0.36, 1]

const focusAreas = [
  {
    icon: Layers,
    title: 'Frontend Architecture',
    text: 'Building scalable, reusable, and responsive interfaces using React.js, Next.js, TypeScript, Redux Toolkit, React Query, Tailwind CSS, and MUI.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    text: 'Developing production-ready web applications with React.js, Node.js, Express.js, REST APIs, MongoDB, PostgreSQL, and Firebase.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    text: 'Creating cross-platform mobile application features using React Native with clean components, smooth UI flows, and API integration.',
  },
  {
    icon: ShieldCheck,
    title: 'Authentication & Performance',
    text: 'Implementing secure authentication flows with JWT, OAuth, OTP, and optimizing applications for speed, reliability, and maintainability.',
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <SectionHeading eyebrow="About Me" title="8+ Years of Turning Complex Ideas into Reliable Software" center={false} />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.1, ease }}
        className="mt-5 max-w-3xl text-muted"
      >
       <p className='mb-4'>Senior Full Stack Developer with over 8 years of experience building scalable web and mobile applications using React.js, Next.js, TypeScript, Node.js, and React Native. I specialize in creating clean frontend architectures, secure REST API integrations, authentication flows, responsive interfaces, and production-ready digital products.</p>
       <p>My experience includes working on e-commerce platforms, POS solutions, enterprise applications, SaaS products, and mobile apps. I enjoy solving complex problems, improving application performance, writing maintainable code, and building software that is reliable, scalable, and easy for teams to maintain.</p> 
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/40"
          >
            <Icon className="text-accent" size={24} />
            <h3 className="mt-4 font-semibold text-fg">{title}</h3>
            <p className="mt-2 text-sm text-muted">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
