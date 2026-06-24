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
    image: 'https://images.unsplash.com/photo-1523978591478-c753949ff840?w=1200&q=80',
    stats: [{ label: 'Years Active', value: '15+' }, { label: 'Transactions', value: '150+' }, { label: 'Focus', value: 'Beirut & Mount Lebanon' }],
    gallery: [
      'https://images.unsplash.com/photo-1523978591478-c753949ff840?w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    name: 'Cyprus',
    description: 'A stable, residency-friendly market for diaspora and international investors seeking long-term value.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    stats: [{ label: 'Years Active', value: '8+' }, { label: 'Focus', value: 'Limassol & Paphos' }, { label: 'Speciality', value: 'Residency & Investment' }],
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  {
    name: 'Greece',
    description: 'Selective acquisition and development across a recovering, opportunity-rich coastline.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80',
    stats: [{ label: 'Years Active', value: '5+' }, { label: 'Focus', value: 'Athens & Coastal' }, { label: 'Opportunity', value: 'Recovery Market' }],
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    ],
  },
]
