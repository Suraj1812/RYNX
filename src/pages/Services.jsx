import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bot,
  Layers3,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { capabilities, faqItems, processSteps, serviceLines } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp } from '@/utils/animations'

const iconMap = {
  'brand-sites': Layers3,
  'product-platforms': LayoutDashboard,
  automation: Workflow,
  'launch-readiness': ShieldCheck,
}

const capabilityGroups = [
  {
    title: 'Design system cleanup',
    description: 'Move from one-off styling decisions to a consistent, reusable UI language.',
    icon: Layers3,
  },
  {
    title: 'Operational frontends',
    description: 'Dashboards, portals, and internal surfaces with better hierarchy and clearer task flow.',
    icon: LayoutDashboard,
  },
  {
    title: 'Practical AI layers',
    description: 'Automation and AI where it is actually useful, not as a visual gimmick.',
    icon: Bot,
  },
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
        <div className="space-y-5">
          <Badge variant="outline" className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
            Service stack
          </Badge>
          <h1 className="display-title max-w-4xl">
            A dependency-first frontend system needs a more disciplined service model too.
          </h1>
          <p className="section-copy max-w-3xl">
            The goal is not just prettier pages. It is a stronger base for branding, UI, forms,
            motion, icons, and component logic so the whole experience feels more coherent and less improvised.
          </p>
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Service Lines"
          title="What RYNX actually builds."
          subtitle="Each lane is designed to move a company away from generic UI and toward a more intentional digital system."
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
                  <CardHeader className="px-6 pt-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <Badge variant="outline" className="rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {service.id.replace('-', ' ')}
                      </Badge>
                    </div>
                    <CardTitle className="pt-3 text-xl tracking-[-0.03em]">{service.title}</CardTitle>
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
                    <Separator />
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
        <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-panel p-6 sm:p-8">
            <SectionHeading
              label="Capabilities"
              title="Where the system is now stronger."
              subtitle="A lot of the improvement comes from replacing custom one-offs with a reliable component foundation."
              center={false}
              className="mb-6"
            />

            <div className="flex flex-wrap gap-2">
              {capabilities.map((capability) => (
                <Badge key={capability} variant="outline" className="rounded-full border-border/70 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {capability}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {capabilityGroups.map((item) => {
              const Icon = item.icon

              return (
                <Card key={item.title} className="rounded-[26px] border-border/70 bg-card/92 py-0 shadow-none">
                  <CardHeader className="px-5 pt-5">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="pt-3 text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Delivery Rhythm"
          title="How the build process stays controlled."
          subtitle="The design system may be dependency-based, but the outcome still depends on structure and sequencing."
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
      </section>

      <section className="page-shell page-section pb-12">
        <div className="surface-panel p-6 sm:p-8">
          <SectionHeading
            label="FAQ"
            title="A few direct answers before you reach out."
            subtitle="These are the questions teams usually ask when they want the site to stop feeling generated."
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

          <div className="mt-6">
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <Link to="/contact">
                Start the conversation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
