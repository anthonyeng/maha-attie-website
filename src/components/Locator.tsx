import clsx from 'clsx'

interface LocatorProps {
  dark?: boolean
  className?: string
}

export default function Locator({ dark, className }: LocatorProps) {
  return (
    <span
      className={clsx(
        'font-sans text-xs font-medium uppercase tracking-[0.18em]',
        dark ? 'text-paper/60' : 'text-muted',
        className
      )}
    >
      Beirut&ensp;&middot;&ensp;Limassol&ensp;&middot;&ensp;Athens
    </span>
  )
}
