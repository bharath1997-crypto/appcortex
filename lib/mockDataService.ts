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

