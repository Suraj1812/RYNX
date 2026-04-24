import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[120] h-[3px] origin-left"
      style={{
        scaleX: scrollYProgress,
        background:
          'linear-gradient(90deg, color-mix(in srgb, var(--primary) 88%, white 12%), color-mix(in srgb, var(--accent) 76%, var(--primary) 24%))',
        boxShadow: '0 0 22px color-mix(in srgb, var(--primary) 28%, transparent)',
      }}
    />
  )
}
