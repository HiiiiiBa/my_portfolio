'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import en from '@/lib/translations/en.json'
import fr from '@/lib/translations/fr.json'

type Language = 'en' | 'fr'

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (path: string) => string
  theme: 'light' | 'dark'
  toggleTheme: () => void
  mounted: boolean
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const translations = { en, fr }

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get language and theme from localStorage or defaults
    const storedLang = localStorage.getItem('language') as Language | null
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    
    const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en'
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const lang = storedLang || browserLang
    const thm = storedTheme || (prefersDark ? 'dark' : 'light')
    
    setLanguage(lang)
    setTheme(thm)
    
    // Apply theme to document
    if (thm === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    setMounted(true)
  }, [])

  const setLanguageDirect = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const toggleLanguage = () => {
    setLanguageDirect(language === 'en' ? 'fr' : 'en')
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const t = (path: string): string => {
    const keys = path.split('.')
    let value: any = translations[language]
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        return path
      }
    }
    
    return typeof value === 'string' ? value : path
  }

  if (!mounted) return <>{children}</>

  return (
    <AppContext.Provider value={{ language, setLanguage: setLanguageDirect, toggleLanguage, t, theme, toggleTheme, mounted }}>
      {children}
    </AppContext.Provider>
  )
}

const defaultContext: AppContextType = {
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (path: string) => path,
  theme: 'dark',
  toggleTheme: () => {},
  mounted: false,
}

export function useApp() {
  const context = useContext(AppContext)
  return context || defaultContext
}
