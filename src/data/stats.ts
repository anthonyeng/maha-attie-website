export interface Stat {
  value: number
  suffix: string
  label: string
}

export const siteStats: Stat[] = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 200, suffix: '+', label: 'Properties Managed' },
  { value: 3, suffix: '', label: 'Core Markets' },
  { value: 50, suffix: '+', label: 'Active Clients' },
]
