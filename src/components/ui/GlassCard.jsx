import { motion } from 'framer-motion'
import { cardHover } from '@/utils/animations'

export default function GlassCard({ children, className = '', hover = true, glow = false, ...props }) {
  return (
    <motion.div
      variants={hover ? cardHover : undefined}
      initial={hover ? 'rest' : undefined}
      whileHover={hover ? 'hover' : undefined}
      className={`
        relative overflow-hidden
        bg-[#111111] border border-[#222222]
        rounded-2xl p-6 sm:p-8
        transition-all duration-400
        ${glow ? 'animated-border' : ''}
        ${hover ? 'hover:border-[#333333] hover:shadow-2xl hover:shadow-electric/5' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}
