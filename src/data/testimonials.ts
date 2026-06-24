export interface Testimonial {
  name: string
  role: string
  quote: string
  featured?: boolean
}

export const testimonials: Testimonial[] = [
  {
    name: 'Karen Sayegh',
    role: 'Land Development Advisory, Lebanon',
    quote: 'Maha is on a mission to better grasp your needs and desires in order to bring them to life with unconditional commitment, safety and trust.',
  },
  {
    name: 'Rima Taan',
    role: 'Acquisition Advisory, Lebanese Diaspora',
    quote: "Grâce à son implication et à sa persévérance, tout s'est déroulé dans de très bonnes conditions. Grâce à elle, j'ai pu acheter ce pied-à-terre à Beyrouth.",
  },
  {
    name: 'Carlos De Carlos',
    role: 'Head of Security, European Union in Lebanon',
    quote: 'Une collaboration de confiance que nous recommandons vivement aux représentations diplomatiques.',
    featured: true,
  },
  {
    name: 'Sandra Harb',
    role: 'Founder, Living Wabich\'i',
    quote: "Ce que nous avons construit allait bien plus loin qu'un projet\u00a0: un dialogue entre deux visions qui ont fini par donner naissance à une création commune.",
  },
]
