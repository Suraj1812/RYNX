import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function SignalCarousel({ items, className = '' }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    loop: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) {
      return undefined
    }

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)

    const interval = window.setInterval(() => {
      emblaApi.scrollNext()
    }, 4200)

    return () => {
      emblaApi.off('select', onSelect)
      window.clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div className={cn('space-y-5', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {items.map((item) => (
            <div key={item.title} className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_52%]">
              <Card className="card-lift h-full rounded-[28px] border-border/70 bg-card/92 py-0 shadow-none">
                <CardContent className="px-6 py-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary/80">
                    {item.title}
                  </p>
                  <p className="mt-4 text-xl leading-tight tracking-[-0.04em] text-foreground">
                    {item.quote}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                'h-2.5 rounded-full bg-border transition-all',
                selectedIndex === index ? 'w-8 bg-primary' : 'w-2.5',
              )}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button type="button" size="icon-sm" variant="outline" className="rounded-full" onClick={() => emblaApi?.scrollPrev()}>
            <ArrowLeft className="size-4" />
          </Button>
          <Button type="button" size="icon-sm" variant="outline" className="rounded-full" onClick={() => emblaApi?.scrollNext()}>
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
