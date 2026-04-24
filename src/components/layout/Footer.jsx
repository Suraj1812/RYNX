import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { navLinks, serviceLines, siteConfig } from '@/data/site'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="surface-panel px-6 py-8 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.8fr]">
            <motion.div variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  R
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-[-0.03em]">RYNX</p>
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Digital Systems
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="rounded-full border-border/70 bg-secondary/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                Library-driven redesign
              </Badge>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                RYNX builds premium websites, internal platforms, and launch-ready digital
                systems for teams that want to look more established online.
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
              <p className="eyebrow">Focus Areas</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                {serviceLines.slice(0, 4).map((service) => (
                  <p key={service.id}>{service.title}</p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <p className="eyebrow">Repository</p>
              <p className="text-sm leading-7 text-muted-foreground">
                The project is prepared for Vercel deployment with production metadata, theme support, and a serverless contact flow.
              </p>
              <div className="flex flex-col gap-2">
                <Button asChild variant="outline" className="justify-between rounded-full">
                  <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
                    View GitHub
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button asChild className="justify-between rounded-full">
                  <Link to="/contact">
                    Start a brief
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} RYNX. Production-ready and Vercel aligned.</p>
            <p>Built with shadcn, Tailwind, lucide-react, and motion.</p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
