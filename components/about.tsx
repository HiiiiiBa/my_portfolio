'use client'

import { Code2, Zap, Users } from 'lucide-react'
import { useApp } from '@/lib/context/AppContext'

export function About() {
  const { t } = useApp()

  const skills = [
    { 
      icon: Code2, 
      label: 'Development', 
      description: 'React, Next.js, TypeScript, Tailwind CSS' 
    },
    { 
      icon: Zap, 
      label: 'Performance', 
      description: 'Optimization, responsive design, SEO' 
    },
    { 
      icon: Users, 
      label: 'Collaboration', 
      description: 'Team work, communication, design' 
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I focus on creating intuitively usable interfaces and optimizing performance to provide the best user experience.
            </p>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid gap-4">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.label}
                  className="rounded-xl p-5 bg-card border border-border hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-accent/10 rounded-lg">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{skill.label}</h3>
                      <p className="text-sm text-foreground/60">{skill.description}</p>
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
