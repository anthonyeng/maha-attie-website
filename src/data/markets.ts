export interface Market {
  name: string
  description: string
  image: string
}

export const markets: Market[] = [
  {
    name: 'Lebanon',
    description: 'A home market understood from the inside: pricing, timing, and the realities of execution in Beirut and beyond.',
    image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=1200&q=80',
  },
  {
    name: 'Cyprus',
    description: 'A stable, residency-friendly market for diaspora and international investors seeking long-term value.',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=1200&q=80',
  },
  {
    name: 'Greece',
    description: 'Selective acquisition and development across a recovering, opportunity-rich coastline.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80',
  },
]
