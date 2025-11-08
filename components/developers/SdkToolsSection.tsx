// components/developers/SdkToolsSection.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const sdks = [
  { name: "Firebase", icon: "🔥", adoption: 76, trend: 1.4, examples: "TikTok, Calm, Spotify" },
  { name: "Unity", icon: "🎮", adoption: 42, trend: 0.9, examples: "PUBG, Subway Surfers" },
  { name: "AdMob", icon: "📱", adoption: 38, trend: 2.3, examples: "Candy Crush, Temple Run" },
  { name: "React Native", icon: "⚛️", adoption: 35, trend: 0.8, examples: "Facebook, Coinbase" },
  { name: "Flutter", icon: "💙", adoption: 28, trend: 3.1, examples: "Alibaba, BMW" },
];

export function SdkToolsSection() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            Developer Tools & SDKs
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Most popular tools used by top developers
          </p>
        </div>
        <Link
          href="/market/libraries"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Explore SDK Trends →
        </Link>
      </div>

      <Card className="p-4 md:p-5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-slate-400 border-b border-slate-700">
              <tr>
                <th className="text-left py-3 pr-4">SDK</th>
                <th className="text-right py-3 pr-4">Adoption</th>
                <th className="text-right py-3 pr-4">Trend</th>
                <th className="text-left py-3">Example Apps</th>
              </tr>
            </thead>
            <tbody>
              {sdks.map((sdk) => {
                const isUp = sdk.trend >= 0;
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
                            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                            style={{ width: `${sdk.adoption}%` }}
                          />
                        </div>
                        <span className="text-slate-200 font-medium w-10 text-right">
                          {sdk.adoption}%
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
                        {sdk.trend.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 text-slate-400 text-xs">
                      {sdk.examples}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <p className="text-xs text-slate-500 text-center">
        Public view shows top SDKs · Sign in for detailed SDK analytics and comparisons
      </p>
    </section>
  );
}

