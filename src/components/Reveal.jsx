import { useEffect, useRef, useState } from 'react'

// Bölüm ekrana girerken yumuşakça büyüyerek belirir (bir kez)
function skipMotion() {
  return (
    typeof IntersectionObserver === 'undefined' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function Reveal({ children }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(skipMotion)

  useEffect(() => {
    if (shown) return
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [shown])

  return (
    <div ref={ref} className={`reveal${shown ? ' is-shown' : ''}`}>
      {children}
    </div>
  )
}
