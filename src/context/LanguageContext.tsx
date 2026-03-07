"use client"

import * as React from "react"
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

export type Language = "en" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  // Initialize from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem("app-language") as Language
    if (savedLang && ["en", "id"].includes(savedLang)) {
      // eslint-disable-next-line
      setLanguage(savedLang)
    }
    setMounted(true)
  }, [])

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("app-language", lang)
  }, [])

  const value = useMemo(() => ({
    language,
    setLanguage: handleSetLanguage,
  }), [language, handleSetLanguage])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
