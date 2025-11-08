// components/auth/AuthHero.tsx
export function AuthHero() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:justify-center h-full bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-purple-500/10 p-12 rounded-l-2xl relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Dashboard Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 text-4xl animate-bounce">📊</div>
        <div className="absolute top-40 right-20 text-3xl animate-bounce delay-300">🧠</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-bounce delay-500">💡</div>
        <div className="absolute bottom-20 right-20 text-4xl animate-bounce delay-700">🚀</div>
      </div>

      <div className="relative space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
          </span>
          <span className="text-cyan-400 text-sm font-semibold">LIVE APP INTELLIGENCE</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 leading-tight">
          Unlock App Intelligence.
        </h1>

        {/* Subtext */}
        <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
          Access full analytics, AI forecasts, and personalized developer tools. 
          Join thousands of developers and investors tracking the app economy.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-cyan-400">10K+</div>
            <div className="text-xs text-slate-400">Active Users</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-indigo-400">1M+</div>
            <div className="text-xs text-slate-400">Apps Tracked</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-purple-400">24/7</div>
            <div className="text-xs text-slate-400">Live Updates</div>
          </div>
        </div>

        {/* Mock Dashboard Preview */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            <span className="text-xs text-slate-400">Your dashboard preview</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-slate-700 rounded w-3/4"></div>
            <div className="h-2 bg-slate-700 rounded w-1/2"></div>
            <div className="h-2 bg-slate-700 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

