// app/api/home/summary/route.ts
import { NextResponse } from "next/server";

interface IndexData {
  name: string;
  value: number;
  changePercent: number;
  lastUpdated: string; // ISO string
}

interface SummaryStats {
  appsTracked: number;
  downloadsToday: number;
  newAppsToday: number;
  topCategory: string;
}

interface HomeSummaryResponse {
  index: IndexData;
  stats: SummaryStats;
}

// This is your backend handler – later you will replace the mock
// values with real database / scrapers / connectors.
export async function GET() {
  // TODO: here you will call your real backend logic:
  // const index = await getIndexFromDatabase();
  // const stats = await getGlobalStats();

  const mockData: HomeSummaryResponse = {
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

  return NextResponse.json(mockData, {
    status: 200,
  });
}

