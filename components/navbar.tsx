'use client'

import { useState, useEffect } from 'react'
import { useApp } from '@/lib/context/AppContext'
import { Menu, X, Moon, Sun } from 'lucide-react'

export function Navbar() {
  const { t, language, setLanguage, theme, toggleTheme, mounted } = useApp()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  if (!mounted) {
    return <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-border/40" />
  }

  const navItems = [
    { label: t('nav.home'), id: 'hero' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.skills'), id: 'skills' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.education'), id: 'education' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.contact'), id: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-lg border-b border-border/60 shadow-sm'
          : 'bg-background/70 backdrop-blur-md border-b border-border/30'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <button
          onClick={() => scrollToSection('hero')}
          className="shrink-0 flex items-center hover:opacity-80 transition-opacity"
          aria-label="Retour à l'accueil"
        >
          <img
            src="/logo-hiba.png"
            alt="Hiba El Ouafi"
            className="h-10 sm:h-12 w-auto object-contain select-none dark:brightness-0 dark:invert"
          />
        </button>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/60 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center rounded-lg border border-border bg-muted/40 p-0.5">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                language === 'en'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                language === 'fr'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="Français"
            >
              FR
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border bg-muted/40 hover:bg-muted transition-colors"
            aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-border bg-muted/40 hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
