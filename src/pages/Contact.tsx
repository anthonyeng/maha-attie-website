import { useState } from 'react'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import clsx from 'clsx'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/FORMSPREE_ENDPOINT' // <-- Replace with your Formspree endpoint

const interestOptions = [
  '15-min Discovery Call',
  'Strategic Consultation',
  'Framing Mandate',
  'Advisory Retainer',
  'Development Sales',
  'Exclusivity Mandate',
]

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([])

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    )
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Begin a private conversation with Maha Attié. Book a consultation for real estate advisory across Lebanon, Cyprus, and Greece."
        path="/contact"
      />

      <section className="pt-36 pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionHeading
            eyebrow="Get in Touch"
            headline="Begin a private conversation."
            className="mb-16"
          />

          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
            <Reveal>
              <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full border border-line bg-transparent px-4 py-3 text-ink placeholder:text-muted/50 focus:border-bronze focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full border border-line bg-transparent px-4 py-3 text-ink placeholder:text-muted/50 focus:border-bronze focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-line bg-transparent px-4 py-3 text-ink placeholder:text-muted/50 focus:border-bronze focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-line bg-transparent px-4 py-3 text-ink placeholder:text-muted/50 focus:border-bronze focus:outline-none"
                  />
                </div>

                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    What are you interested in?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleOption(option)}
                        className={clsx(
                          'border px-4 py-2 text-sm transition-all duration-200',
                          selected.includes(option)
                            ? 'border-bronze bg-bronze text-paper'
                            : 'border-line text-muted hover:border-bronze hover:text-bronze'
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="interests" value={selected.join(', ')} />
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted"
                  >
                    Project details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    className="w-full border border-line bg-transparent px-4 py-3 text-ink placeholder:text-muted/50 focus:border-bronze focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center bg-bronze px-8 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-paper transition-all duration-300 hover:bg-bronze-dk hover:-translate-y-px"
                >
                  Send
                </button>

                <p className="text-sm italic text-muted">
                  Consultation fees are deductible upon signing an agreement.
                </p>
              </form>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="lg:pl-8">
                <div className="mb-10">
                  <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    Address
                  </h4>
                  <p className="text-ink leading-relaxed">
                    Marfaa 1151 Building
                    <br />
                    El Amir Bachir St.
                    <br />
                    Riad El Solh, Downtown Beirut
                    <br />
                    Lebanon
                  </p>
                </div>

                <div className="mb-10">
                  <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    Contact
                  </h4>
                  <p className="text-ink">
                    <a href="tel:+96176867682" className="hover:text-bronze transition-colors">
                      (+961) 76 867 682
                    </a>
                    <br />
                    <a href="mailto:hello@mahaattie.com" className="hover:text-bronze transition-colors">
                      hello@mahaattie.com
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    Follow
                  </h4>
                  <div className="flex gap-6 text-ink">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-bronze transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-bronze transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
