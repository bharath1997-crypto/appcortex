"use client";

import { useState } from "react";
import { getOpportunities } from "@/lib/mockDataService";
import Link from "next/link";

export default function OpportunitiesPage() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [sortBy, setSortBy] = useState("score");
  
  const opportunities = getOpportunities();
  
  // Filter and sort
  let filteredOpps = opportunities;
  
  if (categoryFilter !== "all") {
    filteredOpps = filteredOpps.filter(opp => opp.category === categoryFilter);
  }
  
  if (difficultyFilter !== "all") {
    filteredOpps = filteredOpps.filter(opp => opp.difficulty === difficultyFilter);
  }
  
  if (sortBy === "score") {
    filteredOpps = [...filteredOpps].sort((a, b) => b.potentialScore - a.potentialScore);
  } else if (sortBy === "searches") {
    filteredOpps = [...filteredOpps].sort((a, b) => b.monthlySearches - a.monthlySearches);
  }

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Low": return "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400";
      case "Medium": return "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400";
      case "High": return "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400";
      default: return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-emerald-600 dark:text-emerald-400";
    if (score >= 80) return "text-cyan-600 dark:text-cyan-400";
    if (score >= 70) return "text-amber-600 dark:text-amber-400";
    return "text-slate-600 dark:text-slate-400";
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 border-b border-indigo-200 dark:border-indigo-900/50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-800 mb-4">
              <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                AI-Powered Intelligence
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-4 tracking-tight">
              Opportunity Finder
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              AI-analyzed app ideas with <span className="font-semibold text-indigo-600 dark:text-indigo-400">high growth potential</span> and <span className="font-semibold text-emerald-600 dark:text-emerald-400">low competition</span>. Launch your next big idea with data-backed validation.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-indigo-200 dark:border-indigo-900/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{opportunities.length}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Opportunities</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-purple-200 dark:border-purple-900/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">94%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Top Score</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-emerald-200 dark:border-emerald-900/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">6-12mo</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Avg Launch</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-cyan-200 dark:border-cyan-900/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">$25K</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Avg Investment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
          <div className="flex flex-wrap gap-3">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 text-sm rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Categories</option>
              <option value="Health & Fitness">Health & Fitness</option>
              <option value="Education">Education</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="Shopping & AR">Shopping & AR</option>
              <option value="Lifestyle & Environment">Lifestyle & Environment</option>
            </select>

            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="px-4 py-2 text-sm rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Difficulty Levels</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 text-sm rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="score">Sort by: Potential Score</option>
              <option value="searches">Sort by: Search Volume</option>
            </select>
          </div>

          <div className="text-sm text-slate-600 dark:text-slate-400">
            Showing <span className="font-semibold text-slate-900 dark:text-slate-50">{filteredOpps.length}</span> opportunities
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredOpps.map((opp) => (
            <Link
              key={opp.id}
              href={`/opportunities/${opp.id}`}
              className="group block bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all hover:shadow-xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`text-5xl font-bold ${getScoreColor(opp.potentialScore)}`}>
                  {opp.potentialScore}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(opp.difficulty)}`}>
                  {opp.difficulty}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                {opp.title}
              </h3>

              {/* Category & Region */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                  {opp.category}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300">
                  🌍 {opp.region}
                </span>
              </div>

              {/* Key Metrics */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                  <span>Monthly Searches</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-50">
                    {opp.monthlySearches.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                  <span>Competition</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-50">
                    {opp.existingApps} apps
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                  <span>Est. Dev Time</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-50">
                    {opp.estimatedDevTime}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                  View Full Analysis
                </span>
                <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Get Unlimited Access to Opportunity Reports
          </h2>
          <p className="text-lg mb-6 text-indigo-100 max-w-2xl mx-auto">
            Unlock detailed market analysis, competitor insights, and go-to-market strategies for every opportunity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              View Pricing Plans
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

