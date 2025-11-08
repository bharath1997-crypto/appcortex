// components/about/DataGlance.tsx
"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui";

const metrics = [
  { label: "Apps Tracked", value: 3214892, suffix: "" },
  { label: "Developers Monitored", value: 1103442, suffix: "" },
  { label: "Countries Covered", value: 120, suffix: "+" },
  { label: "Categories Indexed", value: 189, suffix: "" },
  { label: "Data Refresh Cycle", value: 45, suffix: " min – 3 hr", isTime: true },
];

export function DataGlance() {
  const [counters, setCounters] = useState(metrics.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = metrics.map((metric, index) => {
      const increment = metric.value / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= metric.value) {
          currentValue = metric.value;
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(currentValue);
          return newCounters;
        });
      }, stepDuration);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <Section title="Our Data at a Glance" description="Scale and credibility in numbers">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-950/60 text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-2">
              {metric.isTime ? (
                <>
                  {counters[index]}
                  <span className="text-lg">{metric.suffix}</span>
                </>
              ) : (
                <>
                  {counters[index].toLocaleString()}
                  {metric.suffix}
                </>
              )}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-center">
        <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          "We're building the world's fastest updating app intelligence system — because speed is the new insight."
        </p>
      </div>
    </Section>
  );
}

