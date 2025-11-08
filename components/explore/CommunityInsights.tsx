// components/explore/CommunityInsights.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const insights = [
  {
    id: 1,
    author: "Nova Studios",
    avatar: "🧑‍💻",
    title: "How we grew from 0→1M installs",
    excerpt: "Sharing our journey building AI Mirror and scaling across 5 countries...",
    link: "/developers/story/nova-studios",
  },
  {
    id: 2,
    author: "FitAI Labs",
    avatar: "💡",
    title: "Monetization lessons from AI Fitness apps",
    excerpt: "What we learned launching a freemium AI coaching app in a crowded market...",
    link: "/developers/story/fitai-labs",
  },
  {
    id: 3,
    author: "Vortex Games",
    avatar: "🎮",
    title: "Optimizing game retention with AppCortex data",
    excerpt: "Using market intelligence to improve Day 7 retention by 23%...",
    link: "/developers/story/vortex-games",
  },
];

export function CommunityInsights() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-slate-50">
          Community Insights
        </h3>
        <span className="text-xs text-cyan-400">From Developers</span>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => (
          <Link
            key={insight.id}
            href={insight.link}
            className="block p-3 rounded-lg hover:bg-slate-800/40 transition-colors group"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl">
                {insight.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-slate-400 mb-1">{insight.author}</div>
                <h4 className="text-sm font-medium text-slate-50 group-hover:text-cyan-400 mb-1">
                  {insight.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {insight.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 text-center">
        <Link
          href="/developers"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Read More Developer Stories →
        </Link>
      </div>
    </Card>
  );
}

