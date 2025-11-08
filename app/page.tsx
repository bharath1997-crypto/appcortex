import { EnhancedAcxHero } from "@/components/home-v2/EnhancedAcxHero";
import { LiveMetricsCards } from "@/components/home-v2/LiveMetricsCards";
import { AiSnapshotOfDay } from "@/components/home-v2/AiSnapshotOfDay";
import { RisingAppsOfDay } from "@/components/home-v2/RisingAppsOfDay";
import { ProAppsList } from "@/components/home-v2/ProAppsList";
import { AppMarketActions } from "@/components/home-v2/AppMarketActions";
import { CortexGamesIndex } from "@/components/home-v2/CortexGamesIndex";
import { HomeCtaSection } from "@/components/HomeCtaSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 1. Enhanced ACX Index Hero */}
      <EnhancedAcxHero />

      {/* 2. Live Metrics Counter Cards */}
      <LiveMetricsCards />

      {/* 3. AI Snapshot of the Day */}
      <AiSnapshotOfDay />

      {/* 4. Rising Apps of the Day */}
      <RisingAppsOfDay />

      {/* 5. Pro Apps List (High Potential / Profit / Turnaround) */}
      <ProAppsList />

      {/* 6. App Market Actions (Advancing / Declining Categories) */}
      <AppMarketActions />

      {/* 7. Cortex Games Index */}
      <CortexGamesIndex />

      {/* Final CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HomeCtaSection />
      </div>

      {/* Who we serve section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          Built for creators, operators, and investors.
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900/40 hover:border-cyan-400 dark:hover:border-cyan-500 transition-colors">
            <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Developers
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Discover niches, compare competitors, and see where your app fits
              in the global market before you ship.
            </p>
          </div>
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900/40 hover:border-cyan-400 dark:hover:border-cyan-500 transition-colors">
            <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Product teams
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Track categories, sentiment, and feature gaps with AI summaries,
              not spreadsheets and guesswork.
            </p>
          </div>
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900/40 hover:border-cyan-400 dark:hover:border-cyan-500 transition-colors">
            <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Investors
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Spot emerging categories and breakout apps across regions using
              transparent, comparable metrics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
