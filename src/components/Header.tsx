import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/nav'
import clsx from 'clsx'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-500',
          scrolled ? 'bg-paper/95 backdrop-blur-sm border-b border-line shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-12">
          <Link
            to="/"
            className="font-serif text-2xl font-semibold tracking-tight text-ink"
          >
            Maha Attié
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-cursor="grow"
                className={clsx(
                  'relative font-sans text-sm font-medium tracking-wide transition-all duration-300 hover:text-bronze hover:bg-bronze/5 px-3 py-1.5 -mx-3 rounded-sm',
                  location.pathname === link.path ? 'text-bronze' : 'text-ink'
                )}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-bronze"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              data-cursor="grow"
              className="inline-flex items-center bg-bronze px-6 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-paper transition-all duration-300 hover:bg-bronze-dk hover:-translate-y-px"
            >
              Book a Consultation
            </Link>
          </div>

          <button
            className="lg:hidden text-ink p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={reduced ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.path}
                    data-cursor="grow"
                    className={clsx(
                      'font-serif text-3xl font-semibold transition-colors duration-300 hover:text-bronze',
                      location.pathname === link.path ? 'text-bronze' : 'text-ink'
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduced ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
              >
                <Link
                  to="/contact"
                  data-cursor="grow"
                  className="mt-4 inline-flex bg-bronze px-8 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-paper"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
