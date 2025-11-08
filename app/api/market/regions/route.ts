// app/api/market/regions/route.ts
import { NextResponse } from "next/server";
import { getMarketRegionsData, type RegionOverviewItem } from "@/lib/mockDataService";

interface RegionsResponse {
  items: RegionOverviewItem[];
}

export async function GET() {
  const payload: RegionsResponse = {
    items: getMarketRegionsData(),
  };

  return NextResponse.json(payload, { status: 200 });
}


