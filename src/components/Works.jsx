// Proje verileri: Portföy klasöründeki README'lerden alındı
const works = [
  {
    title: 'Kart Cüzdanı',
    tag: 'Flutter • Dart',
    text: 'KVKK uyumlu, tamamen çevrimdışı çalışan, verileri cihazda şifreli saklayan kart cüzdanı. PIN kilidi ve 3B çevrilen kartlar.',
    glow: 'hover:shadow-sky-500/50',
    gradient: 'from-sky-500 via-indigo-500 to-violet-600',
    preview: true,
    link: 'https://github.com/pietro379/kart-cuzdani',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    title: 'Pet Care',
    tag: 'Flutter • Dart • Material 3',
    text: 'Evcil hayvanlar için sağlık takibi ve sosyal ağ uygulaması: veteriner geçmişi, akış ve sohbet, kategorili klinik haritası, açık/koyu tema.',
    glow: 'hover:shadow-violet-500/50',
    gradient: 'from-indigo-500 via-violet-500 to-fuchsia-500',
    image: '/works/pet-care.webp',
    link: 'https://github.com/pietro379/pet-care-app',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    title: 'RetroGames',
    tag: 'JavaScript • 12 oyun',
    text: 'Saf JavaScript ile yazılmış 12 retro oyunu tek çatıda toplayan oyun portalı.',
    glow: 'hover:shadow-fuchsia-500/50',
    gradient: 'from-fuchsia-500 to-rose-500',
    image: '/works/retrogames.png',
    link: 'https://pietro379.github.io/game-website/',
    span: 'sm:col-span-2',
  },
  {
    title: 'Add To Cart',
    tag: 'Java 17 • Tasarım Desenleri',
    text: 'İndirim kurallarını uygulayan sepet ve fatura uygulaması; web ve komut satırı.',
    glow: 'hover:shadow-orange-500/50',
    gradient: 'from-orange-400 to-amber-500',
    image: '/works/add-to-cart.png',
    link: 'https://pietro379.github.io/add-to-cart-project/',
  },
  {
    title: 'Image Compressor',
    tag: 'HTML • Tailwind • JS',
    text: 'JPEG, PNG ve WebP görselleri tarayıcıda sıkıştırır; hiçbir dosya sunucuya yüklenmez.',
    glow: 'hover:shadow-emerald-500/50',
    gradient: 'from-emerald-400 to-cyan-500',
    image: '/works/image-compressor.png',
    link: 'https://pietro379.github.io/image-compressor/',
  },
  {
    title: 'Cozy Focus Timer',
    tag: 'Pomodoro • Tailwind • JS',
    text: 'Yağmur ve şömine sesleriyle, açık/koyu temalı sıcak bir odaklanma sayacı.',
    glow: 'hover:shadow-amber-500/50',
    gradient: 'from-amber-400 to-orange-600',
    image: '/works/odaklanma.png',
    link: 'https://pietro379.github.io/cozy-focus-timer/',
    span: 'sm:col-span-2',
  },
  {
    title: 'Photobooth',
    tag: 'JavaScript • Canvas • 29 kamera',
    text: 'Fotoğrafını 29 retro kameradan birinde çekilmiş gibi göster, fotoğraf kabini şeritleri ve polaroidlerle kolaj yap. Flaş patlar, PDF, GIF ya da PNG olarak indirirsin.',
    glow: 'hover:shadow-rose-500/50',
    gradient: 'from-rose-500 to-red-600',
    image: '/works/photobooth.png',
    link: 'https://pietro379.github.io/retro-photo-booth/',
    span: 'sm:col-span-2',
  },
  {
    title: 'tidyfiles',
    tag: 'Python • CLI • Birim Testleri',
    text: 'Karışık klasörleri dosya türüne ve tarihe göre düzenleyen komut satırı aracı. Kuru çalıştırma ve tek komutla geri alma destekler.',
    glow: 'hover:shadow-yellow-500/50',
    gradient: 'from-yellow-400 to-blue-600',
    image: '/works/tidyfiles.png',
    mobileImage: '/works/tidyfiles-mobile.png',
    link: 'https://github.com/pietro379/tidyfiles',
    span: 'sm:col-span-4',
  },
  {
    title: 'Taskboard',
    tag: 'React • Node.js • PostgreSQL • 32 Test',
    text: 'Takımlar için görev yönetimi: rollü çalışma alanları, sürükle-bırak pano, yorumlar ve etkinlik geçmişi. Express REST API, JWT, otomatik testler ve CI ile Vercel üzerinde yayında.',
    glow: 'hover:shadow-indigo-500/50',
    gradient: 'from-indigo-500 to-sky-500',
    image: '/works/taskboard.png',
    lightCover: true,
    link: 'https://taskboard-app-red.vercel.app',
    span: 'sm:col-span-4',
  },
]

// Kart Cüzdanı için CSS ile çizilmiş canlı ön gösterim:
// kendiliğinden açılıp kapanan kartlar, ışık parlaması, PIN noktaları ve süzülen rozetler
function MiniCard({ className, anim, last4, brand, shine }) {
  return (
    <div
      className={`absolute left-1/2 top-0 h-36 w-60 -translate-x-1/2 overflow-hidden rounded-2xl p-4 text-white shadow-2xl ring-1 ring-white/25 sm:h-40 sm:w-72 ${anim} ${className}`}
    >
      {/* ipek şerit deseni */}
      <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[18px] border-white/10" />
      <div className="absolute -right-2 -top-8 h-56 w-56 rounded-full border-[10px] border-white/10" />
      <div className="relative flex items-start justify-between">
        <div className="h-7 w-10 rounded-md bg-gradient-to-br from-amber-200 to-amber-500" />
        <span className="text-sm font-black italic tracking-wide">{brand}</span>
      </div>
      <div className="relative mt-5 font-mono text-base tracking-widest sm:text-lg">**** **** **** {last4}</div>
      <div className="relative mt-2 text-xs font-semibold uppercase tracking-wider opacity-80">Gökalp Vural</div>
      {shine && (
        <div className="animate-wallet-shine absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      )}
    </div>
  )
}

function FloatChip({ className, delay, children }) {
  return (
    <div
      className={`animate-wallet-chip absolute rounded-full border border-white/40 bg-white/20 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  )
}

function CardStackPreview() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* nabız gibi atan ışık halkaları */}
      <div className="animate-wallet-pulse absolute left-1/2 top-[38%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/40 blur-3xl" />
      <div className="animate-wallet-pulse absolute left-1/4 top-[20%] h-40 w-40 rounded-full bg-fuchsia-400/40 blur-2xl [animation-delay:1.5s]" />

      {/* yanıp sönen yıldız noktaları */}
      {[['12%', '12%', '0s'], ['85%', '18%', '0.8s'], ['8%', '55%', '1.6s'], ['90%', '60%', '0.4s'], ['70%', '8%', '2s']].map(([l, t, d]) => (
        <span key={l + t} className="animate-wallet-twinkle absolute h-1.5 w-1.5 rounded-full bg-white" style={{ left: l, top: t, animationDelay: d }} />
      ))}

      <div className="absolute inset-x-0 top-8 h-48 origin-top scale-[0.78] sm:top-20 sm:scale-100">
        <MiniCard
          className="bg-gradient-to-br from-rose-500 to-orange-400"
          anim="animate-wallet-a"
          last4="8841" brand="VISA"
        />
        <MiniCard
          className="bg-gradient-to-br from-emerald-500 to-cyan-500"
          anim="animate-wallet-b"
          last4="5309" brand="MASTERCARD"
        />
        <MiniCard
          className="bg-gradient-to-br from-zinc-700 to-zinc-900"
          anim="animate-wallet-c"
          last4="4242" brand="TROY" shine
        />
      </div>

      <FloatChip className="left-5 top-6" delay="0s">🔒 Şifreli</FloatChip>
      <FloatChip className="right-5 top-16" delay="1.2s">📴 Çevrimdışı</FloatChip>
      <FloatChip className="right-8 top-[58%]" delay="2.4s">✓ KVKK</FloatChip>

      {/* PIN noktaları sırayla dolar */}
      <div className="absolute left-6 top-[62%] flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-2 backdrop-blur-md">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="animate-wallet-pin h-2.5 w-2.5 rounded-full bg-white" style={{ animationDelay: `${i * 0.35}s` }} />
        ))}
      </div>
    </div>
  )
}

function Card({ w }) {
  const Tag = w.link ? 'a' : 'div'
  const extra = w.link ? { href: w.link, target: '_blank', rel: 'noreferrer' } : {}
  return (
    <Tag
      {...extra}
      className={`group relative block min-h-64 overflow-hidden rounded-3xl border border-white/50 bg-white/40 shadow-xl backdrop-blur-xl transition duration-500 hover:z-10 hover:scale-[1.03] hover:shadow-2xl dark:border-white/10 dark:bg-white/5 ${w.glow} ${w.span ?? ''}`}
    >
      {w.image ? (
        // Geniş kapaklar telefonda yanlardan kırpılır; mobileImage varsa dar ekranda o kullanılır
        <picture>
          {w.mobileImage && <source media="(max-width: 639px)" srcSet={w.mobileImage} />}
          <img
            src={w.image}
            alt={w.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
          />
        </picture>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${w.gradient}`}>
          <CardStackPreview />
        </div>
      )}
      {/* Renkli parlama katmanı */}
      <div className={`absolute inset-0 bg-gradient-to-br ${w.gradient} opacity-0 mix-blend-soft-light transition duration-500 group-hover:opacity-80`} />
      {/* Açık renkli kapaklarda başlığın okunması için örtü daha koyu tutulur */}
      <div className={`absolute inset-0 bg-gradient-to-t ${w.lightCover ? 'from-black/95 via-black/60 to-black/10' : 'from-black/85 via-black/30 to-transparent'}`} />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="text-2xl font-black sm:text-3xl">{w.title}</h3>
        <span className={`mt-2 inline-block rounded-full bg-gradient-to-r ${w.gradient} px-3 py-1 text-xs font-bold`}>
          {w.tag}
        </span>
        <p className="mt-2 max-h-0 overflow-hidden text-sm font-medium text-white/90 opacity-0 transition-all duration-500 [@media(hover:none)]:max-h-32 [@media(hover:none)]:opacity-100 group-hover:max-h-32 group-hover:opacity-100">
          {w.text}
          {w.link && <span className="mt-2 block font-bold">İncele ↗</span>}
        </p>
      </div>
    </Tag>
  )
}

export default function Works() {
  return (
    <section id="calismalar" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h2 className="text-center text-4xl font-black tracking-tight sm:text-6xl">
        <span className="text-fuchsia-500 dark:text-fuchsia-400">
          Seçili Çalışmalarım
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center font-medium text-slate-600 dark:text-slate-300">
        Detaylar için kartların üzerine gel ya da dokun.
      </p>

      <div className="mt-10 grid auto-rows-[18rem] gap-5 sm:grid-cols-4">
        {works.map((w) => (
          <Card key={w.title} w={w} />
        ))}
      </div>
    </section>
  )
}








