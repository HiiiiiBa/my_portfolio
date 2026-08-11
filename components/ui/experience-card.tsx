import Image from 'next/image'
import { MapPin, CheckCircle2, ExternalLink, Code2, Wifi } from 'lucide-react'

import { TAG_STYLES, DEFAULT_TAG_STYLE } from '@/lib/tag-styles'

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  isRemote?: boolean
  remoteLabel?: string
  description?: string
  achievements: string[]
  tags?: string[]
  isCurrent?: boolean
  currentLabel?: string
  logo?: string
  logoAlt?: string
  logoClassName?: string
  projectUrl?: string
  projectLinkLabel?: string
  githubUrl?: string
  githubLinkLabel?: string
}

export function ExperienceCard({
  title,
  company,
  period,
  location,
  isRemote,
  remoteLabel = 'À distance',
  description,
  achievements,
  tags,
  isCurrent,
  currentLabel = 'En cours',
  logo,
  logoAlt,
  logoClassName,
  projectUrl,
  projectLinkLabel = 'Voir le projet',
  githubUrl,
  githubLinkLabel = 'GitHub',
}: ExperienceCardProps) {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="timeline-dot absolute left-0 top-8 -translate-x-[calc(50%+1px)] z-10" />

      {/* Card */}
      <div className="ml-8 mb-8 rounded-2xl p-5 sm:p-6 transition-all duration-300 bg-card border border-border hover:border-accent/40 hover:shadow-xl hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
          {/* Logo */}
          {logo && (
            <div className="shrink-0 flex sm:block justify-center">
              <div className="w-full sm:w-[140px] h-[88px] rounded-xl flex items-center justify-center p-3 bg-white border border-slate-200 shadow-sm">
                <Image
                  src={logo}
                  alt={logoAlt ?? company}
                  width={280}
                  height={140}
                  quality={100}
                  unoptimized
                  className={logoClassName ?? 'max-h-[66px] max-w-[116px] w-auto h-auto object-contain'}
                />
              </div>
            </div>
          )}

          <div className="min-w-0 flex-1">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="font-bold text-lg leading-snug text-foreground">
                  {company}
                </h3>
                <p className="text-sm font-semibold mt-0.5 text-accent leading-snug">
                  {title}
                </p>
              </div>
              {isCurrent && (
                <span className="px-3 py-1 text-xs font-bold rounded-full animate-pulse bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  ● {currentLabel}
                </span>
              )}
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium mb-4">
              <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                {period}
              </span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {location}
              </span>
              {isRemote && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/25 font-semibold">
                  <Wifi className="w-3.5 h-3.5 shrink-0" />
                  {remoteLabel}
                </span>
              )}
            </div>

            {description && (
              <p className="text-sm mb-4 text-foreground/80">
                {description}
              </p>
            )}

            {/* Achievements */}
            <ul className="space-y-2">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-cyan-500" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/60">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                      TAG_STYLES[tag] ?? DEFAULT_TAG_STYLE
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            {(projectUrl || githubUrl) && (
              <div className="mt-5 flex flex-wrap gap-2.5">
                {projectUrl && (
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 !py-2 !px-4 !text-xs cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{projectLinkLabel}</span>
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2 !py-2 !px-4 !text-xs cursor-pointer"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{githubLinkLabel}</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
