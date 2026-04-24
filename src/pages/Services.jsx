import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import {
  capabilities,
  faqItems,
  processSteps,
  serviceLines,
} from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function Services() {
  usePageMeta({
    title: 'Services',
    description:
      'Explore RYNX service lines across premium websites, custom platforms, automation systems, and launch-ready frontend delivery.',
    path: '/services',
  })

  return (
    <PageWrapper>
      <section className="hero-section">
        <div className="page-orb page-orb--top" />
        <div className="section-container">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="hero-tag">
              Services built for premium outcomes
            </motion.span>
            <motion.h1 variants={fadeUp} className="hero-title">
              Strategy, design, and engineering for teams that want a cleaner digital front.
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-copy">
              RYNX focuses on the layer where perception and execution meet: websites that
              raise confidence, product surfaces that reduce friction, and launch setup that
              makes production less stressful.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container">
          <SectionHeading
            label="Service Lines"
            title="Built to upgrade both the visual signal and the delivery discipline."
            subtitle="Each service line is shaped around outcomes a company can actually feel after launch."
          />

          <div className="card-grid card-grid--two">
            {serviceLines.map((service) => (
              <motion.article
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="surface-card surface-card--interactive"
              >
                <p className="cluster-label">{service.id.replace('-', ' ')}</p>
                <h3 className="service-card__title" style={{ marginTop: '0.7rem' }}>
                  {service.title}
                </h3>
                <p className="service-card__summary">{service.summary}</p>
                <ul className="detail-list">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {service.deliverables.map((deliverable) => (
                    <span key={deliverable} className="tag">
                      {deliverable}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--muted">
        <div className="section-container split-layout">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeading
              label="Capabilities"
              title="The practical layer behind the visuals."
              subtitle="The site looks premium because the structure, pacing, and technical details are handled with the same care."
              center={false}
            />
            <div className="tag-list">
              {capabilities.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="surface-card"
          >
            <p className="cluster-label">Delivery Rhythm</p>
            <div className="list-panel" style={{ marginTop: '1rem' }}>
              {processSteps.map((step) => (
                <motion.div key={step.title} variants={fadeUp} className="list-panel__item">
                  <span className="list-panel__dot" />
                  <div className="list-panel__content">
                    <strong>{step.title}</strong>
                    <span>{step.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container">
          <SectionHeading
            label="FAQ"
            title="A few common questions before teams reach out."
            subtitle="Short answers so you can decide quickly whether the fit is right."
          />

          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/contact" className="inline-link">
              Start the conversation
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
