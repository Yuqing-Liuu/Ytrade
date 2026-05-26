import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ResearchFormValues } from '@/types/research'
import { EMPTY_RESEARCH } from '@/data/researchTemplate'
import { BasicInfoSection } from './sections/BasicInfoSection'
import { BusinessSection } from './sections/BusinessSection'
import { GrowthSection } from './sections/GrowthSection'
import { FinancialSection } from './sections/FinancialSection'
import { ValuationSection } from './sections/ValuationSection'
import { MarketExpectationsSection } from './sections/MarketExpectationsSection'
import { RisksSection } from './sections/RisksSection'
import { TradingPlanSection } from './sections/TradingPlanSection'
import { FinalSummarySection } from './sections/FinalSummarySection'
import { Button } from '@/components/ui/Button'

// ─── Zod schema ───────────────────────────────────────────────────────────────

const researchSchema = z.object({
  status: z.enum(['Watching', 'Researching', 'Ready to Buy', 'Hold', 'Avoid']),
  convictionScore: z.number().min(0).max(10),

  basicInfo: z.object({
    ticker: z.string().min(1, 'Ticker is required'),
    companyName: z.string().min(1, 'Company name is required'),
    sector: z.string(),
    industry: z.string(),
    marketCap: z.string(),
  }),

  businessUnderstanding: z.object({
    howItMakesMoney: z.string(),
    keyProducts: z.string(),
    mainCustomers: z.string(),
    moat: z.string(),
  }),

  growthDrivers: z.object({
    nearTerm: z.string(),
    longTerm: z.string(),
  }),

  financialQuality: z.object({
    revenueTrend: z.string(),
    marginTrend: z.string(),
    freeCashFlow: z.string(),
    debt: z.string(),
    dilutionBuybacks: z.string(),
  }),

  valuation: z.object({
    currentMultiple: z.string(),
    peerComparison: z.string(),
    historicalRange: z.string(),
    cheapFairExpensive: z.string(),
  }),

  marketExpectations: z.object({
    pricedIn: z.string(),
    beatScenario: z.string(),
    disappointScenario: z.string(),
  }),

  risks: z.object({
    companySpecific: z.string(),
    industry: z.string(),
    valuation: z.string(),
    execution: z.string(),
  }),

  tradingPlan: z.object({
    whyNowOrWait: z.string(),
    targetEntryZone: z.string(),
    invalidationCondition: z.string(),
    timeHorizon: z.string(),
    starterPositionSize: z.string(),
    addTrimRules: z.string(),
  }),

  finalSummary: z.object({
    bullCase: z.string(),
    bearCase: z.string(),
    baseCase: z.string(),
    conclusion: z.string(),
  }),
})

// ─── Props ────────────────────────────────────────────────────────────────────

interface ResearchFormProps {
  defaultValues?: Partial<ResearchFormValues>
  onSubmit: (values: ResearchFormValues) => void
  onCancel?: () => void
  submitLabel?: string
  isSubmitting?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ResearchForm({
  defaultValues,
  onSubmit,
  onCancel,
  submitLabel = 'Save Research',
  isSubmitting = false,
}: ResearchFormProps) {
  const mergedDefaults: ResearchFormValues = {
    ...EMPTY_RESEARCH,
    ...defaultValues,
    basicInfo: { ...EMPTY_RESEARCH.basicInfo, ...defaultValues?.basicInfo },
    businessUnderstanding: { ...EMPTY_RESEARCH.businessUnderstanding, ...defaultValues?.businessUnderstanding },
    growthDrivers: { ...EMPTY_RESEARCH.growthDrivers, ...defaultValues?.growthDrivers },
    financialQuality: { ...EMPTY_RESEARCH.financialQuality, ...defaultValues?.financialQuality },
    valuation: { ...EMPTY_RESEARCH.valuation, ...defaultValues?.valuation },
    marketExpectations: { ...EMPTY_RESEARCH.marketExpectations, ...defaultValues?.marketExpectations },
    risks: { ...EMPTY_RESEARCH.risks, ...defaultValues?.risks },
    tradingPlan: { ...EMPTY_RESEARCH.tradingPlan, ...defaultValues?.tradingPlan },
    finalSummary: { ...EMPTY_RESEARCH.finalSummary, ...defaultValues?.finalSummary },
  }

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<ResearchFormValues>({
    resolver: zodResolver(researchSchema),
    defaultValues: mergedDefaults,
  })

  // watch helper for textarea auto-resize (needs current value)
  const watchField = (name: string) => watch(name as keyof ResearchFormValues) as string

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="space-y-6">
        {/* Section 1 — Basic info + status + conviction */}
        <Controller
          control={control}
          name="convictionScore"
          render={({ field }) => (
            <BasicInfoSection
              register={register}
              errors={errors}
              convictionScore={field.value}
              onConvictionChange={field.onChange}
            />
          )}
        />

        {/* Section 2 */}
        <BusinessSection register={register} errors={errors} watch={watchField} />

        {/* Section 3 */}
        <GrowthSection register={register} errors={errors} watch={watchField} />

        {/* Section 4 */}
        <FinancialSection register={register} errors={errors} watch={watchField} />

        {/* Section 5 */}
        <ValuationSection register={register} errors={errors} watch={watchField} />

        {/* Section 6 */}
        <MarketExpectationsSection register={register} errors={errors} watch={watchField} />

        {/* Section 7 */}
        <RisksSection register={register} errors={errors} watch={watchField} />

        {/* Section 8 */}
        <TradingPlanSection register={register} errors={errors} watch={watchField} />

        {/* Section 9 */}
        <FinalSummarySection register={register} errors={errors} watch={watchField} />
      </div>

      {/* Sticky action bar */}
      <div className="sticky bottom-0 mt-8 -mx-6 px-6 py-4 bg-white/95 backdrop-blur border-t border-slate-200">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <p className="text-xs text-slate-400">
            All fields are optional except Ticker and Company Name.
          </p>
          <div className="flex items-center gap-3">
            {onCancel && (
              <Button type="button" variant="secondary" onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button type="submit" loading={isSubmitting}>
              {submitLabel}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
