import { useEffect, useState } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'
import OpenSource from './components/OpenSource.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
  } catch {
    // localStorage kullanılamıyorsa sistem temasına düş
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Lav lambası: her blob tabandan yavaşça yükselir, tepeye varıp geri alçalır.
// [soldan konum, boyut, açık tema rengi, koyu tema rengi, hareket, süre (sn), gecikme (sn)]
// "hidden sm:block" olanlar telefonda performans için gizlenir.
const blobs = [
  ['left-[4%] h-64 w-64', 'bg-fuchsia-500 dark:bg-fuchsia-600', 'animate-lava-a', 38, -6],
  ['left-[20%] h-48 w-48', 'bg-cyan-400 dark:bg-cyan-500', 'animate-lava-b', 31, -14],
  ['left-[34%] h-72 w-72', 'bg-amber-400 dark:bg-violet-600', 'animate-lava-c', 44, -22],
  ['left-[48%] h-52 w-52', 'bg-emerald-400 dark:bg-blue-600', 'animate-lava-d', 36, -3],
  ['left-[60%] h-64 w-64', 'bg-rose-400 dark:bg-pink-600', 'animate-lava-a', 47, -30],
  ['left-[72%] h-48 w-48', 'bg-sky-400 dark:bg-indigo-600', 'animate-lava-b', 33, -9],
  ['hidden sm:block left-[84%] h-60 w-60', 'bg-orange-400 dark:bg-orange-600', 'animate-lava-c', 41, -18],
  ['hidden sm:block left-[12%] h-40 w-40', 'bg-violet-400 dark:bg-teal-500', 'animate-lava-d', 29, -25],
  ['hidden sm:block left-[90%] h-44 w-44', 'bg-lime-300 dark:bg-fuchsia-500', 'animate-lava-a', 35, -11],
]

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // yoksay
    }
  }, [theme])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      {/* Lav lambası: bloblar "goo" filtresiyle birbirine yapışıp ayrılır */}
      <svg aria-hidden className="absolute h-0 w-0">
        <defs>
          <filter id="lava">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="goo"
            />
            <feGaussianBlur in="goo" stdDeviation="9" />
          </filter>
        </defs>
      </svg>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-0 overflow-hidden opacity-[0.34] dark:opacity-[0.32]"
        style={{ filter: 'url(#lava)' }}
      >
        {/* Tabandaki sıcak havuz: yükselen bloblar buradan kopar ve geri döner */}
        <div className="animate-lava-pool absolute -bottom-24 -left-[10%] h-52 w-[55%] rounded-full bg-fuchsia-500 will-change-transform dark:bg-fuchsia-600" />
        <div
          className="animate-lava-pool absolute -bottom-28 -right-[10%] h-56 w-[55%] rounded-full bg-cyan-400 will-change-transform dark:bg-cyan-500"
          style={{ animationDelay: '-6s' }}
        />
        {blobs.map(([place, color, motion, seconds, delay], i) => (
          <div
            key={i}
            className={`absolute -bottom-20 rounded-full will-change-transform ${place} ${color} ${motion}`}
            style={{ animationDuration: `${seconds}s`, animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Works />
        <OpenSource />
      </main>

      <footer className="relative z-10 flex flex-col items-center gap-5 px-6 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/gokalpvural"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/50 bg-white/50 px-5 py-3 font-bold text-slate-800 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-sky-500/40 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-sky-500" aria-hidden>
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/pietro379"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/50 bg-white/50 px-5 py-3 font-bold text-slate-800 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-fuchsia-500/40 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.22.7.83.57A12 12 0 0 0 12 .3z" />
            </svg>
            GitHub
          </a>
        </div>
        <p>© 2026 Gökalp Vural</p>
      </footer>
    </div>
  )
}






