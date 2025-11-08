// components/market/CategoryHeatmapSection.tsx
import { getMarketCategoriesData } from "@/lib/mockDataService";

export function CategoryHeatmapSection() {
  const categories = getMarketCategoriesData();

  return (
    <section className="border border-slate-700 rounded-2xl bg-slate-900/60 p-4 md:p-5">
      <h2 className="text-sm md:text-base font-semibold text-slate-100 mb-2">
        Category heatmap
      </h2>
      <p className="text-xs md:text-sm text-slate-400 mb-4">
        Snapshot of key categories by app count, installs and 7-day growth.
        A full visual heatmap will replace this table later.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full text-xs md:text-sm">
          <thead className="text-slate-400 border-b border-slate-700">
            <tr>
              <th className="text-left py-2 pr-4">Category</th>
              <th className="text-right py-2 pr-4">Apps</th>
              <th className="text-right py-2 pr-4">Installs (M)</th>
              <th className="text-right py-2">7-day change</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => {
              const isUp = cat.growthPercent7d >= 0;
              const color = isUp ? "text-emerald-400" : "text-rose-400";
              const sign = isUp ? "+" : "";

              return (
                <tr key={cat.id} className="border-b border-slate-800 last:border-0">
                  <td className="py-2 pr-4 text-slate-100">{cat.name}</td>
                  <td className="py-2 pr-4 text-right text-slate-200">
                    {cat.appsCount.toLocaleString()}
                  </td>
                  <td className="py-2 pr-4 text-right text-slate-200">
                    {cat.installsMillions.toFixed(1)}
                  </td>
                  <td className={`py-2 text-right ${color}`}>
                    {sign}
                    {cat.growthPercent7d.toFixed(1)}%
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

