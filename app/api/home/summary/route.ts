// app/api/home/summary/route.ts
import { NextResponse } from "next/server";
import { getHomeSummaryData } from "@/lib/mockDataService";

// This is your backend handler – later you will replace the mock
// values with real database / scrapers / connectors in mockDataService.ts
export async function GET() {
  const data = getHomeSummaryData();
  
  return NextResponse.json(data, {
    status: 200,
  });
}

