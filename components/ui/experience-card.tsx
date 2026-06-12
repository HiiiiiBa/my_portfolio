import Image from 'next/image'
import { MapPin, CheckCircle2 } from 'lucide-react'

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  description?: string
  achievements: string[]
  isCurrent?: boolean
  currentLabel?: string
  logo?: string
  logoAlt?: string
  logoClassName?: string
}

export function ExperienceCard({
  title,
  company,
  period,
  location,
  description,
  achievements,
  isCurrent,
  currentLabel = 'En cours',
  logo,
  logoAlt,
  logoClassName,
}: ExperienceCardProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-8 w-3 h-3 bg-accent rounded-full border-2 border-background -translate-x-[calc(50%-1px)] z-10" />

      <div className="ml-8 mb-8 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
          {logo && (
            <div className="shrink-0 flex sm:block justify-center">
              <div className="w-full sm:w-[148px] h-[100px] rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center p-4">
                <Image
                  src={logo}
                  alt={logoAlt ?? company}
                  width={280}
                  height={140}
                  quality={100}
                  unoptimized
                  className={
                    logoClassName ??
                    'max-h-[72px] max-w-[120px] w-auto h-auto object-contain'
                  }
                />
              </div>
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="font-semibold text-lg leading-snug">{company}</h3>
                <p className="text-accent text-sm font-medium mt-0.5">{title}</p>
              </div>
              {isCurrent && (
                <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full shrink-0">
                  {currentLabel}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
              <span>{period}</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {location}
              </span>
            </div>

            {description && (
              <p className="text-foreground/80 text-sm mb-4">{description}</p>
            )}

            <ul className="space-y-2">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
