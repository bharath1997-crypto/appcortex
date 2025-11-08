// app/api/market/categories/route.ts
import { NextResponse } from "next/server";
import { getMarketCategoriesData, type CategoryHeatmapItem } from "@/lib/mockDataService";

interface CategoriesResponse {
  items: CategoryHeatmapItem[];
}

export async function GET() {
  const payload: CategoriesResponse = {
    items: getMarketCategoriesData(),
  };

  return NextResponse.json(payload, { status: 200 });
}

