// components/pricing/PricingHero.tsx
export function PricingHero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-purple-500/10 p-8 md:p-12">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-0 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Data Graph Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 text-3xl animate-bounce">📊</div>
        <div className="absolute top-20 right-20 text-2xl animate-bounce delay-300">📈</div>
        <div className="absolute bottom-20 left-20 text-2xl animate-bounce delay-500">💡</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-bounce delay-700">🚀</div>
      </div>

      <div className="relative text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30">
          <span className="text-cyan-400 text-sm font-semibold">💰 PRICING</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-50 max-w-4xl mx-auto">
          From Basic Data to Full-Scale App Intelligence
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-lg text-slate-300 max-w-3xl mx-auto">
          All plans include real-time data updates, developer insights, and AI-powered summaries. Scale up anytime.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>7-day Pro trial</span>
          </div>
        </div>
      </div>
    </div>
  );
}

