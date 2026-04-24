import { motion } from 'framer-motion'

const items = [
  'Startups', 'Enterprise', 'Founders', 'Teams', 'Brands',
  'Agencies', 'Scale-ups', 'Innovators',
]

export default function TrustedMarquee() {
  const doubled = [...items, ...items]

  return (
    <section className="py-16 md:py-20 border-y border-white/5 overflow-hidden">
      <div className="mask-gradient">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-soft-gray/40 text-sm sm:text-base font-medium tracking-widest uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
