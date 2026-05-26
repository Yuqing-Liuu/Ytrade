import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ResearchSectionProps {
  number: number
  title: string
  children: ReactNode
  className?: string
}

/**
 * Read-only version of FormSection.
 * Used in the Research Detail page.
 */
export function ResearchSection({ number, title, children, className }: ResearchSectionProps) {
  return (
    <section className={cn('bg-white rounded-xl border border-slate-200 overflow-hidden', className)}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/60 flex items-center gap-3">
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 text-slate-500 text-xs
                     font-bold flex items-center justify-center"
        >
          {number}
        </span>
        <h2 className="text-sm font-semibold text-slate-700">{title}</h2>
      </div>

      {/* Content */}
      <dl className="px-6 py-6 space-y-5">{children}</dl>
    </section>
  )
}
