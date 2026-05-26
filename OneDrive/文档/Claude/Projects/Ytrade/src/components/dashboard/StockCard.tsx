import { useNavigate } from 'react-router-dom'
import { formatRelativeDate } from '@/lib/utils'
import { StatusBadge } from '@/components/research/StatusBadge'
import { ConvictionBadge } from '@/components/research/ConvictionBadge'
import type { StockResearch } from '@/types/research'

interface StockCardProps {
  research: StockResearch
}

export function StockCard({ research }: StockCardProps) {
  const navigate = useNavigate()
  const { id, basicInfo, status, convictionScore, updatedAt, finalSummary } = research

  return (
    <button
      type="button"
      onClick={() => navigate(`/research/${id}`)}
      className="group w-full text-left bg-white rounded-xl border border-slate-200 p-5
                 shadow-[0_1px_3px_0_rgb(0_0_0/0.06)]
                 hover:shadow-[0_4px_12px_-2px_rgb(0_0_0/0.10),0_2px_4px_-2px_rgb(0_0_0/0.06)]
                 hover:border-slate-300
                 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              {basicInfo.ticker || '—'}
            </span>
            <StatusBadge status={status} />
          </div>
          <p className="text-sm text-slate-500 truncate mt-0.5">
            {basicInfo.companyName || 'Unnamed company'}
          </p>
        </div>
        <ConvictionBadge score={convictionScore} size="sm" />
      </div>

      {/* Sector / industry row */}
      {(basicInfo.sector || basicInfo.industry) && (
        <div className="flex items-center gap-2 mb-3">
          {basicInfo.sector && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-500">
              {basicInfo.sector}
            </span>
          )}
          {basicInfo.industry && basicInfo.industry !== basicInfo.sector && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-500">
              {basicInfo.industry}
            </span>
          )}
          {basicInfo.marketCap && (
            <span className="text-xs text-slate-400">{basicInfo.marketCap}</span>
          )}
        </div>
      )}

      {/* Conclusion preview */}
      {finalSummary.conclusion && (
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-3">
          {finalSummary.conclusion}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <span className="text-xs text-slate-400">
          Updated {formatRelativeDate(updatedAt)}
        </span>
        <span className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
          Open →
        </span>
      </div>
    </button>
  )
}
