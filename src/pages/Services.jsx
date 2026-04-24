import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers3, LayoutDashboard, ShieldCheck, Workflow } from 'lucide-react'
import PreviewFrame from '@/components/common/PreviewFrame'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { capabilities, faqItems, serviceLines } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp } from '@/utils/animations'

const iconMap = {
  'brand-sites': Layers3,
  'product-platforms': LayoutDashboard,
  automation: Workflow,
  'launch-readiness': ShieldCheck,
}

const topVisuals = [
  '/visual-hero-loop.svg',
  '/visual-dashboard-motion.svg',
  '/visual-launch-motion.svg',
]

export default function Services() {
  usePageMeta({
    title: 'Services',
    description:
      'Explore the RYNX service stack across premium websites, structured product surfaces, automation layers, and Vercel-ready delivery.',
    path: '/services',
  })

  return (
    <PageWrapper>
      <section className="page-shell">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
          <div className="space-y-5">
            <Badge variant="outline" className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
              Service stack
            </Badge>
            <h1 className="display-title max-w-4xl">
              Cleaner service pages, fewer copy blocks, and stronger visual proof.
            </h1>
            <p className="section-copy max-w-2xl">
              This page now leans on visuals, shorter summaries, and clearer service lanes instead
              of making every section feel like documentation.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <Link to="/contact">
                  Start a brief
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6">
                <Link to="/projects">See recent work</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PreviewFrame
              src={topVisuals[0]}
              alt="Animated overview visual for RYNX services"
              dark
              ratioClassName="aspect-[16/10]"
              className="sm:col-span-2"
            />
            <PreviewFrame
              src={topVisuals[1]}
              alt="Animated dashboard preview"
              dark
              ratioClassName="aspect-[16/11]"
            />
            <PreviewFrame
              src={topVisuals[2]}
              alt="Animated launch readiness preview"
              dark
              ratioClassName="aspect-[16/11]"
            />
          </div>
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Service Lanes"
          title="What RYNX actually builds."
          subtitle="Shorter cards, more visual context, cleaner read."
        />

        <div className="grid gap-4 xl:grid-cols-2">
          {serviceLines.map((service) => {
            const Icon = iconMap[service.id] ?? Layers3

            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <Card className="h-full rounded-[28px] border-border/70 bg-card/92 py-0 shadow-none">
                  <div className="p-3 pb-0">
                    <PreviewFrame
                      src={service.media}
                      alt={`${service.title} animated preview`}
                      dark
                      ratioClassName="aspect-[16/10]"
                      className="rounded-[24px]"
                    >
                      <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-2xl bg-white/12 text-white backdrop-blur-sm">
                        <Icon className="size-5" />
                      </div>
                    </PreviewFrame>
                  </div>
                  <CardHeader className="px-6 pt-6">
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="outline" className="rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {service.id.replace('-', ' ')}
                      </Badge>
                    </div>
                    <CardTitle className="pt-1 text-xl tracking-[-0.03em]">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-7">{service.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-6 pb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.outcomes.map((outcome) => (
                        <Badge key={outcome} variant="secondary" className="rounded-full px-3 py-1 text-[0.74rem] text-foreground">
                          {outcome}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.slice(0, 3).map((deliverable) => (
                        <Badge key={deliverable} variant="outline" className="rounded-full border-border/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
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

      <section className="page-shell page-section pb-12">
        <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-panel p-6 sm:p-8">
            <SectionHeading
              label="Capabilities"
              title="Still production-ready."
              subtitle="Visual direction does not mean less engineering discipline."
              center={false}
              className="mb-6"
            />

            <div className="flex flex-wrap gap-2">
              {capabilities.map((capability) => (
                <Badge key={capability} variant="outline" className="rounded-full border-border/70 px-3 py-1 text-[0.72rem] text-muted-foreground">
                  {capability}
                </Badge>
              ))}
            </div>
          </div>

          <div className="surface-panel p-6 sm:p-8">
            <SectionHeading
              label="FAQ"
              title="A few direct answers."
              subtitle="Kept here, but no longer turning the page into a wall of text."
              center={false}
              className="mb-6"
            />

            <Accordion type="single" collapsible className="rounded-[24px] border border-border/70 bg-card/92 px-5 py-2">
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
    </PageWrapper>
  )
}
