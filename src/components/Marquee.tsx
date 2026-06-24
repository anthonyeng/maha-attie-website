import clsx from 'clsx'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export default function Marquee({
  children,
  speed = 30,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div
      className={clsx('overflow-hidden', className)}
      style={
        {
          '--marquee-duration': `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          'flex w-max gap-8 animate-[marquee_var(--marquee-duration)_linear_infinite]',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        <div className="flex gap-8">{children}</div>
        <div className="flex gap-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
