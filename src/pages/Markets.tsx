import { useState } from 'react'
import Seo from '../components/Seo'
import AnimatedPageHeader from '../components/AnimatedPageHeader'
import Reveal from '../components/Reveal'
import PhotoFrame from '../components/PhotoFrame'
import Button from '../components/Button'
import InteractiveMap from '../components/InteractiveMap'
import GlassCard from '../components/GlassCard'
import SectionDivider from '../components/SectionDivider'
import Eyebrow from '../components/Eyebrow'
import { markets } from '../data/markets'
import clsx from 'clsx'

/* One-liner summaries for the map hover cards */
const marketOneLiners: Record<string, string> = {
  Lebanon: 'Deep roots in Beirut and beyond.',
  Cyprus: 'Residency-friendly, long-term value.',
  Greece: 'Opportunity across a recovering coastline.',
}

export default function Markets() {
  const [hoveredMarket, setHoveredMarket] = useState<string | null>(null)

  return (
    <>
      <Seo
        title="Markets"
        description="Three markets, one discipline. Maha Attie works across Lebanon, Cyprus, and Greece with a consistent advisory approach."
        path="/markets"
      />

      {/* ─── Hero ─── */}
      <AnimatedPageHeader
        eyebrow="Where I Work"
        headline="Three markets, one discipline."
        description="A consistent advisory approach across three distinct Mediterranean markets — each understood from the ground up."
      />

      {/* ─── Interactive Map + Market Cards ─── */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <InteractiveMap
                activeMarket={hoveredMarket ?? undefined}
                onMarketHover={setHoveredMarket}
                className="w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {markets.map((market) => (
                <GlassCard
                  key={market.name}
                  className={clsx(
                    'cursor-pointer transition-all duration-300',
                    hoveredMarket === market.name
                      ? 'border-bronze shadow-[0_2px_24px_rgba(160,106,59,0.18)]'
                      : ''
                  )}
                  hoverable
                >
                  <div
                    onMouseEnter={() => setHoveredMarket(market.name)}
                    onMouseLeave={() => setHoveredMarket(null)}
                  >
                    <h3 className="font-serif text-xl font-semibold text-ink">
                      {market.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {marketOneLiners[market.name]}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider variant="curve" color="stone" />

      {/* ─── Market Detail Sections ─── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 space-y-28 lg:space-y-36">
          {markets.map((market, i) => (
            <Reveal key={market.name} delay={0.1}>
              <div
                className={clsx(
                  'grid gap-12 lg:gap-20 items-center',
                  i % 2 === 1 ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'
                )}
              >
                {/* Image */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <PhotoFrame
                    src={market.image}
                    alt={`Real estate in ${market.name}`}
                    aspect="aspect-[16/10]"
                    parallax
                  />
                </div>

                {/* Text + Stats */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3
                    className="font-serif font-semibold text-ink mb-4"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                  >
                    {market.name}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted mb-8">
                    {market.description}
                  </p>

                  {/* Stat Blocks */}
                  <div className="flex flex-wrap gap-8">
                    {market.stats.map((stat) => (
                      <div key={stat.label}>
                        <span className="block font-serif text-2xl font-semibold text-bronze">
                          {stat.value}
                        </span>
                        <span className="block mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gallery Row */}
              <div className="mt-10 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-2 px-2">
                {market.gallery.map((img, gi) => (
                  <div
                    key={gi}
                    className="flex-none w-72 snap-start"
                  >
                    <img
                      src={img}
                      alt={`${market.name} gallery ${gi + 1}`}
                      className="aspect-[4/3] w-full object-cover rounded-sm"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionDivider variant="wave" color="stone" />

      {/* ─── Market Comparison Table ─── */}
      <section className="bg-stone py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <div className="mb-14 text-center">
              <Eyebrow>At a Glance</Eyebrow>
              <h2
                className="mt-4 font-serif font-light text-ink"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Market comparison
              </h2>
            </div>
          </Reveal>

          {/* Desktop Table */}
          <Reveal delay={0.1}>
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-line">
                    <th className="py-4 pr-6 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      Market
                    </th>
                    <th className="py-4 px-6 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      Years Active
                    </th>
                    <th className="py-4 px-6 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      Focus Area
                    </th>
                    <th className="py-4 pl-6 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      Speciality
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {markets.map((market) => {
                    const findStat = (keyword: string) =>
                      market.stats.find((s) =>
                        s.label.toLowerCase().includes(keyword)
                      )?.value ?? '—'
                    return (
                      <tr
                        key={market.name}
                        className="border-b border-line/50 last:border-b-0"
                      >
                        <td className="py-5 pr-6 font-serif text-lg font-semibold text-ink">
                          {market.name}
                        </td>
                        <td className="py-5 px-6 text-ink">{findStat('years')}</td>
                        <td className="py-5 px-6 text-ink">{findStat('focus')}</td>
                        <td className="py-5 pl-6 text-ink">
                          {findStat('special') !== '—'
                            ? findStat('special')
                            : findStat('opportun') !== '—'
                              ? findStat('opportun')
                              : findStat('transaction')}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {markets.map((market, mi) => (
              <Reveal key={market.name} delay={mi * 0.08}>
                <GlassCard className="!bg-paper/80">
                  <h4 className="font-serif text-xl font-semibold text-ink mb-4">
                    {market.name}
                  </h4>
                  <div className="space-y-3">
                    {market.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex justify-between items-baseline border-b border-line/30 pb-2 last:border-b-0"
                      >
                        <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                          {stat.label}
                        </span>
                        <span className="font-serif text-lg text-bronze font-semibold">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" color="ink" />

      {/* ─── CTA ─── */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 text-center">
          <Reveal>
            <blockquote className="mx-auto max-w-2xl font-serif text-2xl font-light italic leading-relaxed text-paper/80 md:text-3xl">
              "The market you choose matters less than the advisor who knows it."
            </blockquote>
            <div className="mt-10">
              <Button to="/contact" variant="primary">
                Discuss your market
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
