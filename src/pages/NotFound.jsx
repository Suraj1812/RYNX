import { Link } from 'react-router-dom'
import { ArrowRight, Compass } from 'lucide-react'
import BrandLockup from '@/components/brand/BrandLockup'
import PageWrapper from '@/components/layout/PageWrapper'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found on RYNX.',
    path: '/404',
  })

  return (
    <PageWrapper>
      <section className="page-shell flex min-h-[70vh] items-center pb-12">
        <Card className="section-band mx-auto w-full max-w-4xl py-0">
          <CardContent className="grid gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="space-y-5">
              <BrandLockup />
              <Badge
                variant="outline"
                className="rounded-full border-border/70 bg-background/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80"
              >
                404
              </Badge>
              <h1 className="section-title max-w-2xl">
                This route is missing, but the brand system is still in place.
              </h1>
              <p className="section-copy">
                The page you tried to open does not exist anymore. Use the main navigation to get
                back to the work, services, or project brief.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-full px-6">
                  <Link to="/">
                    Return home
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-border/70 bg-background/60 px-6"
                >
                  <Link to="/contact">Start a brief</Link>
                </Button>
              </div>
            </div>

            <div className="soft-panel flex min-h-[18rem] flex-col items-center justify-center gap-4 px-6 py-10 text-center">
              <div className="flex size-16 items-center justify-center rounded-[24px] bg-primary/10 text-primary">
                <Compass className="size-8" />
              </div>
              <p className="font-heading text-6xl tracking-[-0.08em]">404</p>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                The destination changed. The premium rebuild did not.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </PageWrapper>
  )
}
