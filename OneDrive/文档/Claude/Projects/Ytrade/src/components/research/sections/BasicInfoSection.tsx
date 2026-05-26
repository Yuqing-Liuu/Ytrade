import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormSection, FieldGroup } from '../FormSection'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { StatusBadge } from '../StatusBadge'
import { ConvictionSlider } from '../ConvictionSlider'
import type { ResearchFormValues } from '@/types/research'
import { STOCK_STATUSES } from '@/types/research'

interface Props {
  register: UseFormRegister<ResearchFormValues>
  errors: FieldErrors<ResearchFormValues>
  convictionScore: number
  onConvictionChange: (v: number) => void
}

export function BasicInfoSection({ register, errors, convictionScore, onConvictionChange }: Props) {
  return (
    <FormSection
      number={1}
      title="Basic Company Info"
      description="Identify the company — ticker, sector, and size."
    >
      {/* Status + Conviction side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-5 border-b border-slate-100">
        <FieldGroup label="Research Status" required>
          <Select {...register('status')} error={!!errors.status}>
            {STOCK_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </FieldGroup>

        <FieldGroup
          label="Conviction Score"
          hint="How confident are you in this thesis right now?"
        >
          <ConvictionSlider value={convictionScore} onChange={onConvictionChange} />
        </FieldGroup>
      </div>

      {/* Ticker + Company name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Ticker" required error={errors.basicInfo?.ticker?.message}>
          <Input
            {...register('basicInfo.ticker', { required: 'Ticker is required' })}
            placeholder="e.g. NVDA"
            error={!!errors.basicInfo?.ticker}
            className="uppercase"
          />
        </FieldGroup>

        <FieldGroup
          label="Company Name"
          required
          error={errors.basicInfo?.companyName?.message}
        >
          <Input
            {...register('basicInfo.companyName', { required: 'Company name is required' })}
            placeholder="e.g. NVIDIA Corporation"
            error={!!errors.basicInfo?.companyName}
          />
        </FieldGroup>
      </div>

      {/* Sector + Industry */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Sector">
          <Input
            {...register('basicInfo.sector')}
            placeholder="e.g. Technology"
          />
        </FieldGroup>

        <FieldGroup label="Industry">
          <Input
            {...register('basicInfo.industry')}
            placeholder="e.g. Semiconductors"
          />
        </FieldGroup>
      </div>

      <FieldGroup label="Market Cap">
        <Input
          {...register('basicInfo.marketCap')}
          placeholder="e.g. ~$2.7T"
          className="max-w-xs"
        />
      </FieldGroup>
    </FormSection>
  )
}
