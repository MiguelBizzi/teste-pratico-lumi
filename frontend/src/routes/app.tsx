import NavItem from '@/components/nav-item'
import { NAV_LINKS } from '@/constants/nav-links'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  const [isMobileCollapsed, setIsMobileCollapsed] = useState(false) // State to track open/closed

  function toggleCollapse() {
    setIsMobileCollapsed((prev) => !prev)
  }

  return (
    <>
      <div className="group not-sr-only max-h-screen sm:sr-only">
        <div className="flex h-[70px] items-center justify-between bg-green-700 px-4 py-4 shadow-sm">
          <h1 className="text-lg font-bold text-white">Dashboard Lumi</h1>

          <button onClick={toggleCollapse} className="text-white">
            {isMobileCollapsed ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileCollapsed && (
          <div className="fixed bottom-0 left-0 right-0 top-[69px] z-10 flex max-h-screen flex-1 flex-col overflow-y-scroll bg-green-700 p-4">
            <ul className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <NavItem key={link.route} link={link} />
              ))}
            </ul>
          </div>
        )}

        <div className={cn(isMobileCollapsed ? 'hidden' : 'block')}>
          <div className={cn('p-5', isMobileCollapsed && 'overflow-y-scroll')}>
            <Outlet />
          </div>
        </div>
      </div>

      <div className="sr-only flex sm:not-sr-only">
        <div className="min-h-screen">
          <nav className="h-screen w-64 bg-green-700 p-4">
            <div>
              <h1 className="text-lg font-bold text-white">Dashboard Lumi</h1>
            </div>

            <ul className="mt-4 flex flex-col gap-2">
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
    </>
  )
}
