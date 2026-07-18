'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from 'react'
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
const LANGUAGE_KEY = 'language'
const THEME_KEY = 'theme'
const DEFAULT_LANGUAGE: Language = 'en'
const DEFAULT_THEME: 'light' | 'dark' = 'dark'

let languageListeners = new Set<() => void>()

function emitLanguageChange() {
  languageListeners.forEach((listener) => listener())
}

function subscribeLanguage(listener: () => void) {
  languageListeners.add(listener)
  return () => languageListeners.delete(listener)
}

function getClientLanguage(): Language {
  const stored = localStorage.getItem(LANGUAGE_KEY)
  if (stored === 'en' || stored === 'fr') return stored
  return navigator.language.startsWith('fr') ? 'fr' : 'en'
}

function getServerLanguage(): Language {
  return DEFAULT_LANGUAGE
}

function getTranslation(language: Language, path: string): string {
  const keys = path.split('.')
  let value: unknown = translations[language]

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key]
    } else {
      return path
    }
  }

  return typeof value === 'string' ? value : path
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribeLanguage,
    getClientLanguage,
    getServerLanguage,
  )

  const [theme, setTheme] = useState<'light' | 'dark'>(DEFAULT_THEME)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const thm = storedTheme || (prefersDark ? 'dark' : 'light')

    setTheme(thm)
    document.documentElement.classList.toggle('dark', thm === 'dark')
    document.documentElement.lang = language
    setMounted(true)
  }, [language])

  const setLanguageDirect = useCallback((lang: Language) => {
    localStorage.setItem(LANGUAGE_KEY, lang)
    document.documentElement.lang = lang
    emitLanguageChange()
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguageDirect(language === 'en' ? 'fr' : 'en')
  }, [language, setLanguageDirect])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const newTheme = current === 'dark' ? 'light' : 'dark'
      localStorage.setItem(THEME_KEY, newTheme)
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
      return newTheme
    })
  }, [])

  const t = useCallback(
    (path: string) => getTranslation(language, path),
    [language],
  )

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage: setLanguageDirect,
        toggleLanguage,
        t,
        theme,
        toggleTheme,
        mounted,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const defaultContext: AppContextType = {
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (path: string) => getTranslation(DEFAULT_LANGUAGE, path),
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
  mounted: false,
}

export function useApp() {
  const context = useContext(AppContext)
  return context || defaultContext
}
