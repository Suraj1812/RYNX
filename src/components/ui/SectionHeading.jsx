import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { fadeUp } from '@/utils/animations'

export default function SectionHeading({ label, title, subtitle, center = true, className = '' }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`${center ? 'mx-auto text-center' : ''} ${className}`}
    >
      {label && (
        <Badge variant="outline" className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
          {label}
        </Badge>
      )}
      <h2 className="section-title mt-4 max-w-4xl">
        <span className={center ? 'mx-auto block' : 'block'}>{title}</span>
      </h2>
      {subtitle && (
        <p className={`section-copy mt-4 ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
