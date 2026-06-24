import clsx from 'clsx'

interface HoverCardProps {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
}

export default function HoverCard({ front, back, className }: HoverCardProps) {
  return (
    <>
      {/* Standard version */}
      <div
        className={clsx(
          'group [perspective:1000px] motion-safe:block motion-reduce:hidden',
          className,
        )}
      >
        <div className="relative transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="[backface-visibility:hidden]">{front}</div>
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {back}
          </div>
        </div>
      </div>

      {/* Reduced motion fallback */}
      <div
        className={clsx(
          'group motion-safe:hidden motion-reduce:block',
          className,
        )}
      >
        <div>{front}</div>
        <div className="hidden group-hover:block">{back}</div>
      </div>
    </>
  )
}
