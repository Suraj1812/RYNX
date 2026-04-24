import { useMemo, useState } from 'react'
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
      'Browse representative RYNX work across premium web experiences, internal systems, and automation-ready frontend delivery.',
    path: '/projects',
  })

  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All'
        ? caseStudies
        : caseStudies.filter((project) => project.category === activeCategory),
    [activeCategory],
  )

  return (
    <PageWrapper>
      <section className="page-shell">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
          <div className="space-y-5">
            <Badge variant="outline" className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
              Selected work
            </Badge>
            <h1 className="display-title max-w-4xl">
              Work pages should feel like <span className="text-primary">proof</span>, not reading homework.
            </h1>
            <p className="section-copy max-w-2xl">
              These cards now lean on animated previews and tighter summaries, with the longer
              breakdown still available inside the detail sheet.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PreviewFrame
              src="/visual-hero-loop.svg"
              alt="Animated overview visual for selected work"
              dark
              ratioClassName="aspect-[16/10]"
              className="sm:col-span-2"
            >
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.64rem] uppercase tracking-[0.24em] text-white/55">
                  Visual preview
                </p>
                <p className="mt-2 text-base font-medium text-white">
                  Stronger presentation with less clutter.
                </p>
              </div>
            </PreviewFrame>
            <PreviewFrame
              src="/visual-brand-motion.svg"
              alt="Brand website preview"
              dark
              ratioClassName="aspect-[16/11]"
            />
            <PreviewFrame
              src="/visual-dashboard-motion.svg"
              alt="Product dashboard preview"
              dark
              ratioClassName="aspect-[16/11]"
            />
          </div>
        </div>
      </section>

      <section className="page-shell mt-12 sm:mt-14">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <Button
              key={category}
              type="button"
              variant={activeCategory === category ? 'default' : 'outline'}
              className={cn(
                'rounded-full px-5',
                activeCategory !== category && 'border-border/70 bg-background/80',
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      <section className="page-shell mt-8 pb-12">
        <SectionHeading
          label="Case Studies"
          title="Tap into a card when you want the full breakdown."
          subtitle="The front of the page now gives you the fast visual read first."
          className="mb-8"
        />

        <div className="grid gap-4 xl:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="h-full rounded-[28px] border-border/70 bg-card/92 py-0 shadow-none transition-transform duration-200 hover:-translate-y-1">
                  <div className="p-3 pb-0">
                    <PreviewFrame
                      src={project.media}
                      alt={`${project.title} animated preview`}
                      dark
                      ratioClassName="aspect-[16/10]"
                      className="rounded-[24px]"
                    />
                  </div>
                  <CardHeader className="px-6 pt-6">
                    <div className="flex items-start justify-between gap-3">
                      <Badge variant="outline" className="rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {project.category}
                      </Badge>
                      <ArrowUpRight className="mt-0.5 size-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="pt-3 text-xl tracking-[-0.03em]">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-7">{project.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-6 pb-6">
                    <div className="grid gap-3 sm:grid-cols-3">
                      {project.impact.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-border/70 bg-secondary/65 p-4">
                          <p className="text-lg font-semibold tracking-[-0.04em]">{item.value}</p>
                          <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <Badge key={service} variant="secondary" className="rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em]">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </button>
            </motion.div>
          ))}
        </div>

        <Sheet open={Boolean(selectedProject)} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <SheetContent
            side="right"
            className="w-full overflow-y-auto border-border/70 bg-background/98 p-0 sm:max-w-2xl"
          >
            {selectedProject ? (
              <div className="p-6 sm:p-8">
                <SheetHeader className="p-0">
                  <Badge variant="outline" className="w-fit rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {selectedProject.category}
                  </Badge>
                  <SheetTitle className="pt-4 text-2xl tracking-[-0.04em] sm:text-3xl">
                    {selectedProject.title}
                  </SheetTitle>
                  <SheetDescription className="max-w-xl text-sm leading-7">
                    {selectedProject.summary}
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-6">
                  <PreviewFrame
                    src={selectedProject.media}
                    alt={`${selectedProject.title} detail preview`}
                    dark
                    ratioClassName="aspect-[16/10]"
                  />
                </div>

                <div className="mt-8 grid gap-6">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {selectedProject.impact.map((item) => (
                      <div key={item.label} className="rounded-[22px] border border-border/70 bg-card/92 p-4">
                        <p className="text-lg font-semibold tracking-[-0.04em]">{item.value}</p>
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
                          <Badge key={service} variant="secondary" className="rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em]">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="eyebrow">Stack</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedProject.stack.map((stackItem) => (
                          <Badge key={stackItem} variant="outline" className="rounded-full border-border/70 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                            {stackItem}
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
