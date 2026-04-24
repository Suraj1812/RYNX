import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  LayoutPanelTop,
  MonitorSmartphone,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import heroImage from '@/assets/hero.png'
import PreviewFrame from '@/components/common/PreviewFrame'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { caseStudies, homeStats, proofPoints, serviceLines } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp, staggerContainer } from '@/utils/animations'

const serviceIcons = {
  'brand-sites': MonitorSmartphone,
  'product-platforms': LayoutPanelTop,
  automation: Workflow,
  'launch-readiness': ShieldCheck,
}

const heroVisuals = [
  {
    label: 'Brand',
    title: 'Cleaner brand surfaces',
    src: '/visual-brand-motion.svg',
  },
  {
    label: 'Ops',
    title: 'Motion-backed product UI',
    src: '/visual-automation-motion.svg',
  },
]

export default function Home() {
  usePageMeta({
    title: 'Home',
    description:
      'RYNX builds premium websites, software surfaces, and launch-ready digital systems for teams that want a cleaner, more credible online presence.',
    path: '/',
  })

  return (
    <PageWrapper>
      <section className="page-shell">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
                Less copy, more visual
              </Badge>
              <Badge variant="outline" className="rounded-full border-border/70 bg-secondary/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                Light and dark mode
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeUp} className="display-title max-w-4xl">
              Premium digital systems with <span className="text-primary">real visuals</span>, cleaner pacing, and less AI-made noise.
            </motion.h1>

            <motion.p variants={fadeUp} className="section-copy max-w-2xl">
              RYNX takes brands and product surfaces from generic to sharp, responsive, and
              launch-ready without filling every section with blocks of copy.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="h-12 rounded-full px-6 sm:w-auto">
                <Link to="/contact">
                  Start a project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6 sm:w-auto">
                <Link to="/projects">See the work</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {proofPoints.map((point) => (
                <Badge
                  key={point}
                  variant="outline"
                  className="rounded-full border-border/70 bg-background/80 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {point}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="relative grid gap-4"
          >
            <div className="ambient-orb left-[-4%] top-[8%] size-28 bg-primary/22 xl:size-36" />
            <div className="ambient-orb right-[2%] top-[-2%] size-32 bg-amber-300/18 xl:size-40" style={{ animationDelay: '-4s' }} />
            <div className="ambient-orb bottom-[12%] right-[18%] size-24 bg-sky-300/18 xl:size-28" style={{ animationDelay: '-7s' }} />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="floating-depth-card absolute -left-4 top-6 hidden max-w-[12rem] xl:block"
            >
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/55">
                Depth Layer
              </p>
              <p className="mt-2 text-sm font-medium tracking-[-0.02em]">
                3D motion with restrained styling
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="floating-depth-card absolute -right-4 bottom-20 hidden max-w-[11rem] xl:block"
              style={{ animationDelay: '-5s' }}
            >
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/55">
                Responsive
              </p>
              <p className="mt-2 text-sm font-medium tracking-[-0.02em]">
                Built to feel dimensional on desktop and mobile
              </p>
            </motion.div>

            <PreviewFrame
              src={heroImage}
              alt="Layered product visual for the RYNX homepage"
              dark
              priority
              ratioClassName="aspect-[4/3] sm:aspect-[16/10]"
              imgClassName="object-contain p-8 sm:p-10"
              className="shadow-[0_34px_110px_-46px_rgba(15,23,42,0.72)]"
            >
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/60">
                    Hero visual
                  </p>
                  <p className="mt-2 max-w-xs text-lg font-semibold tracking-[-0.03em] text-white">
                    Bigger visual signal. Less filler.
                  </p>
                </div>
                <Badge className="rounded-full bg-white/12 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-white shadow-none">
                  Desktop + mobile
                </Badge>
              </div>
            </PreviewFrame>

            <div className="grid gap-4 sm:grid-cols-2">
              {heroVisuals.map((item) => (
                <PreviewFrame
                  key={item.title}
                  src={item.src}
                  alt={item.title}
                  dark
                  ratioClassName="aspect-[16/11]"
                  className="shadow-[0_28px_80px_-44px_rgba(15,23,42,0.62)]"
                >
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[0.64rem] uppercase tracking-[0.22em] text-white/55">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">{item.title}</p>
                  </div>
                </PreviewFrame>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="page-shell mt-8 sm:mt-10">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {homeStats.map((stat) => (
            <Card key={stat.label} className="card-lift rounded-[24px] border-border/70 bg-card/92 py-0 shadow-none">
              <CardContent className="px-5 py-5">
                <p className="stat-value">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Services"
          title="Visual-first lanes that still ship cleanly."
          subtitle="Each lane is designed to feel sharper on first view and more stable in production."
        />

        <div className="grid gap-4 xl:grid-cols-2">
          {serviceLines.map((service) => {
            const Icon = serviceIcons[service.id] ?? LayoutPanelTop

            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <Card className="card-lift h-full rounded-[28px] border-border/70 bg-card/92 py-0 shadow-none">
                  <div className="p-3 pb-0">
                    <PreviewFrame
                      src={service.media}
                      alt={`${service.title} visual`}
                      dark
                      ratioClassName="aspect-[16/10]"
                      className="rounded-[24px]"
                    >
                      <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-2xl bg-white/12 text-white backdrop-blur-sm">
                        <Icon className="size-5" />
                      </div>
                    </PreviewFrame>
                  </div>
                  <CardHeader className="gap-3 px-6 pt-6">
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="outline" className="rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {service.id.replace('-', ' ')}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl tracking-[-0.03em]">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-7">{service.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-6 pb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.outcomes.slice(0, 3).map((outcome) => (
                        <Badge key={outcome} variant="secondary" className="rounded-full px-3 py-1 text-[0.74rem] text-foreground">
                          {outcome}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="ghost" className="h-11 rounded-full px-0 text-sm">
                      <Link to="/contact">
                        Book this lane
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Selected Work"
          title="A few quick visual reads."
          subtitle="Open the full work page for the detailed case studies."
        />

        <div className="grid gap-4 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <Card className="card-lift h-full rounded-[28px] border-border/70 bg-card/92 py-0 shadow-none">
                <div className="p-3 pb-0">
                  <PreviewFrame
                    src={study.media}
                    alt={`${study.title} preview`}
                    dark
                    ratioClassName="aspect-[16/10]"
                    className="rounded-[24px]"
                  />
                </div>
                <CardHeader className="px-6 pt-6">
                  <Badge variant="outline" className="w-fit rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {study.category}
                  </Badge>
                  <CardTitle className="pt-3 text-xl tracking-[-0.03em]">{study.title}</CardTitle>
                  <CardDescription className="text-sm leading-7">{study.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-6 pb-6">
                  <div className="grid gap-2">
                    {study.impact.slice(0, 2).map((item) => (
                      <div key={item.label} className="rounded-2xl border border-border/70 bg-secondary/65 px-4 py-3">
                        <p className="text-base font-semibold tracking-[-0.04em]">{item.value}</p>
                        <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="h-11 rounded-full px-5">
                    <Link to="/projects">
                      Full case study
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="page-shell page-section pb-12">
        <div className="surface-panel flex flex-col gap-6 px-6 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <Badge variant="outline" className="rounded-full border-border/70 bg-secondary/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
              Make it visual
            </Badge>
            <h2 className="section-title max-w-3xl">
              If the site still feels too text-heavy, we can push it even further into image-led direction.
            </h2>
            <p className="section-copy max-w-2xl">
              Better assets, better proof, and stronger motion usually do more than another paragraph.
            </p>
          </div>
          <Button asChild size="lg" className="h-12 rounded-full px-6 sm:w-auto">
            <Link to="/contact">
              Let&apos;s make it sharper
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  )
}
