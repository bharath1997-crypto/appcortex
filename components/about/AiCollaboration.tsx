// components/about/AiCollaboration.tsx
import { Section, Card } from "@/components/ui";

const capabilities = [
  "Natural-language summarization for reviews & ratings",
  "Predictive install growth forecasting",
  "AI-powered feature suggestion for developers",
  "Automated sentiment heatmaps for categories",
];

export function AiCollaboration() {
  return (
    <Section title="AI + Human Collaboration" description="The intelligence behind the platform">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Text */}
        <div className="space-y-6">
          <p className="text-base text-slate-300 leading-relaxed">
            AppCortex uses machine learning to identify emerging app trends, predict growth cycles, 
            and highlight opportunities long before they appear on traditional leaderboards.
          </p>

          <div className="space-y-3">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-slate-400">{capability}</span>
              </div>
            ))}
          </div>

          <Card className="p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/30">
            <div className="flex items-start gap-3">
              <div className="text-2xl">💡</div>
              <p className="text-sm text-slate-300 italic">
                "Our AI doesn't replace human intuition — it amplifies it."
              </p>
            </div>
          </Card>
        </div>

        {/* Right: Visual */}
        <Card className="p-8 flex items-center justify-center bg-gradient-to-br from-slate-900/60 to-slate-950/60 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            <div className="absolute top-10 left-10 text-6xl">🤖</div>
            <div className="absolute bottom-10 right-10 text-6xl">👤</div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">🤝</div>
          </div>

          <div className="relative text-center space-y-4">
            <div className="text-6xl mb-4">🧠⚡🔍</div>
            <h3 className="text-xl font-bold text-slate-50">
              AI-Powered Analytics
            </h3>
            <p className="text-sm text-slate-400 max-w-xs mx-auto">
              Machine learning models trained on billions of data points deliver insights in real-time
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}

