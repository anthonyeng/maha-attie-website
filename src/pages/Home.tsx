import { useState, useRef } from 'react'
import { motion, useReducedMotion, useMotionValue, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Compass, Frame, Shield, Building2, Lock } from 'lucide-react'
import Seo from '../components/Seo'
import Eyebrow from '../components/Eyebrow'
import Locator from '../components/Locator'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import PhotoFrame from '../components/PhotoFrame'
import IndexNumeral from '../components/IndexNumeral'
import SectionHeading from '../components/SectionHeading'
import GradientMesh from '../components/GradientMesh'
import Marquee from '../components/Marquee'
import AnimatedCounter from '../components/AnimatedCounter'
import GlassCard from '../components/GlassCard'
import InteractiveMap from '../components/InteractiveMap'
import SectionDivider from '../components/SectionDivider'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import { articles } from '../data/articles'
import { siteStats } from '../data/stats'
import { pressMentions } from '../data/press'
import { markets } from '../data/markets'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  compass: Compass,
  frame: Frame,
  shield: Shield,
  'building-2': Building2,
  lock: Lock,
}

/* ───────────────────────── 1. Hero ───────────────────────── */

function HeroSection() {
  const reduced = useReducedMotion()
  const stagger = reduced
    ? {}
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }
  const spring = { type: 'spring' as const, stiffness: 80, damping: 20 }

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient mesh background */}
      <GradientMesh variant="warm" />

      {/* Cursor glow — desktop only */}
      <motion.div
        className="pointer-events-none absolute z-[1] hidden lg:block"
        style={{
          x: mouseX,
          y: mouseY,
          width: 200,
          height: 200,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(29,41,68,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div className="max-w-xl overflow-hidden">
            <motion.div {...stagger} transition={{ ...spring, delay: 0 }}>
              <Eyebrow className="mb-4">Private Real Estate Advisory</Eyebrow>
            </motion.div>
            <motion.div {...stagger} transition={{ ...spring, delay: 0.08 }}>
              <Locator className="mb-8 block" />
            </motion.div>
            <motion.h1
              {...stagger}
              transition={{ ...spring, delay: 0.16 }}
              className="font-serif font-semibold leading-[1.02] text-ink mb-6"
              style={{ fontSize: 'clamp(3rem, 6.5vw, 6rem)' }}
            >
              Strategic real estate advisory for long-term value.
            </motion.h1>
            <motion.p
              {...stagger}
              transition={{ ...spring, delay: 0.28 }}
              className="text-muted mb-10 max-w-lg leading-relaxed"
            >
              Disciplined property decisions for investors who measure in
              decades, not deadlines — shaped through structure, timing, and
              judgment.
            </motion.p>
            <motion.div
              {...stagger}
              transition={{ ...spring, delay: 0.4 }}
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
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhotoFrame
              src="https://images.squarespace-cdn.com/content/v1/69f0cf9a8c565a6461913bc2/87f02aeb-e81c-41a5-8b62-52827d3c490b/sisi+lafricaine19522.jpg"
              alt="Maha Attie — private real estate advisory"
              aspect="aspect-[3/4]"
              parallax
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── 2. Trust Strip (Marquee) ───────────────────────── */

function TrustStrip() {
  const items = [
    '15+ years of operational depth via SkyRise',
    'Trusted by private investors & the diaspora',
    'Engaged by diplomatic missions in Lebanon',
    'Strategic advisory across 3 core markets',
    'Discipline over volume, conviction over speed',
  ]

  return (
    <section className="py-8 border-y border-line/40">
      <Marquee speed={40} pauseOnHover>
        {items.map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium text-muted tracking-wide uppercase whitespace-nowrap"
          >
            {item}
            <span className="mx-6 text-bronze">·</span>
          </span>
        ))}
      </Marquee>
    </section>
  )
}

/* ───────────────────────── 3. Stats Section ───────────────────────── */

function StatsSection() {
  return (
    <>
      <SectionDivider variant="wave" color="ink" />
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <Eyebrow className="mb-12 text-paper/60">By the Numbers</Eyebrow>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="backdrop-blur-md bg-ink-soft/60 border border-paper/10 rounded-sm p-8">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider variant="wave" color="paper" flip />
    </>
  )
}

/* ───────────────────────── 4. Philosophy ───────────────────────── */

function PhilosophySection() {
  const sentences = [
    'I advise on real estate the way it should be advised on — slowly, and with conviction.',
    'Every engagement begins with clarity: what the decision is, what it protects, and what it must achieve over time.',
  ]

  return (
    <section className="bg-stone relative overflow-hidden">
      {/* Subtle parallax bg */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.06] blur-sm pointer-events-none"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=60)',
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <Eyebrow className="mb-8">Philosophy</Eyebrow>
        </Reveal>
        <div className="flex gap-8">
          {/* Bronze vertical pull-quote marker */}
          <div className="hidden md:block w-[3px] flex-shrink-0 bg-bronze/60 rounded-full" />
          <blockquote
            className="font-serif font-normal leading-[1.2] text-ink max-w-4xl"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            <em>
              {sentences.map((sentence, i) => (
                <Reveal key={i} delay={0.1 + i * 0.15}>
                  <span className="block mb-4">{sentence}</span>
                </Reveal>
              ))}
            </em>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── 5. Press Mentions ───────────────────────── */

function PressMentionsSection() {
  return (
    <section className="bg-stone py-12">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 mb-6">
        <Reveal>
          <Eyebrow>Trusted By</Eyebrow>
        </Reveal>
      </div>
      <Marquee speed={35} pauseOnHover>
        {pressMentions.map((mention, i) => (
          <span
            key={i}
            className="text-sm uppercase tracking-[0.2em] text-muted/60 whitespace-nowrap font-medium"
          >
            {mention.name}
            <span className="mx-8 text-bronze">·</span>
          </span>
        ))}
      </Marquee>
    </section>
  )
}

/* ───────────────────────── 6. Services Preview ───────────────────────── */

function ServicesPreview() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow="Services"
        headline="Five ways I work."
        className="mb-16"
      />
      <div className="space-y-0">
        {services.map((s, i) => {
          const IconComponent = iconMap[s.icon]
          return (
            <Reveal key={s.index} delay={i * 0.06}>
              <Link
                to={`/services/${s.slug}`}
                className="group flex items-center gap-6 border-t border-line py-6 lg:gap-12 transition-all duration-300 hover:pl-4 hover:bg-gradient-to-r hover:from-bronze/[0.04] hover:to-transparent cursor-pointer"
              >
                {/* Bronze left border on hover */}
                <div className="w-[3px] self-stretch bg-transparent group-hover:bg-bronze transition-colors duration-300 rounded-full -ml-4 mr-2 flex-shrink-0" />
                <IndexNumeral index={s.index} />
                {IconComponent && (
                  <IconComponent
                    size={22}
                    className="text-bronze/60 group-hover:text-bronze transition-colors flex-shrink-0"
                  />
                )}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink lg:text-2xl group-hover:text-bronze transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-muted">{s.description}</p>
                </div>
              </Link>
            </Reveal>
          )
        })}
        <div className="border-t border-line pt-8">
          <Button to="/services" variant="link">
            See all services
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── 7. Dark Interlude ───────────────────────── */

function DarkInterlude() {
  const words = 'Most advisors stop at advice. I stay through execution.'.split(
    ' '
  )
  const reduced = useReducedMotion()

  return (
    <section className="bg-ink relative overflow-hidden">
      <GradientMesh variant="dark" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
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
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <PhotoFrame
            src="https://images.squarespace-cdn.com/content/v1/69f0cf9a8c565a6461913bc2/9cb5004a-1f74-414f-b3bc-eb62f437f450/56cc8da880100a0bd7cb09300dcf21a2.jpg"
            alt="Real estate advisory — disciplined execution"
            aspect="aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── 8. Testimonials ───────────────────────── */

function TestimonialsSection() {
  const featured = testimonials.find((t) => t.featured)
  const others = testimonials.filter((t) => !t.featured)

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow="Testimonials"
        headline="Trusted relationships."
        className="mb-16"
      />

      {featured && (
        <Reveal>
          <div className="mb-16 border-l-2 border-bronze pl-8 lg:pl-12">
            <blockquote className="font-serif text-2xl italic leading-snug text-ink lg:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-medium text-muted">
              {featured.name} —{' '}
              <span className="text-bronze">{featured.role}</span>
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

/* ───────────────────────── 9. Horizontal Scroll Gallery ───────────────────────── */

function HorizontalScrollGallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-45%'])

  const galleryImages = [
    {
      src: 'https://images.squarespace-cdn.com/content/v1/69f0cf9a8c565a6461913bc2/87f02aeb-e81c-41a5-8b62-52827d3c490b/sisi+lafricaine19522.jpg',
      alt: 'Maha Attie — arms crossed portrait',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/69f0cf9a8c565a6461913bc2/7265c468-a466-474f-9a20-912f4cba4213/sisi+lafricaine18569.jpg',
      alt: 'Maha Attie near window',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/69f0cf9a8c565a6461913bc2/9cb5004a-1f74-414f-b3bc-eb62f437f450/56cc8da880100a0bd7cb09300dcf21a2.jpg',
      alt: 'Living room interior',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/69f0cf9a8c565a6461913bc2/8437e5aa-4598-4eee-9944-0f9546b3a2a3/WhatsApp+Image+2026-05-04+at+18.20.58.jpeg',
      alt: 'Lifestyle magazine',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/69f0cf9a8c565a6461913bc2/69ab4d05-e6cd-43e2-9cf6-a7413d04b335/sisi+lafricaine18405.jpg',
      alt: 'Maha Attie — white suit portrait',
    },
  ]

  return (
    <section ref={sectionRef} className="relative min-h-[60vh] overflow-hidden py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 mb-12">
        <Reveal>
          <Eyebrow>Selected Properties</Eyebrow>
        </Reveal>
      </div>
      <motion.div className="flex gap-6 px-6" style={{ x }}>
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[60vw] md:w-[40vw] lg:w-[30vw] group"
          >
            <div className="aspect-[3/2] overflow-hidden rounded-sm">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

/* ───────────────────────── 10. SkyRise Band ───────────────────────── */

function SkyRiseBand() {
  return (
    <section className="bg-stone">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <Eyebrow className="mb-6">Operational Partner</Eyebrow>
          <p className="max-w-3xl text-lg leading-relaxed text-ink/80">
            My advisory work is supported by SkyRise, a real estate and
            contracting firm with over 15 years of operational experience across
            Lebanon, Cyprus, and Greece. While I focus on strategy, judgment, and
            long-term decision-making, SkyRise provides the operational
            infrastructure: transactions, property management, and project
            execution.
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

/* ───────────────────────── 11. Map Section ───────────────────────── */

function MapSection() {
  const [activeMarket, setActiveMarket] = useState<string | null>(null)

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
      <Reveal>
        <Eyebrow className="mb-12">Where We Operate</Eyebrow>
      </Reveal>
      <div className="max-w-3xl mx-auto mb-12">
        <InteractiveMap
          activeMarket={activeMarket ?? undefined}
          onMarketHover={(name) => setActiveMarket(name)}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {markets.map((market, i) => (
          <Reveal key={market.name} delay={i * 0.08}>
            <GlassCard
              className={`transition-all duration-300 cursor-pointer ${
                activeMarket === market.name
                  ? 'border-bronze/60 shadow-[0_4px_30px_rgba(29,41,68,0.15)]'
                  : ''
              }`}
            >
              <div
                onMouseEnter={() => setActiveMarket(market.name)}
                onMouseLeave={() => setActiveMarket(null)}
              >
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                  {market.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {market.description}
                </p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ───────────────────────── 12. Journal Teaser ───────────────────────── */

function JournalTeaser() {
  const latest = articles[0]

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow="Journal"
        headline="Notes on judgment."
        className="mb-16"
      />
      <Reveal>
        <Link
          to={`/journal/${latest.slug}`}
          className="group grid gap-8 md:grid-cols-[1fr_1fr] lg:gap-16"
        >
          <div className="overflow-hidden">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
              <PhotoFrame
                src={latest.image}
                alt={latest.title}
                aspect="aspect-[16/10]"
              />
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

/* ───────────────────────── 13. Closing CTA ───────────────────────── */

function ClosingCTA() {
  return (
    <section className="bg-ink relative overflow-hidden">
      <GradientMesh variant="dark" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 text-center lg:px-12 lg:py-32">
        <Reveal>
          <h2
            className="mx-auto max-w-3xl font-serif font-semibold leading-[1.1] text-paper mb-10"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Work with a real estate advisor who prioritizes your vision and
            protects your investment.
          </h2>
          <div className="relative inline-block">
            {/* Pulsing bronze glow behind button */}
            <div className="absolute inset-0 -inset-x-4 -inset-y-2 rounded-full bg-bronze/20 blur-xl animate-pulse" />
            <div className="relative">
              <Button to="/contact">Book a private consultation</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────── Page ───────────────────────── */

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Strategic real estate advisory for long-term value. Maha Attie serves high-net-worth investors and the Lebanese diaspora across Lebanon, Cyprus, and Greece."
        path="/"
      />
      <HeroSection />
      <TrustStrip />
      <StatsSection />
      <PhilosophySection />
      <PressMentionsSection />
      <ServicesPreview />
      <DarkInterlude />
      <TestimonialsSection />
      <HorizontalScrollGallery />
      <SkyRiseBand />
      <MapSection />
      <JournalTeaser />
      <ClosingCTA />
    </>
  )
}
