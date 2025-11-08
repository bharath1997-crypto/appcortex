// app/auth/page.tsx
import { AuthHero } from "@/components/auth/AuthHero";
import { AuthTabs } from "@/components/auth/AuthTabs";
import { TrustMarkers } from "@/components/auth/TrustMarkers";
import { WhyJoinSection } from "@/components/auth/WhyJoinSection";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col animate-fade-up">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 pt-8">
        <div className="w-full max-w-6xl">
          {/* Main Auth Container */}
          <div className="grid lg:grid-cols-2 gap-0 border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-sm shadow-2xl">
            {/* Left: Hero/Visual */}
            <AuthHero />

            {/* Right: Form Area */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {/* Logo (mobile only) */}
              <div className="lg:hidden mb-6 text-center">
                <h1 className="text-2xl font-bold text-slate-50">AppCortex</h1>
                <p className="text-sm text-slate-400">Global App Market Intelligence</p>
              </div>

              {/* Auth Tabs */}
              <AuthTabs />

              {/* Trust Markers */}
              <TrustMarkers />
            </div>
          </div>

          {/* Why Join Section */}
          <WhyJoinSection />
        </div>
      </main>

    </div>
  );
}

