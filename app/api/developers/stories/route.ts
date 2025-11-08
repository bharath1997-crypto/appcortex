// app/api/developers/stories/route.ts
import { NextResponse } from "next/server";
import { getDevStoriesData } from "@/lib/mockDataService";

export async function GET() {
  const items = getDevStoriesData();
  return NextResponse.json({ items }, { status: 200 });
}
