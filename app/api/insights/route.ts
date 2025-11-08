// app/api/insights/route.ts
import { NextResponse } from "next/server";
import { getInsightsData } from "@/lib/mockDataService";

export async function GET() {
  const items = getInsightsData();
  return NextResponse.json({ items }, { status: 200 });
}
