import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import Seo from '../components/Seo'
import AnimatedPageHeader from '../components/AnimatedPageHeader'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { caseStudies, type CaseStudy } from '../data/portfolio'
import { X } from 'lucide-react'

const filters = ['All', 'Acquisition', 'Development', 'Advisory'] as const
type Filter = (typeof filters)[number]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

  const filtered =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter(
          (cs) => cs.type === activeFilter.toLowerCase(),
        )

  return (
    <>
      <Seo
        title="Portfolio"
        description="A selection of real estate engagements across Lebanon, Cyprus, and Greece."
        path="/portfolio"
      />

      <AnimatedPageHeader
        eyebrow="Portfolio"
        headline="Selected work."
        description="A selection of engagements across Lebanon, Cyprus, and Greece."
      />

      {/* Filter Bar */}
      <section className="py-12">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <div className="flex gap-6">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => {
                    setActiveFilter(f)
                    setExpandedSlug(null)
                  }}
                  className={clsx(
                    'relative pb-2 font-sans text-sm uppercase tracking-[0.12em] transition-colors duration-300',
                    activeFilter === f ? 'text-ink' : 'text-muted hover:text-ink',
                  )}
                  data-cursor="grow"
                >
                  {f}
                  {activeFilter === f && (
                    <motion.span
                      layoutId="portfolio-filter-underline"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-bronze"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Case Study Grid */}
          <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((cs, i) => (
                <CaseStudyCard
                  key={cs.slug}
                  study={cs}
                  index={i}
                  isExpanded={expandedSlug === cs.slug}
                  onToggle={() =>
                    setExpandedSlug(expandedSlug === cs.slug ? null : cs.slug)
                  }
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ink py-24 text-center lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <h2
              className="mx-auto max-w-2xl font-serif font-semibold leading-[1.1] text-paper mb-10"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Have a project in mind?
            </h2>
            <Button to="/contact">Begin a conversation</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* ── Card ──────────────────────────────────────────────────── */

function CaseStudyCard({
  study,
  index,
  isExpanded,
  onToggle,
}: {
  study: CaseStudy
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-sm border border-line/30 bg-paper"
    >
      {/* Image */}
      <motion.div
        layout="position"
        className="overflow-hidden cursor-pointer"
        onClick={onToggle}
        data-cursor="grow"
      >
        <motion.img
          src={study.image}
          alt={study.title}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Info */}
      <motion.div layout="position" className="p-6">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          {study.location}
        </p>
        <h3
          className="mt-1 cursor-pointer font-serif text-xl font-semibold text-ink"
          onClick={onToggle}
          data-cursor="grow"
        >
          {study.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{study.year}</p>
      </motion.div>

      {/* Expanded details */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
            className="overflow-hidden"
          >
            <div className="border-t border-line/30 px-6 pb-6 pt-5">
              <p className="text-muted leading-relaxed">{study.description}</p>

              {/* Stats */}
              <div className="mt-5 flex gap-8">
                {study.stats.map((s) => (
                  <div key={s.label}>
                    <span className="block font-serif text-lg font-semibold text-bronze">
                      {s.value}
                    </span>
                    <span className="text-xs uppercase tracking-[0.1em] text-muted">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line/40 px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={onToggle}
                className="mt-5 flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
                data-cursor="grow"
              >
                <X size={14} /> Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
