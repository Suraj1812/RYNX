import { useRef } from 'react'
import { cn } from '@/lib/utils'

export default function PreviewFrame({
  src,
  alt,
  className = '',
  ratioClassName = 'aspect-[4/3]',
  imgClassName = '',
  dark = false,
  priority = false,
  tilt = true,
  children,
}) {
  const frameRef = useRef(null)

  const setTilt = (rotateX, rotateY, pointerX, pointerY, glowOpacity) => {
    if (!frameRef.current) {
      return
    }

    frameRef.current.style.setProperty('--preview-rotate-x', `${rotateX}deg`)
    frameRef.current.style.setProperty('--preview-rotate-y', `${rotateY}deg`)
    frameRef.current.style.setProperty('--preview-pointer-x', `${pointerX}%`)
    frameRef.current.style.setProperty('--preview-pointer-y', `${pointerY}%`)
    frameRef.current.style.setProperty('--preview-glow-opacity', `${glowOpacity}`)
  }

  const handlePointerMove = (event) => {
    if (!tilt || !frameRef.current) {
      return
    }

    const bounds = frameRef.current.getBoundingClientRect()
    const pointerX = ((event.clientX - bounds.left) / bounds.width) * 100
    const pointerY = ((event.clientY - bounds.top) / bounds.height) * 100
    const rotateY = ((pointerX - 50) / 50) * 7.5
    const rotateX = ((50 - pointerY) / 50) * 7.5

    setTilt(rotateX, rotateY, pointerX, pointerY, 1)
  }

  const handlePointerLeave = () => {
    if (!tilt) {
      return
    }

    setTilt(0, 0, 50, 50, 0)
  }

  return (
    <div
      className={cn('preview-frame', tilt && 'preview-frame--tilt', className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        ref={frameRef}
        className={cn(
          'preview-frame__inner overflow-hidden rounded-[28px] border border-border/70',
          dark ? 'bg-slate-950' : 'bg-card/92',
        )}
      >
        <div className="preview-frame__glow" />
        <div className={cn('preview-frame__media-wrap relative', ratioClassName)}>
          <img
            src={src}
            alt={alt}
            className={cn('preview-frame__media size-full object-cover', imgClassName)}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
          <div className="preview-frame__mesh" />
          <div className="preview-frame__highlight" />
          <div className="preview-frame__shade" />
          {children ? <div className="preview-frame__content">{children}</div> : null}
        </div>
      </div>
    </div>
  )
}
