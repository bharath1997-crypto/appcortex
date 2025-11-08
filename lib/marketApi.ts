// lib/marketApi.ts

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

export async function getMarketCategories(): Promise<CategoryHeatmapItem[]> {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
  const res = await fetch(`${baseUrl}/api/market/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch market categories");
  }

  const data = (await res.json()) as { items: CategoryHeatmapItem[] };
  return data.items;
}

export async function getMarketRegions(): Promise<RegionOverviewItem[]> {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
  const res = await fetch(`${baseUrl}/api/market/regions`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch market regions");
  }

  const data = (await res.json()) as { items: RegionOverviewItem[] };
  return data.items;
}

