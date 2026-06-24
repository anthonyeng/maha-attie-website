export interface Service {
  index: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    index: '01',
    title: 'Strategic Consultation',
    description: 'One focused session on a single question, with a written summary to follow.',
  },
  {
    index: '02',
    title: 'Framing Mandate',
    description: 'I frame the decision before capital, architects, or feasibility studies begin.',
  },
  {
    index: '03',
    title: 'Advisory Retainer',
    description: 'Ongoing access to my judgment, across a portfolio or a market cycle.',
  },
  {
    index: '04',
    title: 'Development Sales',
    description: 'I take a development from the ground up — product, positioning, and sale.',
  },
  {
    index: '05',
    title: 'Exclusivity Mandate',
    description: 'I position a property for the right buyer, not the widest exposure.',
  },
]
