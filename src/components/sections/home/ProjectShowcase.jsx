import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer } from '@/utils/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'

export default function ProjectShowcase() {
  const featured = projects.slice(0, 3)

  return (
    <section className="py-24 md:py-32 bg-charcoal/50">
      <div className="section-container">
        <SectionHeading
          label="Our Work"
          title="Projects That Deliver Results"
          subtitle="Real products built for real businesses. Here's a glimpse of what we create."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <div className="group relative bg-[#111111] rounded-2xl border border-[#222222] overflow-hidden hover:border-[#333333] transition-all duration-500 h-full flex flex-col">
                {/* Color bar */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: project.color }}
                />

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* Category badge */}
                  <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-soft-gray mb-4">
                    {project.category}
                  </span>

                  <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-electric transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-soft-gray text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <p className="text-white font-semibold text-sm">{metric.value}</p>
                        <p className="text-soft-gray/60 text-[10px] uppercase tracking-wider mt-0.5">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-soft-gray hover:text-white text-sm font-medium transition-colors duration-300 group"
          >
            View All Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
