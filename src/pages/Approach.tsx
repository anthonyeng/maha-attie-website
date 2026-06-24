import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import IndexNumeral from '../components/IndexNumeral'
import PhotoFrame from '../components/PhotoFrame'
import Button from '../components/Button'
import { processSteps } from '../data/process'

export default function Approach() {
  return (
    <>
      <Seo
        title="Approach"
        description="A structured approach to every decision. From listening to stewardship, six disciplined steps guide every client relationship."
        path="/approach"
      />

      <section className="pt-36 pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionHeading
            eyebrow="The Process"
            headline="A structured approach to every decision."
            className="mb-8"
          />
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-lg leading-relaxed text-muted mb-20">
              Every client relationship is built on clarity, transparency, and precision. From the
              initial consultation to final acquisition, each step is structured to provide confidence
              and control throughout the process.
            </p>
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr] lg:gap-24">
            <div>
              {processSteps.map((step, i) => (
                <Reveal key={step.index} delay={i * 0.06}>
                  <div className="border-t border-line py-8 lg:py-10">
                    <div className="flex items-baseline gap-6 lg:gap-10">
                      <IndexNumeral index={step.index} />
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-ink lg:text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-muted">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-line" />
            </div>

            <Reveal delay={0.2}>
              <PhotoFrame
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Maha Attié — structured advisory process"
                aspect="aspect-[3/4]"
                parallax
                className="sticky top-32"
              />
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-20 text-center">
              <Button to="/contact">Begin the process</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
