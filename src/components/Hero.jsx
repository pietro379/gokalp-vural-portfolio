import { useEffect, useState } from 'react'

// Kod penceresinin içeriği: her satır renkli parçalardan oluşur.
// k: anahtar kelime, p: özellik adı, s: metin, b: değer, d: sade yazı
const lines = [
  [['k', 'const '], ['p', 'gokalp'], ['d', ' = {']],
  [['d', '  '], ['p', 'rol'], ['d', ': '], ['s', "'Junior yazılım geliştirici'"], ['d', ',']],
  [['d', '  '], ['p', 'sehir'], ['d', ': '], ['s', "'Ankara'"], ['d', ',']],
  [['d', '  '], ['p', 'teknoloji'], ['d', ': ['], ['s', "'Flutter'"], ['d', ', '], ['s', "'React'"], ['d', ', '], ['s', "'Node.js'"], ['d', '],']],
  [['d', '  '], ['p', 'projeler'], ['d', ': '], ['b', '9'], ['d', ',']],
  [['d', '}']],
]

const tokenColor = {
  k: 'text-fuchsia-400',
  p: 'text-slate-100',
  s: 'text-emerald-300',
  b: 'text-amber-300',
  d: 'text-slate-400',
}

const totalChars = lines.flat().reduce((sum, [, text]) => sum + text.length, 0)

// Harf harf yazılma: hareketi azaltmayı seçenlerde metin baştan tam görünür
function useTyping(total) {
  const [count, setCount] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? total : 0,
  )

  useEffect(() => {
    if (count >= total) return
    const id = setTimeout(() => setCount((c) => c + 1), count === 0 ? 900 : 38)
    return () => clearTimeout(id)
  }, [count, total])

  return count
}

function CodeLines({ visible }) {
  let remaining = visible
  return lines.map((line, i) => {
    const parts = line.map(([type, text], j) => {
      const shown = text.slice(0, Math.max(0, remaining))
      remaining -= text.length
      return shown ? (
        <span key={j} className={tokenColor[type]}>
          {shown}
        </span>
      ) : null
    })
    return (
      <div key={i} className="min-h-[1.6em] whitespace-pre">
        {parts}
      </div>
    )
  })
}

function Chip({ className, delay, children }) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`animate-float absolute rounded-full border border-white/50 bg-white/60 px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-white ${className}`}
    >
      {children}
    </div>
  )
}

function CodeWindow() {
  const visible = useTyping(totalChars)
  const done = visible >= totalChars

  return (
    <div className="relative mx-auto w-full max-w-md text-left">
      {/* Pencerenin arkasında dönen renkli ışık */}
      <div className="code-halo absolute -inset-px rounded-3xl" />

      <div className="animate-float-slow relative overflow-hidden rounded-3xl bg-slate-950/90 shadow-2xl shadow-fuchsia-500/20 ring-1 ring-white/10 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-slate-400">gokalp.js</span>
        </div>

        <pre className="min-h-[11.5rem] overflow-hidden px-5 py-5 font-mono text-[12px] leading-[1.6] sm:text-[13.5px]">
          <code>
            <CodeLines visible={visible} />
          </code>
        </pre>

        <div className="flex items-center gap-2 border-t border-white/10 px-4 py-2.5 font-mono text-xs text-slate-400">
          <span className={`h-2 w-2 rounded-full bg-[#28c840] ${done ? 'animate-pulse' : 'opacity-40'}`} />
          {done ? 'Derleme başarılı' : 'yazılıyor…'}
          <span className={`ml-auto inline-block h-4 w-[2px] bg-fuchsia-400 ${done ? 'animate-blink' : ''}`} />
        </div>
      </div>

      <Chip className="-left-3 -top-5 sm:-left-8" delay="0s">Flutter</Chip>
      <Chip className="-right-2 top-12 sm:-right-8" delay="1.3s">React</Chip>
      <Chip className="-bottom-5 left-8 sm:left-10" delay="2.4s">Node.js</Chip>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-6 py-24 text-center">
      <div
        style={{ '--i': 0 }}
        className="rise rounded-full border border-white/40 bg-white/40 px-5 py-2 text-sm font-semibold shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
      >
        <span className="mr-2">👋</span>
        Merhaba
      </div>

      <h1
        style={{ '--i': 1 }}
        className="rise mt-8 text-5xl font-black leading-tight tracking-tight sm:text-8xl md:text-9xl"
      >
        {/* Renk geçişi iç öğede: ".rise" animasyonu üst öğedeki animasyonu ezdiği için ayrı tutulur */}
        <span className="name-gradient bg-gradient-to-r from-fuchsia-500 via-orange-400 via-60% to-cyan-400 bg-[length:300%_100%] bg-clip-text text-transparent">
          Gökalp Vural
        </span>
      </h1>

      <p style={{ '--i': 2 }} className="rise mt-6 max-w-xl text-lg font-semibold text-slate-600 sm:text-2xl dark:text-slate-300">
        Ankara'da junior yazılım geliştirici.
      </p>
      <p style={{ '--i': 3 }} className="rise mt-3 max-w-xl text-base font-medium text-slate-500 sm:text-lg dark:text-slate-400">
        Flutter, React ve Node.js ile uygulamalar geliştiriyorum. Staj ve junior pozisyonlara açığım.
      </p>

      <div style={{ '--i': 4 }} className="rise mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="/Gokalp_Vural_CV.pdf"
          download
          className="rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-8 py-4 text-lg font-extrabold text-white shadow-xl shadow-fuchsia-500/30 transition hover:scale-105 active:scale-95"
        >
          CV'yi indir ↓
        </a>
        <a
          href="#hakkimda"
          className="rounded-full border border-white/50 bg-white/50 px-8 py-4 text-lg font-extrabold text-slate-800 shadow-xl backdrop-blur-xl transition hover:scale-105 active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          Beni Tanı
        </a>
      </div>

      {/* Kod penceresi: ekran okuyucular için dekoratif, bilgi yukarıdaki metinlerde zaten yazıyor */}
      <div aria-hidden style={{ '--i': 5 }} className="rise mt-16 w-full">
        <CodeWindow />
      </div>
    </section>
  )
}
