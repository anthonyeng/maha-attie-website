export interface Service {
  index: string
  slug: string
  title: string
  description: string
  longDescription: string
  icon: string
  features: string[]
  image: string
  details: string[]
}

export const services: Service[] = [
  {
    index: '01',
    slug: 'strategic-consultation',
    title: 'Strategic Consultation',
    description: 'One focused session on a single question, with a written summary to follow.',
    longDescription: 'A single, focused engagement designed to answer one critical question. Whether you are evaluating a purchase, reconsidering a hold, or assessing a market entry, this session provides structured clarity — followed by a written summary you can act on.',
    icon: 'compass',
    features: ['Single focused session', 'Written summary delivered', 'Clear actionable framework', 'Follow-up available'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    details: [
      'The Strategic Consultation is the entry point to my advisory practice. It is designed for clients who face a single, well-defined question — whether to buy, hold, sell, or enter a new market — and need structured clarity before moving forward.',
      'In a focused session, I work through the decision with you: the objective, the constraints, the timeline, and the risks. I do not offer generic advice. Every consultation is grounded in your specific position, your capital structure, and the realities of the market you are considering.',
      'Following the session, I deliver a written summary — a concise document that frames the decision, outlines the key considerations, and provides a clear recommendation. This summary is designed to be actionable: something you can share with advisors, partners, or family members to align on next steps.',
      'For many clients, this single session is enough. For others, it becomes the foundation of a longer engagement. Either way, the consultation fee is deductible upon signing a mandate.',
    ],
  },
  {
    index: '02',
    slug: 'framing-mandate',
    title: 'Framing Mandate',
    description: 'I frame the decision before capital, architects, or feasibility studies begin.',
    longDescription: 'Before capital moves, the decision must be defined. I frame the objective, constraints, and success criteria — creating a written mandate that guides every downstream action from sourcing to execution.',
    icon: 'frame',
    features: ['Decision architecture', 'Risk-return framework', 'Stakeholder alignment', 'Written mandate document'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    details: [
      'The Framing Mandate is the most consequential service I offer — and the least visible. It happens before any property is viewed, before any architect is engaged, before any feasibility study is commissioned. It defines what the decision actually is.',
      'Most clients come to me with a solution already in mind: a neighborhood, a building type, a price range. My first task is to question whether the solution matches the problem. What are you trying to achieve? What are you protecting? What does success look like in five years — and what does failure look like?',
      'The output is a written mandate document that serves as the strategic foundation for everything that follows. It defines the investment logic, the risk-return framework, the timeline, and the success criteria. It aligns stakeholders — whether that means family members, business partners, or legal counsel.',
      'When the frame is right, everything downstream becomes more efficient. Sourcing is targeted. Due diligence is focused. Negotiation has clear boundaries. And you have a reference point for every choice that follows — not an emotional one, but a strategic one.',
    ],
  },
  {
    index: '03',
    slug: 'advisory-retainer',
    title: 'Advisory Retainer',
    description: 'Ongoing access to my judgment, across a portfolio or a market cycle.',
    longDescription: 'Continuous access to my judgment across a portfolio or a market cycle. Retainer clients receive priority scheduling, proactive market intelligence, and strategic oversight that evolves with their position.',
    icon: 'shield',
    features: ['Ongoing strategic access', 'Portfolio-level oversight', 'Market cycle guidance', 'Priority scheduling'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    details: [
      'The Advisory Retainer is for clients who need ongoing strategic counsel — not on a single transaction, but across a portfolio, a market cycle, or a series of connected decisions. It is a relationship, not a project.',
      'Retainer clients receive priority scheduling, proactive market intelligence, and strategic oversight that evolves with their position. When opportunities arise — or when markets shift — I reach out directly rather than waiting to be asked.',
      'This service is particularly valuable for diaspora investors managing assets across multiple markets, family offices with real estate exposure in Lebanon, Cyprus, or Greece, and high-net-worth individuals who want a trusted advisor on call as conditions evolve.',
      'The retainer is structured on a quarterly or annual basis, with clear terms and regular strategic reviews. It is the closest form of partnership I offer — and the one where my judgment is most consistently tested and refined.',
    ],
  },
  {
    index: '04',
    slug: 'development-sales',
    title: 'Development Sales',
    description: 'I take a development from the ground up — product, positioning, and sale.',
    longDescription: 'I take a development from concept to sale — defining the product, positioning it in the market, and managing the sales process from qualified lead to closed transaction. The approach is selective, not volume-driven.',
    icon: 'building-2',
    features: ['Product positioning', 'Pricing strategy', 'Sales pipeline management', 'Buyer qualification'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
    details: [
      'Development Sales is a full-cycle engagement that begins before the first unit is designed and ends when the last one is sold. I take ownership of the commercial strategy — product positioning, pricing, buyer qualification, and sales execution.',
      'The approach is selective, not volume-driven. I do not list properties on portals or cast a wide net. Instead, I define the target buyer profile, position the product to match, and build a qualified pipeline through relationships, referrals, and discreet outreach.',
      'This service is supported operationally by SkyRise, which handles transactions, legal coordination, and property management. Together, we cover the full spectrum from strategy to execution — ensuring that the developer\'s vision is translated into market results.',
      'I have managed development sales across Beirut, Limassol, and Athens — from boutique coastal projects to residential towers in downtown districts. Each project is different, but the discipline is the same: define the product, find the right buyers, and close with precision.',
    ],
  },
  {
    index: '05',
    slug: 'exclusivity-mandate',
    title: 'Exclusivity Mandate',
    description: 'I position a property for the right buyer, not the widest exposure.',
    longDescription: 'I position a property for the right buyer — not the widest audience. This mandate prioritizes discretion, qualified engagement, and a transaction structure that protects the seller while attracting serious capital.',
    icon: 'lock',
    features: ['Discreet positioning', 'Qualified buyer matching', 'Negotiation management', 'Transaction execution'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    details: [
      'The Exclusivity Mandate is for property owners who value discretion over exposure. Rather than listing widely, I position the asset for a carefully selected audience — qualified buyers who are prepared to transact at the right terms.',
      'This mandate gives me full authority to represent the property: from initial positioning and pricing strategy through buyer qualification, negotiation, and closing. The seller benefits from a controlled process that protects their privacy and maximizes leverage.',
      'Exclusivity mandates are particularly suited to high-value residential properties, legacy assets, and situations where the seller\'s identity or the property\'s provenance requires careful handling. In markets like Beirut, where relationships matter as much as price, this approach consistently outperforms open listings.',
      'I work through my established network of qualified buyers — private investors, family offices, and diaspora clients — ensuring that every introduction is serious, every viewing is purposeful, and every offer is structured to close.',
    ],
  },
]
