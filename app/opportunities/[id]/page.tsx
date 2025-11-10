import { getOpportunityById } from "@/lib/mockDataService";
import Link from "next/link";
import { notFound } from "next/navigation";

interface OpportunityDetailPageProps {
  params: { id: string };
}

export default function OpportunityDetailPage({ params }: OpportunityDetailPageProps) {
  const opportunity = getOpportunityById(params.id);

  if (!opportunity) {
    notFound();
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "from-emerald-500 to-emerald-600";
    if (score >= 80) return "from-cyan-500 to-cyan-600";
    if (score >= 70) return "from-amber-500 to-amber-600";
    return "from-slate-500 to-slate-600";
  };

  const getLevelColor = (level: string) => {
    switch(level) {
      case "High": return "text-emerald-600 dark:text-emerald-400";
      case "Medium": return "text-amber-600 dark:text-amber-400";
      case "Low": return "text-rose-600 dark:text-rose-400";
      default: return "text-slate-600 dark:text-slate-400";
    }
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Link href="/opportunities" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Opportunities
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-50">{opportunity.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 border border-indigo-200 dark:border-indigo-900/50 rounded-2xl p-8 sm:p-12">
          {/* Score Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`inline-flex items-center justify-center h-24 w-24 rounded-2xl bg-gradient-to-br ${getScoreColor(opportunity.potentialScore)} shadow-lg`}>
              <div className="text-center text-white">
                <div className="text-4xl font-bold">{opportunity.potentialScore}</div>
                <div className="text-xs uppercase tracking-wide">Score</div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                  {opportunity.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300">
                  {opportunity.region}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  opportunity.difficulty === "Low" 
                    ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300"
                    : opportunity.difficulty === "Medium"
                    ? "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300"
                    : "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300"
                }`}>
                  {opportunity.difficulty} Difficulty
                </span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            {opportunity.title}
          </h1>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl p-4 border border-indigo-200 dark:border-indigo-900/50">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {opportunity.monthlySearches.toLocaleString()}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Monthly Searches</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl p-4 border border-purple-200 dark:border-purple-900/50">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {opportunity.existingApps}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Existing Apps</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl p-4 border border-emerald-200 dark:border-emerald-900/50">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {opportunity.gapAnalysis.marketSaturation}%
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Market Saturation</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl p-4 border border-cyan-200 dark:border-cyan-900/50">
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                +{opportunity.gapAnalysis.growthTrend}%
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Growth Trend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Key Insights */}
            <section className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                🔍 Key Insights
              </h2>
              <ul className="space-y-3">
                {opportunity.keyInsights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 dark:text-slate-300">{insight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Gap Analysis */}
            <section className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                📊 Gap Analysis
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Demand Level</span>
                    <span className={`text-lg font-bold ${getLevelColor(opportunity.gapAnalysis.demandLevel)}`}>
                      {opportunity.gapAnalysis.demandLevel}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        opportunity.gapAnalysis.demandLevel === "High" ? "bg-emerald-500" :
                        opportunity.gapAnalysis.demandLevel === "Medium" ? "bg-amber-500" : "bg-rose-500"
                      }`}
                      style={{ width: opportunity.gapAnalysis.demandLevel === "High" ? "90%" : opportunity.gapAnalysis.demandLevel === "Medium" ? "60%" : "30%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Competition Level</span>
                    <span className={`text-lg font-bold ${getLevelColor(opportunity.gapAnalysis.competitionLevel)}`}>
                      {opportunity.gapAnalysis.competitionLevel}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        opportunity.gapAnalysis.competitionLevel === "Low" ? "bg-emerald-500" :
                        opportunity.gapAnalysis.competitionLevel === "Medium" ? "bg-amber-500" : "bg-rose-500"
                      }`}
                      style={{ width: opportunity.gapAnalysis.competitionLevel === "High" ? "90%" : opportunity.gapAnalysis.competitionLevel === "Medium" ? "60%" : "30%" }}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Suggested Features */}
            <section className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                💡 Suggested Features
              </h2>
              <div className="flex flex-wrap gap-2">
                {opportunity.suggestedFeatures.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium border border-indigo-200 dark:border-indigo-800"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            {/* Required Skills */}
            <section className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                🛠️ Required Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {opportunity.requiredSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium border border-purple-200 dark:border-purple-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Monetization Potential */}
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-950/30 dark:to-cyan-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4">
                💰 Monetization Potential
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Model</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">{opportunity.monetizationPotential.model}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Est. ARPU</div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{opportunity.monetizationPotential.estimatedARPU}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Time to Profit</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">{opportunity.monetizationPotential.timeToProfit}</div>
                </div>
              </div>
            </div>

            {/* Project Timeline */}
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4">
                ⏱️ Project Timeline
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Development Time</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">{opportunity.estimatedDevTime}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Launch Window</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">{opportunity.timeframe}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Investment Required</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">{opportunity.investmentRequired}</div>
                </div>
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-3">
                🎯 Target Audience
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">{opportunity.targetAudience}</p>
              <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Market Size</div>
              <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{opportunity.marketSize}</div>
            </div>

            {/* CTA Button */}
            <Link
              href="/pricing"
              className="block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-center shadow-lg transition-all"
            >
              Get Full Market Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

