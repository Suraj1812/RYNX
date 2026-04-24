import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiOutlineMail } from 'react-icons/hi'
import { navLinks, serviceLines, siteConfig } from '@/data/site'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function Footer() {
  return (
    <footer className="site-footer">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="section-container"
      >
        <div className="site-footer__panel">
          <div className="footer-grid">
            <motion.div variants={fadeUp}>
              <Link to="/" className="brand" aria-label="RYNX home">
                <span className="brand__mark">R</span>
                <span className="brand__text">
                  <span className="brand__name">RYNX</span>
                  <span className="brand__sub">Digital Systems</span>
                </span>
              </Link>
              <p className="footer-note" style={{ marginTop: '1rem' }}>
                Premium websites, internal tools, and automation-ready digital systems designed to
                help ambitious teams look sharper and move faster.
              </p>
              <div className="center-row" style={{ marginTop: '1.1rem' }}>
                <a href={`mailto:${siteConfig.email}`} className="inline-link">
                  <HiOutlineMail />
                  {siteConfig.email}
                </a>
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="inline-link">
                  GitHub
                  <HiArrowRight />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="footer-title">Navigation</p>
              <div className="footer-list">
                {navLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="visually-muted">
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="footer-title">Focus Areas</p>
              <div className="footer-list">
                {serviceLines.map((service) => (
                  <p key={service.id} className="visually-muted">
                    {service.title}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="footer-title">Launch Notes</p>
              <div className="footer-list">
                <p className="visually-muted">Light and dark mode included</p>
                <p className="visually-muted">Metadata and Open Graph ready</p>
                <p className="visually-muted">Contact flow aligned for Vercel</p>
                <p className="visually-muted">README updated for production handoff</p>
              </div>
            </motion.div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} RYNX. Built to ship cleanly.</p>
            <p>{siteConfig.location} based, working worldwide.</p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
