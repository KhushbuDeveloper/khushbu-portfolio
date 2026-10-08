import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'cta' | 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md'

const base =
  'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  // Navy in light mode, electric blue in dark mode — mirrors the reference design
  cta: 'bg-cta text-cta-foreground shadow-[0_8px_24px_-12px_var(--glow)] hover:-translate-y-px hover:shadow-[0_14px_30px_-12px_var(--glow)] hover:brightness-110',
  primary:
    'bg-primary text-primary-foreground shadow-[0_8px_24px_-12px_var(--glow)] hover:-translate-y-px hover:brightness-110',
  outline:
    'border border-border-strong bg-card text-foreground hover:-translate-y-px hover:border-primary/60 hover:text-primary-text',
  ghost: 'text-muted-foreground hover:text-foreground',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-[13px]',
  md: 'h-11 px-5 text-sm',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  // Arrow-style icons slide on hover when placed after the label
  iconPosition?: 'start' | 'end'
  className?: string
  children: ReactNode
}

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = 'cta', size = 'md', icon, iconPosition = 'end', className = '', children, ...rest } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const content = (
    <>
      {icon && iconPosition === 'start' && <span aria-hidden="true">{icon}</span>}
      {children}
      {icon && iconPosition === 'end' && (
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  )

  if (typeof rest.href === 'string') {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
