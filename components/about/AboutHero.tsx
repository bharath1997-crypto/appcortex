// components/about/AboutHero.tsx
import Link from "next/link";
import { Button } from "@/components/ui";

export function AboutHero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-12 md:p-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Floating Network Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 text-4xl animate-bounce">🌍</div>
        <div className="absolute top-40 right-20 text-3xl animate-bounce delay-300">📱</div>
        <div className="absolute bottom-40 left-1/4 text-3xl animate-bounce delay-500">🔗</div>
        <div className="absolute bottom-20 right-1/3 text-4xl animate-bounce delay-700">💡</div>
      </div>

      <div className="relative text-center space-y-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30">
          <span className="text-cyan-400 text-sm font-semibold">🏢 ABOUT APPCORTEX</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 leading-tight">
          Empowering the World to Understand the App Economy
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          AppCortex combines data, AI, and human insight to decode the digital marketplace — 
          helping developers, investors, and innovators make smarter decisions.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button asChild variant="primary">
            <Link href="/market">
              Explore Live Data →
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/developers">
              Join Developer Hub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

