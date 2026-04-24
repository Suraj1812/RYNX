import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageSquareShare, TimerReset } from 'lucide-react'
import PreviewFrame from '@/components/common/PreviewFrame'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  budgetOptions,
  contactChannels,
  contactExpectations,
  serviceLines,
  timelineOptions,
} from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp, staggerContainer } from '@/utils/animations'

const initialFormState = {
  name: '',
  company: '',
  email: '',
  service: '',
  timeline: '',
  budget: '',
  message: '',
  website: '',
}

const infoIcons = [Mail, MapPin, TimerReset, MessageSquareShare]

export default function Contact() {
  usePageMeta({
    title: 'Contact',
    description:
      'Start a project with RYNX for premium websites, product interfaces, and launch-ready digital systems.',
    path: '/contact',
  })

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(initialFormState)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  const handleSelectChange = (field, value) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setLoading(true)
      setStatus({ type: '', message: '' })

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send the enquiry right now.')
      }

      setStatus({
        type: 'success',
        message: result.message || 'Your enquiry has been sent successfully.',
      })
      setForm(initialFormState)
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again shortly.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageWrapper>
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <Badge
                variant="outline"
                className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80"
              >
                Start a project
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="display-title max-w-5xl">
              Bring the weak first impression, the messy product shell, or the launch gap.
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-copy max-w-3xl">
              The intake is built for clarity. Tell us what currently feels generic, what needs to
              feel premium after the rebuild, and how fast the team wants to move.
            </motion.p>
            <motion.div variants={fadeUp} className="grid gap-2 sm:grid-cols-2">
              {contactExpectations.map((item) => (
                <div key={item} className="trust-chip justify-start">
                  <span className="trust-chip__dot" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <PreviewFrame
            src="/visual-launch-motion.svg"
            alt="RYNX contact and launch readiness visual"
            dark
            ratioClassName="aspect-[16/10]"
          >
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[0.64rem] uppercase tracking-[0.24em] text-white/55">
                Brief to build
              </p>
              <p className="mt-2 max-w-sm text-lg font-semibold tracking-[-0.04em] text-white">
                Clear intake, senior review, and a production-ready path forward.
              </p>
            </div>
          </PreviewFrame>
        </div>
      </section>

      <section className="page-shell page-section pb-12">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]">
          <div className="space-y-4">
            <div className="section-band">
              <SectionHeading
                label="What happens next"
                title="You get a cleaner conversation before any proposal is written."
                subtitle="We use the brief to understand the pressure, the decision-makers, and the quality bar so the project starts with signal."
                center={false}
                className="mb-6"
              />
              <div className="space-y-3">
                {contactExpectations.map((item) => (
                  <div key={item} className="metric-panel text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Card className="premium-card py-0">
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-xl tracking-[-0.04em]">Contact details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6">
                {contactChannels.map((item, index) => {
                  const Icon = infoIcons[index] ?? Mail

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-[22px] border border-border/70 bg-secondary/60 px-4 py-4"
                    >
                      <div className="mt-0.5 flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          <Card className="premium-card py-0">
            <CardHeader className="px-6 pt-6">
              <CardTitle className="text-[1.35rem] tracking-[-0.04em]">Project brief</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="h-12 rounded-2xl border-border/70 bg-background/75 px-4"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleInputChange}
                      className="h-12 rounded-2xl border-border/70 bg-background/75 px-4"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Work email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="h-12 rounded-2xl border-border/70 bg-background/75 px-4"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service focus
                    </label>
                    <Select value={form.service} onValueChange={(value) => handleSelectChange('service', value)}>
                      <SelectTrigger
                        id="service"
                        className="h-12 w-full rounded-2xl border-border/70 bg-background/75 px-4"
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceLines.map((service) => (
                          <SelectItem key={service.id} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium">
                      Timeline
                    </label>
                    <Select value={form.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
                      <SelectTrigger
                        id="timeline"
                        className="h-12 w-full rounded-2xl border-border/70 bg-background/75 px-4"
                      >
                        <SelectValue placeholder="Choose a timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelineOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Budget
                    </label>
                    <Select value={form.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                      <SelectTrigger
                        id="budget"
                        className="h-12 w-full rounded-2xl border-border/70 bg-background/75 px-4"
                      >
                        <SelectValue placeholder="Select a budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="hidden">
                  <label htmlFor="website">Leave this field empty</label>
                  <Input
                    id="website"
                    name="website"
                    value={form.website}
                    onChange={handleInputChange}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Project context
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    className="min-h-44 rounded-[24px] border-border/70 bg-background/75 px-4 py-4"
                    placeholder="What feels weak today, what should feel premium after the rebuild, and what success looks like."
                    required
                  />
                </div>

                <div className="rounded-[22px] border border-border/70 bg-secondary/60 px-4 py-4 text-sm leading-7 text-muted-foreground">
                  In development, the endpoint validates the payload and returns a success response
                  without sending live email. On Vercel, add the Resend variables from the README
                  to enable delivery.
                </div>

                <Button type="submit" size="lg" className="h-12 rounded-full px-6" disabled={loading}>
                  {loading ? 'Sending enquiry...' : 'Send enquiry'}
                </Button>

                {status.message ? (
                  <div
                    className={`rounded-[22px] border px-4 py-4 text-sm leading-7 ${
                      status.type === 'success'
                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                        : 'border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300'
                    }`}
                  >
                    {status.message}
                  </div>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageWrapper>
  )
}
