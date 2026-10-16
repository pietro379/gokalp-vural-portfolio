// Yetenekler kart yerine satır satır liste: içerik bir karşılaştırma değil, bir döküm.
// Her alanın kendi rengi var: nokta ve etiket tonları buradan türer
const skills = [
  { area: 'Mobil', color: '#2a4bff', tools: ['Flutter', 'Dart'] },
  { area: 'Web', color: '#0b8a65', tools: ['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'] },
  { area: 'Diğer diller', color: '#b86a00', tools: ['Python', 'C#'] },
  { area: 'Araçlar', color: '#e0457b', tools: ['Git', 'GitHub', 'VS Code', 'Android Studio'] },
]

const stats = [
  { value: '9', label: 'proje' },
  { value: '2', label: 'mobil uygulama' },
  { value: '1', label: 'canlı full-stack uygulama' },
]

export default function About() {
  return (
    <section id="hakkimda" className="band-about">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <div>
          <h2 className="section-title font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Hakkımda</h2>
          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-6 md:flex-col md:gap-y-5">
            {stats.map((st) => (
              <li key={st.label} className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-extrabold text-accent dark:text-accent-soft">{st.value}</span>
                <span className="max-w-[9rem] text-base leading-tight text-ink/70 dark:text-white/65">{st.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="max-w-xl text-lg leading-relaxed sm:text-xl">
            Bilgisayar Programcılığı mezunuyum. Flutter ile çevrimdışı çalışan şifreli bir kart
            cüzdanı, React ve Node.js ile bir görev yönetim uygulaması (Taskboard) yazdım. Temiz
            kod yazmaya ve arayüzlerin kullanımı kolay, düzenli ve hızlı olmasına özen gösteririm.
          </p>

          <dl className="mt-10 border-t border-ink/20 dark:border-white/20">
            {skills.map((s) => (
              <div
                key={s.area}
                className="grid gap-1 border-b border-ink/20 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6 dark:border-white/20"
              >
                <dt className="flex items-center gap-2.5 font-display text-lg font-bold">
                  <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                  {s.area}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {s.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full px-3 py-1 text-base font-medium text-(--c) dark:text-[color-mix(in_srgb,var(--c)_55%,white)]"
                      style={{
                        '--c': s.color,
                        background: `color-mix(in srgb, ${s.color} 12%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${s.color} 28%, transparent)`,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
