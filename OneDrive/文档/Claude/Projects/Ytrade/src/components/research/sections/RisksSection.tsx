import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormSection, FieldGroup } from '../FormSection'
import { Textarea } from '@/components/ui/Textarea'
import type { ResearchFormValues } from '@/types/research'

interface Props {
  register: UseFormRegister<ResearchFormValues>
  errors: FieldErrors<ResearchFormValues>
  watch: (name: string) => string
}

export function RisksSection({ register, errors: _errors, watch }: Props) {
  return (
    <FormSection
      number={7}
      title="Risks"
      description="What could go wrong? Be honest — identifying risks is where most investors cut corners."
    >
      <FieldGroup
        label="Company-specific risks"
        hint="Risks unique to this business — customer concentration, key person dependency, etc."
      >
        <Textarea
          {...register('risks.companySpecific')}
          value={watch('risks.companySpecific')}
          placeholder="e.g. Customer concentration: Microsoft or Meta pulling back would materially impact estimates..."
          rows={3}
        />
      </FieldGroup>

      <FieldGroup
        label="Industry risks"
        hint="Risks from the competitive landscape, regulatory environment, or macro forces."
      >
        <Textarea
          {...register('risks.industry')}
          value={watch('risks.industry')}
          placeholder="e.g. Semiconductor cycle risk: AI capex is not immune to enterprise budget cuts..."
          rows={3}
        />
      </FieldGroup>

      <FieldGroup
        label="Valuation risk"
        hint="What happens to the multiple if growth disappoints or rates rise?"
      >
        <Textarea
          {...register('risks.valuation')}
          value={watch('risks.valuation')}
          placeholder="e.g. Multiple compression risk: if growth decelerates to 15-20%, the 35x multiple could compress to 25x..."
          rows={2}
        />
      </FieldGroup>

      <FieldGroup
        label="Execution risk"
        hint="What operational or strategic risks could the management team fail to navigate?"
      >
        <Textarea
          {...register('risks.execution')}
          value={watch('risks.execution')}
          placeholder="e.g. Blackwell NVL72 rack-scale product is complex; any thermal or power delivery issues could cause delivery slippage..."
          rows={2}
        />
      </FieldGroup>
    </FormSection>
  )
}
