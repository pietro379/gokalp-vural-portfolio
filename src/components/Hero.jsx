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
  k: 'text-[#8da0ff]',
  p: 'text-[#e6e9f2]',
  s: 'text-[#7ee0b5]',
  b: 'text-[#ffc66b]',
  d: 'text-[#8b93a8]',
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
      className={`animate-float absolute rounded-full border border-ink/10 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-lg shadow-ink/10 backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-white ${className}`}
    >
      {children}
    </div>
  )
}

function CodeWindow() {
  const visible = useTyping(totalChars)
  const done = visible >= totalChars

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Pencerenin arkasında dönen vurgu ışığı */}
      <div className="code-halo absolute -inset-px rounded-2xl" />

      <div className="animate-float-slow relative overflow-hidden rounded-2xl bg-[#0f1420] shadow-2xl shadow-ink/30 ring-1 ring-white/10">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-[#8b93a8]">gokalp.js</span>
        </div>

        <pre className="min-h-[11.5rem] overflow-hidden px-5 py-5 font-mono text-[12px] leading-[1.6] sm:text-[13.5px]">
          <code>
            <CodeLines visible={visible} />
          </code>
        </pre>

        <div className="flex items-center gap-2 border-t border-white/10 px-4 py-2.5 font-mono text-xs text-[#8b93a8]">
          <span className={`h-2 w-2 rounded-full bg-[#28c840] ${done ? 'animate-pulse' : 'opacity-40'}`} />
          {done ? 'Derleme başarılı' : 'yazılıyor…'}
          <span className={`ml-auto inline-block h-4 w-[2px] bg-[#8da0ff] ${done ? 'animate-blink' : ''}`} />
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
    <div className="relative">
    <div aria-hidden className="hero-glow pointer-events-none absolute inset-0" />
    <div aria-hidden className="hero-dots pointer-events-none absolute inset-0" />
    <section className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:gap-6">
      <div>
        <h1 style={{ '--i': 0 }} className="rise font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-8xl">
          Gökalp
          <br />
          Vural
        </h1>

        <p style={{ '--i': 1 }} className="rise mt-8 max-w-md text-xl font-semibold sm:text-2xl">
          Ankara'da junior yazılım geliştirici.
        </p>
        <p style={{ '--i': 2 }} className="rise mt-3 max-w-md text-lg leading-relaxed text-ink/75 dark:text-white/70">
          Flutter, React ve Node.js ile uygulamalar geliştiriyorum. Staj ve junior pozisyonlara açığım.
        </p>

        <div style={{ '--i': 3 }} className="rise mt-10 flex flex-wrap gap-3">
          <a
            href="/Gokalp_Vural_CV.pdf"
            download
            className="rounded-lg bg-accent px-6 py-3.5 text-lg font-semibold text-white transition hover:brightness-110 active:scale-[0.98] dark:bg-accent-soft dark:text-night"
          >
            CV'yi indir
          </a>
          <a
            href="#calismalar"
            className="rounded-lg border-2 border-ink/80 px-6 py-3 text-lg font-semibold transition hover:bg-ink hover:text-paper active:scale-[0.98] dark:border-white/70 dark:hover:bg-white dark:hover:text-night"
          >
            Projelere bak
          </a>
        </div>
      </div>

      {/* Kod penceresi: ekran okuyucular için dekoratif, bilgi sol sütunda zaten yazıyor */}
      <div aria-hidden style={{ '--i': 4 }} className="rise">
        <CodeWindow />
      </div>
    </section>
    </div>
  )
}
