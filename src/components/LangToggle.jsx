import { useLang } from '../lang.js'

// Türk bayrağı (3:2 oranlı, yuvarlak kesimde ortası görünür).
function TurkishFlag() {
  return (
    <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11" cy="10" r="5" fill="#fff" />
      <circle cx="12.4" cy="10" r="4" fill="#E30A17" />
      <polygon
        transform="translate(16.5 10) rotate(-90)"
        fill="#fff"
        points="0,-2.2 0.529,-0.728 2.092,-0.68 0.856,0.278 1.293,1.78 0,0.9 -1.293,1.78 -0.856,0.278 -2.092,-0.68 -0.529,-0.728"
      />
    </svg>
  )
}

// İngilizce için sol yarısı Birleşik Krallık, sağ yarısı ABD bayrağı olan tek rozet.
function EnglishFlag() {
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden>
      <defs>
        <clipPath id="flag-uk">
          <rect x="0" y="0" width="20" height="40" />
        </clipPath>
        <clipPath id="flag-us">
          <rect x="20" y="0" width="20" height="40" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-uk)">
        <rect width="40" height="40" fill="#012169" />
        <path d="M0 0L40 40M40 0L0 40" stroke="#fff" strokeWidth="7" />
        <path d="M0 0L40 40M40 0L0 40" stroke="#C8102E" strokeWidth="2.5" />
        <path d="M20 0V40M0 20H40" stroke="#fff" strokeWidth="11" />
        <path d="M20 0V40M0 20H40" stroke="#C8102E" strokeWidth="6.5" />
      </g>
      <g clipPath="url(#flag-us)">
        <rect width="40" height="40" fill="#fff" />
        {Array.from({ length: 7 }, (_, i) => (
          <rect key={i} x="20" y={(i * 2 * 40) / 13} width="20" height={40 / 13} fill="#B22234" />
        ))}
        <rect x="20" y="0" width="13" height="21.5" fill="#3C3B6E" />
        {[0, 1, 2, 3].flatMap((c) =>
          [0, 1, 2].map((r) => <circle key={`${c}-${r}`} cx={23 + c * 3} cy={4.5 + r * 6} r="0.9" fill="#fff" />),
        )}
      </g>
      <line x1="20" y1="0" x2="20" y2="40" stroke="#fff" strokeWidth="0.8" />
    </svg>
  )
}

const options = [
  { code: 'tr', label: 'Türkçe', Flag: TurkishFlag },
  { code: 'en', label: 'English', Flag: EnglishFlag },
]

// Sol üstteki dil anahtarı: seçili dilin bayrağı belirgin, diğeri soluk görünür.
export default function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div role="group" aria-label="Language" className="fixed left-5 top-5 z-50 flex gap-3">
      {options.map(({ code, label, Flag }) => {
        const active = lang === code
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-label={label}
            aria-pressed={active}
            title={label}
            className={`h-12 w-12 cursor-pointer overflow-hidden rounded-full border-2 shadow-lg backdrop-blur-xl transition hover:scale-110 active:scale-95 ${
              active
                ? 'border-fuchsia-500 ring-2 ring-fuchsia-500/40'
                : 'border-white/60 opacity-60 hover:opacity-100 dark:border-white/20'
            }`}
          >
            <Flag />
          </button>
        )
      })}
    </div>
  )
}
