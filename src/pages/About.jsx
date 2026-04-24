import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Layers3, ShieldCheck } from 'lucide-react'
import BrandLockup from '@/components/brand/BrandLockup'
import CountUpStat from '@/components/common/CountUpStat'
import PreviewFrame from '@/components/common/PreviewFrame'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { aboutHighlights, aboutMetrics, principles, processSteps } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp } from '@/utils/animations'

const principleIcons = [Building2, Layers3, ShieldCheck]

export default function About() {
  usePageMeta({
    title: 'About',
    description:
      'Learn how RYNX approaches websites, software surfaces, and launch-ready delivery with a higher bar for brand quality and frontend execution.',
    path: '/about',
  })

  return (
    <PageWrapper>
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80"
            >
              About RYNX
            </Badge>
            <BrandLockup className="w-fit rounded-full border border-border/70 bg-card/70 px-3 py-2 backdrop-blur-md" />
            <h1 className="display-title max-w-5xl">
              Small team. Senior judgment. Higher standards than most bigger shops.
            </h1>
            <p className="hero-copy">
              RYNX exists for teams that need their digital presence to look more established, more
              precise, and more investable without losing implementation discipline.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <Link to="/contact">
                  Talk to RYNX
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-border/70 bg-background/70 px-6"
              >
                <Link to="/services">See service lanes</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PreviewFrame
              src="/visual-hero-loop.svg"
              alt="RYNX operating model visual"
              dark
              ratioClassName="aspect-[16/10]"
              className="sm:col-span-2"
            >
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.64rem] uppercase tracking-[0.24em] text-white/55">
                  Operating model
                </p>
                <p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-white">
                  Strategy, interface craft, and production delivery handled as one system.
                </p>
              </div>
            </PreviewFrame>
            {aboutHighlights.map((item) => (
              <Card key={item} className="premium-card py-0 sm:col-span-1">
                <CardContent className="flex h-full items-center px-5 py-5 text-sm leading-7 text-muted-foreground">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell page-section">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end">
          <SectionHeading
            label="Studio shape"
            title="Compact by design so quality does not get lost between roles."
            subtitle="The team structure is intentionally lean. That keeps the message, interface, and implementation aligned from first brief to deployment."
            center={false}
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutMetrics.map((metric) => (
              <CountUpStat key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Principles"
          title="How the work avoids the generic studio trap."
          subtitle="These principles keep the output premium, practical, and trustworthy."
          className="mb-8"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principleIcons[index] ?? Building2

            return (
              <motion.div
                key={principle.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <Card className="premium-card h-full py-0">
                  <CardHeader className="px-5 pt-5">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="pt-4 text-xl tracking-[-0.04em]">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 text-sm leading-7 text-muted-foreground">
                    {principle.description}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="page-shell page-section pb-12">
        <div className="section-band">
          <SectionHeading
            label="Workflow"
            title="A straightforward rhythm from signal to ship."
            subtitle="The process is simple on purpose: align the message, design the premium layer, and finish with a launch-ready build."
            center={false}
            className="mb-8"
          />

          <div className="relative grid gap-4 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Card key={step.title} className="premium-card relative py-0">
                <CardHeader className="px-5 pt-5">
                  <Badge
                    variant="outline"
                    className="w-fit rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.2em] text-primary/80"
                  >
                    Step {index + 1}
                  </Badge>
                  <CardTitle className="pt-4 text-xl tracking-[-0.04em]">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <Link to="/contact">
                Start a project
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-border/70 bg-background/60 px-6"
            >
              <Link to="/projects">Review the work</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
