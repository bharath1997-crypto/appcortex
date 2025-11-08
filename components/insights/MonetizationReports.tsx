// components/insights/MonetizationReports.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui";
import Link from "next/link";

const tabs = ["Revenue Models", "Ad Trends", "Subscriptions"] as const;

const content = {
  "Revenue Models": [
    {
      title: "Freemium vs. Premium Performance",
      stat: "63% / 37%",
      insight: "Freemium apps account for 63% of global installs but only 37% of total revenue.",
      icon: "💡",
    },
    {
      title: "In-App Purchase Dominance",
      stat: "$127B",
      insight: "IAP revenue reached $127B in 2025, driven by gaming and health apps.",
      icon: "💰",
    },
    {
      title: "One-Time Purchase Decline",
      stat: "-12.4%",
      insight: "Paid apps continue decline as subscription models take market share.",
      icon: "📉",
    },
  ],
  "Ad Trends": [
    {
      title: "Rewarded Video Growth",
      stat: "+28%",
      insight: "Rewarded video ads see highest engagement in gaming and utility apps.",
      icon: "📺",
    },
    {
      title: "Banner Ad Fatigue",
      stat: "-15%",
      insight: "Traditional banner ads show declining CTR as users develop ad blindness.",
      icon: "📊",
    },
    {
      title: "Native Ad Adoption",
      stat: "+19%",
      insight: "Native advertising integrations outperform traditional display formats.",
      icon: "🎯",
    },
  ],
  Subscriptions: [
    {
      title: "Subscription Model Surge",
      stat: "+34%",
      insight: "Subscription models outperform in health, productivity, and finance segments.",
      icon: "♾️",
    },
    {
      title: "Average ARPU Growth",
      stat: "$8.42",
      insight: "Average revenue per user increased to $8.42/month for subscription apps.",
      icon: "💵",
    },
    {
      title: "Retention Advantage",
      stat: "2.3×",
      insight: "Subscription apps show 2.3× better day-90 retention than freemium.",
      icon: "📈",
    },
  ],
};

export function MonetizationReports() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Revenue Models");

  const items = content[activeTab];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
          Monetization & Economy
        </h2>
        <Link
          href="/insights/monetization"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Full Analysis →
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "bg-cyan-500 text-slate-900"
                : "bg-slate-800/60 text-slate-300 hover:text-slate-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <Card key={index} className="p-5 bg-slate-900/60">
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-2xl font-bold text-cyan-400">
                {item.stat}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-slate-50 mb-2">
              {item.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {item.insight}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

