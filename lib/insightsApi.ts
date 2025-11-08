// lib/insightsApi.ts

export interface InsightItem {
  slug: string;
  title: string;
  summary: string;
  category: "Market Trend" | "Category Report" | "Investor Note";
  publishedAt: string;
  readingMinutes: number;
}

export interface InsightsResponse {
  items: InsightItem[];
}

export async function getInsights(): Promise<InsightsResponse> {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
  const res = await fetch(`${baseUrl}/api/insights`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch insights");
  }

  return res.json();
}

