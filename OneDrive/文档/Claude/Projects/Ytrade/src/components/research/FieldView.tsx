import { cn } from '@/lib/utils'

interface FieldViewProps {
  label: string
  value?: string
  className?: string
  multiline?: boolean
}

/**
 * Renders a single field label + value pair in read mode.
 * Empty/blank values are shown as a subtle placeholder.
 */
export function FieldView({ label, value, className, multiline = true }: FieldViewProps) {
  const isEmpty = !value || value.trim() === ''

  return (
    <div className={cn('space-y-1', className)}>
      <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</dt>
      <dd
        className={cn(
          'text-sm text-slate-800 leading-relaxed',
          multiline && 'whitespace-pre-wrap',
          isEmpty && 'text-slate-300 italic',
        )}
      >
        {isEmpty ? 'Not filled in' : value}
      </dd>
    </div>
  )
}
