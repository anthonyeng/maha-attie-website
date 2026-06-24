import { useState, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion, useInView } from 'framer-motion'
import clsx from 'clsx'

interface InteractiveMapProps {
  activeMarket?: string
  onMarketHover?: (name: string | null) => void
  onMarketClick?: (name: string) => void
  className?: string
}

interface MarketPoint {
  name: string
  x: number
  y: number
  label: string
  stat: string
}

const marketPoints: MarketPoint[] = [
  { name: 'Greece', x: 312, y: 258, label: 'Athens & Coastal', stat: '5+ years' },
  { name: 'Cyprus', x: 430, y: 308, label: 'Limassol & Paphos', stat: '8+ years' },
  { name: 'Lebanon', x: 478, y: 282, label: 'Beirut & Mount Lebanon', stat: '15+ years' },
]

// Curved flight paths connecting the 3 markets
const flightPaths = [
  { from: 'Greece', to: 'Cyprus', d: 'M312 258 Q380 240 430 308' },
  { from: 'Cyprus', to: 'Lebanon', d: 'M430 308 Q460 280 478 282' },
  { from: 'Greece', to: 'Lebanon', d: 'M312 258 Q420 210 478 282' },
]

export default function InteractiveMap({
  activeMarket,
  onMarketHover,
  onMarketClick,
  className,
}: InteractiveMapProps) {
  const [hoveredMarket, setHoveredMarket] = useState<string | null>(null)
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const handleHover = (name: string | null) => {
    setHoveredMarket(name)
    onMarketHover?.(name)
  }

  const isActive = (name: string) =>
    name === activeMarket || name === hoveredMarket

  return (
    <div ref={ref} className={clsx('relative select-none', className)}>
      <svg
        viewBox="100 120 500 320"
        className="w-full h-auto"
        role="img"
        aria-label="Interactive map of markets: Lebanon, Cyprus, Greece"
      >
        <defs>
          {/* Gradient for the sea */}
          <radialGradient id="seaGradient" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#e4e8ec" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e4e8ec" stopOpacity="0.08" />
          </radialGradient>

          {/* Glow filter for active dots */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Animated dash for flight paths */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Sea background */}
        <rect x="100" y="120" width="500" height="320" fill="url(#seaGradient)" rx="8" />

        {/* Mediterranean coastline — stylized */}
        {/* Southern Europe mainland */}
        <path
          d="M100 180 Q140 175 180 190 Q210 200 230 195 Q260 185 280 190 Q300 198 310 210 Q305 225 295 230 Q280 228 270 235 Q255 245 260 260 Q265 275 255 285 Q240 290 235 300 Q230 315 220 320 Q200 325 190 335 L100 335 Z"
          fill="#f0ede8"
          stroke="#d6cfc2"
          strokeWidth="0.5"
        />
        {/* Turkey / Asia Minor */}
        <path
          d="M380 170 Q400 160 430 165 Q460 168 490 175 Q510 180 530 178 Q550 175 570 180 Q590 185 600 195 L600 250 Q580 255 560 248 Q540 242 520 250 Q500 258 490 270 Q478 275 465 268 Q450 260 440 265 Q430 272 420 268 Q405 260 395 265 Q380 272 370 260 Q360 248 350 252 Q340 258 330 250 Q325 240 330 230 Q340 218 348 210 Q355 200 365 192 Q370 182 380 170 Z"
          fill="#f0ede8"
          stroke="#d6cfc2"
          strokeWidth="0.5"
        />
        {/* North Africa coastline */}
        <path
          d="M100 380 Q200 365 300 370 Q400 375 500 368 Q550 365 600 370 L600 440 L100 440 Z"
          fill="#f0ede8"
          stroke="#d6cfc2"
          strokeWidth="0.5"
          opacity="0.5"
        />
        {/* Greek islands */}
        <circle cx="330" cy="275" r="4" fill="#f0ede8" stroke="#d6cfc2" strokeWidth="0.5" />
        <circle cx="345" cy="285" r="3" fill="#f0ede8" stroke="#d6cfc2" strokeWidth="0.5" />
        <circle cx="350" cy="300" r="5" fill="#f0ede8" stroke="#d6cfc2" strokeWidth="0.5" />
        <circle cx="320" cy="290" r="3" fill="#f0ede8" stroke="#d6cfc2" strokeWidth="0.5" />
        <ellipse cx="355" cy="318" rx="12" ry="4" fill="#f0ede8" stroke="#d6cfc2" strokeWidth="0.5" transform="rotate(-10 355 318)" />
        {/* Cyprus island */}
        <ellipse cx="432" cy="310" rx="18" ry="8" fill="#f0ede8" stroke="#d6cfc2" strokeWidth="0.5" transform="rotate(-5 432 310)" />

        {/* Grid lines (subtle latitude/longitude) */}
        {[200, 250, 300, 350].map((y) => (
          <line key={`h${y}`} x1="100" y1={y} x2="600" y2={y} stroke="#d6cfc2" strokeWidth="0.3" strokeDasharray="4 8" opacity="0.3" />
        ))}
        {[200, 300, 400, 500].map((x) => (
          <line key={`v${x}`} x1={x} y1="120" x2={x} y2="440" stroke="#d6cfc2" strokeWidth="0.3" strokeDasharray="4 8" opacity="0.3" />
        ))}

        {/* Flight paths — animated dashed arcs */}
        {flightPaths.map((path, i) => (
          <g key={i}>
            {/* Shadow path */}
            <path
              d={path.d}
              fill="none"
              stroke="#1d2944"
              strokeWidth="1"
              opacity="0.08"
            />
            {/* Animated path */}
            <motion.path
              d={path.d}
              fill="none"
              stroke="#1d2944"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity={
                isActive(path.from) || isActive(path.to) ? 0.6 : 0.15
              }
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.3 + i * 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            {/* Traveling dot along the path */}
            {!reduced && isInView && (
              <motion.circle
                r="2.5"
                fill="#1d2944"
                opacity={0.5}
              >
                <animateMotion
                  dur={`${3 + i}s`}
                  repeatCount="indefinite"
                  path={path.d}
                />
              </motion.circle>
            )}
          </g>
        ))}

        {/* Market dots */}
        {marketPoints.map((market, i) => (
          <g
            key={market.name}
            className="cursor-pointer"
            onMouseEnter={() => handleHover(market.name)}
            onMouseLeave={() => handleHover(null)}
            onClick={() => onMarketClick?.(market.name)}
          >
            {/* Outer pulse ring */}
            {!reduced && (
              <motion.circle
                cx={market.x}
                cy={market.y}
                r="12"
                fill="none"
                stroke="#1d2944"
                strokeWidth="1"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        scale: [0.5, 1.5, 0.5],
                        opacity: [0, 0.4, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ transformOrigin: `${market.x}px ${market.y}px` }}
              />
            )}

            {/* Second pulse ring (offset) */}
            {!reduced && (
              <motion.circle
                cx={market.x}
                cy={market.y}
                r="12"
                fill="none"
                stroke="#1d2944"
                strokeWidth="0.8"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        scale: [0.5, 2, 0.5],
                        opacity: [0, 0.2, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 3,
                  delay: i * 0.5 + 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ transformOrigin: `${market.x}px ${market.y}px` }}
              />
            )}

            {/* Glow behind active dot */}
            <motion.circle
              cx={market.x}
              cy={market.y}
              r="16"
              fill="#1d2944"
              animate={{
                opacity: isActive(market.name) ? 0.15 : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Main dot */}
            <motion.circle
              cx={market.x}
              cy={market.y}
              r={isActive(market.name) ? 7 : 5}
              fill="#1d2944"
              stroke="#ffffff"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              whileHover={{ scale: 1.3 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
                delay: 0.8 + i * 0.2,
              }}
            />

            {/* Label */}
            <motion.text
              x={market.x}
              y={market.y - 18}
              textAnchor="middle"
              className="font-sans text-[9px] font-semibold uppercase tracking-widest"
              fill="#1d2944"
              initial={{ opacity: 0, y: 5 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + i * 0.2 }}
            >
              {market.name}
            </motion.text>
          </g>
        ))}
      </svg>

      {/* Hover info card */}
      <AnimatePresence>
        {hoveredMarket && (() => {
          const market = marketPoints.find((m) => m.name === hoveredMarket)
          if (!market) return null
          return (
            <motion.div
              key={hoveredMarket}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute z-10 bg-white border border-line rounded-sm px-5 py-4 shadow-lg min-w-[200px]"
              style={{
                left: `${((market.x - 100) / 500) * 100}%`,
                top: `${((market.y - 120) / 320) * 100}%`,
                transform: 'translate(-50%, calc(-100% - 24px))',
              }}
            >
              <p className="font-serif text-lg font-semibold text-ink-soft">{market.name}</p>
              <p className="text-xs text-muted mt-1">{market.label}</p>
              <div className="mt-2 pt-2 border-t border-line/50">
                <span className="font-serif text-xl font-light text-ink-soft">{market.stat}</span>
              </div>
            </motion.div>
          )
        })()}
      </AnimatePresence>
    </div>
  )
}
