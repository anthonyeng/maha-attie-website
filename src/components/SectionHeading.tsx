import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  headline: string
  dark?: boolean
  className?: string
}

export default function SectionHeading({ eyebrow, headline, dark, className }: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <Eyebrow dark={dark} className="mb-5">
        {eyebrow}
      </Eyebrow>
      <h2
        className={`font-serif font-semibold leading-[1.05] ${
          dark ? 'text-paper' : 'text-ink'
        }`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
      >
        {headline}
      </h2>
    </Reveal>
  )
}
