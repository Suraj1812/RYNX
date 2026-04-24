import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orb 1 */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric/8 rounded-full blur-[120px]" />
        {/* Gradient orb 2 */}
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-electric/5 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-soft-gray mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
              Building Software That Scales
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white"
            >
              Build Software{' '}
              <br className="hidden sm:block" />
              That Powers{' '}
              <span className="gradient-text-blue">Growth</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-soft-gray text-base sm:text-lg max-w-lg leading-relaxed"
            >
              We create modern digital systems for ambitious businesses — from custom software and SaaS products to AI-driven automation platforms.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-electric text-white text-sm font-medium rounded-xl hover:bg-electric-light transition-all duration-300 shadow-lg shadow-electric/20 hover:shadow-electric/30"
              >
                Start Project
                <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white text-sm font-medium rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                View Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            {/* Main dashboard card */}
            <div className="relative">
              <div className="bg-[#111111] rounded-2xl border border-[#222222] p-6 shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                  <div className="ml-4 flex-1 h-6 bg-white/5 rounded-lg" />
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Revenue', value: '$84.2K', change: '+24%', color: 'text-green-400' },
                    { label: 'Users', value: '12,847', change: '+18%', color: 'text-green-400' },
                    { label: 'Growth', value: '94.2%', change: '+8%', color: 'text-green-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/3 rounded-xl p-3 border border-white/5">
                      <p className="text-soft-gray text-[10px] uppercase tracking-wider">{stat.label}</p>
                      <p className="text-white font-semibold text-lg mt-1">{stat.value}</p>
                      <p className={`text-[11px] ${stat.color} mt-0.5`}>{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="bg-white/3 rounded-xl p-4 border border-white/5">
                  <div className="flex items-end gap-1.5 h-24">
                    {[35, 55, 40, 70, 50, 80, 65, 90, 75, 95, 85, 60].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-electric/40 rounded-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-4 bg-[#111111] rounded-xl border border-[#222222] p-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-electric/20 flex items-center justify-center">
                    <span className="text-electric text-xs">📈</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">Performance</p>
                    <p className="text-green-400 text-[10px]">+42% this month</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-[#111111] rounded-xl border border-[#222222] p-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <span className="text-xs">✅</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">Deploy Success</p>
                    <p className="text-soft-gray text-[10px]">2 minutes ago</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
