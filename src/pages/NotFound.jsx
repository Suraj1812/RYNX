import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
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
      <section className="mx-auto flex min-h-[70vh] w-full max-w-7xl items-center px-4 pb-12 sm:px-6 lg:px-8">
        <Card className="surface-panel mx-auto w-full max-w-3xl rounded-[32px] py-0 shadow-none">
          <CardContent className="space-y-6 px-6 py-8 text-center sm:px-10 sm:py-12">
            <Badge variant="outline" className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary/80">
              404
            </Badge>
            <h1 className="display-title mx-auto max-w-2xl">
              This route is missing, but the redesign is still intact.
            </h1>
            <p className="section-copy mx-auto">
              The page you tried to open does not exist. Use the main navigation to get back into the site.
            </p>
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <Link to="/">
                Return home
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </PageWrapper>
  )
}
