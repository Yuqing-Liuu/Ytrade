// ─── Status ──────────────────────────────────────────────────────────────────

export const STOCK_STATUSES = [
  'Watching',
  'Researching',
  'Ready to Buy',
  'Hold',
  'Avoid',
] as const

export type StockStatus = (typeof STOCK_STATUSES)[number]

// ─── Section interfaces ───────────────────────────────────────────────────────

export interface BasicInfo {
  ticker: string
  companyName: string
  sector: string
  industry: string
  marketCap: string
}

export interface BusinessUnderstanding {
  howItMakesMoney: string
  keyProducts: string
  mainCustomers: string
  moat: string
}

export interface GrowthDrivers {
  nearTerm: string   // 1-2 year
  longTerm: string
}

export interface FinancialQuality {
  revenueTrend: string
  marginTrend: string
  freeCashFlow: string
  debt: string
  dilutionBuybacks: string
}

export interface Valuation {
  currentMultiple: string
  peerComparison: string
  historicalRange: string
  cheapFairExpensive: string
}

export interface MarketExpectations {
  pricedIn: string
  beatScenario: string
  disappointScenario: string
}

export interface Risks {
  companySpecific: string
  industry: string
  valuation: string
  execution: string
}

export interface TradingPlan {
  whyNowOrWait: string
  targetEntryZone: string
  invalidationCondition: string
  timeHorizon: string
  starterPositionSize: string
  addTrimRules: string
}

export interface FinalSummary {
  bullCase: string
  bearCase: string
  baseCase: string
  conclusion: string
}

// ─── Root research record ─────────────────────────────────────────────────────

export interface StockResearch {
  id: string
  createdAt: string   // ISO 8601
  updatedAt: string   // ISO 8601
  status: StockStatus
  convictionScore: number  // 1-10; 0 = not yet set

  basicInfo: BasicInfo
  businessUnderstanding: BusinessUnderstanding
  growthDrivers: GrowthDrivers
  financialQuality: FinancialQuality
  valuation: Valuation
  marketExpectations: MarketExpectations
  risks: Risks
  tradingPlan: TradingPlan
  finalSummary: FinalSummary
}

// ─── Form values (same shape, used with React Hook Form) ─────────────────────

export type ResearchFormValues = Omit<StockResearch, 'id' | 'createdAt' | 'updatedAt'>
