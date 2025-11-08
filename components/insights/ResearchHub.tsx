// components/insights/ResearchHub.tsx
import { Card, Badge } from "@/components/ui";
import Link from "next/link";

const research = [
  {
    id: 1,
    title: "App Retention Study 2025",
    source: "AppCortex Research Lab",
    icon: "📄",
    access: "Login Required",
    isPremium: true,
    slug: "retention-study-2025",
  },
  {
    id: 2,
    title: "Cross-Platform SDK Usage",
    source: "Deakin University + AppCortex",
    icon: "🔬",
    access: "Open Access",
    isPremium: false,
    slug: "sdk-usage-study",
  },
  {
    id: 3,
    title: "Predictive Forecasts 2026",
    source: "AI Forecast Engine",
    icon: "🔮",
    access: "Coming Soon",
    isPremium: true,
    slug: "forecasts-2026",
  },
];

export function ResearchHub() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            Research & Academic Insights
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Peer-reviewed studies and long-form analyses
          </p>
        </div>
        <Link
          href="/insights/research"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Research Hub →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {research.map((item) => (
          <Link key={item.id} href={`/insights/research/${item.slug}`}>
            <Card hover className="p-5 h-full">
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{item.icon}</span>
                {item.isPremium && (
                  <Badge variant="amber" className="text-[9px]">
                    PRO
                  </Badge>
                )}
              </div>

              <h3 className="text-base font-semibold text-slate-50 mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-slate-400 mb-4">
                {item.source}
              </p>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className={`font-medium ${
                  item.access === "Open Access"
                    ? "text-emerald-400"
                    : item.access === "Coming Soon"
                    ? "text-slate-500"
                    : "text-cyan-400"
                }`}>
                  {item.access}
                </span>
                <span className="text-slate-500">
                  PDF
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

