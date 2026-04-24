import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageSquareShare, TimerReset } from 'lucide-react'
import PreviewFrame from '@/components/common/PreviewFrame'
import PageWrapper from '@/components/layout/PageWrapper'
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
import { budgetOptions, contactChannels, serviceLines, timelineOptions } from '@/data/site'
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
      'Start a project with RYNX for premium websites, structured software surfaces, and launch-ready frontend systems.',
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
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-5">
            <motion.div variants={fadeUp}>
              <Badge variant="outline" className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
                Contact RYNX
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="display-title max-w-4xl">
              Give us the problem, the deadline, and the part of the site that still feels weak.
            </motion.h1>
            <motion.p variants={fadeUp} className="section-copy max-w-3xl">
              The form is production-ready, but the page now opens with more visual context and less
              copy before you get to the actual brief.
            </motion.p>
          </motion.div>

          <PreviewFrame
            src="/visual-launch-motion.svg"
            alt="Animated launch and handoff visual on the contact page"
            dark
            ratioClassName="aspect-[16/10]"
          />
        </div>
      </section>

      <section className="page-shell page-section pb-12">
        <div className="grid gap-4 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-4">
            <Card className="rounded-[28px] border-border/70 bg-card/92 py-0 shadow-none">
              <div className="p-3 pb-0">
                <PreviewFrame
                  src="/visual-automation-motion.svg"
                  alt="Animated contact workflow preview"
                  dark
                  ratioClassName="aspect-[16/10]"
                  className="rounded-[24px]"
                />
              </div>
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-xl tracking-[-0.03em]">What to include</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-6 pb-6 text-sm leading-7 text-muted-foreground">
                <div className="rounded-[22px] border border-border/70 bg-secondary/65 px-4 py-3">
                  What currently feels too generic or not premium enough.
                </div>
                <div className="rounded-[22px] border border-border/70 bg-secondary/65 px-4 py-3">
                  The exact business outcome the new site or system needs to support.
                </div>
                <div className="rounded-[22px] border border-border/70 bg-secondary/65 px-4 py-3">
                  The timeline, decision-maker, and the level of urgency around launch.
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[28px] border-border/70 bg-card/92 py-0 shadow-none">
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-xl tracking-[-0.03em]">Contact details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6">
                {contactChannels.map((item, index) => {
                  const Icon = infoIcons[index] ?? Mail

                  return (
                    <div key={item.label} className="flex items-start gap-3 rounded-[22px] border border-border/70 bg-secondary/65 px-4 py-4">
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

          <Card className="rounded-[30px] border-border/70 bg-card/92 py-0 shadow-none">
            <CardHeader className="px-6 pt-6">
              <CardTitle className="text-xl tracking-[-0.03em]">Project brief</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your name</label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="h-11 rounded-2xl bg-background/80 px-4"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company</label>
                    <Input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleInputChange}
                      className="h-11 rounded-2xl bg-background/80 px-4"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Work email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="h-11 rounded-2xl bg-background/80 px-4"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">Service focus</label>
                    <Select value={form.service} onValueChange={(value) => handleSelectChange('service', value)}>
                      <SelectTrigger id="service" className="h-11 w-full rounded-2xl bg-background/80 px-4">
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
                    <label htmlFor="timeline" className="text-sm font-medium">Timeline</label>
                    <Select value={form.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
                      <SelectTrigger id="timeline" className="h-11 w-full rounded-2xl bg-background/80 px-4">
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
                    <label htmlFor="budget" className="text-sm font-medium">Budget</label>
                    <Select value={form.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                      <SelectTrigger id="budget" className="h-11 w-full rounded-2xl bg-background/80 px-4">
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
                  <label htmlFor="message" className="text-sm font-medium">Project context</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    className="min-h-40 rounded-[24px] bg-background/80 px-4 py-4"
                    placeholder="Tell us what feels off today, what should feel more premium after the rebuild, and what success looks like."
                    required
                  />
                </div>

                <div className="rounded-[22px] border border-border/70 bg-secondary/65 px-4 py-4 text-sm leading-7 text-muted-foreground">
                  In local development the endpoint validates and returns a success response without
                  sending live email. In production on Vercel, add the Resend variables from the README to enable delivery.
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
