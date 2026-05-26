import { useResearchStore } from '@/store/researchStore'
import type { ResearchFormValues } from '@/types/research'

/**
 * Clean public API for pages to interact with research data.
 * Avoids importing the store directly from pages.
 */
export function useResearch() {
  const items = useResearchStore((s) => s.items)
  const addResearch = useResearchStore((s) => s.addResearch)
  const updateResearch = useResearchStore((s) => s.updateResearch)
  const deleteResearch = useResearchStore((s) => s.deleteResearch)
  const getById = useResearchStore((s) => s.getById)

  return {
    items,
    addResearch,
    updateResearch,
    deleteResearch,
    getById,
  }
}

/**
 * Convenience hook for a single research item by id.
 */
export function useResearchById(id: string | undefined) {
  return useResearchStore((s) => (id ? s.getById(id) : undefined))
}

/**
 * Convenience hook for actions only (no re-renders on items change).
 */
export function useResearchActions() {
  return {
    addResearch: useResearchStore((s) => s.addResearch),
    updateResearch: useResearchStore((s) => s.updateResearch),
    deleteResearch: useResearchStore((s) => s.deleteResearch),
  }
}

export type { ResearchFormValues }
