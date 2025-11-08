// app/api/apps/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getExploreAppsData } from "@/lib/mockDataService";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || undefined;

  const data = getExploreAppsData(q);

  return NextResponse.json(data, { status: 200 });
}
