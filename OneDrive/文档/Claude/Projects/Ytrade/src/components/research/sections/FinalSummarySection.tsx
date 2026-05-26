import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormSection, FieldGroup } from '../FormSection'
import { Textarea } from '@/components/ui/Textarea'
import type { ResearchFormValues } from '@/types/research'

interface Props {
  register: UseFormRegister<ResearchFormValues>
  errors: FieldErrors<ResearchFormValues>
  watch: (name: string) => string
}

export function FinalSummarySection({ register, errors: _errors, watch }: Props) {
  return (
    <FormSection
      number={9}
      title="Final Summary"
      description="Bull, base, and bear cases. Commit to a verdict."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <FieldGroup
          label="Bull case"
          hint="Best realistic outcome"
        >
          <Textarea
            {...register('finalSummary.bullCase')}
            value={watch('finalSummary.bullCase')}
            placeholder="e.g. AI demand exceeds expectations. Margins hold. Stock re-rates to 45x. Target: $175."
            rows={5}
          />
        </FieldGroup>

        <FieldGroup
          label="Base case"
          hint="Most likely outcome"
        >
          <Textarea
            {...register('finalSummary.baseCase')}
            value={watch('finalSummary.baseCase')}
            placeholder="e.g. Grows FY2026 revenue to $135-145B. At 35x, fair value is $147-158."
            rows={5}
          />
        </FieldGroup>

        <FieldGroup
          label="Bear case"
          hint="Worst realistic outcome"
        >
          <Textarea
            {...register('finalSummary.bearCase')}
            value={watch('finalSummary.bearCase')}
            placeholder="e.g. Hyperscaler digestion, export controls expand. Multiple compresses to 22x. Downside: $72."
            rows={5}
          />
        </FieldGroup>
      </div>

      <FieldGroup
        label="One-paragraph conclusion"
        hint="Your overall verdict — write it like you are explaining it to a friend who will hold you accountable."
      >
        <Textarea
          {...register('finalSummary.conclusion')}
          value={watch('finalSummary.conclusion')}
          placeholder="e.g. NVIDIA is the best-positioned company in the most important technology transition of the decade..."
          rows={5}
        />
      </FieldGroup>
    </FormSection>
  )
}
