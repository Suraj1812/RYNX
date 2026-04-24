import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import heroImage from '@/assets/hero.png'
import BrandLockup from '@/components/brand/BrandLockup'
import CountUpStat from '@/components/common/CountUpStat'
import PreviewFrame from '@/components/common/PreviewFrame'
import SignalCarousel from '@/components/common/SignalCarousel'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  caseStudies,
  clientSignals,
  heroMetrics,
  homeSpotlights,
  serviceLines,
  trustIndicators,
} from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp, staggerContainer } from '@/utils/animations'

const serviceIcons = {
  'brand-sites': MonitorSmartphone,
  'product-platforms': Layers3,
  automation: Workflow,
  'launch-readiness': ShieldCheck,
}

const heroVisuals = [
  {
    label: 'Platform UI',
    title: 'Operational surfaces with calmer hierarchy',
    src: '/visual-dashboard-motion.svg',
  },
  {
    label: 'Launch layer',
    title: 'Shipping discipline that protects the brand',
    src: '/visual-launch-motion.svg',
  },
]

export default function Home() {
  usePageMeta({
    title: 'Home',
    description:
      'RYNX designs premium websites, product interfaces, and launch-ready digital systems with a handcrafted, senior-led approach.',
    path: '/',
  })

  return (
    <PageWrapper>
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-7"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <Badge
                variant="outline"
                className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-primary/80"
              >
                Premium digital systems
              </Badge>
              <div className="trust-chip">
                <span className="trust-chip__dot" />
                Senior-led design and engineering
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <BrandLockup className="w-fit rounded-full border border-border/70 bg-card/70 px-3 py-2 backdrop-blur-md" />
              <h1 className="display-title max-w-5xl">
                Websites and product surfaces that feel
                {' '}
                <span className="text-primary">funded</span>
                {' '}
                before the pitch deck does.
              </h1>
              <p className="hero-copy">
                RYNX helps ambitious teams replace generic, cluttered digital experiences with
                high-trust interfaces, sharper messaging, and production-ready frontend systems.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="h-12 rounded-full px-6 sm:min-w-[11rem]">
                <Link to="/contact">
                  Start a project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-border/70 bg-background/70 px-6 sm:min-w-[11rem]"
              >
                <Link to="/projects">See selected work</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-2 sm:grid-cols-2">
              {trustIndicators.map((item) => (
                <div key={item} className="trust-chip justify-start">
                  <span className="trust-chip__dot" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="relative"
          >
            <div className="ambient-orb left-[-2%] top-[6%] size-28 bg-primary/18 sm:size-40" />
            <div
              className="ambient-orb bottom-[14%] right-[4%] size-24 bg-amber-300/16 sm:size-32"
              style={{ animationDelay: '-4s' }}
            />
            <div
              className="ambient-orb right-[20%] top-[20%] size-20 bg-sky-300/16 sm:size-28"
              style={{ animationDelay: '-7s' }}
            />

            <div className="floating-depth-card absolute -left-3 top-6 z-20 hidden max-w-[12rem] xl:block">
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/55">
                Conversion layer
              </p>
              <p className="mt-2 text-sm font-medium tracking-[-0.02em]">
                Better signal, better trust, better close rate.
              </p>
            </div>

            <div
              className="floating-depth-card absolute -right-4 bottom-14 z-20 hidden max-w-[13rem] xl:block"
              style={{ animationDelay: '-5s' }}
            >
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/55">
                Experience quality
              </p>
              <p className="mt-2 text-sm font-medium tracking-[-0.02em]">
                Responsive, light-dark balanced, and built to ship on Vercel.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <PreviewFrame
                src={heroImage}
                alt="RYNX premium product and marketing interface showcase"
                dark
                priority
                ratioClassName="aspect-[14/11] sm:aspect-[16/12]"
                imgClassName="object-contain p-7 sm:p-10"
                className="sm:col-span-2"
              >
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="text-[0.64rem] uppercase tracking-[0.24em] text-white/55">
                      Visual system
                    </p>
                    <p className="mt-2 max-w-sm text-lg font-semibold tracking-[-0.04em] text-white">
                      Premium hierarchy, restrained motion, and sharper visual storytelling.
                    </p>
                  </div>
                  <Badge className="rounded-full bg-white/12 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-white shadow-none">
                    Mobile to desktop
                  </Badge>
                </div>
              </PreviewFrame>

              {heroVisuals.map((item) => (
                <PreviewFrame
                  key={item.title}
                  src={item.src}
                  alt={item.title}
                  dark
                  ratioClassName="aspect-[16/11]"
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

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {homeSpotlights.map((spotlight) => (
            <motion.div
              key={spotlight.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <Card className="premium-card h-full py-0">
                <CardHeader className="px-5 pt-5">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles className="size-5" />
                  </div>
                  <p className="eyebrow pt-4">{spotlight.eyebrow}</p>
                  <CardTitle className="pt-2 text-xl tracking-[-0.04em]">
                    {spotlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <p className="text-sm leading-7 text-muted-foreground">
                    {spotlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="page-shell page-section">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-end">
          <SectionHeading
            label="Why teams switch"
            title="The premium layer is not decoration. It changes how the company is read."
            subtitle="A better site or product shell creates confidence before sales, demos, and onboarding do the rest."
            center={false}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {heroMetrics.map((metric) => (
              <CountUpStat key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell page-section">
        <SectionHeading
          label="Service lanes"
          title="A tight operating model from first impression to launch."
          subtitle="Each lane is built to look cleaner, communicate faster, and ship without the usual quality drift."
          className="mb-8"
        />

        <div className="grid gap-4 xl:grid-cols-2">
          {serviceLines.map((service) => {
            const Icon = serviceIcons[service.id] ?? Layers3

            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <Card className="premium-card h-full py-0">
                  <div className="p-3 pb-0">
                    <PreviewFrame
                      src={service.media}
                      alt={`${service.title} showcase`}
                      dark
                      ratioClassName="aspect-[16/10]"
                    >
                      <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-2xl bg-white/12 text-white backdrop-blur-sm">
                        <Icon className="size-5" />
                      </div>
                    </PreviewFrame>
                  </div>
                  <CardHeader className="space-y-3 px-6 pt-6">
                    <p className="eyebrow">{service.eyebrow}</p>
                    <CardTitle className="text-[1.35rem] tracking-[-0.04em]">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-7">
                      {service.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5 px-6 pb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.outcomes.map((outcome) => (
                        <Badge
                          key={outcome}
                          variant="secondary"
                          className="rounded-full px-3 py-1 text-[0.74rem] text-foreground"
                        >
                          {outcome}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {service.deliverables.map((deliverable) => (
                        <div key={deliverable} className="metric-panel text-sm text-muted-foreground">
                          {deliverable}
                        </div>
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
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <SectionHeading
            label="Selected work"
            title="Proof that feels premium at a glance and solid under scrutiny."
            subtitle="The homepage gives the fast visual read. The full work section carries the deeper breakdown."
            center={false}
          />

          <div className="grid gap-4">
            <Card className="premium-card overflow-hidden py-0">
              <div className="grid gap-5 p-3 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                <PreviewFrame
                  src={caseStudies[0].media}
                  alt={caseStudies[0].title}
                  dark
                  ratioClassName="aspect-[16/11]"
                />
                <div className="rounded-[24px] border border-border/70 bg-background/55 p-5 sm:p-6">
                  <Badge
                    variant="outline"
                    className="rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {caseStudies[0].category}
                  </Badge>
                  <h3 className="pt-4 font-heading text-2xl tracking-[-0.05em]">
                    {caseStudies[0].title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {caseStudies[0].summary}
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {caseStudies[0].impact.map((item) => (
                      <div key={item.label} className="metric-panel">
                        <p className="font-heading text-xl tracking-[-0.04em]">{item.value}</p>
                        <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {caseStudies[0].services.map((service) => (
                      <Badge key={service} variant="secondary" className="rounded-full px-3 py-1 text-[0.72rem]">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid gap-4 lg:grid-cols-2">
              {caseStudies.slice(1).map((study) => (
                <Card key={study.id} className="premium-card py-0">
                  <div className="p-3 pb-0">
                    <PreviewFrame src={study.media} alt={study.title} dark ratioClassName="aspect-[16/10]" />
                  </div>
                  <CardHeader className="px-5 pt-5">
                    <Badge
                      variant="outline"
                      className="w-fit rounded-full border-border/70 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {study.category}
                    </Badge>
                    <CardTitle className="pt-3 text-xl tracking-[-0.04em]">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-7">
                      {study.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <div className="flex flex-wrap gap-2">
                      {study.impact.slice(0, 2).map((item) => (
                        <Badge key={item.label} variant="secondary" className="rounded-full px-3 py-1 text-[0.72rem]">
                          {item.value}
                          {' '}
                          {item.label}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell page-section">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-end">
          <SectionHeading
            label="Credibility"
            title="The brief behind the build usually sounds like this."
            subtitle="Not inflated testimonials. Just the pressure points ambitious teams actually bring into the room."
            center={false}
          />
          <SignalCarousel items={clientSignals} />
        </div>
      </section>

      <section className="page-shell page-section pb-12">
        <div className="section-band">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="rounded-full border-border/70 bg-background/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80"
              >
                Ready to rebuild
              </Badge>
              <h2 className="section-title max-w-3xl">
                If it would not pass as a serious venture-backed product, it is not ready yet.
              </h2>
              <p className="section-copy max-w-2xl">
                We redesign the first impression, the product surface, and the production handoff
                as one system so the final result feels deliberate everywhere.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <Link to="/contact">
                  Book the rebuild
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-border/70 bg-background/60 px-6"
              >
                <Link to="/services">Explore service lanes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
