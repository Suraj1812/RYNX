import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[120] h-[2px] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, var(--primary), var(--accent))',
      }}
    />
  )
}
