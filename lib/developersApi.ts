// lib/developersApi.ts

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

export async function getDevStories(): Promise<DevStory[]> {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/developers/stories`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch stories");
  const data = await res.json();
  return data.items;
}

export async function getDevLeaderboard(): Promise<LeaderboardItem[]> {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/developers/leaderboards`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch leaderboard");
  const data = await res.json();
  return data.items;
}

export async function getDevTools(): Promise<DevTool[]> {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/developers/tools`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch tools");
  const data = await res.json();
  return data.items;
}

