import type { NavLink } from '@/constants/nav-links'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from './button'
import { cn } from '@/lib/utils'

interface Props {
  link: NavLink
}

export default function NavItem({ link }: Props) {
  const [isActive, setIsActive] = useState<boolean>()

  const location = useLocation()

  useEffect(() => {
    setIsActive(location.pathname === link.route)
  }, [location.pathname, link.route])

  return (
    <a key={link.route} href={link.route}>
      <Button
        className={cn('w-full justify-start shadow-none', {
          'bg-green-600 text-white hover:bg-green-600': isActive,
          'bg-green-700 text-white hover:bg-green-600/60': !isActive,
        })}
      >
        <link.icon className="mr-2 size-4" /> {link.title}
      </Button>
    </a>
  )
}
