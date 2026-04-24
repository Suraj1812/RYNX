import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PreviewFrame from '@/components/common/PreviewFrame'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { caseStudies, projectCategories } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp } from '@/utils/animations'
import { cn } from '@/lib/utils'

export default function Projects() {
  usePageMeta({
    title: 'Selected Work',
    description:
      'Browse representative RYNX work across premium web experiences, internal systems, and automation-ready delivery.',
    path: '/projects',
  })

  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter((project) => project.category === activeCategory)

  const featuredProject = filteredProjects[0] ?? caseStudies[0]
  const remainingProjects = filteredProjects.filter((project) => project.id !== featuredProject.id)

  return (
    <PageWrapper>
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80"
            >
              Selected work
            </Badge>
            <h1 className="display-title max-w-5xl">
              Proof should feel decisive in under a minute.
            </h1>
            <p className="hero-copy">
              This page is designed for fast confidence: cleaner visual reads up front, deeper case
              study detail on demand, and stronger evidence that the system can hold up in
              production.
            </p>
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((category) => (
                <Button
                  key={category}
                  type="button"
                  variant={activeCategory === category ? 'default' : 'outline'}
                  className={cn(
                    'rounded-full px-5',
                    activeCategory !== category && 'border-border/70 bg-background/70',
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PreviewFrame
              src="/visual-brand-motion.svg"
              alt="Brand experience showcase"
              dark
              ratioClassName="aspect-[16/10]"
              className="sm:col-span-2"
            >
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.64rem] uppercase tracking-[0.24em] text-white/55">
                  Portfolio lens
                </p>
                <p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-white">
                  Premium presentation with measurable outcomes and cleaner narrative.
                </p>
              </div>
            </PreviewFrame>
            <PreviewFrame src="/visual-dashboard-motion.svg" alt="Dashboard showcase" dark ratioClassName="aspect-[16/11]" />
            <PreviewFrame src="/visual-automation-motion.svg" alt="Automation showcase" dark ratioClassName="aspect-[16/11]" />
          </div>
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Featured case"
          title={featuredProject.title}
          subtitle={featuredProject.summary}
          center={false}
          className="mb-6"
        />

        <Card className="premium-card overflow-hidden py-0">
          <div className="grid gap-6 p-3 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:items-center">
            <PreviewFrame
              src={featuredProject.media}
              alt={featuredProject.title}
              dark
              ratioClassName="aspect-[16/11]"
            />

            <div className="rounded-[26px] border border-border/70 bg-background/60 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant="outline"
                  className="rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {featuredProject.category}
                </Badge>
                <div className="trust-chip">
                  <span className="trust-chip__dot" />
                  Production-minded delivery
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {featuredProject.impact.map((item) => (
                  <div key={item.label} className="metric-panel">
                    <p className="font-heading text-2xl tracking-[-0.05em]">{item.value}</p>
                    <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <div>
                  <p className="eyebrow">Challenge</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {featuredProject.challenge}
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Solution</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {featuredProject.solution}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.services.map((service) => (
                  <Badge key={service} variant="secondary" className="rounded-full px-3 py-1 text-[0.72rem]">
                    {service}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  type="button"
                  size="lg"
                  className="h-12 rounded-full px-6"
                  onClick={() => setSelectedProject(featuredProject)}
                >
                  Open full case study
                  <ArrowUpRight className="size-4" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-border/70 bg-background/60 px-6"
                >
                  <Link to="/contact">Build something similar</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Project grid"
          title="More proof points across web, systems, and automation."
          subtitle="Click into any card for the longer breakdown, stack, and implementation angle."
          className="mb-8"
        />

        <div className="grid gap-4 xl:grid-cols-2">
          {remainingProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="premium-card h-full py-0">
                  <div className="p-3 pb-0">
                    <PreviewFrame src={project.media} alt={project.title} dark ratioClassName="aspect-[16/10]" />
                  </div>
                  <CardHeader className="px-6 pt-6">
                    <div className="flex items-start justify-between gap-3">
                      <Badge
                        variant="outline"
                        className="rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        {project.category}
                      </Badge>
                      <ArrowUpRight className="mt-0.5 size-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="pt-3 text-[1.3rem] tracking-[-0.04em]">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-7">
                      {project.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-6 pb-6">
                    <div className="grid gap-3 sm:grid-cols-3">
                      {project.impact.map((item) => (
                        <div key={item.label} className="metric-panel">
                          <p className="font-heading text-xl tracking-[-0.04em]">{item.value}</p>
                          <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} variant="secondary" className="rounded-full px-3 py-1 text-[0.72rem]">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </button>
            </motion.div>
          ))}
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
                Need your own case study
              </Badge>
              <h2 className="section-title max-w-3xl">
                If your current product or site does not yet feel credible enough, that is the gap we close.
              </h2>
            </div>
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <Link to="/contact">
                Start the rebuild
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <Sheet open={Boolean(selectedProject)} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <SheetContent
            side="right"
            className="w-full overflow-y-auto border-border/70 bg-background/98 p-0 sm:max-w-2xl"
          >
            {selectedProject ? (
              <div className="p-6 sm:p-8">
                <SheetHeader className="p-0 text-left">
                  <Badge
                    variant="outline"
                    className="w-fit rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {selectedProject.category}
                  </Badge>
                  <SheetTitle className="pt-4 text-left text-2xl tracking-[-0.05em] sm:text-3xl">
                    {selectedProject.title}
                  </SheetTitle>
                  <SheetDescription className="max-w-xl text-left text-sm leading-7">
                    {selectedProject.summary}
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-6">
                  <PreviewFrame
                    src={selectedProject.media}
                    alt={selectedProject.title}
                    dark
                    ratioClassName="aspect-[16/10]"
                  />
                </div>

                <div className="mt-8 grid gap-6">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {selectedProject.impact.map((item) => (
                      <div key={item.label} className="metric-panel">
                        <p className="font-heading text-xl tracking-[-0.05em]">{item.value}</p>
                        <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="grid gap-6">
                    <div>
                      <p className="eyebrow">Challenge</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow">Solution</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {selectedProject.solution}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow">Services</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedProject.services.map((service) => (
                          <Badge key={service} variant="secondary" className="rounded-full px-3 py-1 text-[0.72rem]">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="eyebrow">Stack</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedProject.stack.map((item) => (
                          <Badge
                            key={item}
                            variant="outline"
                            className="rounded-full border-border/70 px-3 py-1 text-[0.72rem] text-muted-foreground"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="h-12 rounded-full px-6">
                      <Link to="/contact">
                        Build something like this
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ) : null}
          </SheetContent>
        </Sheet>
      </section>
    </PageWrapper>
  )
}
