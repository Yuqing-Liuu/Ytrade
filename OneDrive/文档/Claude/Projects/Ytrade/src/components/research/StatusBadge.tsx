import { cn } from '@/lib/utils'
import type { StockStatus } from '@/types/research'

interface StatusBadgeProps {
  status: StockStatus
  size?: 'sm' | 'md'
  className?: string
}

const statusConfig: Record<StockStatus, { label: string; className: string }> = {
  Watching: {
    label: 'Watching',
    className: 'bg-slate-100 text-slate-600 border-slate-200',
  },
  Researching: {
    label: 'Researching',
    className: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  'Ready to Buy': {
    label: 'Ready to Buy',
    className: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  Hold: {
    label: 'Hold',
    className: 'bg-violet-50 text-violet-700 border-violet-200',
  },
  Avoid: {
    label: 'Avoid',
    className: 'bg-red-50 text-red-700 border-red-200',
  },
}

export function StatusBadge({ status, size = 'sm', className }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        size === 'sm' && 'px-2 py-0.5 text-xs',
        size === 'md' && 'px-3 py-1 text-sm',
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  )
}
