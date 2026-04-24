import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('logo') // logo → loading → reveal

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('loading'), 600)
    const timer2 = setTimeout(() => setPhase('reveal'), 1500)
    const timer3 = setTimeout(() => onComplete(), 2000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'reveal' && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Glow behind logo */}
          <motion.div
            className="absolute w-40 h-40 bg-electric/20 rounded-full blur-[80px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Logo text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10"
          >
            <h1 className="font-heading text-5xl sm:text-6xl font-bold tracking-[0.3em] text-white">
              RYNX
            </h1>
          </motion.div>

          {/* Loading bar */}
          {phase === 'loading' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-electric rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
