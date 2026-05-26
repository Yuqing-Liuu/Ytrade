import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResearchForm } from '@/components/research/ResearchForm'
import { useResearchById, useResearchActions } from '@/hooks/useResearch'
import type { ResearchFormValues } from '@/types/research'

export function EditResearchPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const research = useResearchById(id)
  const { updateResearch } = useResearchActions()
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!research) {
    return (
      <div className="text-center py-24">
        <p className="text-slate-400 text-sm">Research not found.</p>
      </div>
    )
  }

  const handleSubmit = (values: ResearchFormValues) => {
    setIsSubmitting(true)
    try {
      updateResearch(research.id, values)
      navigate(`/research/${research.id}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <PageHeader
        title={`Edit — ${research.basicInfo.ticker || research.basicInfo.companyName || 'Research'}`}
        subtitle="Update any section and save. Your previous version will be replaced."
      />

      <ResearchForm
        defaultValues={research}
        onSubmit={handleSubmit}
        onCancel={() => navigate(`/research/${research.id}`)}
        submitLabel="Save Changes"
        isSubmitting={isSubmitting}
      />
    </div>
  )
}
