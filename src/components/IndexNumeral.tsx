import clsx from 'clsx'

interface IndexNumeralProps {
  index: string
  className?: string
}

export default function IndexNumeral({ index, className }: IndexNumeralProps) {
  return (
    <span
      className={clsx(
        'font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-light text-bronze/40',
        className
      )}
    >
      {index}
    </span>
  )
}
