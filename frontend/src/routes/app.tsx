import NavItem from '@/components/nav-item'
import { NAV_LINKS } from '@/constants/nav-links'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="flex">
      <div className="sr-only min-h-screen sm:not-sr-only">
        <nav className="h-screen w-64 bg-green-700 p-4">
          <div>
            <h1 className="text-lg font-bold text-white">Dashboard Lumi</h1>
          </div>

          <ul className="mt-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.route} link={link} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="h-screen max-h-screen flex-1 overflow-y-scroll p-5">
        <Outlet />
      </div>
    </div>
  )
}
