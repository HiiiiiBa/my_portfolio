'use client'

import React, { useState, useEffect } from 'react'
import { useApp } from '@/lib/context/AppContext'
import { Menu, X, Moon, Sun, Globe, FileDown, ChevronDown } from 'lucide-react'

export function Header() {
  const { t, language, toggleLanguage, theme, toggleTheme, mounted } = useApp()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/api/cv')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'CV.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading CV:', error)
    }
  }

  if (!mounted) return null

  const navItems = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.education'), href: '#education' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('cv.title'), href: '#cv' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex-shrink-0 text-2xl font-bold bg-gradient-to-r from-accent to-accent/50 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          {'<Dev />'}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href.replace('#', ''))}
              className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Download CV Button - Desktop */}
          <button
            onClick={handleDownloadCV}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-medium rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
            title="Download CV"
          >
            <FileDown className="w-4 h-4" />
            <span className="text-sm">CV</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-card hover:bg-muted transition-colors duration-200 hover:scale-110"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {/* Language Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="p-2 rounded-lg bg-card hover:bg-muted transition-colors duration-200 hover:scale-110 flex items-center gap-1"
              aria-label="Select language"
              title={language === 'en' ? 'Français' : 'English'}
            >
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium hidden sm:inline">{language.toUpperCase()}</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            {/* Language Dropdown Menu */}
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <button
                  onClick={() => {
                    if (language !== 'en') toggleLanguage()
                    setIsLangOpen(false)
                  }}
                  className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-accent/20 text-accent'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    if (language !== 'fr') toggleLanguage()
                    setIsLangOpen(false)
                  }}
                  className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors border-t border-border ${
                    language === 'fr'
                      ? 'bg-accent/20 text-accent'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  Français
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-card hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 gap-2 max-w-6xl mx-auto">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="text-foreground/80 hover:text-accent transition-colors px-4 py-2 text-left rounded-lg hover:bg-muted"
              >
                {item.label}
              </button>
            ))}
            <hr className="my-2 border-border" />
            <button
              onClick={() => {
                handleDownloadCV()
                setIsMenuOpen(false)
              }}
              className="px-4 py-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-medium rounded-lg hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
