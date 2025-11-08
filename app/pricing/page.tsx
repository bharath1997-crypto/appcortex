// app/pricing/page.tsx
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { FeatureBreakdownGrid } from "@/components/pricing/FeatureBreakdownGrid";
import { RoiCalculator } from "@/components/pricing/RoiCalculator";
import { WhatsNewInPro } from "@/components/pricing/WhatsNewInPro";
import { EnterpriseSection } from "@/components/pricing/EnterpriseSection";
import { TestimonialsSection } from "@/components/pricing/TestimonialsSection";
import { PricingFaq } from "@/components/pricing/PricingFaq";

export default function PricingPage() {
  return (
    <div className="space-y-12 pb-16 animate-fade-up">
      {/* Hero Section */}
      <PricingHero />

      {/* Pricing Cards with Toggle */}
      <PricingCards />

      {/* Feature Breakdown Grid */}
      <FeatureBreakdownGrid />

      {/* ROI Calculator */}
      <RoiCalculator />

      {/* What's New in Pro */}
      <WhatsNewInPro />

      {/* Enterprise Intelligence Suite */}
      <EnterpriseSection />

      {/* Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* FAQs */}
      <PricingFaq />

      {/* Final CTA Banner */}
      <div className="border border-cyan-500/30 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-8 md:p-10 text-center">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 mb-4">
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-slate-50 mb-3">
          Join 10,000+ Developers, Investors, and Analysts
        </h3>

        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-6">
          Start with the free dashboard and upgrade when you're ready for deeper analytics, alerts, and AI recommendations.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="/signup"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-3 text-sm font-medium text-white hover:from-cyan-600 hover:to-indigo-700 transition-all shadow-lg"
          >
            Start Free
          </a>
          <a
            href="/signup?plan=pro"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors shadow-lg"
          >
            Upgrade to Pro
          </a>
          <a
            href="/contact?plan=enterprise"
            className="inline-flex items-center justify-center rounded-full border-2 border-slate-600 px-8 py-3 text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
          >
            Contact Sales
          </a>
        </div>

        <p className="text-xs text-slate-500 mt-4">
          Your first 7 days of Pro are free • Cancel anytime • No credit card required
        </p>
      </div>
    </div>
  );
}
