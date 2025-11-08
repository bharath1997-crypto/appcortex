// app/developers/page.tsx
import { DevelopersHero } from "@/components/developers/DevelopersHero";
import { FeaturedDeveloper } from "@/components/developers/FeaturedDeveloper";
import { StoriesFeed } from "@/components/developers/StoriesFeed";
import { DeveloperLeaderboard } from "@/components/developers/DeveloperLeaderboard";
import { SdkToolsSection } from "@/components/developers/SdkToolsSection";
import { DeveloperInsights } from "@/components/developers/DeveloperInsights";
import { CommunityDiscussions } from "@/components/developers/CommunityDiscussions";
import { PartnerNetwork } from "@/components/developers/PartnerNetwork";

export default async function DevelopersPage() {
  return (
    <div className="space-y-8 pb-10 animate-fade-up">
      {/* Hero Section */}
      <DevelopersHero />

      {/* Featured Developer of the Week */}
      <FeaturedDeveloper />

      {/* Developer Stories Feed */}
      <StoriesFeed />

      {/* Top Developers Leaderboard */}
      <DeveloperLeaderboard />

      {/* Developer Tools & SDKs */}
      <SdkToolsSection />

      {/* Developer Insights (AI) */}
      <DeveloperInsights />

      {/* Community Discussions */}
      <CommunityDiscussions />

      {/* Partner Network */}
      <PartnerNetwork />

      {/* Join the Developer Hub CTA */}
      <div className="border border-purple-500/30 rounded-2xl bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10 p-6 md:p-8 text-center">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-purple-500 to-cyan-600 mb-4">
          <svg
            className="h-7 w-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-2">
          Build Smarter with AppCortex Developer Hub
        </h3>

        <p className="text-sm text-slate-300 mb-4 max-w-2xl mx-auto">
          Access competitor tracking, SDK insights, early beta tools, and connect with 12K+ developers building the future of apps.
        </p>

        <div className="flex justify-center gap-3">
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2.5 text-sm font-medium text-white hover:from-purple-600 hover:to-cyan-600 transition-all shadow-lg"
          >
            Join Now (Free)
          </a>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
          >
            View Developer Pricing
          </a>
        </div>
      </div>

      {/* Data Summary Footer */}
      <div className="border-t border-slate-800 pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div>
            <div className="text-2xl font-bold text-purple-400">12K+</div>
            <div className="text-xs text-slate-400">Active Developers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">450+</div>
            <div className="text-xs text-slate-400">Success Stories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">85+</div>
            <div className="text-xs text-slate-400">Partner SDKs</div>
          </div>
          <div>
            <div className="text-xs font-medium text-emerald-400 mb-1">LIVE</div>
            <div className="text-[10px] text-slate-500">
              Updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
