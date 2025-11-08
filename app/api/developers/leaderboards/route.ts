// app/api/developers/leaderboards/route.ts
import { NextResponse } from "next/server";

export interface LeaderboardItem {
  rank: number;
  developer: string;
  topApp: string;
  installsMillions: number;
  avgRating: number;
  categoryFocus: string;
}

const mockLeaderboard: LeaderboardItem[] = [
  {
    rank: 1,
    developer: "PixelForge",
    topApp: "SnapX AI Editor",
    installsMillions: 12.3,
    avgRating: 4.4,
    categoryFocus: "Photography",
  },
  {
    rank: 2,
    developer: "FinLens Studio",
    topApp: "FinLens AI Budget",
    installsMillions: 4.1,
    avgRating: 4.5,
    categoryFocus: "Finance",
  },
  {
    rank: 3,
    developer: "Zen Labs",
    topApp: "Calm AI Sleep",
    installsMillions: 0.8,
    avgRating: 4.7,
    categoryFocus: "Health & Fitness",
  },
];

export async function GET() {
  return NextResponse.json({ items: mockLeaderboard }, { status: 200 });
}

