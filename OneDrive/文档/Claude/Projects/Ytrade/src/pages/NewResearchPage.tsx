import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResearchForm } from '@/components/research/ResearchForm'
import { useResearchActions } from '@/hooks/useResearch'
import type { ResearchFormValues } from '@/types/research'

export function NewResearchPage() {
  const navigate = useNavigate()
  const { addResearch } = useResearchActions()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (values: ResearchFormValues) => {
    setIsSubmitting(true)
    try {
      const record = addResearch(values)
      navigate(`/research/${record.id}`, { replace: true })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <PageHeader
        title="New Research"
        subtitle="Work through the full research template. You can save at any time and come back to fill in more sections."
      />

      <ResearchForm
        onSubmit={handleSubmit}
        onCancel={() => navigate('/')}
        submitLabel="Save Research"
        isSubmitting={isSubmitting}
      />
    </div>
  )
}
