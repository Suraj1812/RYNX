import { motion } from 'framer-motion'
import { pageTransition } from '@/utils/animations'

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative pt-24"
    >
      {children}
    </motion.div>
  )
}
