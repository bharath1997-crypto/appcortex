// app/api/developers/leaderboards/route.ts
import { NextResponse } from "next/server";
import { getDevLeaderboardData } from "@/lib/mockDataService";

export async function GET() {
  const items = getDevLeaderboardData();
  return NextResponse.json({ items }, { status: 200 });
}
