// app/global-markets/page.tsx
import { GlobalMarketsSection } from "@/components/GlobalMarketsSection";

export const metadata = {
  title: "Global App Markets | AppCortex",
  description: "Regional snapshots of app activity across key markets worldwide.",
};

export default function GlobalMarketsPage() {
  return (
    <div className="space-y-6 pb-10 animate-fade-up">
      {/* Page Header */}
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-50">
          Global App Markets
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-3xl">
          Real-time snapshots of app economy performance across major regions worldwide. 
          Track index values, market leaders, and trending apps in each market.
        </p>
      </header>

      {/* Main Content - Reuse the section component */}
      <GlobalMarketsSection />

      {/* Regional Market Details - WITH MASKED DATA FOR PUBLIC */}
      <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Detailed Regional Analytics
          </h2>
          <span className="text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1.5 rounded-full">
            PRO
          </span>
        </div>

        <div className="space-y-6">
          {/* Feature List - Showing what's available with PRO */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-slate-800 bg-slate-900/60 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <span className="text-xs font-semibold bg-amber-500/20 text-amber-400 px-2 py-1 rounded">
                  PRO
                </span>
              </div>
              <div className="text-2xl mb-3">📊</div>
              <h3 className="text-base font-semibold text-slate-50 mb-2">
                Historical Performance Charts
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                View index performance over 1 day, 7 days, 30 days, 90 days, or 1 year with interactive charts.
              </p>
              <div className="text-xs text-slate-500 font-mono bg-slate-950 px-3 py-2 rounded border border-slate-800">
                🔒 Available with Pro subscription
              </div>
            </div>

            <div className="border border-slate-800 bg-slate-900/60 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <span className="text-xs font-semibold bg-amber-500/20 text-amber-400 px-2 py-1 rounded">
                  PRO
                </span>
              </div>
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-base font-semibold text-slate-50 mb-2">
                Top 100 Apps Per Region
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Full rankings of top 100 free, paid, and grossing apps in each market with download estimates.
              </p>
              <div className="text-xs text-slate-500 font-mono bg-slate-950 px-3 py-2 rounded border border-slate-800">
                🔒 Available with Pro subscription
              </div>
            </div>

            <div className="border border-slate-800 bg-slate-900/60 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <span className="text-xs font-semibold bg-amber-500/20 text-amber-400 px-2 py-1 rounded">
                  PRO
                </span>
              </div>
              <div className="text-2xl mb-3">💰</div>
              <h3 className="text-base font-semibold text-slate-50 mb-2">
                Revenue & Monetization Data
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Estimated revenue by region, monetization model breakdowns, and ARPU (Average Revenue Per User).
              </p>
              <div className="text-xs text-slate-500 font-mono bg-slate-950 px-3 py-2 rounded border border-slate-800">
                🔒 Available with Pro subscription
              </div>
            </div>

            <div className="border border-slate-800 bg-slate-900/60 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <span className="text-xs font-semibold bg-amber-500/20 text-amber-400 px-2 py-1 rounded">
                  PRO
                </span>
              </div>
              <div className="text-2xl mb-3">🔔</div>
              <h3 className="text-base font-semibold text-slate-50 mb-2">
                Market Movement Alerts
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Get notified when any regional market moves +/- 5%, 10%, or custom thresholds.
              </p>
              <div className="text-xs text-slate-500 font-mono bg-slate-950 px-3 py-2 rounded border border-slate-800">
                🔒 Available with Pro subscription
              </div>
            </div>
          </div>

          {/* Masked Data Preview */}
          <div className="border border-amber-500/20 bg-amber-500/5 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✨</div>
              <div>
                <h3 className="text-base font-semibold text-amber-400 mb-2">
                  Preview: United States Market Deep Dive
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Here's what Pro users see for each market (example data partially masked):
                </p>
                
                <div className="grid gap-3 md:grid-cols-3 mb-4">
                  <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800">
                    <div className="text-xs text-slate-400 mb-1">Market Cap</div>
                    <div className="text-lg font-semibold text-slate-50">$<span className="blur-sm">XX.XB</span> 🔒</div>
                  </div>
                  <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800">
                    <div className="text-xs text-slate-400 mb-1">Daily Active Users</div>
                    <div className="text-lg font-semibold text-slate-50"><span className="blur-sm">XXX</span>M 🔒</div>
                  </div>
                  <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800">
                    <div className="text-xs text-slate-400 mb-1">Avg. Session Time</div>
                    <div className="text-lg font-semibold text-slate-50"><span className="blur-sm">XX</span> min 🔒</div>
                  </div>
                </div>

                <p className="text-xs text-slate-400">
                  💡 Upgrade to Pro to see full analytics, historical trends, and detailed breakdowns for all 50+ regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Hours & Methodology */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Market Hours & Status
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">🇺🇸 North America</span>
              <span className="text-green-400 bg-green-400/10 px-2 py-1 rounded text-xs">Open</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">🇪🇺 Europe</span>
              <span className="text-slate-400 bg-slate-800/50 px-2 py-1 rounded text-xs">Closed</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">🇮🇳 Asia Pacific</span>
              <span className="text-slate-400 bg-slate-800/50 px-2 py-1 rounded text-xs">Closed</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">🇦🇪 Middle East</span>
              <span className="text-green-400 bg-green-400/10 px-2 py-1 rounded text-xs">Open</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            Market status based on local business hours. "Open" = 9 AM - 9 PM local time.
          </p>
        </div>

        <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Index Methodology
          </h2>
          <p className="text-sm text-slate-300 mb-3">
            Each regional index tracks a weighted basket of top apps in that market, measuring combined performance across:
          </p>
          <ul className="text-sm text-slate-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>Download velocity and install trends</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>User ratings and review sentiment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>Revenue signals and monetization metrics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>Social media mentions and engagement</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="border border-cyan-500/30 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-50 mb-3">
          Unlock Full Regional Analytics
        </h3>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-6">
          Get access to historical charts, top 100 rankings per region, revenue estimates, 
          market alerts, and detailed breakdowns for all global markets.
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
            Explore Market Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

