import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Seo from '../components/Seo'
import AnimatedPageHeader from '../components/AnimatedPageHeader'
import GlassCard from '../components/GlassCard'
import Reveal from '../components/Reveal'
import PhotoFrame from '../components/PhotoFrame'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { milestones } from '../data/timeline'

/* ───── Values ───── */
const values = [
  {
    num: '01',
    title: 'Trust',
    description: 'Relationships before transactions.',
  },
  {
    num: '02',
    title: 'Discretion',
    description: 'Quiet sourcing, private process.',
  },
  {
    num: '03',
    title: 'Clarity',
    description: 'The decision defined before money moves.',
  },
]

/* ───── Credentials ───── */
const credentials = [
  {
    num: '01',
    title: '15+ Years',
    description: 'Operational experience across three markets',
  },
  {
    num: '02',
    title: 'Private Investors',
    description: 'Trusted by HNW individuals and family offices',
  },
  {
    num: '03',
    title: 'Diplomatic Missions',
    description: 'Engaged by European Union missions in Lebanon',
  },
  {
    num: '04',
    title: 'SkyRise Partnership',
    description: 'Supported by 15+ years of operational infrastructure',
  },
]

/* ═══════════════════════════════════════════════════════════
   Timeline Section
   ═══════════════════════════════════════════════════════════ */
function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineScale = useTransform(scrollYProgress, [0.05, 0.85], [0, 1])

  return (
    <section ref={containerRef} className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <Reveal>
          <Eyebrow>The Journey</Eyebrow>
          <h2
            className="mt-4 font-serif font-light text-ink"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Key milestones.
          </h2>
        </Reveal>

        <div className="relative mt-16 lg:mt-24">
          {/* Central bronze line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-line/20 lg:left-1/2 lg:-translate-x-px">
            <motion.div
              className="h-full w-full origin-top bg-bronze"
              style={{ scaleY: reduced ? 1 : lineScale }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-16 lg:space-y-24">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <Reveal
                  key={m.year}
                  delay={i * 0.08}
                  direction={isLeft ? 'left' : 'right'}
                >
                  <div
                    className={`relative pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-16 ${
                      isLeft ? '' : 'lg:direction-rtl'
                    }`}
                  >
                    {/* Dot on timeline */}
                    <div className="absolute left-2.5 top-1.5 z-10 h-3 w-3 rounded-full border-2 border-bronze bg-paper lg:left-1/2 lg:-translate-x-1/2" />

                    {/* Content — left milestones: content on left, right milestones: content on right */}
                    <div
                      className={`lg:text-left ${
                        isLeft
                          ? 'lg:col-start-1 lg:pr-16 lg:text-right'
                          : 'lg:col-start-2 lg:pl-16'
                      }`}
                      style={{ direction: 'ltr' }}
                    >
                      <span className="font-serif text-3xl font-light text-bronze lg:text-4xl">
                        {m.year}
                      </span>
                      <h3 className="mt-2 font-serif text-xl font-semibold text-ink">
                        {m.title}
                      </h3>
                      <p className="mt-2 max-w-md text-muted">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Philosophy Split-Screen
   ═══════════════════════════════════════════════════════════ */
function PhilosophySection() {
  const reduced = useReducedMotion()
  const words =
    'I advise on real estate the way it should be advised on — slowly, and with conviction.'.split(
      ' '
    )

  return (
    <section className="relative min-h-[70vh] lg:grid lg:grid-cols-2">
      {/* Left — full-bleed image */}
      <div className="relative h-[50vh] lg:h-auto">
        <PhotoFrame
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
          alt="Modern architectural interior — real estate advisory"
          aspect="aspect-auto"
          parallax
          className="!absolute inset-0 h-full w-full"
        />
      </div>

      {/* Right — dark panel with word-by-word reveal */}
      <div className="flex items-center bg-ink px-8 py-16 lg:px-16 lg:py-24">
        <div>
          <blockquote
            className="font-serif font-semibold leading-[1.15] text-paper"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={reduced ? {} : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </blockquote>
          <Reveal delay={words.length * 0.08 + 0.2}>
            <p className="mt-8 font-sans text-sm uppercase tracking-[0.18em] text-bronze">
              — Maha Attie
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Main About Page
   ═══════════════════════════════════════════════════════════ */
export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Built on trust, discretion, and clarity. Learn about Maha Attie's structured and client-focused approach to real estate advisory."
        path="/about"
      />

      {/* 1 — Page Header */}
      <AnimatedPageHeader
        eyebrow="The Practice"
        headline="Built on trust, discretion, and clarity."
        description="I bring a structured and client-focused approach to real estate advisory. My work is built on trust, discretion, and a clear understanding of each client's objectives. I work closely with every client to identify the right opportunities, ensuring each decision is aligned with both lifestyle and long-term investment goals."
      />

      {/* 2 — Values */}
      <section className="bg-stone py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} direction="left">
                <GlassCard className="relative overflow-hidden">
                  {/* Watermark number */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[8rem] font-bold leading-none text-bronze/[0.07]"
                  >
                    {v.num}
                  </span>
                  <h3 className="relative font-serif text-2xl font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="relative mt-3 text-muted">{v.description}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Timeline */}
      <TimelineSection />

      {/* 4 — Philosophy Split-Screen */}
      <PhilosophySection />

      {/* 5 — Image Gallery */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] lg:gap-12">
            <Reveal direction="left">
              <div className="group overflow-hidden">
                <PhotoFrame
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Modern architectural interior — real estate advisory"
                  aspect="aspect-[4/5]"
                  parallax
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.15}>
              <div className="group overflow-hidden md:mt-24">
                <PhotoFrame
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                  alt="Maha Attie portrait"
                  aspect="aspect-[3/4]"
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>

          {/* Third cinematic image */}
          <Reveal delay={0.2} className="mt-8 lg:mt-12">
            <div className="group overflow-hidden">
              <PhotoFrame
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
                alt="Mediterranean cityscape — advisory markets"
                aspect="aspect-[21/9]"
                parallax
                className="transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 — Credentials */}
      <section className="bg-stone py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <Eyebrow>Credentials</Eyebrow>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <GlassCard className="relative overflow-hidden">
                  {/* Watermark number */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[8rem] font-bold leading-none text-bronze/[0.07]"
                  >
                    {c.num}
                  </span>
                  <h3 className="relative font-serif text-xl font-semibold text-ink">
                    {c.title}
                  </h3>
                  <p className="relative mt-2 text-sm text-muted">
                    {c.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — CTA */}
      <section className="bg-ink py-24 text-center lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <h2
              className="mx-auto max-w-2xl font-serif font-semibold leading-[1.1] text-paper mb-10"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Every engagement starts with a conversation.
            </h2>
            <Button to="/contact">Begin a conversation</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
