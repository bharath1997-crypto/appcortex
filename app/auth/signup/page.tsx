// app/auth/signup/page.tsx
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-50">Create account</h1>
        <p className="mt-2 text-sm text-slate-300">
          Join AppCortex to unlock deeper analytics, AI summaries, and custom
          dashboards.
        </p>
      </div>

      <form className="space-y-4 border border-slate-800 rounded-2xl p-4 bg-slate-900/50">
        <div className="space-y-1 text-sm">
          <label className="block text-slate-200" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
            placeholder="Bharath Nidumolu"
          />
        </div>

        <div className="space-y-1 text-sm">
          <label className="block text-slate-200" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
            placeholder="you@company.com"
          />
        </div>

        <div className="space-y-1 text-sm">
          <label className="block text-slate-200" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-cyan-500 text-slate-900 text-sm font-medium py-2 hover:bg-cyan-400 transition-colors"
        >
          Create account
        </button>
      </form>

      <p className="text-sm text-slate-300">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-cyan-300 hover:text-cyan-200">
          Sign in
        </Link>
      </p>
    </div>
  );
}
