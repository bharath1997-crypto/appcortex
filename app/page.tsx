import { AppCard } from "@/components/AppCard";
import HeroIndexServer from "@/components/HeroIndexServer";
import { AiSnapshotOfDay } from "@/components/home/AiSnapshotOfDay";
import { DeveloperSpotlight } from "@/components/home/DeveloperSpotlight";
import { SearchPreview } from "@/components/home/SearchPreview";
import { ProAppListsSection } from "@/components/ProAppListsSection";
import { MarketActionSection } from "@/components/MarketActionSection";
import { GlobalMarketsSection } from "@/components/GlobalMarketsSection";
import { ActivityTrackerSection } from "@/components/ActivityTrackerSection";
import { InsightsSection } from "@/components/InsightsSection";
import { HomeCtaSection } from "@/components/HomeCtaSection";
import { mockTopApps } from "@/lib/mockData";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Index - Full width, spans beyond main container - NOW WITH BACKEND */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 -mt-6">
        <HeroIndexServer />
      </div>

      {/* Content sections with spacing */}
      <div className="space-y-8 pt-8">

      {/* AI Snapshot of the Day - NEW FEATURE */}
      <AiSnapshotOfDay />

      {/* Top apps today */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-50">
            Top rising apps today
          </h2>
          <Link
            href="/topcharts"
            className="text-xs text-cyan-300 hover:text-cyan-200"
          >
            View full top charts →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockTopApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Pro App Lists */}
      <ProAppListsSection />

      {/* Market Action */}
      <MarketActionSection />

      {/* Developer Spotlight - NEW FEATURE */}
      <DeveloperSpotlight />

      {/* Global Markets */}
      <GlobalMarketsSection />

      {/* Activity Tracker */}
      <ActivityTrackerSection />

      {/* Latest Insights */}
      <InsightsSection />

      {/* Search Preview - NEW FEATURE */}
      <SearchPreview />

      {/* Who we serve */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          Built for creators, operators, and investors.
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
            <div className="font-medium text-slate-100">Developers</div>
            <p className="mt-2 text-slate-300">
              Discover niches, compare competitors, and see where your app fits
              in the global market before you ship.
            </p>
          </div>
          <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
            <div className="font-medium text-slate-100">Product teams</div>
            <p className="mt-2 text-slate-300">
              Track categories, sentiment, and feature gaps with AI summaries,
              not spreadsheets and guesswork.
            </p>
          </div>
          <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
            <div className="font-medium text-slate-100">Investors</div>
            <p className="mt-2 text-slate-300">
              Spot emerging categories and breakout apps across regions using
              transparent, comparable metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <HomeCtaSection />
      </div>
    </div>
  );
}
