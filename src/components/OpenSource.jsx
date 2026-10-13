import { useEffect, useState } from 'react'

const USERNAME = 'pietro379'
const ROW_COUNT = 3
// Bir kartın şeritte kapladığı süre (saniye); sayı arttıkça şerit yavaşlar
const SECONDS_PER_CARD = 14
// Bir satırın tek turunda en az bu kadar kart olur (geniş ekranları boş bırakmamak için)
const MIN_CARDS_PER_SET = 8

// Repoları sırayla satırlara dağıtır: 8 repo, 3 satırda 3-3-2 olur
function splitIntoRows(items, rowCount) {
  return Array.from({ length: rowCount }, (_, row) => items.filter((_, i) => i % rowCount === row)).filter(
    (row) => row.length > 0,
  )
}

// Dile göre neon nokta rengi
const langColors = {
  Dart: '#00d2ff',
  'C#': '#9b4dff',
  Python: '#ffd43b',
  HTML: '#ff5a1f',
  CSS: '#a855f7',
  JavaScript: '#facc15',
  TypeScript: '#3b82f6',
  Java: '#f97316',
  'C++': '#ec4899',
  Kotlin: '#a78bfa',
  Swift: '#fb7185',
}
const fallbackColor = '#94a3b8'

function RepoCard({ repo, hidden = false }) {
  const color = langColors[repo.language] ?? fallbackColor
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      // Şeritteki ikinci kopya ekran okuyuculardan ve klavye odağından gizlenir
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className="group relative mr-6 mb-6 flex h-44 w-72 shrink-0 flex-col rounded-3xl border border-white/50 bg-white/50 p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 sm:w-80"
    >
      {/* Köşede yanan neon nokta */}
      <span
        aria-hidden
        className="absolute right-5 top-5 h-3.5 w-3.5 animate-pulse rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 8px 2px ${color}, 0 0 22px 6px ${color}99`,
        }}
      />
      <h3 className="truncate pr-8 text-xl font-extrabold">{repo.name}</h3>
      <p className="mt-3 line-clamp-3 flex-1 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
        {repo.description || 'Açıklama eklenmemiş.'}
      </p>
      <div className="mt-4 flex items-center justify-between text-sm font-bold">
        <span style={{ color }}>
          {repo.language ?? 'Diğer'}
          {repo.fork && <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">fork</span>}
        </span>
        <span className="text-slate-500 opacity-0 transition group-hover:opacity-100 dark:text-slate-400 [@media(hover:none)]:opacity-100">
          GitHub ↗
        </span>
      </div>
    </a>
  )
}

export default function OpenSource() {
  const [repos, setRepos] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.status)
        return res.json()
      })
      .then((data) => {
        const list = data
          .filter((r) => !r.private)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at) - new Date(a.pushed_at),
          )
        setRepos(list)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(true)
      })
    return () => controller.abort()
  }, [])

  return (
    <section id="acik-kaynak" className="overflow-hidden py-16 sm:py-24">
      <h2 className="px-6 text-center text-4xl font-black tracking-tight sm:text-6xl">
        <span className="text-emerald-500 dark:text-emerald-400">
          Açık Kaynak Projelerim
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl px-6 text-center font-medium text-slate-600 dark:text-slate-300">
        GitHub profilimdeki tüm repolar canlı çekiliyor. Üzerine gelince akış durur, tıklayınca repoya gidersin.
      </p>

      {error && (
        <p className="mt-12 px-6 text-center font-semibold text-rose-500">
          Repolar şu an yüklenemedi (GitHub API sınırı olabilir). Biraz sonra tekrar dene.
        </p>
      )}

      {!repos && !error && (
        <div className="mt-14 flex gap-6 px-6">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="h-44 w-72 shrink-0 animate-pulse rounded-3xl bg-white/40 dark:bg-white/5 sm:w-80" />
          ))}
        </div>
      )}

      {repos && (
        // Kenarlarda kartlar yumuşakça belirip kaybolur
        <div className="marquee mt-14 flex flex-col [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {splitIntoRows(repos, ROW_COUNT).map((row, rowIndex) => {
            // Az repolu satır geniş ekranı doldurmak için tekrarlanır; sonra ikiye katlanıp kesintisiz döner
            const set = []
            while (set.length < MIN_CARDS_PER_SET) set.push(...row)
            const track = [...set, ...set]
            return (
              <div
                key={rowIndex}
                className="marquee-track"
                style={{
                  animationDuration: `${set.length * SECONDS_PER_CARD}s`,
                  // Satırlar farklı noktalardan başlar, alt alta aynı karta denk gelmez
                  animationDelay: `-${rowIndex * SECONDS_PER_CARD * 2.5}s`,
                }}
              >
                {track.map((r, i) => (
                  <RepoCard key={`${r.id}-${i}`} repo={r} hidden={i >= row.length} />
                ))}
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
