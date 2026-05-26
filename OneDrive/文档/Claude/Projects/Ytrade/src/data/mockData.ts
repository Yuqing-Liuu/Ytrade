import type { StockResearch } from '@/types/research'

/**
 * Seed data — two complete stock research records.
 * Loaded into the store when localStorage is empty.
 */
export const MOCK_RESEARCH: StockResearch[] = [
  // ─── NVDA — fully filled, conviction 8, Ready to Buy ───────────────────────
  {
    id: 'mock-nvda-001',
    createdAt: '2026-04-10T09:00:00.000Z',
    updatedAt: '2026-05-20T14:30:00.000Z',
    status: 'Ready to Buy',
    convictionScore: 8,

    basicInfo: {
      ticker: 'NVDA',
      companyName: 'NVIDIA Corporation',
      sector: 'Technology',
      industry: 'Semiconductors',
      marketCap: '~$2.7T',
    },

    businessUnderstanding: {
      howItMakesMoney:
        'NVIDIA sells GPUs and related software platforms. Revenue breaks into two primary segments: Data Center (~88% of revenue) and Gaming (~8%). Data Center is driven by AI training and inference workloads, with hyperscalers and cloud providers as the dominant buyers. Gaming sells discrete GPUs to PC gamers and workstation users.',
      keyProducts:
        'H100/H200/B100/B200 AI accelerators; NVLink interconnects; CUDA software platform; Networking (InfiniBand, Ethernet via Mellanox); Gaming: RTX 40/50 series GPUs.',
      mainCustomers:
        'Microsoft, Meta, Google, Amazon, Oracle (Data Center); DIY PC gamers and workstation OEMs (Gaming). Hyperscaler concentration risk: top 4 customers likely represent 40-50% of Data Center revenue.',
      moat:
        'CUDA software ecosystem is the primary moat — 10+ years of developer lock-in, millions of trained engineers, and a library ecosystem (cuDNN, RAPIDS, TensorRT) that competitors cannot replicate overnight. Hardware lead in transistor density and NVLink bandwidth is secondary but reinforces the software moat.',
    },

    growthDrivers: {
      nearTerm:
        'Blackwell GPU ramp through 2025-2026: demand exceeds supply, ASPs rising. Sovereign AI capex (UAE, Japan, Saudi Arabia) is a new, high-margin revenue stream that was not in prior estimates. Networking revenue (InfiniBand + Ethernet) growing as customers scale to 100K+ GPU clusters.',
      longTerm:
        'AI inference at scale is underpenetrated — training revenue is lumpy but inference revenue is more recurring and growing. Autonomous vehicles (DRIVE platform) is a long-duration option. Robotics (Isaac platform) is pre-revenue but potentially large. NIM microservices and software subscription revenue could improve recurring revenue quality.',
    },

    financialQuality: {
      revenueTrend:
        'FY2024 revenue: $60.9B (+122% YoY). FY2025 guidance suggests continuation above $100B. Quarterly growth rate is decelerating from triple-digits but remains high. Data Center drives nearly all growth.',
      marginTrend:
        'Gross margin: ~75-76% (near record). Operating margin: ~55%. Both have expanded dramatically on AI pricing power. Risk: margin may compress slightly as Blackwell ramp costs normalize, but structural improvement looks durable.',
      freeCashFlow:
        'FCF: ~$33B in FY2024. FCF conversion is very high (~85%+ of net income). Cash position ~$26B, growing rapidly.',
      debt:
        'Long-term debt: ~$8.5B. Leverage is minimal relative to FCF. Balance sheet is extremely strong.',
      dilutionBuybacks:
        'NVIDIA returned ~$15B to shareholders in FY2024 via buybacks and dividends. Share count has been modestly declining. Management authorized $25B additional buyback in 2024.',
    },

    valuation: {
      currentMultiple:
        'NTM P/E ~35x (as of May 2026). EV/EBITDA ~28x. Price/FCF ~32x. These look elevated on trailing multiples but are more reasonable when normalized for the growth rate (PEG ~0.7-0.9x on a 3-year CAGR basis).',
      peerComparison:
        'AMD: NTM P/E ~22x (meaningful discount, but AMD has far lower Data Center exposure and margins). Broadcom: NTM P/E ~28x. Intel: ~18x (value trap). NVDA trades at a justified premium given dominance.',
      historicalRange:
        'Pre-AI boom NVDA traded at 20-35x NTM earnings. Post-ChatGPT re-rating took it to 40-70x at peak. Current 35x is below the 2023-2024 peak, which is encouraging. At ~30x it would be a high-conviction buy.',
      cheapFairExpensive:
        'Fair to slightly cheap given the structural AI tailwind and moat durability. The market is pricing in continued but decelerating growth, which seems conservative. Key risk is if hyperscaler capex pauses — that would compress both revenue estimates and the multiple simultaneously.',
    },

    marketExpectations: {
      pricedIn:
        'Continued strong Data Center growth through FY2026, Blackwell ramping to plan, no major hyperscaler spending pause, ~$130-140B in FY2026 revenue.',
      beatScenario:
        'Sovereign AI demand accelerates faster than expected. Inference builds at hyperscalers require more accelerators than anticipated. NIM software revenue begins to show up in gross margin. Any announcement of next-gen architecture (Rubin) ahead of schedule.',
      disappointScenario:
        'Hyperscaler capex moderation (any "digestion period" commentary). Export control expansion to additional countries. AMD MI300X gaining meaningful share. Blackwell yield or production issues causing revenue slip.',
    },

    risks: {
      companySpecific:
        'Customer concentration: if Microsoft or Meta pulls back spending, it materially impacts estimates. Export controls are an ongoing regulatory risk — additional restrictions on China could permanently impair ~$5-8B of annual revenue.',
      industry:
        'Semiconductor cycle risk: AI capex is not immune to enterprise budget cuts. If corporate AI ROI does not materialize, hyperscalers could pause. TSMC concentration: NVIDIA is entirely dependent on TSMC leading-edge nodes; any geopolitical disruption to Taiwan is a tail risk.',
      valuation:
        'Multiple compression risk: if growth rate decelerates faster than expected (e.g., to 15-20% from 40%+), the current 35x multiple could compress to 25x, implying a 30% drawdown even with no change in earnings.',
      execution:
        'Blackwell NVL72 rack-scale product is highly complex; any thermal or power delivery issues could cause delivery slippage. Software (NIM, CUDA) must continue to outpace AMD ROCm improvements.',
    },

    tradingPlan: {
      whyNowOrWait:
        'Stock has pulled back ~18% from its February 2025 highs on export control fears, creating an entry opportunity. Blackwell demand signals remain strong. Wait for a flush toward $100-105 for a better risk/reward, but starter position can be initiated now.',
      targetEntryZone:
        'Starter: $108-115. Add: $98-105 (if macro sells off). Full position: average cost below $112.',
      invalidationCondition:
        'Thesis breaks if: (1) two consecutive quarters of Data Center revenue decline, (2) gross margin falls below 70% for structural reasons, or (3) AMD achieves >15% Data Center GPU share.',
      timeHorizon:
        '18-36 months. This is not a trade — it is a multi-year compounding position. Reassess thesis annually.',
      starterPositionSize:
        '2% of portfolio at current levels. Will size up to 4-5% at full conviction after first add.',
      addTrimRules:
        'Add 1% if stock drops to $100 on market weakness (not fundamental deterioration). Trim 1% if P/E expands above 50x on no new fundamental catalyst. Full exit if thesis breaks (see invalidation).',
    },

    finalSummary: {
      bullCase:
        'AI accelerator demand continues to exceed supply through 2027. NVDA sustains 35-40% revenue CAGR. Blackwell and Rubin architectures maintain the technology lead. Gross margins hold at 75%+. Stock re-rates to 45x on improved recurring revenue quality. 12-month target: $175.',
      bearCase:
        'Hyperscaler digestion period of 2-3 quarters causes a 20% revenue miss. Export controls expand. AMD takes meaningful share. Multiple compresses to 22x. 12-month downside: $72.',
      baseCase:
        'NVDA grows FY2026 revenue to $135-145B. Gross margins stable at 73-76%. EPS of ~$4.20-4.50. At 35x, fair value is $147-158. Current price offers ~15-20% upside with a 2-3 year hold.',
      conclusion:
        'NVIDIA is the best-positioned company in the most important technology transition of the decade. The CUDA moat is durable, the balance sheet is pristine, and management has repeatedly outperformed expectations. The stock is not cheap in absolute terms, but relative to its growth rate, competitive position, and the size of the AI opportunity, it is reasonably valued. A 2% starter position with a plan to add on weakness is appropriate. The primary risks are macro-driven (hyperscaler pause) rather than fundamental — which means any weakness is likely an opportunity, not a warning sign.',
    },
  },

  // ─── BRK.B — partially filled, conviction 6, Watching ─────────────────────
  {
    id: 'mock-brk-002',
    createdAt: '2026-05-01T10:00:00.000Z',
    updatedAt: '2026-05-22T09:15:00.000Z',
    status: 'Watching',
    convictionScore: 6,

    basicInfo: {
      ticker: 'BRK.B',
      companyName: 'Berkshire Hathaway Inc.',
      sector: 'Financials',
      industry: 'Diversified Insurance / Conglomerate',
      marketCap: '~$1.05T',
    },

    businessUnderstanding: {
      howItMakesMoney:
        'Berkshire operates as a holding company with four primary earnings streams: (1) Insurance underwriting (GEICO, Gen Re, BHRG) — "float" of ~$170B is invested to generate investment income; (2) Berkshire Hathaway Energy; (3) BNSF Railroad; (4) Manufacturing, Services & Retail subsidiaries. Investment income from the equity portfolio (Apple, BAC, Coke, etc.) is another major contributor.',
      keyProducts:
        'Insurance: auto (GEICO), reinsurance. Rails: BNSF. Energy: BHE utilities and renewables. Manufacturing: Precision Castparts, Lubrizol, Marmon. Retail: Pilot/Flying J, McLane, See\'s Candies.',
      mainCustomers:
        'Consumer and commercial insurance buyers (GEICO). Freight shippers (BNSF). Utility customers (BHE). The equity portfolio is essentially "customers" of capital allocation.',
      moat:
        'The insurance float model is a structural advantage — Berkshire essentially borrows money at negative cost if underwriting is profitable, then invests it. BNSF has a natural duopoly advantage in western US rail. The Berkshire brand enables advantaged deal flow for private acquisitions.',
    },

    growthDrivers: {
      nearTerm:
        'Insurance pricing cycle remains hard — GEICO profitability has improved dramatically after the 2022-2023 remediation. Investment income is at record levels given the high rate environment (short-term bills and bonds). BHE faces regulatory headwinds (California wildfire liability) but remains a steady earner.',
      longTerm:
        'Capital allocation: Berkshire\'s $330B+ cash pile is the most important medium-term driver. A large acquisition ($50-100B) would be a significant catalyst. Energy transition investments within BHE. International expansion remains underutilized.',
    },

    financialQuality: {
      revenueTrend:
        'Operating earnings: ~$37B in FY2024 (+27% YoY). Growth driven primarily by GEICO turnaround and higher investment income. Excluding investment gains, the business is growing at a steady 8-12% per year.',
      marginTrend: 'Insurance combined ratio improved to ~87% for GEICO in 2024 (from ~103% in 2022). Operating margins solid across segments.',
      freeCashFlow: 'FCF generation is exceptional — $30-35B/year. Cash pile has grown to $330B+ as Buffett found few attractive large acquisitions.',
      debt: 'Minimal leverage at the holding company level. Subsidiary-level debt is non-recourse. Financial fortress balance sheet.',
      dilutionBuybacks: 'Berkshire repurchased ~$9B in stock in FY2024. With the cash pile growing, buybacks are likely to continue. No dividend — all capital returned via buybacks.',
    },

    valuation: {
      currentMultiple: 'P/B: ~1.6x. P/E (operating earnings): ~23x. Price/FCF: ~30x. Historically trades at 1.2-1.6x book in normal markets.',
      peerComparison: '',
      historicalRange: 'BRK.B has traded at 1.1x-2.0x book over the past decade. Current 1.6x is toward the higher end. Buffett has indicated willingness to buy back aggressively below 1.2x book.',
      cheapFairExpensive: 'Fair value. Not cheap enough to be excited, not expensive. The optionality of the $330B cash pile is not fully reflected in earnings-based multiples.',
    },

    marketExpectations: {
      pricedIn: 'Continued GEICO profitability, steady BNSF volumes, high investment income from short-term bills.',
      beatScenario: 'A large ($50-100B+) transformative acquisition that deploys the cash pile at attractive returns. Acceleration in BHE renewable energy investments.',
      disappointScenario: 'BHE wildfire liability surprises (California exposure). GEICO loses market share to Progressive without a pricing offset. Significant equity portfolio marks if market sells off.',
    },

    risks: {
      companySpecific: 'Succession risk — Greg Abel has been named successor to Buffett, but the transition is unproven. BHE regulatory/wildfire liability in California is an ongoing overhang.',
      industry: 'Hard insurance market eventually softens — GEICO earnings are partly cyclical.',
      valuation: 'At 1.6x book, there is limited downside protection. In a severe bear market, BRK could trade to 1.1-1.2x book.',
      execution: 'Capital deployment: the $330B cash pile earning T-bill rates is a drag on long-run returns. Inability to find attractive large acquisitions is a structural challenge at Berkshire\'s scale.',
    },

    tradingPlan: {
      whyNowOrWait:
        'Waiting for a better entry. Would become more interested at 1.3-1.4x book (~$380-400 per B share). Current valuation is fair but not compelling. Monitoring for any acquisition announcement.',
      targetEntryZone: '$380-410 per B share (1.3-1.4x book).',
      invalidationCondition: 'No strong thesis break given the fortress nature of the business. Would reduce position if BHE wildfire liability exceeds $15B or if GEICO combined ratio reverts above 100% for 2+ quarters.',
      timeHorizon: '3-5 years. This is a core, defensive holding.',
      starterPositionSize: '1.5% at entry zone. Can be a 3-4% position over time.',
      addTrimRules: 'Add aggressively below 1.2x book. Trim if P/B exceeds 2.0x.',
    },

    finalSummary: {
      bullCase:
        'Berkshire deploys $100B+ in a transformative acquisition at attractive returns. Insurance cycle remains hard. Equity portfolio marks up. Stock re-rates to 2.0x book. Target: $600/B share.',
      bearCase:
        'BHE wildfire liability is $20B+. GEICO market share erodes. Equity portfolio (Apple) corrects 30%. Stock compresses to 1.1x book. Downside: $310/B share.',
      baseCase:
        'Steady 8-10% compounding in operating earnings. Buybacks at ~1.5x book modestly accretive. Fair value ~$460-480/B share in 18 months.',
      conclusion:
        'Berkshire is a high-quality business at a fair price — it is not a bargain at current levels. The case for owning it is defensive compounding, optionality on the cash pile, and insurance cycle tailwinds. I want to own it at 1.3x book or below. Currently watching and will initiate a small starter position if it pulls back to the $390-400 range on any market weakness.',
    },
  },
]
