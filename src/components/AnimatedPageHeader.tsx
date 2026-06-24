import { motion, useReducedMotion } from 'framer-motion'
import GradientMesh from './GradientMesh'
import Eyebrow from './Eyebrow'

interface AnimatedPageHeaderProps {
  eyebrow: string
  headline: string
  description?: string
}

export default function AnimatedPageHeader({
  eyebrow,
  headline,
  description,
}: AnimatedPageHeaderProps) {
  const reduced = useReducedMotion()
  const words = headline.split(' ')

  const fadeUp = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  const eyebrowDelay = 0
  const headlineStartDelay = 0.2
  const descDelay = headlineStartDelay + words.length * 0.04 + 0.3

  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-32 pb-20">
      <GradientMesh variant="warm" className="opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        <motion.div {...fadeUp(eyebrowDelay)}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>

        <h1 className="mt-4 flex flex-wrap gap-x-[0.3em] font-serif text-4xl font-light leading-tight text-ink md:text-5xl lg:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              {...(reduced
                ? {}
                : {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: {
                      duration: 0.5,
                      delay: headlineStartDelay + i * 0.04,
                      ease: [0.22, 1, 0.36, 1] as const,
                    },
                  })}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {description && (
          <motion.p
            className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted"
            {...fadeUp(descDelay)}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
