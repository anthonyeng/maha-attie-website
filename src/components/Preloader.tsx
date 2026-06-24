import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

interface PreloaderProps {
  onComplete?: () => void
}

const SESSION_KEY = 'preloaderShown'

export default function Preloader({ onComplete }: PreloaderProps) {
  const reduced = useReducedMotion()
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    return !sessionStorage.getItem(SESSION_KEY)
  })

  useEffect(() => {
    if (!show) {
      onComplete?.()
      return
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, '1')
      setShow(false)
      onComplete?.()
    }, reduced ? 200 : 2000)

    return () => clearTimeout(timer)
  }, [show, onComplete, reduced])

  const name = 'Maha Attie'

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex font-serif text-4xl text-paper md:text-5xl" aria-hidden="true">
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: reduced ? 0 : i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="mt-4 h-px bg-bronze"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{
              duration: 0.6,
              delay: reduced ? 0 : name.length * 0.04 + 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
