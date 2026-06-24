import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
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
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 18,
                  delay: i * 0.12,
                }}
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
                className="rounded-lg"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
