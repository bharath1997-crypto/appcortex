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

