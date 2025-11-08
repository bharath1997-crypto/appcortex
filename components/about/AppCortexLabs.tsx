// components/about/AppCortexLabs.tsx
import { Section, Card } from "@/components/ui";
import Link from "next/link";

export function AppCortexLabs() {
  return (
    <Section title="AppCortex Labs" description="Our research wing for the future of app intelligence">
      <Card className="p-8 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-cyan-500/10 border-purple-500/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-10 left-10 text-8xl">🔬</div>
          <div className="absolute bottom-10 right-10 text-8xl">🧪</div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
            <span className="text-purple-400 text-xs font-semibold">🔬 RESEARCH & INNOVATION</span>
          </div>

          {/* Main Text */}
          <p className="text-lg text-slate-200 leading-relaxed">
            AppCortex Labs is our research wing focused on predictive modeling, cross-platform analytics, 
            and AI interpretation of digital ecosystems.
          </p>

          <p className="text-base text-slate-400 leading-relaxed">
            We're experimenting with multi-source data fusion — blending user behavior, SDK adoption, 
            and global trends to forecast the future of digital products.
          </p>

          {/* Research Areas */}
          <div className="grid gap-4 sm:grid-cols-3 pt-4">
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-2xl mb-2">🔮</div>
              <div className="text-xs font-medium text-slate-300">Predictive Modeling</div>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-2xl mb-2">🔗</div>
              <div className="text-xs font-medium text-slate-300">Cross-Platform Analytics</div>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-2xl mb-2">🧬</div>
              <div className="text-xs font-medium text-slate-300">Data Fusion</div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link
              href="/insights/research"
              className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Explore Research</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Card>
    </Section>
  );
}

