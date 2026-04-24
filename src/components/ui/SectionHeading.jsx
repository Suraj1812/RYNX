import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'

export default function SectionHeading({ label, title, subtitle, center = true, className = '' }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`section-heading ${center ? 'section-heading--center' : ''} ${className}`}
    >
      {label && (
        <span className="section-eyebrow">
          {label}
        </span>
      )}
      <h2 className="section-title">
        {title}
      </h2>
      {subtitle && (
        <p className="section-copy">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
