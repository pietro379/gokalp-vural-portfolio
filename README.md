# Gökalp Vural | Portfolyo

Ankara'da yaşayan junior yazılım geliştirici Gökalp Vural'ın kişisel portfolyo sitesi.
Önceki görünüm `v1-archive` etiketinde saklanıyor.

## Özellikler

- **Hero:** Harf harf yazılan kod penceresi animasyonu, kademeli sayfa açılışı, CV indirme düğmesi
- **Hakkımda:** Renk kodlu beceri etiketleri ve kısa istatistikler
- **Seçili çalışmalarım:** Proje kartları (Flutter, React, Node.js, Python, JavaScript, Java)
- **Açık kaynak:** GitHub API'sinden canlı çekilen, üç satırlı kayan repo şeridi
- Açık/koyu tema (sistem tercihini ve kullanıcı seçimini hatırlar)
- Mobil uyumlu, klavye ile gezilebilir, `prefers-reduced-motion` desteği
- Proje görselleri WebP: toplam boyut yaklaşık 2,2 MB'tan 307 KB'a indi

## Teknolojiler

React 19, Vite, Tailwind CSS 4, oxlint. Yazı tipleri: Bricolage Grotesque ve IBM Plex Sans (Google Fonts).

## Çalıştırma

```bash
npm install
npm run dev      # geliştirme sunucusu
npm run build    # üretim derlemesi (dist/)
npm run preview  # derlemeyi yerelde önizle
npm run lint     # oxlint
```

## Yapı

```
src/
  App.jsx                 tema yönetimi ve sayfa iskeleti
  index.css               tema renkleri, animasyonlar, arka plan katmanları
  components/
    Hero.jsx              giriş ve kod penceresi animasyonu
    About.jsx             hakkımda, istatistikler ve beceriler
    Works.jsx             proje kartları (works dizisi)
    OpenSource.jsx        GitHub repolarının kayan şeridi
    ThemeToggle.jsx       açık/koyu tema düğmesi
public/
  works/                  proje kapak görselleri (WebP)
  Gokalp_Vural_CV.pdf     indirilebilir CV
```

Yeni bir proje eklemek için `src/components/Works.jsx` içindeki `works` dizisine kayıt eklenir,
kapak görseli `public/works/` klasörüne konur.
