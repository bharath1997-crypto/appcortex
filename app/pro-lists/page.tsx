// app/pro-lists/page.tsx
import { ProAppListsSection } from "@/components/ProAppListsSection";

export const metadata = {
  title: "Pro App Lists | AppCortex",
  description: "Curated lists of apps filtered by growth, stability, and monetization signals.",
};

export default function ProListsPage() {
  return (
    <div className="space-y-6 pb-10 animate-fade-up">
      {/* Page Header */}
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-50">
            Pro App Lists
          </h1>
          <span className="text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1.5 rounded-full">
            PRO
          </span>
        </div>
        <p className="text-base md:text-lg text-slate-300 max-w-3xl">
          Curated lists of apps filtered by growth, stability, and monetization signals from the AppCortex engine. 
          Lists are updated daily with comprehensive metrics and AI-powered analysis.
        </p>
      </header>

      {/* Main Content - Reuse the section component */}
      <ProAppListsSection />

      {/* Additional Context */}
      <div className="grid gap-6 md:grid-cols-3 mt-12">
        <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-6">
          <div className="text-2xl mb-3">🚀</div>
          <h3 className="text-lg font-semibold text-slate-50 mb-2">
            High Potential
          </h3>
          <p className="text-sm text-slate-400">
            Apps showing strong early-stage growth signals with accelerating install velocity and expanding market presence.
          </p>
        </div>
        
        <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-6">
          <div className="text-2xl mb-3">💎</div>
          <h3 className="text-lg font-semibold text-slate-50 mb-2">
            Profit Engines
          </h3>
          <p className="text-sm text-slate-400">
            Established apps with consistent revenue generation, high retention rates, and strong monetization metrics.
          </p>
        </div>
        
        <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-6">
          <div className="text-2xl mb-3">📈</div>
          <h3 className="text-lg font-semibold text-slate-50 mb-2">
            Turnaround
          </h3>
          <p className="text-sm text-slate-400">
            Apps recovering from declines with recent improvements showing reversal in key engagement metrics.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="border border-cyan-500/30 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-8 text-center mt-12">
        <h3 className="text-2xl font-bold text-slate-50 mb-3">
          Want Deeper Analytics?
        </h3>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-6">
          Upgrade to Pro to access full app profiles, historical data, AI predictions, and custom alerts.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-3 text-sm font-medium text-white hover:from-cyan-600 hover:to-indigo-700 transition-all shadow-lg"
          >
            Upgrade to Pro
          </a>
          <a
            href="/explore"
            className="inline-flex items-center justify-center rounded-full border-2 border-slate-600 px-8 py-3 text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
          >
            Explore All Apps
          </a>
        </div>
      </div>
    </div>
  );
}

