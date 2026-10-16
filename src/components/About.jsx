// Her alanın kendi rengi ve etiketleri var; kartlar yazılım odaklı
const skills = [
  {
    title: 'Mobil',
    text: 'Flutter ile Android ve iOS için hızlı, akıcı ve güvenli uygulamalar geliştiriyorum. Çevrimdışı çalışan şifreli kart cüzdanım bunun en güzel örneği.',
    tools: ['Flutter', 'Dart'],
    gradient: 'from-sky-400 to-indigo-500',
  },
  {
    title: 'Web',
    text: 'React ve Node.js ile görev yönetim uygulamamı (Taskboard) yazdım. HTML, CSS ve JavaScript ile duyarlı, kullanıcı dostu arayüzler tasarlıyorum.',
    tools: ['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-orange-400 to-rose-500',
  },
  {
    title: 'Diğer diller',
    text: 'Mantığı sağlam, temiz ve okunabilir kod yazmayı seviyorum. Problem çözmek benim için bir bulmaca gibi eğlenceli.',
    tools: ['Python', 'C#'],
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Araçlar',
    text: 'Sürüm kontrolü ve geliştirme ortamı günlük işimin parçası: kodu düzenli tutmak ve değişiklikleri takip etmek bana rahatlık veriyor.',
    tools: ['Git', 'GitHub', 'VS Code', 'Android Studio'],
    gradient: 'from-emerald-400 to-cyan-500',
  },
]

const stats = [
  { value: '9', label: 'proje', gradient: 'from-fuchsia-500 to-orange-400' },
  { value: '2', label: 'mobil uygulama', gradient: 'from-sky-400 to-indigo-500' },
  { value: '1', label: 'canlı full-stack uygulama', gradient: 'from-emerald-400 to-cyan-500' },
]

export default function About() {
  return (
    <section id="hakkimda" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h2 className="text-center text-4xl font-black tracking-tight sm:text-6xl">
        <span className="text-cyan-500 dark:text-cyan-400">
          Hakkımda
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-slate-600 dark:text-slate-300">
        Bilgisayar Programcılığı mezunuyum. Flutter ile çevrimdışı çalışan şifreli bir kart
        cüzdanı, React ve Node.js ile bir görev yönetim uygulaması (Taskboard) yazdım. Temiz kod
        yazmaya ve arayüzlerin kullanımı kolay, düzenli ve hızlı olmasına özen gösteririm.
      </p>

      <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
        {stats.map((st) => (
          <li
            key={st.label}
            className="rounded-xl border border-white/50 bg-white/50 px-5 py-4 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <span className={`bg-gradient-to-r ${st.gradient} bg-clip-text font-mono text-4xl font-bold text-transparent`}>
              {st.value}
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {st.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
        {skills.map((s, i) => (
          <article
            key={s.title}
            className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white/50 p-6 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 dark:border-white/10 dark:bg-white/5"
          >
            {/* Üstte ince renk çizgisi: her alanın kimliği */}
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.gradient}`} />

            <div className="flex items-baseline gap-3">
              <span className={`bg-gradient-to-r ${s.gradient} bg-clip-text font-mono text-sm font-bold text-transparent`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-extrabold">{s.title}</h3>
            </div>

            <p className="mt-3 font-medium leading-relaxed text-slate-600 dark:text-slate-300">
              {s.text}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {s.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-slate-300/70 bg-white/40 px-2.5 py-1 font-mono text-[13px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
