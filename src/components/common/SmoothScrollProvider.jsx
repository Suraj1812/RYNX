import { useCallback, useEffect, useMemo, useRef } from 'react'
import Lenis from 'lenis'
import { SmoothScrollContext } from '@/context/SmoothScrollContext'

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.075,
      wheelMultiplier: 0.9,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.06,
      touchMultiplier: 1.05,
      touchInertiaExponent: 1.5,
      stopInertiaOnNavigate: true,
    })

    lenisRef.current = lenis

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollTo = useCallback((target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options)
      return
    }

    const top = typeof target === 'number' ? target : 0
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  const value = useMemo(
    () => ({
      scrollTo,
    }),
    [scrollTo],
  )

  return <SmoothScrollContext.Provider value={value}>{children}</SmoothScrollContext.Provider>
}
