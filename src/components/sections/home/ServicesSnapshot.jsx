import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/utils/animations'
import { servicesSnapshot } from '@/data/services'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'

export default function ServicesSnapshot() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="What We Do"
          title="Services Built for Scale"
          subtitle="We deliver end-to-end digital solutions engineered for growth, performance, and lasting impact."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {servicesSnapshot.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.id} variants={fadeUp}>
                <GlassCard glow className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5 group-hover:bg-electric/20 transition-colors">
                    <Icon className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-soft-gray text-sm leading-relaxed">{service.description}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
