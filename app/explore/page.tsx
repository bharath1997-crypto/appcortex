// app/explore/page.tsx
import { getExploreAppsData } from "@/lib/mockDataService";
import { ExploreHero } from "@/components/explore/ExploreHero";
import { TrendingKeywords } from "@/components/explore/TrendingKeywords";
import { EnhancedAppCard } from "@/components/explore/EnhancedAppCard";
import { Top10ByCategory } from "@/components/explore/Top10ByCategory";
import { DeveloperHighlights } from "@/components/explore/DeveloperHighlights";
import { CompareAppsWidget } from "@/components/explore/CompareAppsWidget";
import { RecentlyUpdated } from "@/components/explore/RecentlyUpdated";
import { CommunityInsights } from "@/components/explore/CommunityInsights";

interface ExplorePageProps {
  searchParams?: { q?: string };
}

export default function ExplorePage({ searchParams }: ExplorePageProps) {
  const query = searchParams?.q ?? "";
  const { items: apps, total } = getExploreAppsData(query);

  return (
    <div className="space-y-8 pb-10 animate-fade-up">
      {/* Hero Section with Search */}
      <ExploreHero initialQuery={query} />

      {/* Trending Keywords Bar */}
      <TrendingKeywords />

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] gap-6">
        {/* Left Column: Search Results & Main Content */}
        <div className="space-y-8">
          {/* Search Results Grid */}
          {query && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-400">
                  Showing <span className="text-slate-200 font-semibold">{total}</span> results
                  {query && (
                    <>
                      {" "}for <span className="text-cyan-400">&ldquo;{query}&rdquo;</span>
                    </>
                  )}
                </div>
                <select className="rounded-lg bg-slate-800/60 border border-slate-700 px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option>Sort by: Relevance</option>
                  <option>Sort by: Downloads</option>
                  <option>Sort by: Rating</option>
                  <option>Sort by: Trend</option>
                  <option>Sort by: Newest</option>
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {apps.map((app) => (
                  <EnhancedAppCard key={app.id} app={app} showBadges />
                ))}
              </div>

              {/* Pagination */}
              {total > 10 && (
                <div className="flex justify-center gap-2 pt-4">
                  <button className="px-3 py-1.5 rounded-lg border border-slate-700 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                    ◄ Prev
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-900 text-sm font-medium">
                    1
                  </button>
                  <button className="px-3 py-1.5 rounded-lg border border-slate-700 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                    2
                  </button>
                  <button className="px-3 py-1.5 rounded-lg border border-slate-700 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                    3
                  </button>
                  <button className="px-3 py-1.5 rounded-lg border border-slate-700 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                    Next ►
                  </button>
                </div>
              )}
            </section>
          )}

          {/* Top 10 by Category */}
          <Top10ByCategory />

          {/* Developer Highlights */}
          <DeveloperHighlights />
        </div>

        {/* Right Sidebar: Widgets */}
        <aside className="space-y-6">
          {/* Compare Apps Widget */}
          <CompareAppsWidget />

          {/* Recently Updated Apps */}
          <RecentlyUpdated />

          {/* Community Insights */}
          <CommunityInsights />
        </aside>
      </div>

      {/* CTA Banner */}
      <div className="border border-cyan-500/30 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-6 md:p-8 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-2">
          Want deeper analytics, retention charts, and revenue estimates?
        </h3>
        <p className="text-sm text-slate-300 mb-4 max-w-2xl mx-auto">
          Unlock historical data, AI-powered insights, competitor benchmarks, and advanced filters with AppCortex Pro
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-cyan-400 transition-colors"
          >
            Sign In for Free
          </a>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
          >
            Compare Plans
          </a>
        </div>
      </div>
    </div>
  );
}
