import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [prevOffset, setPrevOffset] = useState(0)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const threshold = 10
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - prevOffset) < threshold) {
        ticking = false
        return
      }

      setScrollDirection(scrollY > prevOffset ? 'down' : 'up')
      setPrevOffset(scrollY)
      setIsAtTop(scrollY < 50)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [prevOffset])

  return { scrollDirection, isAtTop }
}
