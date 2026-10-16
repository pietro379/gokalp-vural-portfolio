export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Açık temaya geç' : 'Koyu temaya geç'}
      className="fixed right-5 top-5 z-50 cursor-pointer rounded-lg border-2 border-ink/80 bg-paper px-4 py-2 text-sm font-semibold text-ink transition hover:bg-ink hover:text-paper active:scale-95 dark:border-white/70 dark:bg-night dark:text-white dark:hover:bg-white dark:hover:text-night"
    >
      {isDark ? 'Açık tema' : 'Koyu tema'}
    </button>
  )
}
