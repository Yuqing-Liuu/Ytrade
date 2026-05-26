import { forwardRef, useEffect, useRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  autoResize?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, autoResize = true, className, onChange, ...props }, ref) => {
    const internalRef = useRef<HTMLTextAreaElement>(null)
    const resolvedRef = (ref as React.RefObject<HTMLTextAreaElement>) ?? internalRef

    // Auto-resize on content change
    const resize = () => {
      const el = resolvedRef.current
      if (!el || !autoResize) return
      el.style.height = 'auto'
      el.style.height = `${el.scrollHeight}px`
    }

    useEffect(() => {
      resize()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.value])

    return (
      <textarea
        ref={resolvedRef}
        rows={3}
        onChange={(e) => {
          resize()
          onChange?.(e)
        }}
        className={cn(
          'w-full px-3 py-2 text-sm text-slate-900 bg-white',
          'border rounded-lg resize-none',
          'placeholder:text-slate-400 leading-relaxed',
          'transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:border-blue-500',
          'disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed',
          error
            ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
            : 'border-slate-200 hover:border-slate-300',
          className,
        )}
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
