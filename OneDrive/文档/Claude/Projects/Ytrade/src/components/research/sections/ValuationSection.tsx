import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormSection, FieldGroup } from '../FormSection'
import { Textarea } from '@/components/ui/Textarea'
import type { ResearchFormValues } from '@/types/research'

interface Props {
  register: UseFormRegister<ResearchFormValues>
  errors: FieldErrors<ResearchFormValues>
  watch: (name: string) => string
}

export function ValuationSection({ register, errors: _errors, watch }: Props) {
  return (
    <FormSection
      number={5}
      title="Valuation"
      description="Is the stock cheap, fair, or expensive relative to its fundamentals?"
    >
      <FieldGroup
        label="Current valuation multiple"
        hint="P/E, EV/EBITDA, P/FCF, EV/Sales — what are the key multiples?"
      >
        <Textarea
          {...register('valuation.currentMultiple')}
          value={watch('valuation.currentMultiple')}
          placeholder="e.g. NTM P/E ~35x. EV/EBITDA ~28x. Price/FCF ~32x..."
          rows={2}
        />
      </FieldGroup>

      <FieldGroup
        label="Peer comparison"
        hint="How does valuation compare to direct competitors or comparable companies?"
      >
        <Textarea
          {...register('valuation.peerComparison')}
          value={watch('valuation.peerComparison')}
          placeholder="e.g. AMD: NTM P/E ~22x (discount). Broadcom: ~28x. Intel: ~18x (value trap)..."
          rows={3}
        />
      </FieldGroup>

      <FieldGroup
        label="Historical valuation range"
        hint="What range has the stock traded at historically? Where does today sit in that range?"
      >
        <Textarea
          {...register('valuation.historicalRange')}
          value={watch('valuation.historicalRange')}
          placeholder="e.g. Pre-AI boom: 20-35x NTM earnings. Post-ChatGPT peak: 40-70x. Current 35x is below peak..."
          rows={2}
        />
      </FieldGroup>

      <FieldGroup
        label="Why it is cheap / fair / expensive"
        hint="Give your overall valuation verdict with supporting reasoning."
      >
        <Textarea
          {...register('valuation.cheapFairExpensive')}
          value={watch('valuation.cheapFairExpensive')}
          placeholder="e.g. Fair to slightly cheap given structural AI tailwind and moat durability. Market pricing in continued but decelerating growth..."
          rows={3}
        />
      </FieldGroup>
    </FormSection>
  )
}
