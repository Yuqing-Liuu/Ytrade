import type { StockResearch } from '@/types/research'

/**
 * The canonical empty research record.
 * Use this as the default values for the "New Research" form.
 */
export const EMPTY_RESEARCH: Omit<StockResearch, 'id' | 'createdAt' | 'updatedAt'> = {
  status: 'Watching',
  convictionScore: 0,

  basicInfo: {
    ticker: '',
    companyName: '',
    sector: '',
    industry: '',
    marketCap: '',
  },

  businessUnderstanding: {
    howItMakesMoney: '',
    keyProducts: '',
    mainCustomers: '',
    moat: '',
  },

  growthDrivers: {
    nearTerm: '',
    longTerm: '',
  },

  financialQuality: {
    revenueTrend: '',
    marginTrend: '',
    freeCashFlow: '',
    debt: '',
    dilutionBuybacks: '',
  },

  valuation: {
    currentMultiple: '',
    peerComparison: '',
    historicalRange: '',
    cheapFairExpensive: '',
  },

  marketExpectations: {
    pricedIn: '',
    beatScenario: '',
    disappointScenario: '',
  },

  risks: {
    companySpecific: '',
    industry: '',
    valuation: '',
    execution: '',
  },

  tradingPlan: {
    whyNowOrWait: '',
    targetEntryZone: '',
    invalidationCondition: '',
    timeHorizon: '',
    starterPositionSize: '',
    addTrimRules: '',
  },

  finalSummary: {
    bullCase: '',
    bearCase: '',
    baseCase: '',
    conclusion: '',
  },
}

/**
 * Section metadata — drives the form UI section headers and descriptions.
 * The key matches the field name on StockResearch.
 */
export const SECTION_META = [
  {
    key: 'basicInfo' as const,
    number: 1,
    title: 'Basic Company Info',
    description: 'Identify the company — ticker, sector, size.',
  },
  {
    key: 'businessUnderstanding' as const,
    number: 2,
    title: 'Business Understanding',
    description: 'How does this company generate revenue? What makes it defensible?',
  },
  {
    key: 'growthDrivers' as const,
    number: 3,
    title: 'Growth Drivers',
    description: 'What will drive growth over the next 1-2 years and beyond?',
  },
  {
    key: 'financialQuality' as const,
    number: 4,
    title: 'Financial Quality',
    description: 'Assess the quality and trajectory of the financials.',
  },
  {
    key: 'valuation' as const,
    number: 5,
    title: 'Valuation',
    description: 'Is the stock cheap, fair, or expensive relative to its fundamentals?',
  },
  {
    key: 'marketExpectations' as const,
    number: 6,
    title: 'Market Expectations',
    description: 'What is already priced in? Where is the market wrong?',
  },
  {
    key: 'risks' as const,
    number: 7,
    title: 'Risks',
    description: 'What could go wrong? Quantify and rank the key risks.',
  },
  {
    key: 'tradingPlan' as const,
    number: 8,
    title: 'Trading / Investing Plan',
    description: 'Entry levels, sizing, invalidation, and exit plan.',
  },
  {
    key: 'finalSummary' as const,
    number: 9,
    title: 'Final Summary',
    description: 'Bull, base, and bear cases. Your one-paragraph verdict.',
  },
] as const
