import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormSection, FieldGroup } from '../FormSection'
import { Textarea } from '@/components/ui/Textarea'
import type { ResearchFormValues } from '@/types/research'

interface Props {
  register: UseFormRegister<ResearchFormValues>
  errors: FieldErrors<ResearchFormValues>
  watch: (name: string) => string
}

export function MarketExpectationsSection({ register, errors: _errors, watch }: Props) {
  return (
    <FormSection
      number={6}
      title="Market Expectations"
      description="What is already priced in? Where is the market wrong?"
    >
      <FieldGroup
        label="What is currently priced in"
        hint="What does the market consensus assume about growth, margins, and the business?"
      >
        <Textarea
          {...register('marketExpectations.pricedIn')}
          value={watch('marketExpectations.pricedIn')}
          placeholder="e.g. Continued strong Data Center growth through FY2026, Blackwell ramping to plan, ~$130-140B in FY2026 revenue..."
          rows={3}
        />
      </FieldGroup>

      <FieldGroup
        label="What could beat expectations"
        hint="What upside surprises are not in consensus estimates?"
      >
        <Textarea
          {...register('marketExpectations.beatScenario')}
          value={watch('marketExpectations.beatScenario')}
          placeholder="e.g. Sovereign AI demand accelerates. Inference builds require more accelerators than anticipated..."
          rows={3}
        />
      </FieldGroup>

      <FieldGroup
        label="What could disappoint"
        hint="What risks are underappreciated by the market?"
      >
        <Textarea
          {...register('marketExpectations.disappointScenario')}
          value={watch('marketExpectations.disappointScenario')}
          placeholder="e.g. Hyperscaler capex moderation. Export control expansion. AMD gaining meaningful share..."
          rows={3}
        />
      </FieldGroup>
    </FormSection>
  )
}
