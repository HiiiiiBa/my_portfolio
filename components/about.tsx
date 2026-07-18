'use client'

import { Code2, Settings, Users } from 'lucide-react'
import { useApp } from '@/lib/context/AppContext'

export function About() {
  const { t } = useApp()

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
    <section id="about" className="py-20 px-4 sm:px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              {t('about.description2')}
            </p>
          </div>

          <div className="space-y-3">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="rounded-xl p-4 bg-card border border-border hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm text-foreground mb-1">
                        {item.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
    </section>
  )
}
