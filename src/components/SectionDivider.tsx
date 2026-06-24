import { motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'

interface SectionDividerProps {
  variant: 'wave' | 'curve' | 'diagonal'
  color?: string
  flip?: boolean
  className?: string
}

const colorMap: Record<string, string> = {
  paper: 'var(--color-paper)',
  ink: 'var(--color-ink)',
  stone: 'var(--color-stone)',
  bronze: 'var(--color-bronze)',
  'ink-soft': 'var(--color-ink-soft)',
  'ink-deep': 'var(--color-ink-deep)',
}

const paths: Record<SectionDividerProps['variant'], string> = {
  wave: 'M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z',
  curve: 'M0,80 Q720,0 1440,80 L1440,120 L0,120 Z',
  diagonal: 'M0,120 L1440,0 L1440,120 L0,120 Z',
}

export default function SectionDivider({
  variant,
  color = 'paper',
  flip = false,
  className,
}: SectionDividerProps) {
  const reduced = useReducedMotion()
  const fill = colorMap[color] || `var(--color-${color})`

  return (
    <div
      className={clsx('w-full leading-none', flip && 'rotate-180', className)}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={paths[variant]}
          fill={fill}
          initial={reduced ? {} : { pathLength: 0 }}
          whileInView={reduced ? {} : { pathLength: 1 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  )
}
