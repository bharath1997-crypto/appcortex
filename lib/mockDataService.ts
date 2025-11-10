// lib/mockDataService.ts
// Centralized mock data service - can be replaced with real database calls later

export interface IndexData {
  name: string;
  value: number;
  changePercent: number;
  lastUpdated: string;
}

export interface SummaryStats {
  appsTracked: number;
  downloadsToday: number;
  newAppsToday: number;
  topCategory: string;
}

export interface HomeSummaryResponse {
  index: IndexData;
  stats: SummaryStats;
}

export interface CategoryHeatmapItem {
  id: string;
  name: string;
  appsCount: number;
  installsMillions: number;
  growthPercent7d: number;
}

export interface RegionOverviewItem {
  id: string;
  name: string;
  indexValue: number;
  changePercent: number;
  topCategory: string;
  topApp: string;
}

export function getHomeSummaryData(): HomeSummaryResponse {
  return {
    index: {
      name: "ACX",
      value: 1284.22,
      changePercent: 1.8,
      lastUpdated: new Date().toISOString(),
    },
    stats: {
      appsTracked: 4800000,
      downloadsToday: 42310221,
      newAppsToday: 5421,
      topCategory: "Finance",
    },
  };
}

// Rising apps data
export interface RisingApp {
  rank: number;
  id: string;
  name: string;
  icon: string;
  category: string;
  region: string;
  downloadChange: number;
  percentChange: number;
}

export function getRisingAppsData(): RisingApp[] {
  return [
    { rank: 1, id: "ai-chat-pro", name: "AI Chat Pro", icon: "🤖", category: "AI Tools", region: "Global", downloadChange: 45230, percentChange: 128.5 },
    { rank: 2, id: "sleep-sounds", name: "Sleep Sounds+", icon: "😴", category: "Health", region: "MENA", downloadChange: 34120, percentChange: 89.3 },
    { rank: 3, id: "budget-master", name: "Budget Master", icon: "💰", category: "Finance", region: "India", downloadChange: 28940, percentChange: 67.8 },
    { rank: 4, id: "photo-ai", name: "Photo AI Editor", icon: "📷", category: "Photography", region: "Global", downloadChange: 25670, percentChange: 54.2 },
    { rank: 5, id: "learn-fast", name: "LearnFast", icon: "📚", category: "Education", region: "US", downloadChange: 21450, percentChange: 48.9 },
    { rank: 6, id: "fit-track-pro", name: "FitTrack Pro", icon: "💪", category: "Health", region: "Europe", downloadChange: 19320, percentChange: 42.1 },
    { rank: 7, id: "quick-recipe", name: "QuickRecipe", icon: "🍳", category: "Food", region: "Asia", downloadChange: 17890, percentChange: 38.7 },
    { rank: 8, id: "med-reminder", name: "Med Reminder", icon: "💊", category: "Health", region: "Global", downloadChange: 15430, percentChange: 35.4 },
    { rank: 9, id: "crypto-watch", name: "Crypto Watch", icon: "📈", category: "Finance", region: "UAE", downloadChange: 14210, percentChange: 32.6 },
    { rank: 10, id: "language-ai", name: "Language AI", icon: "🗣️", category: "Education", region: "Global", downloadChange: 12890, percentChange: 29.8 },
  ];
}

// Pro Apps List data
export interface ProApp {
  rank: number;
  name: string;
  icon: string;
  category: string;
  downloads: string;
  metric: string; // Growth/ARPU/Recovery
  trend: string;
  aiInsight: string;
}

export function getHighPotentialApps(): ProApp[] {
  return [
    { rank: 1, name: "Duolingo", icon: "🦉", category: "Education", downloads: "520M", metric: "+8.3%", trend: "🔥 Trending", aiInsight: "Strong organic growth in Asia" },
    { rank: 2, name: "Calm", icon: "😌", category: "Health", downloads: "350M", metric: "+6.1%", trend: "↑ Growing", aiInsight: "Increased retention in US" },
    { rank: 3, name: "Canva", icon: "🎨", category: "Productivity", downloads: "420M", metric: "+4.2%", trend: "↑ Stable", aiInsight: "Frequent updates, stable churn" },
  ];
}

export function getProfitEngineApps(): ProApp[] {
  return [
    { rank: 1, name: "Tinder", icon: "💖", category: "Lifestyle", downloads: "60M", metric: "$2.43 ARPU", trend: "↑ Stable", aiInsight: "High retention and premium conversions" },
    { rank: 2, name: "Calm Premium", icon: "😴", category: "Health", downloads: "18M", metric: "$1.95 ARPU", trend: "↑ Growing", aiInsight: "New pricing strategy performing well" },
    { rank: 3, name: "Headspace", icon: "🧘", category: "Wellness", downloads: "14M", metric: "$1.72 ARPU", trend: "↑ Mild Rise", aiInsight: "Corporate subscriptions expanding" },
  ];
}

export function getTurnaroundApps(): ProApp[] {
  return [
    { rank: 1, name: "Telegram", icon: "✈️", category: "Social", downloads: "900M", metric: "3 updates", trend: "🟢 Recovery", aiInsight: "Feature recovery driving growth" },
    { rank: 2, name: "Zoom", icon: "📹", category: "Business", downloads: "500M", metric: "2 updates", trend: "🟢 Positive", aiInsight: "UI redesign success" },
    { rank: 3, name: "Reddit", icon: "👽", category: "Social", downloads: "250M", metric: "1 update", trend: "🟡 Moderate", aiInsight: "API adjustments payoff" },
  ];
}

// App Market Actions data
export interface MarketCategory {
  name: string;
  newAppsToday: number;
  avgLast7Days: number;
  growthPercent: number;
  note: string;
}

export function getAdvancingCategories(): MarketCategory[] {
  return [
    { name: "AI Tools", newAppsToday: 324, avgLast7Days: 265, growthPercent: 22, note: "Explosive entry from startups" },
    { name: "AR Shopping", newAppsToday: 67, avgLast7Days: 61, growthPercent: 9, note: "High downloads in US" },
    { name: "Eco Travel", newAppsToday: 45, avgLast7Days: 42, growthPercent: 6, note: "Emerging in EU regions" },
  ];
}

export function getDecliningCategories(): MarketCategory[] {
  return [
    { name: "NFT Games", newAppsToday: 38, avgLast7Days: 104, growthPercent: -63, note: "Developer shift to AI utilities" },
    { name: "Crypto Wallets", newAppsToday: 22, avgLast7Days: 58, growthPercent: -52, note: "Falling public interest" },
    { name: "COVID Trackers", newAppsToday: 3, avgLast7Days: 16, growthPercent: -81, note: "Natural lifecycle end" },
  ];
}

// Games Index data
export interface GamesMetric {
  title: string;
  value: string;
  change: string;
  description: string;
}

export function getGamesIndexData() {
  return {
    indexValue: 812,
    changePercent: 2.1,
    lastUpdated: new Date().toISOString(),
    metrics: [
      { title: "Total Gaming Downloads Today", value: "12.4M", change: "+5.3%", description: "All platforms" },
      { title: "New Games Added", value: "421", change: "+3.1%", description: "Across stores" },
      { title: "Active Paid Games", value: "83K", change: "+1.9%", description: "Premium & in-app purchase games" },
      { title: "Rising Genre", value: "Casual / Simulation", change: "—", description: "Based on daily top downloads" },
    ] as GamesMetric[],
    aiInsight: "Simulation games are trending in South America, while hyper-casual downloads dip slightly in Asia.",
  };
}

// Opportunity Finder data
export interface AppOpportunity {
  id: string;
  title: string;
  category: string;
  region: string;
  difficulty: "Low" | "Medium" | "High";
  potentialScore: number; // 0-100
  monthlySearches: number;
  existingApps: number;
  avgDownloads: string;
  avgRating: number;
  keyInsights: string[];
  gapAnalysis: {
    demandLevel: "High" | "Medium" | "Low";
    competitionLevel: "High" | "Medium" | "Low";
    marketSaturation: number; // 0-100%
    growthTrend: number; // percentage
  };
  suggestedFeatures: string[];
  monetizationPotential: {
    model: string;
    estimatedARPU: string;
    timeToProfit: string;
  };
  targetAudience: string;
  marketSize: string;
  timeframe: string;
  requiredSkills: string[];
  estimatedDevTime: string;
  investmentRequired: string;
}

export function getOpportunities(): AppOpportunity[] {
  return [
    {
      id: "voice-fitness-coach",
      title: "AI Voice Fitness Coach for Seniors",
      category: "Health & Fitness",
      region: "India, Southeast Asia",
      difficulty: "Medium",
      potentialScore: 94,
      monthlySearches: 125000,
      existingApps: 12,
      avgDownloads: "50K-100K",
      avgRating: 3.8,
      keyInsights: [
        "Voice-based fitness apps grew +42% in India last month",
        "Senior population (60+) growing 3.5% annually in target regions",
        "Low competition with most apps targeting younger demographics",
        "High willingness to pay for health solutions in this segment"
      ],
      gapAnalysis: {
        demandLevel: "High",
        competitionLevel: "Low",
        marketSaturation: 23,
        growthTrend: 42
      },
      suggestedFeatures: [
        "Hands-free voice commands",
        "Large text UI for accessibility",
        "Medical condition customization",
        "Progress sharing with family",
        "Offline exercise library"
      ],
      monetizationPotential: {
        model: "Freemium + Family subscription",
        estimatedARPU: "$8-12/month",
        timeToProfit: "8-12 months"
      },
      targetAudience: "Adults 55-75 years, middle-income families",
      marketSize: "45M potential users in India alone",
      timeframe: "Launch window: Next 6 months (optimal)",
      requiredSkills: ["Voice UI", "Health tracking APIs", "Accessibility design"],
      estimatedDevTime: "4-6 months with 2-person team",
      investmentRequired: "$15K-25K (including marketing)"
    },
    {
      id: "micro-learning-regional",
      title: "5-Minute Regional Language Learning",
      category: "Education",
      region: "MENA, Africa",
      difficulty: "Low",
      potentialScore: 89,
      monthlySearches: 89000,
      existingApps: 8,
      avgDownloads: "100K-500K",
      avgRating: 4.2,
      keyInsights: [
        "Micro-learning apps (under 5 min/session) show 68% better retention",
        "Regional language demand up 31% in MENA region",
        "Duolingo-style apps lack focus on Arabic dialects and African languages",
        "Corporate training market hungry for quick-learning solutions"
      ],
      gapAnalysis: {
        demandLevel: "High",
        competitionLevel: "Medium",
        marketSaturation: 35,
        growthTrend: 31
      },
      suggestedFeatures: [
        "Dialect-specific lessons (Egyptian Arabic, Gulf Arabic, etc.)",
        "Offline-first for low-connectivity regions",
        "Gamification with cultural context",
        "Business phrase packs",
        "WhatsApp integration for practice"
      ],
      monetizationPotential: {
        model: "Free + Premium courses + B2B licensing",
        estimatedARPU: "$5-8/month (B2C), $50-100/seat (B2B)",
        timeToProfit: "6-9 months"
      },
      targetAudience: "Expats, business travelers, local students",
      marketSize: "120M Arabic speakers, 80M African language learners",
      timeframe: "Launch window: Next 4 months",
      requiredSkills: ["Content creation", "Audio processing", "Gamification"],
      estimatedDevTime: "3-5 months with content partnerships",
      investmentRequired: "$10K-20K"
    },
    {
      id: "sleep-therapy-subscription",
      title: "Prescription Sleep Therapy with Insurance",
      category: "Health & Wellness",
      region: "USA, Europe",
      difficulty: "High",
      potentialScore: 87,
      monthlySearches: 156000,
      existingApps: 24,
      avgDownloads: "500K-1M",
      avgRating: 4.1,
      keyInsights: [
        "Sleep disorder diagnoses up 28% post-pandemic",
        "Insurance companies now covering digital therapeutics",
        "Existing apps are B2C only - huge B2B2C opportunity",
        "FDA approval path now clearer for digital sleep aids"
      ],
      gapAnalysis: {
        demandLevel: "High",
        competitionLevel: "High",
        marketSaturation: 67,
        growthTrend: 18
      },
      suggestedFeatures: [
        "FDA-compliant sleep tracking",
        "Insurance claim integration",
        "Provider dashboard for doctors",
        "Clinical trial data integration",
        "CBT-I (Cognitive Behavioral Therapy for Insomnia) protocol"
      ],
      monetizationPotential: {
        model: "Insurance reimbursement + Employer plans",
        estimatedARPU: "$40-60/month (via insurance)",
        timeToProfit: "18-24 months (after FDA clearance)"
      },
      targetAudience: "Diagnosed sleep disorder patients, 30-60 years",
      marketSize: "70M Americans with chronic sleep issues",
      timeframe: "Launch window: 12-18 months (regulatory path)",
      requiredSkills: ["Health tech compliance", "Medical device software", "Insurance integration"],
      estimatedDevTime: "12-18 months with regulatory consulting",
      investmentRequired: "$150K-300K (includes FDA process)"
    },
    {
      id: "ar-furniture-local",
      title: "AR Furniture Shopping for Local Stores",
      category: "Shopping & AR",
      region: "Southeast Asia, India",
      difficulty: "Medium",
      potentialScore: 85,
      monthlySearches: 67000,
      existingApps: 15,
      avgDownloads: "10K-50K",
      avgRating: 3.9,
      keyInsights: [
        "AR shopping apps grew 9% globally, but only 3 serve local furniture stores",
        "Small furniture businesses lack IKEA-style AR tools",
        "High margin opportunity - B2B SaaS for retailers",
        "Low competition in tier 2-3 cities"
      ],
      gapAnalysis: {
        demandLevel: "Medium",
        competitionLevel: "Low",
        marketSaturation: 18,
        growthTrend: 24
      },
      suggestedFeatures: [
        "Simple AR measurement tool",
        "Catalog management for store owners",
        "WhatsApp catalog integration",
        "Multi-language support",
        "Offline catalog browsing"
      ],
      monetizationPotential: {
        model: "SaaS for retailers ($50-200/month) + Consumer app (free)",
        estimatedARPU: "$80/month per retailer",
        timeToProfit: "10-14 months"
      },
      targetAudience: "Local furniture retailers + Home buyers 25-45",
      marketSize: "500K+ furniture retailers in India alone",
      timeframe: "Launch window: Next 6 months",
      requiredSkills: ["ARCore/ARKit", "3D modeling", "B2B sales"],
      estimatedDevTime: "5-7 months",
      investmentRequired: "$20K-35K"
    },
    {
      id: "eco-carbon-tracking",
      title: "Personal Carbon Footprint Tracker with Rewards",
      category: "Lifestyle & Environment",
      region: "Europe, USA",
      difficulty: "Low",
      potentialScore: 82,
      monthlySearches: 94000,
      existingApps: 18,
      avgDownloads: "50K-100K",
      avgRating: 4.0,
      keyInsights: [
        "ESG awareness at all-time high, especially in EU",
        "Carbon credit market growing 40% YoY",
        "Existing apps lack reward mechanisms",
        "Corporate sustainability goals creating B2B opportunity"
      ],
      gapAnalysis: {
        demandLevel: "Medium",
        competitionLevel: "Medium",
        marketSaturation: 42,
        growthTrend: 26
      },
      suggestedFeatures: [
        "Automated carbon tracking via bank/credit card integration",
        "Green challenge gamification",
        "Carbon credit marketplace",
        "Corporate team challenges",
        "Impact visualization"
      ],
      monetizationPotential: {
        model: "B2C Freemium + B2B Corporate licenses",
        estimatedARPU: "$6-9/month (B2C), $15/employee (B2B)",
        timeToProfit: "8-12 months"
      },
      targetAudience: "Environmentally conscious millennials & Gen Z, Corporate CSR teams",
      marketSize: "200M+ eco-conscious consumers in target markets",
      timeframe: "Launch window: Next 3 months (trend is hot)",
      requiredSkills: ["Financial API integration", "Carbon calculation algorithms", "Gamification"],
      estimatedDevTime: "4-6 months",
      investmentRequired: "$12K-22K"
    }
  ];
}

export function getOpportunityById(id: string): AppOpportunity | undefined {
  return getOpportunities().find(opp => opp.id === id);
}

export function getMarketCategoriesData(): CategoryHeatmapItem[] {
  return [
    { id: "finance", name: "Finance", appsCount: 14800, installsMillions: 520, growthPercent7d: 2.4 },
    { id: "social", name: "Social", appsCount: 18200, installsMillions: 780, growthPercent7d: 5.1 },
    { id: "health", name: "Health", appsCount: 12600, installsMillions: 410, growthPercent7d: -0.8 },
    { id: "games", name: "Games", appsCount: 98000, installsMillions: 2200, growthPercent7d: 1.2 },
    { id: "productivity", name: "Productivity", appsCount: 22000, installsMillions: 680, growthPercent7d: 3.5 },
  ];
}

export function getMarketRegionsData(): RegionOverviewItem[] {
  return [
    { id: "na", name: "North America", indexValue: 1840.5, changePercent: 1.5, topCategory: "Finance", topApp: "CashApp" },
    { id: "eu", name: "Europe", indexValue: 1120.2, changePercent: -0.3, topCategory: "Social", topApp: "TikTok" },
    { id: "asia", name: "Asia-Pacific", indexValue: 2020.8, changePercent: 3.2, topCategory: "E-commerce", topApp: "Shopee" },
    { id: "latam", name: "Latin America", indexValue: 820.4, changePercent: 2.1, topCategory: "Finance", topApp: "Mercado" },
  ];
}

// Apps data
export interface ExploreApp {
  id: string;
  name: string;
  slug: string;
  category: string;
  developer: string;
  rating: number;
  installsLabel: string;
  trendLabel: string;
}

export function getExploreAppsData(query?: string): { items: ExploreApp[]; total: number } {
  const allApps: ExploreApp[] = [
    { id: "calm-ai-sleep", slug: "calm-ai-sleep", name: "Calm AI Sleep", category: "Health & Fitness", developer: "Zen Labs", rating: 4.7, installsLabel: "500K+ installs", trendLabel: "Trending ↑" },
    { id: "finlens-ai-budget", slug: "finlens-ai-budget", name: "FinLens AI Budget", category: "Finance", developer: "FinLens Studio", rating: 4.4, installsLabel: "100K+ installs", trendLabel: "Trending ↑" },
    { id: "snapx-ai-editor", slug: "snapx-ai-editor", name: "SnapX AI Editor", category: "Photography", developer: "PixelForge", rating: 4.2, installsLabel: "1M+ installs", trendLabel: "Stable →" },
    { id: "studymate-gpt-tutor", slug: "studymate-gpt-tutor", name: "StudyMate GPT Tutor", category: "Education", developer: "EduWave", rating: 4.6, installsLabel: "50K+ installs", trendLabel: "Trending ↑" },
    { id: "fittrack-pro", slug: "fittrack-pro", name: "FitTrack Pro", category: "Health & Fitness", developer: "FitLabs Inc", rating: 4.5, installsLabel: "2M+ installs", trendLabel: "Trending ↑" },
    { id: "quickpay-wallet", slug: "quickpay-wallet", name: "QuickPay Wallet", category: "Finance", developer: "PayTech Corp", rating: 4.3, installsLabel: "5M+ installs", trendLabel: "Stable →" },
  ];

  if (query && query.trim().length > 0) {
    const q = query.toLowerCase().trim();
    const items = allApps.filter(app =>
      app.name.toLowerCase().includes(q) || app.developer.toLowerCase().includes(q)
    );
    return { items, total: items.length };
  }

  return { items: allApps, total: allApps.length };
}

// Insights data
export interface InsightItem {
  slug: string;
  title: string;
  summary: string;
  category: "Market Trend" | "Category Report" | "Investor Note";
  publishedAt: string;
  readingMinutes: number;
}

export function getInsightsData(): InsightItem[] {
  return [
    { slug: "weekly-app-market-snapshot", title: "Weekly app market snapshot", summary: "Key changes in the app ecosystem this week: fastest-growing categories, regional shifts and notable launches.", category: "Market Trend", publishedAt: "2025-11-03T10:00:00.000Z", readingMinutes: 4 },
    { slug: "category-deep-dive-finance", title: "Finance apps – category deep dive", summary: "A closer look at consumer finance apps, install momentum in US and India, and early signals from new credit products.", category: "Category Report", publishedAt: "2025-11-01T09:00:00.000Z", readingMinutes: 6 },
    { slug: "investor-note-ai-tools-q4", title: "Investor note: AI tools in Q4", summary: "Why AI productivity and creative tools are outpacing the broader app market and what to watch in Q4.", category: "Investor Note", publishedAt: "2025-10-28T15:30:00.000Z", readingMinutes: 5 },
  ];
}

// Developers data
export interface DevStory {
  slug: string;
  developer: string;
  studio: string;
  title: string;
  summary: string;
  installs: string;
  category: string;
}

export interface LeaderboardItem {
  rank: number;
  developer: string;
  topApp: string;
  installsMillions: number;
  avgRating: number;
  categoryFocus: string;
}

export interface DevTool {
  id: string;
  name: string;
  description: string;
  status: "available" | "coming-soon";
}

export function getDevStoriesData(): DevStory[] {
  return [
    { slug: "zen-labs-ai-sleep", developer: "Zen Labs", studio: "Zen Labs Studio", title: "How Calm AI Sleep Reached 500K Installs in 3 Months", summary: "Zen Labs shares how their small team used AppCortex analytics to target growth markets and optimize keyword ads.", installs: "500K+ installs", category: "Health & Fitness" },
    { slug: "finlens-budget-growth", developer: "FinLens Studio", studio: "FinLens Studio", title: "Scaling FinLens: From Prototype to Finance Leader", summary: "FinLens Studio discusses building trust in fintech and using AppCortex reports to identify cross-border user segments.", installs: "100K+ installs", category: "Finance" },
  ];
}

export function getDevLeaderboardData(): LeaderboardItem[] {
  return [
    { rank: 1, developer: "PixelForge", topApp: "SnapX AI Editor", installsMillions: 12.3, avgRating: 4.4, categoryFocus: "Photography" },
    { rank: 2, developer: "FinLens Studio", topApp: "FinLens AI Budget", installsMillions: 4.1, avgRating: 4.5, categoryFocus: "Finance" },
    { rank: 3, developer: "Zen Labs", topApp: "Calm AI Sleep", installsMillions: 0.8, avgRating: 4.7, categoryFocus: "Health & Fitness" },
  ];
}

export function getDevToolsData(): DevTool[] {
  return [
    { id: "gap-analysis", name: "Market Gap Analyzer", description: "Find untapped app categories using AI-driven opportunity scores from AppCortex data.", status: "available" },
    { id: "launch-planner", name: "AI Launch Planner", description: "Simulate app launch outcomes, budgets and retention curves using predictive analytics.", status: "coming-soon" },
    { id: "revenue-benchmark", name: "Revenue Benchmark Explorer", description: "Compare monetization strategies across similar apps in your category.", status: "available" },
  ];
}

