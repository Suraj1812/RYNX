import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Layers3, ShieldCheck } from 'lucide-react'
import PreviewFrame from '@/components/common/PreviewFrame'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { aboutHighlights, principles, processSteps } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp } from '@/utils/animations'

const principleIcons = [Building2, Layers3, ShieldCheck]

export default function About() {
  usePageMeta({
    title: 'About',
    description:
      'Learn how RYNX approaches websites, software surfaces, and launch-ready frontend delivery with a more disciplined, dependency-led product mindset.',
    path: '/about',
  })

  return (
    <PageWrapper>
      <section className="page-shell">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
          <div className="space-y-5">
            <Badge variant="outline" className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
              About RYNX
            </Badge>
            <h1 className="display-title max-w-4xl">
              Small team, sharper system, and a much higher bar for what should go live.
            </h1>
            <p className="section-copy max-w-3xl">
              RYNX is built around the idea that premium web presence is a systems problem as much
              as a design problem, so the visuals and the delivery path need to feel equally strong.
            </p>
          </div>

          <PreviewFrame
            src="/visual-hero-loop.svg"
            alt="Animated visual representing the RYNX design and delivery system"
            dark
            ratioClassName="aspect-[16/10]"
          />
        </div>
      </section>

      <section className="page-shell page-section">
        <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-panel p-6 sm:p-8">
            <SectionHeading
              label="Positioning"
              title="Make the company feel more established without making the interface feel overworked."
              subtitle="Stronger spacing, better type, cleaner components, and a frontend that can evolve without drifting."
              center={false}
              className="mb-6"
            />
            <Button asChild className="rounded-full">
              <Link to="/contact">
                Start a brief
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <Card className="rounded-[30px] border-border/70 bg-card/92 py-0 shadow-none">
            <CardHeader className="px-6 pt-6">
              <Badge variant="outline" className="w-fit rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                What teams usually need
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6">
              {aboutHighlights.map((item, index) => (
                <div key={item}>
                  <div className="rounded-[22px] border border-border/70 bg-secondary/65 px-5 py-4 text-sm leading-7 text-muted-foreground">
                    {item}
                  </div>
                  {index !== aboutHighlights.length - 1 ? <Separator className="my-4" /> : null}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Principles"
          title="The standards behind the redesign direction."
          subtitle="These are the rules that keep the work from sliding back into generic agency output."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principleIcons[index] ?? Building2

            return (
              <motion.div
                key={principle.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <Card className="h-full rounded-[26px] border-border/70 bg-card/92 py-0 shadow-none">
                  <CardHeader className="px-5 pt-5">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="pt-3 text-lg">{principle.title}</CardTitle>
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
        <div className="surface-panel p-6 sm:p-8">
          <SectionHeading
            label="Workflow"
            title="The same operating rhythm still matters after the visual stack changes."
            subtitle="Good dependencies help, but the sequence of decisions still decides whether the output feels sharp."
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
    </PageWrapper>
  )
}
