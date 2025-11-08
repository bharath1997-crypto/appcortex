// components/insights/AiInsightsOfDay.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const aiInsights = [
  {
    id: 1,
    icon: "🤖",
    text: "In the last 24 hours, Health & Fitness saw a 12% surge in active installs globally.",
    category: "Health",
    confidence: "94%",
  },
  {
    id: 2,
    icon: "🧩",
    text: "Finance apps using subscription models outperformed freemium by 1.7× in revenue per user.",
    category: "Monetization",
    confidence: "89%",
  },
  {
    id: 3,
    icon: "🎮",
    text: "Hyper-casual gaming downloads dropped 8% week-over-week as user engagement declines.",
    category: "Gaming",
    confidence: "91%",
  },
  {
    id: 4,
    icon: "🧠",
    text: "AI-powered photo editing apps gained 340K installs in Asia-Pacific in the past 48 hours.",
    category: "AI Tools",
    confidence: "96%",
  },
];

export function AiInsightsOfDay() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            AI Insights of the Day
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Auto-generated every 3 hours from live data streams
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-cyan-400 font-medium">LIVE</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {aiInsights.map((insight) => (
          <Card
            key={insight.id}
            className="p-4 bg-gradient-to-br from-slate-900/70 to-slate-950/70 border-slate-800 hover:border-cyan-500/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">{insight.icon}</span>
              <div className="flex-1">
                <p className="text-sm text-slate-200 leading-relaxed mb-3">
                  {insight.text}
                </p>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-medium">
                    {insight.category}
                  </span>
                  <span className="text-slate-500">
                    Confidence: <span className="text-emerald-400 font-medium">{insight.confidence}</span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center pt-2">
        <Link
          href="/insights/ai-trends"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View More AI Analyses →
        </Link>
      </div>
    </section>
  );
}

