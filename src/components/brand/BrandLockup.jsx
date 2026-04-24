import { Link } from 'react-router-dom'
import logo from '@/assets/logo.png'
import { cn } from '@/lib/utils'

export default function BrandLockup({
  className = '',
  compact = false,
  hideSubtitle = false,
  textClassName = '',
}) {
  return (
    <Link
      to="/"
      className={cn(
        'flex min-w-0 items-center',
        compact ? 'gap-3' : 'gap-4',
        className,
      )}
      aria-label="Go to the RYNX homepage"
    >
      <div
        className={cn(
          'shrink-0 overflow-hidden bg-black shadow-[0_18px_40px_-26px_rgba(15,23,42,0.65)] ring-1 ring-black/8 dark:ring-white/8',
          compact ? 'size-11 rounded-[18px]' : 'size-14 rounded-[22px]',
        )}
      >
        <img
          src={logo}
          alt="RYNX logo"
          className="size-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className={cn('min-w-0', textClassName)}>
        <p className="truncate text-sm font-semibold tracking-[-0.03em] text-foreground sm:text-[0.96rem]">
          RYNX
        </p>
        {!hideSubtitle ? (
          <p className="truncate text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.72rem]">
            Digital Systems
          </p>
        ) : null}
      </div>
    </Link>
  )
}
