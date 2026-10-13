export default function Hero() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <div className="rounded-full border border-white/40 bg-white/40 px-5 py-2 text-sm font-semibold shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
        <span className="mr-2">👋</span>
        Merhaba
      </div>

      <h1 className="animate-gradient mt-8 bg-gradient-to-r from-fuchsia-500 via-orange-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-5xl font-black leading-tight tracking-tight text-transparent sm:text-8xl md:text-9xl">
        Gökalp Vural
      </h1>

      <p className="mt-6 max-w-xl text-lg font-semibold text-slate-600 sm:text-2xl dark:text-slate-300">
        Mobil, web ve video dünyasında fikirleri ürüne dönüştürüyorum.
      </p>

      <a
        href="#hakkimda"
        className="mt-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-8 py-4 text-lg font-extrabold text-white shadow-xl shadow-fuchsia-500/30 transition hover:scale-105 active:scale-95"
      >
        Beni Tanı ↓
      </a>
    </section>
  )
}
