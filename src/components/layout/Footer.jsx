import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import BrandLockup from '@/components/brand/BrandLockup'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { navLinks, serviceLines, siteConfig, trustIndicators } from '@/data/site'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="page-shell"
      >
        <div className="section-band px-6 py-8 sm:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.7fr)_minmax(0,0.8fr)_minmax(0,0.95fr)]">
            <motion.div variants={fadeUp} className="space-y-4">
              <BrandLockup />
              <Badge
                variant="outline"
                className="rounded-full border-border/70 bg-background/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground"
              >
                Billion-dollar startup quality bar
              </Badge>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                RYNX builds premium websites, product surfaces, and launch-ready systems for teams
                that need higher trust at first impression.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
                  <Mail className="size-4" />
                  {siteConfig.email}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" />
                  {siteConfig.location}
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="eyebrow">Navigation</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                {navLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="transition hover:text-foreground">
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="eyebrow">Focus areas</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                {serviceLines.map((service) => (
                  <p key={service.id}>{service.title}</p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <p className="eyebrow">Trust markers</p>
              <div className="space-y-2">
                {trustIndicators.map((item) => (
                  <div key={item} className="trust-chip justify-start">
                    <span className="trust-chip__dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 sm:flex-row xl:flex-col">
                <Button asChild variant="outline" className="justify-between rounded-full sm:flex-1 xl:w-full">
                  <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
                    View GitHub
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button asChild className="justify-between rounded-full sm:flex-1 xl:w-full">
                  <Link to="/contact">
                    Start a brief
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-col gap-3 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
            <p>© {new Date().getFullYear()} RYNX. Premium, responsive, and Vercel ready.</p>
            <p>Built with React, Tailwind CSS, shadcn/ui, Framer Motion, Lenis, and modern component primitives.</p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
