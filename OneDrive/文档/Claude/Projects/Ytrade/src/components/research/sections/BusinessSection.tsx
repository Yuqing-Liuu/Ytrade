import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormSection, FieldGroup } from '../FormSection'
import { Textarea } from '@/components/ui/Textarea'
import type { ResearchFormValues } from '@/types/research'

interface Props {
  register: UseFormRegister<ResearchFormValues>
  errors: FieldErrors<ResearchFormValues>
  watch: (name: string) => string
}

export function BusinessSection({ register, errors, watch }: Props) {
  return (
    <FormSection
      number={2}
      title="Business Understanding"
      description="How does this company generate revenue? What makes it defensible?"
    >
      <FieldGroup
        label="How the company makes money"
        hint="Describe the revenue model and key segments. Be specific about what drives each segment."
      >
        <Textarea
          {...register('businessUnderstanding.howItMakesMoney')}
          value={watch('businessUnderstanding.howItMakesMoney')}
          placeholder="e.g. NVIDIA sells GPUs and software platforms. Data Center (~88% of revenue) is driven by AI training workloads..."
          rows={4}
        />
      </FieldGroup>

      <FieldGroup
        label="Key products / services"
        hint="List the main products and what makes each one important."
      >
        <Textarea
          {...register('businessUnderstanding.keyProducts')}
          value={watch('businessUnderstanding.keyProducts')}
          placeholder="e.g. H100/H200 AI accelerators, CUDA software platform, RTX 40-series GPUs..."
          rows={3}
        />
      </FieldGroup>

      <FieldGroup
        label="Main customers"
        hint="Who buys from them? What is the customer concentration risk?"
      >
        <Textarea
          {...register('businessUnderstanding.mainCustomers')}
          value={watch('businessUnderstanding.mainCustomers')}
          placeholder="e.g. Microsoft, Meta, Google, Amazon (Data Center). Top 4 customers ~40-50% of DC revenue..."
          rows={3}
        />
      </FieldGroup>

      <FieldGroup
        label="Competitive advantage / moat"
        hint="What would make it hard for a competitor to take market share? How durable is this?"
      >
        <Textarea
          {...register('businessUnderstanding.moat')}
          value={watch('businessUnderstanding.moat')}
          placeholder="e.g. CUDA software ecosystem — 10+ years of developer lock-in, library ecosystem competitors cannot replicate..."
          rows={3}
        />
      </FieldGroup>
    </FormSection>
  )
}
