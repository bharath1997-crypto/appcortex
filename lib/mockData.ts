export const mockTicker = {
  appsTracked: 3214892,
  developers: 1102349,
  categories: 185,
  regions: 120,
  lastUpdated: "5 min ago",
};

export type Trend = "up" | "down" | "flat";

export interface AppSummary {
  id: string;
  name: string;
  developer: string;
  category: string;
  rating: number;
  downloadsLabel: string;
  trend: Trend;
  iconText: string;
}

export const mockTopApps: AppSummary[] = [
  {
    id: "calm-ai",
    name: "Calm AI Sleep",
    developer: "Zen Labs",
    category: "Health & Fitness",
    rating: 4.7,
    downloadsLabel: "500K+",
    trend: "up",
    iconText: "CA",
  },
  {
    id: "finlens",
    name: "FinLens AI Budget",
    developer: "FinLens Studio",
    category: "Finance",
    rating: 4.4,
    downloadsLabel: "100K+",
    trend: "up",
    iconText: "FL",
  },
  {
    id: "snapx",
    name: "SnapX AI Editor",
    developer: "PixelForge",
    category: "Photography",
    rating: 4.2,
    downloadsLabel: "1M+",
    trend: "flat",
    iconText: "SX",
  },
  {
    id: "study-mate",
    name: "StudyMate GPT Tutor",
    developer: "EduWave",
    category: "Education",
    rating: 4.6,
    downloadsLabel: "50K+",
    trend: "up",
    iconText: "SM",
  },
];
