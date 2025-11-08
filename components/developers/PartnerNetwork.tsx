// components/developers/PartnerNetwork.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const partners = [
  { id: 1, name: "Google Play", icon: "📱", category: "App Store" },
  { id: 2, name: "Apple", icon: "🍎", category: "App Store" },
  { id: 3, name: "Galaxy Store", icon: "🌌", category: "App Store" },
  { id: 4, name: "Microsoft", icon: "🪟", category: "Platform" },
  { id: 5, name: "AWS Activate", icon: "☁️", category: "Infrastructure" },
  { id: 6, name: "IndieDev", icon: "🚀", category: "Incubator" },
  { id: 7, name: "Unity", icon: "🎮", category: "Game Engine" },
  { id: 8, name: "Firebase", icon: "🔥", category: "Backend" },
];

export function PartnerNetwork() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            Partner Network
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Trusted ecosystem partners supporting developers
          </p>
        </div>
        <Link
          href="/partners"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Partner with Us →
        </Link>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors group"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {partner.icon}
              </div>
              <div className="text-xs font-medium text-slate-200 text-center">
                {partner.name}
              </div>
              <div className="text-[10px] text-slate-500 text-center mt-0.5">
                {partner.category}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <p className="text-xs text-slate-500 text-center">
        Building the app economy together · Interested in partnering? <Link href="/partners" className="text-cyan-400 hover:text-cyan-300">Get in touch</Link>
      </p>
    </section>
  );
}

