import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Layers3,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import PreviewFrame from '@/components/common/PreviewFrame'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { capabilities, faqItems, processSteps, serviceLines } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp } from '@/utils/animations'
import { cn } from '@/lib/utils'

const iconMap = {
  'brand-sites': Layers3,
  'product-platforms': LayoutDashboard,
  automation: Workflow,
  'launch-readiness': ShieldCheck,
}

export default function Services() {
  usePageMeta({
    title: 'Services',
    description:
      'Explore the RYNX service stack across premium websites, product platforms, automation systems, and launch-ready frontend delivery.',
    path: '/services',
  })

  return (
    <PageWrapper>
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80"
            >
              Service architecture
            </Badge>
            <h1 className="display-title max-w-5xl">
              Four focused lanes. One premium standard across every touchpoint.
            </h1>
            <p className="hero-copy">
              We do not separate brand perception from product usability or launch quality. The
              service model is built so the outcome feels sharper at every layer, not just prettier
              on the homepage.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <Link to="/contact">
                  Start a brief
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-border/70 bg-background/70 px-6"
              >
                <Link to="/projects">See the proof</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PreviewFrame
              src="/visual-hero-loop.svg"
              alt="RYNX services visual overview"
              dark
              ratioClassName="aspect-[16/10]"
              className="sm:col-span-2"
            >
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.64rem] uppercase tracking-[0.24em] text-white/55">
                  Studio stack
                </p>
                <p className="mt-2 max-w-sm text-lg font-semibold tracking-[-0.04em] text-white">
                  Positioning, interface quality, and shipping discipline in one stream.
                </p>
              </div>
            </PreviewFrame>
            <Card className="premium-card py-0">
              <CardHeader className="px-5 pt-5">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Sparkles className="size-5" />
                </div>
                <CardTitle className="pt-4 text-xl tracking-[-0.04em]">
                  What improves
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-5 pb-5">
                {capabilities.slice(0, 4).map((item) => (
                  <div key={item} className="metric-panel text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="premium-card py-0">
              <CardHeader className="px-5 pt-5">
                <Badge
                  variant="outline"
                  className="w-fit rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Delivery rhythm
                </Badge>
                <CardTitle className="pt-4 text-xl tracking-[-0.04em]">
                  Strategy to launch without quality drift
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-5 pb-5">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="metric-panel">
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-primary/80">
                      Step {index + 1}
                    </p>
                    <p className="mt-2 text-sm font-medium tracking-[-0.02em] text-foreground">
                      {step.title}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Service lanes"
          title="Built like a premium operating system, not a menu of disconnected tasks."
          subtitle="Every lane is designed to solve a different business pressure without losing brand consistency."
          className="mb-8"
        />

        <div className="space-y-4">
          {serviceLines.map((service, index) => {
            const Icon = iconMap[service.id] ?? Layers3

            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="section-band"
              >
                <div
                  className={cn(
                    'grid gap-6 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center',
                    index % 2 === 1 && 'lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]',
                  )}
                >
                  <div className={cn(index % 2 === 1 && 'lg:order-2')}>
                    <PreviewFrame
                      src={service.media}
                      alt={service.title}
                      dark
                      ratioClassName="aspect-[16/10]"
                    >
                      <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-2xl bg-white/12 text-white backdrop-blur-sm">
                        <Icon className="size-5" />
                      </div>
                    </PreviewFrame>
                  </div>

                  <div className={cn('space-y-5', index % 2 === 1 && 'lg:order-1')}>
                    <div className="space-y-3">
                      <p className="eyebrow">{service.eyebrow}</p>
                      <h2 className="font-heading text-[2rem] leading-[1.02] tracking-[-0.05em] sm:text-[2.35rem]">
                        {service.title}
                      </h2>
                      <p className="section-copy max-w-2xl">{service.summary}</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {service.outcomes.map((outcome) => (
                        <div key={outcome} className="metric-panel text-sm font-medium text-foreground">
                          {outcome}
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {service.deliverables.map((deliverable) => (
                        <div key={deliverable} className="soft-panel px-4 py-4 text-sm text-muted-foreground">
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="page-shell page-section">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="section-band">
            <SectionHeading
              label="Capabilities"
              title="Modern stack, cleaner execution, less reinvention."
              subtitle="We use the right libraries and patterns so the interface feels premium while the codebase stays maintainable."
              center={false}
              className="mb-6"
            />
            <div className="flex flex-wrap gap-2">
              {capabilities.map((capability) => (
                <Badge
                  key={capability}
                  variant="outline"
                  className="rounded-full border-border/70 bg-background/65 px-3 py-1 text-[0.74rem] text-muted-foreground"
                >
                  {capability}
                </Badge>
              ))}
            </div>
          </div>

          <div className="section-band">
            <SectionHeading
              label="FAQ"
              title="Direct answers for the practical questions."
              subtitle="Short, clear, and useful before we start the project."
              center={false}
              className="mb-6"
            />

            <Accordion
              type="single"
              collapsible
              className="rounded-[24px] border border-border/70 bg-card/86 px-5 py-2"
            >
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger className="py-5 text-base font-medium no-underline hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="page-shell page-section pb-12">
        <div className="section-band">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="rounded-full border-border/70 bg-background/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80"
              >
                Build with RYNX
              </Badge>
              <h2 className="section-title max-w-3xl">
                Choose the lane that fixes the real pressure, then ship it to production cleanly.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <Link to="/contact">
                  Start the brief
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-border/70 bg-background/60 px-6"
              >
                <Link to="/projects">Review case studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
