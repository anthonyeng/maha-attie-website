import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'ghost' | 'link'
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  type = 'button',
  className,
  onClick,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-sans font-medium transition-all duration-300'
  const variants = {
    primary:
      'bg-bronze text-paper px-7 py-3.5 text-sm tracking-[0.08em] uppercase hover:bg-bronze-dk hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(160,106,59,0.3)]',
    ghost:
      'border border-line text-ink px-7 py-3.5 text-sm tracking-[0.08em] uppercase hover:border-bronze hover:text-bronze',
    link: 'text-bronze text-sm tracking-[0.08em] uppercase hover:text-bronze-dk group',
  }

  const classes = clsx(base, variants[variant], className)

  if (to) {
    return (
      <motion.div whileHover={{ y: variant === 'link' ? 0 : -1 }} className="inline-block">
        <Link to={to} className={classes} data-cursor="grow">
          {children}
          {variant === 'link' && (
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          )}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div whileHover={{ y: variant === 'link' ? 0 : -1 }} className="inline-block">
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} data-cursor="grow">
          {children}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ y: variant === 'link' ? 0 : -1 }}
      type={type}
      className={classes}
      onClick={onClick}
      data-cursor="grow"
    >
      {children}
      {variant === 'link' && (
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      )}
    </motion.button>
  )
}
