import { cn } from '@/lib/utils'

interface ConvictionSliderProps {
  value: number       // 0-10
  onChange: (value: number) => void
  className?: string
}

function scoreLabel(score: number): string {
  if (score === 0) return 'Not set'
  if (score <= 2) return 'Very low'
  if (score <= 4) return 'Low'
  if (score <= 6) return 'Moderate'
  if (score <= 8) return 'High'
  return 'Very high'
}

function scoreColor(score: number): string {
  if (score === 0) return 'text-slate-400'
  if (score <= 3) return 'text-red-500'
  if (score <= 5) return 'text-amber-500'
  if (score <= 7) return 'text-blue-600'
  return 'text-emerald-600'
}

function trackFill(score: number): string {
  if (score === 0) return 'bg-slate-200'
  if (score <= 3) return 'bg-red-400'
  if (score <= 5) return 'bg-amber-400'
  if (score <= 7) return 'bg-blue-500'
  return 'bg-emerald-500'
}

export function ConvictionSlider({ value, onChange, className }: ConvictionSliderProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {/* Score display */}
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className={cn('text-3xl font-bold tabular-nums', scoreColor(value))}>
            {value === 0 ? '—' : value}
          </span>
          <span className="text-sm text-slate-400">/ 10</span>
          <span className={cn('text-sm font-medium', scoreColor(value))}>
            {scoreLabel(value)}
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer
                     bg-slate-200 accent-blue-600
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:w-5
                     [&::-webkit-slider-thumb]:h-5
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-white
                     [&::-webkit-slider-thumb]:border-2
                     [&::-webkit-slider-thumb]:border-blue-600
                     [&::-webkit-slider-thumb]:shadow-sm
                     [&::-webkit-slider-thumb]:cursor-pointer"
        />
        {/* Tick marks */}
        <div className="flex justify-between mt-1.5 px-0.5">
          {Array.from({ length: 11 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onChange(i)}
              className={cn(
                'text-[10px] tabular-nums leading-none transition-colors',
                i === value
                  ? cn('font-bold', scoreColor(value))
                  : 'text-slate-300 hover:text-slate-500',
              )}
            >
              {i === 0 ? '—' : i}
            </button>
          ))}
        </div>
      </div>

      {/* Color band legend */}
      <div className="flex items-center gap-3 text-[10px] text-slate-400">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-400" /> Low (1-3)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-amber-400" /> Moderate (4-5)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-500" /> High (6-7)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500" /> Very high (8-10)
        </span>
      </div>
    </div>
  )
}
