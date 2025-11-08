// components/pricing/FeatureBreakdownGrid.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const featureGroups = [
  {
    id: "data-access",
    title: "🔍 Data Access",
    icon: "🔍",
    features: [
      "Real-time app tracking",
      "Category performance dashboards",
      "Regional analytics",
      "SDK usage trends",
      "Historical ranking (1M+ apps)",
    ],
  },
  {
    id: "ai-insights",
    title: "🧠 AI & Insights",
    icon: "🧠",
    features: [
      "Daily AI summaries",
      "Predictive category forecasting",
      "Review sentiment analysis",
      "AI \"Feature Suggestions\" for devs",
    ],
  },
  {
    id: "developer-tools",
    title: "📊 Developer Tools",
    icon: "📊",
    features: [
      "Developer leaderboard",
      "Portfolio analysis",
      "SDK marketplace promotion",
      "Competitor tracking",
    ],
  },
  {
    id: "integrations",
    title: "💾 Integrations",
    icon: "💾",
    features: [
      "API (REST / GraphQL)",
      "Data export to Excel, Power BI",
      "Custom reporting widgets",
      "Webhook notifications",
    ],
  },
];

export function FeatureBreakdownGrid() {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-2">
          Complete Feature Breakdown
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto">
          Everything you need to understand the app economy
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featureGroups.map((group) => (
          <Card key={group.id} className="p-6 bg-slate-900/60">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{group.icon}</span>
              <h3 className="text-lg font-semibold text-slate-50">{group.title}</h3>
            </div>

            <ul className="space-y-2.5">
              {group.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="text-center pt-4">
        <Link
          href="/api-docs"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>Explore API Documentation</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

