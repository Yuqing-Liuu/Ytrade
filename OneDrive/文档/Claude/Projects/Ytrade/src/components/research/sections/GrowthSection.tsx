import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormSection, FieldGroup } from '../FormSection'
import { Textarea } from '@/components/ui/Textarea'
import type { ResearchFormValues } from '@/types/research'

interface Props {
  register: UseFormRegister<ResearchFormValues>
  errors: FieldErrors<ResearchFormValues>
  watch: (name: string) => string
}

export function GrowthSection({ register, errors: _errors, watch }: Props) {
  return (
    <FormSection
      number={3}
      title="Growth Drivers"
      description="What will drive growth over the next 1-2 years and beyond?"
    >
      <FieldGroup
        label="Near-term growth drivers (1-2 years)"
        hint="What specific catalysts, products, or market dynamics will drive growth in the near term?"
      >
        <Textarea
          {...register('growthDrivers.nearTerm')}
          value={watch('growthDrivers.nearTerm')}
          placeholder="e.g. Blackwell GPU ramp: demand exceeds supply, ASPs rising. Sovereign AI capex is a new revenue stream..."
          rows={4}
        />
      </FieldGroup>

      <FieldGroup
        label="Long-term growth drivers"
        hint="What are the secular tailwinds and optionalities that could drive growth over 3-5+ years?"
      >
        <Textarea
          {...register('growthDrivers.longTerm')}
          value={watch('growthDrivers.longTerm')}
          placeholder="e.g. AI inference at scale is underpenetrated. Autonomous vehicles (DRIVE platform) is a long-duration option..."
          rows={4}
        />
      </FieldGroup>
    </FormSection>
  )
}
