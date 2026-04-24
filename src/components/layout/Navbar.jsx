import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Menu } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import ThemeToggle from '@/components/layout/ThemeToggle'
import { navLinks } from '@/data/site'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="surface-panel px-4 py-3 sm:px-5"
        >
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
                R
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-[-0.03em]">RYNX</p>
                <p className="truncate text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Digital Systems
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href

                return (
                  <Button
                    key={link.href}
                    asChild
                    variant="ghost"
                    size="sm"
                    className={cn(
                      'rounded-full px-4 text-sm text-muted-foreground hover:text-foreground',
                      isActive && 'bg-secondary text-foreground',
                    )}
                  >
                    <Link to={link.href}>{link.label}</Link>
                  </Button>
                )
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Badge variant="outline" className="rounded-full border-border/70 bg-secondary/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                Vercel ready
              </Badge>
              <ThemeToggle />
              <Button asChild className="rounded-full px-5">
                <Link to="/contact">
                  Start a project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon-sm" className="rounded-full border-border/70 bg-background/70">
                    <Menu className="size-4" />
                    <span className="sr-only">Open navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[88vw] max-w-sm border-border/70 bg-background/98 p-0">
                  <SheetHeader className="border-b border-border/70 pb-5">
                    <SheetTitle>RYNX</SheetTitle>
                    <SheetDescription>
                      Premium websites, internal tools, and launch-ready digital systems.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col gap-2 px-4 py-5">
                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.href

                      return (
                        <Button
                          key={link.href}
                          asChild
                          variant={isActive ? 'secondary' : 'ghost'}
                          className="h-11 justify-start rounded-2xl px-4"
                        >
                          <Link to={link.href} onClick={() => setMobileOpen(false)}>
                            {link.label}
                          </Link>
                        </Button>
                      )
                    })}

                    <div className="mt-4 flex flex-col gap-3">
                      <Badge variant="outline" className="rounded-full border-border/70 bg-secondary/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                        Corporate-grade redesign
                      </Badge>
                      <Button asChild className="h-11 rounded-2xl">
                        <Link to="/contact" onClick={() => setMobileOpen(false)}>
                          Contact RYNX
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
