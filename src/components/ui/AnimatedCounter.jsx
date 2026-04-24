import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', label, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center"
    >
      <div className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
        {count}
        <span className="text-electric">{suffix}</span>
      </div>
      <div className="text-soft-gray text-sm sm:text-base tracking-wide">
        {label}
      </div>
    </motion.div>
  )
}
