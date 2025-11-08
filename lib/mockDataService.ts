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
      downloadsToday: 12400000,
      newAppsToday: 12847,
      topCategory: "Finance",
    },
  };
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

