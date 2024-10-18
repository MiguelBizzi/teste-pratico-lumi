import * as React from 'react'
import { cn } from '@/lib/utils'

interface Props {
  variant?: 'primary' | 'secondary' | 'white'
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export default function Button({
  children,
  className,
  variant = 'primary',
  onClick = () => {},
  disabled = false,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-green-700 text-white shadow hover:bg-green-800':
            variant === 'primary',
          'bg-gray-700 text-white shadow hover:bg-gray-800':
            variant === 'secondary',
          'bg-white text-gray-700 shadow hover:bg-gray-100':
            variant === 'white',
        },
        className,
      )}
    >
      {children}
    </button>
  )
}
