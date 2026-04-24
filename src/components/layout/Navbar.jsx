import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import ThemeToggle from '@/components/layout/ThemeToggle'
import { navLinks } from '@/data/site'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="section-container">
          <motion.nav
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="site-nav__inner"
          >
            <Link to="/" className="brand" aria-label="RYNX home">
              <span className="brand__mark">R</span>
              <span className="brand__text">
                <span className="brand__name">RYNX</span>
                <span className="brand__sub">Digital Systems</span>
              </span>
            </Link>

            <div className="nav-links">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="nav-actions">
              <ThemeToggle />
              <Link to="/contact" className="button button--primary">
                Start a project
                <HiArrowRight />
              </Link>

              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setMobileOpen((currentState) => !currentState)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <HiX className="h-5 w-5" /> : <HiOutlineMenuAlt3 className="h-5 w-5" />}
              </button>
            </div>
          </motion.nav>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="mobile-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="mobile-panel__card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`mobile-panel__link ${isActive ? 'mobile-panel__link--active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <div className="center-row" style={{ marginTop: '0.5rem' }}>
                <ThemeToggle />
                <Link to="/contact" className="button button--primary" onClick={() => setMobileOpen(false)}>
                  Let&apos;s talk
                  <HiArrowRight />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
