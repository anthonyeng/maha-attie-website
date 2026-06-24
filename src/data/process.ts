export interface ProcessStep {
  index: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Listen',
    description: 'Understand the objective, the constraints, and the timeline.',
  },
  {
    index: '02',
    title: 'Frame',
    description: 'Define the decision before money moves.',
  },
  {
    index: '03',
    title: 'Source',
    description: 'Identify the right opportunities, quietly.',
  },
  {
    index: '04',
    title: 'Structure',
    description: 'Align investment logic, legal, and timing.',
  },
  {
    index: '05',
    title: 'Execute',
    description: 'Transact with discipline.',
  },
  {
    index: '06',
    title: 'Steward',
    description: 'Manage the asset and the next decision.',
  },
]
