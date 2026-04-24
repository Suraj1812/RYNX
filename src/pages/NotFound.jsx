import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import PageWrapper from '@/components/layout/PageWrapper'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found on RYNX.',
    path: '/404',
  })

  return (
    <PageWrapper>
      <section className="hero-section" style={{ minHeight: 'calc(100vh - 8rem)', display: 'flex', alignItems: 'center' }}>
        <div className="page-orb page-orb--top" />
        <div className="page-orb page-orb--bottom" />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            <p className="cluster-label">404</p>
            <h1 className="hero-title" style={{ maxWidth: 'none', marginInline: 'auto' }}>
              The page is missing, but the build is still on track.
            </h1>
            <p className="hero-copy" style={{ marginInline: 'auto' }}>
              The route you tried does not exist. Head back to the main site and continue from there.
            </p>
            <div className="action-row" style={{ justifyContent: 'center' }}>
              <Link to="/" className="button button--primary">
                Return home
                <HiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
