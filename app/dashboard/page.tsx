// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-50">
        Your AppCortex dashboard
      </h1>
      <p className="text-sm text-slate-300 max-w-2xl">
        This is the logged-in mode. In the real product, this page will show
        your watchlists, saved apps, alerts, and personalized AI summaries.
      </p>

      <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40 text-sm text-slate-300">
        For now this is just a placeholder, but the URL structure is ready:
        <br />
        <code className="text-xs text-slate-400">/dashboard</code> → private
        user view.
      </div>
    </div>
  );
}
