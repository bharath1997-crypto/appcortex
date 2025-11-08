// lib/appsApi.ts

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

export interface ExploreAppsResponse {
  items: ExploreApp[];
  total: number;
}

export async function getExploreApps(q?: string): Promise<ExploreAppsResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const params = q ? `?q=${encodeURIComponent(q)}` : "";
  
  const res = await fetch(`${baseUrl}/api/apps${params}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch apps");
  }

  return res.json();
}

