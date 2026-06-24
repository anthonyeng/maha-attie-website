import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import PhotoFrame from '../components/PhotoFrame'
import Button from '../components/Button'
import { markets } from '../data/markets'

export default function Markets() {
  return (
    <>
      <Seo
        title="Markets"
        description="Three markets, one discipline. Maha Attié works across Lebanon, Cyprus, and Greece with a consistent advisory approach."
        path="/markets"
      />

      <section className="pt-36 pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionHeading
            eyebrow="Where I Work"
            headline="Three markets, one discipline."
            className="mb-20"
          />

          <div className="space-y-24 lg:space-y-32">
            {markets.map((market, i) => (
              <Reveal key={market.name} delay={0.1}>
                <div
                  className={`grid gap-12 lg:gap-20 items-center ${
                    i % 2 === 1 ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'
                  }`}
                >
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <PhotoFrame
                      src={market.image}
                      alt={`Real estate in ${market.name}`}
                      aspect="aspect-[16/10]"
                      parallax
                    />
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3
                      className="font-serif font-semibold text-ink mb-4"
                      style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                    >
                      {market.name}
                    </h3>
                    <p className="text-lg leading-relaxed text-muted">{market.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-24 text-center">
              <Button to="/contact">Discuss your market</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
