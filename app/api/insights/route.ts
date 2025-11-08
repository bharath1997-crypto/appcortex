// app/api/insights/route.ts
import { NextResponse } from "next/server";

export interface InsightItem {
  slug: string;
  title: string;
  summary: string;
  category: "Market Trend" | "Category Report" | "Investor Note";
  publishedAt: string; // ISO date
  readingMinutes: number;
}

interface InsightsResponse {
  items: InsightItem[];
}

// Mock data for now – later replace with DB / files / AI generated content
const mockInsights: InsightItem[] = [
  {
    slug: "weekly-app-market-snapshot",
    title: "Weekly app market snapshot",
    summary:
      "Key changes in the app ecosystem this week: fastest-growing categories, regional shifts and notable launches.",
    category: "Market Trend",
    publishedAt: "2025-11-03T10:00:00.000Z",
    readingMinutes: 4,
  },
  {
    slug: "category-deep-dive-finance",
    title: "Finance apps – category deep dive",
    summary:
      "A closer look at consumer finance apps, install momentum in US and India, and early signals from new credit products.",
    category: "Category Report",
    publishedAt: "2025-11-01T09:00:00.000Z",
    readingMinutes: 6,
  },
  {
    slug: "investor-note-ai-tools-q4",
    title: "Investor note: AI tools in Q4",
    summary:
      "Why AI productivity and creative tools are outpacing the broader app market and what to watch in Q4.",
    category: "Investor Note",
    publishedAt: "2025-10-28T15:30:00.000Z",
    readingMinutes: 5,
  },
];

export async function GET() {
  const payload: InsightsResponse = {
    items: mockInsights,
  };

  return NextResponse.json(payload, { status: 200 });
}

