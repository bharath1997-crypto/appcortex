// app/api/apps/route.ts
import { NextRequest, NextResponse } from "next/server";

export interface ExploreApp {
  id: string;
  name: string;
  slug: string;
  category: string;
  developer: string;
  rating: number;
  installsLabel: string;  // "500K+ installs"
  trendLabel: string;     // "Trending ↑" / "Stable →" / "Cooling ↓"
}

const mockApps: ExploreApp[] = [
  {
    id: "calm-ai-sleep",
    slug: "calm-ai-sleep",
    name: "Calm AI Sleep",
    category: "Health & Fitness",
    developer: "Zen Labs",
    rating: 4.7,
    installsLabel: "500K+ installs",
    trendLabel: "Trending ↑",
  },
  {
    id: "finlens-ai-budget",
    slug: "finlens-ai-budget",
    name: "FinLens AI Budget",
    category: "Finance",
    developer: "FinLens Studio",
    rating: 4.4,
    installsLabel: "100K+ installs",
    trendLabel: "Trending ↑",
  },
  {
    id: "snapx-ai-editor",
    slug: "snapx-ai-editor",
    name: "SnapX AI Editor",
    category: "Photography",
    developer: "PixelForge",
    rating: 4.2,
    installsLabel: "1M+ installs",
    trendLabel: "Stable →",
  },
  {
    id: "studymate-gpt-tutor",
    slug: "studymate-gpt-tutor",
    name: "StudyMate GPT Tutor",
    category: "Education",
    developer: "EduWave",
    rating: 4.6,
    installsLabel: "50K+ installs",
    trendLabel: "Trending ↑",
  },
  {
    id: "fittrack-pro",
    slug: "fittrack-pro",
    name: "FitTrack Pro",
    category: "Health & Fitness",
    developer: "FitLabs Inc",
    rating: 4.5,
    installsLabel: "2M+ installs",
    trendLabel: "Trending ↑",
  },
  {
    id: "quickpay-wallet",
    slug: "quickpay-wallet",
    name: "QuickPay Wallet",
    category: "Finance",
    developer: "PayTech Corp",
    rating: 4.3,
    installsLabel: "5M+ installs",
    trendLabel: "Stable →",
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.toLowerCase().trim();

  let items = mockApps;

  // Simple server-side search on name or developer
  if (q && q.length > 0) {
    items = mockApps.filter(
      (app) =>
        app.name.toLowerCase().includes(q) ||
        app.developer.toLowerCase().includes(q)
    );
  }

  return NextResponse.json(
    {
      items,
      total: items.length,
    },
    { status: 200 }
  );
}

