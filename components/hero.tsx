'use client'

import { ArrowRight } from 'lucide-react'
import { useApp } from '@/lib/context/AppContext'

export function Hero() {
  const { t } = useApp()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <p className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium tracking-wide uppercase text-accent border border-accent/20 rounded-full bg-accent/5">
          {t('nav.home')}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
          {t('hero.title')}
          <span className="block text-accent mt-1">{t('hero.titleAccent')}</span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            {t('hero.cta')}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg border border-border bg-card hover:bg-muted transition-colors"
          >
            {t('contact.title')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
