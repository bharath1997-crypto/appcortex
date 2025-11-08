// components/pricing/PricingFaq.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui";

const faqs = [
  {
    id: 1,
    question: "Do I need a credit card for the Free plan?",
    answer: "No. Sign up with just your email and start exploring immediately. No payment information required.",
  },
  {
    id: 2,
    question: "Can I cancel anytime?",
    answer: "Yes, absolutely. No hidden fees, no commitments. You can downgrade, upgrade, or cancel your subscription at any time from your account dashboard.",
  },
  {
    id: 3,
    question: "Do you offer student or startup discounts?",
    answer: "Yes! We offer up to 50% discount for verified students and early-stage startups (less than 2 years old). Contact sales@appcortex.com with proof of enrollment or incorporation.",
  },
  {
    id: 4,
    question: "How often is data refreshed?",
    answer: "Free plan: Daily updates. Pro plan: Every 45 minutes to 3 hours depending on the data type. Enterprise: Real-time updates with custom refresh intervals.",
  },
  {
    id: 5,
    question: "Is my data private and secure?",
    answer: "100% secure. We use industry-standard encryption (AES-256) and never sell or share your data with third parties. All data is stored in SOC 2 compliant infrastructure.",
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and bank transfers for Enterprise plans. Annual plans can be invoiced directly.",
  },
  {
    id: 7,
    question: "Can I switch plans mid-cycle?",
    answer: "Yes. Upgrades take effect immediately with pro-rated billing. Downgrades take effect at the end of your current billing period.",
  },
  {
    id: 8,
    question: "Do you offer a money-back guarantee?",
    answer: "Yes. If you're not satisfied with Pro within the first 7 days, we'll refund you in full, no questions asked.",
  },
];

export function PricingFaq() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="space-y-6 max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-400">
          Everything you need to know about pricing and plans
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <Card key={faq.id} className="p-4 bg-slate-900/60">
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="w-full flex items-start justify-between gap-4 text-left"
            >
              <span className="text-sm md:text-base font-semibold text-slate-100">
                {faq.question}
              </span>
              <svg
                className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform ${
                  openId === faq.id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openId === faq.id && (
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </Card>
        ))}
      </div>

      <div className="text-center pt-6">
        <p className="text-sm text-slate-400 mb-3">
          Still have questions?
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>Contact Support</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

