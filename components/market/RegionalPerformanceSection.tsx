// components/market/RegionalPerformanceSection.tsx
import { getMarketRegions } from "@/lib/marketApi";

export async function RegionalPerformanceSection() {
  const regions = await getMarketRegions();

  return (
    <section className="border border-slate-700 rounded-2xl bg-slate-900/60 p-4 md:p-5">
      <h2 className="text-sm md:text-base font-semibold text-slate-100 mb-2">
        Regional performance
      </h2>
      <p className="text-xs md:text-sm text-slate-400 mb-4">
        Regional indices showing how different app markets are moving today.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full text-xs md:text-sm">
          <thead className="text-slate-400 border-b border-slate-700">
            <tr>
              <th className="text-left py-2 pr-4">Region</th>
              <th className="text-right py-2 pr-4">Index</th>
              <th className="text-right py-2 pr-4">Change</th>
              <th className="text-right py-2 pr-4">% Chg</th>
              <th className="text-left py-2 pr-0">Top category / app</th>
            </tr>
          </thead>
          <tbody>
            {regions.map((region) => {
              const isUp = region.changePercent >= 0;
              const color = isUp ? "text-emerald-400" : "text-rose-400";
              const sign = isUp ? "+" : "";

              return (
                <tr
                  key={region.id}
                  className="border-b border-slate-800 last:border-0"
                >
                  <td className="py-2 pr-4 text-slate-100">{region.name}</td>
                  <td className="py-2 pr-4 text-right text-slate-200">
                    {region.indexValue.toFixed(1)}
                  </td>
                  <td className={`py-2 pr-4 text-right ${color}`}>
                    {sign}
                    {region.changePercent.toFixed(2)}
                  </td>
                  <td className={`py-2 pr-4 text-right ${color}`}>
                    {sign}
                    {region.changePercent.toFixed(2)}%
                  </td>
                  <td className="py-2 pr-0 text-slate-200">
                    <span className="text-slate-400 text-[11px] uppercase tracking-wide">
                      {region.topCategory}
                    </span>{" "}
                    • {region.topApp}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

