import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import PhotoFrame from '../components/PhotoFrame'
import Button from '../components/Button'

const values = [
  {
    title: 'Trust',
    description: 'Relationships before transactions.',
  },
  {
    title: 'Discretion',
    description: 'Quiet sourcing, private process.',
  },
  {
    title: 'Clarity',
    description: 'The decision defined before money moves.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Built on trust, discretion, and clarity. Learn about Maha Attié's structured and client-focused approach to real estate advisory."
        path="/about"
      />

      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionHeading eyebrow="The Practice" headline="Built on trust, discretion, and clarity." />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
              I bring a structured and client-focused approach to real estate advisory. My work is built
              on trust, discretion, and a clear understanding of each client's objectives. I work closely
              with every client to identify the right opportunities, ensuring each decision is aligned
              with both lifestyle and long-term investment goals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-stone py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <h3 className="font-serif text-2xl font-semibold text-ink mb-3">{v.title}</h3>
                <p className="text-muted">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] lg:gap-20">
            <Reveal>
              <PhotoFrame
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Modern architectural interior — real estate advisory"
                aspect="aspect-[4/5]"
                parallax
              />
            </Reveal>
            <Reveal delay={0.15}>
              <PhotoFrame
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Maha Attié portrait"
                aspect="aspect-[3/4]"
                className="md:mt-24"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-center lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <h2
              className="mx-auto max-w-2xl font-serif font-semibold leading-[1.1] text-paper mb-10"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Every engagement starts with a conversation.
            </h2>
            <Button to="/contact">Begin a conversation</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
