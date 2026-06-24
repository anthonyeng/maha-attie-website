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
      {/* Navy overlay */}
      <div className="absolute inset-0 z-10 bg-ink/[0.12]" />
      {parallax && !reduced ? (
        <motion.img
          src={src}
          alt={alt}
          style={{ y }}
          className="absolute inset-0 h-[116%] w-full object-cover -top-[8%] grayscale-[0.12] contrast-[1.04] brightness-[0.98]"
          loading="lazy"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover grayscale-[0.12] contrast-[1.04] brightness-[0.98]"
          loading="lazy"
        />
      )}
    </div>
  )
}
