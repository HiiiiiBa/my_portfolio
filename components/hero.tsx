'use client'

import { ArrowRight, Code2 } from 'lucide-react'
import { useApp } from '@/lib/context/AppContext'
import { useEffect, useState } from 'react'

/* ─── Floating particles ─── */
function Particles() {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    delay: number
    duration: number
    color: string
  }>>([])

  useEffect(() => {
    const list = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 4,
      color: ['#8b5cf6', '#06b6d4', '#ec4899', '#a78bfa'][Math.floor(Math.random() * 4)],
    }))
    setParticles(list)
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full opacity-0"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

/* ─── Typewriter hook ─── */
function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && charIndex < word.length) {
      timer = setTimeout(() => setCharIndex((c) => c + 1), speed)
    } else if (!deleting && charIndex === word.length) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex((c) => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIndex((w) => (w + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [charIndex, deleting, wordIndex, words, speed, pause])

  useEffect(() => {
    setDisplay(words[wordIndex].slice(0, charIndex))
  }, [charIndex, wordIndex, words])

  return display
}

function HeroTypewriter({ words }: { words: string[] }) {
  const typed = useTypewriter(words)

  return (
    <div className="flex items-center justify-center gap-3 min-h-10">
      <Code2 className="w-5 h-5 shrink-0 text-cyan-500" />
      <p className="text-xl sm:text-2xl font-semibold font-mono text-cyan-500 dark:text-cyan-400">
        {typed}
        <span className="inline-block w-0.5 h-6 ml-1 align-middle bg-accent animate-pulse" />
      </p>
    </div>
  )
}

export function Hero() {
  const { t, language } = useApp()

  const words =
    language === 'fr'
      ? [
          'Ingénieure logicielle',
          'Développeuse Full-Stack',
          'Passionnée QA & tests logiciels',
          'Passionnée DevOps & Cloud',
        ]
      : [
          'Software Engineer',
          'Full-Stack Developer',
          'QA & Software Testing Enthusiast',
          'DevOps & Cloud Enthusiast',
        ]

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background text-foreground"
    >
      {/* Background glow mesh */}
      <div className="absolute inset-0 pointer-events-none bg-mesh" />

      {/* Floating particles */}
      <Particles />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-8 w-full">
            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="block text-foreground">{t('hero.title').split(' ')[0]}</span>
                <span className="block gradient-text-animated">{t('hero.title').split(' ').slice(1).join(' ')}</span>
              </h1>
            </div>

            {/* Typewriter */}
            <HeroTypewriter key={language} words={words} />

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <button
                id="hero-projects-cta"
                onClick={() => scrollToSection('projects')}
                className="btn-primary inline-flex items-center justify-center gap-2.5 cursor-pointer"
              >
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-contact-cta"
                onClick={() => scrollToSection('contact')}
                className="btn-outline inline-flex items-center justify-center cursor-pointer"
              >
                {t('contact.title')}
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 pt-4">
              {[
                { value: '4+', label: 'Stages' },
                { value: '5+', label: 'Projets' },
                { value: '10+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label} className="space-y-0.5">
                  <p className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
