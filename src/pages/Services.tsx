import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import IndexNumeral from '../components/IndexNumeral'
import Button from '../components/Button'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Five ways I work — from strategic consultation to exclusivity mandates. Maha Attié offers structured real estate advisory services."
        path="/services"
      />

      <section className="pt-36 pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionHeading eyebrow="Services" headline="Five ways I work." className="mb-20" />

          <div>
            {services.map((s, i) => (
              <Reveal key={s.index} delay={i * 0.06}>
                <div className="border-t border-line py-10 lg:py-14">
                  <div className="grid gap-6 lg:grid-cols-[120px_1fr] lg:gap-12 items-baseline">
                    <IndexNumeral index={s.index} />
                    <div className="max-w-2xl">
                      <h3
                        className="font-serif font-semibold text-ink mb-3"
                        style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-lg text-muted leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-line" />
          </div>

          <Reveal>
            <div className="mt-20 max-w-2xl">
              <p
                className="font-serif font-semibold leading-[1.15] text-ink mb-10"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                Most advisors stop at advice. I stay through execution.
              </p>
              <Button to="/contact">Book a consultation</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
