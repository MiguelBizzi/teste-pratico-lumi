import { type LucideIcon, FileSpreadsheet, ChartArea } from 'lucide-react'

export interface NavLink {
  title: string
  icon: LucideIcon
  route: string
}

export const NAV_LINKS: NavLink[] = [
  {
    title: 'Dashboard',
    icon: ChartArea as LucideIcon,
    route: '/',
  },
  {
    title: 'Faturas',
    icon: FileSpreadsheet as LucideIcon,
    route: '/faturas',
  },
]
