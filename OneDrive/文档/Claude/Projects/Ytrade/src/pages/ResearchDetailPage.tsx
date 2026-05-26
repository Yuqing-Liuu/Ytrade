import { useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, Edit2, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ConfirmDialog } from '@/components/ui/ConfirmDialog'
import { StatusBadge } from '@/components/research/StatusBadge'
import { ConvictionBadge } from '@/components/research/ConvictionBadge'
import { ResearchSection } from '@/components/research/ResearchSection'
import { FieldView } from '@/components/research/FieldView'
import { useResearchById, useResearchActions } from '@/hooks/useResearch'
import { formatDate } from '@/lib/utils'

export function ResearchDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const research = useResearchById(id)
  const { deleteResearch } = useResearchActions()
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  if (!research) {
    return (
      <div className="text-center py-24">
        <p className="text-slate-400 text-sm mb-4">Research not found.</p>
        <Link to="/" className="text-blue-600 text-sm hover:underline">
          ← Back to dashboard
        </Link>
      </div>
    )
  }

  const handleDelete = () => {
    deleteResearch(research.id)
    navigate('/', { replace: true })
  }

  const {
    basicInfo,
    businessUnderstanding,
    growthDrivers,
    financialQuality,
    valuation,
    marketExpectations,
    risks,
    tradingPlan,
    finalSummary,
    status,
    convictionScore,
    createdAt,
    updatedAt,
  } = research

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        {/* Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors mb-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Dashboard
        </Link>

        <div className="flex items-start justify-between gap-4">
          <div>
            {/* Ticker + company */}
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                {basicInfo.ticker || '—'}
              </h1>
              <StatusBadge status={status} size="md" />
              <ConvictionBadge score={convictionScore} size="md" />
            </div>

            <p className="text-base text-slate-500 mt-1">
              {basicInfo.companyName}
              {basicInfo.sector && (
                <span className="text-slate-300 mx-2">·</span>
              )}
              {basicInfo.sector && (
                <span className="text-slate-400 text-sm">{basicInfo.sector}</span>
              )}
              {basicInfo.industry && basicInfo.industry !== basicInfo.sector && (
                <>
                  <span className="text-slate-300 mx-2">·</span>
                  <span className="text-slate-400 text-sm">{basicInfo.industry}</span>
                </>
              )}
              {basicInfo.marketCap && (
                <>
                  <span className="text-slate-300 mx-2">·</span>
                  <span className="text-slate-400 text-sm">{basicInfo.marketCap}</span>
                </>
              )}
            </p>

            {/* Timestamps */}
            <p className="text-xs text-slate-400 mt-2">
              Created {formatDate(createdAt)} · Last updated {formatDate(updatedAt)}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDeleteDialog(true)}
              className="text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 className="h-4 w-4" />
              <span className="hidden sm:inline">Delete</span>
            </Button>
            <Link to={`/research/${research.id}/edit`}>
              <Button variant="secondary" size="sm">
                <Edit2 className="h-3.5 w-3.5" />
                Edit
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-5">

        {/* 1 — Basic Info */}
        <ResearchSection number={1} title="Basic Company Info">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            <FieldView label="Ticker" value={basicInfo.ticker} multiline={false} />
            <FieldView label="Company" value={basicInfo.companyName} multiline={false} />
            <FieldView label="Sector" value={basicInfo.sector} multiline={false} />
            <FieldView label="Industry" value={basicInfo.industry} multiline={false} />
          </div>
          <FieldView label="Market Cap" value={basicInfo.marketCap} multiline={false} />
        </ResearchSection>

        {/* 2 — Business Understanding */}
        <ResearchSection number={2} title="Business Understanding">
          <FieldView label="How the company makes money" value={businessUnderstanding.howItMakesMoney} />
          <FieldView label="Key products / services" value={businessUnderstanding.keyProducts} />
          <FieldView label="Main customers" value={businessUnderstanding.mainCustomers} />
          <FieldView label="Competitive advantage / moat" value={businessUnderstanding.moat} />
        </ResearchSection>

        {/* 3 — Growth Drivers */}
        <ResearchSection number={3} title="Growth Drivers">
          <FieldView label="Near-term growth drivers (1-2 years)" value={growthDrivers.nearTerm} />
          <FieldView label="Long-term growth drivers" value={growthDrivers.longTerm} />
        </ResearchSection>

        {/* 4 — Financial Quality */}
        <ResearchSection number={4} title="Financial Quality">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldView label="Revenue trend" value={financialQuality.revenueTrend} />
            <FieldView label="Margin trend" value={financialQuality.marginTrend} />
            <FieldView label="Free cash flow" value={financialQuality.freeCashFlow} />
            <FieldView label="Debt" value={financialQuality.debt} />
          </div>
          <FieldView label="Share dilution / buybacks" value={financialQuality.dilutionBuybacks} />
        </ResearchSection>

        {/* 5 — Valuation */}
        <ResearchSection number={5} title="Valuation">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldView label="Current multiple" value={valuation.currentMultiple} />
            <FieldView label="Peer comparison" value={valuation.peerComparison} />
            <FieldView label="Historical range" value={valuation.historicalRange} />
          </div>
          <FieldView label="Cheap / fair / expensive — and why" value={valuation.cheapFairExpensive} />
        </ResearchSection>

        {/* 6 — Market Expectations */}
        <ResearchSection number={6} title="Market Expectations">
          <FieldView label="What is currently priced in" value={marketExpectations.pricedIn} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldView label="What could beat expectations" value={marketExpectations.beatScenario} />
            <FieldView label="What could disappoint" value={marketExpectations.disappointScenario} />
          </div>
        </ResearchSection>

        {/* 7 — Risks */}
        <ResearchSection number={7} title="Risks">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldView label="Company-specific risks" value={risks.companySpecific} />
            <FieldView label="Industry risks" value={risks.industry} />
            <FieldView label="Valuation risk" value={risks.valuation} />
            <FieldView label="Execution risk" value={risks.execution} />
          </div>
        </ResearchSection>

        {/* 8 — Trading Plan */}
        <ResearchSection number={8} title="Trading / Investing Plan">
          <FieldView label="Why buy now or why wait" value={tradingPlan.whyNowOrWait} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldView label="Target entry zone" value={tradingPlan.targetEntryZone} multiline={false} />
            <FieldView label="Time horizon" value={tradingPlan.timeHorizon} multiline={false} />
          </div>
          <FieldView label="Invalidation / thesis break condition" value={tradingPlan.invalidationCondition} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldView label="Starter position size" value={tradingPlan.starterPositionSize} multiline={false} />
            <FieldView label="Add / trim rules" value={tradingPlan.addTrimRules} />
          </div>
        </ResearchSection>

        {/* 9 — Final Summary */}
        <ResearchSection number={9} title="Final Summary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Bull */}
            <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-4">
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-2">Bull case</p>
              <p className={`text-sm leading-relaxed ${finalSummary.bullCase ? 'text-slate-800' : 'text-slate-300 italic'}`}>
                {finalSummary.bullCase || 'Not filled in'}
              </p>
            </div>
            {/* Base */}
            <div className="rounded-lg bg-blue-50 border border-blue-100 p-4">
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">Base case</p>
              <p className={`text-sm leading-relaxed ${finalSummary.baseCase ? 'text-slate-800' : 'text-slate-300 italic'}`}>
                {finalSummary.baseCase || 'Not filled in'}
              </p>
            </div>
            {/* Bear */}
            <div className="rounded-lg bg-red-50 border border-red-100 p-4">
              <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Bear case</p>
              <p className={`text-sm leading-relaxed ${finalSummary.bearCase ? 'text-slate-800' : 'text-slate-300 italic'}`}>
                {finalSummary.bearCase || 'Not filled in'}
              </p>
            </div>
          </div>

          <div className="mt-2 rounded-lg bg-slate-50 border border-slate-200 p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Conclusion
            </p>
            <p className={`text-sm leading-relaxed ${finalSummary.conclusion ? 'text-slate-800' : 'text-slate-300 italic'}`}>
              {finalSummary.conclusion || 'Not filled in'}
            </p>
          </div>
        </ResearchSection>

      </div>

      {/* Delete confirmation dialog */}
      <ConfirmDialog
        open={showDeleteDialog}
        title="Delete this research?"
        message={`This will permanently delete your research on ${basicInfo.ticker || basicInfo.companyName}. This action cannot be undone.`}
        confirmLabel="Delete"
        cancelLabel="Keep it"
        dangerous
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteDialog(false)}
      />
    </div>
  )
}
