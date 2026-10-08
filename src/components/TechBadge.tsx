interface TechBadgeProps {
  name: string
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <li className="rounded-md bg-primary-soft px-2.5 py-1 text-[12px] leading-none font-medium text-primary-text">
      {name}
    </li>
  )
}

export function TechBadgeList({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((name) => (
        <TechBadge key={name} name={name} />
      ))}
    </ul>
  )
}
