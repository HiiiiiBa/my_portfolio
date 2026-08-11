import type { CSSProperties, ReactNode } from 'react'

interface SectionHeaderProps {
  badge?: string
  badgeIcon?: ReactNode
  badgeClassName?: string
  badgeStyle?: CSSProperties
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({
  badge,
  badgeIcon,
  badgeClassName = 'text-accent bg-accent/10 border border-accent/20',
  badgeStyle,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={`section-header${className ? ` ${className}` : ''}`}>
      <div className="section-heading">
        {badge && (
          <span className={`section-badge ${badgeClassName}`} style={badgeStyle}>
            {badgeIcon}
            {badge}
          </span>
        )}
        <h2 className="section-title">{title}</h2>
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
