import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import PageWrapper from '@/components/layout/PageWrapper'
import { caseStudies, projectCategories } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { fadeUp, staggerContainer } from '@/utils/animations'

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-backdrop"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="modal-card"
      >
        <button
          type="button"
          onClick={onClose}
          className="modal-close"
        >
          <HiX className="w-4 h-4" />
        </button>

        <div>
          <span className="case-card__category">{project.category}</span>
          <h2 className="section-title" style={{ marginTop: '1rem', maxWidth: '15ch' }}>
            {project.title}
          </h2>
          <p className="section-copy">{project.summary}</p>

          <div className="case-card__impact" style={{ marginTop: '1.5rem' }}>
            {project.impact.map((item) => (
              <div key={item.label} className="case-card__impact-item">
                <p className="case-card__impact-value">{item.value}</p>
                <p className="case-card__impact-label">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="detail-block">
            <p className="detail-label">Challenge</p>
            <p className="detail-text">{project.challenge}</p>
          </div>

          <div className="detail-block">
            <p className="detail-label">Solution</p>
            <p className="detail-text">{project.solution}</p>
          </div>

          <div className="detail-block">
            <p className="detail-label">Services</p>
            <div className="tag-list" style={{ marginTop: '0.75rem' }}>
              {project.services.map((service) => (
                <span key={service} className="tag">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-block">
            <p className="detail-label">Stack</p>
            <div className="tag-list" style={{ marginTop: '0.75rem' }}>
              {project.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  usePageMeta({
    title: 'Selected Work',
    description:
      'Browse representative RYNX work across internal systems, premium web experiences, and automation-ready delivery.',
    path: '/projects',
  })

  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter((item) => item.category === activeCategory)

  return (
    <PageWrapper>
      <section className="hero-section">
        <div className="page-orb page-orb--top" />
        <div className="section-container">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="hero-tag">
              Selected engagements
            </motion.span>
            <motion.h1 variants={fadeUp} className="hero-title">
              Work designed to feel credible at first glance and reliable after launch.
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-copy">
              These examples show the type of systems RYNX is built to deliver: calmer interfaces,
              clearer information architecture, and cleaner production handoff.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="page-section page-section--tight">
        <div className="section-container">
          <div className="hero-signal-row">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className="pill"
                style={
                  activeCategory === cat
                    ? {
                        background: 'var(--brand)',
                        color: '#fff',
                        borderColor: 'transparent',
                      }
                    : undefined
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container">
          <motion.div
            layout
            className="card-grid card-grid--two"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  onClick={() => setSelectedProject(project)}
                  className="surface-card surface-card--interactive"
                >
                  <div className="case-card__top">
                    <span className="case-card__category">{project.category}</span>
                    <span className="visually-muted">Open</span>
                  </div>
                  <h2 className="case-card__title">{project.title}</h2>
                  <p className="case-card__summary">{project.summary}</p>
                  <div className="case-card__impact">
                    {project.impact.map((item) => (
                      <div key={item.label} className="case-card__impact-item">
                        <p className="case-card__impact-value">{item.value}</p>
                        <p className="case-card__impact-label">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="tag-list">
                    {project.services.map((service) => (
                      <span key={service} className="tag">
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
