// app/api/market/categories/route.ts
import { NextResponse } from "next/server";

export interface CategoryHeatmapItem {
  id: string;
  name: string;
  appsCount: number;
  installsMillions: number;
  growthPercent7d: number;
}

interface CategoriesResponse {
  items: CategoryHeatmapItem[];
}

// Later you'll replace mockCategories with real DB data.
const mockCategories: CategoryHeatmapItem[] = [
  { id: "finance",   name: "Finance",   appsCount: 14320, installsMillions: 980, growthPercent7d: 5.6 },
  { id: "games",     name: "Games",     appsCount: 58320, installsMillions: 3210, growthPercent7d: 3.2 },
  { id: "education", name: "Education", appsCount: 22110, installsMillions: 640, growthPercent7d: 8.1 },
  { id: "health",    name: "Health",    appsCount: 11890, installsMillions: 420, growthPercent7d: -2.3 },
  { id: "shopping",  name: "Shopping",  appsCount: 15440, installsMillions: 870, growthPercent7d: 1.4 },
  { id: "social",    name: "Social",    appsCount: 10220, installsMillions: 1100, growthPercent7d: -1.8 },
];

export async function GET() {
  const payload: CategoriesResponse = {
    items: mockCategories,
  };

  return NextResponse.json(payload, { status: 200 });
}

