'use client'

import { useEffect, useState } from 'react'
import en from '@/lib/translations/en.json'
import fr from '@/lib/translations/fr.json'

type Language = 'en' | 'fr'

const translations = { en, fr }

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get language from localStorage or browser preference
    const stored = localStorage.getItem('language') as Language | null
    const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en'
    const lang = stored || browserLang
    setLanguage(lang)
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
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

  return { language, toggleLanguage, t, mounted }
}
