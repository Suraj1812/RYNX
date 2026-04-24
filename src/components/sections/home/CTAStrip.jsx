import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { fadeUp } from '@/utils/animations'

export default function CTAStrip() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electric/8 rounded-full blur-[150px]" />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-container text-center relative z-10"
      >
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Ready to build something
          <br />
          <span className="gradient-text-blue">powerful?</span>
        </h2>
        <p className="mt-6 text-soft-gray text-base sm:text-lg max-w-xl mx-auto">
          Let's discuss your next project and turn your vision into a high-performance digital product.
        </p>
        <div className="mt-10">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-electric text-white text-sm font-medium rounded-xl hover:bg-electric-light transition-all duration-300 shadow-lg shadow-electric/25 hover:shadow-electric/35"
          >
            Start Your Project
            <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
