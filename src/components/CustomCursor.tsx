import { useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'

export default function CustomCursor() {
  const reduced = useReducedMotion()
  const [hasFinePointer, setHasFinePointer] = useState(false)
  const [isGrow, setIsGrow] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { stiffness: 150, damping: 15 }
  const ringX = useSpring(mouseX, springConfig)
  const ringY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    setHasFinePointer(mq.matches)

    const onChange = (e: MediaQueryListEvent) => setHasFinePointer(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!hasFinePointer || reduced) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const target = e.target as HTMLElement
      const grow = !!target.closest('[data-cursor="grow"]')
      setIsGrow(grow)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [hasFinePointer, reduced, mouseX, mouseY])

  if (!hasFinePointer || reduced) return null

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] h-3 w-3 rounded-full bg-bronze mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full border-2 border-bronze/40 mix-blend-difference"
        style={{
          width: 40,
          height: 40,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ scale: isGrow ? 1.5 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  )
}
