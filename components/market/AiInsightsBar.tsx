// components/market/AiInsightsBar.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const insights = [
  {
    id: 1,
    icon: "🤖",
    text: "App installs increased 9% globally this week, led by AI Tools and Finance apps.",
  },
  {
    id: 2,
    icon: "💡",
    text: "Developers releasing daily updates see 17% better retention.",
  },
  {
    id: 3,
    icon: "🧠",
    text: "Emerging markets (UAE, Indonesia) now drive 22% of new installs.",
  },
];

export function AiInsightsBar() {
  return (
    <Card className="p-5 md:p-6 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border-indigo-500/30">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center">
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-slate-50 mb-1">
            AI Market Insights
          </h3>
          <p className="text-xs text-slate-400">
            Auto-generated analysis updated every 3 hours
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-700/50"
          >
            <span className="text-2xl flex-shrink-0">{insight.icon}</span>
            <p className="text-sm text-slate-300 leading-relaxed">{insight.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <Link
          href="/insights/ai-trends"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Read More AI Insights →
        </Link>
      </div>
    </Card>
  );
}

