import { useEffect, useRef, useState } from 'react'
import { useLang } from '../lang.js'

// CV indirme düğmesi: tıklayınca küçük bir menü açılır ve CV'nin dili seçilir.
// Sitenin o anki diline ait seçenek öne çıkarılır; menü dışarı tıklayınca ya da Esc ile kapanır.
const options = [
  { lang: 'tr', label: 'Türkçe', file: '/Gokalp_Vural_CV.pdf', download: 'Gokalp_Vural_CV.pdf' },
  { lang: 'en', label: 'English', file: '/Gokalp_Vural_CV_EN.pdf', download: 'Gokalp_Vural_CV_EN.pdf' },
]

export default function CvMenu() {
  const { lang, t } = useLang()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-8 py-4 text-lg font-extrabold text-white shadow-xl shadow-fuchsia-500/30 transition hover:scale-105 active:scale-95"
      >
        {t.downloadCv}
        <span aria-hidden className={`ml-2 inline-block transition-transform ${open ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>

      {open && (
        <div
          role="group"
          aria-label={t.cvLanguage}
          className="absolute left-1/2 top-full z-30 mt-3 w-60 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/50 bg-white p-2 text-left shadow-2xl dark:border-white/10 dark:bg-slate-900"
        >
          <p className="px-3 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {t.cvLanguage}
          </p>
          {options.map((o) => (
            <a
              key={o.lang}
              href={o.file}
              download={o.download}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-base font-bold text-slate-800 transition hover:bg-fuchsia-500/10 focus-visible:bg-fuchsia-500/10 focus-visible:outline-none dark:text-slate-100"
            >
              <span>
                {o.label}
                {o.lang === lang && (
                  <span className="ml-2 whitespace-nowrap rounded-full bg-fuchsia-500/15 px-2 py-0.5 text-[11px] font-bold text-fuchsia-600 dark:text-fuchsia-300">
                    {t.cvCurrent}
                  </span>
                )}
              </span>
              <span aria-hidden className="whitespace-nowrap text-slate-400">
                PDF ↓
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
