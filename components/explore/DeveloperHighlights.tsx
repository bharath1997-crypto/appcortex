// components/explore/DeveloperHighlights.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const developers = [
  {
    id: "nova-studios",
    name: "Nova Studios",
    country: "India",
    flag: "🇮🇳",
    apps: 5,
    installs: "20M+",
    topApp: "AI Mirror",
  },
  {
    id: "vortex-games",
    name: "Vortex Games",
    country: "USA",
    flag: "🇺🇸",
    apps: 12,
    installs: "40M+",
    topApp: "Battle Arena",
  },
  {
    id: "fitai-labs",
    name: "FitAI Labs",
    country: "UK",
    flag: "🇬🇧",
    apps: 3,
    installs: "5M+",
    topApp: "FitAI Coach",
  },
  {
    id: "finlens-studio",
    name: "FinLens Studio",
    country: "Singapore",
    flag: "🇸🇬",
    apps: 2,
    installs: "8M+",
    topApp: "FinLens Budget",
  },
];

export function DeveloperHighlights() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
        Developer Highlights
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {developers.map((dev) => (
          <Link key={dev.id} href={`/developer/${dev.id}`}>
            <Card hover className="p-4 h-full">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{dev.flag}</span>
                <span className="text-xs text-slate-400">{dev.country}</span>
              </div>

              <h3 className="text-sm font-semibold text-slate-50 mb-1">
                {dev.name}
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400"># Apps:</span>
                  <span className="text-slate-200 font-medium">{dev.apps}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Installs:</span>
                  <span className="text-slate-200 font-medium">{dev.installs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Top App:</span>
                  <span className="text-cyan-400 font-medium truncate ml-2">
                    {dev.topApp}
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800">
                <span className="text-xs text-cyan-400">
                  View Profile →
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

