// components/insights/CategoryDeepDives.tsx
import { Card, Badge } from "@/components/ui";
import Link from "next/link";

const categories = [
  {
    id: "ai-tools",
    name: "AI Tools",
    icon: "🤖",
    insight: "Image-to-text models drive 22% growth in creative professional adoption.",
    growth: 14.3,
    apps: 3221,
  },
  {
    id: "health",
    name: "Health & Fitness",
    icon: "🏥",
    insight: "New mental-wellness apps dominate top charts with meditation features.",
    growth: 6.8,
    apps: 2100,
  },
  {
    id: "games",
    name: "Games",
    icon: "🎮",
    insight: "Midcore genres replacing casual leaders as player preferences shift.",
    growth: -3.1,
    apps: 18720,
  },
  {
    id: "finance",
    name: "Finance",
    icon: "💰",
    insight: "Banking apps lead retention with 22% higher day-30 than market average.",
    growth: 8.5,
    apps: 3200,
  },
  {
    id: "education",
    name: "Education",
    icon: "📚",
    insight: "AI-powered tutoring apps see 340% increase in emerging markets.",
    growth: 11.2,
    apps: 4580,
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: "⚡",
    insight: "Task management apps with AI integrations outperform traditional tools.",
    growth: 5.4,
    apps: 5120,
  },
];

export function CategoryDeepDives() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
          Category Deep Dives
        </h2>
        <Link
          href="/insights/categories"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View All Categories →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const isUp = category.growth >= 0;
          return (
            <Link key={category.id} href={`/insights/category/${category.id}-report`}>
              <Card hover className="p-5 h-full">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{category.icon}</span>
                  <Badge variant={isUp ? "emerald" : "rose"} className="text-[9px]">
                    {isUp ? "+" : ""}
                    {category.growth.toFixed(1)}%
                  </Badge>
                </div>

                <h3 className="text-base font-semibold text-slate-50 mb-2">
                  {category.name}
                </h3>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-2">
                  {category.insight}
                </p>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    {category.apps.toLocaleString()} apps
                  </span>
                  <span className="text-cyan-400">
                    Explore →
                  </span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

