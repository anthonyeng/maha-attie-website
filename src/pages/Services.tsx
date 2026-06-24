import { useState } from 'react'
import { motion } from 'framer-motion'
import { Compass, Frame, Shield, Building2, Lock, Check } from 'lucide-react'
import Seo from '../components/Seo'
import AnimatedPageHeader from '../components/AnimatedPageHeader'
import Accordion from '../components/Accordion'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import GlassCard from '../components/GlassCard'
import SectionDivider from '../components/SectionDivider'
import Button from '../components/Button'
import { services } from '../data/services'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  compass: Compass,
  frame: Frame,
  shield: Shield,
  'building-2': Building2,
  lock: Lock,
}

const tiers = [
  {
    label: 'Focused',
    services: ['Strategic Consultation', 'Framing Mandate'],
    includes: [
      'Single focused session or mandate',
      'Written summary or mandate document',
      'Clear actionable framework',
      'Follow-up available on request',
    ],
    starting: 'Starting from a single engagement',
  },
  {
    label: 'Ongoing',
    services: ['Advisory Retainer'],
    includes: [
      'Continuous strategic access',
      'Portfolio-level oversight',
      'Proactive market intelligence',
      'Priority scheduling',
    ],
    starting: 'Starting from a quarterly retainer',
  },
  {
    label: 'Full-Service',
    services: ['Development Sales', 'Exclusivity Mandate'],
    includes: [
      'End-to-end project management',
      'Product positioning & pricing',
      'Buyer qualification & matching',
      'Negotiation & transaction execution',
    ],
    starting: 'Starting from a project mandate',
  },
]

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <Seo
        title="Services"
        description="Five ways I work — from strategic consultation to exclusivity mandates. Maha Attié offers structured real estate advisory services."
        path="/services"
      />

      {/* Hero */}
      <AnimatedPageHeader
        eyebrow="Services"
        headline="Five ways I work."
        description="Each engagement is structured to match the decision at hand — whether it requires a single session of clarity, ongoing strategic access, or full-service execution from positioning to close."
      />

      {/* Services Accordion List */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div>
            {services.map((s, i) => {
              const Icon = iconMap[s.icon]
              return (
                <Reveal key={s.index} delay={i * 0.06}>
                  <Accordion
                    title={s.title}
                    index={s.index}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-8">
                      {/* Icon */}
                      {Icon && (
                        <motion.div
                          animate={{ rotate: openIndex === i ? 360 : 0 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          className="flex-shrink-0"
                        >
                          <Icon size={28} className="text-bronze" />
                        </motion.div>
                      )}

                      <div>
                        <p className="text-muted leading-relaxed mb-4">
                          {s.longDescription}
                        </p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {s.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-ink">
                              <Check size={16} className="mt-0.5 flex-shrink-0 text-bronze" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Accordion>
                </Reveal>
              )
            })}
            <div className="border-t border-line" />
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <SectionDivider variant="curve" color="stone" />
      <section className="bg-stone py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <Eyebrow className="mb-4">Compare</Eyebrow>
            <h2
              className="font-serif font-semibold text-ink leading-tight mb-16"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Choose the depth of engagement.
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.label} delay={i * 0.1}>
                <GlassCard className="flex h-full flex-col">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-bronze mb-2">
                    {tier.label}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-1">
                    {tier.services.join(' + ')}
                  </h3>
                  <p className="text-sm text-muted mb-6">{tier.starting}</p>

                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <Check size={14} className="mt-0.5 flex-shrink-0 text-bronze" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button to="/contact" variant="ghost" className="w-full justify-center">
                    Inquire
                  </Button>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider variant="curve" color="paper" />

      {/* CTA */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 text-center">
          <Reveal>
            <p
              className="mx-auto max-w-3xl font-serif font-semibold leading-[1.15] text-paper mb-10"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              &ldquo;Most advisors stop at advice. I stay through execution.&rdquo;
            </p>
            <Button to="/contact">Book a consultation</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
