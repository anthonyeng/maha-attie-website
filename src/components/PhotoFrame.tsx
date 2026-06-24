import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import clsx from 'clsx'

interface PhotoFrameProps {
  src: string
  alt: string
  className?: string
  parallax?: boolean
  aspect?: string
}

export default function PhotoFrame({
  src,
  alt,
  className,
  parallax = false,
  aspect = 'aspect-[3/4]',
}: PhotoFrameProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <div
      ref={ref}
      className={clsx('relative overflow-hidden bg-stone', aspect, className)}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 z-10 bg-ink-soft/[0.06]" />
      {parallax && !reduced ? (
        <motion.img
          src={src}
          alt={alt}
          style={{ y }}
          className="absolute inset-0 h-[116%] w-full object-cover -top-[8%] contrast-[1.02] brightness-[0.99]"
          loading="lazy"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover contrast-[1.02] brightness-[0.99]"
          loading="lazy"
        />
      )}
    </div>
  )
}
