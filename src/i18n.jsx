import { useEffect, useMemo, useState } from 'react'
import { LangContext, copy } from './lang.js'

function getInitialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'tr' || saved === 'en') return saved
  } catch {
    // localStorage kullanılamıyorsa tarayıcı diline düş
  }
  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = copy[lang].title
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy[lang].description)
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // yoksay
    }
  }, [lang])

  const value = useMemo(() => ({ lang, t: copy[lang], setLang }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
