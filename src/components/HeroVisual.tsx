import { m } from 'framer-motion'
import { heroBadges } from '../data/technologies'

// Two ribbons of thin bezier curves that fan out, giving the "flowing data" look
function ribbon(count: number, build: (t: number) => string) {
  return Array.from({ length: count }, (_, i) => build(i / (count - 1)))
}

const ribbonA = ribbon(26, (t) => {
  const y0 = 400 - t * 70
  return `M -40 ${y0} C 150 ${170 + t * 150}, 340 ${540 - t * 230}, 700 ${110 + t * 90}`
})

const ribbonB = ribbon(18, (t) => {
  const y0 = 190 + t * 50
  return `M -40 ${y0} C 210 ${430 - t * 130}, 420 ${40 + t * 180}, 700 ${320 + t * 70}`
})

// Badge anchor points (percent of the visual box) and float timing
const badgeLayout = [
  { left: '6%', top: '14%', delay: 0 },
  { left: '58%', top: '6%', delay: 1.2 },
  { left: '72%', top: '36%', delay: 0.6 },
  { left: '2%', top: '58%', delay: 1.8 },
  { left: '40%', top: '74%', delay: 0.9 },
  { left: '76%', top: '80%', delay: 2.2 },
]

const sparks = [
  { cx: 512, cy: 128, r: 3 },
  { cx: 168, cy: 318, r: 2.5 },
  { cx: 404, cy: 262, r: 2 },
  { cx: 590, cy: 360, r: 2.5 },
  { cx: 268, cy: 96, r: 1.8 },
]

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[640px] select-none lg:max-w-[700px]" aria-hidden="true">
      {/* dotted grid, faded toward the edges */}
      <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)] opacity-70" />

      {/* soft glowing orbs */}
      <div className="absolute top-[18%] left-[30%] h-[46%] w-[46%] rounded-full bg-[var(--glow)] blur-[70px]" />
      <div className="absolute right-[4%] bottom-[12%] h-[34%] w-[34%] rounded-full bg-[var(--glow-strong)] blur-[70px]" />

      <m.svg
        viewBox="0 0 640 520"
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="hero-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="35%" stopColor="var(--primary)" />
            <stop offset="75%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="hero-spark">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="40%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g stroke="url(#hero-stroke)" strokeWidth="1">
          {ribbonA.map((d, i) => (
            <path key={`a${i}`} d={d} opacity={0.28 + 0.6 * Math.sin((i / ribbonA.length) * Math.PI)} />
          ))}
        </g>
        <g stroke="url(#hero-stroke)" strokeWidth="0.7">
          {ribbonB.map((d, i) => (
            <path key={`b${i}`} d={d} opacity={0.16 + 0.36 * Math.sin((i / ribbonB.length) * Math.PI)} />
          ))}
        </g>

        {/* a brighter strand that slowly draws itself */}
        <m.path
          d={ribbonA[13]}
          stroke="url(#hero-stroke)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 2.4, ease: 'easeOut', delay: 0.3 }}
        />

        {sparks.map((s, i) => (
          <g key={i}>
            <circle cx={s.cx} cy={s.cy} r={s.r * 4} fill="url(#hero-spark)" opacity="0.5" />
            <circle cx={s.cx} cy={s.cy} r={s.r} fill="var(--primary)" />
          </g>
        ))}
      </m.svg>

      {heroBadges.map((tech, i) => {
        const layout = badgeLayout[i]
        const Icon = tech.icon
        return (
          <m.div
            key={tech.name}
            className="absolute"
            style={{ left: layout.left, top: layout.top }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.5 + i * 0.08 },
              scale: { duration: 0.5, delay: 0.5 + i * 0.08 },
              y: { duration: 5 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: layout.delay },
            }}
          >
            <div className="flex items-center gap-1.5 rounded-full border border-border bg-card/85 py-1.5 pr-3 pl-2 text-[11px] font-semibold whitespace-nowrap text-foreground shadow-card backdrop-blur-md sm:gap-2 sm:text-xs">
              <Icon size={14} style={tech.color ? { color: tech.color } : undefined} />
              {tech.name}
            </div>
          </m.div>
        )
      })}
    </div>
  )
}
