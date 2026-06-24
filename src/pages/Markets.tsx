import { motion, useReducedMotion } from 'framer-motion'
import Seo from '../components/Seo'
import AnimatedPageHeader from '../components/AnimatedPageHeader'
import Reveal from '../components/Reveal'
import PhotoFrame from '../components/PhotoFrame'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import { markets } from '../data/markets'

export default function Markets() {
  const reduced = useReducedMotion()

  return (
    <>
      <Seo
        title="Markets"
        description="Three markets, one discipline. Maha Attié works across Lebanon, Cyprus, and Greece with a consistent advisory approach."
        path="/markets"
      />

      <AnimatedPageHeader
        eyebrow="Where I Work"
        headline="Three markets, one discipline."
        description="A consistent advisory approach across three distinct Mediterranean markets — each understood from the ground up."
      />

      {/* ─── Market Detail Sections ─── */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 space-y-32 lg:space-y-40">
          {markets.map((market, i) => (
            <div key={market.name}>
              {/* Full-width hero image for this market */}
              <Reveal>
                <div className="overflow-hidden rounded-sm mb-12">
                  <motion.div
                    whileHover={reduced ? {} : { scale: 1.03 }}
                    transition={{ duration: 0.8 }}
                  >
                    <PhotoFrame
                      src={market.image}
                      alt={`Real estate in ${market.name}`}
                      aspect="aspect-[21/9]"
                    />
                  </motion.div>
                </div>
              </Reveal>

              {/* Text + Stats row */}
              <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-20 items-start">
                <div>
                  <Reveal delay={0.1}>
                    <Eyebrow className="mb-3">Market {String(i + 1).padStart(2, '0')}</Eyebrow>
                    <h2
                      className="font-serif font-semibold text-ink mb-5"
                      style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
                    >
                      {market.name}
                    </h2>
                    <p className="text-lg leading-relaxed text-muted max-w-2xl">
                      {market.description}
                    </p>
                  </Reveal>
                </div>

                {/* Stats */}
                <Reveal delay={0.2}>
                  <div className="flex gap-10 lg:gap-12 lg:pt-10">
                    {market.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <span className="block font-serif text-3xl font-light text-ink-soft lg:text-4xl">
                          {stat.value}
                        </span>
                        <span className="block mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Gallery strip */}
              <Reveal delay={0.15}>
                <div className="mt-12 grid grid-cols-3 gap-4">
                  {market.gallery.map((img, gi) => (
                    <div key={gi} className="overflow-hidden rounded-sm">
                      <motion.img
                        src={img}
                        alt={`${market.name} gallery ${gi + 1}`}
                        className="aspect-[4/3] w-full object-cover"
                        loading="lazy"
                        whileHover={reduced ? {} : { scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Comparison ─── */}
      <section className="bg-stone py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <Eyebrow className="mb-4">At a Glance</Eyebrow>
            <h2
              className="font-serif font-semibold text-ink mb-14"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Market comparison
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-line">
                    <th className="py-4 pr-8 text-xs font-medium uppercase tracking-[0.14em] text-muted">Market</th>
                    {markets[0].stats.map((s) => (
                      <th key={s.label} className="py-4 px-6 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                        {s.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {markets.map((market) => (
                    <tr key={market.name} className="border-b border-line/50 last:border-b-0">
                      <td className="py-5 pr-8 font-serif text-xl font-semibold text-ink">{market.name}</td>
                      {market.stats.map((stat) => (
                        <td key={stat.label} className="py-5 px-6 text-ink">{stat.value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-ink-soft py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 text-center">
          <Reveal>
            <h2
              className="mx-auto max-w-2xl font-serif font-semibold leading-[1.1] text-paper mb-10"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Work with an advisor who knows the ground you&rsquo;re building on.
            </h2>
            <Button to="/contact">Discuss Your Market</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
