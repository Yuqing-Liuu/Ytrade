import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormSection, FieldGroup } from '../FormSection'
import { Textarea } from '@/components/ui/Textarea'
import { Input } from '@/components/ui/Input'
import type { ResearchFormValues } from '@/types/research'

interface Props {
  register: UseFormRegister<ResearchFormValues>
  errors: FieldErrors<ResearchFormValues>
  watch: (name: string) => string
}

export function TradingPlanSection({ register, errors: _errors, watch }: Props) {
  return (
    <FormSection
      number={8}
      title="Trading / Investing Plan"
      description="Entry levels, sizing, invalidation, and exit rules. Discipline is everything here."
    >
      <FieldGroup
        label="Why buy now or why wait"
        hint="What is the timing rationale? Has a catalyst de-risked or created an entry?"
      >
        <Textarea
          {...register('tradingPlan.whyNowOrWait')}
          value={watch('tradingPlan.whyNowOrWait')}
          placeholder="e.g. Stock pulled back ~18% from February highs on export control fears. Demand signals remain strong..."
          rows={3}
        />
      </FieldGroup>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup
          label="Target entry zone"
          hint="Specific price levels — starter and add levels."
        >
          <Input
            {...register('tradingPlan.targetEntryZone')}
            placeholder="e.g. Starter: $108-115 / Add: $98-105"
          />
        </FieldGroup>

        <FieldGroup
          label="Time horizon"
          hint="How long are you planning to hold this position?"
        >
          <Input
            {...register('tradingPlan.timeHorizon')}
            placeholder="e.g. 18-36 months"
          />
        </FieldGroup>
      </div>

      <FieldGroup
        label="Invalidation / thesis break condition"
        hint="What specific facts would prove your thesis wrong? Define this before you buy."
      >
        <Textarea
          {...register('tradingPlan.invalidationCondition')}
          value={watch('tradingPlan.invalidationCondition')}
          placeholder="e.g. Two consecutive quarters of Data Center revenue decline. Gross margin below 70%. AMD >15% share..."
          rows={3}
        />
      </FieldGroup>

      <FieldGroup
        label="Starter position size"
        hint="What percentage of your portfolio for the initial entry?"
      >
        <Input
          {...register('tradingPlan.starterPositionSize')}
          placeholder="e.g. 2% of portfolio"
          className="max-w-sm"
        />
      </FieldGroup>

      <FieldGroup
        label="Add / trim rules"
        hint="Under what conditions do you add to or reduce the position?"
      >
        <Textarea
          {...register('tradingPlan.addTrimRules')}
          value={watch('tradingPlan.addTrimRules')}
          placeholder="e.g. Add 1% if stock drops to $100 on market weakness (not fundamental deterioration). Trim 1% if P/E > 50x..."
          rows={3}
        />
      </FieldGroup>
    </FormSection>
  )
}
