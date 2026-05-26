# YTrade — Personal Stock Research Workspace

A clean, structured research workspace for individual investors who want to think like disciplined analysts rather than momentum chasers. Built with React, TypeScript, and Tailwind CSS.

---

## Quick Start

**Prerequisites:** Node.js 18+ and npm 9+

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
# Production build
npm run build
npm run preview
```

---

## What It Does

- **Dashboard** — All your researched stocks in a filterable grid, with status and conviction score visible at a glance
- **9-section research template** — A structured workflow covering business understanding, financials, valuation, market expectations, risks, trading plan, and final verdict
- **Status system** — Watching / Researching / Ready to Buy / Hold / Avoid
- **Conviction score** — 1–10 slider with color-coded visual feedback
- **Persistent storage** — All research is saved to `localStorage` and survives browser refresh
- **Seed data** — Two complete example researches (NVDA and BRK.B) are pre-loaded on first run

---

## Project Structure

```
src/
├── components/
│   ├── layout/          # AppLayout, PageHeader
│   ├── ui/              # Button, Card, Input, Textarea, Select, ConfirmDialog
│   ├── dashboard/       # StockCard, EmptyState
│   └── research/
│       ├── sections/    # One component per template section (9 total)
│       ├── ResearchForm.tsx      # Master form composing all sections
│       ├── ResearchSection.tsx   # Read-mode section wrapper
│       ├── FormSection.tsx       # Edit-mode section wrapper
│       ├── StatusBadge.tsx
│       ├── ConvictionBadge.tsx
│       ├── ConvictionSlider.tsx
│       └── FieldView.tsx         # Read-mode field label + value
├── data/
│   ├── mockData.ts          # Seed data (NVDA, BRK.B)
│   └── researchTemplate.ts  # Empty template + section metadata
├── hooks/
│   └── useResearch.ts       # Public API over the Zustand store
├── lib/
│   └── utils.ts             # cn(), generateId(), formatDate()
├── pages/
│   ├── DashboardPage.tsx
│   ├── NewResearchPage.tsx
│   ├── ResearchDetailPage.tsx
│   └── EditResearchPage.tsx
├── store/
│   └── researchStore.ts     # Zustand store with localStorage persistence
└── types/
    └── research.ts          # All TypeScript interfaces
```

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Routing | React Router v6 |
| Forms | React Hook Form + Zod |
| State | Zustand (localStorage persistence) |
| Styling | Tailwind CSS v3 |
| Icons | Lucide React |

---

## Adding a New Research Template Field

1. Add the field to the relevant interface in `src/types/research.ts`
2. Add a default value in `src/data/researchTemplate.ts` → `EMPTY_RESEARCH`
3. Add a `FieldGroup` + `Textarea` or `Input` in the relevant section component under `src/components/research/sections/`
4. Add a `FieldView` in the matching section of `ResearchDetailPage.tsx`

The Zod schema in `ResearchForm.tsx` auto-validates — add `.string()` for any new text field.

---

## Planned Extensions (v2+)

**Market data integration**
- Plug in a free API (Polygon.io, Yahoo Finance via RapidAPI) to auto-fill current price, market cap, and P/E on ticker entry
- Display a small sparkline price chart on the detail page

**Export**
- Export a single research to PDF for sharing or archiving
- Export all researches to JSON for backup

**Versioning / history**
- Save a snapshot each time research is updated, so you can track how your thesis evolved

**Tagging and search**
- Full-text search across all research notes
- Custom tags beyond the 5 built-in statuses

**Portfolio tracking**
- Link a research record to an actual position (entry price, shares, current P&L)
- Show unrealized gain/loss on the dashboard card

**Multi-device sync**
- Replace localStorage with a lightweight backend (e.g. Supabase) for cross-device access
- Auth via Google Sign-In

**Watchlist alerts**
- Set price alerts on watched stocks (requires market data integration)

---

## Notes

- Data is stored in your browser's `localStorage` under the key `ytrade-research`. To reset to seed data, open DevTools → Application → Local Storage → delete the `ytrade-research` key and refresh.
- This app does not connect to the internet and contains no financial data. All research is written by you.
- Not financial advice.
