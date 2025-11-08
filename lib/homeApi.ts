// lib/homeApi.ts

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

// This function runs on the server (Next.js Server Component or Route).
export async function getHomeSummary(): Promise<HomeSummaryResponse> {
  // If frontend and backend are the same Next.js app, use relative path
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
  const res = await fetch(`${baseUrl}/api/home/summary`, {
    cache: "no-store", // always get fresh data for home
  });

  if (!res.ok) {
    throw new Error("Failed to fetch home summary");
  }

  return res.json();
}

