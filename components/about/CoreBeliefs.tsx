// components/about/CoreBeliefs.tsx
import { Section, Card } from "@/components/ui";

const beliefs = [
  {
    icon: "🔓",
    title: "Transparency",
    description: "Data should be open, accessible, and unbiased.",
  },
  {
    icon: "⚡",
    title: "Empowerment",
    description: "Developers and small teams deserve enterprise-level intelligence.",
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "Continuous evolution through AI, automation, and collaboration.",
  },
];

export function CoreBeliefs() {
  return (
    <Section title="Our Vision & Core Beliefs" description="What drives AppCortex forward">
      <div className="grid gap-6 md:grid-cols-3">
        {beliefs.map((belief, index) => (
          <Card key={index} className="p-6 text-center">
            <div className="text-5xl mb-4">{belief.icon}</div>
            <h3 className="text-lg font-semibold text-slate-50 mb-2">
              {belief.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {belief.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-xl border border-slate-800 bg-slate-900/40 text-center">
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
          "AppCortex isn't just tracking apps — we're mapping digital behavior, category evolution, 
          and the future of creation itself."
        </p>
      </div>
    </Section>
  );
}

