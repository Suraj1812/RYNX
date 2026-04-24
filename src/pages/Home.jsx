import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bot,
  Building2,
  LayoutPanelTop,
  MonitorSmartphone,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  caseStudies,
  homeStats,
  processSteps,
  proofPoints,
  serviceLines,
} from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp, staggerContainer } from '@/utils/animations'

const differentiators = [
  {
    icon: Building2,
    title: 'Enterprise signal',
    description:
      'Typography, spacing, structure, and motion are tuned to feel credible in front of buyers, operators, and leadership.',
  },
  {
    icon: Workflow,
    title: 'Operational clarity',
    description:
      'The frontend is designed to support real handoffs, clean navigation, and future growth instead of one-off visual drama.',
  },
  {
    icon: Bot,
    title: 'No AI-template energy',
    description:
      'The layouts are restrained, systems-led, and dependency-backed so the site reads like a product organization, not a generated landing page.',
  },
]

const serviceIcons = {
  'brand-sites': MonitorSmartphone,
  'product-platforms': LayoutPanelTop,
  automation: Workflow,
  'launch-readiness': ShieldCheck,
}

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
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
                Rebuilt on dependencies
              </Badge>
              <Badge variant="outline" className="rounded-full border-border/70 bg-secondary/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                Light and dark mode
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeUp} className="display-title max-w-4xl">
              Digital systems that look <span className="text-primary">expensive</span>, ship cleanly, and stop giving AI-generated first impressions.
            </motion.h1>

            <motion.p variants={fadeUp} className="section-copy max-w-3xl">
              RYNX helps ambitious teams move from generic-looking web presence to a more
              structured, corporate-grade digital layer using a real component system, modern
              frontend dependencies, and production-ready delivery for Vercel.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="h-12 rounded-full px-6 sm:w-auto">
                <Link to="/contact">
                  Start a project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6 sm:w-auto">
                <Link to="/projects">Review selected work</Link>
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
            className="surface-panel p-4 sm:p-5 lg:p-6"
          >
            <div className="grid gap-4">
              <Card className="rounded-[24px] border-border/70 bg-card/92 py-0 shadow-none">
                <CardHeader className="px-5 pt-5">
                  <CardTitle>What changed in this rebuild</CardTitle>
                  <CardDescription>
                    The frontend is now aligned around a stronger component stack instead of a mostly handcrafted visual layer.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-5 pb-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {homeStats.map((stat) => (
                      <div key={stat.label} className="rounded-[20px] border border-border/70 bg-secondary/70 p-4">
                        <p className="stat-value">{stat.value}</p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {differentiators.map((item) => {
                  const Icon = item.icon

                  return (
                    <Card key={item.title} className="rounded-[24px] border-border/70 bg-card/90 py-0 shadow-none">
                      <CardHeader className="px-4 pt-4">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <CardTitle className="pt-3 text-sm">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 pb-4 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Service Lanes"
          title="The work now sits on a proper UI foundation, not a stitched-together landing page aesthetic."
          subtitle="Each lane is built to feel premium, reusable, and more productized in the long run."
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
                <Card className="h-full rounded-[28px] border-border/70 bg-card/92 py-0 shadow-none">
                  <CardHeader className="gap-3 px-6 pt-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <Badge variant="outline" className="rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {service.id.replace('-', ' ')}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl tracking-[-0.03em]">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-7">{service.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-6 pb-6">
                    <div className="grid gap-2">
                      {service.outcomes.map((outcome) => (
                        <div key={outcome} className="rounded-2xl border border-border/70 bg-secondary/65 px-4 py-3 text-sm text-muted-foreground">
                          {outcome}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable) => (
                        <Badge key={deliverable} variant="secondary" className="rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em]">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="page-shell page-section">
        <div className="surface-panel p-6 sm:p-8">
          <SectionHeading
            label="Delivery Model"
            title="How the work stays structured instead of drifting back into template territory."
            subtitle="The stack is dependency-led, but the judgment still comes from how the system is composed."
            center={false}
            className="mb-8"
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <Card key={step.title} className="rounded-[24px] border-border/70 bg-card/92 py-0 shadow-none">
                <CardHeader className="px-5 pt-5">
                  <Badge variant="outline" className="w-fit rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.2em] text-primary/80">
                    Step {index + 1}
                  </Badge>
                  <CardTitle className="pt-3 text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Selected Engagements"
          title="Representative work that matches the visual and delivery standard we’re aiming for."
          subtitle="Not startup-noise layouts. Structured digital surfaces with clearer hierarchy and more stable handoff."
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
              <Card className="h-full rounded-[28px] border-border/70 bg-card/92 py-0 shadow-none">
                <CardHeader className="px-6 pt-6">
                  <Badge variant="outline" className="w-fit rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {study.category}
                  </Badge>
                  <CardTitle className="pt-3 text-xl tracking-[-0.03em]">{study.title}</CardTitle>
                  <CardDescription className="text-sm leading-7">{study.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-6 pb-6">
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {study.impact.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-border/70 bg-secondary/65 p-4">
                        <p className="text-lg font-semibold tracking-[-0.04em]">{item.value}</p>
                        <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <Badge key={service} variant="secondary" className="rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em]">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="page-shell page-section pb-12">
        <div className="surface-panel flex flex-col gap-6 px-6 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <Badge variant="outline" className="rounded-full border-border/70 bg-secondary/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
              Ready for the next pass
            </Badge>
            <h2 className="section-title max-w-3xl">
              If the current site still feels generic, we can keep pushing it until it reads like a serious company.
            </h2>
            <p className="section-copy max-w-2xl">
              This rebuild moved the project toward a real component stack. The next level would be
              tailoring the copy, assets, and case evidence even more tightly to your actual business.
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
