import { motion } from 'framer-motion'
import clsx from 'clsx'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
}

export default function GlassCard({
  children,
  className,
  hoverable = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={clsx(
        'backdrop-blur-md bg-paper/60 border border-line/30 rounded-sm p-8',
        className,
      )}
      whileHover={
        hoverable
          ? {
              y: -2,
              boxShadow: '0 4px 30px rgba(29,41,68,0.15)',
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
