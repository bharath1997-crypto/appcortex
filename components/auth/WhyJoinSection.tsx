// components/auth/WhyJoinSection.tsx
import Link from "next/link";

const benefits = [
  {
    icon: "📊",
    title: "Advanced Insights",
    description: "Get hourly app analytics and trend charts.",
  },
  {
    icon: "🤖",
    title: "AI Forecasting",
    description: "Predict app performance before it peaks.",
  },
  {
    icon: "🧩",
    title: "Developer Tools",
    description: "Compare competitors, SDKs, and categories easily.",
  },
];

export function WhyJoinSection() {
  return (
    <section className="mt-12 pt-12 border-t border-slate-800">
      <h3 className="text-xl font-bold text-slate-50 mb-2 text-center">
        Why Join AppCortex?
      </h3>
      <p className="text-sm text-slate-400 text-center mb-6">
        Unlock powerful tools to track and grow in the app economy
      </p>

      <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 transition-colors"
          >
            <div className="text-3xl mb-3">{benefit.icon}</div>
            <h4 className="text-sm font-semibold text-slate-100 mb-1">
              {benefit.title}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          href="/pricing"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
        >
          <span>See all plans & features</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

