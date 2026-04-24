import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { Button } from '@/components/ui/button'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  const { scrollTo } = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    scrollTo(0, { duration: 1 })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[90] size-12 rounded-full border-border/70 bg-background/85 shadow-lg backdrop-blur-md"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
