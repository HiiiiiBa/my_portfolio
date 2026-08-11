import Image from 'next/image'
import { GraduationCap } from 'lucide-react'

interface EducationCardProps {
  degree: string
  school: string
  field?: string
  year: string
  logo?: string
  logoAlt?: string
  logoClassName?: string
  logoContainerClassName?: string
}

export function EducationCard({
  degree,
  school,
  field,
  year,
  logo,
  logoAlt,
  logoClassName,
  logoContainerClassName,
}: EducationCardProps) {
  return (
    <div className="group rounded-2xl p-5 transition-all duration-300 flex flex-col gap-4 bg-card border border-amber-500/20 hover:border-amber-500/45 hover:shadow-lg hover:-translate-y-1">
      {/* Logo or icon */}
      <div className="flex items-center justify-between gap-4">
        {logo ? (
          <div
            className={
              logoContainerClassName ??
              'shrink-0 w-[200px] h-[120px] rounded-xl flex items-center justify-center p-1.5 overflow-hidden bg-white border border-slate-200 shadow-sm'
            }
          >
            <Image
              src={logo}
              alt={logoAlt ?? school}
              width={400}
              height={240}
              quality={100}
              unoptimized
              className={logoClassName ?? 'max-h-[100px] max-w-[184px] w-auto h-auto object-contain'}
            />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-amber-500/10 border border-amber-500/25">
            <GraduationCap className="w-7 h-7 text-amber-600 dark:text-amber-400" />
          </div>
        )}

        {/* Year badge */}
        <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400">
          {year}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-bold text-sm leading-snug mb-1.5 text-foreground">
          {degree}
        </h3>
        {field && (
          <p className="text-xs font-semibold mb-1 text-accent">
            {field}
          </p>
        )}
        <p className="text-xs leading-relaxed text-muted-foreground">
          {school}
        </p>
      </div>
    </div>
  )
}
