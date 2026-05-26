import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FormSectionProps {
  number: number
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function FormSection({ number, title, description, children, className }: FormSectionProps) {
  return (
    <section className={cn('bg-white rounded-xl border border-slate-200 overflow-hidden', className)}>
      {/* Section header */}
      <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/60">
        <div className="flex items-start gap-3">
          <span
            className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs
                       font-bold flex items-center justify-center mt-0.5"
          >
            {number}
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-800">{title}</h2>
            {description && (
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Fields */}
      <div className="px-6 py-6 space-y-5">{children}</div>
    </section>
  )
}

// ─── Individual field wrapper ─────────────────────────────────────────────────

interface FieldGroupProps {
  label: string
  hint?: string
  required?: boolean
  error?: string
  children: ReactNode
}

export function FieldGroup({ label, hint, required, error, children }: FieldGroupProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium text-slate-700">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {hint && <p className="text-xs text-slate-400 leading-snug">{hint}</p>}
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
