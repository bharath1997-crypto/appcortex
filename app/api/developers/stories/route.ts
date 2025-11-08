// app/api/developers/stories/route.ts
import { NextResponse } from "next/server";

export interface DevStory {
  slug: string;
  developer: string;
  studio: string;
  title: string;
  summary: string;
  installs: string;
  category: string;
}

const mockStories: DevStory[] = [
  {
    slug: "zen-labs-ai-sleep",
    developer: "Zen Labs",
    studio: "Zen Labs Studio",
    title: "How Calm AI Sleep Reached 500K Installs in 3 Months",
    summary:
      "Zen Labs shares how their small team used AppCortex analytics to target growth markets and optimize keyword ads.",
    installs: "500K+ installs",
    category: "Health & Fitness",
  },
  {
    slug: "finlens-budget-growth",
    developer: "FinLens Studio",
    studio: "FinLens Studio",
    title: "Scaling FinLens: From Prototype to Finance Leader",
    summary:
      "FinLens Studio discusses building trust in fintech and using AppCortex reports to identify cross-border user segments.",
    installs: "100K+ installs",
    category: "Finance",
  },
];

export async function GET() {
  return NextResponse.json({ items: mockStories }, { status: 200 });
}

