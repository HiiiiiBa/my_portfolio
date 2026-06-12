import Image from 'next/image'
import { Award } from 'lucide-react'

interface EducationCardProps {
  degree: string
  school: string
  field: string
  year: string
  description?: string
  logo?: string
  logoAlt?: string
  logoClassName?: string
}

export function EducationCard({
  degree,
  school,
  field,
  year,
  description,
  logo,
  logoAlt,
  logoClassName,
}: EducationCardProps) {
  return (
    <div className="rounded-xl bg-card border border-border hover:border-accent/40 transition-colors overflow-hidden h-full flex flex-col">
      {logo ? (
        <div className="bg-zinc-50 px-5 py-6 flex items-center justify-center min-h-[112px] border-b border-border/40">
          <Image
            src={logo}
            alt={logoAlt ?? school}
            width={320}
            height={140}
            quality={100}
            unoptimized
            className={
              logoClassName ??
              'h-14 w-auto max-w-full object-contain'
            }
          />
        </div>
      ) : null}

      <div className="p-5 flex-1">
        <div className="flex items-start gap-4">
          {!logo && (
            <div className="shrink-0 w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-accent" />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-base leading-snug mb-1.5">{degree}</h3>
            <p className="text-accent text-sm font-medium mb-1">{school}</p>
            <p className="text-muted-foreground text-sm mb-2">{field}</p>
            <span className="inline-block px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded-full">
              {year}
            </span>
            {description && (
              <p className="text-foreground/70 text-sm mt-3">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
