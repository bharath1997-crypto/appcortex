// components/insights/InsightsHero.tsx
export function InsightsHero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 md:p-12">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative text-center space-y-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30">
          <span className="text-cyan-400 text-sm font-semibold">🧠 LIVE INTELLIGENCE</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-50 max-w-4xl mx-auto">
          The Live Intelligence Feed of the Global App Economy
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-lg text-slate-300 max-w-3xl mx-auto">
          AppCortex Insights brings you real-time trends, AI-generated analyses, 
          and expert commentary from millions of data points.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">250+</div>
            <div className="text-xs text-slate-400">Reports Published</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">24/7</div>
            <div className="text-xs text-slate-400">AI Analysis</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">15min</div>
            <div className="text-xs text-slate-400">Update Cycle</div>
          </div>
        </div>
      </div>
    </div>
  );
}

