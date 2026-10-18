import { useLang } from '../lang.js'

export default function ThemeToggle({ theme, onToggle }) {
  const { t } = useLang()
  const isDark = theme === 'dark'
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? t.themeToLight : t.themeToDark}
      className="fixed right-5 top-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/40 text-2xl shadow-lg backdrop-blur-xl transition hover:scale-110 hover:rotate-12 active:scale-95 dark:border-white/10 dark:bg-white/10"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
