import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormSection, FieldGroup } from '../FormSection'
import { Textarea } from '@/components/ui/Textarea'
import type { ResearchFormValues } from '@/types/research'

interface Props {
  register: UseFormRegister<ResearchFormValues>
  errors: FieldErrors<ResearchFormValues>
  watch: (name: string) => string
}

export function FinancialSection({ register, errors: _errors, watch }: Props) {
  return (
    <FormSection
      number={4}
      title="Financial Quality"
      description="Assess the quality and trajectory of the financials."
    >
      <FieldGroup
        label="Revenue trend"
        hint="Is revenue growing, stable, or declining? What is driving the trajectory?"
      >
        <Textarea
          {...register('financialQuality.revenueTrend')}
          value={watch('financialQuality.revenueTrend')}
          placeholder="e.g. FY2024 revenue: $60.9B (+122% YoY). Quarterly growth decelerating but remains high..."
          rows={3}
        />
      </FieldGroup>

      <FieldGroup
        label="Margin trend"
        hint="Gross margin, operating margin — expanding, stable, or compressing?"
      >
        <Textarea
          {...register('financialQuality.marginTrend')}
          value={watch('financialQuality.marginTrend')}
          placeholder="e.g. Gross margin ~75-76% (near record). Operating margin ~55%. Both expanded on AI pricing power..."
          rows={3}
        />
      </FieldGroup>

      <FieldGroup
        label="Free cash flow"
        hint="Is FCF positive and growing? What is the FCF conversion rate?"
      >
        <Textarea
          {...register('financialQuality.freeCashFlow')}
          value={watch('financialQuality.freeCashFlow')}
          placeholder="e.g. FCF ~$33B in FY2024. FCF conversion ~85%+ of net income..."
          rows={2}
        />
      </FieldGroup>

      <FieldGroup
        label="Debt"
        hint="What is the leverage profile? Can the business service its debt comfortably?"
      >
        <Textarea
          {...register('financialQuality.debt')}
          value={watch('financialQuality.debt')}
          placeholder="e.g. Long-term debt ~$8.5B. Leverage minimal relative to FCF..."
          rows={2}
        />
      </FieldGroup>

      <FieldGroup
        label="Share dilution / buybacks"
        hint="Is the share count growing (dilutive) or shrinking (accretive)?"
      >
        <Textarea
          {...register('financialQuality.dilutionBuybacks')}
          value={watch('financialQuality.dilutionBuybacks')}
          placeholder="e.g. Returned ~$15B via buybacks in FY2024. Share count modestly declining..."
          rows={2}
        />
      </FieldGroup>
    </FormSection>
  )
}
