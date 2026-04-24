import { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function CountUpStat({
  value,
  suffix = '',
  prefix = '',
  label,
  note,
  className = '',
}) {
  const { ref, inView } = useInView({
    threshold: 0.45,
    triggerOnce: true,
  })
  const countRef = useRef(null)
  const { start, reset } = useCountUp({
    ref: countRef,
    start: 0,
    end: value,
    duration: 2.1,
    separator: ',',
    prefix,
    suffix,
    decimals: Number.isInteger(value) ? 0 : 1,
    startOnMount: false,
  })

  useEffect(() => {
    if (!inView) {
      return
    }

    reset()
    start()
  }, [inView, reset, start])

  return (
    <div ref={ref}>
      <Card className={cn('card-lift rounded-[26px] border-border/70 bg-card/92 py-0 shadow-none', className)}>
        <CardContent className="px-5 py-5">
          <p ref={countRef} className="stat-value">{`${prefix}0${suffix}`}</p>
          <p className="mt-2 text-sm font-medium tracking-[-0.02em] text-foreground">{label}</p>
          {note ? <p className="mt-2 text-sm leading-6 text-muted-foreground">{note}</p> : null}
        </CardContent>
      </Card>
    </div>
  )
}
