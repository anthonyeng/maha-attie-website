import { useState } from 'react'
import Seo from '../components/Seo'
import AnimatedPageHeader from '../components/AnimatedPageHeader'
import Accordion from '../components/Accordion'
import GlassCard from '../components/GlassCard'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { faqItems } from '../data/faq'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <Seo
        title="FAQ"
        description="Everything you need to know about working with Maha Attié — common questions answered."
        path="/faq"
      />

      <AnimatedPageHeader
        eyebrow="FAQ"
        headline="Common questions."
        description="Everything you need to know about working with me."
      />

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.4fr] lg:gap-20">
            {/* Left — Accordion List */}
            <div>
              {faqItems.map((item, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <Accordion
                    title={item.question}
                    isOpen={openIndex === i}
                    onToggle={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    index={String(i + 1).padStart(2, '0')}
                  >
                    <p className="leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </Accordion>
                </Reveal>
              ))}
              {/* bottom border to close last item */}
              <div className="border-t border-line" />
            </div>

            {/* Right — CTA Sidebar */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal delay={0.2}>
                <GlassCard hoverable={false}>
                  <Eyebrow>Still have questions?</Eyebrow>
                  <p className="mt-4 leading-relaxed text-muted">
                    Every engagement begins with a conversation. Reach out and
                    I'll respond within 24 hours.
                  </p>
                  <div className="mt-6">
                    <Button to="/contact">Get in touch</Button>
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-stone py-24 text-center lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <h2
              className="mx-auto max-w-2xl font-serif font-semibold leading-[1.1] text-ink mb-10"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Ready to begin?
            </h2>
            <Button to="/contact">Begin a conversation</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
