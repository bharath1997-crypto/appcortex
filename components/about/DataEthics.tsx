// components/about/DataEthics.tsx
import { Section, Card } from "@/components/ui";
import Link from "next/link";

const principles = [
  {
    icon: "🔒",
    title: "Secure Data Processing",
    description: "TLS 1.3 encryption, ISO27001 certified infrastructure",
  },
  {
    icon: "🧭",
    title: "Transparent Methodology",
    description: "No scraping of personal data, all sources publicly disclosed",
  },
  {
    icon: "📊",
    title: "Aggregated Insights Only",
    description: "No individual app user tracking, privacy-first analytics",
  },
  {
    icon: "🌍",
    title: "Global Compliance",
    description: "GDPR, CCPA, and HIPAA compliant operations",
  },
];

export function DataEthics() {
  return (
    <Section title="Data Ethics & Privacy" description="Trust through transparency and responsible data use">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle, index) => (
          <Card key={index} className="p-5 text-center">
            <div className="text-4xl mb-3">{principle.icon}</div>
            <h3 className="text-sm font-semibold text-slate-100 mb-2">
              {principle.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {principle.description}
            </p>
          </Card>
        ))}
      </div>

      <Card className="p-6 mt-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-emerald-500/30">
        <div className="flex items-start gap-4">
          <div className="text-3xl flex-shrink-0">🛡️</div>
          <div className="flex-1">
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              "We believe responsible data use is the foundation of digital intelligence."
            </p>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Read our full Data Ethics Policy</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Card>
    </Section>
  );
}

