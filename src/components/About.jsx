const skills = [
  {
    icon: '📱',
    title: 'Flutter ile Mobil Uygulama',
    text: 'Android ve iOS için hızlı, akıcı ve güvenli uygulamalar geliştiriyorum. Çevrimdışı çalışan şifreli kart cüzdanım bunun en güzel örneği.',
    gradient: 'from-sky-400 to-indigo-500',
  },
  {
    icon: '💻',
    title: 'C# & Python',
    text: 'Mantığı sağlam, temiz ve okunabilir kod yazmayı seviyorum. Problem çözmek benim için bir bulmaca gibi eğlenceli.',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: '🌐',
    title: 'Web Teknolojileri',
    text: 'HTML, CSS ve JavaScript ile modern, duyarlı ve kullanıcı dostu arayüzler tasarlıyorum.',
    gradient: 'from-orange-400 to-rose-500',
  },
  {
    icon: '🎬',
    title: 'Video Kurgu',
    text: 'CapCut ve Premiere ile ritmi yüksek, akılda kalan videolar kurguluyorum. Hikayeyi görsele dökmek en sevdiğim iş.',
    gradient: 'from-emerald-400 to-cyan-500',
  },
]

export default function About() {
  return (
    <section id="hakkimda" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center text-4xl font-black tracking-tight sm:text-6xl">
        <span className="text-cyan-500 dark:text-cyan-400">
          Hakkımda
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-slate-600 dark:text-slate-300">
        Kod yazmayı, tasarlamayı ve kurgulamayı seven bir geliştiriciyim. Ekranda bir şey
        hareket ediyorsa ya da bir şey sorunu çözüyorsa, büyük ihtimalle ilgimi çeker. ⚡
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {skills.map((s) => (
          <article
            key={s.title}
            className="group rounded-3xl border border-white/50 bg-white/50 p-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
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
          </article>
        ))}
      </div>
    </section>
  )
}


