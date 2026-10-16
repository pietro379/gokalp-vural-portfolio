// Her alanın kendi rengi ve etiketleri var; kartlar yazılım odaklı
const skills = [
  {
    icon: '📱',
    title: 'Mobil',
    text: 'Flutter ile Android ve iOS için hızlı, akıcı ve güvenli uygulamalar geliştiriyorum. Çevrimdışı çalışan şifreli kart cüzdanım bunun en güzel örneği.',
    tools: ['Flutter', 'Dart'],
    gradient: 'from-sky-400 to-indigo-500',
  },
  {
    icon: '🌐',
    title: 'Web',
    text: 'React ve Node.js ile görev yönetim uygulamamı (Taskboard) yazdım. HTML, CSS ve JavaScript ile duyarlı, kullanıcı dostu arayüzler tasarlıyorum.',
    tools: ['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-orange-400 to-rose-500',
  },
  {
    icon: '💻',
    title: 'Diğer diller',
    text: 'Mantığı sağlam, temiz ve okunabilir kod yazmayı seviyorum. Problem çözmek benim için bir bulmaca gibi eğlenceli.',
    tools: ['Python', 'C#'],
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: '🛠️',
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
        yazmaya ve arayüzlerin kullanımı kolay, düzenli ve hızlı olmasına özen gösteririm. ⚡
      </p>

      <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
        {stats.map((st) => (
          <li
            key={st.label}
            className="rounded-3xl border border-white/50 bg-white/50 p-5 text-center shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <span className={`bg-gradient-to-r ${st.gradient} bg-clip-text text-5xl font-black text-transparent`}>
              {st.value}
            </span>
            <span className="mt-1 block text-sm font-bold text-slate-600 dark:text-slate-300">{st.label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
        {skills.map((s) => (
          <article
            key={s.title}
            className="group rounded-3xl border border-white/50 bg-white/50 p-6 shadow-xl sm:p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-3xl shadow-lg transition group-hover:rotate-6 group-hover:scale-110`}
            >
              {s.icon}
            </div>
            <h3 className="mt-6 text-2xl font-extrabold">{s.title}</h3>
            <p className="mt-3 font-medium leading-relaxed text-slate-600 dark:text-slate-300">
              {s.text}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {s.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/60 bg-white/60 px-3 py-1 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
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
