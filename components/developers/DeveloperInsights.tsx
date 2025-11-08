// components/developers/DeveloperInsights.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const insights = [
  {
    id: 1,
    icon: "🤖",
    text: "New indie studios grew 12% this quarter, with 68% focusing on AI-powered tools.",
    metric: "+12%",
  },
  {
    id: 2,
    icon: "💼",
    text: "Teams using 2+ SDKs averaged 1.4× faster growth compared to single-SDK developers.",
    metric: "1.4×",
  },
  {
    id: 3,
    icon: "🎯",
    text: "India, UAE, and Indonesia show the highest developer launch rates globally.",
    metric: "Top 3",
  },
  {
    id: 4,
    icon: "📈",
    text: "Developers who publish 3+ apps have 2.7× better retention and monetization rates.",
    metric: "2.7×",
  },
];

export function DeveloperInsights() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            Developer Insights (AI)
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Intelligence extracted from developer activities
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-cyan-400 font-medium">LIVE</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {insights.map((insight) => (
          <Card
            key={insight.id}
            className="p-4 bg-gradient-to-br from-slate-900/70 to-slate-950/70 border-slate-800 hover:border-purple-500/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">{insight.icon}</span>
              <div className="flex-1">
                <p className="text-sm text-slate-200 leading-relaxed mb-2">
                  {insight.text}
                </p>
                <div className="text-2xl font-bold text-cyan-400">
                  {insight.metric}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center pt-2">
        <Link
          href="/insights/developer-trends"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Read Full AI Developer Analysis →
        </Link>
      </div>
    </section>
  );
}

