// app/insights/page.tsx
import { InsightsHero } from "@/components/insights/InsightsHero";
import { TopHeadlines } from "@/components/insights/TopHeadlines";
import { FeaturedReports } from "@/components/insights/FeaturedReports";
import { AiInsightsOfDay } from "@/components/insights/AiInsightsOfDay";
import { CategoryDeepDives } from "@/components/insights/CategoryDeepDives";
import { MonetizationReports } from "@/components/insights/MonetizationReports";
import { DeveloperStoriesSection } from "@/components/insights/DeveloperStoriesSection";
import { ResearchHub } from "@/components/insights/ResearchHub";
import { NewsletterSignup } from "@/components/insights/NewsletterSignup";

export default async function InsightsPage() {
  return (
    <div className="space-y-8 pb-10 animate-fade-up">
      {/* Hero Section */}
      <InsightsHero />

      {/* Top Headlines Carousel */}
      <TopHeadlines />

      {/* Featured Reports */}
      <FeaturedReports />

      {/* AI Insights of the Day */}
      <AiInsightsOfDay />

      {/* Category Deep Dives */}
      <CategoryDeepDives />

      {/* Monetization & Economy Reports */}
      <MonetizationReports />

      {/* Developer Stories */}
      <DeveloperStoriesSection />

      {/* Research Hub */}
      <ResearchHub />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Data Summary Footer */}
      <div className="border-t border-slate-800 pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div>
            <div className="text-2xl font-bold text-cyan-400">250+</div>
            <div className="text-xs text-slate-400">Published Reports</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">24/7</div>
            <div className="text-xs text-slate-400">AI Analysis</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">15min</div>
            <div className="text-xs text-slate-400">Update Cycle</div>
          </div>
          <div>
            <div className="text-xs font-medium text-emerald-400 mb-1">LIVE</div>
            <div className="text-[10px] text-slate-500">
              Updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="border border-cyan-500/30 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-6 md:p-8 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-2">
          Unlock Premium Research & Deep Analytics
        </h3>
        <p className="text-sm text-slate-300 mb-4 max-w-2xl mx-auto">
          Get access to full reports, historical data, custom forecasts, and exclusive developer interviews with AppCortex Pro
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-cyan-400 transition-colors"
          >
            Upgrade to Pro
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
