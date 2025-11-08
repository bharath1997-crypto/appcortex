// components/market/SdkTrendsSection.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const sdkData = [
  { name: "Firebase", share: 76, change: 1.4, appsCount: "820K", icon: "🔥" },
  { name: "Unity", share: 42, change: 0.9, appsCount: "215K", icon: "🎮" },
  { name: "AdMob", share: 38, change: 2.3, appsCount: "190K", icon: "📱" },
  { name: "React Native", share: 35, change: 0.8, appsCount: "160K", icon: "⚛️" },
  { name: "Flutter", share: 28, change: 3.1, appsCount: "142K", icon: "💙" },
];

export function SdkTrendsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
        SDK & Library Usage Trends
      </h2>

      <Card className="p-4 md:p-5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-slate-400 border-b border-slate-700">
              <tr>
                <th className="text-left py-3 pr-4">SDK / Library</th>
                <th className="text-right py-3 pr-4">Market Share</th>
                <th className="text-right py-3 pr-4">Δ (7D)</th>
                <th className="text-right py-3">Used In</th>
              </tr>
            </thead>
            <tbody>
              {sdkData.map((sdk) => {
                const isUp = sdk.change >= 0;
                return (
                  <tr
                    key={sdk.name}
                    className="border-b border-slate-800 last:border-0 hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{sdk.icon}</span>
                        <span className="font-medium text-slate-100">{sdk.name}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                            style={{ width: `${sdk.share}%` }}
                          />
                        </div>
                        <span className="text-slate-200 font-medium w-10 text-right">
                          {sdk.share}%
                        </span>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-right">
                      <span
                        className={`font-semibold ${
                          isUp ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {isUp ? "+" : ""}
                        {sdk.change.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 text-right text-slate-300 font-medium">
                      {sdk.appsCount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="text-center">
        <Link
          href="/market/libraries"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Explore SDK Trends →
        </Link>
      </div>
    </section>
  );
}

