import { cn } from '@/lib/utils'

interface ConvictionBadgeProps {
  score: number  // 0 = unset, 1-10
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

function scoreColor(score: number): string {
  if (score === 0) return 'text-slate-400 bg-slate-50 border-slate-200'
  if (score <= 3) return 'text-red-600 bg-red-50 border-red-200'
  if (score <= 5) return 'text-amber-600 bg-amber-50 border-amber-200'
  if (score <= 7) return 'text-blue-600 bg-blue-50 border-blue-200'
  return 'text-emerald-600 bg-emerald-50 border-emerald-200'
}

export function ConvictionBadge({ score, size = 'sm', className }: ConvictionBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border font-semibold tabular-nums',
        size === 'sm' && 'px-2 py-0.5 text-xs',
        size === 'md' && 'px-3 py-1 text-sm',
        size === 'lg' && 'px-4 py-1.5 text-base',
        scoreColor(score),
        className,
      )}
      title={`Conviction score: ${score === 0 ? 'Not set' : `${score}/10`}`}
    >
      {score === 0 ? '—' : `${score}/10`}
    </span>
  )
}
