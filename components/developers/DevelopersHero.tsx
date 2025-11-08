// components/developers/DevelopersHero.tsx
import Link from "next/link";

export function DevelopersHero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-cyan-500/10 p-8 md:p-12">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Animated Developer Avatars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 text-4xl animate-bounce">🧑‍💻</div>
        <div className="absolute top-20 right-20 text-3xl animate-bounce delay-300">👩‍💻</div>
        <div className="absolute bottom-20 left-20 text-3xl animate-bounce delay-500">🎮</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-bounce delay-700">💡</div>
      </div>

      <div className="relative text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30">
          <span className="text-purple-400 text-sm font-semibold">🚀 DEVELOPER HUB</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-50 max-w-4xl mx-auto">
          Empowering Every Developer to Build Smarter, Scale Faster
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-lg text-slate-300 max-w-3xl mx-auto">
          Discover stories, insights, and tools from the world's fastest-growing app creators.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <Link
            href="/developers/join"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white hover:from-purple-600 hover:to-cyan-600 transition-all shadow-lg"
          >
            Join Developer Hub
          </Link>
          <Link
            href="/developers/submit"
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
          >
            Submit Your Story
          </Link>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">12K+</div>
            <div className="text-xs text-slate-400">Active Developers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">450+</div>
            <div className="text-xs text-slate-400">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">85+</div>
            <div className="text-xs text-slate-400">Partner SDKs</div>
          </div>
        </div>
      </div>
    </div>
  );
}

