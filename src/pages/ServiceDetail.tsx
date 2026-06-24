import { useParams, Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Compass, Frame, Shield, Building2, Lock, Check, ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import PhotoFrame from '../components/PhotoFrame'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'
import AnimatedPageHeader from '../components/AnimatedPageHeader'
import { services } from '../data/services'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  compass: Compass,
  frame: Frame,
  shield: Shield,
  'building-2': Building2,
  lock: Lock,
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)
  const reduced = useReducedMotion()

  if (!service) {
    return (
      <div className="pt-36 pb-24 text-center">
        <p className="text-muted">Service not found.</p>
        <Button to="/services" variant="link" className="mt-4">
          Back to Services
        </Button>
      </div>
    )
  }

  const IconComponent = iconMap[service.icon]
  const otherServices = services.filter((s) => s.slug !== slug)

  return (
    <>
      <Seo
        title={service.title}
        description={service.longDescription}
        path={`/services/${slug}`}
      />

      <AnimatedPageHeader
        eyebrow={`Service ${service.index}`}
        headline={service.title}
        description={service.description}
      />

      {/* Main Content */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.5fr] lg:gap-24">
            {/* Left: Content */}
            <div>
              <Reveal>
                <Link
                  to="/services"
                  className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-bronze"
                >
                  <ArrowLeft size={16} />
                  All Services
                </Link>
              </Reveal>

              <Reveal delay={0.1}>
                <PhotoFrame
                  src={service.image}
                  alt={service.title}
                  aspect="aspect-[16/9]"
                  className="mb-12"
                />
              </Reveal>

              <div className="space-y-6">
                {service.details.map((paragraph, i) => (
                  <Reveal key={i} delay={0.05 * i}>
                    <p className="text-ink/80 leading-[1.8]">{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:pt-16">
              <Reveal delay={0.15}>
                <div className="sticky top-32 space-y-8">
                  {/* Icon + Index */}
                  <div className="flex items-center gap-4">
                    {IconComponent && (
                      <motion.div
                        initial={reduced ? {} : { scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-bronze/10"
                      >
                        <IconComponent size={24} className="text-bronze" />
                      </motion.div>
                    )}
                    <span className="font-serif text-4xl font-light text-bronze/30">
                      {service.index}
                    </span>
                  </div>

                  {/* Features */}
                  <GlassCard>
                    <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={reduced ? {} : { opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          <Check size={16} className="mt-0.5 flex-shrink-0 text-bronze" />
                          <span className="text-sm text-ink/80">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </GlassCard>

                  {/* CTA */}
                  <GlassCard>
                    <p className="mb-4 text-sm text-muted leading-relaxed">
                      Consultation fees are deductible upon signing an agreement.
                    </p>
                    <Button to="/contact">Book a Consultation</Button>
                  </GlassCard>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-stone py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <h2
              className="font-serif font-semibold leading-[1.05] text-ink mb-12"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Other services
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s, i) => {
              const Icon = iconMap[s.icon]
              return (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <Link to={`/services/${s.slug}`} className="group block">
                    <GlassCard className="h-full">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="font-serif text-2xl font-light text-bronze/30">
                          {s.index}
                        </span>
                        {Icon && (
                          <Icon
                            size={18}
                            className="text-muted group-hover:text-bronze transition-colors"
                          />
                        )}
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2 group-hover:text-bronze transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted">{s.description}</p>
                    </GlassCard>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink-soft py-24 text-center lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <h2
              className="mx-auto max-w-3xl font-serif font-semibold leading-[1.1] text-paper mb-10"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Work with a real estate advisor who prioritizes your vision and protects your investment.
            </h2>
            <Button to="/contact">Book a Private Consultation</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
