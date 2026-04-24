import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import {
  caseStudies,
  homeStats,
  processSteps,
  proofPoints,
  serviceLines,
} from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function Home() {
  usePageMeta({
    title: 'Home',
    description:
      'RYNX builds premium websites, software surfaces, and automation-ready systems for businesses that want a sharper digital presence.',
    path: '/',
  })

  return (
    <PageWrapper>
      <section className="hero-section">
        <div className="page-orb page-orb--top" />
        <div className="page-orb page-orb--bottom" />

        <div className="section-container hero-grid">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="hero-tag">
              Premium digital systems for serious teams
            </motion.span>

            <motion.h1 variants={fadeUp} className="hero-title">
              Websites and software surfaces that feel <span className="display-accent">boardroom ready</span> from day one.
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-copy">
              RYNX helps ambitious companies upgrade their digital presence with sharper
              websites, cleaner internal tools, and automation-ready frontend systems that
              look credible the moment someone lands on them.
            </motion.p>

            <motion.div variants={fadeUp} className="action-row">
              <Link to="/contact" className="button button--primary">
                Start a project
                <HiArrowRight />
              </Link>
              <Link to="/projects" className="button button--secondary">
                See selected work
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-signal-row">
              {proofPoints.map((point) => (
                <span key={point} className="pill">
                  <span className="pill__dot" />
                  {point}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 28, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hero-panel"
          >
            <p className="cluster-label">What the work needs to signal</p>
            <h2 className="hero-panel__title">Premium, clear, reliable, and ready to launch.</h2>
            <p className="hero-panel__copy">
              The goal is not to look trendy for one month. The goal is to look sharp enough for
              enterprise buyers, confident enough for leadership, and stable enough to put live on Vercel.
            </p>

            <div className="metrics-grid">
              <div className="metric-card">
                <p className="metric-card__value">01</p>
                <p className="metric-card__label">Visual language that feels mature instead of generated.</p>
                <span className="metric-card__tag">Design discipline</span>
              </div>
              <div className="metric-card">
                <p className="metric-card__value">02</p>
                <p className="metric-card__label">Content structure that sells the business without noise.</p>
                <span className="metric-card__tag">Messaging clarity</span>
              </div>
              <div className="metric-card">
                <p className="metric-card__value">03</p>
                <p className="metric-card__label">Deployment, metadata, and contact flows aligned for launch.</p>
                <span className="metric-card__tag">Production readiness</span>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="page-section page-section--tight">
        <div className="section-container stat-strip">
          {homeStats.map((stat) => (
            <div key={stat.label} className="surface-card">
              <p className="metric-card__value">{stat.value}</p>
              <p className="metric-card__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-container">
          <SectionHeading
            label="Core Services"
            title="What RYNX builds when the website has to look expensive and the product still has to work."
            subtitle="The sweet spot is premium presentation backed by clean implementation, not just cosmetic redesign."
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
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__summary">{service.summary}</p>
                <ul className="detail-list">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {service.deliverables.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--muted">
        <div className="section-container">
          <SectionHeading
            label="Selected Work"
            title="Representative engagements that show the level of polish we aim for."
            subtitle="These are the kinds of systems, websites, and workflows RYNX is set up to deliver."
          />

          <div className="card-grid card-grid--three">
            {caseStudies.map((study) => (
              <motion.article
                key={study.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="surface-card surface-card--interactive"
              >
                <div className="case-card__top">
                  <span className="case-card__category">{study.category}</span>
                </div>
                <h3 className="case-card__title">{study.title}</h3>
                <p className="case-card__summary">{study.summary}</p>
                <div className="case-card__impact">
                  {study.impact.map((item) => (
                    <div key={item.label} className="case-card__impact-item">
                      <p className="case-card__impact-value">{item.value}</p>
                      <p className="case-card__impact-label">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/projects" className="inline-link">
              Open the full work page
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container split-layout">
          <div>
            <SectionHeading
              label="Working Model"
              title="How the engagement stays structured from concept to launch."
              subtitle="The process is intentionally small and direct so the work keeps moving and the output still feels premium."
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
            <p className="cluster-label">Ready to move</p>
            <h2 className="section-title" style={{ marginTop: '0.8rem' }}>
              If the current site feels generic, we can fix the first impression and the production setup at the same time.
            </h2>
            <p className="section-copy">
              The strongest outcome is a website or platform that looks intentional, reads clearly, and ships with enough operational discipline to go live without last-minute chaos.
            </p>
            <div className="action-row">
              <Link to="/contact" className="button button--primary">
                Book the build
                <HiArrowRight />
              </Link>
              <Link to="/services" className="button button--ghost">
                Explore services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
