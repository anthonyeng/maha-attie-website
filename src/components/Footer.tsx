import { Link } from 'react-router-dom'
import Locator from './Locator'
import Reveal from './Reveal'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/FORMSPREE_ENDPOINT' // <-- Replace with your Formspree endpoint

export default function Footer() {
  return (
    <footer className="bg-ink text-paper" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* Main columns */}
        <Reveal>
          <div className="grid gap-12 py-20 md:grid-cols-3 lg:gap-16">
            <div>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-paper/60">
                Address
              </h4>
              <p className="text-sm leading-relaxed text-paper/80">
                Marfaa 1151 Building
                <br />
                El Amir Bachir St.
                <br />
                Riad El Solh, Downtown Beirut
                <br />
                Lebanon
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-paper/60">
                Contact
              </h4>
              <p className="text-sm leading-relaxed text-paper/80">
                <a href="tel:+96176867682" className="transition-colors hover:text-bronze">
                  (+961) 76 867 682
                </a>
                <br />
                <a href="mailto:hello@mahaattie.com" className="transition-colors hover:text-bronze">
                  hello@mahaattie.com
                </a>
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-paper/60">
                Follow
              </h4>
              <div className="flex gap-6 text-sm text-paper/80">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transition-colors hover:text-bronze after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-300 hover:after:w-full"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transition-colors hover:text-bronze after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-300 hover:after:w-full"
                >
                  LinkedIn
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-6 text-sm text-paper/80">
                <Link to="/privacy" className="relative transition-colors hover:text-bronze after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-300 hover:after:w-full">
                  Legal
                </Link>
                <Link to="/privacy" className="relative transition-colors hover:text-bronze after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-300 hover:after:w-full">
                  Privacy
                </Link>
                <Link to="/faq" className="relative transition-colors hover:text-bronze after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-300 hover:after:w-full">
                  FAQ
                </Link>
                <Link to="/portfolio" className="relative transition-colors hover:text-bronze after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-300 hover:after:w-full">
                  Portfolio
                </Link>
                <a
                  href="https://skyriseme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transition-colors hover:text-bronze after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-300 hover:after:w-full"
                >
                  Visit SkyRise
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Newsletter */}
        <div className="border-t border-paper/[0.14] py-12">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-paper/60">
                Sign up to receive notes and updates.
              </p>
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                className="flex gap-3"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="bg-transparent border border-paper/[0.14] px-4 py-2.5 text-sm text-paper placeholder:text-paper/40 focus:border-bronze focus:outline-none w-64"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="bg-bronze px-6 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-bronze-dk"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-paper/[0.14] py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-paper/40">&copy; Maha Attié 2026</p>
            <Locator dark />
          </div>
        </div>
      </div>
    </footer>
  )
}
