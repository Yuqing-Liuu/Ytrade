import { useState, useMemo } from 'react'
import { PageHeader } from '@/components/layout/PageHeader'
import { StockCard } from '@/components/dashboard/StockCard'
import { EmptyState } from '@/components/dashboard/EmptyState'
import { useResearch } from '@/hooks/useResearch'
import type { StockStatus } from '@/types/research'
import { STOCK_STATUSES } from '@/types/research'
import { cn } from '@/lib/utils'

const ALL = 'All' as const
type FilterValue = typeof ALL | StockStatus

export function DashboardPage() {
  const { items } = useResearch()
  const [filter, setFilter] = useState<FilterValue>(ALL)

  const filtered = useMemo(() => {
    if (filter === ALL) return items
    return items.filter((r) => r.status === filter)
  }, [items, filter])

  // Count per status for the filter chips
  const counts = useMemo(() => {
    const map: Partial<Record<StockStatus, number>> = {}
    for (const r of items) {
      map[r.status] = (map[r.status] ?? 0) + 1
    }
    return map
  }, [items])

  return (
    <div>
      <PageHeader
        title="Research Dashboard"
        subtitle={
          items.length > 0
            ? `${items.length} ${items.length === 1 ? 'company' : 'companies'} in your research library`
            : undefined
        }
      />

      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-6">
            <FilterChip
              label="All"
              count={items.length}
              active={filter === ALL}
              onClick={() => setFilter(ALL)}
            />
            {STOCK_STATUSES.map((status) =>
              counts[status] ? (
                <FilterChip
                  key={status}
                  label={status}
                  count={counts[status] ?? 0}
                  active={filter === status}
                  onClick={() => setFilter(status)}
                />
              ) : null,
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="text-sm text-slate-500 py-12 text-center">
              No research with status "{filter}".
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((research) => (
                <StockCard key={research.id} research={research} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

// ─── Filter chip ──────────────────────────────────────────────────────────────

interface FilterChipProps {
  label: string
  count: number
  active: boolean
  onClick: () => void
}

function FilterChip({ label, count, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium',
        'border transition-colors duration-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        active
          ? 'bg-blue-600 border-blue-600 text-white'
          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50',
      )}
    >
      {label}
      <span
        className={cn(
          'inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-semibold',
          active ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500',
        )}
      >
        {count}
      </span>
    </button>
  )
}
