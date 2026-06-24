import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Eyebrow from '../components/Eyebrow'
import Locator from '../components/Locator'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import PhotoFrame from '../components/PhotoFrame'
import IndexNumeral from '../components/IndexNumeral'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import { articles } from '../data/articles'

function HeroSection() {
  const reduced = useReducedMotion()
  const stagger = reduced ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="relative min-h-screen flex items-center pt-24">
      <div className="mx-auto max-w-[1280px] w-full px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div className="max-w-xl">
            <motion.div {...stagger} transition={{ duration: 0.6, ease, delay: 0 }}>
              <Eyebrow className="mb-4">Private Real Estate Advisory</Eyebrow>
            </motion.div>
            <motion.div {...stagger} transition={{ duration: 0.6, ease, delay: 0.08 }}>
              <Locator className="mb-8 block" />
            </motion.div>
            <motion.h1
              {...stagger}
              transition={{ duration: 0.8, ease, delay: 0.16 }}
              className="font-serif font-semibold leading-[1.05] text-ink mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5.5rem)' }}
            >
              Strategic real estate advisory for long-term value.
            </motion.h1>
            <motion.p
              {...stagger}
              transition={{ duration: 0.7, ease, delay: 0.28 }}
              className="text-muted mb-10 max-w-lg leading-relaxed"
            >
              Disciplined property decisions for investors who measure in decades, not deadlines — shaped
              through structure, timing, and judgment.
            </motion.p>
            <motion.div
              {...stagger}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button to="/contact">Book a private consultation</Button>
              <Button to="/services" variant="link">
                View the practice
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={reduced ? {} : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease }}
          >
            <PhotoFrame
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="Maha Attié — private real estate advisory"
              aspect="aspect-[3/4]"
              parallax
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  const items = [
    '15+ years of operational depth via SkyRise',
    'Trusted by private investors & the diaspora',
    'Engaged by diplomatic missions in Lebanon',
  ]

  return (
    <Reveal>
      <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`text-center text-sm font-medium text-muted tracking-wide ${
                i < items.length - 1 ? 'md:border-r md:border-line' : ''
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  )
}

function PhilosophySection() {
  return (
    <section className="bg-stone">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <Eyebrow className="mb-8">Philosophy</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote
            className="font-serif font-normal leading-[1.2] text-ink max-w-4xl"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            <em>
              I advise on real estate the way it should be advised on — slowly, and with conviction.
              Every engagement begins with clarity: what the decision is, what it protects, and what it
              must achieve over time.
            </em>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}

function ServicesPreview() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
      <SectionHeading eyebrow="Services" headline="Five ways I work." className="mb-16" />
      <div className="space-y-0">
        {services.map((s, i) => (
          <Reveal key={s.index} delay={i * 0.06}>
            <div className="flex items-baseline gap-6 border-t border-line py-6 lg:gap-12">
              <IndexNumeral index={s.index} />
              <div>
                <h3 className="font-serif text-xl font-semibold text-ink lg:text-2xl">{s.title}</h3>
                <p className="mt-1 text-muted">{s.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-line pt-8">
          <Button to="/services" variant="link">
            See all services
          </Button>
        </div>
      </div>
    </section>
  )
}

function DarkInterlude() {
  const words = 'Most advisors stop at advice. I stay through execution.'.split(' ')
  const reduced = useReducedMotion()

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid items-center gap-12 py-24 lg:grid-cols-[1fr_0.6fr] lg:py-32">
          <h2
            className="font-serif font-semibold leading-[1.1] text-paper"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={reduced ? {} : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <PhotoFrame
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
            alt="Real estate advisory — disciplined execution"
            aspect="aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const featured = testimonials.find((t) => t.featured)
  const others = testimonials.filter((t) => !t.featured)

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
      <SectionHeading eyebrow="Testimonials" headline="Trusted relationships." className="mb-16" />

      {featured && (
        <Reveal>
          <div className="mb-16 border-l-2 border-bronze pl-8 lg:pl-12">
            <blockquote className="font-serif text-2xl italic leading-snug text-ink lg:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-medium text-muted">
              {featured.name} — <span className="text-bronze">{featured.role}</span>
            </p>
          </div>
        </Reveal>
      )}

      <div className="grid gap-12 md:grid-cols-3">
        {others.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <blockquote className="font-serif text-lg italic leading-snug text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-medium text-muted">
              {t.name} — <span className="text-bronze">{t.role}</span>
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function SkyRiseBand() {
  return (
    <section className="bg-stone">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <Eyebrow className="mb-6">Operational Partner</Eyebrow>
          <p className="max-w-3xl text-lg leading-relaxed text-ink/80">
            My advisory work is supported by SkyRise, a real estate and contracting firm with over
            15 years of operational experience across Lebanon, Cyprus, and Greece. While I focus on
            strategy, judgment, and long-term decision-making, SkyRise provides the operational
            infrastructure: transactions, property management, and project execution.
          </p>
          <div className="mt-8">
            <Button href="https://skyriseme.com/" variant="link">
              Visit SkyRise
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function JournalTeaser() {
  const latest = articles[0]

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
      <SectionHeading eyebrow="Journal" headline="Notes on judgment." className="mb-16" />
      <Reveal>
        <Link
          to={`/journal/${latest.slug}`}
          className="group grid gap-8 md:grid-cols-[1fr_1fr] lg:gap-16"
        >
          <div className="overflow-hidden">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
              <PhotoFrame src={latest.image} alt={latest.title} aspect="aspect-[16/10]" />
            </motion.div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted mb-3">
              {latest.date}
            </p>
            <h3 className="font-serif text-2xl font-semibold text-ink mb-3 group-hover:text-bronze transition-colors lg:text-3xl">
              {latest.title}
            </h3>
            <p className="text-muted">{latest.excerpt}</p>
            <span className="mt-6 text-sm font-medium uppercase tracking-[0.12em] text-bronze">
              Read article &rarr;
            </span>
          </div>
        </Link>
      </Reveal>
    </section>
  )
}

function ClosingCTA() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-24 text-center lg:px-12 lg:py-32">
        <Reveal>
          <h2
            className="mx-auto max-w-3xl font-serif font-semibold leading-[1.1] text-paper mb-10"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Work with a real estate advisor who prioritizes your vision and protects your investment.
          </h2>
          <Button to="/contact">Book a private consultation</Button>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Strategic real estate advisory for long-term value. Maha Attié serves high-net-worth investors and the Lebanese diaspora across Lebanon, Cyprus, and Greece."
        path="/"
      />
      <HeroSection />
      <TrustStrip />
      <PhilosophySection />
      <ServicesPreview />
      <DarkInterlude />
      <TestimonialsSection />
      <SkyRiseBand />
      <JournalTeaser />
      <ClosingCTA />
    </>
  )
}
