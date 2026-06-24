import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Seo from '../components/Seo'
import AnimatedPageHeader from '../components/AnimatedPageHeader'
import Reveal from '../components/Reveal'
import IndexNumeral from '../components/IndexNumeral'
import PhotoFrame from '../components/PhotoFrame'
import GradientMesh from '../components/GradientMesh'
import SectionDivider from '../components/SectionDivider'
import Button from '../components/Button'
import { processSteps } from '../data/process'

const quoteText =
  'The discipline is in the middle: being structured enough to act quickly, and patient enough to wait for the right conditions.'

export default function Approach() {
  const stepsRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start end', 'end start'],
  })

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <>
      <Seo
        title="Approach"
        description="A structured approach to every decision. From listening to stewardship, six disciplined steps guide every client relationship."
        path="/approach"
      />

      {/* Hero */}
      <AnimatedPageHeader
        eyebrow="The Process"
        headline="A structured approach to every decision."
        description="Every client relationship is built on clarity, transparency, and precision. From the initial consultation to final acquisition, each step is structured to provide confidence and control throughout the process."
      />

      {/* Process Steps with Scroll-Connected Line */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr] lg:gap-24">
            {/* Steps Column */}
            <div ref={stepsRef} className="relative">
              {/* Scroll-connected bronze line */}
              {!reduced && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-bronze/30"
                  aria-hidden
                >
                  <motion.div
                    className="absolute inset-x-0 top-0 bottom-0 bg-bronze"
                    style={{
                      scaleY: lineScaleY,
                      transformOrigin: 'top',
                    }}
                  />
                </motion.div>
              )}

              <div className={!reduced ? 'pl-8' : ''}>
                {processSteps.map((step, i) => (
                  <Reveal key={step.index} delay={i * 0.06}>
                    <div className="relative border-t border-line py-8 lg:py-10">
                      {/* Circle on the line */}
                      {!reduced && (
                        <motion.div
                          className="absolute -left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-bronze bg-paper"
                          initial={{ backgroundColor: 'var(--color-paper)' }}
                          whileInView={{ backgroundColor: 'var(--color-bronze)' }}
                          viewport={{ once: true, margin: '-20%' }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          style={{ left: '-1.065rem' }}
                        />
                      )}

                      <div className="flex items-baseline gap-6 lg:gap-10">
                        <IndexNumeral index={step.index} />
                        <div>
                          <h3 className="font-serif text-xl font-semibold text-ink lg:text-2xl">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-muted">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
                <div className="border-t border-line" />
              </div>
            </div>

            {/* Sticky Photo */}
            <Reveal delay={0.2}>
              <PhotoFrame
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Maha Attié — structured advisory process"
                aspect="aspect-[3/4]"
                parallax
                className="sticky top-32"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <SectionDivider variant="curve" color="ink" />
      <section className="relative bg-ink py-24 lg:py-32 overflow-hidden">
        <GradientMesh variant="dark" className="opacity-60" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12 text-center">
          <h2
            className="mx-auto max-w-4xl font-serif font-semibold leading-[1.2] text-paper"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            {quoteText.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={reduced ? {} : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>
      </section>
      <SectionDivider variant="curve" color="stone" />

      {/* CTA */}
      <section className="bg-stone py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 text-center">
          <Reveal>
            <p
              className="mx-auto max-w-2xl font-serif font-semibold leading-[1.15] text-ink mb-10"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              Ready to begin?
            </p>
            <p className="mx-auto max-w-xl text-lg text-muted mb-10">
              Every engagement starts with a conversation. Let&apos;s define what success looks like
              for your next decision.
            </p>
            <Button to="/contact">Begin the process</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
