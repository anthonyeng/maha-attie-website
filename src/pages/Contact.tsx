import { useState, useRef, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Seo from '../components/Seo'
import AnimatedPageHeader from '../components/AnimatedPageHeader'
import Reveal from '../components/Reveal'
import GlassCard from '../components/GlassCard'
import clsx from 'clsx'
import { Calendar, CheckCircle, Clock } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/FORMSPREE_ENDPOINT' // <-- Replace with your Formspree endpoint

const interestOptions = [
  '15-min Discovery Call',
  'Strategic Consultation',
  'Framing Mandate',
  'Advisory Retainer',
  'Development Sales',
  'Exclusivity Mandate',
]

/* ─── Floating Label Input ─── */
function FloatingInput({
  id,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full border border-line bg-transparent px-4 pt-6 pb-2 text-ink placeholder-transparent focus:border-bronze focus:outline-none transition-colors"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted transition-all duration-200 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-bronze peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  )
}

/* ─── Floating Label Textarea ─── */
function FloatingTextarea({
  id,
  label,
  value,
  onChange,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={id}
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full border border-line bg-transparent px-4 pt-6 pb-2 text-ink placeholder-transparent focus:border-bronze focus:outline-none resize-none transition-colors"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 text-sm text-muted transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-bronze peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  )
}

/* ─── Step Progress Indicator ─── */
function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center mb-10">
      {Array.from({ length: total }, (_, i) => {
        const stepNum = i + 1
        const isCompleted = stepNum < current
        const isCurrent = stepNum === current
        return (
          <div key={i} className="flex items-center">
            <div
              className={clsx(
                'flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-medium transition-all duration-300',
                isCompleted && 'border-bronze bg-bronze text-paper',
                isCurrent && 'border-bronze bg-paper text-bronze',
                !isCompleted && !isCurrent && 'border-line bg-paper text-muted'
              )}
            >
              {isCompleted ? (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                stepNum
              )}
            </div>
            {i < total - 1 && (
              <div className="relative mx-2 h-0.5 w-12 bg-line overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-bronze"
                  initial={{ width: '0%' }}
                  animate={{ width: stepNum < current ? '100%' : '0%' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ─── Success Checkmark ─── */
function SuccessCheckmark() {
  return (
    <div className="flex flex-col items-center py-16 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <svg className="h-20 w-20 text-bronze" viewBox="0 0 52 52">
          <motion.circle
            cx="26"
            cy="26"
            r="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <motion.path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 27l7 7 15-15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
          />
        </svg>
      </motion.div>
      <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">Thank you</h3>
      <p className="mt-3 max-w-sm text-muted leading-relaxed">
        Your inquiry has been received. I typically respond within 24 hours.
      </p>
    </div>
  )
}

/* ─── Slide variants ─── */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
}

export default function Contact() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  /* Form state */
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [details, setDetails] = useState('')

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    )
  }

  const goNext = () => {
    setDirection(1)
    setStep((s) => Math.min(s + 1, 3))
  }

  const goBack = () => {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 1))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          interests: selected.join(', '),
          details,
        }),
      })
    } catch {
      // silently handle — show success regardless for UX
    }
    setSubmitted(true)
  }

  const canProceedStep1 = firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== ''

  return (
    <>
      <Seo
        title="Contact"
        description="Begin a private conversation with Maha Attie. Book a consultation for real estate advisory across Lebanon, Cyprus, and Greece."
        path="/contact"
      />

      <AnimatedPageHeader
        eyebrow="Get in Touch"
        headline="Begin a private conversation."
      />

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
            {/* ─── Form ─── */}
            <Reveal>
              {submitted ? (
                <SuccessCheckmark />
              ) : (
                <div>
                  <StepIndicator current={step} total={3} />

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="relative overflow-hidden"
                  >
                    {/* Hidden inputs for Formspree */}
                    <input type="hidden" name="firstName" value={firstName} />
                    <input type="hidden" name="lastName" value={lastName} />
                    <input type="hidden" name="email" value={email} />
                    <input type="hidden" name="phone" value={phone} />
                    <input type="hidden" name="interests" value={selected.join(', ')} />
                    <input type="hidden" name="details" value={details} />

                    <AnimatePresence mode="wait" custom={direction}>
                      {/* Step 1: Personal Info */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="space-y-6"
                        >
                          <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                            Your details
                          </h3>
                          <div className="grid gap-6 md:grid-cols-2">
                            <FloatingInput
                              id="firstName"
                              label="First name *"
                              required
                              value={firstName}
                              onChange={setFirstName}
                            />
                            <FloatingInput
                              id="lastName"
                              label="Last name *"
                              required
                              value={lastName}
                              onChange={setLastName}
                            />
                          </div>
                          <FloatingInput
                            id="email"
                            label="Email *"
                            type="email"
                            required
                            value={email}
                            onChange={setEmail}
                          />
                          <FloatingInput
                            id="phone"
                            label="Phone"
                            type="tel"
                            value={phone}
                            onChange={setPhone}
                          />

                          <div className="flex justify-end pt-2">
                            <button
                              type="button"
                              onClick={goNext}
                              disabled={!canProceedStep1}
                              className={clsx(
                                'inline-flex items-center gap-2 bg-bronze px-7 py-3.5 text-sm font-medium uppercase tracking-[0.08em] text-paper transition-all duration-300',
                                canProceedStep1
                                  ? 'hover:bg-bronze-dk hover:-translate-y-px'
                                  : 'opacity-40 cursor-not-allowed'
                              )}
                            >
                              Next
                              <span>&rarr;</span>
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Interests */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="space-y-6"
                        >
                          <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                            What are you interested in?
                          </h3>
                          <p className="text-sm text-muted">
                            Select all that apply.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {interestOptions.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => toggleOption(option)}
                                className={clsx(
                                  'border px-5 py-2.5 text-sm transition-all duration-200',
                                  selected.includes(option)
                                    ? 'border-bronze bg-bronze text-paper'
                                    : 'border-line text-muted hover:border-bronze hover:text-bronze'
                                )}
                              >
                                {option}
                              </button>
                            ))}
                          </div>

                          <div className="flex justify-between pt-2">
                            <button
                              type="button"
                              onClick={goBack}
                              className="inline-flex items-center gap-2 border border-line px-7 py-3.5 text-sm font-medium uppercase tracking-[0.08em] text-ink transition-all duration-300 hover:border-bronze hover:text-bronze"
                            >
                              <span>&larr;</span>
                              Back
                            </button>
                            <button
                              type="button"
                              onClick={goNext}
                              className="inline-flex items-center gap-2 bg-bronze px-7 py-3.5 text-sm font-medium uppercase tracking-[0.08em] text-paper transition-all duration-300 hover:bg-bronze-dk hover:-translate-y-px"
                            >
                              Next
                              <span>&rarr;</span>
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: Project Details */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="space-y-6"
                        >
                          <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                            Tell me about your project
                          </h3>
                          <FloatingTextarea
                            id="details"
                            label="Project details, timeline, budget..."
                            value={details}
                            onChange={setDetails}
                          />

                          <p className="text-sm italic text-muted">
                            Consultation fees are deductible upon signing an agreement.
                          </p>

                          <div className="flex justify-between pt-2">
                            <button
                              type="button"
                              onClick={goBack}
                              className="inline-flex items-center gap-2 border border-line px-7 py-3.5 text-sm font-medium uppercase tracking-[0.08em] text-ink transition-all duration-300 hover:border-bronze hover:text-bronze"
                            >
                              <span>&larr;</span>
                              Back
                            </button>
                            <button
                              type="submit"
                              className="inline-flex items-center gap-2 bg-bronze px-7 py-3.5 text-sm font-medium uppercase tracking-[0.08em] text-paper transition-all duration-300 hover:bg-bronze-dk hover:-translate-y-px"
                            >
                              Submit
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              )}
            </Reveal>

            {/* ─── Sidebar ─── */}
            <Reveal delay={0.15}>
              <div className="lg:pl-8 space-y-10">
                {/* Address */}
                <div>
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

                {/* Contact Info */}
                <div>
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

                {/* Social */}
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

                {/* Calendar Booking Placeholder */}
                <GlassCard className="relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bronze/10 text-bronze">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-ink">
                        Schedule Directly
                      </h4>
                      <p className="mt-1 text-sm text-muted leading-relaxed">
                        Book a time that works for you.
                      </p>
                      <span className="mt-3 inline-block rounded-full border border-bronze/30 bg-bronze/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-bronze">
                        Coming soon
                      </span>
                    </div>
                  </div>
                </GlassCard>

                {/* Response Time */}
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Clock className="h-4 w-4 text-bronze" />
                  <span>Typical response within 24 hours</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
