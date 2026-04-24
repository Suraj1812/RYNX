import { useCallback, useEffect, useMemo, useRef } from 'react'
import Lenis from 'lenis'
import { SmoothScrollContext } from '@/context/SmoothScrollContext'

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.2,
      easing: (value) => 1 - Math.pow(1 - value, 4),
    })

    lenisRef.current = lenis

    let frameId = 0
    const raf = (time) => {
      lenis.raf(time)
      frameId = window.requestAnimationFrame(raf)
    }

    frameId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(frameId)
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
