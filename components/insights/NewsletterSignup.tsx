// components/insights/NewsletterSignup.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Connect to newsletter API
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <Card className="p-6 md:p-8 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border-cyan-500/30">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 mb-2">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-slate-50">
          Stay Ahead of App Market Trends
        </h3>

        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Get the weekly AppCortex Digest with top insights, category reports, 
          and AI analyses delivered to your inbox every Monday.
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full bg-slate-800/60 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-cyan-400 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 text-emerald-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">Thanks for subscribing!</span>
          </div>
        )}

        <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="rounded border-slate-600" />
            <span>Weekly digest</span>
          </label>
          <span>•</span>
          <a href="/insights/archive" className="hover:text-cyan-400 transition-colors">
            Read past digests
          </a>
        </div>
      </div>
    </Card>
  );
}

