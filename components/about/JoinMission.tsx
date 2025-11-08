// components/about/JoinMission.tsx
import { Button } from "@/components/ui";
import Link from "next/link";

export function JoinMission() {
  return (
    <div className="border border-cyan-500/30 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 p-8 md:p-12 text-center">
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 text-3xl mb-6">
        🌟
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4">
        Join Our Mission
      </h2>

      <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
        We're building the world's most intelligent, open, and inclusive app analytics ecosystem. 
        Whether you're a developer, analyst, or investor — you're already part of this transformation.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild variant="primary" className="px-8 py-3">
          <Link href="/auth">
            Create Free Account
          </Link>
        </Button>
        <Button asChild variant="outline" className="px-8 py-3">
          <Link href="/contact">
            Partner With Us
          </Link>
        </Button>
      </div>

      <p className="text-xs text-slate-500 mt-6">
        No credit card required • Join 10,000+ developers and investors
      </p>
    </div>
  );
}

