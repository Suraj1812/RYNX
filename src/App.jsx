import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/common/ScrollProgress'
import BackToTop from '@/components/common/BackToTop'
import SmoothScrollProvider from '@/components/common/SmoothScrollProvider'
import { ThemeProvider } from '@/context/ThemeContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const Projects = lazy(() => import('@/pages/Projects'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  const { scrollTo } = useSmoothScroll()

  useEffect(() => {
    scrollTo(0, { immediate: true, force: true })
  }, [pathname, scrollTo])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

function AppShell() {
  const { pathname } = useLocation()

  return (
    <div className="site-shell">
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <main key={pathname} className="flex-1">
        <Suspense
          fallback={
            <div className="route-loader">
              <div className="route-loader__ring" />
            </div>
          }
        >
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <Router>
          <AppShell />
        </Router>
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}
