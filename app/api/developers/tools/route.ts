// app/api/developers/tools/route.ts
import { NextResponse } from "next/server";
import { getDevToolsData } from "@/lib/mockDataService";

export async function GET() {
  const items = getDevToolsData();
  return NextResponse.json({ items }, { status: 200 });
}
