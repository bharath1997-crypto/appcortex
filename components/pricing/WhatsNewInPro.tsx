// components/pricing/WhatsNewInPro.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const proFeatures = [
  {
    id: 1,
    icon: "⚡",
    title: "Live Hourly Market Updates",
    description: "Get instant trend alerts as the app market shifts. Never miss a competitor move or category surge.",
  },
  {
    id: 2,
    icon: "🧠",
    title: "AI Performance Predictions",
    description: "Forecast downloads, retention, and revenue using machine learning models trained on millions of data points.",
  },
  {
    id: 3,
    icon: "📬",
    title: "Weekly App Digest",
    description: "Personalized email summaries tailored to your portfolio. See what matters without logging in.",
  },
  {
    id: 4,
    icon: "📤",
    title: "CSV & PDF Exports",
    description: "Share insights with your team, investors, or clients. Export charts, tables, and reports in seconds.",
  },
];

export function WhatsNewInPro() {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-2">
          What's Included in Pro
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto">
          Powerful features that save time and accelerate your app strategy
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {proFeatures.map((feature) => (
          <Card key={feature.id} hover className="p-6 bg-slate-900/60 text-center">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-base font-semibold text-slate-50 mb-2">
              {feature.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="text-center pt-4">
        <Link
          href="/demo/pro"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>See Pro Dashboard Preview</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

