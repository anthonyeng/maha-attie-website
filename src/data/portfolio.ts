export interface CaseStudy {
  slug: string
  title: string
  location: string
  type: 'acquisition' | 'development' | 'advisory'
  year: string
  image: string
  description: string
  stats: { label: string; value: string }[]
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'downtown-beirut-tower',
    title: 'Downtown Beirut Tower',
    location: 'Beirut, Lebanon',
    type: 'development',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    description: 'A 24-unit residential tower positioned for the diaspora return market. From land acquisition through sales completion, every decision was framed around long-term capital preservation.',
    stats: [{ label: 'Units', value: '24' }, { label: 'Timeline', value: '18 months' }, { label: 'Sold', value: '100%' }],
    tags: ['Residential', 'Diaspora', 'New Build'],
  },
  {
    slug: 'limassol-seafront-residence',
    title: 'Limassol Seafront Residence',
    location: 'Limassol, Cyprus',
    type: 'acquisition',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    description: 'A private acquisition for a family office seeking residency-eligible property. Sourced off-market through established local relationships.',
    stats: [{ label: 'Type', value: 'Villa' }, { label: 'Process', value: 'Off-market' }, { label: 'Purpose', value: 'Residency' }],
    tags: ['Villa', 'Off-Market', 'Residency'],
  },
  {
    slug: 'athens-portfolio-advisory',
    title: 'Athens Portfolio Advisory',
    location: 'Athens, Greece',
    type: 'advisory',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
    description: 'Strategic advisory for a multi-asset portfolio across central Athens. Restructured holdings and identified exit timing for underperforming assets.',
    stats: [{ label: 'Assets', value: '7' }, { label: 'Restructured', value: '4' }, { label: 'Exits', value: '2' }],
    tags: ['Portfolio', 'Restructuring', 'Multi-Asset'],
  },
  {
    slug: 'mount-lebanon-estate',
    title: 'Mount Lebanon Estate',
    location: 'Mount Lebanon',
    type: 'acquisition',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description: 'A generational property acquisition for a returning diaspora family. The mandate required discretion, structural clarity, and alignment across multiple stakeholders.',
    stats: [{ label: 'Type', value: 'Estate' }, { label: 'Stakeholders', value: '4' }, { label: 'Timeline', value: '6 months' }],
    tags: ['Estate', 'Diaspora', 'Family'],
  },
  {
    slug: 'paphos-development',
    title: 'Paphos Coastal Development',
    location: 'Paphos, Cyprus',
    type: 'development',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    description: 'A boutique coastal development positioned for the European investor market. Product design, pricing strategy, and sales execution managed end-to-end.',
    stats: [{ label: 'Units', value: '12' }, { label: 'Type', value: 'Boutique' }, { label: 'Market', value: 'European' }],
    tags: ['Coastal', 'Boutique', 'European Market'],
  },
]
