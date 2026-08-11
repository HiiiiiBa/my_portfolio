'use client'

import { useState, useEffect } from 'react'
import { useApp } from '@/lib/context/AppContext'
import { Menu, X, Moon, Sun } from 'lucide-react'

export function Navbar() {
  const { t, language, setLanguage, theme, toggleTheme, mounted } = useApp()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Track active section */
  useEffect(() => {
    const ids = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'contact']
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  if (!mounted) {
    return <header className="fixed top-0 left-0 right-0 z-50 h-16" />
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        {/* Desktop Nav — centered */}
        <nav
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 lg:gap-1 flex-nowrap"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-2 lg:px-3 py-1.5 text-xs lg:text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-lg group ${
                  isActive
                    ? 'text-accent font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {/* Active underline */}
                <span
                  className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 bg-gradient-to-r from-violet-500 to-cyan-500"
                  style={{
                    width: isActive ? '100%' : '0%',
                    boxShadow: isActive ? '0 0 8px rgba(139, 92, 246, 0.6)' : 'none',
                  }}
                />
                {/* Hover bg */}
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-accent/10 pointer-events-none" />
              </button>
            )
          })}
        </nav>

        {/* Right controls */}
        <div className="ml-auto flex items-center gap-2 shrink-0">
          {/* Language toggle */}
          <div className="flex items-center rounded-xl p-0.5 border border-border bg-muted/60">
            {(['en', 'fr'] as const).map((lang) => (
              <button
                key={lang}
                id={`lang-${lang}`}
                onClick={() => setLanguage(lang)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  language === lang
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label={lang === 'en' ? 'English' : 'Français'}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-border bg-muted/60 hover:bg-muted transition-all duration-200 hover:scale-105"
            aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            title={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-violet-600" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-border bg-muted/60 text-foreground transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-b border-border bg-background/95 backdrop-blur-2xl">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 text-sm rounded-xl transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-accent/15 text-accent font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
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
