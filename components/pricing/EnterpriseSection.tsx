// components/pricing/EnterpriseSection.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui";

export function EnterpriseSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Card className="p-8 md:p-10 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left: Value Proposition */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-3">
              Enterprise Intelligence Suite
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              For VCs, large studios, and agencies managing 100+ apps. Get full data access, custom dashboards, and API integration.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1">
                  Custom Data Pipelines
                </h3>
                <p className="text-xs text-slate-400">
                  Tailored analytics workflows that match your investment thesis or portfolio strategy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1">
                  Dedicated Account Manager
                </h3>
                <p className="text-xs text-slate-400">
                  Personal onboarding, training, and ongoing support from our team.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1">
                  White-Label Access
                </h3>
                <p className="text-xs text-slate-400">
                  Rebrand and embed AppCortex analytics into your own platform.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700">
            <a
              href="/nda-template.pdf"
              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download NDA Template</span>
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-800">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-amber-500 px-6 py-3 text-sm font-medium text-slate-900 hover:bg-amber-400 transition-colors"
              >
                Request Demo
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <svg className="h-16 w-16 text-emerald-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">
                Request Received!
              </h3>
              <p className="text-sm text-slate-400">
                We'll be in touch within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

