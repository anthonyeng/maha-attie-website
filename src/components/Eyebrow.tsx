import clsx from 'clsx'

interface EyebrowProps {
  children: React.ReactNode
  dark?: boolean
  className?: string
}

export default function Eyebrow({ children, dark, className }: EyebrowProps) {
  return (
    <span
      className={clsx(
        'inline-block font-sans text-xs font-medium uppercase tracking-[0.18em]',
        dark ? 'text-bronze' : 'text-bronze',
        className
      )}
    >
      {children}
    </span>
  )
}
