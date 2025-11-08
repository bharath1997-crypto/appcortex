// components/pricing/PricingCards.tsx
"use client";

import { useState } from "react";
import { Card, Badge } from "@/components/ui";
import Link from "next/link";

const plans = {
  monthly: {
    free: { price: "Free", period: "", save: "" },
    pro: { price: "$29", period: "/month", save: "" },
    enterprise: { price: "Custom", period: "", save: "" },
  },
  yearly: {
    free: { price: "Free", period: "", save: "" },
    pro: { price: "$23", period: "/month", save: "Save 20%" },
    enterprise: { price: "Custom", period: "", save: "" },
  },
};

const features = [
  { name: "Live Market Data", free: "Basic Charts", pro: "Advanced Charts", enterprise: "Custom Dashboards" },
  { name: "Category Trends", free: "Weekly", pro: "Hourly", enterprise: "Real-time + Alerts" },
  { name: "App Search", free: "Limited", pro: "Full", enterprise: "Unlimited" },
  { name: "AI Insights", free: "Sample Only", pro: "Full Access", enterprise: "Custom Forecast Models" },
  { name: "Developer Stories", free: "Public Access", pro: "Submit & Engage", enterprise: "Featured Promotion" },
  { name: "SDK Analytics", free: "Summary", pro: "Full Breakdown", enterprise: "Integration API" },
  { name: "API Access", free: false, pro: "Limited", enterprise: "Full (JSON/CSV)" },
  { name: "Exports (CSV/PDF)", free: false, pro: true, enterprise: "Bulk/Scheduled" },
  { name: "Team Seats", free: "1", pro: "5", enterprise: "Unlimited" },
  { name: "Support", free: "Email Only", pro: "Priority Email", enterprise: "Dedicated Manager" },
];

export function PricingCards() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const pricing = plans[billingCycle];

  return (
    <section className="space-y-6">
      {/* Billing Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-800/60 border border-slate-700">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              billingCycle === "monthly"
                ? "bg-cyan-500 text-slate-900"
                : "text-slate-300 hover:text-slate-100"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              billingCycle === "yearly"
                ? "bg-cyan-500 text-slate-900"
                : "text-slate-300 hover:text-slate-100"
            }`}
          >
            Yearly
            {billingCycle === "yearly" && (
              <Badge variant="emerald" className="ml-2 text-[8px]">
                Save 20%
              </Badge>
            )}
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Free Plan */}
        <Card className="p-6 md:p-7 bg-slate-900/60 flex flex-col">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-50 mb-2">Free</h3>
            <p className="text-xs text-slate-400 mb-4">
              Perfect for exploring app market data
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-slate-50">{pricing.free.price}</span>
            </div>
          </div>

          <ul className="space-y-3 mb-6 flex-1">
            {features.slice(0, 5).map((feature) => (
              <li key={feature.name} className="flex items-start gap-2 text-sm">
                {feature.free ? (
                  <svg className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                <span className="text-slate-300">{feature.name}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/signup"
            className="block w-full rounded-full border border-slate-600 px-6 py-3 text-center text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
          >
            Start for Free
          </Link>
        </Card>

        {/* Pro Plan - Featured */}
        <Card className="p-6 md:p-7 bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-700 flex flex-col relative overflow-hidden border-2 border-cyan-400 shadow-xl">
          <div className="absolute top-4 right-4">
            <Badge variant="amber" className="text-[9px]">
              POPULAR
            </Badge>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
            <p className="text-xs text-white/80 mb-4">
              For serious developers and small teams
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">{pricing.pro.price}</span>
              <span className="text-white/80">{pricing.pro.period}</span>
            </div>
            {pricing.pro.save && (
              <div className="text-xs text-emerald-300 font-medium mt-1">
                {pricing.pro.save}
              </div>
            )}
          </div>

          <ul className="space-y-3 mb-6 flex-1">
            {features.slice(0, 8).map((feature) => (
              <li key={feature.name} className="flex items-start gap-2 text-sm">
                <svg className="h-5 w-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">{feature.name}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/signup?plan=pro"
            className="block w-full rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-lg"
          >
            Upgrade to Pro
          </Link>
          <p className="text-xs text-white/70 text-center mt-3">
            7-day free trial • Cancel anytime
          </p>
        </Card>

        {/* Enterprise Plan */}
        <Card className="p-6 md:p-7 bg-slate-800/80 flex flex-col border-amber-500/30">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-50 mb-2">Enterprise</h3>
            <p className="text-xs text-slate-400 mb-4">
              For agencies, VCs, and large studios
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-slate-50">{pricing.enterprise.price}</span>
            </div>
          </div>

          <ul className="space-y-3 mb-6 flex-1">
            {features.map((feature) => (
              <li key={feature.name} className="flex items-start gap-2 text-sm">
                <svg className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-300">{feature.name}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact?plan=enterprise"
            className="block w-full rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-slate-900 hover:bg-amber-400 transition-colors"
          >
            Contact Sales
          </Link>
        </Card>
      </div>
    </section>
  );
}

