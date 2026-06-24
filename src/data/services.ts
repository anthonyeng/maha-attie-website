export interface Service {
  index: string
  title: string
  description: string
  longDescription: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    index: '01',
    title: 'Strategic Consultation',
    description: 'One focused session on a single question, with a written summary to follow.',
    longDescription: 'A single, focused engagement designed to answer one critical question. Whether you are evaluating a purchase, reconsidering a hold, or assessing a market entry, this session provides structured clarity — followed by a written summary you can act on.',
    icon: 'compass',
    features: ['Single focused session', 'Written summary delivered', 'Clear actionable framework', 'Follow-up available'],
  },
  {
    index: '02',
    title: 'Framing Mandate',
    description: 'I frame the decision before capital, architects, or feasibility studies begin.',
    longDescription: 'Before capital moves, the decision must be defined. I frame the objective, constraints, and success criteria — creating a written mandate that guides every downstream action from sourcing to execution.',
    icon: 'frame',
    features: ['Decision architecture', 'Risk-return framework', 'Stakeholder alignment', 'Written mandate document'],
  },
  {
    index: '03',
    title: 'Advisory Retainer',
    description: 'Ongoing access to my judgment, across a portfolio or a market cycle.',
    longDescription: 'Continuous access to my judgment across a portfolio or a market cycle. Retainer clients receive priority scheduling, proactive market intelligence, and strategic oversight that evolves with their position.',
    icon: 'shield',
    features: ['Ongoing strategic access', 'Portfolio-level oversight', 'Market cycle guidance', 'Priority scheduling'],
  },
  {
    index: '04',
    title: 'Development Sales',
    description: 'I take a development from the ground up — product, positioning, and sale.',
    longDescription: 'I take a development from concept to sale — defining the product, positioning it in the market, and managing the sales process from qualified lead to closed transaction. The approach is selective, not volume-driven.',
    icon: 'building-2',
    features: ['Product positioning', 'Pricing strategy', 'Sales pipeline management', 'Buyer qualification'],
  },
  {
    index: '05',
    title: 'Exclusivity Mandate',
    description: 'I position a property for the right buyer, not the widest exposure.',
    longDescription: 'I position a property for the right buyer — not the widest audience. This mandate prioritizes discretion, qualified engagement, and a transaction structure that protects the seller while attracting serious capital.',
    icon: 'lock',
    features: ['Discreet positioning', 'Qualified buyer matching', 'Negotiation management', 'Transaction execution'],
  },
]
