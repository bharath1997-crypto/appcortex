// app/indices/page.tsx
import { MarketActionSection } from "@/components/MarketActionSection";

export const metadata = {
  title: "App Market Indices | AppCortex",
  description: "Live indices tracking major segments of the global app economy.",
};

export default function IndicesPage() {
  return (
    <div className="space-y-6 pb-10 animate-fade-up">
      {/* Page Header */}
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-50">
          App Market Indices
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-3xl">
          Live indices tracking major segments of the global app economy. 
          Updated every 15 minutes with real-time data from millions of apps across all major stores.
        </p>
      </header>

      {/* Main Content - Reuse the section component */}
      <MarketActionSection />

      {/* How Indices Work */}
      <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-6 mt-12">
        <h2 className="text-xl font-semibold text-slate-50 mb-4">
          How AppCortex Indices Work
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
              Methodology
            </h3>
            <p className="text-sm text-slate-300">
              Each index tracks a weighted basket of apps in its category, measuring combined performance 
              across downloads, ratings, revenue signals, and user engagement. The ACX (AppCortex Index) 
              represents the entire app economy.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
              Update Frequency
            </h3>
            <p className="text-sm text-slate-300">
              Indices are recalculated every 15 minutes during market hours (24/7 for mobile apps), 
              incorporating real-time data from app stores, social sentiment, and third-party analytics.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
              Historical Data
            </h3>
            <p className="text-sm text-slate-300">
              Pro users can access historical index data going back 12 months, with customizable charts, 
              technical indicators, and correlation analysis across different segments.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
              Index Components
            </h3>
            <p className="text-sm text-slate-300">
              Click any index to see its constituent apps, weighting methodology, rebalancing schedule, 
              and performance attribution across different metrics and regions.
            </p>
          </div>
        </div>
      </div>

      {/* Index Categories */}
      <div className="grid gap-4 md:grid-cols-4 mt-8">
        <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-4">
          <div className="text-2xl mb-2">📊</div>
          <h3 className="text-sm font-semibold text-slate-50 mb-1">ACX</h3>
          <p className="text-xs text-slate-400">
            Main index tracking the entire app economy
          </p>
        </div>
        
        <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-4">
          <div className="text-2xl mb-2">🎮</div>
          <h3 className="text-sm font-semibold text-slate-50 mb-1">Games</h3>
          <p className="text-xs text-slate-400">
            Mobile gaming apps and related content
          </p>
        </div>
        
        <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-4">
          <div className="text-2xl mb-2">💰</div>
          <h3 className="text-sm font-semibold text-slate-50 mb-1">Fintech</h3>
          <p className="text-xs text-slate-400">
            Finance, banking, and payment apps
          </p>
        </div>
        
        <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-4">
          <div className="text-2xl mb-2">💬</div>
          <h3 className="text-sm font-semibold text-slate-50 mb-1">Social</h3>
          <p className="text-xs text-slate-400">
            Social media and communication platforms
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="border border-cyan-500/30 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-8 text-center mt-12">
        <h3 className="text-2xl font-bold text-slate-50 mb-3">
          Track Custom Indices
        </h3>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-6">
          Pro users can create custom indices tracking specific app portfolios, receive alerts on major moves, 
          and access historical charts with technical analysis.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-3 text-sm font-medium text-white hover:from-cyan-600 hover:to-indigo-700 transition-all shadow-lg"
          >
            Upgrade to Pro
          </a>
          <a
            href="/market"
            className="inline-flex items-center justify-center rounded-full border-2 border-slate-600 px-8 py-3 text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
          >
            View Market Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

