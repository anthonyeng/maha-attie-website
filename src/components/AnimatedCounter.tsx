import { useEffect, useRef } from 'react'
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion'
import clsx from 'clsx'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  label: string
  className?: string
}

export default function AnimatedCounter({
  end,
  suffix = '',
  label,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => Math.round(v))
  const displayRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionValue, end, {
      type: 'spring',
      stiffness: 50,
      damping: 20,
    })
    return controls.stop
  }, [isInView, end, motionValue])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${v}${suffix}`
      }
    })
    return unsubscribe
  }, [rounded, suffix])

  return (
    <div ref={ref} className={clsx('text-center', className)}>
      <span
        ref={displayRef}
        className="block font-serif text-6xl font-light text-ink-soft lg:text-7xl"
      >
        0{suffix}
      </span>
      <p className="mt-3 font-sans text-sm font-medium uppercase tracking-[0.15em] text-muted">{label}</p>
    </div>
  )
}
