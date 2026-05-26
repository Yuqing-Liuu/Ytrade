import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { StockResearch, ResearchFormValues } from '@/types/research'
import { generateId } from '@/lib/utils'
import { MOCK_RESEARCH } from '@/data/mockData'

// ─── State shape ──────────────────────────────────────────────────────────────

interface ResearchState {
  items: StockResearch[]

  // CRUD
  addResearch: (values: ResearchFormValues) => StockResearch
  updateResearch: (id: string, values: ResearchFormValues) => void
  deleteResearch: (id: string) => void
  getById: (id: string) => StockResearch | undefined
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useResearchStore = create<ResearchState>()(
  persist(
    (set, get) => ({
      // Seed with mock data on first load
      items: MOCK_RESEARCH,

      addResearch: (values) => {
        const now = new Date().toISOString()
        const record: StockResearch = {
          ...values,
          id: generateId(),
          createdAt: now,
          updatedAt: now,
        }
        set((state) => ({ items: [record, ...state.items] }))
        return record
      },

      updateResearch: (id, values) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, ...values, id, createdAt: item.createdAt, updatedAt: new Date().toISOString() }
              : item,
          ),
        }))
      },

      deleteResearch: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
      },

      getById: (id) => get().items.find((item) => item.id === id),
    }),
    {
      name: 'ytrade-research',        // localStorage key
      version: 1,
      // If localStorage is empty (first load), items stays as MOCK_RESEARCH.
      // Once persisted, subsequent loads restore from storage.
      merge: (persisted, current) => {
        const p = persisted as Partial<ResearchState>
        // If storage has items, use them; otherwise keep the seed data
        if (p.items && p.items.length > 0) {
          return { ...current, items: p.items }
        }
        return current
      },
    },
  ),
)
