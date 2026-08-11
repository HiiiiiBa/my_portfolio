'use client'

import { Code2, Settings, Users } from 'lucide-react'
import { useApp } from '@/lib/context/AppContext'
import { useEffect, useRef } from 'react'
import { SectionHeader } from './ui/section-header'

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          obs.unobserve(el)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

const HIGHLIGHT_ICONS = [
  { icon: Code2, key: 'fullstack' },
  { icon: Settings, key: 'devops' },
  { icon: Users, key: 'collaboration' },
]

export function About() {
  const { t } = useApp()
  const sectionRef = useScrollReveal()

  const highlights = [
    {
      icon: Code2,
      label: t('about.fullstack.label'),
      description: t('about.fullstack.description'),
    },
    {
      icon: Settings,
      label: t('about.devops.label'),
      description: t('about.devops.description'),
    },
    {
      icon: Users,
      label: t('about.collaboration.label'),
      description: t('about.collaboration.description'),
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-background text-foreground">
      {/* Section background mesh */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      {/* Top border gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader badge="About Me" title={t('about.title')} />

        <div
          ref={sectionRef}
          className="transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
          {/* Left — Description */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
              {t('about.description')}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
              {t('about.description2')}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'NLP'].map(
                (tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right — Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="rounded-2xl p-5 transition-all duration-300 cursor-default bg-card/70 border border-border hover:border-accent/40 hover:shadow-lg backdrop-blur-md hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl shrink-0 bg-accent/15 border border-accent/20 text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm mb-1 text-foreground">
                        {item.label}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
