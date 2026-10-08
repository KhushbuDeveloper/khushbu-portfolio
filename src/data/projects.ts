export interface Project {
  category: string
  title: string
  description: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    category: 'POS / Mobile App',
    title: 'Voice-Enabled POS & Inventory Solution',
    description:
      'A voice-enabled React Native POS app for inventory, stock, billing, token authentication, and Redux-managed workflows.',
    technologies: ['React Native', 'Redux Toolkit', 'REST APIs', 'TypeScript'],
  },
  {
    category: 'AgriTech',
    title: 'KissanAI — Multilingual Agriculture Chatbot',
    description:
      'A multilingual agri chatbot supporting voice and text queries with responsive UI and API-based farming answers.',
    technologies: ['React', 'Redux', 'Bootstrap', 'REST APIs'],
  },
  {
    category: 'E-commerce / Client Project',
    title: 'Silkmala Designer — Silk eCommerce Platform',
    description:
      'A live inquiry-based eCommerce platform for silk and traditional products, with OTP mobile login, product catalog, cart, inquiry checkout and an admin dashboard, built and maintained end to end.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OTP Auth', 'REST APIs'],
  },
  {
    category: 'AI / E-commerce',
    title: 'SmartKart AI — WhatsApp Sales Assistant',
    description:
      'An AI sales assistant on WhatsApp that chats in English, Hindi and Gujarati-English, finds and compares products by budget, and takes orders, with a React admin panel for live chats and leads.',
    technologies: ['Node.js', 'TypeScript', 'Prisma', 'Ollama', 'React', 'WhatsApp API'],
  },
  {
    category: 'AI / JobTech',
    title: 'AI Job Hunter — AI-Powered Job Search Platform',
    description:
      'AI job platform that scans live listings, scores jobs against a resume, and drafts personalized emails with human approval.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'OpenAI API', 'Prisma'],
  },
  {
    category: 'Productivity / Web App',
    title: 'Task Mind — AI Task Management App',
    description:
      'A React task management app for organizing daily work, managing task state with Redux, and getting AI-powered productivity suggestions.',
    technologies: ['React', 'Redux', 'MUI', 'OpenAI API'],
  },
]
