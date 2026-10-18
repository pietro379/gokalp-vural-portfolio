import { createContext, useContext } from 'react'

// Sitenin iki dilli metinleri. Proje kartlarının ve yetenek kartlarının metinleri
// kendi bileşenlerinde durur; burada ortak ve kısa metinler bulunur.
export const copy = {
  tr: {
    title: 'Gökalp Vural | Portfolyo',
    description:
      "Gökalp Vural: Ankara'da junior yazılım geliştirici. Flutter, React ve Node.js ile uygulamalar geliştiriyor.",
    themeToLight: 'Açık temaya geç',
    themeToDark: 'Koyu temaya geç',
    switchLabel: 'Switch to English',
    switchShort: 'EN',
    hello: 'Merhaba',
    heroRole: "Ankara'da junior yazılım geliştirici.",
    heroText: 'Flutter, React ve Node.js ile uygulamalar geliştiriyorum. Staj ve junior pozisyonlara açığım.',
    downloadCv: "CV'yi indir ↓",
    aboutMe: 'Beni Tanı',
    buildOk: 'Derleme başarılı',
    typing: 'yazılıyor…',
    codeKeys: { role: 'rol', city: 'sehir', tech: 'teknoloji', projects: 'projeler' },
    roleValue: "'Junior yazılım geliştirici'",
    aboutHeading: 'Hakkımda',
    aboutText:
      'Bilgisayar Programcılığı mezunuyum. Flutter ile çevrimdışı çalışan şifreli bir kart cüzdanı, React ve Node.js ile bir görev yönetim uygulaması (Taskboard) yazdım. Temiz kod yazmaya ve arayüzlerin kullanımı kolay, düzenli ve hızlı olmasına özen gösteririm.',
    worksHeading: 'Seçili Çalışmalarım',
    worksHint: 'Detaylar için kartların üzerine gel ya da dokun.',
    view: 'İncele ↗',
    viewProject: (title) => `${title} projesini incele`,
    openSourceHeading: 'Açık Kaynak Projelerim',
    openSourceHint:
      'GitHub profilimdeki tüm repolar canlı çekiliyor. Üzerine gelince akış durur, tıklayınca repoya gidersin.',
    openSourceError: 'Repolar şu an yüklenemedi (GitHub API sınırı olabilir). Biraz sonra tekrar dene.',
    noDescription: 'Açıklama eklenmemiş.',
    otherLanguage: 'Diğer',
  },
  en: {
    title: 'Gökalp Vural | Portfolio',
    description:
      'Gökalp Vural: junior software developer in Ankara, Turkey. Builds apps with Flutter, React and Node.js.',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    switchLabel: "Türkçe'ye geç",
    switchShort: 'TR',
    hello: 'Hello',
    heroRole: 'Junior software developer based in Ankara.',
    heroText: 'I build apps with Flutter, React and Node.js. Open to internship and junior positions.',
    downloadCv: 'Download CV (Turkish) ↓',
    aboutMe: 'About me',
    buildOk: 'Build succeeded',
    typing: 'typing…',
    codeKeys: { role: 'role', city: 'city', tech: 'tech', projects: 'projects' },
    roleValue: "'Junior software developer'",
    aboutHeading: 'About me',
    aboutText:
      'I graduated in Computer Programming. I built an offline, encrypted card wallet with Flutter and a task management app (Taskboard) with React and Node.js. I care about clean code and interfaces that are easy to use, tidy and fast.',
    worksHeading: 'Selected Work',
    worksHint: 'Hover or tap the cards for details.',
    view: 'View ↗',
    viewProject: (title) => `View the ${title} project`,
    openSourceHeading: 'Open Source Projects',
    openSourceHint:
      'Every repository on my GitHub profile is fetched live. The feed pauses on hover; click to open the repo.',
    openSourceError: 'Repositories could not be loaded right now (possibly the GitHub API rate limit). Please try again shortly.',
    noDescription: 'No description.',
    otherLanguage: 'Other',
  },
}

export const LangContext = createContext({ lang: 'tr', t: copy.tr, setLang: () => {} })

export function useLang() {
  return useContext(LangContext)
}
