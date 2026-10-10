import { useEffect, useState } from 'react'

const USERNAME = 'pietro379'
// Sitenin kendi reposu listede gösterilmez
const HIDDEN_REPO = 'gokalp-vural-portfolio'

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
          .filter((r) => !r.fork && !r.private && r.name !== HIDDEN_REPO)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at) - new Date(a.pushed_at),
          )
          .slice(0, 6)
        setRepos(list)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(true)
      })
    return () => controller.abort()
  }, [])

  return (
    <section id="acik-kaynak" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center text-4xl font-black tracking-tight sm:text-6xl">
        <span className="text-emerald-500 dark:text-emerald-400">
          Açık Kaynak Projelerim
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center font-medium text-slate-600 dark:text-slate-300">
        GitHub'dan canlı çekiliyor: en çok yıldız alan ve en son güncellenen repolarım.
      </p>

      {error && (
        <p className="mt-12 text-center font-semibold text-rose-500">
          Repolar şu an yüklenemedi (GitHub API sınırı olabilir). Biraz sonra tekrar dene.
        </p>
      )}

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {!repos && !error &&
          Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="h-44 animate-pulse rounded-3xl bg-white/40 dark:bg-white/5" />
          ))}

        {repos?.map((r) => {
          const color = langColors[r.language] ?? fallbackColor
          return (
            <a
              key={r.id}
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col rounded-3xl border border-white/50 bg-white/50 p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
              style={{ '--neon': color }}
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
              <h3 className="pr-8 text-xl font-extrabold">{r.name}</h3>
              <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                {r.description || 'Açıklama eklenmemiş.'}
              </p>
              <div className="mt-5 flex items-center justify-between text-sm font-bold">
                <span style={{ color }}>{r.language ?? 'Diğer'}</span>
                <span className="text-slate-500 opacity-0 transition group-hover:opacity-100 dark:text-slate-400 [@media(hover:none)]:opacity-100">
                  GitHub ↗
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}



