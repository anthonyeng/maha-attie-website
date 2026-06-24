import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

interface InteractiveMapProps {
  activeMarket?: string
  onMarketHover?: (name: string | null) => void
  className?: string
}

interface MarketShape {
  name: string
  d: string
  tooltipX: number
  tooltipY: number
}

const marketShapes: MarketShape[] = [
  {
    name: 'Greece',
    d: 'M280 250 L320 230 L350 240 L360 280 L340 310 L330 340 L310 350 L290 330 L270 300 L260 270 Z M350 300 L365 290 L375 305 L360 315 Z M380 310 L395 300 L405 320 L390 325 Z',
    tooltipX: 310,
    tooltipY: 220,
  },
  {
    name: 'Cyprus',
    d: 'M450 340 L500 330 L520 340 L515 355 L490 360 L460 355 Z',
    tooltipX: 480,
    tooltipY: 320,
  },
  {
    name: 'Lebanon',
    d: 'M555 330 L565 315 L575 320 L578 340 L572 360 L558 365 L550 350 Z',
    tooltipX: 560,
    tooltipY: 300,
  },
]

export default function InteractiveMap({
  activeMarket,
  onMarketHover,
  className,
}: InteractiveMapProps) {
  const [hoveredMarket, setHoveredMarket] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const handleHover = (market: MarketShape | null) => {
    if (market) {
      setHoveredMarket(market.name)
      setTooltipPos({ x: market.tooltipX, y: market.tooltipY })
    } else {
      setHoveredMarket(null)
    }
    onMarketHover?.(market?.name ?? null)
  }

  const isActive = (name: string) =>
    name === activeMarket || name === hoveredMarket

  return (
    <div className={clsx('relative', className)}>
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        role="img"
        aria-label="Interactive map of markets: Lebanon, Cyprus, Greece"
      >
        {/* Mediterranean Sea background */}
        <rect x="0" y="0" width="800" height="600" fill="none" />

        {/* Coastline hint */}
        <path
          d="M0 200 Q200 180 400 220 Q600 260 800 240 L800 600 L0 600 Z"
          fill="#e4e8ec"
          opacity="0.2"
        />

        {marketShapes.map((market) => (
          <motion.path
            key={market.name}
            d={market.d}
            fill={isActive(market.name) ? '#1d2944' : '#8492ae'}
            stroke="#ffffff"
            strokeWidth="1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer origin-center"
            style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
            onMouseEnter={() => handleHover(market)}
            onMouseLeave={() => handleHover(null)}
          />
        ))}
      </svg>

      <AnimatePresence>
        {hoveredMarket && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute bg-ink text-paper px-3 py-1.5 rounded-sm text-sm font-sans shadow-lg"
            style={{
              left: `${(tooltipPos.x / 800) * 100}%`,
              top: `${(tooltipPos.y / 600) * 100}%`,
              transform: 'translate(-50%, -100%)',
            }}
          >
            {hoveredMarket}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
