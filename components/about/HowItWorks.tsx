// components/about/HowItWorks.tsx
import { Section, Card } from "@/components/ui";

const steps = [
  {
    number: "1️⃣",
    title: "Collect",
    description: "We aggregate public app-store data, SDK footprints, and trend signals from verified sources.",
    icon: "📥",
  },
  {
    number: "2️⃣",
    title: "Analyze",
    description: "AI models clean, cluster, and predict category growth using billions of datapoints.",
    icon: "🧠",
  },
  {
    number: "3️⃣",
    title: "Visualize",
    description: "We transform data into live dashboards, heatmaps, and insights accessible to everyone.",
    icon: "📊",
  },
];

export function HowItWorks() {
  return (
    <Section title="How AppCortex Works" description="The engine behind our intelligence platform">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={index} hover className="p-6 relative overflow-hidden">
            {/* Step Number Badge */}
            <div className="absolute top-4 right-4 text-4xl opacity-20">
              {step.icon}
            </div>

            <div className="relative">
              <div className="text-3xl mb-3">{step.number}</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Arrow (not on last item) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-cyan-400 text-2xl z-10">
                →
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-slate-500">
          All data is ethically sourced and updated every 45 minutes.
        </p>
      </div>
    </Section>
  );
}

