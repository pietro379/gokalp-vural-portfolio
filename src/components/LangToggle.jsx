import { useLang } from '../lang.js'

// Dil anahtarı: karşı dilin kısaltmasını gösterir (TR iken "EN", EN iken "TR").
export default function LangToggle() {
  const { lang, t, setLang } = useLang()
  return (
    <button
      onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
      aria-label={t.switchLabel}
      className="fixed right-20 top-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/40 text-sm font-black tracking-wide shadow-lg backdrop-blur-xl transition hover:scale-110 active:scale-95 dark:border-white/10 dark:bg-white/10"
    >
      {t.switchShort}
    </button>
  )
}
