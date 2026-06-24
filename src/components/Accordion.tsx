import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
// clsx removed — unused

interface AccordionProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  index?: string
}

export default function Accordion({
  title,
  children,
  isOpen,
  onToggle,
  index,
}: AccordionProps) {
  const panelId = `accordion-panel-${index ?? title.replace(/\s+/g, '-').toLowerCase()}`
  const buttonId = `accordion-btn-${index ?? title.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div className="border-t border-line">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="font-serif text-lg text-ink">
          {index && (
            <span className="mr-4 text-sm text-muted">{index}</span>
          )}
          {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-bronze"
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-muted">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
