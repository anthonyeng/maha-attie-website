export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
}

export const articles: Article[] = [
  {
    slug: 'how-i-select-the-right-property',
    title: 'How I Select the Right Property: A Structured Approach to Decisions',
    excerpt: 'The discipline of choosing what to walk away from.',
    date: '15 June 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
  },
  {
    slug: 'timing-is-a-discipline',
    title: 'Timing Is a Discipline, Not a Forecast',
    excerpt: 'Why the best decisions are about readiness, not prediction.',
    date: '2 May 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
  },
  {
    slug: 'framing-before-the-deal',
    title: 'Why I Frame the Decision Before the Deal',
    excerpt: 'The most valuable work happens before the first viewing.',
    date: '18 April 2026',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  },
]
