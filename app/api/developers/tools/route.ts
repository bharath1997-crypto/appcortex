// app/api/developers/tools/route.ts
import { NextResponse } from "next/server";

export interface DevTool {
  id: string;
  name: string;
  description: string;
  status: "available" | "coming-soon";
}

const mockTools: DevTool[] = [
  {
    id: "gap-analysis",
    name: "Market Gap Analyzer",
    description:
      "Find untapped app categories using AI-driven opportunity scores from AppCortex data.",
    status: "available",
  },
  {
    id: "launch-planner",
    name: "AI Launch Planner",
    description:
      "Simulate app launch outcomes, budgets and retention curves using predictive analytics.",
    status: "coming-soon",
  },
  {
    id: "revenue-benchmark",
    name: "Revenue Benchmark Explorer",
    description:
      "Compare monetization strategies across similar apps in your category.",
    status: "available",
  },
];

export async function GET() {
  return NextResponse.json({ items: mockTools }, { status: 200 });
}

