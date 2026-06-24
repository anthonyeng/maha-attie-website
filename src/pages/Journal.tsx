import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import PhotoFrame from '../components/PhotoFrame'
import { articles } from '../data/articles'

export default function Journal() {
  return (
    <>
      <Seo
        title="Journal"
        description="Notes on judgment. Perspectives on property selection, timing, and the discipline of real estate advisory."
        path="/journal"
      />

      <section className="pt-36 pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionHeading eyebrow="Journal" headline="Notes on judgment." className="mb-20" />

          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.08}>
                <Link to={`/journal/${article.slug}`} className="group block">
                  <div className="overflow-hidden mb-6">
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
                      <PhotoFrame src={article.image} alt={article.title} aspect="aspect-[16/10]" />
                    </motion.div>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted mb-2">
                    {article.date}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-bronze transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted mb-4">{article.excerpt}</p>
                  <span className="text-sm font-medium uppercase tracking-[0.12em] text-bronze">
                    Read more &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
