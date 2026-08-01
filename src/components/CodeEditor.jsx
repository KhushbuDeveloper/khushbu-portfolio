import { useEffect, useState } from 'react'

const code = `const developer = {
  name: "Khushbu Patel",
  experience: "8+ Years",
  role: "Senior Full Stack Developer",
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "React Native",
    "MongoDB",
    "PostgreSQL",
    "Firebase"
  ],
  specialization: [
    "Frontend Architecture",
    "REST API Integration",
    "Authentication",
    "Performance Optimization",
    "Testing & CI/CD"
  ],
  passion:"Building scalable products",
  availableForHire: true
};`

function highlight(line) {
  const parts = line.split(/("(?:[^"\\]|\\.)*"|\btrue\b|\bfalse\b)/g)
  return parts.map((part, i) => {
    if (/^".*"$/.test(part)) {
      return (
        <span key={i} className="text-accent-2">
          {part}
        </span>
      )
    }
    if (part === 'true' || part === 'false') {
      return (
        <span key={i} className="text-amber-400">
          {part}
        </span>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export default function CodeEditor() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 2
      setTyped(code.slice(0, i))
      if (i >= code.length) clearInterval(interval)
    }, 12)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-3 font-mono text-xs text-muted">developer.js</span>
      </div>

      <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-fg/90">
        <code>
          {typed.split('\n').map((line, i) => (
            <div key={i}>{line ? highlight(line) : ' '}</div>
          ))}
          <span className="animate-pulse text-accent">▍</span>
        </code>
      </pre>
    </div>
  )
}
