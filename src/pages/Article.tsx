import { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Seo from '../components/Seo'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import PhotoFrame from '../components/PhotoFrame'
import Button from '../components/Button'
import { articles } from '../data/articles'

const articleContent: Record<string, string[]> = {
  'how-i-select-the-right-property': [
    'The most important part of selecting a property has nothing to do with the property itself. It begins with the decision — the reason capital is moving, the constraints that shape it, and the outcome it must achieve over time. Without that clarity, every listing is a distraction. With it, most of them become irrelevant.',
    'Before I look at a single property, I define the objective in precise terms. Is this an income asset or a generational hold? Is the buyer relocating, hedging, or developing? What is the timeline — and what happens if the timeline shifts? These are not questions of preference. They are structural questions that eliminate ninety percent of the market before a viewing ever takes place.',
    'Sourcing comes next, and it is done quietly. I do not cast a wide net. I work through a curated network of developers, landowners, and intermediaries who understand discretion. In markets like Beirut, Limassol, and Athens, the best opportunities are rarely listed. They surface through relationships — and only to those who have earned them over years of consistent, principled work.',
    "Once a shortlist exists, I pressure-test every option against the investment logic established at the outset. I examine comparable transactions, not asking prices. I assess the legal structure, the development risk, and the exit — not in the abstract, but in the specific terms of the client's position. I bring in legal counsel and, where necessary, technical experts. But the strategic judgment is mine, and I do not delegate it.",
    'The final discipline is knowing what to decline. I have walked clients away from properties that looked exceptional on paper because the timing was wrong, the structure was misaligned, or the risk was not justified by the return. That willingness to say no — to protect a client from a decision that merely looks good — is the most valuable thing I offer. Selection is not about finding the best property on the market. It is about finding the right property for the decision at hand, and having the discipline to wait if it does not yet exist.',
  ],
  'timing-is-a-discipline': [
    'Markets move in cycles, but the best decisions are not made by predicting those cycles. They are made by preparing for them. Timing, as I practice it, is not a forecast — it is a discipline of readiness.',
    'When a client is positioned correctly — capital structured, objectives defined, legal frameworks in place — opportunities can be seized without hesitation. The cost of unpreparedness is not missing the bottom of a market. It is missing the moment when a specific asset, at a specific price, becomes available to a prepared buyer.',
    'In the markets I work across — Lebanon, Cyprus, and Greece — timing carries additional weight. Regulatory shifts, currency dynamics, and political developments create windows that open and close unpredictably. The advisor who waits for certainty arrives too late. The one who acts without preparation arrives recklessly.',
    'The discipline is in the middle: being structured enough to act quickly, and patient enough to wait for the right conditions. I tell my clients that the timeline is not theirs to set — the market sets it. But the readiness is entirely within their control.',
    "Every engagement I undertake includes a timing assessment. Not when to buy, but when the conditions for buying will be most favorable to the client's specific position. Sometimes the answer is now. Sometimes it is eighteen months from now. The value is in the honesty of that answer, not the urgency.",
  ],
  'framing-before-the-deal': [
    'The most valuable work I do happens before a single property is viewed. It happens in the framing — the process of defining what the decision actually is, before capital, architects, or feasibility studies enter the picture.',
    'Most clients come to me with a solution already in mind: a neighborhood, a building type, a price range. My first task is to question whether the solution matches the problem. What are they trying to achieve? What are they protecting? What does success look like in five years, and what does failure look like?',
    "Framing is not a creative exercise. It is structural. It involves understanding the client's financial position, their legal exposure, their family considerations, and their tolerance for risk. It means defining the decision in terms that can be tested against real opportunities — not just described in conversation.",
    'When the frame is right, everything downstream becomes more efficient. Sourcing is targeted. Due diligence is focused. Negotiation has clear boundaries. And the client has a reference point for every choice that follows — not an emotional one, but a strategic one.',
    "I have seen too many acquisitions that succeeded on their own terms but failed on the client's. The property was fine. The decision was wrong. That is what framing prevents. It is the least visible part of my work, and the most consequential.",
  ],
}

export default function Article() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find((a) => a.slug === slug)
  const content = slug ? articleContent[slug] : undefined
  const otherArticles = articles.filter((a) => a.slug !== slug)

  const articleBodyRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: articleBodyRef,
    offset: ['start start', 'end end'],
  })
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  if (!article || !content) {
    return (
      <div className="pt-36 pb-24 text-center">
        <p className="text-muted">Article not found.</p>
        <Button to="/journal" variant="link" className="mt-4">
          Back to Journal
        </Button>
      </div>
    )
  }

  return (
    <>
      <Seo title={article.title} description={article.excerpt} path={`/journal/${slug}`} />

      {/* Reading progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0% 50%' }}
        className="fixed top-[64px] left-0 right-0 z-50 h-[2px] bg-bronze"
      />

      <article className="pt-36 pb-24" ref={articleBodyRef}>
        <div className="mx-auto max-w-[680px] px-6">
          <Reveal>
            <Eyebrow className="mb-4">Journal</Eyebrow>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted mb-6">
              {article.date}
            </p>
            <h1
              className="font-serif font-semibold leading-[1.05] text-ink mb-12"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              {article.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <PhotoFrame
              src={article.image}
              alt={article.title}
              aspect="aspect-[16/9]"
              className="mb-12"
            />
          </Reveal>

          <div className="space-y-6">
            {content.map((paragraph, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-ink/80 leading-[1.8]">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Read next */}
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 mt-24">
          <Reveal>
            <div className="border-t border-line pt-12">
              <h3 className="font-serif text-2xl font-semibold text-ink mb-8">Read next</h3>
              <div className="grid gap-12 md:grid-cols-2">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/journal/${a.slug}`}
                    className="group block"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted mb-2">
                      {a.date}
                    </p>
                    <h4 className="font-serif text-xl font-semibold text-ink group-hover:text-bronze transition-colors">
                      {a.title}
                    </h4>
                    <p className="mt-2 text-muted">{a.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA Band */}
        <div className="bg-ink mt-24">
          <div className="mx-auto max-w-[1280px] px-6 py-24 text-center lg:px-12">
            <Reveal>
              <h2
                className="mx-auto max-w-3xl font-serif font-semibold leading-[1.1] text-paper mb-10"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                Work with a real estate advisor who prioritizes your vision and protects your investment.
              </h2>
              <Button to="/contact">Book a private consultation</Button>
            </Reveal>
          </div>
        </div>
      </article>
    </>
  )
}
