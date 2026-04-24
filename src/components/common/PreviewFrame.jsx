import { cn } from '@/lib/utils'

export default function PreviewFrame({
  src,
  alt,
  className = '',
  ratioClassName = 'aspect-[4/3]',
  imgClassName = '',
  dark = false,
  priority = false,
  children,
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[28px] border border-border/70',
        dark ? 'bg-slate-950' : 'bg-card/92',
        className,
      )}
    >
      <div className={cn('relative', ratioClassName)}>
        <img
          src={src}
          alt={alt}
          className={cn('size-full object-cover', imgClassName)}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/24 via-transparent to-transparent" />
        {children}
      </div>
    </div>
  )
}
