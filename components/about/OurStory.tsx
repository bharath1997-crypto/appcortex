// components/about/OurStory.tsx
import { Section, Card } from "@/components/ui";

const timeline = [
  {
    year: "2023",
    milestone: "Concept born to democratize app market data.",
    icon: "💡",
  },
  {
    year: "2024",
    milestone: "Beta launch of AppCortex Index (ACX) — live app economy tracker.",
    icon: "🚀",
  },
  {
    year: "2025",
    milestone: "Added AI forecasting engine and developer community hub.",
    icon: "🧠",
  },
  {
    year: "2026",
    milestone: "Expansion into API + enterprise solutions.",
    icon: "🌍",
  },
];

export function OurStory() {
  return (
    <Section title="Our Story" description="The journey from concept to global platform">
      <div className="relative">
        {/* Timeline Line (Desktop) */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-20"></div>

        {/* Timeline Items */}
        <div className="grid md:grid-cols-4 gap-6">
          {timeline.map((item, index) => (
            <Card key={index} hover className="p-6 text-center relative">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 text-3xl mb-4 relative z-10">
                {item.icon}
              </div>

              {/* Year */}
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-2">
                {item.year}
              </div>

              {/* Milestone */}
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.milestone}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 rounded-xl border border-slate-800 bg-slate-900/40 text-center">
        <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          We started with a simple question: <span className="font-semibold text-cyan-400 italic">"Why should understanding the app market be harder than understanding the stock market?"</span>
        </p>
      </div>
    </Section>
  );
}

