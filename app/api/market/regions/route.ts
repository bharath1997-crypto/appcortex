// app/api/market/regions/route.ts
import { NextResponse } from "next/server";

export interface RegionOverviewItem {
  id: string;
  name: string;
  indexValue: number;
  changePercent: number;
  topCategory: string;
  topApp: string;
}

interface RegionsResponse {
  items: RegionOverviewItem[];
}

const mockRegions: RegionOverviewItem[] = [
  {
    id: "global",
    name: "Global",
    indexValue: 1284.22,
    changePercent: 1.8,
    topCategory: "AI Tools",
    topApp: "Cash App",
  },
  {
    id: "us",
    name: "United States",
    indexValue: 912.5,
    changePercent: 0.9,
    topCategory: "Finance",
    topApp: "Cash App",
  },
  {
    id: "in",
    name: "India",
    indexValue: 765.4,
    changePercent: 2.1,
    topCategory: "Education",
    topApp: "BYJU'S",
  },
  {
    id: "eu",
    name: "Europe",
    indexValue: 901.3,
    changePercent: 1.3,
    topCategory: "Tools",
    topApp: "Duolingo",
  },
  {
    id: "uae",
    name: "UAE",
    indexValue: 834.3,
    changePercent: -0.6,
    topCategory: "Gaming",
    topApp: "Ludo King",
  },
];

export async function GET() {
  const payload: RegionsResponse = {
    items: mockRegions,
  };

  return NextResponse.json(payload, { status: 200 });
}

