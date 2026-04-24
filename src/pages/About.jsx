import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import {
  aboutHighlights,
  principles,
  processSteps,
} from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function About() {
  usePageMeta({
    title: 'About',
    description:
      'Learn how RYNX approaches product websites, software surfaces, and launch-ready frontend delivery with a premium, production-first mindset.',
    path: '/about',
  })

  return (
    <PageWrapper>
      <section className="hero-section">
        <div className="page-orb page-orb--top" />
        <div className="section-container">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="hero-tag">
              About RYNX
            </motion.span>
            <motion.h1 variants={fadeUp} className="hero-title">
              A small studio with a strong bias toward clarity, polish, and clean launch execution.
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-copy">
              RYNX exists for teams that have outgrown generic-looking websites and rushed software
              surfaces. The work is focused on premium digital presence, thoughtful structure, and
              shipping without production shortcuts.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container">
          <div className="split-layout">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <SectionHeading
                label="Positioning"
                title="The aim is simple: make the company feel more established without adding noise."
                subtitle="That means deliberate typography, better pacing, stronger content hierarchy, and a frontend that is ready to move into production instead of stopping at mockup quality."
                center={false}
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="surface-card"
            >
              <p className="cluster-label">What teams usually want from us</p>
              <div className="list-panel" style={{ marginTop: '1rem' }}>
                {aboutHighlights.map((item) => (
                  <motion.div key={item} variants={fadeUp} className="list-panel__item">
                    <span className="list-panel__dot" />
                    <div className="list-panel__content">
                      <strong>{item}</strong>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--muted">
        <div className="section-container">
          <SectionHeading
            label="Principles"
            title="The standards behind the work."
            subtitle="These are the rules that keep the output from drifting into generic agency territory."
          />

          <div className="card-grid card-grid--three">
            {principles.map((principle) => (
              <motion.article
                key={principle.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="surface-card surface-card--interactive"
              >
                <h3 className="service-card__title">{principle.title}</h3>
                <p className="service-card__summary">{principle.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container split-layout">
          <div>
            <SectionHeading
              label="How Work Moves"
              title="Direct collaboration, small loops, and no ornamental complexity."
              subtitle="The process stays lightweight because the main goal is to keep judgment close to execution."
              center={false}
            />
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="surface-card"
              >
                <div className="process-step__index">{index + 1}</div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__description">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--tight">
        <div className="section-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="surface-card"
          >
            <p className="cluster-label">Next Step</p>
            <h2 className="section-title" style={{ marginTop: '0.8rem' }}>
              If the business is ready for a cleaner digital presence, let’s scope it properly.
            </h2>
            <p className="section-copy">
              The strongest results come when we tighten the visual system, messaging, and launch
              setup together instead of treating them as separate problems.
            </p>
            <div className="action-row">
              <Link to="/contact" className="button button--primary">
                Contact RYNX
                <HiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
