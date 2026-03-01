"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-[68px] h-9" /> // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "id" : "en")}
      className="h-9 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-1.5 font-bold text-xs uppercase"
      aria-label="Toggle language"
    >
      <span className="material-symbols-outlined text-[18px]">language</span>
      <span>{language}</span>
    </button>
  )
}
