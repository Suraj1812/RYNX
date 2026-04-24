import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { buttonPress } from '@/utils/animations'
import { useMagnetic } from '@/hooks/useMagnetic'

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'default',
  icon = false,
  magnetic = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic(0.2)

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer select-none'

  const variants = {
    primary: 'bg-electric text-white hover:bg-electric-light shadow-lg shadow-electric/20 hover:shadow-electric/30',
    secondary: 'bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5',
    ghost: 'bg-transparent text-soft-gray hover:text-white',
  }

  const sizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base',
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {icon && (
        <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )

  const motionProps = {
    whileTap: buttonPress.tap,
    whileHover: magnetic ? undefined : buttonPress.hover,
    className: `${combinedStyles} group`,
    ...(magnetic ? {
      ref,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    } : {}),
    ...props,
  }

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className="flex items-center gap-2 w-full h-full justify-center">
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" {...motionProps}>
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      className={`${combinedStyles} group ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {content}
    </motion.button>
  )
}
