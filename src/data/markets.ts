export interface Market {
  name: string
  description: string
  image: string
  stats: { label: string; value: string }[]
  gallery: string[]
}

export const markets: Market[] = [
  {
    name: 'Lebanon',
    description: 'A home market understood from the inside: pricing, timing, and the realities of execution in Beirut and beyond.',
    image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=1200&q=80',
    stats: [{ label: 'Years Active', value: '15+' }, { label: 'Transactions', value: '150+' }, { label: 'Focus', value: 'Beirut & Mount Lebanon' }],
    gallery: ['https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=800&q=80', 'https://images.unsplash.com/photo-1568322503190-964e361fc5ee?w=800&q=80', 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80'],
  },
  {
    name: 'Cyprus',
    description: 'A stable, residency-friendly market for diaspora and international investors seeking long-term value.',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=1200&q=80',
    stats: [{ label: 'Years Active', value: '8+' }, { label: 'Focus', value: 'Limassol & Paphos' }, { label: 'Speciality', value: 'Residency & Investment' }],
    gallery: ['https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80', 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80', 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80'],
  },
  {
    name: 'Greece',
    description: 'Selective acquisition and development across a recovering, opportunity-rich coastline.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80',
    stats: [{ label: 'Years Active', value: '5+' }, { label: 'Focus', value: 'Athens & Coastal' }, { label: 'Opportunity', value: 'Recovery Market' }],
    gallery: ['https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80', 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80', 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=800&q=80'],
  },
]
