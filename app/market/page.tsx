// app/market/page.tsx
import { MarketOverview } from "@/components/market/MarketOverview";
import { CategoryHeatmapSection } from "@/components/market/CategoryHeatmapSection";
import { RegionalPerformanceSection } from "@/components/market/RegionalPerformanceSection";
import { TopMoversSection } from "@/components/market/TopMoversSection";
import { CategoryTrendSnapshots } from "@/components/market/CategoryTrendSnapshots";
import { AiInsightsBar } from "@/components/market/AiInsightsBar";
import { SdkTrendsSection } from "@/components/market/SdkTrendsSection";

export default function MarketPage() {
  return (
    <div className="space-y-8 pb-10 animate-fade-up">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
          Market Dashboard
        </h1>
        <p className="text-sm md:text-base text-slate-300 max-w-3xl">
          Your real-time view of the global app economy. Track categories, regions, 
          indices, and emerging trends — updated every 45-180 minutes.
        </p>
      </header>

      {/* Market Overview - ACX Index + Sub-Indices */}
      <MarketOverview />

      {/* Category Heatmap & Regional Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryHeatmapSection />
        <RegionalPerformanceSection />
      </div>

      {/* Top Movers: Rising & Declining Apps */}
      <TopMoversSection />

      {/* Category Trend Snapshots - Horizontal Slider */}
      <CategoryTrendSnapshots />

      {/* AI Insights Bar */}
      <AiInsightsBar />

      {/* SDK & Library Usage Trends */}
      <SdkTrendsSection />

      {/* Data Summary Footer */}
      <div className="border-t border-slate-800 pt-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm">
          <div>
            <div className="text-2xl font-bold text-cyan-400">3.2M</div>
            <div className="text-xs text-slate-400">Apps Tracked</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">189</div>
            <div className="text-xs text-slate-400">Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">124</div>
            <div className="text-xs text-slate-400">Countries</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">3h</div>
            <div className="text-xs text-slate-400">Refresh Cycle</div>
          </div>
          <div>
            <div className="text-xs font-medium text-emerald-400 mb-1">LIVE</div>
            <div className="text-[10px] text-slate-500">Updated: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="border border-cyan-500/30 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-6 md:p-8 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-2">
          Ready to track full analytics, revenue, and competitor data?
        </h3>
        <p className="text-sm text-slate-300 mb-4 max-w-2xl mx-auto">
          Unlock historical trends, AI forecasts, custom alerts, and premium insights with AppCortex Pro
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-cyan-400 transition-colors"
          >
            Create Free Account
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
