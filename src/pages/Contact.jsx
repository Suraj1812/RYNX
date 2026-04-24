import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/layout/PageWrapper'
import {
  budgetOptions,
  contactChannels,
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

export default function Contact() {
  usePageMeta({
    title: 'Contact',
    description:
      'Start a project with RYNX for premium websites, internal platforms, and automation-ready digital systems.',
    path: '/contact',
  })

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(initialFormState)
  const [status, setStatus] = useState({ type: '', message: '' })

  const serviceOptions = useMemo(() => serviceLines.map((item) => item.title), [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

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
        throw new Error(result.message || 'Unable to send your enquiry right now.')
      }

      setStatus({
        type: 'success',
        message: result.message || 'Your enquiry has been sent successfully.',
      })
      setForm(initialFormState)
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again in a moment.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageWrapper>
      <section className="hero-section">
        <div className="page-orb page-orb--top" />
        <div className="section-container">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="hero-tag">
              Start the conversation
            </motion.span>
            <motion.h1 variants={fadeUp} className="hero-title">
              Tell us what needs to be sharper, cleaner, or more production ready.
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-copy">
              Use the form below for websites, software surfaces, internal tools, or automation
              work. The project is wired for a Vercel-friendly contact flow, so handoff is clean when you go live.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container">
          <div className="contact-layout">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="contact-stack"
            >
              <motion.div variants={fadeUp} className="surface-card">
                <p className="cluster-label">What to include</p>
                <div className="list-panel" style={{ marginTop: '1rem' }}>
                  {[
                    'What the company does and where the current site or workflow feels weak.',
                    'What should look more premium after the redesign.',
                    'Your timeline, internal decision-maker, and ideal launch window.',
                  ].map((item) => (
                    <div key={item} className="list-panel__item">
                      <span className="list-panel__dot" />
                      <div className="list-panel__content">
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="surface-card">
                <p className="cluster-label">Contact details</p>
                <div className="list-panel" style={{ marginTop: '1rem' }}>
                  {contactChannels.map((item) => (
                    <div key={item.label} className="contact-row">
                      <span className="list-panel__dot" />
                      <div>
                        <p className="contact-row__label">{item.label}</p>
                        <p className="contact-row__value">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="surface-card">
                <div className="form-grid form-grid--two">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-field"
                    required
                  />
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="form-field"
                  />
                </div>

                <div className="form-grid form-grid--two" style={{ marginTop: '1rem' }}>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Work email"
                    className="form-field"
                    required
                  />
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select service focus</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-grid form-grid--two" style={{ marginTop: '1rem' }}>
                  <select
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Expected timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Budget range</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="hidden-field" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what needs to change, what should feel more premium, and what outcome matters most."
                  className="form-textarea"
                  style={{ marginTop: '1rem' }}
                  required
                />

                <p className="form-helper" style={{ marginTop: '0.9rem' }}>
                  In development, the form validates locally. In production on Vercel, it can send via Resend once the environment variables in the README are configured.
                </p>

                <button type="submit" disabled={loading} className="button button--primary" style={{ marginTop: '1rem' }}>
                  {loading ? 'Sending enquiry...' : 'Send enquiry'}
                </button>

                {status.message ? (
                  <div
                    className={`status-banner ${status.type === 'success' ? 'status-banner--success' : 'status-banner--error'}`}
                  >
                    {status.message}
                  </div>
                ) : null}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
