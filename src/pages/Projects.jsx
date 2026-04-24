import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, FolderKanban, ShieldCheck, Sparkles } from 'lucide-react'
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
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <Badge variant="outline" className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
              Selected work
            </Badge>
            <h1 className="display-title max-w-4xl">
              Interfaces and systems that feel more <span className="text-primary">finished</span> than their predecessors.
            </h1>
            <p className="section-copy max-w-3xl">
              These examples represent the kind of structured visual language and implementation
              discipline we are pushing this project toward: sharper hierarchy, clearer signals,
              and more stable production handoff.
            </p>
          </div>

          <div className="surface-panel p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: 'component-led', value: 'UI stack', icon: FolderKanban },
                { label: 'delivery-ready', value: 'Vercel', icon: ShieldCheck },
                { label: 'less AI vibe', value: 'Intentional', icon: Sparkles },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.label} className="rounded-[22px] border border-border/70 bg-card/92 p-4">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <p className="mt-4 text-lg font-semibold tracking-[-0.04em]">{item.value}</p>
                    <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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

      <section className="mx-auto mt-8 w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <SectionHeading
          label="Case Studies"
          title="The projects below are filtered to show how the same system can support different business contexts."
          subtitle="Each card opens a more detailed breakdown using a sheet instead of a fully custom modal, keeping the interaction inside the same component system."
          className="mb-8"
        />

        <div className="grid gap-4 lg:grid-cols-2">
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
                  <SheetTitle className="pt-4 text-3xl tracking-[-0.04em]">
                    {selectedProject.title}
                  </SheetTitle>
                  <SheetDescription className="max-w-xl text-sm leading-7">
                    {selectedProject.summary}
                  </SheetDescription>
                </SheetHeader>

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
