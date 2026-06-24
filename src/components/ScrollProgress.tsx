import { motion, useScroll, useReducedMotion } from 'framer-motion'

export default function ScrollProgress() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()

  if (reduced) return null

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-bronze"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
